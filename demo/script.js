const DEMO_WHATSAPP_NUMBER = "31684957550";
const DEMO_WHATSAPP_MESSAGE = "Hello, I'm interested in ConveXa for my clinic.";

const DEMO_STATES = {
  IDLE: "idle",
  SERVICES: "services_flow",
  PRICING: "pricing_flow",
  HOURS: "hours_flow",
  BOOKING_SERVICE: "booking_service",
  BOOKING_DAY: "booking_day",
  BOOKING_TIME: "booking_time",
  BOOKING_NAME: "booking_name",
  BOOKING_PHONE: "booking_phone",
  BOOKING_CONFIRM: "booking_confirm",
  COMPLETED: "completed"
};

const SUMMARY_FIELDS = ["service", "day", "time", "name", "phone"];

const dom = {
  html: document.documentElement,
  title: document.querySelector("title"),

  langButtons: document.querySelectorAll(".lang-switch__btn"),

  backButton: document.querySelector(".back-link"),
  interactiveBadge: document.querySelector(".demo-badge"),

  introChip: document.querySelector(".demo-intro__chip"),
  introTitle: document.querySelector(".demo-intro__title"),
  introDesc: document.querySelector(".demo-intro__desc"),

  clinicName: document.querySelector(".chat-clinic__name"),
  clinicRole: document.querySelector(".chat-clinic__role"),
  onlineStatus: document.querySelector(".chat-card__status span:last-child"),

  chatMessages: document.getElementById("chatMessages"),
  chatTyping: document.getElementById("chatTyping"),
  chatWelcome: document.getElementById("chatWelcome"),

  quickRepliesLabel: document.querySelector(".chat-quick-replies__label"),
  quickReplies: document.getElementById("quickReplies"),

  messageInput: document.getElementById("messageInput"),
  sendButton: document.getElementById("sendButton"),

  summaryCard: document.querySelector(".summary-card"),
  summaryEyebrow: document.querySelector(".summary-card .sidebar-card__eyebrow"),
  summaryTitle: document.querySelector(".summary-card .sidebar-card__title"),
  summaryStatusBadge: document.getElementById("summaryStatusBadge"),
  summaryCompletionBanner: document.getElementById("summaryCompletionBanner"),
  summaryProgressFill: document.getElementById("summaryProgressFill"),
  summaryProgressText: document.getElementById("summaryProgressText"),
  summaryFooter: document.getElementById("summaryFooter"),

  summaryService: document.getElementById("summaryService"),
  summaryDay: document.getElementById("summaryDay"),
  summaryTime: document.getElementById("summaryTime"),
  summaryName: document.getElementById("summaryName"),
  summaryPhone: document.getElementById("summaryPhone"),

  summaryLabels: document.querySelectorAll(".summary-row__label"),

  capabilitiesEyebrow: document.querySelector(".capabilities-card .sidebar-card__eyebrow"),
  capabilitiesTitle: document.querySelector(".capabilities-card .sidebar-card__title"),
  capabilityItems: document.querySelectorAll(".capability-item"),

  ctaEyebrow: document.querySelector(".cta-card .sidebar-card__eyebrow"),
  ctaTitle: document.querySelector(".cta-card .sidebar-card__title"),
  ctaText: document.querySelector(".cta-card__text"),
  ctaButton: document.getElementById("whatsappCta")
};

const app = {
  lang: "en",
  state: DEMO_STATES.IDLE,
  isTyping: false,
  typingTimeout: null,
  revealObserver: null,
  summary: createEmptySummary(),
  variationIndex: {},
  lastIntent: null
};

function createEmptySummary() {
  return {
    service: "",
    day: "",
    time: "",
    name: "",
    phone: ""
  };
}

