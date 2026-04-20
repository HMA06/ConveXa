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
    },
    repeatedServices:
      "I already shared the main services above. If you want, tell me which service you want to ask about and I’ll continue without repeating the menu.",
    repeatedPrices:
      "I already shared the pricing note above. If you want, tell me which service you want pricing for and I’ll continue without repeating the menu.",
    repeatedGeneric:
      "I can continue from here without repeating everything. You can ask about services, prices, clinic details, or type 1 to start booking."
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
    },
    repeatedServices:
      "تم توضيح قسم الخدمات بالفعل. اكتب فقط اسم الخدمة التي تريد السؤال عنها وسأكمل بدون أي تكرار.",
    repeatedPrices:
      "تم توضيح قسم الأسعار بالفعل. اكتب فقط اسم الخدمة التي تريد معرفة سعرها وسأكمل بدون أي تكرار.",
    repeatedGeneric:
      "يمكنني المتابعة من هنا بدون تكرار نفس الكلام. اسأل عن الخدمات أو الأسعار أو تفاصيل العيادة، أو اكتب 1 للبدء بالحجز."
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
    },
    repeatedServices:
      "Hizmetler bölümü zaten gösterildi. Sadece hangi hizmeti sormak istediğinizi yazın, menüyü tekrar etmeden devam edeyim.",
    repeatedPrices:
      "Fiyatlar bölümü zaten gösterildi. Sadece fiyatını öğrenmek istediğiniz hizmeti yazın, menüyü tekrar etmeden devam edeyim.",
    repeatedGeneric:
      "Aynı şeyi tekrar etmeden buradan devam edebilirim. Hizmetler, fiyatlar, klinik detayları hakkında sorabilir ya da 1 yazarak rezervasyon sürecini başlatabilirsiniz."
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
    servicesPrompt:
      "Sure 👍 Which service would you like to ask about?\n(Cleaning - Braces - Whitening)",
    pricesPrompt:
      "Sure 👍 Which service would you like to know the price about?\n(Cleaning - Braces - Whitening)",
    servicesGeneric:
      "We currently offer:\n• Cleaning\n• Braces\n• Whitening\nTell me which one you want to ask about and I’ll continue directly.",
    pricesGeneric:
      "Pricing depends on the case and treatment type.\nTell me which service you mean and I’ll continue directly without repeating the first message.",
    priceCleaning:
      "Cleaning pricing depends on the case after a quick review. In the live version, the assistant can collect the request and pass it to the clinic team for exact confirmation.",
    priceBraces:
      "Braces pricing depends on the dental case and treatment plan. The clinic usually confirms the exact cost after evaluation.",
    priceWhitening:
      "Whitening pricing depends on the suitable approach for the case. The clinic usually confirms the exact price after a quick assessment.",
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
    servicesPrompt:
      "أكيد 👍 شو الخدمة يلي بدك تسأل عنها؟\n(تنظيف - تقويم - تبييض)",
    pricesPrompt:
      "أكيد 👍 شو الخدمة يلي بدك تعرف سعرها؟\n(تنظيف - تقويم - تبييض)",
    servicesGeneric:
      "الخدمات المتوفرة حاليًا:\n• تنظيف\n• تقويم\n• تبييض\nاكتب اسم الخدمة التي تريد السؤال عنها وسأكمل مباشرة.",
    pricesGeneric:
      "الأسعار تختلف حسب الحالة ونوع الخدمة المطلوبة.\nاكتب اسم الخدمة التي تقصدها وسأكمل مباشرة بدون تكرار الرسالة الأولى.",
    priceCleaning:
      "سعر تنظيف الأسنان يختلف حسب الحالة بعد مراجعة سريعة. في النسخة الحقيقية يمكن للمساعد جمع الطلب وتحويله لفريق العيادة لتأكيد السعر بدقة.",
    priceBraces:
      "سعر التقويم يعتمد على حالة الأسنان والخطة العلاجية. عادة يتم تأكيد السعر النهائي بعد التقييم.",
    priceWhitening:
      "سعر التبييض يعتمد على الحالة والطريقة المناسبة. عادة يتم تأكيد السعر النهائي بعد تقييم سريع.",
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
    servicesPrompt:
      "Tabii 👍 Hangi hizmet hakkında soru sormak istiyorsunuz?\n(Temizlik - Diş teli - Beyazlatma)",
    pricesPrompt:
      "Tabii 👍 Hangi hizmetin fiyatını öğrenmek istiyorsunuz?\n(Temizlik - Diş teli - Beyazlatma)",
    servicesGeneric:
      "Şu anda sunduğumuz hizmetler:\n• Temizlik\n• Diş teli\n• Beyazlatma\nHangi hizmeti sormak istediğinizi yazın, doğrudan devam edeyim.",
    pricesGeneric:
      "Fiyatlar vakaya ve tedavi türüne göre değişir.\nHangi hizmeti kastettiğinizi yazın, ilk mesajı tekrar etmeden doğrudan devam edeyim.",
    priceCleaning:
      "Temizlik fiyatı durum değerlendirmesine göre değişir. Canlı sürümde asistan talebi toplayıp kliniğe ileterek net fiyat teyidi alabilir.",
    priceBraces:
      "Diş teli fiyatı diş yapısına ve tedavi planına göre değişir. Klinik genelde net ücreti değerlendirme sonrası paylaşır.",
    priceWhitening:
      "Beyazlatma fiyatı uygun yönteme ve vakaya göre değişir. Klinik genelde net fiyatı kısa değerlendirme sonrası teyit eder.",
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
const pureNumberRegex = /^\s*[123]\s*$/;

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

