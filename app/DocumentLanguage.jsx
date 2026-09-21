"use client";

import { useEffect } from "react";

export default function DocumentLanguage({ lang }) {
  useEffect(() => {
    const previous = document.documentElement.lang;
    document.documentElement.lang = lang;
    return () => {
      document.documentElement.lang = previous || "es";
    };
  }, [lang]);

  return null;
}
