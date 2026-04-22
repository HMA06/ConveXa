const appState = {
  lang: "en",
  heroSimulationStarted: false,
  heroTypingTimeouts: [],
  heroLoopTimeout: null
};

const whatsappNumber = "31684957550";
const whatsappPresetMessage = "Hello, I'm interested in ConveXa for my clinic.";

const translations = {
  en: {
    pageTitle: "ConveXa — AI WhatsApp Assistant for Clinics",
    htmlLang: "en",
    dir: "ltr",

    navHow: "How it works",
    navPricing: "Pricing",
    navDemo: "Try Demo",

    heroBadge: "AI WhatsApp Assistant for Clinics",
    heroTitle: "Turn WhatsApp conversations into structured booking requests",
    heroDesc:
      "ConveXa helps clinics handle patient messages on WhatsApp more intelligently — answering questions, guiding conversations, and collecting booking details in a clear structured format.",
    heroPrimary: "Try the Demo",
    heroSecondary: "How it works",

    proof1: "WhatsApp Native",
    proof2: "Multilingual",
    proof3: "Structured Booking Requests",

    clinicName: "BrightSmile Dental",
    clinicRole: "Assistant",
    chatPlaceholder: "Type a message...",
    send: "Send",

    heroMsg1: "Hi, do you offer teeth whitening?",
    heroMsg2:
      "Yes we do. Teeth whitening is one of our most requested treatments. Would you like to book a consultation or see pricing guidance?",
    heroMsg3: "I'd like to book an appointment.",
    heroMsg4: "Great. Which service would you like to book?",

    bookingTitle: "Booking Request",
    summaryService: "Service",
    summaryDay: "Preferred Day",
    summaryTime: "Preferred Time",
    summaryName: "Patient Name",
    summaryPhone: "Phone",
    summaryServiceValue: "Teeth Whitening",
    summaryDayValue: "Tuesday",
    summaryTimeValue: "15:00",
    summaryNameValue: "Sarah Johnson",
    summaryPhoneValue: "+31 684957550",
    summaryStatus: "Ready for clinic follow-up",

    value1: "Instant patient responses on WhatsApp",
    value2: "Collect booking details automatically",
    value3: "Reduce front desk message overload",
    value4: "Turn chats into structured requests",

    howTitle: "How ConveXa Works",
    howDesc:
      "Guide conversations, collect booking details, and turn WhatsApp messages into structured requests your clinic can act on immediately.",

    step1Title: "Respond",
    step1Desc:
      "Answer common patient questions instantly through WhatsApp with clear, helpful responses.",

    step2Title: "Guide",
    step2Desc:
      "Guide patients through services, pricing guidance, and clinic information naturally.",

    step3Title: "Collect",
    step3Desc:
      "Collect booking information such as service, preferred day, time, and patient details.",

    step4Title: "Deliver",
    step4Desc:
      "Turn the conversation into a structured booking request ready for clinic confirmation.",

    demoTitle: "Try the interactive demo",
    demoDesc:
      "Experience how ConveXa handles patient questions, guides conversations, and prepares booking requests directly from WhatsApp-style messages.",
    demoCta: "Open Interactive Demo",

    demoMsg1: "What are your clinic hours?",
    demoMsg2:
      "We are open Monday to Friday from 09:00 to 18:00. Would you like to book an appointment or see available services?",
    demoMsg3: "Book appointment",

    pricingTitle: "Pricing",
    pricingDesc:
      "Flexible options depending on your clinic needs and setup preferences.",

    plan1Title: "Starter",
    plan1Price: "$149+",
    plan1Desc:
      "Basic AI assistant setup for clinics starting with WhatsApp automation.",
    plan1Cta: "Contact on WhatsApp",

    featuredLabel: "Most Popular",
    plan2Title: "Guided Setup",
    plan2Price: "Talk to us",
    plan2Desc:
      "We configure the assistant with your services, pricing guidance, and booking flows.",
    plan2Cta: "Start Setup",

    plan3Title: "Custom",
    plan3Price: "Tailored",
    plan3Desc:
      "For clinics needing deeper integrations or customized workflows.",
    plan3Cta: "Contact us",

    finalTitle: "See how ConveXa organizes WhatsApp conversations for your clinic",
    finalDesc:
      "Try the demo experience and see how patient messages become structured booking requests.",
    finalPrimary: "Open Demo",
    finalSecondary: "Contact on WhatsApp",

    footerBrand: "ConveXa",
    footerDesc:
      "AI assistant designed for clinics to handle WhatsApp conversations, guide patients, and prepare structured booking requests."
  },

  ar: {
    pageTitle: "ConveXa — مساعد واتساب ذكي للعيادات",
    htmlLang: "ar",
    dir: "rtl",

    navHow: "كيف يعمل",
    navPricing: "الأسعار",
    navDemo: "جرّب الديمو",

    heroBadge: "مساعد واتساب ذكي مخصص للعيادات",
    heroTitle: "حوّل محادثات واتساب إلى طلبات حجز منظمة وواضحة",
    heroDesc:
      "يساعد ConveXa العيادات على التعامل مع رسائل المرضى عبر واتساب بشكل أكثر ذكاءً — من الرد على الأسئلة وتوجيه المحادثة إلى جمع تفاصيل الحجز وتحويلها إلى طلب منظم قابل للمتابعة.",
    heroPrimary: "جرّب الديمو",
    heroSecondary: "كيف يعمل",

    proof1: "يعمل عبر واتساب",
    proof2: "متعدد اللغات",
    proof3: "طلبات حجز منظمة",

    clinicName: "برايت سمايل للأسنان",
    clinicRole: "المساعد",
    chatPlaceholder: "اكتب رسالة...",
    send: "إرسال",

    heroMsg1: "مرحبًا، هل لديكم خدمة تبييض الأسنان؟",
    heroMsg2:
      "نعم، نوفر خدمة تبييض الأسنان وهي من أكثر الخدمات طلبًا. هل تود حجز استشارة أم الاطلاع على توجيه سعري؟",
    heroMsg3: "أرغب في حجز موعد.",
    heroMsg4: "ممتاز. ما الخدمة التي ترغب في حجزها؟",

    bookingTitle: "طلب الحجز",
    summaryService: "الخدمة",
    summaryDay: "اليوم المفضل",
    summaryTime: "الوقت المفضل",
    summaryName: "اسم المريض",
    summaryPhone: "رقم الهاتف",
    summaryServiceValue: "تبييض الأسنان",
    summaryDayValue: "الثلاثاء",
    summaryTimeValue: "15:00",
    summaryNameValue: "سارة جونسون",
    summaryPhoneValue: "+31 684957550",
    summaryStatus: "جاهز لمتابعة العيادة",

    value1: "ردود فورية على رسائل المرضى عبر واتساب",
    value2: "جمع تفاصيل الحجز تلقائيًا",
    value3: "تقليل الضغط على موظفي الاستقبال",
    value4: "تحويل المحادثات إلى طلبات منظمة",

    howTitle: "كيف يعمل ConveXa",
    howDesc:
      "يقود المحادثات، يجمع تفاصيل الحجز، ويحوّل رسائل واتساب إلى طلبات منظمة يمكن للعيادة التعامل معها مباشرة.",

    step1Title: "الرد",
    step1Desc:
      "الرد على أسئلة المرضى المتكررة فورًا عبر واتساب بصياغة واضحة ومفيدة.",

    step2Title: "التوجيه",
    step2Desc:
      "توجيه المرضى خلال الخدمات وتوضيح الأسعار وساعات العمل بشكل طبيعي ومنظم.",

    step3Title: "الجمع",
    step3Desc:
      "جمع تفاصيل الحجز مثل الخدمة واليوم والوقت المناسبين وبيانات المريض.",

    step4Title: "التسليم",
    step4Desc:
      "تحويل المحادثة إلى طلب حجز منظم جاهز للتأكيد والمتابعة من قبل العيادة.",

    demoTitle: "جرّب الديمو التفاعلي",
    demoDesc:
      "اختبر كيف يتعامل ConveXa مع أسئلة المرضى، ويوجه المحادثة، ويجهز طلبات الحجز مباشرة من رسائل بأسلوب واتساب.",
    demoCta: "افتح الديمو التفاعلي",

    demoMsg1: "ما هي ساعات عمل العيادة؟",
    demoMsg2:
      "نعمل من الاثنين إلى الجمعة من 09:00 إلى 18:00. هل ترغب في حجز موعد أم الاطلاع على الخدمات المتاحة؟",
    demoMsg3: "حجز موعد",

    pricingTitle: "الأسعار",
    pricingDesc:
      "خيارات مرنة حسب احتياجات عيادتك وطريقة الإعداد التي تناسبك.",

    plan1Title: "Starter",
    plan1Price: "$149+",
    plan1Desc:
      "إعداد أساسي لمساعد ذكي للعيادات التي تبدأ بأتمتة واتساب.",
    plan1Cta: "تواصل عبر واتساب",

    featuredLabel: "الأكثر طلبًا",
    plan2Title: "Guided Setup",
    plan2Price: "تحدث معنا",
    plan2Desc:
      "نقوم بإعداد المساعد وفق خدماتك، وتوجيه الأسعار، ومسارات الحجز الخاصة بعيادتك.",
    plan2Cta: "ابدأ الإعداد",

    plan3Title: "Custom",
    plan3Price: "مخصص",
    plan3Desc:
      "للعيادات التي تحتاج إلى تكاملات أعمق أو تدفقات عمل مخصصة.",
    plan3Cta: "تواصل معنا",

    finalTitle: "شاهد كيف ينظم ConveXa محادثات واتساب في عيادتك",
    finalDesc:
      "جرّب الديمو لترى كيف تتحول رسائل المرضى إلى طلبات حجز منظمة وجاهزة للمتابعة.",
    finalPrimary: "افتح الديمو",
    finalSecondary: "تواصل عبر واتساب",

    footerBrand: "ConveXa",
    footerDesc:
      "مساعد ذكي مصمم للعيادات لإدارة محادثات واتساب، وتوجيه المرضى، وتجهيز طلبات حجز منظمة."
  },

  tr: {
    pageTitle: "ConveXa — Klinikler için AI WhatsApp Asistanı",
    htmlLang: "tr",
    dir: "ltr",

    navHow: "Nasıl çalışır",
    navPricing: "Fiyatlandırma",
    navDemo: "Demoyu Dene",

    heroBadge: "Klinikler için AI WhatsApp Asistanı",
    heroTitle: "WhatsApp konuşmalarını yapılandırılmış randevu taleplerine dönüştürün",
    heroDesc:
      "ConveXa, kliniklerin WhatsApp üzerinden gelen hasta mesajlarını daha akıllı şekilde yönetmesine yardımcı olur — soruları yanıtlar, konuşmayı yönlendirir ve randevu detaylarını net bir yapıda toplar.",
    heroPrimary: "Demoyu Dene",
    heroSecondary: "Nasıl çalışır",

    proof1: "WhatsApp uyumlu",
    proof2: "Çok dilli",
    proof3: "Yapılandırılmış randevu talepleri",

    clinicName: "BrightSmile Dental",
    clinicRole: "Asistan",
    chatPlaceholder: "Mesaj yazın...",
    send: "Gönder",

    heroMsg1: "Merhaba, diş beyazlatma hizmetiniz var mı?",
    heroMsg2:
      "Evet, var. Diş beyazlatma en çok talep edilen hizmetlerimizden biri. Bir danışmanlık randevusu almak ister misiniz, yoksa fiyat bilgisi mi görmek istersiniz?",
    heroMsg3: "Randevu almak istiyorum.",
    heroMsg4: "Harika. Hangi hizmet için randevu almak istersiniz?",

    bookingTitle: "Randevu Talebi",
    summaryService: "Hizmet",
    summaryDay: "Tercih Edilen Gün",
    summaryTime: "Tercih Edilen Saat",
    summaryName: "Hasta Adı",
    summaryPhone: "Telefon",
    summaryServiceValue: "Diş Beyazlatma",
    summaryDayValue: "Salı",
    summaryTimeValue: "15:00",
    summaryNameValue: "Sarah Johnson",
    summaryPhoneValue: "+31 684957550",
    summaryStatus: "Klinik takibi için hazır",

    value1: "WhatsApp üzerinden anında hasta yanıtları",
    value2: "Randevu detaylarını otomatik toplayın",
    value3: "Ön büro mesaj yükünü azaltın",
    value4: "Sohbetleri yapılandırılmış taleplere dönüştürün",

    howTitle: "ConveXa Nasıl Çalışır",
    howDesc:
      "Konuşmaları yönlendirin, randevu detaylarını toplayın ve WhatsApp mesajlarını kliniğinizin hemen işleyebileceği yapılandırılmış taleplere dönüştürün.",

    step1Title: "Yanıtla",
    step1Desc:
      "Sık sorulan hasta sorularını WhatsApp üzerinden net ve faydalı şekilde anında yanıtlayın.",

    step2Title: "Yönlendir",
    step2Desc:
      "Hastaları hizmetler, fiyat bilgisi ve klinik bilgileri konusunda doğal biçimde yönlendirin.",

    step3Title: "Topla",
    step3Desc:
      "Hizmet, tercih edilen gün, saat ve hasta bilgileri gibi randevu verilerini toplayın.",

    step4Title: "Teslim Et",
    step4Desc:
      "Konuşmayı, klinik onayı için hazır yapılandırılmış bir randevu talebine dönüştürün.",

    demoTitle: "Etkileşimli demoyu deneyin",
    demoDesc:
      "ConveXa'nın hasta sorularını nasıl ele aldığını, konuşmayı nasıl yönlendirdiğini ve WhatsApp tarzı mesajlardan randevu talebi nasıl hazırladığını deneyimleyin.",
    demoCta: "Etkileşimli Demoyu Aç",

    demoMsg1: "Kliniğinizin çalışma saatleri nedir?",
    demoMsg2:
      "Pazartesi'den Cuma'ya 09:00 - 18:00 saatleri arasında açığız. Randevu almak ister misiniz yoksa hizmetlerimizi mi görmek istersiniz?",
    demoMsg3: "Randevu al",

    pricingTitle: "Fiyatlandırma",
    pricingDesc:
      "Kliniğinizin ihtiyaçlarına ve tercih ettiğiniz kurulum seviyesine göre esnek seçenekler.",

    plan1Title: "Starter",
    plan1Price: "$149+",
    plan1Desc:
      "WhatsApp otomasyonuna başlayan klinikler için temel AI asistan kurulumu.",
    plan1Cta: "WhatsApp ile İletişim",

    featuredLabel: "En Popüler",
    plan2Title: "Guided Setup",
    plan2Price: "Bizimle konuşun",
    plan2Desc:
      "Asistanı hizmetlerinize, fiyat yönlendirmelerinize ve randevu akışlarınıza göre yapılandırıyoruz.",
    plan2Cta: "Kuruluma Başla",

    plan3Title: "Custom",
    plan3Price: "Özel",
    plan3Desc:
      "Daha derin entegrasyonlar veya özelleştirilmiş iş akışları isteyen klinikler için.",
    plan3Cta: "Bize ulaşın",

    finalTitle: "ConveXa'nın kliniğinizde WhatsApp konuşmalarını nasıl düzenlediğini görün",
    finalDesc:
      "Demoyu deneyin ve hasta mesajlarının nasıl yapılandırılmış randevu taleplerine dönüştüğünü görün.",
    finalPrimary: "Demoyu Aç",
    finalSecondary: "WhatsApp ile İletişim",

    footerBrand: "ConveXa",
    footerDesc:
      "WhatsApp konuşmalarını yönetmek, hastaları yönlendirmek ve yapılandırılmış randevu talepleri hazırlamak için klinikler adına tasarlanmış AI asistan."
  }
};