const translations = {
  en: {
    pageTitle: "ConveXa Demo — Interactive Clinic WhatsApp Assistant",
    htmlLang: "en",
    dir: "ltr",

    backButton: "Back to site",
    interactiveBadge: "Interactive Demo",

    introChip: "AI WhatsApp assistant for clinics",
    introTitle:
      "See how ConveXa guides the chat, collects booking details, and prepares a structured clinic-ready request",
    introDesc:
      "This interactive simulation shows how the assistant responds to patient questions, understands intent, handles service and pricing requests, and turns the conversation into a clear booking request your clinic can follow up on.",

    clinicName: "BrightSmile Dental",
    clinicRole: "ConveXa Assistant",
    onlineStatus: "Online",

    chatWelcome: "Hi! You can ask about services, pricing, or start a booking.",
    quickRepliesHint: "Suggested actions",
    inputPlaceholder: "Type your message...",
    sendButton: "Send",

    summaryEyebrow: "Structured request preview",
    summaryTitle: "Live Intake Summary",
    summaryStatusCollecting: "Collecting",
    summaryStatusReady: "Ready",
    summaryProgressIdle: "Waiting to start",
    summaryProgressActive: "Building booking request",
    summaryProgressReady: "Request ready for clinic follow-up",
    summaryCompletionBanner: "Request ready for clinic follow-up",
    summaryFooterHint: "The request becomes clearer as the assistant collects details.",
    summaryFooterReady: "This booking request now looks ready for clinic follow-up.",
    emptyValue: "—",

    fieldService: "Service",
    fieldDay: "Preferred Day",
    fieldTime: "Preferred Time",
    fieldName: "Patient Name",
    fieldPhone: "Phone",

    capabilitiesEyebrow: "What this demo can show",
    capabilitiesTitle: "Demo Capabilities",
    capBookingTitle: "Booking flow",
    capBookingDesc: "Collect service, day, time, patient name, and phone number step by step.",
    capServicesTitle: "Service questions",
    capServicesDesc: "Answer questions about cleaning, whitening, braces, and consultation.",
    capPricingTitle: "Pricing guidance",
    capPricingDesc: "Give practical pricing guidance, then route the patient toward the next step.",
    capHoursTitle: "Clinic hours",
    capHoursDesc: "Respond to opening hours and suggest a useful next action.",
    capFallbackTitle: "Fallback handling",
    capFallbackDesc: "Handle unclear messages gracefully and offer clear next options.",

    ctaEyebrow: "Live deployment",
    ctaTitle: "Put this on your clinic number",
    ctaText:
      "The real version runs on your clinic WhatsApp number and can be customized for your services, pricing guidance, supported languages, and booking workflow.",
    ctaButton: "Contact on WhatsApp",
    chatCtaButton: "Open WhatsApp",

    quickIdleBook: "Book appointment",
    quickIdleServices: "Services",
    quickIdlePrices: "Prices",
    quickIdleHours: "Clinic hours",

    quickServiceCleaning: "Cleaning",
    quickServiceWhitening: "Whitening",
    quickServiceBraces: "Braces",
    quickServiceConsultation: "Consultation",

    quickCompletedBookAgain: "Book another appointment",
    quickCompletedServices: "Ask about services",
    quickCompletedPrices: "Ask about prices",

    botGreeting: [
      "Hi! I can help with services, pricing, clinic hours, or booking a new appointment. What would you like to do?",
      "Welcome — I can guide you through services, pricing, clinic hours, or a new booking. What would you like to start with?"
    ],
    botServicesIntro: [
      "We can help with cleaning, whitening, braces, and consultation requests. Which service would you like to ask about?",
      "I can walk you through cleaning, whitening, braces, or consultation information. Which service would you like to explore?"
    ],
    botPricingIntro: [
      "I can share pricing guidance for cleaning, whitening, braces, or consultation. Which service would you like pricing for?",
      "I can give pricing guidance for cleaning, whitening, braces, or consultation. Which one would you like to check?"
    ],
    botHours: [
      "Our clinic is open Monday to Friday from 09:00 to 18:00.",
      "The clinic is open Monday through Friday from 09:00 to 18:00."
    ],
    botAskService: [
      "Great. Which service would you like to book?",
      "Perfect. Which service would you like to book?"
    ],
    botAskDay: [
      "Perfect. What day would you prefer?",
      "Great. Which day works best for you?"
    ],
    botAskTime: [
      "Got it. What time works best for you?",
      "Understood. What time would you prefer?"
    ],
    botAskName: [
      "Thanks. What is the patient's full name?",
      "Thank you. Could you share the patient's full name?"
    ],
    botAskPhone: [
      "Thanks. Please share a phone number for the booking request.",
      "Great. Please share a phone number so the clinic can follow up."
    ],
    botInvalidPhone: [
      "Please share a valid phone number so the clinic can follow up on the request.",
      "I’ll need a valid phone number so the clinic can follow up properly."
    ],
    botConfirmIntro: [
      "Here is the booking request I prepared:",
      "I’ve prepared the booking request as follows:"
    ],
    botConfirmQuestion: [
      "Would you like to confirm this request or restart the booking?",
      "Would you like to confirm the request or restart the booking flow?"
    ],
    botCompleted: [
      "Done — the booking request looks ready for clinic follow-up.",
      "All set — the request now looks ready for clinic follow-up."
    ],
    botRestarted: [
      "No problem. I reset the booking flow. Let's start again — which service would you like to book?",
      "Done. I restarted the booking flow. Which service would you like to book?"
    ],
    botFallback: [
      "I can help with bookings, services, pricing, and clinic hours. You can choose one of the suggested actions below or type your question.",
      "I can help with booking, services, pricing, and clinic hours. Try one of the suggested actions below or type your question."
    ],
    botNeedServiceForPricing: [
      "Which service would you like pricing guidance for: cleaning, whitening, braces, or consultation?",
      "Please choose a service for pricing guidance: cleaning, whitening, braces, or consultation."
    ],
    botNeedKnownService: [
      "I can help with cleaning, whitening, braces, or consultation. Which one would you like?",
      "Please choose one of these services: cleaning, whitening, braces, or consultation."
    ],
    botNeedDay: [
      "Please share your preferred day for the appointment.",
      "What day would you like for the appointment?"
    ],
    botNeedTime: [
      "Please share the time that works best for you.",
      "What time would you prefer for the appointment?"
    ],
    botNeedName: [
      "Please share the patient's full name.",
      "Could you share the patient's full name?"
    ],
    botNeedPhone: [
      "Please share a phone number so the clinic can contact you.",
      "I’ll need a phone number so the clinic can follow up."
    ],
    botUnknownEdit: [
      "At this point, the quickest option is to restart the booking or confirm the request.",
      "Right now, the simplest next step is to confirm the request or restart the booking."
    ],

    followBooking: [
      "If you'd like, I can turn this into a booking request next.",
      "I can also continue and turn this into a booking request."
    ],
    followPricing: [
      "I can also share pricing guidance if that helps.",
      "If useful, I can also give pricing guidance."
    ],
    followServices: [
      "You can also ask about services if you want a quick overview first.",
      "If you prefer, I can also show service options."
    ],
    followHours: [
      "I can also help you book an appointment right away.",
      "If you want, I can continue directly into a booking."
    ],
    followCompletion: [
      "You can open WhatsApp below or start another booking inside the demo.",
      "You can continue on WhatsApp below or create another booking here in the demo."
    ],
    followGeneral: [
      "You can use the suggested actions below to move faster.",
      "Try one of the suggested actions below for the fastest path."
    ],

    botConfirmedLabel: "Confirm request",
    botRestartLabel: "Restart booking",

    serviceCleaningTitle: "Cleaning",
    serviceCleaningDesc:
      "Cleaning appointments focus on plaque removal, polishing, and a general hygiene check.",
    serviceWhiteningTitle: "Whitening",
    serviceWhiteningDesc:
      "Whitening sessions focus on improving tooth shade and are usually booked after a quick assessment.",
    serviceBracesTitle: "Braces",
    serviceBracesDesc:
      "Braces consultations help review alignment needs and discuss possible treatment directions.",
    serviceConsultationTitle: "Consultation",
    serviceConsultationDesc:
      "A consultation is a good starting point if the patient wants guidance before choosing a treatment.",

    pricingCleaning:
      "Cleaning usually starts from $80, depending on the case and whether additional hygiene work is needed.",
    pricingWhitening:
      "Whitening usually starts from $220, depending on the preferred method and assessment outcome.",
    pricingBraces:
      "Braces pricing depends on the treatment plan, but consultations generally start from $95.",
    pricingConsultation:
      "Consultation visits usually start from $45 and help the clinic recommend the next best step.",

    confirmLineService: "Service",
    confirmLineDay: "Day",
    confirmLineTime: "Time",
    confirmLineName: "Name",
    confirmLinePhone: "Phone"
  },

  ar: {
    pageTitle: "ConveXa Demo — محاكاة تفاعلية لمساعد واتساب للعيادات",
    htmlLang: "ar",
    dir: "rtl",

    backButton: "العودة للموقع",
    interactiveBadge: "ديمو تفاعلي",

    introChip: "مساعد واتساب ذكي للعيادات",
    introTitle:
      "شاهد كيف يوجّه ConveXa المحادثة ويجمع تفاصيل الحجز ويجهّز طلبًا منظمًا جاهزًا للعيادة",
    introDesc:
      "تعرض هذه المحاكاة التفاعلية كيف يرد المساعد على أسئلة المرضى، ويفهم النية، ويتعامل مع الخدمات والأسعار، ثم يحوّل المحادثة إلى طلب حجز واضح يمكن للعيادة متابعته.",

    clinicName: "برايت سمايل للأسنان",
    clinicRole: "مساعد ConveXa",
    onlineStatus: "متصل",

    chatWelcome: "مرحبًا! يمكنك السؤال عن الخدمات أو الأسعار أو بدء الحجز.",
    quickRepliesHint: "اقتراحات سريعة",
    inputPlaceholder: "اكتب رسالتك...",
    sendButton: "إرسال",

    summaryEyebrow: "معاينة طلب منظم",
    summaryTitle: "ملخص الحجز المباشر",
    summaryStatusCollecting: "قيد التجميع",
    summaryStatusReady: "جاهز",
    summaryProgressIdle: "بانتظار البدء",
    summaryProgressActive: "جارٍ بناء طلب الحجز",
    summaryProgressReady: "الطلب جاهز لمتابعة العيادة",
    summaryCompletionBanner: "الطلب جاهز لمتابعة العيادة",
    summaryFooterHint: "كلما جمع المساعد التفاصيل أصبح الطلب أوضح.",
    summaryFooterReady: "يبدو طلب الحجز الآن جاهزًا لمتابعة العيادة.",
    emptyValue: "—",

    fieldService: "الخدمة",
    fieldDay: "اليوم المفضل",
    fieldTime: "الوقت المفضل",
    fieldName: "اسم المريض",
    fieldPhone: "رقم الهاتف",

    capabilitiesEyebrow: "ما الذي يوضحه هذا الديمو",
    capabilitiesTitle: "قدرات الديمو",
    capBookingTitle: "مسار الحجز",
    capBookingDesc: "يجمع الخدمة واليوم والوقت واسم المريض ورقم الهاتف خطوة بخطوة.",
    capServicesTitle: "أسئلة الخدمات",
    capServicesDesc: "يجيب عن أسئلة التنظيف والتبييض والتقويم والاستشارة.",
    capPricingTitle: "توجيه الأسعار",
    capPricingDesc: "يعطي توجيهًا سعريًا عمليًا ثم ينقل المريض إلى الخطوة التالية المناسبة.",
    capHoursTitle: "ساعات العمل",
    capHoursDesc: "يرد بساعات العمل ويقترح إجراءً مفيدًا بعد ذلك.",
    capFallbackTitle: "التعامل مع الرسائل غير الواضحة",
    capFallbackDesc: "يتعامل مع الرسائل غير الواضحة بشكل احترافي ويعرض خيارات واضحة.",

    ctaEyebrow: "التشغيل الفعلي",
    ctaTitle: "شغّل هذا على رقم عيادتك",
    ctaText:
      "النسخة الحقيقية تعمل على رقم واتساب العيادة ويمكن تخصيصها بحسب الخدمات وتوجيه الأسعار واللغات وسير الحجز.",
    ctaButton: "تواصل عبر واتساب",
    chatCtaButton: "افتح واتساب",

    quickIdleBook: "حجز موعد",
    quickIdleServices: "الخدمات",
    quickIdlePrices: "الأسعار",
    quickIdleHours: "ساعات العمل",

    quickServiceCleaning: "تنظيف",
    quickServiceWhitening: "تبييض",
    quickServiceBraces: "تقويم",
    quickServiceConsultation: "استشارة",

    quickCompletedBookAgain: "حجز موعد آخر",
    quickCompletedServices: "اسأل عن الخدمات",
    quickCompletedPrices: "اسأل عن الأسعار",

    botGreeting: [
      "مرحبًا! أستطيع مساعدتك في الخدمات والأسعار وساعات العمل أو بدء حجز جديد. ماذا ترغب أن أفعل؟",
      "أهلًا بك! يمكنني مساعدتك في الخدمات والأسعار وساعات العمل أو بدء حجز جديد. ماذا تريد أن تبدأ به؟"
    ],
    botServicesIntro: [
      "يمكنني مساعدتك في التنظيف والتبييض والتقويم وطلبات الاستشارة. ما الخدمة التي تريد السؤال عنها؟",
      "أستطيع شرح خدمات التنظيف والتبييض والتقويم والاستشارة. ما الخدمة التي تريد معرفة المزيد عنها؟"
    ],
    botPricingIntro: [
      "أستطيع مشاركة توجيه سعري للتنظيف أو التبييض أو التقويم أو الاستشارة. لأي خدمة تريد السعر؟",
      "يمكنني إعطاؤك توجيهًا سعريًا للتنظيف أو التبييض أو التقويم أو الاستشارة. أي خدمة تريد؟"
    ],
    botHours: [
      "تعمل العيادة من الاثنين إلى الجمعة من 09:00 إلى 18:00.",
      "ساعات عمل العيادة من الاثنين إلى الجمعة من 09:00 إلى 18:00."
    ],
    botAskService: [
      "ممتاز. ما الخدمة التي تريد حجزها؟",
      "رائع. أي خدمة تريد حجزها؟"
    ],
    botAskDay: [
      "رائع. ما اليوم الذي تفضله؟",
      "ممتاز. ما اليوم المناسب لك؟"
    ],
    botAskTime: [
      "تم. ما الوقت المناسب لك؟",
      "حسنًا. ما الوقت الذي تفضله؟"
    ],
    botAskName: [
      "شكرًا. ما الاسم الكامل للمريض؟",
      "شكرًا لك. هل يمكن إرسال الاسم الكامل للمريض؟"
    ],
    botAskPhone: [
      "شكرًا. يرجى إرسال رقم هاتف لطلب الحجز.",
      "ممتاز. يرجى إرسال رقم هاتف حتى تتمكن العيادة من المتابعة."
    ],
    botInvalidPhone: [
      "يرجى إرسال رقم هاتف صحيح حتى تتمكن العيادة من متابعة الطلب.",
      "أحتاج إلى رقم هاتف صحيح حتى تتمكن العيادة من متابعة الطلب بشكل صحيح."
    ],
    botConfirmIntro: [
      "هذا هو طلب الحجز الذي جهزته:",
      "جهزت طلب الحجز بالشكل التالي:"
    ],
    botConfirmQuestion: [
      "هل تريد تأكيد هذا الطلب أم إعادة بدء الحجز؟",
      "هل ترغب في تأكيد الطلب أم إعادة بدء مسار الحجز؟"
    ],
    botCompleted: [
      "تم — يبدو طلب الحجز جاهزًا لمتابعة العيادة.",
      "اكتمل الأمر — يبدو الطلب الآن جاهزًا لمتابعة العيادة."
    ],
    botRestarted: [
      "لا مشكلة. أعدت ضبط مسار الحجز. لنبدأ من جديد — ما الخدمة التي تريد حجزها؟",
      "تمت إعادة بدء الحجز. لنبدأ من جديد — ما الخدمة التي تريد حجزها؟"
    ],
    botFallback: [
      "يمكنني مساعدتك في الحجز والخدمات والأسعار وساعات العمل. يمكنك اختيار أحد الاقتراحات بالأسفل أو كتابة سؤالك.",
      "أستطيع مساعدتك في الحجز والخدمات والأسعار وساعات العمل. اختر اقتراحًا بالأسفل أو اكتب سؤالك."
    ],
    botNeedServiceForPricing: [
      "ما الخدمة التي تريد توجيهًا سعريًا لها: تنظيف أم تبييض أم تقويم أم استشارة؟",
      "يرجى اختيار خدمة للتوجيه السعري: تنظيف أو تبييض أو تقويم أو استشارة."
    ],
    botNeedKnownService: [
      "يمكنني المساعدة في التنظيف أو التبييض أو التقويم أو الاستشارة. أي خدمة تريد؟",
      "يرجى اختيار إحدى هذه الخدمات: تنظيف أو تبييض أو تقويم أو استشارة."
    ],
    botNeedDay: [
      "يرجى إرسال اليوم الذي تفضله للموعد.",
      "ما اليوم الذي تريد حجز الموعد فيه؟"
    ],
    botNeedTime: [
      "يرجى إرسال الوقت المناسب لك.",
      "ما الوقت المناسب لك للموعد؟"
    ],
    botNeedName: [
      "يرجى إرسال الاسم الكامل للمريض.",
      "هل يمكن إرسال الاسم الكامل للمريض؟"
    ],
    botNeedPhone: [
      "يرجى إرسال رقم هاتف حتى تتمكن العيادة من التواصل معك.",
      "أحتاج إلى رقم هاتف حتى تتمكن العيادة من التواصل معك."
    ],
    botUnknownEdit: [
      "في هذه المرحلة، أسرع خيار هو إعادة بدء الحجز أو تأكيد الطلب.",
      "في هذه النقطة، أبسط خيار هو تأكيد الطلب أو إعادة بدء الحجز."
    ],

    followBooking: [
      "إذا أردت، يمكنني الآن تحويل هذا إلى طلب حجز.",
      "يمكنني أيضًا المتابعة وتحويل ذلك إلى طلب حجز."
    ],
    followPricing: [
      "وإذا رغبت، يمكنني أيضًا مشاركة توجيه سعري.",
      "أستطيع أيضًا إعطاؤك توجيهًا سعريًا إذا كان ذلك مفيدًا."
    ],
    followServices: [
      "يمكنك أيضًا السؤال عن الخدمات إذا أردت نظرة سريعة أولًا.",
      "وإذا رغبت، يمكنني أيضًا عرض خيارات الخدمات."
    ],
    followHours: [
      "ويمكنني أيضًا مساعدتك في حجز موعد مباشرة.",
      "إذا أردت، أستطيع المتابعة مباشرة إلى الحجز."
    ],
    followCompletion: [
      "يمكنك فتح واتساب من الزر بالأسفل أو بدء حجز جديد داخل الديمو.",
      "يمكنك المتابعة عبر واتساب من الزر بالأسفل أو بدء حجز جديد هنا."
    ],
    followGeneral: [
      "يمكنك استخدام الاقتراحات بالأسفل للمتابعة بشكل أسرع.",
      "جرّب أحد الاقتراحات بالأسفل للوصول السريع."
    ],

    botConfirmedLabel: "تأكيد الطلب",
    botRestartLabel: "إعادة بدء الحجز",

    serviceCleaningTitle: "تنظيف",
    serviceCleaningDesc:
      "مواعيد التنظيف تركز على إزالة الترسبات والتلميع وفحص عام لنظافة الأسنان.",
    serviceWhiteningTitle: "تبييض",
    serviceWhiteningDesc:
      "جلسات التبييض تركز على تحسين لون الأسنان وعادةً ما تُحجز بعد تقييم سريع.",
    serviceBracesTitle: "تقويم",
    serviceBracesDesc:
      "استشارات التقويم تساعد على مراجعة حالة الاصطفاف ومناقشة اتجاهات العلاج الممكنة.",
    serviceConsultationTitle: "استشارة",
    serviceConsultationDesc:
      "الاستشارة خيار مناسب إذا كان المريض يريد توجيهًا قبل اختيار العلاج المناسب.",

    pricingCleaning:
      "عادةً ما يبدأ تنظيف الأسنان من 80 دولارًا تقريبًا، بحسب الحالة وما إذا كانت هناك حاجة إلى عناية إضافية.",
    pricingWhitening:
      "عادةً ما يبدأ التبييض من 220 دولارًا تقريبًا، بحسب الطريقة المناسبة ونتيجة التقييم.",
    pricingBraces:
      "سعر التقويم يعتمد على خطة العلاج، لكن الاستشارة عادةً تبدأ من 95 دولارًا تقريبًا.",
    pricingConsultation:
      "زيارة الاستشارة عادةً تبدأ من 45 دولارًا تقريبًا وتساعد العيادة على اقتراح الخطوة الأنسب.",

    confirmLineService: "الخدمة",
    confirmLineDay: "اليوم",
    confirmLineTime: "الوقت",
    confirmLineName: "الاسم",
    confirmLinePhone: "الهاتف"
  },

  tr: {
    pageTitle: "ConveXa Demo — Klinikler için Etkileşimli WhatsApp Asistanı",
    htmlLang: "tr",
    dir: "ltr",

    backButton: "Siteye dön",
    interactiveBadge: "Etkileşimli Demo",

    introChip: "Klinikler için AI WhatsApp asistanı",
    introTitle:
      "ConveXa'nın sohbeti nasıl yönlendirdiğini, randevu detaylarını nasıl topladığını ve klinik için hazır yapılandırılmış bir talep nasıl hazırladığını görün",
    introDesc:
      "Bu etkileşimli simülasyon, asistanın hasta sorularına nasıl yanıt verdiğini, niyeti nasıl anladığını, hizmet ve fiyat taleplerini nasıl yönettiğini ve konuşmayı kliniğin takip edebileceği net bir randevu talebine nasıl dönüştürdüğünü gösterir.",

    clinicName: "BrightSmile Dental",
    clinicRole: "ConveXa Asistanı",
    onlineStatus: "Çevrimiçi",

    chatWelcome: "Merhaba! Hizmetleri, fiyatları sorabilir veya randevu başlatabilirsiniz.",
    quickRepliesHint: "Önerilen işlemler",
    inputPlaceholder: "Mesajınızı yazın...",
    sendButton: "Gönder",

    summaryEyebrow: "Yapılandırılmış talep önizlemesi",
    summaryTitle: "Canlı Talep Özeti",
    summaryStatusCollecting: "Toplanıyor",
    summaryStatusReady: "Hazır",
    summaryProgressIdle: "Başlamak için bekleniyor",
    summaryProgressActive: "Randevu talebi oluşturuluyor",
    summaryProgressReady: "Talep klinik takibi için hazır",
    summaryCompletionBanner: "Talep klinik takibi için hazır",
    summaryFooterHint: "Asistan detayları topladıkça talep daha net hale gelir.",
    summaryFooterReady: "Bu randevu talebi artık klinik takibi için hazır görünüyor.",
    emptyValue: "—",

    fieldService: "Hizmet",
    fieldDay: "Tercih Edilen Gün",
    fieldTime: "Tercih Edilen Saat",
    fieldName: "Hasta Adı",
    fieldPhone: "Telefon",

    capabilitiesEyebrow: "Bu demonun gösterebildikleri",
    capabilitiesTitle: "Demo Yetenekleri",
    capBookingTitle: "Randevu akışı",
    capBookingDesc: "Hizmet, gün, saat, hasta adı ve telefon numarasını adım adım toplar.",
    capServicesTitle: "Hizmet soruları",
    capServicesDesc: "Temizlik, beyazlatma, tel ve danışmanlık sorularını yanıtlar.",
    capPricingTitle: "Fiyat yönlendirmesi",
    capPricingDesc: "Pratik fiyat yönlendirmesi verir ve hastayı uygun sonraki adıma taşır.",
    capHoursTitle: "Klinik saatleri",
    capHoursDesc: "Açılış saatlerine yanıt verir ve yararlı bir sonraki adım önerir.",
    capFallbackTitle: "Belirsiz mesaj yönetimi",
    capFallbackDesc: "Belirsiz mesajları zarif şekilde ele alır ve net seçenekler sunar.",

    ctaEyebrow: "Canlı kullanım",
    ctaTitle: "Bunu klinik numaranıza taşıyın",
    ctaText:
      "Gerçek sürüm klinik WhatsApp numaranızda çalışır ve hizmetlerinize, fiyat yönlendirmelerinize, dillere ve randevu akışınıza göre özelleştirilebilir.",
    ctaButton: "WhatsApp ile iletişim",
    chatCtaButton: "WhatsApp aç",

    quickIdleBook: "Randevu al",
    quickIdleServices: "Hizmetler",
    quickIdlePrices: "Fiyatlar",
    quickIdleHours: "Klinik saatleri",

    quickServiceCleaning: "Temizlik",
    quickServiceWhitening: "Beyazlatma",
    quickServiceBraces: "Tel",
    quickServiceConsultation: "Danışmanlık",

    quickCompletedBookAgain: "Yeni randevu al",
    quickCompletedServices: "Hizmetleri sor",
    quickCompletedPrices: "Fiyatları sor",

    botGreeting: [
      "Merhaba! Hizmetler, fiyatlar, klinik saatleri veya yeni bir randevu konusunda yardımcı olabilirim. Ne yapmak istersiniz?",
      "Hoş geldiniz! Hizmetler, fiyatlar, klinik saatleri veya yeni bir randevu konusunda yardımcı olabilirim. Nereden başlamak istersiniz?"
    ],
    botServicesIntro: [
      "Temizlik, beyazlatma, tel ve danışmanlık konularında yardımcı olabilirim. Hangi hizmeti sormak istersiniz?",
      "Temizlik, beyazlatma, tel veya danışmanlık hakkında bilgi paylaşabilirim. Hangi hizmeti incelemek istersiniz?"
    ],
    botPricingIntro: [
      "Temizlik, beyazlatma, tel veya danışmanlık için fiyat yönlendirmesi paylaşabilirim. Hangi hizmetin fiyatını istersiniz?",
      "Temizlik, beyazlatma, tel veya danışmanlık için fiyat yönlendirmesi verebilirim. Hangisini kontrol etmek istersiniz?"
    ],
    botHours: [
      "Kliniğimiz Pazartesi'den Cuma'ya 09:00 ile 18:00 arasında açıktır.",
      "Klinik çalışma saatlerimiz Pazartesi'den Cuma'ya 09:00 ile 18:00 arasıdır."
    ],
    botAskService: [
      "Harika. Hangi hizmet için randevu almak istersiniz?",
      "Tamam. Hangi hizmeti rezerve etmek istersiniz?"
    ],
    botAskDay: [
      "Tamam. Hangi günü tercih edersiniz?",
      "Harika. Hangi gün sizin için daha uygun?"
    ],
    botAskTime: [
      "Anladım. Hangi saat sizin için uygun?",
      "Peki. Hangi saati tercih edersiniz?"
    ],
    botAskName: [
      "Teşekkürler. Hastanın tam adı nedir?",
      "Teşekkür ederim. Hastanın tam adını paylaşabilir misiniz?"
    ],
    botAskPhone: [
      "Teşekkürler. Lütfen randevu talebi için bir telefon numarası paylaşın.",
      "Harika. Klinik takibi için lütfen bir telefon numarası paylaşın."
    ],
    botInvalidPhone: [
      "Kliniğin talebi takip edebilmesi için lütfen geçerli bir telefon numarası paylaşın.",
      "Talebin düzgün takip edilebilmesi için geçerli bir telefon numarası gerekli."
    ],
    botConfirmIntro: [
      "Hazırladığım randevu talebi şu şekilde:",
      "Randevu talebini şu şekilde hazırladım:"
    ],
    botConfirmQuestion: [
      "Bu talebi onaylamak ister misiniz, yoksa randevu sürecini yeniden mi başlatmak istersiniz?",
      "Talebi onaylamak mı istersiniz, yoksa randevu akışını yeniden başlatmak mı?"
    ],
    botCompleted: [
      "Tamamlandı — randevu talebi klinik takibi için hazır görünüyor.",
      "Her şey hazır — talep artık klinik takibi için hazır görünüyor."
    ],
    botRestarted: [
      "Sorun değil. Randevu akışını sıfırladım. Yeniden başlayalım — hangi hizmeti almak istersiniz?",
      "Tamam. Randevu akışını yeniden başlattım. Hangi hizmeti almak istersiniz?"
    ],
    botFallback: [
      "Randevu, hizmetler, fiyatlar ve klinik saatleri konusunda yardımcı olabilirim. Aşağıdaki önerilerden birini seçebilir veya sorunuzu yazabilirsiniz.",
      "Randevu, hizmetler, fiyatlar ve klinik saatleri için yardımcı olabilirim. Aşağıdaki önerilerden birini seçin ya da sorunuzu yazın."
    ],
    botNeedServiceForPricing: [
      "Hangi hizmet için fiyat yönlendirmesi istersiniz: temizlik, beyazlatma, tel veya danışmanlık?",
      "Fiyat yönlendirmesi için lütfen bir hizmet seçin: temizlik, beyazlatma, tel veya danışmanlık."
    ],
    botNeedKnownService: [
      "Temizlik, beyazlatma, tel veya danışmanlık konusunda yardımcı olabilirim. Hangisini istersiniz?",
      "Lütfen şu hizmetlerden birini seçin: temizlik, beyazlatma, tel veya danışmanlık."
    ],
    botNeedDay: [
      "Lütfen randevu için tercih ettiğiniz günü paylaşın.",
      "Randevu için hangi günü tercih edersiniz?"
    ],
    botNeedTime: [
      "Lütfen size uygun saati paylaşın.",
      "Randevu için hangi saat uygundur?"
    ],
    botNeedName: [
      "Lütfen hastanın tam adını paylaşın.",
      "Hastanın tam adını paylaşabilir misiniz?"
    ],
    botNeedPhone: [
      "Lütfen kliniğin sizinle iletişim kurabilmesi için bir telefon numarası paylaşın.",
      "Kliniğin sizi arayabilmesi için bir telefon numarası gerekli."
    ],
    botUnknownEdit: [
      "Bu aşamada en hızlı seçenek randevuyu yeniden başlatmak veya talebi onaylamaktır.",
      "Bu noktada en pratik seçenek talebi onaylamak ya da randevuyu yeniden başlatmaktır."
    ],

    followBooking: [
      "İsterseniz bunu bir randevu talebine dönüştürebilirim.",
      "Dilerseniz bunu doğrudan randevu talebine çevirebilirim."
    ],
    followPricing: [
      "İsterseniz fiyat yönlendirmesi de paylaşabilirim.",
      "Gerekirse fiyat yönlendirmesi de verebilirim."
    ],
    followServices: [
      "İsterseniz önce hizmet seçeneklerini de gösterebilirim.",
      "Tercih ederseniz önce hizmet seçeneklerine de bakabiliriz."
    ],
    followHours: [
      "İsterseniz hemen randevu adımına da geçebiliriz.",
      "Dilerseniz şimdi doğrudan randevu oluşturmaya geçebiliriz."
    ],
    followCompletion: [
      "Aşağıdan WhatsApp açabilir veya demo içinde yeni bir randevu başlatabilirsiniz.",
      "Aşağıdaki WhatsApp düğmesini açabilir ya da demo içinde yeni bir randevu oluşturabilirsiniz."
    ],
    followGeneral: [
      "Daha hızlı ilerlemek için aşağıdaki önerileri kullanabilirsiniz.",
      "En hızlı yol için aşağıdaki önerilerden birini kullanabilirsiniz."
    ],

    botConfirmedLabel: "Talebi onayla",
    botRestartLabel: "Randevuyu yeniden başlat",

    serviceCleaningTitle: "Temizlik",
    serviceCleaningDesc:
      "Temizlik randevuları plak temizliği, parlatma ve genel hijyen kontrolüne odaklanır.",
    serviceWhiteningTitle: "Beyazlatma",
    serviceWhiteningDesc:
      "Beyazlatma seansları diş rengini iyileştirmeye odaklanır ve genelde kısa bir değerlendirmeden sonra planlanır.",
    serviceBracesTitle: "Tel",
    serviceBracesDesc:
      "Tel danışmanlıkları dizilim ihtiyacını değerlendirmeye ve olası tedavi yönlerini konuşmaya yardımcı olur.",
    serviceConsultationTitle: "Danışmanlık",
    serviceConsultationDesc:
      "Danışmanlık, hasta doğru tedaviyi seçmeden önce yönlendirme almak istediğinde iyi bir başlangıçtır.",

    pricingCleaning:
      "Temizlik genelde $80 civarından başlar; bu, vakanın durumuna ve ek hijyen işlemlerine bağlıdır.",
    pricingWhitening:
      "Beyazlatma genelde $220 civarından başlar; bu, yönteme ve değerlendirme sonucuna göre değişir.",
    pricingBraces:
      "Tel fiyatları tedavi planına bağlıdır, ancak danışmanlık ücretleri genelde $95 civarından başlar.",
    pricingConsultation:
      "Danışmanlık ziyaretleri genelde $45 civarından başlar ve kliniğin en uygun sonraki adımı önermesine yardımcı olur.",

    confirmLineService: "Hizmet",
    confirmLineDay: "Gün",
    confirmLineTime: "Saat",
    confirmLineName: "Ad",
    confirmLinePhone: "Telefon"
  }
};

