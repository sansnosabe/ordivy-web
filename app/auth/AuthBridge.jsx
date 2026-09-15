"use client";

import { useEffect, useState } from "react";

import styles from "./auth.module.css";

export default function AuthBridge({ mode = "confirmation" }) {
  const [deepLink, setDeepLink] = useState(mode === "recovery" ? "ordivy://auth/reset-password" : "ordivy://auth/callback");

  useEffect(() => {
    const path = mode === "recovery" ? "reset-password" : "callback";
    setDeepLink(`ordivy://auth/${path}${window.location.search}${window.location.hash}`);
  }, [mode]);

  const recovery = mode === "recovery";
  return (
    <main className={styles.page}>
      <section className={styles.card}>
        <div className={styles.mark}>O</div>
        <p className={styles.eyebrow}>TU CUENTA ORDIVY</p>
        <h1>{recovery ? "Cambia tu contraseña en Ordivy" : "Correo confirmado"}</h1>
        <p className={styles.lead}>
          {recovery
            ? "Abre la aplicación para elegir una contraseña nueva de forma segura."
            : "Tu dirección de correo ya está verificada. Puedes continuar en la aplicación."}
        </p>
        <a className={styles.primary} href={deepLink}>{recovery ? "Abrir Ordivy" : "Continuar en Ordivy"}</a>
        <p className={styles.note}>
          {recovery
            ? "Si estás en un ordenador, abre este mismo correo en tu móvil para continuar de forma segura."
            : "Si estás en un ordenador, ya puedes cerrar esta pestaña e iniciar sesión en Ordivy desde tu móvil."}
        </p>
        <a className={styles.home} href="/">Volver a ordivy.app</a>
      </section>
    </main>
  );
}
