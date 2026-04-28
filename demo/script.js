const chatBox = document.getElementById("chatBox");
const options = document.getElementById("options");

const whatsappURL =
  "https://wa.me/31684957550?text=Hello,%20I%20want%20to%20automate%20my%20clinic%20using%20ConveXa.";

let currentLang = localStorage.getItem("convexaLang") || "en";

let state = {
  flow: null,
  step: 0,
  data: {
    service: null,
    category: null,
    day: null,
    time: null,
    name: null,
    phone: null
  }
};

const pageText = {
  en: {
    back: "← Back to ConveXa",
    badge: "Interactive bot demo",
    title: "See how clinics turn WhatsApp messages into real bookings.",
    subtitle: "This demo simulates how a clinic WhatsApp assistant can qualify inquiries, answer service questions, handle prices, and collect appointment details.",
    proof1Title: "Intent-aware",
    proof1Text: "booking / services / prices",
    proof2Title: "Step-by-step",
    proof2Text: "service → day → time → contact",
    assistantName: "ConveXa Clinic Assistant",
    online: "Online now"
  },
  ar: {
    back: "← العودة إلى ConveXa",
    badge: "ديمو بوت تفاعلي",
    title: "شاهد كيف تحوّل العيادات رسائل واتساب إلى حجوزات حقيقية.",
    subtitle: "هذا الديمو يحاكي كيف يمكن لمساعد واتساب للعيادات تأهيل المرضى، الإجابة عن الخدمات والأسعار، وجمع تفاصيل الموعد.",
    proof1Title: "يفهم النية",
    proof1Text: "حجز / خدمات / أسعار",
    proof2Title: "خطوة بخطوة",
    proof2Text: "الخدمة → اليوم → الوقت → التواصل",
    assistantName: "مساعد عيادة ConveXa",
    online: "متصل الآن"
  },
  tr: {
    back: "← ConveXa'ya dön",
    badge: "İnteraktif bot demosu",
    title: "Kliniklerin WhatsApp mesajlarını gerçek randevulara nasıl çevirdiğini görün.",
    subtitle: "Bu demo, bir klinik WhatsApp asistanının talepleri nasıl nitelendirdiğini, hizmet ve fiyat sorularını nasıl yanıtladığını gösterir.",
    proof1Title: "Niyet algılar",
    proof1Text: "randevu / hizmet / fiyat",
    proof2Title: "Adım adım",
    proof2Text: "hizmet → gün → saat → iletişim",
    assistantName: "ConveXa Klinik Asistanı",
    online: "Çevrimiçi"
  }
};

