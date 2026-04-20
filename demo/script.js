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
    title: "Convexa AI Demo",
    back: "← Back",
    topBadge: "Live WhatsApp Demo",
    heroChip: "⚡ ConveXa AI Assistant",
    heroTitle: "Watch how your clinic can reply, qualify, and turn chats into bookings automatically",
    heroSubtitle:
      "This is a live interactive demo. The real version connects directly to your clinic’s WhatsApp number and handles patient conversations automatically.",
    notice:
      "🚀 This is a live demo of the Convexa AI WhatsApp assistant. The real version connects directly to your clinic's WhatsApp and replies to patients automatically.",
    clinicName: "Elite Dental Clinic",
    clinicRole: "WhatsApp Assistant",
    inputPlaceholder: "Type your message...",
    send: "Send",
    ctaText:
      "🔥 This is only a simple demo. The real system replies to every patient automatically, organizes conversations, and helps your clinic get more bookings every day.",
    ctaButton: "Start on your WhatsApp",
    options: {
      book: "1- Book an appointment",
      services: "2- Ask about services",
      prices: "3- Ask about prices"
    }
  },

  ar: {
    title: "عرض Convexa AI",
    back: "→ رجوع",
    topBadge: "تجربة واتساب مباشرة",
    heroChip: "⚡ مساعد ConveXa AI",
    heroTitle: "شاهد كيف يمكن لعيادتك أن ترد على المرضى، تؤهلهم، وتحول المحادثات إلى حجوزات تلقائيًا",
    heroSubtitle:
      "هذه تجربة تفاعلية مباشرة. النسخة الحقيقية يتم ربطها مباشرة برقم واتساب العيادة وتتعامل مع محادثات المرضى تلقائيًا.",
    notice:
      "🚀 هذه تجربة مباشرة لمساعد واتساب من ConveXa AI. النسخة الحقيقية يتم ربطها مباشرة برقم واتساب العيادة وترد على المرضى تلقائيًا.",
    clinicName: "Elite Dental Clinic",
    clinicRole: "مساعد واتساب",
    inputPlaceholder: "اكتب رسالتك...",
    send: "إرسال",
    ctaText:
      "🔥 هذا مجرد نموذج بسيط. النسخة الحقيقية ترد على كل المرضى تلقائيًا، وتنظم المحادثات، وتساعد عيادتك على زيادة الحجوزات يوميًا.",
    ctaButton: "ابدأ على رقمك الآن",
    options: {
      book: "1- حجز موعد",
      services: "2- الاستفسار عن الخدمات",
      prices: "3- الاستفسار عن الأسعار"
    }
  },

  tr: {
    title: "Convexa AI Demo",
    back: "← Geri",
    topBadge: "Canlı WhatsApp Demo",
    heroChip: "⚡ ConveXa AI Asistanı",
    heroTitle: "Kliniğinizin otomatik olarak yanıt verip, hastaları yönlendirip, sohbetleri rezervasyona nasıl dönüştürebildiğini görün",
    heroSubtitle:
      "Bu canlı etkileşimli bir demodur. Gerçek sürüm doğrudan kliniğinizin WhatsApp numarasına bağlanır ve hasta konuşmalarını otomatik olarak yönetir.",
    notice:
      "🚀 Bu, ConveXa AI WhatsApp asistanının canlı demosudur. Gerçek sürüm doğrudan kliniğinizin WhatsApp numarasına bağlanır ve hastalara otomatik olarak yanıt verir.",
    clinicName: "Elite Dental Clinic",
    clinicRole: "WhatsApp Asistanı",
    inputPlaceholder: "Mesajınızı yazın...",
    send: "Gönder",
    ctaText:
      "🔥 Bu sadece basit bir demo. Gerçek sistem tüm hastalara otomatik yanıt verir, konuşmaları düzenler ve kliniğinizin her gün daha fazla randevu almasına yardımcı olur.",
    ctaButton: "Kendi Numaranızda Başlatın",
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
    askPhone: "Great. Please send your phone number so the clinic can confirm your request.",
    confirm:
      "Got it 👍\nName: {name}\nService: {service}\nDay: {day}\nTime: {time}\nPhone: {phone}\nPlease confirm by sending: yes",
    done:
      "Your request has been recorded ✅\nOur team will contact you soon to confirm the appointment.",
    retryConfirm: "Please type yes to confirm your request.",
    services:
      "We currently offer:\n• Cleaning\n• Braces\n• Whitening\nWe also help patients with quick information, appointment requests, and follow-up messages.",
    prices:
      "Prices depend on the case and treatment type.\nFor example, cleaning, whitening, and braces each have different pricing.\nIf you'd like, I can help you book a consultation request and the clinic can contact you with details.",
    fallback:
      "I can help with appointments, services, prices, clinic hours, location, consultation questions, and treatment basics.\nYou can also type 1 to start booking.",
    bookNudge:
      "If you'd like, we can continue right now and create your appointment request in less than a minute.",
    hours:
      "The clinic is available during regular working hours, and the assistant can still collect requests automatically outside working hours.",
    location:
      "The clinic location and arrival details are usually shared with the patient during confirmation.\nIf you'd like, I can continue with a booking request now.",
    consultation:
      "Yes, consultation requests can be arranged first, especially if you want to understand the treatment plan before booking.",
    pain:
      "That depends on the treatment, but clinics usually explain each step clearly and help the patient choose the most suitable option.",
    whitening:
      "Teeth whitening is one of the common requested services.\nThe exact result depends on the case, and the clinic usually confirms the suitable option after evaluation.",
    braces:
      "Braces options depend on the dental case and examination.\nThe clinic usually reviews the situation first, then recommends the most suitable plan.",
    cleaning:
      "Cleaning is one of the most common visits and is often requested as a first step before other cosmetic treatments."
  },

  ar: {
    welcome:
      "أهلاً بك في Elite Dental Clinic 👋\nكيف يمكنني مساعدتك اليوم؟\n1- حجز موعد\n2- الاستفسار عن الخدمات\n3- الاستفسار عن الأسعار",
    askName: "رائع 👍 ما اسمك؟",
    askService:
      "تشرفنا فيك {name} 😊\nما الخدمة التي ترغب بها؟\n(تنظيف - تقويم - تبييض)",
    askDay: "أي يوم يناسبك؟",
    askTime: "ممتاز 👍 ما الوقت المناسب لك؟",
    askPhone: "رائع. أرسل رقم هاتفك ليتمكن فريق العيادة من تأكيد الطلب معك.",
    confirm:
      "تم 👍\nالاسم: {name}\nالخدمة: {service}\nاليوم: {day}\nالوقت: {time}\nرقم الهاتف: {phone}\nللتأكيد أرسل: نعم",
    done:
      "تم تسجيل طلبك ✅\nسيتم التواصل معك قريبًا لتأكيد الموعد.",
    retryConfirm: "للتأكيد أرسل كلمة: نعم",
    services:
      "الخدمات المتوفرة حاليًا:\n• تنظيف\n• تقويم\n• تبييض\nكما يساعد النظام في الرد على الاستفسارات السريعة، وتنظيم طلبات الحجز، ومتابعة المحادثات.",
    prices:
      "الأسعار تختلف حسب الحالة ونوع الخدمة المطلوبة.\nمثلًا أسعار التنظيف تختلف عن التبييض أو التقويم.\nإذا رغبت، أستطيع مساعدتك في إرسال طلب استشارة لتقوم العيادة بالتواصل معك بالتفاصيل.",
    fallback:
      "أستطيع مساعدتك في الحجز، الخدمات، الأسعار، أوقات العمل، الموقع، الاستشارة، والأسئلة الأساسية عن العلاج.\nويمكنك أيضًا كتابة الرقم 1 للبدء بالحجز.",
    bookNudge:
      "إذا رغبت، يمكننا الآن متابعة طلب الحجز خلال أقل من دقيقة.",
    hours:
      "العيادة تعمل ضمن أوقات الدوام المعتادة، بينما يستطيع المساعد استقبال الطلبات وتنظيمها تلقائيًا حتى خارج أوقات العمل.",
    location:
      "عادة يتم إرسال تفاصيل الموقع والوصول للمريض أثناء تأكيد الموعد.\nوإذا رغبت، يمكنني الآن متابعة طلب الحجز مباشرة.",
    consultation:
      "نعم، يمكن طلب استشارة أولية أولًا، خاصة إذا كنت تريد معرفة الخطة المناسبة قبل تثبيت الموعد.",
    pain:
      "ذلك يعتمد على نوع الخدمة، لكن عادة تقوم العيادة بشرح الخطوات للمريض واختيار الخيار الأنسب له.",
    whitening:
      "تبييض الأسنان من أكثر الخدمات المطلوبة.\nوالنتيجة المناسبة تختلف حسب الحالة، لذلك تؤكد العيادة الخيار المناسب بعد التقييم.",
    braces:
      "خيارات التقويم تعتمد على حالة الأسنان بعد المعاينة.\nوفي العادة تقوم العيادة بمراجعة الحالة ثم اقتراح الخطة الأنسب.",
    cleaning:
      "تنظيف الأسنان من أكثر الخدمات شيوعًا، وكثير من المرضى يبدؤون به قبل الإجراءات التجميلية الأخرى."
  },

  tr: {
    welcome:
      "Elite Dental Clinic'e hoş geldiniz 👋\nBugün size nasıl yardımcı olabilirim?\n1- Randevu al\n2- Hizmetleri sor\n3- Fiyatları sor",
    askName: "Harika 👍 İsminiz nedir?",
    askService:
      "Memnun olduk {name} 😊\nHangi hizmeti istiyorsunuz?\n(Temizlik - Diş teli - Beyazlatma)",
    askDay: "Hangi gün size uygundur?",
    askTime: "Harika 👍 Hangi saat sizin için uygun?",
    askPhone: "Harika. Lütfen telefon numaranızı gönderin, böylece klinik talebinizi teyit edebilsin.",
    confirm:
      "Tamam 👍\nİsim: {name}\nHizmet: {service}\nGün: {day}\nSaat: {time}\nTelefon: {phone}\nOnaylamak için şunu yazın: evet",
    done:
      "Talebiniz kaydedildi ✅\nRandevuyu onaylamak için ekibimiz kısa süre içinde sizinle iletişime geçecek.",
    retryConfirm: "Onaylamak için lütfen şunu yazın: evet",
    services:
      "Şu anda sunduğumuz hizmetler:\n• Temizlik\n• Diş teli\n• Beyazlatma\nSistem ayrıca hızlı soruları yanıtlamaya, randevu taleplerini toplamaya ve konuşmaları takip etmeye yardımcı olur.",
    prices:
      "Fiyatlar vakaya ve istenen tedaviye göre değişir.\nÖrneğin temizlik, beyazlatma ve diş teli için ücretler farklıdır.\nİsterseniz bir danışma talebi oluşturmanıza yardımcı olabilirim, klinik size detaylarla dönüş yapar.",
    fallback:
      "Randevu, hizmetler, fiyatlar, çalışma saatleri, konum, danışma ve temel tedavi sorularında yardımcı olabilirim.\nİsterseniz 1 yazarak hemen randevu sürecini başlatabilirsiniz.",
    bookNudge:
      "İsterseniz şimdi devam edip bir dakikadan kısa sürede randevu talebinizi oluşturabiliriz.",
    hours:
      "Klinik normal çalışma saatlerinde hizmet verir, ancak asistan çalışma saatleri dışında da talepleri otomatik olarak toplayabilir.",
    location:
      "Konum ve ulaşım detayları genelde randevu onayı sırasında hasta ile paylaşılır.\nİsterseniz şimdi rezervasyon talebiyle devam edebilirim.",
    consultation:
      "Evet, özellikle tedavi planını anlamak istiyorsanız önce danışma talebi oluşturulabilir.",
    pain:
      "Bu tedaviye göre değişir, ancak klinik genelde her adımı açıklayarak hasta için en uygun seçeneği belirler.",
    whitening:
      "Diş beyazlatma en çok talep edilen hizmetlerden biridir.\nUygun sonuç hastaya göre değişir ve klinik değerlendirme sonrası en uygun seçeneği belirtir.",
    braces:
      "Diş teli seçenekleri diş yapısına ve muayene sonucuna göre belirlenir.\nKlinik önce durumu değerlendirir, sonra en uygun planı önerir.",
    cleaning:
      "Temizlik en yaygın ziyaretlerden biridir ve birçok hasta estetik işlemlerden önce bunu tercih eder."
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
    /\b(merhaba|randevu|hizmet|evet|tamam|bugün|yarın|diş|temizlik|fiyat)\b/i.test(value);
  if (turkishChars || turkishWords) return "tr";

  const englishWords =
    /\b(hello|hi|book|appointment|service|services|price|prices|yes|clinic|cleaning|braces|whitening)\b/i.test(value);
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
  return includesAny(text, [
    "yes",
    "نعم",
    "أجل",
    "اجل",
    "اي",
    "evet",
    "tamam"
  ]);
}

function getFAQReply(text) {
  const bot = botTexts[currentLang] || botTexts.en;

  if (includesAny(text, ["hours", "working hours", "open", "دوام", "ساعات", "متى", "çalışma", "saat"])) {
    return bot.hours;
  }

  if (includesAny(text, ["location", "address", "where", "عنوان", "موقع", "وين", "adres", "konum", "nerede"])) {
    return bot.location;
  }

  if (includesAny(text, ["consultation", "consult", "استشارة", "استشاره", "danışma", "danisma"])) {
    return bot.consultation;
  }

  if (includesAny(text, ["pain", "hurt", "وجع", "ألم", "الم", "acı", "agri", "ağrı"])) {
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
        botReply(bot.bookNudge, () => {
          showQuickReplies();
        }, 850);
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
          botReply(bot.bookNudge, () => {
            showQuickReplies();
          }, 850);
        }, 250);
      });
      return;
    }

    if (isPricesIntent(text)) {
      state = "general_mode";
      botReply(bot.prices, () => {
        setTimeout(() => {
          botReply(bot.bookNudge, () => {
            showQuickReplies();
          }, 850);
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