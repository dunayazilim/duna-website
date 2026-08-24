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

type AppItem = {
  name: string;
  tagline: string;
  body: string;
  platform: string;
  href: string;
  linkLabel: string;
  icon: string;
};

/* Add an app: drop one entry into each language array below.
   `icon` is optional — set it to a path in /public (e.g. "/viewmet-icon.png"). */
const apps: Record<"tr" | "en", AppItem[]> = {
  tr: [
    {
      name: "ViewMET",
      tagline: "Metropolitan Museum koleksiyonu cebinizde",
      body: "Metropolitan Sanat Müzesi'nin tüm kataloğunu keşfetmek için bir iOS uygulaması: yüksek çözünürlüklü 400.000'den fazla eser, küratör notları, departmana göre gezinme, sanatçı, dönem, teknik ve kültüre göre arama, kendi kaydettiğiniz koleksiyonlar.",
      platform: "iOS",
      href: "https://apps.apple.com/us/app/viewmet-metropolitan-museum/id6761077023",
      linkLabel: "App Store",
      icon: "",
    },
  ],
  en: [
    {
      name: "ViewMET",
      tagline: "The Met's collection, in your pocket",
      body: "An iOS app for exploring the Metropolitan Museum of Art's full catalog — 400,000+ works in high resolution, with curator notes, browsing by department, search by artist, period, medium, or culture, and collections you save yourself.",
      platform: "iOS",
      href: "https://apps.apple.com/us/app/viewmet-metropolitan-museum/id6761077023",
      linkLabel: "App Store",
      icon: "",
    },
  ],
};