const dom = {
  html: document.documentElement,
  title: document.querySelector("title"),

  navHow: document.querySelector('.nav-links a[href="#how"]'),
  navPricing: document.querySelector('.nav-links a[href="#pricing"]'),
  navDemo: document.querySelector(".nav-actions .btn-primary"),

  heroBadge: document.querySelector(".hero-badge"),
  heroTitle: document.querySelector(".hero-title"),
  heroDesc: document.querySelector(".hero-desc"),
  heroPrimary: document.querySelector(".hero-cta .btn-primary"),
  heroSecondary: document.querySelector(".hero-cta .btn-secondary"),

  proofs: document.querySelectorAll(".proof-item"),

  clinicName: document.querySelector(".clinic-name"),
  clinicRole: document.querySelector(".clinic-role"),
  chatInput: document.querySelector(".chat-input input"),
  send: document.querySelector(".chat-input .send"),

  heroMessages: document.querySelectorAll(".chat-messages .msg"),
  heroMessagesContainer: document.querySelector(".chat-messages"),

  summaryTitle: document.querySelector(".summary-title"),
  summaryRows: document.querySelectorAll(".summary-row"),
  summaryStatus: document.querySelector(".summary-status"),

  valueItems: document.querySelectorAll(".value-item"),

  howTitle: document.querySelector(".how .section-header h2"),
  howDesc: document.querySelector(".how .section-header p"),
  steps: document.querySelectorAll(".step-card"),

  demoTitle: document.querySelector(".demo-text h2"),
  demoDesc: document.querySelector(".demo-text p"),
  demoCta: document.querySelector(".demo-text .btn-primary"),
  demoMessages: document.querySelectorAll(".mini-chat .mini-msg"),

  pricingTitle: document.querySelector(".pricing .section-header h2"),
  pricingDesc: document.querySelector(".pricing .section-header p"),
  priceCards: document.querySelectorAll(".price-card"),
  featuredLabel: document.querySelector(".featured-label"),

  finalTitle: document.querySelector(".final-cta h2"),
  finalDesc: document.querySelector(".final-cta p"),
  finalPrimary: document.querySelector(".cta-buttons .btn-primary"),
  finalSecondary: document.querySelector(".cta-buttons .btn-whatsapp"),

  footerBrand: document.querySelector(".footer-brand"),
  footerDesc: document.querySelector(".footer-desc"),

  langButtons: document.querySelectorAll(".lang")
};

