import test from "node:test";
import assert from "node:assert/strict";
import { passwordError, readRecoveryLink, recoveryRequest } from "./recovery.mjs";

test("accepts recovery tokens in query and fragment, rejects other or failed links", () => {
  assert.equal(readRecoveryLink("https://ordivy.app/auth/reset-password#type=recovery&access_token=test-token"), "test-token");
  assert.equal(readRecoveryLink("https://ordivy.app/auth/reset-password?type=recovery&access_token=test-token"), "test-token");
  for (const suffix of ["", "#type=signup&access_token=test-token", "#type=recovery", "#type=recovery&access_token=test-token&error=expired"]) {
    assert.equal(readRecoveryLink("https://ordivy.app/auth/reset-password" + suffix), null);
  }
});

test("requires matching passwords of at least eight characters", () => {
  assert.equal(passwordError("short", "short"), "weak_password");
  assert.equal(passwordError("example-password", "different-password"), "mismatch");
  assert.equal(passwordError("example-password", "example-password"), null);
});

test("validates the bearer session and submits only the password to the fixed Auth endpoint", async () => {
  const calls = [];
  const fetcher = async (url, options) => { calls.push({ url, options }); return { ok: true, json: async () => ({ id: "test-user" }) }; };
  await recoveryRequest("test-token", { fetcher });
  await recoveryRequest("test-token", { password: "example-password", fetcher });
  assert.equal(calls[0].url, "https://nrtprxhkvsjcnqkrfrpi.supabase.co/auth/v1/user");
  assert.equal(calls[0].options.method, "GET");
  assert.equal(calls[0].options.body, undefined);
  assert.equal(calls[1].options.method, "PUT");
  assert.deepEqual(JSON.parse(calls[1].options.body), { password: "example-password" });
  assert.equal(calls[1].options.headers.Authorization, "Bearer test-token");
  assert.equal(calls[1].options.referrerPolicy, "no-referrer");
});

test("missing and expired sessions cannot update a password; server policy failures are surfaced", async () => {
  let calls = 0;
  await assert.rejects(recoveryRequest(null, { fetcher: async () => { calls++; } }), /invalid_link/);
  assert.equal(calls, 0);
  for (const [status, code, expected] of [[401, "bad_jwt", "invalid_link"], [422, "weak_password", "weak_password"], [422, "same_password", "same_password"], [500, "internal", "request_failed"]]) {
    await assert.rejects(recoveryRequest("test-token", { password: "example-password", fetcher: async () => ({ ok: false, status, json: async () => ({ error_code: code }) }) }), new RegExp(expected));
  }
});