let lastIntent = null;
let lastFaqKey = null;
let lastBotText = "";
let lastNudgeAt = 0;

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

function addBotMessageSmart(text) {
  if (text === lastBotText) return false;
  addMessage(text, "bot");
  lastBotText = text;
  return true;
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
    const added = addBotMessageSmart(text);
    if (callback) callback(added);
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

function isExactMenuNumber(text, number) {
  return new RegExp(`^\\s*${number}\\s*$`).test(text);
}

function includesAny(text, keywords) {
  const value = normalizeText(text);
  return keywords.some((keyword) => value.includes(keyword));
}

function isBookIntent(text) {
  return (
    isExactMenuNumber(text, 1) ||
    includesAny(text, [
      "book",
      "appointment",
      "reserve",
      "booking",
      "حجز",
      "موعد",
      "احجز",
      "randevu",
      "rezervasyon"
    ])
  );
}

function isServicesIntent(text) {
  return (
    isExactMenuNumber(text, 2) ||
    includesAny(text, [
      "service",
      "services",
      "الخدمات",
      "خدمات",
      "hizmet",
      "hizmetler"
    ])
  );
}

function isPricesIntent(text) {
  return (
    isExactMenuNumber(text, 3) ||
    includesAny(text, [
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
    ])
  );
}

function isConfirmIntent(text) {
  return includesAny(text, ["yes", "نعم", "أجل", "اجل", "اي", "evet", "tamam"]);
}

function getServiceKey(text) {
  const value = normalizeText(text);

  if (includesAny(value, ["cleaning", "تنظيف", "temizlik"])) return "cleaning";
  if (includesAny(value, ["braces", "تقويم", "diş teli", "dis teli"])) return "braces";
  if (includesAny(value, ["whitening", "تبييض", "beyazlatma"])) return "whitening";

  return null;
}

function getPriceReplyForService(serviceKey, bot) {
  if (serviceKey === "cleaning") return bot.priceCleaning;
  if (serviceKey === "braces") return bot.priceBraces;
  if (serviceKey === "whitening") return bot.priceWhitening;
  return bot.pricesGeneric;
}

function getFAQReply(text) {
  const bot = botTexts[currentLang] || botTexts.en;

  if (includesAny(text, ["hours", "working hours", "open", "دوام", "ساعات", "متى", "çalışma", "saat"])) {
    return { key: "hours", text: bot.hours };
  }

  if (includesAny(text, ["location", "address", "where", "عنوان", "موقع", "وين", "adres", "konum", "nerede"])) {
    return { key: "location", text: bot.location };
  }

  if (includesAny(text, ["consultation", "consult", "استشارة", "استشاره", "danışma", "danisma"])) {
    return { key: "consultation", text: bot.consultation };
  }

  if (includesAny(text, ["pain", "hurt", "وجع", "ألم", "الم", "acı", "agri", "ağrı"])) {
    return { key: "pain", text: bot.pain };
  }

  if (includesAny(text, ["whitening", "تبييض", "beyazlatma"])) {
    return { key: "whitening", text: bot.whitening };
  }

  if (includesAny(text, ["braces", "تقويم", "diş teli", "dis teli"])) {
    return { key: "braces", text: bot.braces };
  }

  if (includesAny(text, ["cleaning", "تنظيف", "temizlik"])) {
    return { key: "cleaning", text: bot.cleaning };
  }

  if (isPricesIntent(text)) {
    return { key: "prices", text: bot.pricesGeneric };
  }

  if (isServicesIntent(text)) {
    return { key: "services", text: bot.servicesGeneric };
  }

  return null;
}

function shouldShowNudge() {
  const now = Date.now();
  if (now - lastNudgeAt < 7000) return false;
  lastNudgeAt = now;
  return true;
}

function maybeShowNudge() {
  const bot = botTexts[currentLang] || botTexts.en;
  if (!shouldShowNudge()) {
    showQuickReplies();
    return;
  }

  setTimeout(() => {
    botReply(
      bot.bookNudge,
      () => {
        showQuickReplies();
      },
      850
    );
  }, 250);
}

function handleRepeatedIntent(intent) {
  const t = uiTranslations[currentLang] || uiTranslations.en;
  const bot = botTexts[currentLang] || botTexts.en;

  if (intent === "services") {
    state = "awaiting_service_question";
    botReply(`${t.repeatedServices}\n\n${bot.servicesPrompt}`, () => {
      showQuickReplies();
    }, 650);
    return true;
  }

  if (intent === "prices") {
    state = "awaiting_price_question";
    botReply(`${t.repeatedPrices}\n\n${bot.pricesPrompt}`, () => {
      showQuickReplies();
    }, 650);
    return true;
  }

  return false;
}

function handleSmartGeneralQuestion(text) {
  const faq = getFAQReply(text);
  if (!faq) return false;

  if (faq.key === lastFaqKey) {
    const t = uiTranslations[currentLang] || uiTranslations.en;
    botReply(t.repeatedGeneric, () => {
      showQuickReplies();
    }, 650);
    return true;
  }

  lastFaqKey = faq.key;
  lastIntent = faq.key;

  botReply(faq.text, () => {
    maybeShowNudge();
  });

  return true;
}

function resetRepeatMemoryForFlow() {
  lastIntent = null;
  lastFaqKey = null;
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
      resetRepeatMemoryForFlow();
      state = "awaiting_name";
      botReply(bot.askName);
      return;
    }

    if (isServicesIntent(text)) {
      state = "awaiting_service_question";
      lastIntent = "services";
      lastFaqKey = "services";
      botReply(bot.servicesPrompt, () => {
        showQuickReplies();
      });
      return;
    }

    if (isPricesIntent(text)) {
      state = "awaiting_price_question";
      lastIntent = "prices";
      lastFaqKey = "prices";
      botReply(bot.pricesPrompt, () => {
        showQuickReplies();
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
      resetRepeatMemoryForFlow();
      state = "awaiting_name";
      botReply(bot.askName);
      return;
    }

    if (isServicesIntent(text) && lastIntent === "services") {
      handleRepeatedIntent("services");
      return;
    }

    if (isPricesIntent(text) && lastIntent === "prices") {
      handleRepeatedIntent("prices");
      return;
    }

    if (isServicesIntent(text)) {
      state = "awaiting_service_question";
      lastIntent = "services";
      lastFaqKey = "services";
      botReply(bot.servicesPrompt, () => {
        showQuickReplies();
      });
      return;
    }

    if (isPricesIntent(text)) {
      state = "awaiting_price_question";
      lastIntent = "prices";
      lastFaqKey = "prices";
      botReply(bot.pricesPrompt, () => {
        showQuickReplies();
      });
      return;
    }

    if (handleSmartGeneralQuestion(text)) return;

    botReply(bot.fallback, () => {
      showQuickReplies();
    });
    return;
  }

  if (state === "awaiting_service_question") {
    if (isBookIntent(text)) {
      resetRepeatMemoryForFlow();
      state = "awaiting_name";
      botReply(bot.askName);
      return;
    }

    if (isPricesIntent(text)) {
      state = "awaiting_price_question";
      lastIntent = "prices";
      lastFaqKey = "prices";
      botReply(bot.pricesPrompt, () => {
        showQuickReplies();
      });
      return;
    }

    const serviceKey = getServiceKey(text);
    if (serviceKey) {
      state = "general_mode";
      lastIntent = "services";
      lastFaqKey = serviceKey;
      botReply(bot[serviceKey], () => {
        maybeShowNudge();
      });
      return;
    }

    if (handleSmartGeneralQuestion(text)) {
      state = "general_mode";
      return;
    }

    state = "general_mode";
    lastIntent = "services";
    lastFaqKey = "services";
    botReply(bot.servicesGeneric, () => {
      showQuickReplies();
    });
    return;
  }

  if (state === "awaiting_price_question") {
    if (isBookIntent(text)) {
      resetRepeatMemoryForFlow();
      state = "awaiting_name";
      botReply(bot.askName);
      return;
    }

    if (isServicesIntent(text)) {
      state = "awaiting_service_question";
      lastIntent = "services";
      lastFaqKey = "services";
      botReply(bot.servicesPrompt, () => {
        showQuickReplies();
      });
      return;
    }

    const serviceKey = getServiceKey(text);
    if (serviceKey) {
      state = "general_mode";
      lastIntent = "prices";
      lastFaqKey = `price_${serviceKey}`;
      botReply(getPriceReplyForService(serviceKey, bot), () => {
        maybeShowNudge();
      });
      return;
    }

    if (handleSmartGeneralQuestion(text)) {
      state = "general_mode";
      return;
    }

    state = "general_mode";
    lastIntent = "prices";
    lastFaqKey = "prices";
    botReply(bot.pricesGeneric, () => {
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

    const t = uiTranslations[currentLang] || uiTranslations.en;
    botReply(t.repeatedGeneric, () => {
      showQuickReplies();
    }, 650);
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
  lastIntent = null;
  lastFaqKey = null;
  lastBotText = "";
  lastNudgeAt = 0;

  const bot = botTexts[currentLang] || botTexts.en;

  setTimeout(() => {
    addBotMessageSmart(bot.welcome);
    showQuickReplies();
  }, 500);
}

startConversation();