function setText(node, value) {
  if (node) node.textContent = value;
}

function getWhatsAppUrl() {
  const text = encodeURIComponent(whatsappPresetMessage);
  return `https://wa.me/${whatsappNumber}?text=${text}`;
}

function updateWhatsAppLinks() {
  const links = document.querySelectorAll('a[href^="https://wa.me/"]');
  const url = getWhatsAppUrl();

  links.forEach((link) => {
    link.setAttribute("href", url);
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener noreferrer");
  });
}

function updateDemoLinks() {
  const demoLinks = [
    dom.navDemo,
    dom.heroPrimary,
    dom.demoCta,
    dom.finalPrimary
  ];

  demoLinks.forEach((link) => {
    if (!link) return;
    link.setAttribute("href", "demo/index.html");
  });
}

function applyLanguage(lang) {
  const t = translations[lang];
  if (!t) return;

  appState.lang = lang;

  dom.html.lang = t.htmlLang;
  dom.html.dir = t.dir;
  document.title = t.pageTitle;

  setText(dom.navHow, t.navHow);
  setText(dom.navPricing, t.navPricing);
  setText(dom.navDemo, t.navDemo);

  setText(dom.heroBadge, t.heroBadge);
  setText(dom.heroTitle, t.heroTitle);
  setText(dom.heroDesc, t.heroDesc);
  setText(dom.heroPrimary, t.heroPrimary);
  setText(dom.heroSecondary, t.heroSecondary);

  if (dom.proofs[0]) updateProofItem(dom.proofs[0], t.proof1);
  if (dom.proofs[1]) updateProofItem(dom.proofs[1], t.proof2);
  if (dom.proofs[2]) updateProofItem(dom.proofs[2], t.proof3);

  setText(dom.clinicName, t.clinicName);
  setText(dom.clinicRole, t.clinicRole);

  if (dom.chatInput) dom.chatInput.placeholder = t.chatPlaceholder;
  setText(dom.send, t.send);

  if (dom.heroMessages[0]) setText(dom.heroMessages[0], t.heroMsg1);
  if (dom.heroMessages[1]) setText(dom.heroMessages[1], t.heroMsg2);
  if (dom.heroMessages[2]) setText(dom.heroMessages[2], t.heroMsg3);
  if (dom.heroMessages[3]) setText(dom.heroMessages[3], t.heroMsg4);

  setText(dom.summaryTitle, t.bookingTitle);

  if (dom.summaryRows[0]) updateSummaryRow(dom.summaryRows[0], t.summaryService, t.summaryServiceValue);
  if (dom.summaryRows[1]) updateSummaryRow(dom.summaryRows[1], t.summaryDay, t.summaryDayValue);
  if (dom.summaryRows[2]) updateSummaryRow(dom.summaryRows[2], t.summaryTime, t.summaryTimeValue);
  if (dom.summaryRows[3]) updateSummaryRow(dom.summaryRows[3], t.summaryName, t.summaryNameValue);
  if (dom.summaryRows[4]) updateSummaryRow(dom.summaryRows[4], t.summaryPhone, t.summaryPhoneValue);

  setText(dom.summaryStatus, t.summaryStatus);

  if (dom.valueItems[0]) setText(dom.valueItems[0], t.value1);
  if (dom.valueItems[1]) setText(dom.valueItems[1], t.value2);
  if (dom.valueItems[2]) setText(dom.valueItems[2], t.value3);
  if (dom.valueItems[3]) setText(dom.valueItems[3], t.value4);

  setText(dom.howTitle, t.howTitle);
  setText(dom.howDesc, t.howDesc);

  if (dom.steps[0]) updateStepCard(dom.steps[0], "1", t.step1Title, t.step1Desc);
  if (dom.steps[1]) updateStepCard(dom.steps[1], "2", t.step2Title, t.step2Desc);
  if (dom.steps[2]) updateStepCard(dom.steps[2], "3", t.step3Title, t.step3Desc);
  if (dom.steps[3]) updateStepCard(dom.steps[3], "4", t.step4Title, t.step4Desc);

  setText(dom.demoTitle, t.demoTitle);
  setText(dom.demoDesc, t.demoDesc);
  setText(dom.demoCta, t.demoCta);

  if (dom.demoMessages[0]) setText(dom.demoMessages[0], t.demoMsg1);
  if (dom.demoMessages[1]) setText(dom.demoMessages[1], t.demoMsg2);
  if (dom.demoMessages[2]) setText(dom.demoMessages[2], t.demoMsg3);

  setText(dom.pricingTitle, t.pricingTitle);
  setText(dom.pricingDesc, t.pricingDesc);

  if (dom.priceCards[0]) updatePriceCard(dom.priceCards[0], t.plan1Title, t.plan1Price, t.plan1Desc, t.plan1Cta);
  if (dom.priceCards[1]) updatePriceCard(dom.priceCards[1], t.plan2Title, t.plan2Price, t.plan2Desc, t.plan2Cta, t.featuredLabel);
  if (dom.priceCards[2]) updatePriceCard(dom.priceCards[2], t.plan3Title, t.plan3Price, t.plan3Desc, t.plan3Cta);

  setText(dom.finalTitle, t.finalTitle);
  setText(dom.finalDesc, t.finalDesc);
  setText(dom.finalPrimary, t.finalPrimary);
  setText(dom.finalSecondary, t.finalSecondary);

  setText(dom.footerBrand, t.footerBrand);
  setText(dom.footerDesc, t.footerDesc);

  updateLanguageButtons(lang);
  updateWhatsAppLinks();
  updateDemoLinks();
  restartHeroChatSimulation();

  try {
    localStorage.setItem("convexa_lang", lang);
  } catch (error) {
    // no-op
  }
}

