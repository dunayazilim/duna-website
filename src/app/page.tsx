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
    footer: "© 2026, Duna Yazılım",
    cookieNotice: "Bu site analitik için çerez kullanmaktadır.",
    cookieAccept: "Kabul Et",
    cookieReject: "Reddet",
    contactEmail: "E-posta gönder",
    contactMeeting: "Toplantı planla",
    hero: "Erken aşama B2B SaaS girişimleri için mobil MVP'ler. 8 haftada teslim. Solo full-stack geliştirme, AB saat dilimi, kayıtlı Türk şirketi.",
    nav: {
      services: "Hizmetler",
      process: "Süreç",
      pricing: "Fiyatlar",
    },
    services: {
      label: "Hizmetler",
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
    caseStudies: {
      label: "Vaka Çalışmaları",
      mesh: {
        project: "Mesh — Budapeşte merkezli builder topluluğu için frontend, mobil ve AI mühendisliği",
        problem: "Problem: Mesh, ürünleri geliştikçe web frontend'leri, mobil uygulamalar ve AI tabanlı özellikler için esnek mühendislik kapasitesine ihtiyaç duyuyordu.",
        solution: "Çözüm: React/Next.js frontend'leri, React Native mobil uygulamalar ve AI entegrasyonlarını kapsayan birden fazla proje teslim edildi. Stack: React, Next.js, React Native, OpenAI API'leri.",
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
    pricing: {
      label: "Fiyatlandırma",
      tierS: {
        label: "Tier S — Lite MVP",
        features: ["4-6 hafta", "3-5 temel ekran", "Temel backend", "App Store yayını"],
        price: "€4.000 – €10.000",
      },
      tierM: {
        label: "Tier M — Full MVP",
        popular: "En Popüler",
        features: [
          "8-12 hafta",
          "8-12 ekran",
          "Tam backend & yönetim paneli",
          "Push bildirimleri",
          "Ödeme entegrasyonu",
          "30 gün lansman sonrası destek",
        ],
        price: "€15.000 – €20.000",
      },
      tierL: {
        label: "Tier L — Production-Ready",
        features: [
          "14-16 hafta",
          "Ölçeklenebilir mimari",
          "Gelişmiş entegrasyonlar",
          "90 gün destek",
          "Performans + güvenlik denetimi",
        ],
        price: "€30.000 – €50.000",
      },
    },
    about: {
      label: "Hakkımda",
      body: "Macaristan, Budapeşte merkezli solo full-stack geliştirici. Avrupa ve ABD genelindeki erken aşama B2B SaaS girişimleri için mobil MVP'lere odaklanıyorum.\n\nTürkiye'de kayıtlı şirket — AB-KDV uyumlu faturalandırma, AB ajanslarına göre %30-40 daha düşük ücretler, AB ajansı ek yükü olmadan. Upwork'te Top Rated Plus (2024'ten beri), 10+ tamamlanmış proje.\n\nAB saat dilimi (CET). Avrupa ve Orta Doğu genelinde yüz yüze görüşmeler için müsait.",
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
    hero: "Mobile MVPs for early-stage B2B SaaS startups. Shipped in 8 weeks. Solo full-stack development, EU timezone, registered Turkish company.",
    nav: {
      services: "Services",
      process: "Process",
      pricing: "Pricing",
    },
    services: {
      label: "Services",
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
    caseStudies: {
      label: "Case Studies",
      mesh: {
        project: "Mesh — Frontend, mobile, and AI engineering for a Budapest builder community",
        problem: "Problem: Mesh needed flexible engineering capacity across web frontends, mobile apps, and AI-powered features as their products evolved.",
        solution: "Solution: Delivered multiple projects spanning React/Next.js frontends, React Native mobile apps, and AI integrations. Stack: React, Next.js, React Native, OpenAI APIs.",
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
    pricing: {
      label: "Pricing",
      tierS: {
        label: "Tier S — Lite MVP",
        features: ["4-6 weeks", "3-5 core screens", "Basic backend", "App Store deployment"],
        price: "€4,000 – €10,000",
      },
      tierM: {
        label: "Tier M — Full MVP",
        popular: "Most Popular",
        features: [
          "8-12 weeks",
          "8-12 screens",
          "Full backend & admin panel",
          "Push notifications",
          "Payment integration",
          "30 days post-launch support",
        ],
        price: "€15,000 – €20,000",
      },
      tierL: {
        label: "Tier L — Production-Ready",
        features: [
          "14-16 weeks",
          "Scale-ready architecture",
          "Advanced integrations",
          "90 days support",
          "Performance + security audit",
        ],
        price: "€30,000 – €50,000",
      },
    },
    about: {
      label: "About",
      body: "Solo full-stack developer based in Budapest, Hungary. Specializing in mobile MVPs for early-stage B2B SaaS startups across Europe and the US.\n\nCompany registered in Turkey — EU-VAT compliant invoicing, 30-40% lower rates than EU agencies without the EU agency overhead. Top Rated Plus on Upwork (since 2024) with 10+ projects delivered.\n\nEU timezone (CET). Available for in-person meetings across Europe and the Middle East.",
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
          <a href="#process">{t.nav.process}</a>
          <a href="#pricing">{t.nav.pricing}</a>
        </nav>
        <div className="site-actions">
          <button className="nav-button" onClick={openContact}>{t.contact}</button>
          <button
            className="nav-button"
            onClick={() => window.open("https://play.google.com/store/apps/dev?id=5556725446422818374", "_blank")}
          >
            Google Play
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

        <section id="pricing" className="section">
          <p className="section-label">{t.pricing.label}</p>
          <div className="pricing-tiers">
            <div className="pricing-tier">
              <p className="pricing-tier-label">{t.pricing.tierS.label}</p>
              <ul className="pricing-tier-features">
                {t.pricing.tierS.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <p className="pricing-tier-price">{t.pricing.tierS.price}</p>
            </div>
            <div className="pricing-tier">
              <span className="pricing-tier-popular">{t.pricing.tierM.popular}</span>
              <p className="pricing-tier-label">{t.pricing.tierM.label}</p>
              <ul className="pricing-tier-features">
                {t.pricing.tierM.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <p className="pricing-tier-price">{t.pricing.tierM.price}</p>
            </div>
            <div className="pricing-tier">
              <p className="pricing-tier-label">{t.pricing.tierL.label}</p>
              <ul className="pricing-tier-features">
                {t.pricing.tierL.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <p className="pricing-tier-price">{t.pricing.tierL.price}</p>
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
