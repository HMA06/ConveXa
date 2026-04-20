const chatMessages = document.getElementById("chatMessages");
const userInput = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");
const demoCTA = document.getElementById("demoCTA");

const demoBackBtn = document.getElementById("demoBackBtn");
const demoTopBadge = document.getElementById("demoTopBadge");
const demoHeroChip = document.getElementById("demoHeroChip");
const demoHeroTitle = document.getElementById("demoHeroTitle");
const demoHeroSubtitle = document.getElementById("demoHeroSubtitle");
const demoNotice = document.getElementById("demoNotice");
const clinicNameEl = document.getElementById("clinicName");
const clinicRoleEl = document.getElementById("clinicRole");
const demoCtaText = document.getElementById("demoCtaText");
const demoCtaBtn = document.getElementById("demoCtaBtn");
const demoLangButtons = document.querySelectorAll(".demo-lang-btn");

const uiTranslations = {
  en: {
    title: "ConveXa AI Demo",
    back: "← Back",
    topBadge: "Interactive Demo",
    heroChip: "⚡ ConveXa AI Assistant",
    heroTitle:
      "See how a clinic can respond, qualify demand, and collect booking details inside a WhatsApp-style flow",
    heroSubtitle:
      "This is a simplified interactive demo. The live version is connected directly to your clinic workflow, services, and patient communication flow.",
    notice:
      "🚀 This demo is intentionally simplified. The live version runs on your clinic workflow and can be adapted to your booking process, services, and languages.",
    clinicName: "Elite Dental Clinic",
    clinicRole: "WhatsApp Assistant",
    inputPlaceholder: "Type your message...",
    send: "Send",
    ctaText:
      "This is a simplified experience. The live version can run on your clinic’s number, be adapted to your workflow, and help your team collect booking requests more clearly.",
    ctaButton: "Start your clinic setup on WhatsApp",
    options: {
      book: "1- Book an appointment",
      services: "2- Ask about services",
      prices: "3- Ask about prices"
    }
  },

  ar: {
    title: "عرض ConveXa AI",
    back: "→ رجوع",
    topBadge: "تجربة تفاعلية",
    heroChip: "⚡ مساعد ConveXa AI",
    heroTitle:
      "شاهد كيف يمكن للعيادة أن ترد على المرضى، تؤهل الطلب، وتجمع تفاصيل الحجز داخل تجربة شبيهة بواتساب",
    heroSubtitle:
      "هذه تجربة تفاعلية مبسطة. النسخة الفعلية يتم ربطها مباشرة بسير العمل داخل عيادتك والخدمات وطريقة التواصل مع المرضى.",
    notice:
      "🚀 هذه النسخة مجرد نموذج مبسط. النسخة الحقيقية تعمل على سير العمل داخل عيادتك ويمكن تخصيصها حسب الحجوزات والخدمات واللغات.",
    clinicName: "Elite Dental Clinic",
    clinicRole: "مساعد واتساب",
    inputPlaceholder: "اكتب رسالتك...",
    send: "إرسال",
    ctaText:
      "هذه تجربة مبسطة. النسخة الحقيقية يمكن تشغيلها على رقم عيادتك، وتخصيصها حسب سير العمل، ومساعدة الفريق على جمع طلبات الحجز بشكل أوضح.",
    ctaButton: "ابدأ إعداد عيادتك على واتساب",
    options: {
      book: "1- حجز موعد",
      services: "2- الاستفسار عن الخدمات",
      prices: "3- الاستفسار عن الأسعار"
    }
  },

  tr: {
    title: "ConveXa AI Demo",
    back: "← Geri",
    topBadge: "Etkileşimli Demo",
    heroChip: "⚡ ConveXa AI Asistanı",
    heroTitle:
      "Bir kliniğin WhatsApp benzeri bir akışta nasıl yanıt verebildiğini, talebi yönlendirdiğini ve randevu detaylarını topladığını görün",
    heroSubtitle:
      "Bu basitleştirilmiş etkileşimli bir demodur. Canlı sürüm doğrudan kliniğinizin iş akışına, hizmetlerine ve hasta iletişim yapısına bağlanır.",
    notice:
      "🚀 Bu demo bilerek sadeleştirilmiştir. Gerçek sürüm kliniğinizin iş akışında çalışır ve rezervasyon sürecinize, hizmetlerinize ve dillerinize göre uyarlanabilir.",
    clinicName: "Elite Dental Clinic",
    clinicRole: "WhatsApp Asistanı",
    inputPlaceholder: "Mesajınızı yazın...",
    send: "Gönder",
    ctaText:
      "Bu sadeleştirilmiş bir deneyimdir. Gerçek sürüm kliniğinizin numarasında çalışabilir, iş akışınıza göre uyarlanabilir ve ekibinizin rezervasyon taleplerini daha düzenli toplamasına yardımcı olabilir.",
    ctaButton: "Kliniğinizin kurulumunu WhatsApp'ta başlatın",
    options: {
      book: "1- Randevu al",
      services: "2- Hizmetleri sor",
      prices: "3- Fiyatları sor"
    }
  }
};

