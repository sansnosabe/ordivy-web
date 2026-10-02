"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { passwordError, readRecoveryLink, recoveryRequest } from "./recovery.mjs";

import styles from "./auth.module.css";

export default function AuthBridge({ mode = "confirmation" }) {
  const [confirmation, setConfirmation] = useState(null);
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    new URLSearchParams(window.location.hash.slice(1)).forEach((value, key) => params.set(key, value));
    setConfirmation({
      failed: Boolean(params.get("error") || params.get("error_description")),
      hasSession: Boolean(params.get("access_token") && params.get("refresh_token")),
      hasCode: Boolean(params.get("code")),
    });
  }, []);
  if (mode === "recovery") return <PasswordRecovery />;
  const canContinue = confirmation && !confirmation.failed && (confirmation.hasSession || confirmation.hasCode);
  const deepLink = canContinue ? "ordivy://auth/callback" : "ordivy://account";

  function openApp(event) {
    event.preventDefault();
    window.location.href = canContinue ? `${deepLink}${window.location.search}${window.location.hash}` : deepLink;
  }

  return (
    <main className={styles.page}>
      <section className={styles.card}>
        <div className={styles.mark}>O</div>
        <p className={styles.eyebrow}>TU CUENTA ORDIVY</p>
        <h1>{!confirmation ? "Comprobando el enlace…" : confirmation.failed ? "Este enlace ya no es válido" : confirmation.hasSession ? "Correo confirmado" : "Continúa en tu cuenta"}</h1>
        <p className={styles.lead}>
          {!confirmation ? "Solo tardará un momento." : confirmation.failed
            ? "El enlace puede haber caducado o haberse utilizado. Prueba a iniciar sesión en Ordivy. Si todavía te pide verificar el correo, solicita uno nuevo y abre el enlace más reciente."
            : confirmation.hasSession ? "Tu dirección de correo ya está verificada. Puedes continuar en la aplicación."
              : confirmation.hasCode ? "Abre Ordivy para completar la confirmación de tu cuenta."
                : "Este enlace no contiene una sesión de confirmación. Inicia sesión en Ordivy; si aún falta verificar tu correo, solicita un nuevo email de confirmación."}
        </p>
        {confirmation ? <a className={styles.primary} href={deepLink} onClick={openApp}>{canContinue ? "Continuar en Ordivy" : "Ir a mi cuenta"}</a> : null}
        <p className={styles.note}>Si estás en un ordenador, abre Ordivy en tu móvil para continuar.</p>
        <Link className={styles.home} href="/">Volver a ordivy.app</Link>
      </section>
    </main>
  );
}

function PasswordRecovery() {
  const token = useRef(null);
  const initialized = useRef(false);
  const [status, setStatus] = useState("checking");
  const [password, setPassword] = useState("");
  const [confirmation, setConfirmation] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!initialized.current) {
      token.current = readRecoveryLink(window.location.href);
      initialized.current = true;
      window.history.replaceState(null, "", window.location.pathname);
    }
    if (!token.current) { setStatus("invalid"); return undefined; }
    const controller = new AbortController();
    recoveryRequest(token.current, { signal: controller.signal })
      .then(() => { if (!controller.signal.aborted) setStatus("ready"); })
      .catch((failure) => {
        if (controller.signal.aborted) return;
        setStatus(failure.message === "invalid_link" ? "invalid" : "unavailable");
      });
    return () => controller.abort();
  }, []);

  async function savePassword(event) {
    event.preventDefault();
    if (status !== "ready") return;
    const validation = passwordError(password, confirmation);
    if (validation) {
      setError(validation === "mismatch" ? "Las contraseñas no coinciden." : "Usa una contraseña de al menos 8 caracteres.");
      return;
    }
    setError("");
    setStatus("saving");
    try {
      await recoveryRequest(token.current, { password });
      token.current = null;
      setPassword("");
      setConfirmation("");
      setStatus("success");
    } catch (failure) {
      if (failure.message === "invalid_link") { token.current = null; setStatus("invalid"); return; }
      setStatus("ready");
      setError(failure.message === "same_password" ? "Elige una contraseña distinta de la anterior."
        : failure.message === "weak_password" ? "Esta contraseña no cumple los requisitos. Elige una más segura."
          : "No se pudo guardar la contraseña. Comprueba tu conexión y vuelve a intentarlo.");
    }
  }

  const busy = status === "saving";
  return (
    <main className={styles.page}>
      <section className={styles.card}>
        <div className={styles.mark}>O</div>
        <p className={styles.eyebrow}>TU CUENTA ORDIVY</p>
        <h1>{status === "success" ? "Contraseña actualizada" : "Elige una contraseña nueva"}</h1>
        {status === "checking" ? <output className={styles.lead}>Comprobando tu enlace…</output> : null}
        {status === "invalid" ? <p className={styles.lead} role="alert">Este enlace no es válido o ha caducado. Solicita un nuevo correo de recuperación desde Ordivy y abre el enlace más reciente.</p> : null}
        {status === "unavailable" ? <p className={styles.lead} role="alert">No se pudo comprobar el enlace. Revisa tu conexión y vuelve a abrir el enlace del correo.</p> : null}
        {status === "ready" || busy ? (
          <form onSubmit={savePassword}>
            <p className={styles.lead}>Puedes cambiarla aquí desde el móvil o el ordenador.</p>
            <label style={{ display: "block", textAlign: "left", marginBottom: 18 }}>
              Contraseña nueva
              <input type="password" autoComplete="new-password" minLength={8} required value={password} onChange={(event) => setPassword(event.target.value)} disabled={busy} style={passwordInputStyle} />
            </label>
            <label style={{ display: "block", textAlign: "left", marginBottom: 18 }}>
              Repite la contraseña
              <input type="password" autoComplete="new-password" minLength={8} required value={confirmation} onChange={(event) => setConfirmation(event.target.value)} disabled={busy} style={passwordInputStyle} />
            </label>
            {error ? <p role="alert">{error}</p> : null}
            <button type="submit" disabled={busy} className={styles.primary} style={{ width: "100%", border: 0, cursor: busy ? "wait" : "pointer", fontSize: 16 }}>{busy ? "Guardando…" : "Guardar contraseña"}</button>
          </form>
        ) : null}
        {status === "success" ? <>
          <output className={styles.lead}>Ya puedes iniciar sesión en Ordivy con tu contraseña nueva.</output>
          <a className={styles.primary} href="ordivy://account">Abrir Ordivy</a>
        </> : null}
        <Link className={styles.home} href="/">Volver a ordivy.app</Link>
      </section>
    </main>
  );
}

const passwordInputStyle = { display: "block", width: "100%", boxSizing: "border-box", marginTop: 8, padding: 14, borderRadius: 12, border: "1px solid #A77999", background: "#17151A", color: "#FFFFFF", fontSize: 16 };
