/* eslint-disable @next/next/no-img-element */
"use client";

import { getAnalytics, isSupported } from "firebase/analytics";
import { getApps, initializeApp } from "firebase/app";
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

function getFirebaseApp() {
  return getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
}

const texts = {
  tr: {
    contact: "İletişim",
    footer: "© 2026, Duna Yazılım & Danışmanlık",
    about: "Yazılımı insan dokunuşuyla geliştiriyoruz; önce dinliyor, sonra ihtiyaçlarınıza gerçekten uyan çözümler üretiyoruz. Şablon yok, kestirme yol yok, sadece hedeflerinize göre şekillenen özenli çalışma.",
    trustedBy: "Partnerlerimiz",
    andMore: "ve daha fazlası...",
    cookieNotice: "Bu site analitik için çerez kullanmaktadır.",
    cookieAccept: "Kabul Et",
    cookieReject: "Reddet",
    contactEmail: "E-posta gönder",
    contactMeeting: "Toplantı planla",
  },
  en: {
    contact: "Contact",
    footer: "© 2026, Duna Yazılım & Danışmanlık",
    about: "We build software with a human touch; listening first, then crafting solutions that truly fit your needs. No templates, no shortcuts, just thoughtful work shaped around your goals.",
    trustedBy: "Trusted By",
    andMore: "and many more...",
    cookieNotice: "This site uses cookies for analytics.",
    cookieAccept: "Accept",
    cookieReject: "Reject",
    contactEmail: "Send an email",
    contactMeeting: "Schedule a meeting",
  },
};

export default function Home() {
  const [lang, setLang] = useState<"tr" | "en">("en");
  const [cookieConsent, setCookieConsent] = useState<"accepted" | "rejected" | null>(null);
  const [consentLoaded, setConsentLoaded] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const t = texts[lang];

  useEffect(() => {
    document.body.classList.add("no-scroll");
    return () => document.body.classList.remove("no-scroll");
  }, []);

  useEffect(() => {
    const stored = localStorage.getItem("cookie-consent");
    if (stored === "accepted" || stored === "rejected") {
      setCookieConsent(stored);
    }
    setConsentLoaded(true);
  }, []);

  useEffect(() => {
    if (cookieConsent === "accepted") {
      const app = getFirebaseApp();
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
      <button className="contact-button" onClick={() => { setContactOpen(true); setShowCalendar(false); }}>{t.contact}</button>
      <div className="main-content">
        <img src="/Logo.png" alt="Duna Yazılım Danışmanlık Logo" className="main-logo" />
        <p className="about-text">{t.about}</p>
        <section className="trusted-by">
          <p className="trusted-by-label">{t.trustedBy}</p>
          <div className="partner-logos">
            <a href="https://growmesh.io" target="_blank" rel="noopener noreferrer">
              <img src="/mesh_logo.png" alt="Mesh" className="partner-logo" />
            </a>
          </div>
          <p className="and-more">{t.andMore}</p>
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
      {contactOpen && (
        <div className="contact-overlay" onClick={() => setContactOpen(false)}>
          <div
            className={`contact-popup${showCalendar ? " contact-popup--calendar" : ""}`}
            onClick={(e) => e.stopPropagation()}
          >
            {!showCalendar ? (
              <div className="contact-options">
                <a href="mailto:emir@dunayazilim.com.tr" className="contact-option">
                  {t.contactEmail}
                </a>
                <span>/</span>
                <button className="contact-option" onClick={() => setShowCalendar(true)}>
                  {t.contactMeeting}
                </button>
              </div>
            ) : (
              <>
                <button className="contact-back" onClick={() => setShowCalendar(false)}>
                  &larr; {t.contact}
                </button>
                <iframe
                  src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3RQUrTEXdZy6rbzoR9KlpC6HBNIanWL9hMD4vdY7wvuAb2wJ5jQdq5X07hnCaoIB-ILBaa8ZGF?gv=true"
                  className="contact-calendar"
                  title="Schedule a meeting"
                />
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