function ensureProofDot(item) {
  if (!item) return null;

  let dot = item.querySelector(".proof-dot");

  if (!dot) {
    dot = document.createElement("span");
    dot.className = "proof-dot";
    item.prepend(dot);
  }

  return dot;
}

function updateProofItem(item, text) {
  if (!item) return;

  ensureProofDot(item);

  const nodes = Array.from(item.childNodes).filter((node) => {
    return !(node.nodeType === Node.ELEMENT_NODE && node.classList.contains("proof-dot"));
  });

  nodes.forEach((node) => item.removeChild(node));
  item.append(document.createTextNode(text));
}

function updateSummaryRow(row, label, value) {
  const span = row.querySelector("span");
  const strong = row.querySelector("strong");
  setText(span, label);
  setText(strong, value);
}

function updateStepCard(card, number, title, description) {
  const numberNode = card.querySelector(".step-number");
  const titleNode = card.querySelector("h3");
  const descNode = card.querySelector("p");

  setText(numberNode, number);
  setText(titleNode, title);
  setText(descNode, description);
}

function updatePriceCard(card, title, price, description, cta, featuredLabelText) {
  const titleNode = card.querySelector("h3");
  const priceNode = card.querySelector(".price");
  const descNode = card.querySelector("p");
  const buttonNode = card.querySelector("a");
  const badgeNode = card.querySelector(".featured-label");

  setText(titleNode, title);
  setText(priceNode, price);
  setText(descNode, description);
  setText(buttonNode, cta);

  if (badgeNode && featuredLabelText) {
    setText(badgeNode, featuredLabelText);
  }
}

