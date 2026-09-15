import AuthBridge from "../AuthBridge";

export const metadata = {
  title: "Recuperar contraseña | Ordivy",
  robots: { index: false, follow: false },
};

export default function ResetPasswordPage() {
  return <AuthBridge mode="recovery" />;
}