const servicesConfig = {
  cleaning: { en: "Cleaning", ar: "تنظيف", tr: "Temizlik" },
  whitening: { en: "Whitening", ar: "تبييض", tr: "Beyazlatma" },
  braces: { en: "Braces", ar: "تقويم", tr: "Tel" },
  consultation: { en: "Consultation", ar: "استشارة", tr: "Danışmanlık" }
};

const synonymMap = {
  booking: [
    "book", "booking", "appointment", "reserve", "reservation", "schedule", "visit",
    "حجز", "احجز", "موعد", "ميعاد", "حجز موعد",
    "randevu", "rezervasyon", "ayarla", "randevu al"
  ],
  services: [
    "service", "services", "treatment", "treatments", "offer", "available services",
    "خدمة", "خدمات", "العلاجات", "علاج", "ايش الخدمات", "ما الخدمات",
    "hizmet", "hizmetler", "tedavi", "tedaviler"
  ],
  pricing: [
    "price", "prices", "pricing", "cost", "costs", "fee", "fees", "how much", "quote",
    "سعر", "الاسعار", "الأسعار", "تكلفة", "كم السعر", "كم", "رسوم",
    "fiyat", "fiyatlar", "ücret", "maliyet", "ne kadar"
  ],
  hours: [
    "hours", "open", "opening hours", "working hours", "available today", "when open",
    "ساعات", "ساعات العمل", "مفتوح", "دوام", "متى تفتحون", "متى مفتوح",
    "çalışma saatleri", "saatler", "açık", "ne zaman açık"
  ],
  confirm: [
    "confirm", "confirm request", "yes confirm", "ok confirm", "approve",
    "تأكيد", "تأكيد الطلب", "نعم تأكيد", "موافق", "اعتمد",
    "onayla", "talebi onayla", "evet onayla"
  ],
  restart: [
    "restart", "restart booking", "start over", "reset", "edit", "change",
    "إعادة", "ابدأ من جديد", "إعادة الحجز", "تعديل", "غيّر",
    "yeniden başlat", "tekrar başla", "sıfırla", "değiştir"
  ]
};

