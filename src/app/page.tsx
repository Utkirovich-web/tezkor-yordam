import { Icon, type IconName } from "@/components/Icon";
import { StoreButtons } from "@/components/StoreButtons";
import {
  APP_STORE_URL,
  GOOGLE_PLAY_URL,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
  faqs,
} from "@/lib/site";

const steps = [
  {
    n: "01",
    title: "Bosib turing",
    text: "SOS tugmasini 2 soniya bosib turing. Cho‘ntakda tasodifan bosilib ketmaydi, yuborilgandan keyin esa 5 soniya bekor qilish mumkin.",
  },
  {
    n: "02",
    title: "Holatni tanlang",
    text: "Qizil, sariq yoki yashil. Qizil holatda hech narsa so‘ralmaydi, chaqiruv GPS bilan darhol ketadi.",
  },
  {
    n: "03",
    title: "Kuzating",
    text: "Mashinani xaritada ko‘ring, yetib kelish vaqti doim ko‘rinib turadi va kerak bo‘lsa haydovchiga qo‘ng‘iroq qiling.",
  },
];

const features: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "pulse",
    title: "Bitta tugma",
    text: "Chaqiruv GPS va profilingiz bilan darhol dispetcherga boradi, manzilni tushuntirib vaqt yo‘qotmaysiz.",
  },
  {
    icon: "users",
    title: "Boshqa odam uchun ham",
    text: "Ota-onangiz, farzandingiz yoki begona uchun chaqiring. Bemor boshqa joyda bo‘lsa, manzilni xaritada belgilang.",
  },
  {
    icon: "pin",
    title: "Aniq manzil",
    text: "GPS va mo‘ljal (kirish, qavat) tufayli brigada adashmay, to‘g‘ri joyga yetib boradi.",
  },
  {
    icon: "clock",
    title: "Jonli kuzatuv",
    text: "Mashinaning harakati va yetib kelish vaqtini real vaqtda ko‘rasiz, noaniqlik va vahima kamayadi.",
  },
  {
    icon: "shield",
    title: "OneID bilan tasdiqlangan",
    text: "Chaqiruvchi shaxsi tasdiqlanadi, shuning uchun yolg‘on chaqiruvlar kamayadi va haqiqiy chaqiruvlarga imkon qoladi.",
  },
  {
    icon: "lock",
    title: "Ma’lumotingiz himoyada",
    text: "Tibbiy ma’lumot faqat dispetcher va brigadaga ko‘rinadi, Face ID yuz ma’lumotingizni telefonda qoldiradi.",
  },
];

const levels = [
  {
    tag: "1-daraja · zudlik bilan",
    name: "Qizil",
    bg: "bg-level-red text-white",
    lead: "Hayot uchun xavf.",
    text: "Hushsizlik, kuchli qon ketishi. Savol yo‘q: chaqiruv darhol ketadi, dispetcher o‘zi qo‘ng‘iroq qiladi.",
  },
  {
    tag: "2-daraja · o‘rtacha",
    name: "Sariq",
    bg: "bg-level-yellow text-ink",
    lead: "Jiddiy holat.",
    text: "Kuchli og‘riq, jarohat. Nima bezovta qilayotgani ro‘yxatdan tanlanadi, brigada tayyorgarlik ko‘radi.",
  },
  {
    tag: "3-daraja · shoshilinchlik past",
    name: "Yashil",
    bg: "bg-level-green text-white",
    lead: "Shoshilinch, lekin xavf past.",
    text: "Belgilar va qachondan beri ekani batafsil yoziladi.",
  },
];

const security: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "shield",
    title: "OneID orqali kirish",
    text: "Shaxsingiz davlat yagona identifikatsiya tizimi orqali tasdiqlanadi.",
  },
  {
    icon: "face",
    title: "Face ID yoki barmoq izi",
    text: "Yuz ma’lumoti telefondan chiqmaydi, serverga faqat “tasdiqlandi” natijasi boradi. Qizil holatda tasdiq chaqiruvni to‘xtatmaydi.",
  },
  {
    icon: "lock",
    title: "Tasodifiy bosilishdan himoya",
    text: "Tugmani 2 soniya bosib turish va yuborilgandan keyin 5 soniyalik bekor qilish imkoni.",
  },
];

const navLinks = [
  { href: "#qanday-ishlaydi", label: "Qanday ishlaydi" },
  { href: "#imkoniyatlar", label: "Imkoniyatlar" },
  { href: "#xavfsizlik", label: "Xavfsizlik" },
];

// Google uchun tuzilgan ma’lumot: ilova, tashkilot va savol-javoblar
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/icon.svg`,
      areaServed: { "@type": "City", name: "Toshkent" },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      inLanguage: "uz",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "MobileApplication",
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      operatingSystem: "iOS, Android",
      applicationCategory: "MedicalApplication",
      inLanguage: "uz",
      offers: { "@type": "Offer", price: "0", priceCurrency: "UZS" },
      downloadUrl: [APP_STORE_URL, GOOGLE_PLAY_URL].filter((u) => u !== "#"),
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-center gap-2.5 font-bold ${className}`}>
      <span className="grid h-8 w-8 place-items-center rounded-lg bg-sos text-white">
        <Icon name="pulse" className="h-4 w-4" />
      </span>
      {SITE_NAME}
    </span>
  );
}

