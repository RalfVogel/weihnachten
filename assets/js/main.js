/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
  const header = document.getElementById("header");
  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  this.scrollY >= 50
    ? header.classList.add("bg-header")
    : header.classList.remove("bg-header");
};
window.addEventListener("scroll", scrollHeader);

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]"
      );

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

/*=============== PARALLAX ===============*/
let parallax = new Rellax(".parallax");

/*=============== GSAP ANIMATION ===============*/
gsap.from(".home__village", 1.2, { opacity: 0, y: 100, delay: 0.1 });
gsap.from(".home__pine", 1.2, { opacity: 0, x: 150, delay: 0.3 });
gsap.from(".home__mountain-2", 1.2, { opacity: 0, x: 150, delay: 0.5 });
gsap.from(".home__mountain-3", 1.2, { opacity: 0, x: -150, delay: 0.6 });
gsap.from(".home__mountain-1", 1.2, { opacity: 0, y: 250, delay: 0.7 });
gsap.from(".home__moon", 1.2, { opacity: 0, y: 200, delay: 0.8 });
gsap.from(".home__trineo", 1.2, { opacity: 0, x: -200, delay: 0.8 });
gsap.from(".home__title", 1.2, { opacity: 0, y: -60, delay: 1 });

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
});

sr.reveal(".about__data, .celebrate__img", { origin: "right" });
sr.reveal(".about__img, .celebrate__data", { origin: "left" });
sr.reveal(".send__card", { interval: 100 });
sr.reveal(".footer");

/*=============== Deutsch Englisch ===============*/

function updateContent(translations, language) {
  // Durchlaufe alle Elemente mit dem Attribut "data-i18n"
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    // Hole den Schlüssel der Übersetzung aus dem Attribut "data-i18n"
    const key = element.getAttribute("data-i18n");
    // Hole die Übersetzung aus dem translations-Objekt
    const translation = translations[language][key];
    // Setze den Inhalt des Elements auf die Übersetzung
    element.innerHTML = translation;
  });
}

let currentLanguage = "de";

document.querySelector("#translate-link").addEventListener("click", () => {
  if (currentLanguage === "de") {
    updateContent(translations, "en");
    currentLanguage = "en";
  } else {
    updateContent(translations, "de");
    currentLanguage = "de";
  }
});

/*=============== Deutsch Englisch api ===============*/
const translations = {
  de: {
    weihnachten: "Weihnachten",
    frohe_weihnachten: "Frohe Weihnachten",
    willkommen: "Willkommen",
    ueber: "Über",
    sende: "Sende",
    feiere: "Feiere",
    ueber_teilen: "Über das Teilen",
    ueber_teilen_2: "von Glück",
    ueber_teilen_3:
      "Diese Feiertage zu teilen ist das beste Geschenk, das man machen kann,Schenken oder teilen Sie Ihr Liebe mit den Menschen, die Sie am meisten lieben und feiern Sie mit großer Freude.",
    teile: "Teile Jetzt",
    senden_1: "Verströmen Sie Liebe dieses",
    senden_2: "Weihnachten",
    senden_3: "Verbringen Sie es mit der Familie",
    senden_4:
      "Mit der Familie zu teilen ist das beste Geschenk, das man machen kann.",
    senden_5: "Viel Liebe schenken",
    senden_6: "Schicken Sie ein Geschenk und viel Liebe an die Bedürftigsten.",
    senden_7: "Gute Wünsche teilen",
    senden_8: "Wünschen Sie Ihren Lieben gute Nachrichten dieses Weihnachten.",
    feiern_1: "Feiern Sie mit",
    feiern_2: "Viel Liebe",
    feiern_3:
      "Feiern Sie diese Feiertage mit viel Liebe und Frieden, und bringen ihren Lieben, Freunden und Nachbarn viele Segenswünsche.Senden sie ihnen eine gute Weihnachtsbotschaft.",
    feiern_4: "Feiern Sie jetzt",
    weihnachten_2: "Weihnachten",
  },
  en: {
    weihnachten: "Christmas",
    frohe_weihnachten: "Merry Christmas",
    willkommen: "Welcome",
    ueber: "About",
    sende: "Send",
    feiere: "Celebrate",
    ueber_teilen: "About Sharing",
    ueber_teilen_2: "Happiness",
    ueber_teilen_3:
      "Sharing these holidays is the best gift you can give, or share your love with the people you love the most and celebrate with great happiness.",
    teile: "Share Now",
    senden_1: "Send Love This",
    senden_2: "Christmas",
    senden_3: "Spend It With Family",
    senden_4: "Sharing with family is the best gift you can give.",
    senden_5: "Give Lots Of Love",
    senden_6: "Send a gift and a lot of love to those most in need.",
    senden_7: "Share Good Wishes",
    senden_8: "Wish good messages to loved ones this Christmas.",
    feiern_1: "Celebrate With A",
    feiern_2: "Lot Of Love",
    feiern_3:
      "In this holidays, celebrate with much love and peace, offering many blessings to our loved ones, friends     and neighbors, wishing them a good Christmas message.",
    feiern_4: "Celebrate Now",
    weihnachten_2: "Christmas",
  },
};