const serviceSynonyms = {
  cleaning: ["cleaning", "clean", "hygiene", "scale", "polish", "تنظيف", "تنظيف اسنان", "temizlik", "hijyen"],
  whitening: ["whitening", "white", "bleach", "brighten", "تبييض", "beyazlatma"],
  braces: ["braces", "brace", "orthodontic", "align", "تقويم", "تقويم اسنان", "tel", "ortodonti"],
  consultation: ["consultation", "consult", "checkup", "assessment", "استشارة", "كشف", "معاينة", "danışmanlık", "muayene"]
};

const quickReplyMap = {
  [DEMO_STATES.IDLE]: ["idle_book", "idle_services", "idle_prices", "idle_hours"],
  [DEMO_STATES.SERVICES]: ["service_cleaning", "service_whitening", "service_braces", "service_consultation"],
  [DEMO_STATES.PRICING]: ["service_cleaning", "service_whitening", "service_braces", "service_consultation"],
  [DEMO_STATES.BOOKING_SERVICE]: ["service_cleaning", "service_whitening", "service_braces", "service_consultation"],
  [DEMO_STATES.BOOKING_CONFIRM]: ["confirm_request", "restart_booking"],
  [DEMO_STATES.COMPLETED]: ["completed_book_again", "completed_services", "completed_prices"]
};