const texts = {
  tr: {
    contact: "İletişim",
    footer: "© 2026, Duna Yazılım",
    cookieNotice: "Bu site analitik için çerez kullanmaktadır.",
    cookieAccept: "Kabul Et",
    cookieReject: "Reddet",
    contactEmail: "E-posta gönder",
    contactMeeting: "Toplantı planla",
    hero: "Biz bir uygulama stüdyosuyuz. Kendi uygulamalarımızı tasarlayıp yayınlıyoruz — aynı ekip ve aynı standartla erken aşama ekipler için de ürün geliştiriyoruz. Çoğu zaman 8 hafta içinde kullanıcılarınızın eline ulaşır. Full-stack, Avrupa saat dilimi.",
    nav: {
      services: "Hizmetler",
      apps: "Uygulamalar",
      process: "Süreç",
    },
    services: {
      label: "Hizmetler",
      intro: "Müşteri projeleri için uçtan uca ürün geliştirme.",
      mobile: {
        title: "Mobil MVP Geliştirme",
        body: "React Native iOS + Android. 8-12 haftada teslim, tasarımdan lansmana tam süreç.",
      },
      backend: {
        title: "Backend & API",
        body: "Node.js / TypeScript backend, veritabanı tasarımı, üçüncü taraf entegrasyonları, deployment.",
      },
      fullstack: {
        title: "Full-Stack Web Uygulamaları",
        body: "Next.js + Postgres web uygulamaları, yönetim panelleri, dashboard'lar.",
      },
    },
    apps: {
      label: "Uygulamalarımız",
      intro: "Kendi adımıza tasarlayıp geliştirdiğimiz ve mağazalarda yayınladığımız uygulamalar. Müşteri projelerine giren ekip ve standart da aynı.",
    },
    caseStudies: {
      label: "Vaka Çalışmaları",
      mesh: {
        project: "Mesh — Budapeşte merkezli builder topluluğu için frontend, mobil ve ürün mühendisliği",
        problem: "Problem: Mesh, ürünleri geliştikçe web frontend'leri, mobil uygulamalar ve yeni ürün özellikleri için esnek mühendislik kapasitesine ihtiyaç duyuyordu.",
        solution: "Çözüm: React/Next.js frontend'leri, React Native mobil uygulamalar ve birkaç OpenAI destekli özelliği kapsayan birden fazla proje teslim edildi. Stack: React, Next.js, React Native, OpenAI API'leri.",
        outcome: "Sonuç: Birden fazla ürün yüzeyinde devam eden mühendislik ortaklığı.",
      },
      student: {
        project: "Student Tutoring — Üniversite öğrencileri için akran-akran özel ders pazaryeri",
        problem: "Problem: Üst sınıf öğrencileri ile özel ders arayan alt sınıf öğrencilerini buluşturmak; rezervasyon, ödeme ve planlama içeren bir pazaryeri gerektiriyordu.",
        solution: "Çözüm: Eğitmen profilleri, ders tarama, rezervasyon akışı, Stripe ödemeler ve çoklu dil (EN/HU) ile uçtan uca pazaryeri inşa edildi. Stack: Next.js, Postgres, Stripe.",
        outcome: "Sonuç: 50+ öğrenciye ulaşıldı, 4.9 ortalama puan.",
      },
      autoflow: {
        project: "AutoFlow — AI destekli YouTube içerik otomasyon platformu",
        problem: "Problem: Birden fazla YouTube kanalını yönetmek; araştırma, senaryo, ses, görsel, montaj, küçük resim ve yükleme gibi 7 farklı içerik aşamasında freelancer koordinasyonu gerektiriyordu.",
        solution: "Çözüm: Her aşamada AI entegrasyonlu, eksiksiz pipeline otomasyon platformu inşa edildi. Çoklu kanal yönetimi için tek dashboard, ekip üyeleri için rol tabanlı erişim. Stack: Next.js, Postgres, OpenAI entegrasyonu, video işleme pipeline.",
        outcome: "Sonuç: Bir haftalık koordinasyon işini günde iki kez izlenen bir pipeline'a indiriyor.",
      },
    },
    process: {
      label: "Süreç",
      step1: {
        title: "Adım 1 — Keşif (1. Hafta)",
        body: "30 dakikalık keşif görüşmesi. Kapsam, takvim ve yaklaşım 48 saat içinde netleşir. Detaylı teklif iletilir.",
      },
      step2: {
        title: "Adım 2 — Geliştirme (2-7. Haftalar)",
        body: "Önce backend, sonra mobil arayüz. Haftalık demolar. Tam şeffaflık için Linear/Notion erişimi. Async-öncelikli iletişim.",
      },
      step3: {
        title: "Adım 3 — Cilalama & Lansman (8. Hafta)",
        body: "QA, performans denetimi, App Store + Play Store yayını, analitik kurulumu.",
      },
      step4: {
        title: "Adım 4 — Lansman Sonrası Destek (30 gün)",
        body: "Hata düzeltmeleri, performans optimizasyonları, gerçek kullanıcılardan gelen ilk özellik talepleri.",
      },
    },
    about: {
      label: "Hakkımızda",
      body: "Duna Yazılım, Budapeşte ve İstanbul merkezli bir uygulama stüdyosudur. Bir yandan kendi uygulamalarımızı geliştirip kendi adımızla yayınlıyoruz, bir yandan da erken aşama B2B SaaS şirketleri için ürün geliştiriyoruz — tasarım, geliştirme ve lansman uçtan uca bizde.\n\nKendi uygulamalarımızı yayınlamak, müşterilerimizden istediğimiz kararların aynısını bizim de vermemiz demek: önce ne çıkacak, ana ekranda yer etmeyi ne hak ediyor, ilk haftadan sonra gerçekten ne kullanılıyor. Avrupa ve ABD'deki girişimciler için 10'dan fazla ürün teslim ettik; çalışma baştan sona uygulamalı ve deneyimli ilerliyor — doğrudan iletişim, her hafta görebileceğiniz ilerleme ve yalnızca demoda iyi görünmek için değil, gerçek kullanıcılarla öğrenmek üzere kurgulanmış bir ürün.\n\nOrta Avrupa saat diliminde (CET) çalışıyoruz ve Avrupa, Orta Doğu, Kanada ve ABD'de yüz yüze görüşmelere açığız.",
    },
    cta: {
      heading: "Başlamaya hazır mısınız?",
      button: "Keşif görüşmesi planlayın →",
    },
  },
  en: {
    contact: "Contact",
    footer: "© 2026, Duna Yazılım",
    cookieNotice: "This site uses cookies for analytics.",
    cookieAccept: "Accept",
    cookieReject: "Reject",
    contactEmail: "Send an email",
    contactMeeting: "Schedule a meeting",
    hero: "We're an app studio. We design, build, and publish our own apps — and we bring the same team and the same standards to products for early-stage teams, usually in your users' hands within 8 weeks. Full-stack, European time zone.",
    nav: {
      services: "Services",
      apps: "Apps",
      process: "Process",
    },
    services: {
      label: "Services",
      intro: "End-to-end product work for client teams.",
      mobile: {
        title: "Mobile MVP Development",
        body: "React Native iOS + Android. 8-12 week delivery, full design-to-launch.",
      },
      backend: {
        title: "Backend & API",
        body: "Node.js / TypeScript backends, database design, third-party integrations, deployment.",
      },
      fullstack: {
        title: "Full-Stack Web Apps",
        body: "Next.js + Postgres web applications, admin panels, dashboards.",
      },
    },
    apps: {
      label: "Our Apps",
      intro: "Products we design, build, and ship to the stores under our own name. Client work gets the same team and the same standards.",
    },
    caseStudies: {
      label: "Case Studies",
      mesh: {
        project: "Mesh — Frontend, mobile, and product engineering for a Budapest builder community",
        problem: "Problem: Mesh needed flexible engineering capacity across web frontends, mobile apps, and new product features as their products evolved.",
        solution: "Solution: Delivered multiple projects spanning React/Next.js frontends, React Native mobile apps, and a few OpenAI-backed features. Stack: React, Next.js, React Native, OpenAI APIs.",
        outcome: "Outcome: Ongoing engineering partnership across multiple product surfaces.",
      },
      student: {
        project: "Student Tutoring — Peer-to-peer tutoring marketplace for university students",
        problem: "Problem: Connecting upper-year students with lower-year students seeking tutoring required a marketplace with booking, payments, and scheduling.",
        solution: "Solution: Built an end-to-end marketplace with tutor profiles, class browsing, booking flow, Stripe payments, and multi-language support (EN/HU). Stack: Next.js, Postgres, Stripe.",
        outcome: "Outcome: 50+ students helped, 4.9 average rating.",
      },
      autoflow: {
        project: "AutoFlow — AI-powered YouTube content automation platform",
        problem: "Problem: Managing multiple YouTube channels required coordinating freelancers across 7 content stages — research, scripts, voice, visuals, assembly, thumbnails, upload.",
        solution: "Solution: Built a complete pipeline automation platform with AI integration at every stage. Single dashboard for managing multiple channels, role-based access for team members. Stack: Next.js, Postgres, OpenAI integration, video processing pipeline.",
        outcome: "Outcome: Reduces a week of coordination work to a pipeline monitored twice a day.",
      },
    },
    process: {
      label: "Process",
      step1: {
        title: "Step 1 — Discovery (Week 1)",
        body: "30-minute discovery call. Scope, timeline, and approach finalized within 48 hours. Detailed proposal delivered.",
      },
      step2: {
        title: "Step 2 — Build (Weeks 2-7)",
        body: "Backend first, then mobile UI. Weekly demos. Linear/Notion access for full transparency. Async-first communication.",
      },
      step3: {
        title: "Step 3 — Polish & Launch (Week 8)",
        body: "QA, performance audit, App Store + Play Store submission, analytics setup.",
      },
      step4: {
        title: "Step 4 — Post-Launch Support (30 days)",
        body: "Bug fixes, performance optimizations, first feature requests from real users.",
      },
    },
    about: {
      label: "About",
      body: "Duna Yazılım is an app studio based in Budapest and Istanbul. We build our own apps and publish them under our own name, and we build products for early-stage B2B SaaS companies — design, engineering, and launch handled end to end.\n\nRunning our own apps means we live with the same decisions we ask clients to make: what ships first, what earns a place on the home screen, what actually gets used after week one. We've delivered 10+ products for founders across Europe and the US, and the work stays hands-on and senior throughout — direct communication, progress you can see every week, and a product built to learn from real users, not just to demo well.\n\nWe work on Central European time (CET) and are available for in-person meetings across Europe, the Middle East, Canada, and the US.",
    },
    cta: {
      heading: "Ready to ship?",
      button: "Schedule a discovery call →",
    },
  },
};