function SectionHeading({
  eyebrow,
  eyebrowColor,
  title,
  text,
}: {
  eyebrow: string;
  eyebrowColor: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="max-w-xl">
      <p className={`eyebrow ${eyebrowColor}`}>{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {text && <p className="mt-3 text-slate-600">{text}</p>}
    </div>
  );
}

function PhoneMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[290px]" aria-hidden="true">
      {/* telefon yonidagi ingichka chiziq */}
      <div className="absolute top-1/2 left-full hidden h-px w-[50vw] bg-sos/40 lg:block" />

      <div className="relative rounded-[2.5rem] border-[7px] border-ink bg-slate-50 px-6 pt-6 pb-8 shadow-2xl shadow-slate-900/20">
        <div className="flex justify-center">
          <span className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-[11px] font-semibold text-sky-700">
            OneID tasdiqlangan
          </span>
        </div>

        <div className="mt-4 grid grid-cols-2 rounded-xl bg-slate-200/70 p-1 text-[11px] font-semibold">
          <span className="rounded-lg bg-white py-2 text-center shadow-sm">
            O‘zim uchun
          </span>
          <span className="py-2 text-center text-slate-500">Boshqa odam</span>
        </div>

        <div className="mt-8 flex flex-col items-center">
          <span className="grid h-32 w-32 place-items-center rounded-full bg-sos text-3xl font-bold text-white shadow-[0_10px_40px_rgba(220,38,38,0.45)]">
            SOS
          </span>
          <p className="mt-5 text-xs font-semibold">2 soniya bosib turing</p>
          <p className="mt-1 text-[10px] font-medium text-emerald-700">
            Joylashuv aniq
          </p>
        </div>

        <div className="mt-14 flex justify-center">
          <span className="rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-[10px] font-medium text-slate-600">
            103 ga qo‘ng‘iroq
          </span>
        </div>
      </div>

      <div className="absolute top-14 -right-4 rounded-xl bg-white px-3 py-2 shadow-xl shadow-slate-900/10 sm:-right-10">
        <p className="font-mono text-[9px] tracking-wider text-sos uppercase">
          Qizil · hayot uchun xavf
        </p>
        <p className="text-xs font-bold">Chaqiruv yuborildi</p>
      </div>

      <div className="absolute bottom-20 -left-4 rounded-xl bg-brand px-3 py-2 text-white shadow-xl shadow-emerald-900/20 sm:-left-8">
        <p className="font-mono text-[9px] tracking-wider uppercase opacity-80">
          Yetib kelish
        </p>
        <p className="text-base font-bold">4 daqiqa</p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Favqulodda holat banneri */}
      <div className="bg-red-100 px-4 py-2 text-center text-xs font-semibold text-red-800">
        Hozir favqulodda holatmi? Darhol{" "}
        <a href="tel:103" className="underline underline-offset-2">
          103 ga qo‘ng‘iroq qiling
        </a>
        .
      </div>

      <header className="sticky top-0 z-30 border-b border-slate-100 bg-white/90 backdrop-blur">
        <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
          <a href="#" aria-label={`${SITE_NAME} bosh sahifa`}>
            <Logo />
          </a>
          <div className="flex items-center gap-6 text-sm">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="hidden text-slate-700 hover:text-ink md:inline"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#yuklab-olish"
              className="rounded-lg bg-brand px-4 py-2 font-bold text-white transition-colors hover:bg-brand-dark"
            >
              Yuklab olish
            </a>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section className="overflow-hidden bg-gradient-to-br from-emerald-100 via-sky-100 to-white">
          <div className="mx-auto grid max-w-6xl items-center gap-16 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-20">
            <div>
              <p className="eyebrow text-sos">Tez tibbiy yordam · Toshkent pilot</p>
              <h1 className="mt-4 text-5xl leading-[1.05] font-extrabold tracking-tight sm:text-6xl">
                Har bir soniya —<br />
                <span className="text-sos">hayot.</span>
              </h1>
              <p className="mt-5 max-w-md text-lg text-slate-600">
                Shoshilinch tibbiy yordamni bitta tugma bilan chaqiring va
                mashinaning kelishini xaritada jonli kuzating.
              </p>
              <div className="mt-8">
                <StoreButtons />
              </div>
              <ul className="mt-6 flex flex-wrap gap-2 text-xs font-semibold text-emerald-800">
                {["OneID bilan tasdiqlangan", "Face ID himoyasi", "103 zaxira tugmasi"].map(
                  (b) => (
                    <li
                      key={b}
                      className="rounded-full border border-emerald-200 bg-white px-3 py-1.5"
                    >
                      {b}
                    </li>
                  ),
                )}
              </ul>
            </div>
            <PhoneMockup />
          </div>
        </section>

        {/* Qanday ishlaydi */}
        <section id="qanday-ishlaydi" className="scroll-mt-16 py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHeading
              eyebrow="Qanday ishlaydi"
              eyebrowColor="text-brand"
              title="Uch qadam. Boshqa hech narsa."
              text="Ilova shoshilinch vaqtda bo‘lishi kerak bo‘lgan narsani qoldirdi: aniq, tez va tushunarli."
            />
            <ol className="mt-10 grid gap-4 md:grid-cols-3">
              {steps.map((s) => (
                <li
                  key={s.n}
                  className="rounded-2xl border border-slate-100 bg-white p-6 shadow-lg shadow-slate-900/5"
                >
                  <span className="font-mono text-2xl text-brand">{s.n}</span>
                  <h3 className="mt-4 font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Imkoniyatlar */}
        <section id="imkoniyatlar" className="scroll-mt-16 bg-emerald-50 py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHeading
              eyebrow="Imkoniyatlar"
              eyebrowColor="text-brand"
              title="Tezlik uchun yaratilgan"
            />
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((f) => (
                <article
                  key={f.title}
                  className="rounded-2xl bg-white p-6 shadow-lg shadow-emerald-900/5"
                >
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-emerald-100 text-brand">
                    <Icon name={f.icon} className="h-4 w-4" />
                  </span>
                  <h3 className="mt-5 font-bold">{f.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{f.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Uch holat */}
        <section className="py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHeading
              eyebrow="Uch holat"
              eyebrowColor="text-sos"
              title="Siz tanlaysiz, tizim shunga moslashadi"
            />
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {levels.map((l) => (
                <article
                  key={l.name}
                  className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-lg shadow-slate-900/5"
                >
                  <div className={`px-5 py-5 ${l.bg}`}>
                    <p className="font-mono text-[9px] tracking-wider uppercase opacity-80">
                      {l.tag}
                    </p>
                    <h3 className="mt-1 text-2xl font-bold">{l.name}</h3>
                  </div>
                  <p className="px-5 py-5 text-sm text-slate-600">
                    <strong className="text-ink">{l.lead}</strong> {l.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Xavfsizlik */}
        <section
          id="xavfsizlik"
          className="scroll-mt-16 bg-gradient-to-br from-emerald-700 to-teal-700 py-20 text-white"
        >
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2">
            <div>
              <p className="eyebrow text-emerald-100">Xavfsizlik</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Ma’lumotingiz sizniki, faqat zarur odamga ko‘rinadi
              </h2>
              <p className="mt-4 max-w-md text-emerald-50">
                Tibbiy ma’lumotingiz shifrlanadi va faqat chaqiruv paytida
                dispetcher hamda brigadaga ko‘rinadi.
              </p>
            </div>
            <ul className="space-y-3">
              {security.map((s) => (
                <li
                  key={s.title}
                  className="flex gap-4 rounded-xl border border-white/20 bg-white/15 p-4"
                >
                  <Icon name={s.icon} className="mt-0.5 h-5 w-5 shrink-0" />
                  <div>
                    <h3 className="text-sm font-bold">{s.title}</h3>
                    <p className="mt-1 text-xs text-emerald-50">{s.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Savol-javob */}
        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <SectionHeading
              eyebrow="Savol-javob"
              eyebrowColor="text-sky-700"
              title="Ko‘p so‘raladigan savollar"
            />
            <div className="mt-8 space-y-3">
              {faqs.map((f) => (
                <details
                  key={f.q}
                  className="rounded-2xl bg-white shadow-lg shadow-slate-900/5"
                >
                  <summary className="flex cursor-pointer items-center gap-3 px-5 py-4 text-sm font-bold">
                    <span className="faq-arrow text-[10px] transition-transform">▶</span>
                    {f.q}
                  </summary>
                  <p className="px-5 pb-5 pl-11 text-sm text-slate-600">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Yuklab olish */}
        <section
          id="yuklab-olish"
          className="scroll-mt-16 bg-gradient-to-br from-red-600 to-orange-500 py-20 text-white"
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 sm:px-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="eyebrow text-red-100">Hoziroq yuklab oling</p>
              <h2 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
                Yordam bir tugma uzoqda.
              </h2>
              <p className="mt-4 max-w-sm text-red-50">
                Kerak bo‘lmasin, lekin tayyor tursin. Ilovani oldindan o‘rnating
                va profilingizni to‘ldirib qo‘ying.
              </p>
              <div className="mt-8">
                <StoreButtons variant="cta" />
              </div>
            </div>
            {/* TODO: haqiqiy QR kod rasmini qo‘ying */}
            <div className="flex h-32 w-32 shrink-0 items-center gap-2 rounded-2xl border-2 border-dashed border-white/70 p-3 text-center text-[10px]">
              <span className="text-xs font-bold">[QR KOD]</span>
              <span>Telefon kamerasi bilan skanerlang</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-ink py-6 text-sm text-slate-400">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 sm:px-6 md:flex-row md:items-center md:justify-between">
          <span className="font-bold text-white">{SITE_NAME}</span>
          {/* TODO: aloqa ma’lumotlarini qo‘ying */}
          <span>Aloqa: [telefon raqam] · [elektron pochta]</span>
          <span>© 2026 {SITE_NAME} · Toshkent pilot</span>
        </div>
      </footer>
    </>
  );
}