function init() {
  setupWhatsAppCTA();
  setupLanguageSwitcher();
  setupInput();
  setupReveal();
  applyLanguage(detectInitialLanguage());
  startConversation();
}

function detectInitialLanguage() {
  try {
    const saved = localStorage.getItem("convexa_demo_lang");
    if (saved && translations[saved]) return saved;
  } catch (error) {
    // ignore
  }

  const browserLang = (navigator.language || "en").toLowerCase();
  if (browserLang.startsWith("ar")) return "ar";
  if (browserLang.startsWith("tr")) return "tr";
  return "en";
}

function setupWhatsAppCTA() {
  if (!dom.ctaButton) return;
  const encoded = encodeURIComponent(DEMO_WHATSAPP_MESSAGE);
  dom.ctaButton.href = `https://wa.me/${DEMO_WHATSAPP_NUMBER}?text=${encoded}`;
  dom.ctaButton.target = "_blank";
  dom.ctaButton.rel = "noopener noreferrer";
}

function setupLanguageSwitcher() {
  dom.langButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const lang = button.dataset.lang;
      if (!translations[lang]) return;
      applyLanguage(lang);
      rerenderConversationForLanguage();
    });
  });
}

function setupInput() {
  dom.sendButton?.addEventListener("click", handleSend);
  dom.messageInput?.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSend();
    }
  });
}

function setupReveal() {
  const targets = document.querySelectorAll(
    ".demo-intro__chip, .demo-intro__title, .demo-intro__desc, .chat-card, .sidebar-card"
  );

  targets.forEach((el, index) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(16px)";
    el.style.transition =
      "opacity 700ms cubic-bezier(0.22, 1, 0.36, 1), transform 700ms cubic-bezier(0.22, 1, 0.36, 1)";
    el.dataset.delayIndex = String(index);
  });

  app.revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const index = Number(entry.target.dataset.delayIndex || 0) % 6;
        const delay = index * 70;
        window.setTimeout(() => {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }, delay);
        app.revealObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );

  targets.forEach((el) => app.revealObserver.observe(el));
}

