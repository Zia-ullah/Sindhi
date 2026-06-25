document.addEventListener("DOMContentLoaded", function () {
  const greetings = {
    ar: "أهلاً وسهلاً",
    de: "Willkommen",
    en: "Welcome",
    fr: "Bienvenue",
    es: "Bienvenido",
    pt: "Bem-vindo",
    ru: "Добро пожаловать",
    hi: "स्वागत है",
    bn: "স্বাগতম",
    ur: "خوش آمدید",
    fa: "خوش آمدید",
    tr: "Hoş geldiniz",
    it: "Benvenuto",
    nl: "Welkom",
    pl: "Witamy",
    sv: "Välkommen",
    no: "Velkommen",
    da: "Velkommen",
    fi: "Tervetuloa",
    el: "Καλώς ήρθατε",
    he: "ברוך הבא",
    th: "ยินดีต้อนรับ",
    vi: "Chào mừng",
    id: "Selamat datang",
    ms: "Selamat datang",
    zh: "欢迎",
    ja: "ようこそ",
    ko: "환영합니다"
  };

  const rtlLangs = ["ar", "ur", "fa", "he"];

  let lang = navigator.language || "en";
  lang = lang.toLowerCase().split("-")[0]; // FIX: en-US → en

  const clientGreeting = greetings[lang] || "Welcome";

  const el = document.getElementById("clientGreeting");

  if (el) {
    el.textContent = clientGreeting;

    // Set direction dynamically
    if (rtlLangs.includes(lang)) {
      el.setAttribute("dir", "rtl");
    } else {
      el.setAttribute("dir", "ltr");
    }
  }
});