function updateLanguageButtons(activeLang) {
  dom.langButtons.forEach((button) => {
    const isActive = button.dataset.lang === activeLang;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function setupLanguageSwitcher() {
  dom.langButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const lang = button.dataset.lang;
      applyLanguage(lang);
    });
  });
}

function setupSmoothSectionNavigation() {
  const sectionLinks = document.querySelectorAll('a[href^="#"]');

  sectionLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");
      if (!targetId || targetId === "#") return;

      const target = document.querySelector(targetId);
      if (!target) return;

      event.preventDefault();

      const navbar = document.querySelector(".navbar");
      const navHeight = navbar ? navbar.offsetHeight : 0;
      const top = target.getBoundingClientRect().top + window.scrollY - navHeight - 18;

      window.scrollTo({
        top,
        behavior: "smooth"
      });
    });
  });
}

function setupRevealAnimations() {
  const revealTargets = document.querySelectorAll(
    ".hero-left, .hero-right, .value-item, .step-card, .demo-inner, .price-card, .cta-inner, .footer-inner"
  );

  revealTargets.forEach((element, index) => {
    element.style.opacity = "0";
    element.style.transform = `${window.getComputedStyle(element).transform === "none" ? "" : ""} translateY(18px)`;
    element.style.transition =
      "opacity 700ms cubic-bezier(0.22, 1, 0.36, 1), transform 700ms cubic-bezier(0.22, 1, 0.36, 1)";
    element.dataset.revealIndex = String(index);
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const element = entry.target;
        const staggerIndex = Number(element.dataset.revealIndex || 0) % 6;
        const delay = staggerIndex * 70;

        window.setTimeout(() => {
          element.style.opacity = "1";
          element.style.transform = "translateY(0)";
        }, delay);

        observer.unobserve(element);
      });
    },
    {
      threshold: 0.14,
      rootMargin: "0px 0px -40px 0px"
    }
  );

  revealTargets.forEach((element) => observer.observe(element));
}

