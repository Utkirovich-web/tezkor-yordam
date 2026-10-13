// Domen tayyor bo‘lgach shu yerda almashtiring (yoki NEXT_PUBLIC_SITE_URL orqali bering).
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://utkirovich-web.github.io/tezkor-yordam";

// GitHub Pages’da "/tezkor-yordam", lokalda "" (next.config.ts bilan bir xil)
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const SITE_NAME = "Tezkor Yordam";

export const SITE_TITLE =
  "Tezkor Yordam — tez tibbiy yordamni bir tugma bilan chaqiring";

export const SITE_DESCRIPTION =
  "Tezkor Yordam ilovasi orqali shoshilinch tibbiy yordamni (103) bitta SOS tugmasi bilan chaqiring va tez yordam mashinasining kelishini xaritada jonli kuzating. Toshkent pilot.";

export const APP_STORE_URL = "#";
export const GOOGLE_PLAY_URL = "#";

export const faqs = [
  {
    q: "Ilova 103 xizmatini almashtiradimi?",
    a: "Yo‘q. Ilova mavjud jarayonning sekin joylarini tezlashtiradi, shuningdek 103 ga to‘g‘ridan-to‘g‘ri qo‘ng‘iroq tugmasi doim zaxirada turadi.",
  },
  {
    q: "Boshqa odam uchun chaqirish mumkinmi?",
    a: "Ha. Ota-onangiz, farzandingiz, tanishingiz yoki begona uchun chaqirishingiz mumkin. Bemor boshqa joyda bo‘lsa, manzilni xaritada belgilaysiz.",
  },
  {
    q: "Face ID yuzimni saqlaydimi?",
    a: "Yo‘q. Tekshiruvni telefonning o‘zi bajaradi, yuz ma’lumoti telefondan chiqmaydi.",
  },
  {
    q: "Qayerda ishlaydi?",
    a: "Hozircha Toshkent shahridagi pilot hududda, hamkor klinikalar brigadalari bilan.",
  },
];
