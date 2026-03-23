/* eslint-disable @next/next/no-img-element */
"use client";

import { getAnalytics, isSupported } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { useEffect, useState } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyB77qPy_rqeP_UWaK9ssz11Kg69D8KyY44",
  authDomain: "duna-website.firebaseapp.com",
  projectId: "duna-website",
  storageBucket: "duna-website.firebasestorage.app",
  messagingSenderId: "965661187474",
  appId: "1:965661187474:web:76dd17b2ccaabbd8bb754b",
  measurementId: "G-BDY66DFHQ1",
};

const app = initializeApp(firebaseConfig);

const texts = {
  tr: {
    contact: "İletişim",
    footer: "© 2026, Duna Yazılım & Danışmanlık",
    trustedBy: "Partnerlerimiz",
    cookieNotice: "Bu site analitik için çerez kullanmaktadır.",
    cookieAccept: "Kabul Et",
    cookieReject: "Reddet",
  },
  en: {
    contact: "Contact",
    footer: "© 2026, Duna Yazılım & Danışmanlık",
    trustedBy: "Trusted By",
    cookieNotice: "This site uses cookies for analytics.",
    cookieAccept: "Accept",
    cookieReject: "Reject",
  },
};

export default function Home() {
  const [lang, setLang] = useState<"tr" | "en">("en");
  const [cookieConsent, setCookieConsent] = useState<"accepted" | "rejected" | null>(null);
  const [consentLoaded, setConsentLoaded] = useState(false);
  const t = texts[lang];

  useEffect(() => {
    const stored = localStorage.getItem("cookie-consent");
    if (stored === "accepted" || stored === "rejected") {
      setCookieConsent(stored);
    }
    setConsentLoaded(true);
  }, []);

  useEffect(() => {
    if (cookieConsent === "accepted") {
      isSupported().then((yes) => {
        if (yes) getAnalytics(app);
      });
    }
  }, [cookieConsent]);

  const handleConsent = (choice: "accepted" | "rejected") => {
    localStorage.setItem("cookie-consent", choice);
    setCookieConsent(choice);
  };

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
      <div className="main-content">
        <img src="/Logo.png" alt="Duna Yazılım Danışmanlık Logo" className="main-logo" />
        <section className="trusted-by">
          <p className="trusted-by-label">{t.trustedBy}</p>
          <div className="partner-logos">
            <a href="https://growmesh.io" target="_blank" rel="noopener noreferrer">
              <img src="/mesh_logo.png" alt="Mesh" className="partner-logo" />
            </a>
          </div>
        </section>
      </div>
      {consentLoaded && cookieConsent === null && (
        <div className="cookie-banner">
          <span>{t.cookieNotice}</span>
          <button onClick={() => handleConsent("accepted")}>{t.cookieAccept}</button>
          <span>/</span>
          <button onClick={() => handleConsent("rejected")}>{t.cookieReject}</button>
        </div>
      )}
      <footer>{t.footer}</footer>
    </>
  );
}