function setupNavbarState() {
  const navbar = document.querySelector(".nav-inner");
  if (!navbar) return;

  const handleScroll = () => {
    if (window.scrollY > 12) {
      navbar.style.boxShadow =
        "0 20px 50px rgba(2, 8, 22, 0.32), inset 0 1px 0 rgba(255,255,255,0.05)";
      navbar.style.borderColor = "rgba(126, 161, 255, 0.2)";
    } else {
      navbar.style.boxShadow =
        "0 18px 44px rgba(2, 8, 22, 0.26), inset 0 1px 0 rgba(255,255,255,0.05)";
      navbar.style.borderColor = "rgba(126, 161, 255, 0.16)";
    }
  };

  handleScroll();
  window.addEventListener("scroll", handleScroll, { passive: true });
}

function detectInitialLanguage() {
  let savedLang = null;

  try {
    savedLang = localStorage.getItem("convexa_lang");
  } catch (error) {
    savedLang = null;
  }

  if (savedLang && translations[savedLang]) {
    return savedLang;
  }

  const browserLang = (navigator.language || "en").toLowerCase();

  if (browserLang.startsWith("ar")) return "ar";
  if (browserLang.startsWith("tr")) return "tr";
  return "en";
}

function clearHeroChatSimulation() {
  appState.heroTypingTimeouts.forEach((timeoutId) => clearTimeout(timeoutId));
  appState.heroTypingTimeouts = [];

  if (appState.heroLoopTimeout) {
    clearTimeout(appState.heroLoopTimeout);
    appState.heroLoopTimeout = null;
  }

  removeHeroTypingIndicator();
}