const botTexts = {
  en: {
    welcome:
      "Welcome to Elite Dental Clinic 👋\nHow can I help you today?\n1- Book an appointment\n2- Ask about services\n3- Ask about prices",
    askName: "Great 👍 What's your name?",
    askService:
      "Nice to meet you {name} 😊\nWhat service would you like?\n(Cleaning - Braces - Whitening)",
    askDay: "Which day works best for you?",
    askTime: "Perfect 👍 What time do you prefer?",
    askPhone:
      "Great. Please send your phone number so the clinic can confirm your request.",
    confirm:
      "Got it 👍\nName: {name}\nService: {service}\nDay: {day}\nTime: {time}\nPhone: {phone}\nPlease confirm by sending: yes",
    done:
      "Your request has been recorded ✅\nIn the live version, your clinic team can receive this as a structured booking request and continue the follow-up.",
    retryConfirm: "Please type yes to confirm your request.",
    services:
      "We currently offer:\n• Cleaning\n• Braces\n• Whitening\nThe live version can also guide patients through common questions and direct them toward the right next step.",
    prices:
      "Pricing depends on the case and treatment type.\nFor example, cleaning, whitening, and braces each have different pricing.\nIf you'd like, I can help you create a consultation or booking request.",
    fallback:
      "I can help with appointments, services, prices, clinic hours, location, consultation questions, and treatment basics.\nYou can also type 1 to start booking.",
    bookNudge:
      "If you'd like, we can continue now and create a sample booking request in less than a minute.",
    hours:
      "The clinic can handle requests during working hours, and the assistant can still capture patient inquiries outside business hours.",
    location:
      "Location details are typically shared during the confirmation step.\nIf you want, I can continue with a booking request now.",
    consultation:
      "Yes, a consultation request can be collected first, especially when the patient wants to understand the treatment plan before confirming a booking.",
    pain:
      "That depends on the treatment, but the clinic usually explains each step and helps the patient understand the suitable option.",
    whitening:
      "Teeth whitening is one of the common requested services.\nThe suitable approach depends on the case and is usually confirmed after evaluation.",
    braces:
      "Braces options depend on the dental case and examination.\nThe clinic usually reviews the situation first, then recommends a suitable plan.",
    cleaning:
      "Cleaning is one of the most common requested services and is often the first step before other cosmetic treatments."
  },

  ar: {
    welcome:
      "أهلاً بك في Elite Dental Clinic 👋\nكيف يمكنني مساعدتك اليوم؟\n1- حجز موعد\n2- الاستفسار عن الخدمات\n3- الاستفسار عن الأسعار",
    askName: "رائع 👍 ما اسمك؟",
    askService:
      "تشرفنا فيك {name} 😊\nما الخدمة التي ترغب بها؟\n(تنظيف - تقويم - تبييض)",
    askDay: "أي يوم يناسبك؟",
    askTime: "ممتاز 👍 ما الوقت المناسب لك؟",
    askPhone:
      "رائع. أرسل رقم هاتفك ليتمكن فريق العيادة من تأكيد الطلب معك.",
    confirm:
      "تم 👍\nالاسم: {name}\nالخدمة: {service}\nاليوم: {day}\nالوقت: {time}\nرقم الهاتف: {phone}\nللتأكيد أرسل: نعم",
    done:
      "تم تسجيل طلبك ✅\nفي النسخة الحقيقية يمكن لفريق العيادة استلام هذا الطلب بشكل منظم ومتابعته مباشرة.",
    retryConfirm: "للتأكيد أرسل كلمة: نعم",
    services:
      "الخدمات المتوفرة حاليًا:\n• تنظيف\n• تقويم\n• تبييض\nكما يمكن للنسخة الحقيقية توجيه المرضى في الأسئلة الشائعة ونقلهم إلى الخطوة المناسبة.",
    prices:
      "الأسعار تختلف حسب الحالة ونوع الخدمة المطلوبة.\nمثلًا أسعار التنظيف تختلف عن التبييض أو التقويم.\nإذا رغبت، أستطيع مساعدتك في إنشاء طلب استشارة أو حجز.",
    fallback:
      "أستطيع مساعدتك في الحجز، الخدمات، الأسعار، أوقات العمل، الموقع، الاستشارة، والأسئلة الأساسية عن العلاج.\nويمكنك أيضًا كتابة الرقم 1 للبدء بالحجز.",
    bookNudge:
      "إذا رغبت، يمكننا الآن إكمال طلب حجز تجريبي خلال أقل من دقيقة.",
    hours:
      "يمكن للعيادة التعامل مع الطلبات خلال أوقات الدوام، بينما يستطيع المساعد استقبال استفسارات المرضى أيضًا خارج أوقات العمل.",
    location:
      "عادة يتم إرسال تفاصيل الموقع أثناء مرحلة التأكيد.\nإذا رغبت، يمكنني الآن متابعة طلب الحجز.",
    consultation:
      "نعم، يمكن جمع طلب استشارة أولية أولًا، خاصة إذا كان المريض يريد فهم الخطة العلاجية قبل تثبيت الموعد.",
    pain:
      "ذلك يعتمد على نوع العلاج، لكن العيادة عادة تشرح كل خطوة وتساعد المريض على فهم الخيار المناسب.",
    whitening:
      "تبييض الأسنان من أكثر الخدمات المطلوبة.\nوالخيار المناسب يتحدد حسب الحالة وغالبًا يتم تأكيده بعد التقييم.",
    braces:
      "خيارات التقويم تعتمد على حالة الأسنان بعد الفحص.\nعادة تراجع العيادة الحالة أولًا ثم تقترح الخطة المناسبة.",
    cleaning:
      "تنظيف الأسنان من أكثر الخدمات المطلوبة، وغالبًا يكون خطوة أولى قبل بعض الإجراءات التجميلية."
  },

  tr: {
    welcome:
      "Elite Dental Clinic'e hoş geldiniz 👋\nBugün size nasıl yardımcı olabilirim?\n1- Randevu al\n2- Hizmetleri sor\n3- Fiyatları sor",
    askName: "Harika 👍 İsminiz nedir?",
    askService:
      "Memnun olduk {name} 😊\nHangi hizmeti istiyorsunuz?\n(Temizlik - Diş teli - Beyazlatma)",
    askDay: "Hangi gün size uygundur?",
    askTime: "Harika 👍 Hangi saat sizin için uygun?",
    askPhone:
      "Harika. Lütfen telefon numaranızı gönderin, böylece klinik talebinizi teyit edebilsin.",
    confirm:
      "Tamam 👍\nİsim: {name}\nHizmet: {service}\nGün: {day}\nSaat: {time}\nTelefon: {phone}\nOnaylamak için şunu yazın: evet",
    done:
      "Talebiniz kaydedildi ✅\nCanlı sürümde klinik ekibi bunu yapılandırılmış bir rezervasyon talebi olarak alabilir ve devamını yönetebilir.",
    retryConfirm: "Onaylamak için lütfen şunu yazın: evet",
    services:
      "Şu anda sunduğumuz hizmetler:\n• Temizlik\n• Diş teli\n• Beyazlatma\nCanlı sürüm ayrıca hastaları sık sorulan sorularda yönlendirebilir ve uygun sonraki adıma taşıyabilir.",
    prices:
      "Fiyatlar vakaya ve tedavi türüne göre değişir.\nÖrneğin temizlik, beyazlatma ve diş teli için ücretler farklıdır.\nİsterseniz bir danışma veya rezervasyon talebi oluşturmanıza yardımcı olabilirim.",
    fallback:
      "Randevu, hizmetler, fiyatlar, çalışma saatleri, konum, danışma ve temel tedavi sorularında yardımcı olabilirim.\nİsterseniz 1 yazarak rezervasyon sürecini başlatabilirsiniz.",
    bookNudge:
      "İsterseniz şimdi devam edip bir dakikadan kısa sürede örnek bir rezervasyon talebi oluşturabiliriz.",
    hours:
      "Klinik çalışma saatlerinde talepleri yönetebilir, asistan ise mesai dışında da hasta isteklerini toplamaya devam edebilir.",
    location:
      "Konum detayları genelde onay aşamasında paylaşılır.\nİsterseniz şimdi rezervasyon talebiyle devam edebilirim.",
    consultation:
      "Evet, özellikle hasta tedavi planını anlamak istiyorsa önce danışma talebi toplanabilir.",
    pain:
      "Bu tedaviye göre değişir, ancak klinik genelde her adımı açıklar ve hasta için uygun seçeneği anlamasına yardımcı olur.",
    whitening:
      "Diş beyazlatma sık talep edilen hizmetlerden biridir.\nUygun yöntem vakaya göre değişir ve genelde değerlendirme sonrası netleşir.",
    braces:
      "Diş teli seçenekleri diş yapısına ve muayene sonucuna göre değişir.\nKlinik önce durumu inceler, sonra uygun planı önerir.",
    cleaning:
      "Temizlik en sık talep edilen hizmetlerden biridir ve çoğu zaman diğer estetik işlemlerden önce tercih edilir."
  }
};