function applyLanguage(lang) {
  app.lang = lang;
  const t = getT();

  dom.html.lang = t.htmlLang;
  dom.html.dir = t.dir;
  document.title = t.pageTitle;

  setText(dom.backButton, t.backButton);
  setText(dom.interactiveBadge, t.interactiveBadge);

  setText(dom.introChip, t.introChip);
  setText(dom.introTitle, t.introTitle);
  setText(dom.introDesc, t.introDesc);

  setText(dom.clinicName, t.clinicName);
  setText(dom.clinicRole, t.clinicRole);
  setText(dom.onlineStatus, t.onlineStatus);

  setText(dom.chatWelcome, t.chatWelcome);
  setText(dom.quickRepliesLabel, t.quickRepliesHint);
  if (dom.messageInput) dom.messageInput.placeholder = t.inputPlaceholder;
  setText(dom.sendButton, t.sendButton);

  setText(dom.summaryEyebrow, t.summaryEyebrow);
  setText(dom.summaryTitle, t.summaryTitle);
  setText(dom.summaryCompletionBanner, t.summaryCompletionBanner);

  updateSummaryUI();

  const summaryLabels = [t.fieldService, t.fieldDay, t.fieldTime, t.fieldName, t.fieldPhone];
  dom.summaryLabels.forEach((label, index) => setText(label, summaryLabels[index]));

  setText(dom.capabilitiesEyebrow, t.capabilitiesEyebrow);
  setText(dom.capabilitiesTitle, t.capabilitiesTitle);

  const capabilityTitles = [
    t.capBookingTitle, t.capServicesTitle, t.capPricingTitle, t.capHoursTitle, t.capFallbackTitle
  ];
  const capabilityDescs = [
    t.capBookingDesc, t.capServicesDesc, t.capPricingDesc, t.capHoursDesc, t.capFallbackDesc
  ];

  dom.capabilityItems.forEach((item, index) => {
    setText(item.querySelector("h3"), capabilityTitles[index]);
    setText(item.querySelector("p"), capabilityDescs[index]);
  });

  setText(dom.ctaEyebrow, t.ctaEyebrow);
  setText(dom.ctaTitle, t.ctaTitle);
  setText(dom.ctaText, t.ctaText);
  setText(dom.ctaButton, t.ctaButton);

  updateLanguageButtons();

  try {
    localStorage.setItem("convexa_demo_lang", lang);
  } catch (error) {
    // ignore
  }
}