function removeHeroTypingIndicator() {
  const typing = dom.heroMessagesContainer?.querySelector(".hero-typing");
  if (typing) typing.remove();
}

function createHeroTypingIndicator() {
  const indicator = document.createElement("div");
  indicator.className = "msg bot hero-typing";
  indicator.setAttribute("aria-hidden", "true");
  indicator.style.display = "inline-flex";
  indicator.style.alignItems = "center";
  indicator.style.gap = "6px";
  indicator.style.minHeight = "46px";

  for (let i = 0; i < 3; i += 1) {
    const dot = document.createElement("span");
    dot.style.width = "7px";
    dot.style.height = "7px";
    dot.style.borderRadius = "50%";
    dot.style.background = "rgba(255,255,255,0.72)";
    dot.style.display = "inline-block";
    dot.style.opacity = "0.45";
    dot.style.animation = `convexaTyping 1s ease-in-out ${i * 0.12}s infinite`;
    indicator.appendChild(dot);
  }

  return indicator;
}

function ensureTypingKeyframes() {
  if (document.getElementById("convexa-typing-style")) return;

  const style = document.createElement("style");
  style.id = "convexa-typing-style";
  style.textContent = `
    @keyframes convexaTyping {
      0%, 80%, 100% { transform: translateY(0); opacity: 0.38; }
      40% { transform: translateY(-3px); opacity: 1; }
    }
  `;
  document.head.appendChild(style);
}