const botText = {
  en: {
    intro1: "Hi 👋 I’m the ConveXa Clinic Assistant. I can help patients book, ask about services, or understand prices.",
    intro2: "What would you like to test?",
    book: "Book appointment",
    services: "Ask about services",
    prices: "Ask about prices",
    askService: "Absolutely. Which service is the patient interested in?",
    service1: "Teeth whitening",
    service2: "Dental implants",
    service3: "Botox / Fillers",
    service4: "Hair transplant consultation",
    askDay: service => `Great choice. For ${service}, when would you prefer to visit the clinic?`,
    tomorrow: "Tomorrow",
    thisWeek: "This week",
    weekend: "Weekend",
    foundSlots: day => `Perfect. I found a few available slots for ${day.toLowerCase()}.`,
    askTime: "Which time works best?",
    time1: "10:30 AM",
    time2: "2:00 PM",
    time3: "5:30 PM",
    askName: time => `Great. I can reserve ${time}. Can I have the patient's full name?`,
    namePlaceholder: "Patient name",
    send: "Send",
    askPhone: "Thanks. What phone number should the clinic use to confirm?",
    phonePlaceholder: "Phone number",
    confirm1: d => `Perfect, ${d.name}. Your request is prepared: ${d.service}, ${d.day}, ${d.time}.`,
    confirm2: d => `The clinic can contact you at ${d.phone} to confirm the appointment.`,
    finalBot: "This is how clinics convert more WhatsApp inquiries into real bookings — automatically.",
    finalCTA: "Continue on WhatsApp",
    askCategory: "Sure. Which clinic service category should I explain?",
    dental: "Dental",
    aesthetic: "Aesthetic",
    tourism: "Medical tourism",
    dentalReply: "For dental services, clinics can guide patients through whitening, implants, veneers, smile design, and consultation requests.",
    aestheticReply: "For aesthetic clinics, ConveXa can handle Botox, fillers, skin treatments, consultation requests, and follow-up questions.",
    tourismReply: "For medical tourism clinics, ConveXa can collect treatment interest, travel timing, language preference, and consultation details.",
    turnBooking: "Would you like to turn this inquiry into a booking request?",
    price1: "Prices usually depend on the treatment plan, patient case, and consultation result.",
    price2: "I can help collect the right service first, then guide the patient toward a consultation request.",
    price3: "Which service are you interested in?",
    price4: service => `For ${service}, the clinic would usually confirm details after a quick consultation.`,
    price5: "Would you like to continue and choose a preferred appointment day?"
  },

  ar: {
    intro1: "مرحباً 👋 أنا مساعد ConveXa للعيادة. أستطيع مساعدة المرضى في الحجز، السؤال عن الخدمات، أو فهم الأسعار.",
    intro2: "ماذا تريد أن تجرّب؟",
    book: "حجز موعد",
    services: "السؤال عن الخدمات",
    prices: "السؤال عن الأسعار",
    askService: "أكيد. ما الخدمة التي يهتم بها المريض؟",
    service1: "تبييض الأسنان",
    service2: "زراعة الأسنان",
    service3: "بوتوكس / فيلر",
    service4: "استشارة زراعة شعر",
    askDay: service => `اختيار ممتاز. بالنسبة إلى ${service}، متى تفضل زيارة العيادة؟`,
    tomorrow: "غداً",
    thisWeek: "هذا الأسبوع",
    weekend: "نهاية الأسبوع",
    foundSlots: day => `تمام. وجدت بعض الأوقات المتاحة لـ ${day}.`,
    askTime: "أي وقت يناسبك أكثر؟",
    time1: "10:30 صباحاً",
    time2: "2:00 مساءً",
    time3: "5:30 مساءً",
    askName: time => `رائع. يمكنني تجهيز الحجز الساعة ${time}. ما الاسم الكامل للمريض؟`,
    namePlaceholder: "اسم المريض",
    send: "إرسال",
    askPhone: "شكراً. ما رقم الهاتف الذي تستخدمه العيادة للتأكيد؟",
    phonePlaceholder: "رقم الهاتف",
    confirm1: d => `تمام ${d.name}. تم تجهيز الطلب: ${d.service}، ${d.day}، ${d.time}.`,
    confirm2: d => `يمكن للعيادة التواصل معك على ${d.phone} لتأكيد الموعد.`,
    finalBot: "هكذا تحوّل العيادات المزيد من استفسارات واتساب إلى حجوزات حقيقية — تلقائياً.",
    finalCTA: "تابع عبر واتساب",
    askCategory: "أكيد. أي نوع من خدمات العيادة تريد شرحه؟",
    dental: "أسنان",
    aesthetic: "تجميل",
    tourism: "سياحة علاجية",
    dentalReply: "في خدمات الأسنان، يمكن توجيه المرضى نحو التبييض، الزراعة، الفينير، تصميم الابتسامة، وطلبات الاستشارة.",
    aestheticReply: "في عيادات التجميل، يستطيع ConveXa التعامل مع البوتوكس، الفيلر، علاجات البشرة، وطلبات الاستشارة.",
    tourismReply: "في السياحة العلاجية، يجمع ConveXa نوع العلاج، وقت السفر، اللغة المفضلة، وتفاصيل الاستشارة.",
    turnBooking: "هل تريد تحويل هذا الاستفسار إلى طلب حجز؟",
    price1: "الأسعار تعتمد عادةً على خطة العلاج، حالة المريض، ونتيجة الاستشارة.",
    price2: "أستطيع أولاً جمع الخدمة المناسبة ثم توجيه المريض نحو طلب استشارة.",
    price3: "ما الخدمة التي تهتم بها؟",
    price4: service => `بالنسبة إلى ${service}، عادةً تؤكد العيادة التفاصيل بعد استشارة سريعة.`,
    price5: "هل تريد المتابعة واختيار يوم مناسب للموعد؟"
  },

  tr: {
    intro1: "Merhaba 👋 Ben ConveXa Klinik Asistanı. Hastalara randevu, hizmet bilgisi ve fiyat sorularında yardımcı olabilirim.",
    intro2: "Ne test etmek istersiniz?",
    book: "Randevu al",
    services: "Hizmetleri sor",
    prices: "Fiyatları sor",
    askService: "Elbette. Hasta hangi hizmetle ilgileniyor?",
    service1: "Diş beyazlatma",
    service2: "Diş implantı",
    service3: "Botoks / Dolgu",
    service4: "Saç ekimi danışmanlığı",
    askDay: service => `Harika seçim. ${service} için kliniği ne zaman ziyaret etmek istersiniz?`,
    tomorrow: "Yarın",
    thisWeek: "Bu hafta",
    weekend: "Hafta sonu",
    foundSlots: day => `Tamam. ${day} için birkaç uygun saat buldum.`,
    askTime: "Hangi saat daha uygun?",
    time1: "10:30",
    time2: "14:00",
    time3: "17:30",
    askName: time => `Harika. ${time} için rezervasyon hazırlayabilirim. Hastanın tam adı nedir?`,
    namePlaceholder: "Hasta adı",
    send: "Gönder",
    askPhone: "Teşekkürler. Klinik onay için hangi telefon numarasını kullanmalı?",
    phonePlaceholder: "Telefon numarası",
    confirm1: d => `Mükemmel, ${d.name}. Talebiniz hazır: ${d.service}, ${d.day}, ${d.time}.`,
    confirm2: d => `Klinik randevuyu onaylamak için ${d.phone} üzerinden iletişime geçebilir.`,
    finalBot: "Klinikler daha fazla WhatsApp talebini gerçek randevulara otomatik olarak böyle dönüştürür.",
    finalCTA: "WhatsApp'ta devam et",
    askCategory: "Tabii. Hangi klinik hizmet kategorisini açıklayayım?",
    dental: "Diş",
    aesthetic: "Estetik",
    tourism: "Medikal turizm",
    dentalReply: "Diş hizmetlerinde klinikler hastaları beyazlatma, implant, veneer, gülüş tasarımı ve danışmanlık taleplerine yönlendirebilir.",
    aestheticReply: "Estetik kliniklerde ConveXa botoks, dolgu, cilt bakımı, danışmanlık talepleri ve takip sorularını yönetebilir.",
    tourismReply: "Medikal turizm kliniklerinde ConveXa tedavi ilgisi, seyahat zamanı, dil tercihi ve danışmanlık detaylarını toplayabilir.",
    turnBooking: "Bu talebi randevu isteğine dönüştürmek ister misiniz?",
    price1: "Fiyatlar genellikle tedavi planına, hasta durumuna ve danışmanlık sonucuna bağlıdır.",
    price2: "Önce doğru hizmeti belirleyip hastayı danışmanlık talebine yönlendirebilirim.",
    price3: "Hangi hizmetle ilgileniyorsunuz?",
    price4: service => `${service} için klinik genellikle kısa bir danışmanlıktan sonra detayları onaylar.`,
    price5: "Devam edip tercih edilen randevu gününü seçmek ister misiniz?"
  }
};