const supportedLangs = ["en", "ar", "tr"];

function getLangFromURL() {
  const params = new URLSearchParams(window.location.search);
  const urlLang = params.get("lang");
  if (supportedLangs.includes(urlLang)) return urlLang;
  return null;
}

function detectMessageLanguage(text) {
  const value = text.trim();

  if (/^[0-9]+$/.test(value)) return null;

  const hasArabic = /[\u0600-\u06FF]/.test(value);
  if (hasArabic) return "ar";

  const turkishChars = /[çğıöşüÇĞİÖŞÜ]/.test(value);
  const turkishWords =
    /\b(merhaba|randevu|hizmet|evet|tamam|bugün|yarın|diş|temizlik|fiyat)\b/i.test(
      value
    );
  if (turkishChars || turkishWords) return "tr";

  const englishWords =
    /\b(hello|hi|book|appointment|service|services|price|prices|yes|clinic|cleaning|braces|whitening)\b/i.test(
      value
    );
  if (englishWords) return "en";

  return null;
}

let currentLang = getLangFromURL() || localStorage.getItem("siteLang") || "en";
if (!supportedLangs.includes(currentLang)) currentLang = "en";

let state = "start";
let userName = "";
let selectedService = "";
let selectedDay = "";
let selectedTime = "";
let phoneNumber = "";