function setHeroMessagesInstant() {
  const t = translations[appState.lang];
  if (!t) return;

  if (dom.heroMessages[0]) {
    dom.heroMessages[0].style.opacity = "1";
    dom.heroMessages[0].style.transform = "translateY(0)";
    dom.heroMessages[0].textContent = t.heroMsg1;
  }

  if (dom.heroMessages[1]) {
    dom.heroMessages[1].style.opacity = "1";
    dom.heroMessages[1].style.transform = "translateY(0)";
    dom.heroMessages[1].textContent = t.heroMsg2;
  }

  if (dom.heroMessages[2]) {
    dom.heroMessages[2].style.opacity = "1";
    dom.heroMessages[2].style.transform = "translateY(0)";
    dom.heroMessages[2].textContent = t.heroMsg3;
  }

  if (dom.heroMessages[3]) {
    dom.heroMessages[3].style.opacity = "1";
    dom.heroMessages[3].style.transform = "translateY(0)";
    dom.heroMessages[3].textContent = t.heroMsg4;
  }
}

function prepareHeroMessagesForSimulation() {
  dom.heroMessages.forEach((message, index) => {
    if (!message) return;
    message.style.transition = "opacity 320ms ease, transform 420ms cubic-bezier(0.22, 1, 0.36, 1)";
    message.style.opacity = index === 0 ? "1" : "0";
    message.style.transform = index === 0 ? "translateY(0)" : "translateY(10px)";
  });
}

function revealHeroMessage(index, text) {
  const message = dom.heroMessages[index];
  if (!message) return;

  message.textContent = text;
  message.style.opacity = "1";
  message.style.transform = "translateY(0)";
}

function runHeroChatSimulation() {
  const t = translations[appState.lang];
  if (!t || !dom.heroMessagesContainer || dom.heroMessages.length < 4) return;

  clearHeroChatSimulation();
  prepareHeroMessagesForSimulation();
  setText(dom.heroMessages[0], t.heroMsg1);

  const typingIndicator = createHeroTypingIndicator();

  const step1 = setTimeout(() => {
    dom.heroMessagesContainer.appendChild(typingIndicator);
    dom.heroMessagesContainer.scrollTop = dom.heroMessagesContainer.scrollHeight;
  }, 700);

  const step2 = setTimeout(() => {
    removeHeroTypingIndicator();
    revealHeroMessage(1, t.heroMsg2);
    dom.heroMessagesContainer.scrollTop = dom.heroMessagesContainer.scrollHeight;
  }, 1600);

  const step3 = setTimeout(() => {
    revealHeroMessage(2, t.heroMsg3);
    dom.heroMessagesContainer.scrollTop = dom.heroMessagesContainer.scrollHeight;
  }, 2350);

  const step4 = setTimeout(() => {
    dom.heroMessagesContainer.appendChild(createHeroTypingIndicator());
    dom.heroMessagesContainer.scrollTop = dom.heroMessagesContainer.scrollHeight;
  }, 3050);

  const step5 = setTimeout(() => {
    removeHeroTypingIndicator();
    revealHeroMessage(3, t.heroMsg4);
    dom.heroMessagesContainer.scrollTop = dom.heroMessagesContainer.scrollHeight;
  }, 4000);

  const loop = setTimeout(() => {
    runHeroChatSimulation();
  }, 7200);

  appState.heroTypingTimeouts.push(step1, step2, step3, step4, step5);
  appState.heroLoopTimeout = loop;
}

function restartHeroChatSimulation() {
  ensureTypingKeyframes();

  if (!dom.heroMessagesContainer) return;

  if (document.hidden) {
    clearHeroChatSimulation();
    setHeroMessagesInstant();
    return;
  }

  runHeroChatSimulation();
}

function setupHeroChatSimulation() {
  if (appState.heroSimulationStarted) return;
  appState.heroSimulationStarted = true;

  restartHeroChatSimulation();

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      clearHeroChatSimulation();
      setHeroMessagesInstant();
      return;
    }

    restartHeroChatSimulation();
  });
}

function init() {
  setupLanguageSwitcher();
  setupSmoothSectionNavigation();
  setupRevealAnimations();
  setupNavbarState();
  updateDemoLinks();
  updateWhatsAppLinks();
  applyLanguage(detectInitialLanguage());
  setupHeroChatSimulation();
}

document.addEventListener("DOMContentLoaded", init);