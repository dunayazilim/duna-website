/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";

const texts = {
  tr: { contact: "İletişim", footer: "© 2026, Duna Yazılım" },
  en: { contact: "Contact", footer: "© 2026, Duna Yazılım" },
};

export default function Home() {
  const [lang, setLang] = useState<"tr" | "en">("en");
  const t = texts[lang];

  return (
    <>
      <div className="lang-switcher">
        <button
          onClick={() => setLang("en")}
          className={lang === "en" ? "lang-active" : ""}
        >
          EN
        </button>
        <span>/</span>
        <button
          onClick={() => setLang("tr")}
          className={lang === "tr" ? "lang-active" : ""}
        >
          TR
        </button>
      </div>
      <a href="mailto:emirsurmen@gmail.com" className="contact-button">{t.contact}</a>
      <img src="/Logo.png" alt="Duna Yazılım Danışmanlık Logo" />
      <footer>{t.footer}</footer>
    </>
  );
}