function updateLanguageButtons() {
  demoLangButtons.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === currentLang);
  });
}

function updateBackLink() {
  if (demoBackBtn) {
    demoBackBtn.href = `../index.html?lang=${currentLang}`;
  }
}

function applyLanguage() {
  const t = uiTranslations[currentLang] || uiTranslations.en;

  document.documentElement.lang = currentLang;
  document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";
  document.body.dir = currentLang === "ar" ? "rtl" : "ltr";

  document.title = t.title;

  if (demoBackBtn) demoBackBtn.textContent = t.back;
  if (demoTopBadge) demoTopBadge.textContent = t.topBadge;
  if (demoHeroChip) demoHeroChip.textContent = t.heroChip;
  if (demoHeroTitle) demoHeroTitle.textContent = t.heroTitle;
  if (demoHeroSubtitle) demoHeroSubtitle.textContent = t.heroSubtitle;
  if (demoNotice) demoNotice.textContent = t.notice;
  if (clinicNameEl) clinicNameEl.textContent = t.clinicName;
  if (clinicRoleEl) clinicRoleEl.textContent = t.clinicRole;
  if (userInput) userInput.placeholder = t.inputPlaceholder;
  if (sendBtn) sendBtn.textContent = t.send;
  if (demoCtaText) demoCtaText.textContent = t.ctaText;
  if (demoCtaBtn) demoCtaBtn.textContent = t.ctaButton;

  localStorage.setItem("siteLang", currentLang);
  updateLanguageButtons();
  updateBackLink();
}

function switchBotLanguageFromMessage(text) {
  const detectedLang = detectMessageLanguage(text);
  if (!detectedLang) return;

  if (detectedLang !== currentLang) {
    currentLang = detectedLang;
    applyLanguage();
    clearQuickReplies();
  }
}

demoLangButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    currentLang = btn.dataset.lang;
    applyLanguage();
    startConversation();
  });
});