function t(key, arg) {
  const value = botText[currentLang][key];
  return typeof value === "function" ? value(arg) : value;
}

function pageT(key) {
  return pageText[currentLang][key] || pageText.en[key];
}

function scrollBottom() {
  chatBox.scrollTop = chatBox.scrollHeight;
}

function addMessage(text, sender = "bot") {
  const msg = document.createElement("div");
  msg.className = `msg ${sender}`;
  msg.textContent = text;
  chatBox.appendChild(msg);
  scrollBottom();
}

function showTyping(callback, delay = 750) {
  const typing = document.createElement("div");
  typing.className = "typing";
  typing.innerHTML = "<span></span><span></span><span></span>";
  chatBox.appendChild(typing);
  scrollBottom();

  setTimeout(() => {
    typing.remove();
    callback();
    scrollBottom();
  }, delay);
}

function botSay(text, delay = 750, after) {
  showTyping(() => {
    addMessage(text, "bot");
    if (after) after();
  }, delay);
}

function clearOptions() {
  options.innerHTML = "";
}

function setOptions(items) {
  clearOptions();

  items.forEach(item => {
    const btn = document.createElement("button");
    btn.textContent = item.label;
    btn.onclick = () => handleChoice(item.value, item.label);
    options.appendChild(btn);
  });
}

function setInput(placeholder, submitLabel, onSubmit) {
  clearOptions();

  const wrap = document.createElement("div");
  wrap.className = "input-wrap";

  const input = document.createElement("input");
  input.className = "chat-input";
  input.placeholder = placeholder;
  input.autocomplete = "off";

  const btn = document.createElement("button");
  btn.textContent = submitLabel;

  function submit() {
    const value = input.value.trim();
    if (!value) return;

    addMessage(value, "user");
    clearOptions();
    onSubmit(value);
  }

  btn.onclick = submit;

  input.addEventListener("keydown", e => {
    if (e.key === "Enter") submit();
  });

  wrap.appendChild(input);
  wrap.appendChild(btn);
  options.appendChild(wrap);

  setTimeout(() => input.focus(), 100);
}

function showFinalCTA() {
  clearOptions();

  const cta = document.createElement("a");
  cta.href = whatsappURL;
  cta.className = "whatsapp-final";
  cta.textContent = t("finalCTA");
  options.appendChild(cta);
}

function applyPageLanguage() {
  document.documentElement.lang = currentLang;
  document.body.classList.toggle("rtl", currentLang === "ar");

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (pageT(key)) el.textContent = pageT(key);
  });

  document.querySelectorAll(".demo-lang-switch button").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === currentLang);
  });
}

