import AuthBridge from "../AuthBridge";

export const metadata = {
  title: "Correo confirmado",
  robots: { index: false, follow: false },
};

export default function ConfirmEmailPage() {
  return <AuthBridge mode="confirmation" />;
}