function updateLanguageButtons() {
  dom.langButtons.forEach((button) => {
    const isActive = button.dataset.lang === app.lang;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function rerenderConversationForLanguage() {
  clearMessages();
  startConversation();
}

function clearMessages() {
  if (!dom.chatMessages) return;
  Array.from(dom.chatMessages.querySelectorAll(".chat-message, .chat-inline-cta")).forEach((node) => node.remove());
  hideTyping();
}

function startConversation() {
  app.state = DEMO_STATES.IDLE;
  app.summary = createEmptySummary();
  app.lastIntent = null;
  updateSummaryUI();
  renderQuickReplies();
  queueBotMessage(variant("botGreeting"));
}

function handleSend() {
  if (!dom.messageInput || app.isTyping) return;
  const raw = dom.messageInput.value.trim();
  if (!raw) return;
  dom.messageInput.value = "";
  processUserInput(raw);
}

function processUserInput(text) {
  addUserMessage(text);
  const action = detectAction(text);
  handleAction(action, text);
}

function detectAction(text) {
  const normalized = normalizeText(text);

  if (scoreIntent(normalized, synonymMap.confirm) >= 0.92) {
    return { type: "confirm_request" };
  }

  if (scoreIntent(normalized, synonymMap.restart) >= 0.92) {
    return { type: "restart_booking" };
  }

  const service = detectService(normalized);
  if (service) {
    return { type: "service_selected", service };
  }

  const bookingScore = scoreIntent(normalized, synonymMap.booking);
  const servicesScore = scoreIntent(normalized, synonymMap.services);
  const pricingScore = scoreIntent(normalized, synonymMap.pricing);
  const hoursScore = scoreIntent(normalized, synonymMap.hours);

  const scored = [
    { type: "start_booking", score: bookingScore },
    { type: "ask_services", score: servicesScore },
    { type: "ask_pricing", score: pricingScore },
    { type: "ask_hours", score: hoursScore }
  ].sort((a, b) => b.score - a.score);

  if (scored[0].score >= 0.9) {
    return { type: scored[0].type };
  }

  if (looksLikePhone(normalized)) {
    return { type: "phone_input", phone: text.trim() };
  }

  return { type: "free_text", text: text.trim() };
}

function scoreIntent(text, phrases) {
  let best = 0;

  phrases.forEach((phrase) => {
    const normalizedPhrase = normalizeText(phrase);

    if (!normalizedPhrase) return;

    if (text.includes(normalizedPhrase)) {
      best = Math.max(best, 1);
      return;
    }

    const phraseWords = normalizedPhrase.split(" ");
    const textWords = text.split(" ");

    phraseWords.forEach((phraseWord) => {
      textWords.forEach((textWord) => {
        const similarity = similarityScore(textWord, phraseWord);
        best = Math.max(best, similarity);
      });
    });

    const sequenceSimilarity = similarityScore(text, normalizedPhrase);
    best = Math.max(best, sequenceSimilarity * 0.92);
  });

  return best;
}

function similarityScore(a, b) {
  if (!a || !b) return 0;
  if (a === b) return 1;
  if (a.includes(b) || b.includes(a)) return 0.96;

  const distance = levenshtein(a, b);
  const maxLen = Math.max(a.length, b.length);
  if (!maxLen) return 0;
  return 1 - distance / maxLen;
}

function levenshtein(a, b) {
  const matrix = Array.from({ length: a.length + 1 }, () => new Array(b.length + 1).fill(0));

  for (let i = 0; i <= a.length; i += 1) matrix[i][0] = i;
  for (let j = 0; j <= b.length; j += 1) matrix[0][j] = j;

  for (let i = 1; i <= a.length; i += 1) {
    for (let j = 1; j <= b.length; j += 1) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1,
        matrix[i][j - 1] + 1,
        matrix[i - 1][j - 1] + cost
      );
    }
  }

  return matrix[a.length][b.length];
}

function handleAction(action, originalText) {
  switch (app.state) {
    case DEMO_STATES.IDLE:
      handleIdleState(action);
      break;
    case DEMO_STATES.SERVICES:
      handleServicesState(action);
      break;
    case DEMO_STATES.PRICING:
      handlePricingState(action);
      break;
    case DEMO_STATES.HOURS:
      handleHoursState(action);
      break;
    case DEMO_STATES.BOOKING_SERVICE:
      handleBookingServiceState(action, originalText);
      break;
    case DEMO_STATES.BOOKING_DAY:
      handleBookingDayState(action, originalText);
      break;
    case DEMO_STATES.BOOKING_TIME:
      handleBookingTimeState(action, originalText);
      break;
    case DEMO_STATES.BOOKING_NAME:
      handleBookingNameState(action, originalText);
      break;
    case DEMO_STATES.BOOKING_PHONE:
      handleBookingPhoneState(action, originalText);
      break;
    case DEMO_STATES.BOOKING_CONFIRM:
      handleBookingConfirmState(action);
      break;
    case DEMO_STATES.COMPLETED:
      handleCompletedState(action);
      break;
    default:
      fallbackResponse();
  }
}

function handleIdleState(action) {
  if (action.type === "start_booking") {
    startBookingFlow();
    return;
  }

  if (action.type === "ask_services") {
    app.state = DEMO_STATES.SERVICES;
    app.lastIntent = "services";
    renderQuickReplies();
    queueBotMessage(withFollowUp(variant("botServicesIntro"), "followBooking"));
    return;
  }

  if (action.type === "ask_pricing") {
    app.state = DEMO_STATES.PRICING;
    app.lastIntent = "pricing";
    renderQuickReplies();
    queueBotMessage(withFollowUp(variant("botPricingIntro"), "followBooking"));
    return;
  }

  if (action.type === "ask_hours") {
    app.state = DEMO_STATES.HOURS;
    app.lastIntent = "hours";
    renderQuickReplies();
    queueBotMessage(withFollowUp(variant("botHours"), "followHours"));
    return;
  }

  if (action.type === "service_selected") {
    app.state = DEMO_STATES.SERVICES;
    app.lastIntent = "services";
    renderQuickReplies();
    replyWithService(action.service);
    return;
  }

  fallbackResponse();
}

function handleServicesState(action) {
  if (action.type === "service_selected") {
    replyWithService(action.service);
    return;
  }

  if (action.type === "start_booking") {
    startBookingFlow();
    return;
  }

  if (action.type === "ask_pricing") {
    app.state = DEMO_STATES.PRICING;
    app.lastIntent = "pricing";
    renderQuickReplies();
    queueBotMessage(withFollowUp(variant("botPricingIntro"), "followBooking"));
    return;
  }

  if (action.type === "ask_hours") {
    app.state = DEMO_STATES.HOURS;
    app.lastIntent = "hours";
    renderQuickReplies();
    queueBotMessage(withFollowUp(variant("botHours"), "followHours"));
    return;
  }

  fallbackResponse();
}

function handlePricingState(action) {
  if (action.type === "service_selected") {
    replyWithPricing(action.service);
    return;
  }

  if (action.type === "start_booking") {
    startBookingFlow();
    return;
  }

  if (action.type === "ask_services") {
    app.state = DEMO_STATES.SERVICES;
    app.lastIntent = "services";
    renderQuickReplies();
    queueBotMessage(withFollowUp(variant("botServicesIntro"), "followBooking"));
    return;
  }

  fallbackResponse(withFollowUp(variant("botNeedServiceForPricing"), "followGeneral"));
}

function handleHoursState(action) {
  if (action.type === "start_booking") {
    startBookingFlow();
    return;
  }

  if (action.type === "ask_services") {
    app.state = DEMO_STATES.SERVICES;
    app.lastIntent = "services";
    renderQuickReplies();
    queueBotMessage(withFollowUp(variant("botServicesIntro"), "followBooking"));
    return;
  }

  if (action.type === "ask_pricing") {
    app.state = DEMO_STATES.PRICING;
    app.lastIntent = "pricing";
    renderQuickReplies();
    queueBotMessage(withFollowUp(variant("botPricingIntro"), "followBooking"));
    return;
  }

  if (action.type === "service_selected") {
    app.state = DEMO_STATES.SERVICES;
    app.lastIntent = "services";
    renderQuickReplies();
    replyWithService(action.service);
    return;
  }

  fallbackResponse(withFollowUp(variant("followHours"), "followGeneral"));
}

function handleBookingServiceState(action, originalText) {
  if (action.type === "service_selected") {
    app.summary.service = getServiceLabel(action.service);
    app.state = DEMO_STATES.BOOKING_DAY;
    updateSummaryUI();
    renderQuickReplies();
    queueBotMessage(variant("botAskDay"));
    return;
  }

  if (action.type === "restart_booking") {
    restartBooking();
    return;
  }

  const fromLooseText = detectService(normalizeText(originalText));
  if (fromLooseText) {
    app.summary.service = getServiceLabel(fromLooseText);
    app.state = DEMO_STATES.BOOKING_DAY;
    updateSummaryUI();
    renderQuickReplies();
    queueBotMessage(variant("botAskDay"));
    return;
  }

  fallbackResponse(withFollowUp(variant("botNeedKnownService"), "followGeneral"));
}

function handleBookingDayState(action, originalText) {
  if (action.type === "restart_booking") {
    restartBooking();
    return;
  }

  const day = originalText.trim();
  if (!day) {
    fallbackResponse(variant("botNeedDay"));
    return;
  }

  app.summary.day = day;
  app.state = DEMO_STATES.BOOKING_TIME;
  updateSummaryUI();
  renderQuickReplies();
  queueBotMessage(variant("botAskTime"));
}

function handleBookingTimeState(action, originalText) {
  if (action.type === "restart_booking") {
    restartBooking();
    return;
  }

  const time = originalText.trim();
  if (!time) {
    fallbackResponse(variant("botNeedTime"));
    return;
  }

  app.summary.time = time;
  app.state = DEMO_STATES.BOOKING_NAME;
  updateSummaryUI();
  renderQuickReplies();
  queueBotMessage(variant("botAskName"));
}

function handleBookingNameState(action, originalText) {
  if (action.type === "restart_booking") {
    restartBooking();
    return;
  }

  const name = originalText.trim();
  if (!name || name.length < 2) {
    fallbackResponse(variant("botNeedName"));
    return;
  }

  app.summary.name = name;
  app.state = DEMO_STATES.BOOKING_PHONE;
  updateSummaryUI();
  renderQuickReplies();
  queueBotMessage(variant("botAskPhone"));
}

function handleBookingPhoneState(action, originalText) {
  if (action.type === "restart_booking") {
    restartBooking();
    return;
  }

  const phone = action.type === "phone_input" ? action.phone : originalText.trim();
  if (!looksLikePhone(phone)) {
    fallbackResponse(variant("botInvalidPhone"));
    return;
  }

  app.summary.phone = phone;
  app.state = DEMO_STATES.BOOKING_CONFIRM;
  updateSummaryUI();
  renderQuickReplies();
  queueBotMessage(buildConfirmationMessage());
}

function handleBookingConfirmState(action) {
  if (action.type === "confirm_request") {
    app.state = DEMO_STATES.COMPLETED;
    updateSummaryUI();
    renderQuickReplies();
    queueBotMessage(withFollowUp(variant("botCompleted"), "followCompletion"), { afterRender: renderCompletionChatCTA });
    return;
  }

  if (action.type === "restart_booking") {
    restartBooking();
    return;
  }

  fallbackResponse(variant("botUnknownEdit"));
}

function handleCompletedState(action) {
  if (action.type === "start_booking") {
    resetSummary();
    startBookingFlow();
    return;
  }

  if (action.type === "ask_services" || action.type === "service_selected") {
    app.state = DEMO_STATES.SERVICES;
    renderQuickReplies();
    if (action.type === "service_selected") {
      replyWithService(action.service);
    } else {
      queueBotMessage(withFollowUp(variant("botServicesIntro"), "followBooking"));
    }
    return;
  }

  if (action.type === "ask_pricing") {
    app.state = DEMO_STATES.PRICING;
    renderQuickReplies();
    queueBotMessage(withFollowUp(variant("botPricingIntro"), "followBooking"));
    return;
  }

  fallbackResponse();
}

function startBookingFlow() {
  app.state = DEMO_STATES.BOOKING_SERVICE;
  app.lastIntent = "booking";
  removeChatCTA();
  resetSummary();
  updateSummaryUI();
  renderQuickReplies();
  queueBotMessage(withFollowUp(variant("botAskService"), "followGeneral"));
}

function restartBooking() {
  app.state = DEMO_STATES.BOOKING_SERVICE;
  app.lastIntent = "booking";
  removeChatCTA();
  resetSummary();
  updateSummaryUI();
  renderQuickReplies();
  queueBotMessage(variant("botRestarted"));
}

function resetSummary() {
  app.summary = createEmptySummary();
}

function replyWithService(serviceKey) {
  const t = getT();

  const titleMap = {
    cleaning: t.serviceCleaningTitle,
    whitening: t.serviceWhiteningTitle,
    braces: t.serviceBracesTitle,
    consultation: t.serviceConsultationTitle
  };

  const descMap = {
    cleaning: t.serviceCleaningDesc,
    whitening: t.serviceWhiteningDesc,
    braces: t.serviceBracesDesc,
    consultation: t.serviceConsultationDesc
  };

  const message = withFollowUp(
    `${titleMap[serviceKey]} — ${descMap[serviceKey]}`,
    Math.random() > 0.5 ? "followBooking" : "followPricing"
  );

  queueBotMessage(message);
}

function replyWithPricing(serviceKey) {
  const t = getT();

  const pricingMap = {
    cleaning: t.pricingCleaning,
    whitening: t.pricingWhitening,
    braces: t.pricingBraces,
    consultation: t.pricingConsultation
  };

  const message = withFollowUp(pricingMap[serviceKey], "followBooking");
  queueBotMessage(message);
}

function buildConfirmationMessage() {
  const t = getT();

  const intro = variant("botConfirmIntro");
  const question = variant("botConfirmQuestion");

  return [
    intro,
    "",
    `${t.confirmLineService}: ${app.summary.service || t.emptyValue}`,
    `${t.confirmLineDay}: ${app.summary.day || t.emptyValue}`,
    `${t.confirmLineTime}: ${app.summary.time || t.emptyValue}`,
    `${t.confirmLineName}: ${app.summary.name || t.emptyValue}`,
    `${t.confirmLinePhone}: ${app.summary.phone || t.emptyValue}`,
    "",
    question
  ].join("\n");
}

function fallbackResponse(customText) {
  queueBotMessage(customText || withFollowUp(variant("botFallback"), "followGeneral"));
}

function queueBotMessage(text, options = {}) {
  const delay = options.delay ?? getBotDelay(text);

  showTyping();

  clearTimeout(app.typingTimeout);
  app.typingTimeout = window.setTimeout(() => {
    hideTyping();
    addBotMessage(text, options.type || "bot");
    if (typeof options.afterRender === "function") {
      options.afterRender();
    }
  }, delay);
}

function getBotDelay(text) {
  const length = typeof text === "string" ? text.length : 0;
  return Math.max(520, Math.min(1080, 430 + length * 3));
}

function showTyping() {
  app.isTyping = true;
  dom.chatTyping?.classList.add("is-visible");
  scrollChatToBottom();
}

function hideTyping() {
  app.isTyping = false;
  dom.chatTyping?.classList.remove("is-visible");
}

function addUserMessage(text) {
  removeChatCTA();
  addMessage(text, "user");
}

function addBotMessage(text, type = "bot") {
  addMessage(text, type);
}

function addMessage(text, type) {
  if (!dom.chatMessages) return;

  const welcome = dom.chatWelcome;
  if (welcome && !welcome.hidden) {
    welcome.hidden = true;
  }

  const bubble = document.createElement("div");
  const bubbleType = type === "user" ? "user" : type === "system" ? "system" : "bot";

  bubble.className = `chat-message chat-message--${bubbleType}`;
  bubble.innerHTML = formatMessage(text);

  dom.chatMessages.appendChild(bubble);
  scrollChatToBottom();
}

function renderCompletionChatCTA() {
  removeChatCTA();

  const wrapper = document.createElement("div");
  wrapper.className = "chat-inline-cta";
  wrapper.style.alignSelf = dom.html.dir === "rtl" ? "flex-end" : "flex-start";
  wrapper.style.display = "flex";
  wrapper.style.flexWrap = "wrap";
  wrapper.style.gap = "10px";
  wrapper.style.marginTop = "8px";
  wrapper.style.animation = "messageEnter 0.38s cubic-bezier(0.22, 1, 0.36, 1)";

  const link = document.createElement("a");
  link.href = `https://wa.me/${DEMO_WHATSAPP_NUMBER}?text=${encodeURIComponent(DEMO_WHATSAPP_MESSAGE)}`;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.textContent = getT().chatCtaButton;
  link.style.minHeight = "44px";
  link.style.display = "inline-flex";
  link.style.alignItems = "center";
  link.style.justifyContent = "center";
  link.style.padding = "0 16px";
  link.style.borderRadius = "999px";
  link.style.fontWeight = "800";
  link.style.fontSize = "0.88rem";
  link.style.background = "linear-gradient(180deg, rgba(30,170,101,0.96), rgba(19,145,84,0.98))";
  link.style.color = "#f8fff9";
  link.style.border = "1px solid rgba(53, 221, 136, 0.28)";
  link.style.boxShadow = "0 16px 30px rgba(13, 102, 58, 0.22), inset 0 1px 0 rgba(255,255,255,0.12)";

  wrapper.appendChild(link);
  dom.chatMessages.appendChild(wrapper);
  scrollChatToBottom();
}

function removeChatCTA() {
  dom.chatMessages?.querySelector(".chat-inline-cta")?.remove();
}

function formatMessage(text) {
  return escapeHtml(text).replace(/\n/g, "<br>");
}

function escapeHtml(text) {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function scrollChatToBottom() {
  if (!dom.chatMessages) return;
  dom.chatMessages.scrollTop = dom.chatMessages.scrollHeight;
}

function updateSummaryUI() {
  const t = getT();

  setText(dom.summaryService, app.summary.service || t.emptyValue);
  setText(dom.summaryDay, app.summary.day || t.emptyValue);
  setText(dom.summaryTime, app.summary.time || t.emptyValue);
  setText(dom.summaryName, app.summary.name || t.emptyValue);
  setText(dom.summaryPhone, app.summary.phone || t.emptyValue);

  const completedCount = SUMMARY_FIELDS.filter((field) => Boolean(app.summary[field])).length;
  const percent = Math.round((completedCount / SUMMARY_FIELDS.length) * 100);

  if (dom.summaryProgressFill) {
    dom.summaryProgressFill.style.width = `${percent}%`;
  }

  if (app.state === DEMO_STATES.COMPLETED) {
    setText(dom.summaryStatusBadge, t.summaryStatusReady);
    setText(dom.summaryProgressText, t.summaryProgressReady);
    setText(dom.summaryFooter, t.summaryFooterReady);
    dom.summaryCompletionBanner.hidden = false;
    dom.summaryCard?.classList.add("is-completed");
  } else if (completedCount > 0) {
    setText(dom.summaryStatusBadge, t.summaryStatusCollecting);
    setText(dom.summaryProgressText, t.summaryProgressActive);
    setText(dom.summaryFooter, t.summaryFooterHint);
    dom.summaryCompletionBanner.hidden = true;
    dom.summaryCard?.classList.remove("is-completed");
  } else {
    setText(dom.summaryStatusBadge, t.summaryStatusCollecting);
    setText(dom.summaryProgressText, t.summaryProgressIdle);
    setText(dom.summaryFooter, t.summaryFooterHint);
    dom.summaryCompletionBanner.hidden = true;
    dom.summaryCard?.classList.remove("is-completed");
  }
}

function renderQuickReplies() {
  if (!dom.quickReplies) return;

  dom.quickReplies.innerHTML = "";

  const items = quickReplyMap[app.state] || quickReplyMap[DEMO_STATES.IDLE];
  items.forEach((itemKey) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "quick-reply";
    button.textContent = getQuickReplyLabel(itemKey);
    button.dataset.action = itemKey;
    button.addEventListener("click", () => handleQuickReply(itemKey));
    dom.quickReplies.appendChild(button);
  });
}

function handleQuickReply(actionKey) {
  const label = getQuickReplyLabel(actionKey);

  switch (actionKey) {
    case "idle_book":
    case "completed_book_again":
      addUserMessage(label);
      handleAction({ type: "start_booking" }, label);
      break;

    case "idle_services":
    case "completed_services":
      addUserMessage(label);
      handleAction({ type: "ask_services" }, label);
      break;

    case "idle_prices":
    case "completed_prices":
      addUserMessage(label);
      handleAction({ type: "ask_pricing" }, label);
      break;

    case "idle_hours":
      addUserMessage(label);
      handleAction({ type: "ask_hours" }, label);
      break;

    case "service_cleaning":
      addUserMessage(label);
      handleAction({ type: "service_selected", service: "cleaning" }, label);
      break;

    case "service_whitening":
      addUserMessage(label);
      handleAction({ type: "service_selected", service: "whitening" }, label);
      break;

    case "service_braces":
      addUserMessage(label);
      handleAction({ type: "service_selected", service: "braces" }, label);
      break;

    case "service_consultation":
      addUserMessage(label);
      handleAction({ type: "service_selected", service: "consultation" }, label);
      break;

    case "confirm_request":
      addUserMessage(getT().botConfirmedLabel);
      handleAction({ type: "confirm_request" }, label);
      break;

    case "restart_booking":
      addUserMessage(getT().botRestartLabel);
      handleAction({ type: "restart_booking" }, label);
      break;

    default:
      break;
  }
}

function getQuickReplyLabel(key) {
  const t = getT();

  const map = {
    idle_book: t.quickIdleBook,
    idle_services: t.quickIdleServices,
    idle_prices: t.quickIdlePrices,
    idle_hours: t.quickIdleHours,

    service_cleaning: t.quickServiceCleaning,
    service_whitening: t.quickServiceWhitening,
    service_braces: t.quickServiceBraces,
    service_consultation: t.quickServiceConsultation,

    completed_book_again: t.quickCompletedBookAgain,
    completed_services: t.quickCompletedServices,
    completed_prices: t.quickCompletedPrices,

    confirm_request: t.botConfirmedLabel,
    restart_booking: t.botRestartLabel
  };

  return map[key] || key;
}

function getT() {
  return translations[app.lang];
}

function setText(node, value) {
  if (node) node.textContent = value;
}

function normalizeText(value) {
  return String(value)
    .toLowerCase()
    .trim()
    .replace(/[؟?!.,،؛:()[\]{}]/g, " ")
    .replace(/\s+/g, " ");
}

function detectService(text) {
  let bestService = null;
  let bestScore = 0;

  Object.entries(serviceSynonyms).forEach(([serviceKey, terms]) => {
    const score = scoreIntent(text, terms);
    if (score > bestScore) {
      bestScore = score;
      bestService = serviceKey;
    }
  });

  return bestScore >= 0.9 ? bestService : null;
}

function getServiceLabel(serviceKey) {
  const config = servicesConfig[serviceKey];
  if (!config) return serviceKey;
  return config[app.lang] || config.en;
}

function looksLikePhone(text) {
  const digits = String(text).replace(/\D/g, "");
  return digits.length >= 7;
}

function variant(key) {
  const entry = getT()[key];
  if (!Array.isArray(entry)) return entry;

  const current = app.variationIndex[key] || 0;
  const value = entry[current % entry.length];
  app.variationIndex[key] = (current + 1) % entry.length;
  return value;
}

function withFollowUp(message, followKey) {
  const follow = variant(followKey);
  return `${message}\n\n${follow}`;
}

document.addEventListener("DOMContentLoaded", init);