function scrollToBottom() {
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function createMessageElement(text, sender = "bot") {
  const wrapper = document.createElement("div");
  wrapper.className = `message ${sender}`;

  const bubble = document.createElement("div");
  bubble.className = "bubble";
  bubble.innerHTML = text.replace(/\n/g, "<br>");

  wrapper.appendChild(bubble);
  return wrapper;
}

function addMessage(text, sender = "bot") {
  const messageEl = createMessageElement(text, sender);
  chatMessages.appendChild(messageEl);
  scrollToBottom();
}

function showTyping() {
  const wrapper = document.createElement("div");
  wrapper.className = "message bot";
  wrapper.id = "typingIndicator";

  const typing = document.createElement("div");
  typing.className = "typing";
  typing.innerHTML = "<span></span><span></span><span></span>";

  wrapper.appendChild(typing);
  chatMessages.appendChild(wrapper);
  scrollToBottom();
}

function hideTyping() {
  const typing = document.getElementById("typingIndicator");
  if (typing) typing.remove();
}

function botReply(text, callback, delay = 950) {
  showTyping();

  setTimeout(() => {
    hideTyping();
    addMessage(text, "bot");
    if (callback) callback();
  }, delay);
}

function clearQuickReplies() {
  const existing = document.querySelector(".quick-replies");
  if (existing) existing.remove();
}

function showQuickReplies() {
  clearQuickReplies();

  const t = uiTranslations[currentLang] || uiTranslations.en;

  const wrapper = document.createElement("div");
  wrapper.className = "quick-replies";

  const btn1 = document.createElement("button");
  btn1.className = "quick-reply-btn";
  btn1.textContent = t.options.book;
  btn1.addEventListener("click", () => handleUserMessage("1"));

  const btn2 = document.createElement("button");
  btn2.className = "quick-reply-btn";
  btn2.textContent = t.options.services;
  btn2.addEventListener("click", () => handleUserMessage("2"));

  const btn3 = document.createElement("button");
  btn3.className = "quick-reply-btn";
  btn3.textContent = t.options.prices;
  btn3.addEventListener("click", () => handleUserMessage("3"));

  wrapper.appendChild(btn1);
  wrapper.appendChild(btn2);
  wrapper.appendChild(btn3);

  chatMessages.appendChild(wrapper);
  scrollToBottom();
}

function normalizeText(text) {
  return text.trim().toLowerCase();
}

function includesAny(text, keywords) {
  const value = normalizeText(text);
  return keywords.some((keyword) => value.includes(keyword));
}

function isBookIntent(text) {
  return includesAny(text, [
    "1",
    "book",
    "appointment",
    "reserve",
    "booking",
    "حجز",
    "موعد",
    "احجز",
    "randevu",
    "rezervasyon"
  ]);
}

function isServicesIntent(text) {
  return includesAny(text, [
    "2",
    "service",
    "services",
    "الخدمات",
    "خدمات",
    "استفسار",
    "hizmet",
    "hizmetler"
  ]);
}

function isPricesIntent(text) {
  return includesAny(text, [
    "3",
    "price",
    "prices",
    "cost",
    "pricing",
    "سعر",
    "أسعار",
    "الاسعار",
    "تكلفة",
    "fiyat",
    "ücret",
    "ucret"
  ]);
}

function isConfirmIntent(text) {
  return includesAny(text, ["yes", "نعم", "أجل", "اجل", "اي", "evet", "tamam"]);
}

function getFAQReply(text) {
  const bot = botTexts[currentLang] || botTexts.en;

  if (
    includesAny(text, [
      "hours",
      "working hours",
      "open",
      "دوام",
      "ساعات",
      "متى",
      "çalışma",
      "saat"
    ])
  ) {
    return bot.hours;
  }

  if (
    includesAny(text, [
      "location",
      "address",
      "where",
      "عنوان",
      "موقع",
      "وين",
      "adres",
      "konum",
      "nerede"
    ])
  ) {
    return bot.location;
  }

  if (
    includesAny(text, [
      "consultation",
      "consult",
      "استشارة",
      "استشاره",
      "danışma",
      "danisma"
    ])
  ) {
    return bot.consultation;
  }

  if (
    includesAny(text, ["pain", "hurt", "وجع", "ألم", "الم", "acı", "agri", "ağrı"])
  ) {
    return bot.pain;
  }

  if (includesAny(text, ["whitening", "تبييض", "beyazlatma"])) {
    return bot.whitening;
  }

  if (includesAny(text, ["braces", "تقويم", "diş teli", "dis teli"])) {
    return bot.braces;
  }

  if (includesAny(text, ["cleaning", "تنظيف", "temizlik"])) {
    return bot.cleaning;
  }

  if (isPricesIntent(text)) {
    return bot.prices;
  }

  if (isServicesIntent(text)) {
    return bot.services;
  }

  return null;
}

function handleSmartGeneralQuestion(text) {
  const faq = getFAQReply(text);
  const bot = botTexts[currentLang] || botTexts.en;

  if (faq) {
    botReply(faq, () => {
      setTimeout(() => {
        botReply(
          bot.bookNudge,
          () => {
            showQuickReplies();
          },
          850
        );
      }, 250);
    });
    return true;
  }

  return false;
}

function handleUserMessage(rawText) {
  const text = rawText.trim();
  if (!text) return;

  switchBotLanguageFromMessage(text);

  clearQuickReplies();
  addMessage(text, "user");

  const bot = botTexts[currentLang] || botTexts.en;

  if (state === "start") {
    if (isBookIntent(text)) {
      state = "awaiting_name";
      botReply(bot.askName);
      return;
    }

    if (isServicesIntent(text)) {
      state = "general_mode";
      botReply(bot.services, () => {
        setTimeout(() => {
          botReply(
            bot.bookNudge,
            () => {
              showQuickReplies();
            },
            850
          );
        }, 250);
      });
      return;
    }

    if (isPricesIntent(text)) {
      state = "general_mode";
      botReply(bot.prices, () => {
        setTimeout(() => {
          botReply(
            bot.bookNudge,
            () => {
              showQuickReplies();
            },
            850
          );
        }, 250);
      });
      return;
    }

    if (handleSmartGeneralQuestion(text)) return;

    botReply(bot.fallback, () => {
      showQuickReplies();
    });
    return;
  }

  if (state === "general_mode") {
    if (isBookIntent(text)) {
      state = "awaiting_name";
      botReply(bot.askName);
      return;
    }

    if (handleSmartGeneralQuestion(text)) return;

    botReply(bot.fallback, () => {
      showQuickReplies();
    });
    return;
  }

  if (state === "awaiting_name") {
    userName = text;
    state = "awaiting_service";
    botReply(bot.askService.replace("{name}", userName));
    return;
  }

  if (state === "awaiting_service") {
    selectedService = text;
    state = "awaiting_day";
    botReply(bot.askDay);
    return;
  }

  if (state === "awaiting_day") {
    selectedDay = text;
    state = "awaiting_time";
    botReply(bot.askTime);
    return;
  }

  if (state === "awaiting_time") {
    selectedTime = text;
    state = "awaiting_phone";
    botReply(bot.askPhone);
    return;
  }

  if (state === "awaiting_phone") {
    phoneNumber = text;
    state = "awaiting_confirmation";

    const confirmText = bot.confirm
      .replace("{name}", userName)
      .replace("{service}", selectedService)
      .replace("{day}", selectedDay)
      .replace("{time}", selectedTime)
      .replace("{phone}", phoneNumber);

    botReply(confirmText);
    return;
  }

  if (state === "awaiting_confirmation") {
    if (isConfirmIntent(text)) {
      state = "done";
      botReply(bot.done, () => {
        demoCTA.classList.add("show");
      });
      return;
    }

    if (handleSmartGeneralQuestion(text)) return;

    botReply(bot.retryConfirm);
    return;
  }

  if (state === "done") {
    if (handleSmartGeneralQuestion(text)) return;
    botReply(bot.done);
  }
}

function sendMessage() {
  const text = userInput.value;
  if (!text.trim()) return;
  handleUserMessage(text);
  userInput.value = "";
  userInput.focus();
}

sendBtn.addEventListener("click", sendMessage);

userInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    sendMessage();
  }
});

function startConversation() {
  applyLanguage();
  chatMessages.innerHTML = "";
  demoCTA.classList.remove("show");

  state = "start";
  userName = "";
  selectedService = "";
  selectedDay = "";
  selectedTime = "";
  phoneNumber = "";

  const bot = botTexts[currentLang] || botTexts.en;

  setTimeout(() => {
    addMessage(bot.welcome, "bot");
    showQuickReplies();
  }, 500);
}

startConversation();