function resetBot() {
  state = {
    flow: null,
    step: 0,
    data: {
      service: null,
      category: null,
      day: null,
      time: null,
      name: null,
      phone: null
    }
  };

  chatBox.innerHTML = "";

  botSay(t("intro1"), 500, () => {
    botSay(t("intro2"), 550, () => {
      setOptions([
        { label: t("book"), value: "book" },
        { label: t("services"), value: "services" },
        { label: t("prices"), value: "prices" }
      ]);
    });
  });
}

function handleChoice(value, label) {
  addMessage(label, "user");
  clearOptions();

  if (!state.flow) {
    if (value === "book") return startBookingFlow();
    if (value === "services") return startServicesFlow();
    if (value === "prices") return startPricesFlow();
  }

  if (state.flow === "booking") return continueBooking(value, label);
  if (state.flow === "services") return continueServices(value, label);
  if (state.flow === "prices") return continuePrices(value, label);
}

function serviceOptions() {
  return [
    { label: t("service1"), value: "service1" },
    { label: t("service2"), value: "service2" },
    { label: t("service3"), value: "service3" },
    { label: t("service4"), value: "service4" }
  ];
}

function dayOptions() {
  return [
    { label: t("tomorrow"), value: "tomorrow" },
    { label: t("thisWeek"), value: "thisWeek" },
    { label: t("weekend"), value: "weekend" }
  ];
}

function timeOptions() {
  return [
    { label: t("time1"), value: "time1" },
    { label: t("time2"), value: "time2" },
    { label: t("time3"), value: "time3" }
  ];
}

function startBookingFlow() {
  state.flow = "booking";
  state.step = 1;

  botSay(t("askService"), 750, () => {
    setOptions(serviceOptions());
  });
}

function continueBooking(value, label) {
  if (state.step === 1) {
    state.data.service = label;
    state.step = 2;

    botSay(t("askDay", label), 750, () => {
      setOptions(dayOptions());
    });
    return;
  }

  if (state.step === 2) {
    state.data.day = label;
    state.step = 3;

    botSay(t("foundSlots", label), 750, () => {
      botSay(t("askTime"), 550, () => {
        setOptions(timeOptions());
      });
    });
    return;
  }

  if (state.step === 3) {
    state.data.time = label;
    state.step = 4;

    botSay(t("askName", label), 750, () => {
      setInput(t("namePlaceholder"), t("send"), value => {
        state.data.name = value;
        state.step = 5;

        botSay(t("askPhone"), 700, () => {
          setInput(t("phonePlaceholder"), t("send"), phone => {
            state.data.phone = phone;
            finishBooking();
          });
        });
      });
    });
  }
}

function finishBooking() {
  const d = state.data;

  botSay(t("confirm1", d), 750, () => {
    botSay(t("confirm2", d), 750, () => {
      botSay(t("finalBot"), 850, () => {
        showFinalCTA();
      });
    });
  });
}

function startServicesFlow() {
  state.flow = "services";
  state.step = 1;

  botSay(t("askCategory"), 750, () => {
    setOptions([
      { label: t("dental"), value: "dental" },
      { label: t("aesthetic"), value: "aesthetic" },
      { label: t("tourism"), value: "tourism" }
    ]);
  });
}

function continueServices(value) {
  if (state.step !== 1) return;

  state.data.category = value;
  state.step = 2;

  const replyMap = {
    dental: t("dentalReply"),
    aesthetic: t("aestheticReply"),
    tourism: t("tourismReply")
  };

  botSay(replyMap[value], 850, () => {
    botSay(t("turnBooking"), 700, () => {
      state.flow = "booking";
      state.step = 1;

      if (value === "dental") {
        setOptions([
          { label: t("service1"), value: "service1" },
          { label: t("service2"), value: "service2" }
        ]);
      } else if (value === "aesthetic") {
        setOptions([{ label: t("service3"), value: "service3" }]);
      } else {
        setOptions([{ label: t("service4"), value: "service4" }]);
      }
    });
  });
}

function startPricesFlow() {
  state.flow = "prices";
  state.step = 1;

  botSay(t("price1"), 750, () => {
    botSay(t("price2"), 800, () => {
      botSay(t("price3"), 600, () => {
        setOptions(serviceOptions());
      });
    });
  });
}

function continuePrices(value, label) {
  if (state.step !== 1) return;

  state.data.service = label;
  state.step = 2;

  botSay(t("price4", label), 750, () => {
    botSay(t("price5"), 650, () => {
      state.flow = "booking";
      state.step = 2;
      setOptions(dayOptions());
    });
  });
}

document.querySelectorAll(".demo-lang-switch button").forEach(btn => {
  btn.addEventListener("click", () => {
    currentLang = btn.dataset.lang;
    localStorage.setItem("convexaLang", currentLang);
    applyPageLanguage();
    resetBot();
  });
});

applyPageLanguage();
resetBot();