export default function Home() {
  const [lang, setLang] = useState<"tr" | "en">("en");
  const [cookieConsent, setCookieConsent] = useState<"accepted" | "rejected" | null>(null);
  const [consentLoaded, setConsentLoaded] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const t = texts[lang];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (contactOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => document.body.classList.remove("no-scroll");
  }, [contactOpen]);

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

  const openContact = () => {
    setContactOpen(true);
    setShowCalendar(false);
  };

  const openCalendar = () => {
    setContactOpen(true);
    setShowCalendar(true);
  };

  return (
    <>
      <header className="site-header">
        <nav className="site-nav">
          <a href="#services">{t.nav.services}</a>
          <a href="#apps">{t.nav.apps}</a>
          <a href="#process">{t.nav.process}</a>
        </nav>
        <div className="site-actions">
          <button className="nav-button" onClick={openContact}>{t.contact}</button>
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
          <img src="/Logo.png" alt="Duna Yazılım Danışmanlık Logo" className="main-logo" />
          <p className="about-text">{t.hero}</p>
          <a
            href="#services"
            className={`scroll-cue${scrolled ? " scroll-cue--hidden" : ""}`}
            aria-label="Scroll to content"
          >
            ↓
          </a>
        </section>

        <section id="services" className="section">
          <p className="section-label">{t.services.label}</p>
          <p className="section-intro">{t.services.intro}</p>
          <div className="services-list">
            <div className="service">
              <p className="service-title">{t.services.mobile.title}</p>
              <p>{t.services.mobile.body}</p>
            </div>
            <div className="service">
              <p className="service-title">{t.services.backend.title}</p>
              <p>{t.services.backend.body}</p>
            </div>
            <div className="service">
              <p className="service-title">{t.services.fullstack.title}</p>
              <p>{t.services.fullstack.body}</p>
            </div>
          </div>
        </section>

        <section id="apps" className="section">
          <p className="section-label">{t.apps.label}</p>
          <p className="section-intro">{t.apps.intro}</p>
          <div className="apps-list">
            {apps[lang].map((app) => (
              <article className="app-card" key={app.name}>
                {app.icon ? (
                  <img src={app.icon} alt={app.name} className="app-icon" />
                ) : null}
                <p className="app-name">{app.name}</p>
                <p className="app-tagline">{app.tagline}</p>
                <p>{app.body}</p>
                <p className="app-meta">{app.platform}</p>
                <a
                  href={app.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="app-link"
                >
                  {app.linkLabel} ↗
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="case-studies" className="section">
          <p className="section-label">{t.caseStudies.label}</p>
          <div className="case-studies">
            <article className="case-study">
              <img src="/mesh_logo.png" alt="Mesh" className="case-study-logo" />
              <a
                href="https://growmesh.io"
                target="_blank"
                rel="noopener noreferrer"
                className="case-study-link"
              >
                {t.caseStudies.mesh.project} ↗
              </a>
              <p>{t.caseStudies.mesh.problem}</p>
              <p>{t.caseStudies.mesh.solution}</p>
              <p>{t.caseStudies.mesh.outcome}</p>
            </article>
            <article className="case-study">
              <img src="/student-logo.png" alt="Student Tutoring" className="case-study-logo" />
              <a
                href="https://studenttutoring.hu"
                target="_blank"
                rel="noopener noreferrer"
                className="case-study-link"
              >
                {t.caseStudies.student.project} ↗
              </a>
              <p>{t.caseStudies.student.problem}</p>
              <p>{t.caseStudies.student.solution}</p>
              <p>{t.caseStudies.student.outcome}</p>
            </article>
            <article className="case-study">
              <img src="/autoflow_logo.png" alt="AutoFlow" className="case-study-logo" />
              <a
                href="https://autoflow.video"
                target="_blank"
                rel="noopener noreferrer"
                className="case-study-link"
              >
                {t.caseStudies.autoflow.project} ↗
              </a>
              <p>{t.caseStudies.autoflow.problem}</p>
              <p>{t.caseStudies.autoflow.solution}</p>
              <p>{t.caseStudies.autoflow.outcome}</p>
            </article>
          </div>
        </section>

        <section id="process" className="section">
          <p className="section-label">{t.process.label}</p>
          <div className="process-list">
            <div className="process-step">
              <p className="process-step-title">{t.process.step1.title}</p>
              <p>{t.process.step1.body}</p>
            </div>
            <div className="process-step">
              <p className="process-step-title">{t.process.step2.title}</p>
              <p>{t.process.step2.body}</p>
            </div>
            <div className="process-step">
              <p className="process-step-title">{t.process.step3.title}</p>
              <p>{t.process.step3.body}</p>
            </div>
            <div className="process-step">
              <p className="process-step-title">{t.process.step4.title}</p>
              <p>{t.process.step4.body}</p>
            </div>
          </div>
        </section>

        <section className="section about-section">
          <p className="section-label">{t.about.label}</p>
          {t.about.body.split("\n\n").map((paragraph, i) => (
            <p key={i} className="about-text" style={i === 0 ? { marginTop: 0 } : undefined}>{paragraph}</p>
          ))}
        </section>

        <section className="section cta-section">
          <p className="cta-heading">{t.cta.heading}</p>
          <button className="contact-button" onClick={openCalendar}>
            {t.cta.button}
          </button>
        </section>
      </main>

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
