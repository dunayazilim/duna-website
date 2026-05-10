/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";

const texts = {
  tr: {
    contact: "İletişim",
    footer: "© 2026, Duna Yazılım",
    notFound: "Bulunamadı",
    contactEmail: "E-posta gönder",
    contactMeeting: "Toplantı planla",
  },
  en: {
    contact: "Contact",
    footer: "© 2026, Duna Yazılım",
    notFound: "Not Found",
    contactEmail: "Send an email",
    contactMeeting: "Schedule a meeting",
  },
};

export default function NotFound() {
  const [lang, setLang] = useState<"tr" | "en">("en");
  const [contactOpen, setContactOpen] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const t = texts[lang];

  useEffect(() => {
    if (contactOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => document.body.classList.remove("no-scroll");
  }, [contactOpen]);

  return (
    <>
      <header className="site-header">
        <nav className="site-nav" />
        <div className="site-actions">
          <button
            className="contact-button"
            onClick={() => {
              setContactOpen(true);
              setShowCalendar(false);
            }}
          >
            {t.contact}
          </button>
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
        </div>
      </header>

      <main>
        <section className="hero">
          <a href="/" style={{ display: "contents" }}>
            <img
              src="/Logo.png"
              alt="Duna Yazılım Danışmanlık Logo"
              className="main-logo"
            />
          </a>
          <p className="not-found-text">{t.notFound}</p>
        </section>
      </main>

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
