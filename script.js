/* ======================
WHATSAPP CONFIG
====================== */

const WHATSAPP_NUMBER = "31684957550";

/* ======================
TRANSLATIONS
====================== */

const translations = {
  en: {
    pageTitle: "ClinicBot | WhatsApp AI Assistant for Clinics",
    pageDescription:
      "WhatsApp AI assistant for clinics that answers faster, supports multiple languages, and turns patient chats into structured booking requests.",

    navCta: "Try the Demo",

    heroBadge: "Built for clinics that need faster WhatsApp responses",
    heroTitle:
      "WhatsApp conversations should move patients toward booking — not sit waiting in the inbox.",
    heroSub:
      "ConveXa helps clinics reply faster, guide patient questions clearly, and collect structured booking requests through a WhatsApp-first experience.",
    heroPrimary: "Try the Demo",
    heroSecondary: "See How It Works",
    heroHelper:
      "A simplified interactive demo is included below. The live version connects directly to your clinic workflow and WhatsApp conversations.",
    heroChatStatus: "Online now",
    heroChatPlaceholder: "Structured intake in progress...",

    heroProof1Value: "WhatsApp-first",
    heroProof1: "Built for clinics that manage patient demand through chat",
    heroProof2Value: "Multi-language",
    heroProof2: "Ready for Arabic, English, and Turkish patient conversations",
    heroProof3Value: "Structured flow",
    heroProof3: "Designed to turn WhatsApp messages into clear booking requests",

    trustedLabel: "Built with practical clinic workflows in mind",
    trustedItem1: "Multi-language ready",
    trustedItem2: "24/7 response capture",
    trustedItem3: "WhatsApp-first flow",
    trustedItem4: "Easy to customize",

    stat1Value: "Faster",
    stat1: "Designed to reduce response delays when new patient messages arrive.",
    stat2Value: "Clearer",
    stat2: "Guides conversations with consistent answers and clearer next steps.",
    stat3Value: "Lighter",
    stat3: "Reduces repetitive front-desk replies so staff can focus on higher-value tasks.",
    stat4Value: "Better organized",
    stat4: "Turns incoming chats into structured requests instead of scattered conversations.",

    trustKicker: "Trust signals",
    trustTitle:
      "Practical by design. Easy to understand. Built for real clinic workflows.",
    trustSub:
      "No inflated claims. Just the operational advantages clinics usually want when WhatsApp becomes a serious patient channel.",
    trustCard1Title: "Multi-language ready",
    trustCard1Text:
      "Support Arabic, English, and Turkish conversations from one clinic flow.",
    trustCard2Title: "Works beyond business hours",
    trustCard2Text:
      "Capture patient demand even when reception is busy or offline.",
    trustCard3Title: "Built for WhatsApp-first clinics",
    trustCard3Text:
      "The experience stays natural because patients remain in the channel they already use.",
    trustCard4Title: "Easy to adapt",
    trustCard4Text:
      "Conversation logic can be shaped around your services, workflow, and booking process.",

    problemKicker: "Why it matters",
    problemTitle:
      "Patient attention moves fast. Your replies need a system behind them.",
    problemSub:
      "When WhatsApp becomes the first contact point, speed and structure matter as much as the treatment itself.",
    problemCard1Title: "Delay breaks momentum",
    problemCard1Text:
      "A slow reply can interrupt patient intent before the conversation even starts properly.",
    problemCard2Title: "Manual replies do not scale well",
    problemCard2Text:
      "Reception teams should not spend their day repeating the same answers to the same questions.",
    problemCard3Title: "Messy chats create messy follow-up",
    problemCard3Text:
      "Without a clear flow, booking details stay buried inside conversations instead of becoming usable requests.",

    solutionKicker: "How it works",
    solutionTitle:
      "A WhatsApp assistant that replies clearly, qualifies intent, and collects the details your team needs.",
    flow1: "Hi, do you have an appointment this week for teeth whitening?",
    flow2: "Yes — we can help with that. Would you prefer Tuesday or Thursday?",
    flow3: "Thursday after 5 PM.",
    flow4:
      "Perfect. I can prepare a request for 5:30 PM. Please send your full name and phone number.",
    flowStatus: "Booking request prepared automatically",
    solutionPoint1Title: "Responds immediately",
    solutionPoint1Text:
      "Patients get an instant answer instead of waiting for manual follow-up.",
    solutionPoint2Title: "Qualifies intent",
    solutionPoint2Text:
      "The flow gathers service interest, timing, and contact details in one place.",
    solutionPoint3Title: "Supports the front desk",
    solutionPoint3Text:
      "Your team spends less time on repetitive questions and more time on real patient coordination.",
    solutionPoint4Title: "Fits multilingual clinics",
    solutionPoint4Text:
      "Useful for clinics that receive mixed-language patient inquiries every week.",

    featuresKicker: "Core features",
    featuresTitle:
      "The essentials clinics usually need to keep WhatsApp organized and conversion-friendly.",
    feature1Title: "Smart response handling",
    feature1Text:
      "Handles repeated questions, service inquiries, and common patient intents with clear answers.",
    feature2Title: "Booking request flow",
    feature2Text:
      "Moves from inquiry to requested time slot without forcing the team to start from scratch.",
    feature3Title: "Native WhatsApp experience",
    feature3Text:
      "Patients stay in the familiar chat flow instead of being pushed into a separate system.",
    feature4Title: "Language support",
    feature4Text:
      "Built to support Arabic, English, and Turkish communication paths.",
    feature5Title: "After-hours capture",
    feature5Text:
      "Collects new inquiries when staff are busy, offline, or outside opening hours.",
    feature6Title: "Operational clarity",
    feature6Text:
      "Creates a more consistent intake process so conversations are easier to review and follow up.",

    testimonialsKicker: "Use cases",
    testimonialsTitle:
      "Designed for clinics that want a cleaner patient communication flow on WhatsApp.",
    summary1Value: "Faster replies",
    summary1: "Useful when response speed affects patient attention",
    summary2Value: "Less repetition",
    summary2: "Helpful for teams answering the same questions every day",
    summary3Value: "Clearer intake",
    summary3: "Better when booking details need more structure",
    testimonial1:
      "Good fit for clinics that receive frequent WhatsApp inquiries and need more consistency in the first reply.",
    testimonial1Author: "Best for — patient intake optimization",
    testimonial2:
      "Useful when the front desk needs a clearer way to collect service interest, timing, and contact details.",
    testimonial2Author: "Best for — structured booking requests",
    testimonial3:
      "Especially relevant for clinics serving patients across Arabic, English, and Turkish communication flows.",
    testimonial3Author: "Best for — multilingual clinics",

    demoKicker: "Interactive demo",
    demoTitle: "Try the demo and see the booking flow in action.",
    demoSub:
      "This is a simplified demo that shows how the assistant can reply, guide the conversation, and collect booking details.",
    demoNote:
      "The live version is connected directly to your clinic workflow and can be tailored to your services, languages, and booking process.",
    demoBtn: "Try the Demo",
    demoBtnSecondary: "See Setup Options",

    pricingKicker: "Setup options",
    pricingTitle:
      "Flexible packaging for clinics at different stages of adoption.",
    pricingSub:
      "Start with a lighter setup, expand into a monthly workflow, or request a more customized ownership model.",
    pricing1Title: "Starter",
    pricing1Price: "Starting from $149",
    pricing1Fit: "For clinics testing a structured WhatsApp intake flow.",
    pricing1Text:
      "Entry setup for clinics that want to start with a focused automation scope and a simpler launch path.",
    pricingBadge: "Most flexible",
    pricing2Title: "Growth",
    pricing2Price: "Monthly plans available",
    pricing2Fit:
      "For clinics that want ongoing support, updates, and workflow refinement.",
    pricing2Text:
      "Best fit when WhatsApp is already an active communication channel and the system needs to stay aligned with operations.",
    pricing3Title: "Custom Ownership",
    pricing3Price: "Custom setup available",
    pricing3Fit:
      "For clinics that need a more tailored system and deeper customization.",
    pricing3Text:
      "Suitable for clinics with more specific workflows, service logic, or long-term internal use requirements.",
    pricingNote: "Final pricing depends on clinic size and workflow requirements.",
    pricingCta: "Book Your Free Setup Call",

    finalKicker: "Next step",
    finalTitle:
      "See the flow. Then decide how you want it adapted to your clinic.",
    finalSub:
      "The demo shows the concept. The live version is shaped around your services, response style, languages, and booking workflow.",
    finalBtn: "Start on Your Number",
    finalSecondaryBtn: "Open the Demo Again",

    waFinal:
      "Hello, I want to discuss setting up the WhatsApp AI assistant for my clinic and understand the next steps.",
    waFloat:
      "Hello, I would like more information about the WhatsApp AI assistant for my clinic.",
    waSetup:
      "Hello, I would like to book a free setup call and learn which option fits my clinic best."
  },

  ar: {
    pageTitle: "ClinicBot | مساعد واتساب بالذكاء الاصطناعي للعيادات",
    pageDescription:
      "مساعد واتساب بالذكاء الاصطناعي للعيادات يساعد على الرد أسرع، ودعم أكثر من لغة، وتحويل المحادثات إلى طلبات حجز منظمة.",

    navCta: "جرّب الديمو",

    heroBadge: "مصمم للعيادات التي تحتاج ردود واتساب أسرع",
    heroTitle:
      "محادثات واتساب يجب أن تقود المريض نحو الحجز — لا أن تبقى معلقة داخل الصندوق.",
    heroSub:
      "ConveXa يساعد العيادات على الرد أسرع، وتوجيه أسئلة المرضى بوضوح، وتجميع طلبات الحجز بشكل منظم داخل تجربة مبنية على واتساب.",
    heroPrimary: "جرّب الديمو",
    heroSecondary: "شاهد كيف يعمل",
    heroHelper:
      "يوجد بالأسفل نموذج تفاعلي مبسط. النسخة الحية يتم ربطها مباشرة بسير العمل داخل عيادتك ومحادثات واتساب.",
    heroChatStatus: "متصل الآن",
    heroChatPlaceholder: "جارٍ تنظيم بيانات الحجز...",

    heroProof1Value: "مبني على واتساب",
    heroProof1: "مصمم للعيادات التي تدير اهتمام المرضى عبر المحادثات",
    heroProof2Value: "متعدد اللغات",
    heroProof2: "جاهز لمحادثات المرضى بالعربية والإنجليزية والتركية",
    heroProof3Value: "تدفق منظم",
    heroProof3: "مصمم لتحويل رسائل واتساب إلى طلبات حجز واضحة",

    trustedLabel: "مبني مع مراعاة سير العمل الحقيقي داخل العيادات",
    trustedItem1: "جاهز لعدة لغات",
    trustedItem2: "يلتقط الطلبات 24/7",
    trustedItem3: "تدفق مبني على واتساب",
    trustedItem4: "سهل التخصيص",

    stat1Value: "أسرع",
    stat1: "مصمم لتقليل تأخر الرد عند وصول رسائل مرضى جدد.",
    stat2Value: "أوضح",
    stat2: "يوجّه المحادثات بإجابات ثابتة وخطوات تالية أوضح.",
    stat3Value: "أخف على الفريق",
    stat3: "يقلل من الردود المتكررة حتى يركز الفريق على المهام الأعلى قيمة.",
    stat4Value: "أكثر تنظيمًا",
    stat4: "يحوّل المحادثات الواردة إلى طلبات منظمة بدل محادثات مبعثرة.",

    trustKicker: "عناصر الثقة",
    trustTitle:
      "عملي في التصميم. واضح في الفكرة. ومبني ليناسب سير العمل الحقيقي للعيادات.",
    trustSub:
      "بدون أرقام مبالغ فيها. فقط مزايا تشغيلية حقيقية غالبًا ما تحتاجها العيادات عندما يصبح واتساب قناة أساسية للمرضى.",
    trustCard1Title: "جاهز لعدة لغات",
    trustCard1Text:
      "يدعم المحادثات بالعربية والإنجليزية والتركية داخل نفس التدفق.",
    trustCard2Title: "يعمل حتى خارج أوقات الدوام",
    trustCard2Text:
      "يلتقط اهتمام المرضى حتى عندما يكون الاستقبال مشغولًا أو غير متاح.",
    trustCard3Title: "مبني للعيادات المعتمدة على واتساب",
    trustCard3Text:
      "التجربة تبقى طبيعية لأن المريض يظل داخل القناة التي يستخدمها أصلًا.",
    trustCard4Title: "سهل التكييف",
    trustCard4Text:
      "يمكن تشكيل منطق المحادثة حسب خدماتك، وسير العمل، وطريقة الحجز.",

    problemKicker: "لماذا هذا مهم",
    problemTitle: "انتباه المريض يتحرك بسرعة. وردودك تحتاج نظامًا خلفها.",
    problemSub:
      "عندما يصبح واتساب أول نقطة تواصل، تصبح السرعة والتنظيم مهمتين بقدر أهمية الخدمة نفسها.",
    problemCard1Title: "التأخر يقطع الزخم",
    problemCard1Text:
      "الرد البطيء قد يقطع نية المريض قبل أن تبدأ المحادثة بشكل فعلي.",
    problemCard2Title: "الرد اليدوي لا يتوسع بسهولة",
    problemCard2Text:
      "لا يجب أن يقضي فريق الاستقبال يومه في تكرار نفس الإجابات على نفس الأسئلة.",
    problemCard3Title: "المحادثات الفوضوية تعني متابعة فوضوية",
    problemCard3Text:
      "بدون تدفق واضح، تبقى تفاصيل الحجز مدفونة داخل المحادثة بدل أن تتحول إلى طلب صالح للمتابعة.",

    solutionKicker: "كيف يعمل",
    solutionTitle:
      "مساعد واتساب يرد بوضوح، يحدد نية المريض، ويجمع التفاصيل التي يحتاجها فريقك.",
    flow1: "مرحبًا، هل لديكم موعد هذا الأسبوع لتبييض الأسنان؟",
    flow2: "نعم — يمكننا المساعدة. هل تفضل الثلاثاء أم الخميس؟",
    flow3: "الخميس بعد الساعة 5 مساءً.",
    flow4: "ممتاز. يمكنني تجهيز طلب على 5:30. أرسل الاسم الكامل ورقم الهاتف من فضلك.",
    flowStatus: "تم تجهيز طلب الحجز تلقائيًا",
    solutionPoint1Title: "يرد فورًا",
    solutionPoint1Text:
      "يحصل المريض على جواب مباشر بدل انتظار المتابعة اليدوية.",
    solutionPoint2Title: "يحدد النية",
    solutionPoint2Text:
      "يجمع التدفق نوع الخدمة، والوقت المناسب، وبيانات التواصل في مكان واحد.",
    solutionPoint3Title: "يدعم الاستقبال",
    solutionPoint3Text:
      "فريقك يقضي وقتًا أقل على الأسئلة المتكررة ووقتًا أكثر على تنسيق المرضى الحقيقي.",
    solutionPoint4Title: "يناسب العيادات متعددة اللغات",
    solutionPoint4Text:
      "مفيد للعيادات التي تستقبل استفسارات بلغات مختلفة بشكل مستمر.",

    featuresKicker: "المزايا الأساسية",
    featuresTitle:
      "الأساسيات التي تحتاجها العيادات عادةً للحفاظ على واتساب منظمًا وأكثر قابلية للتحويل.",
    feature1Title: "معالجة ذكية للردود",
    feature1Text:
      "يتعامل مع الأسئلة المتكررة، واستفسارات الخدمات، ونوايا المرضى الشائعة بإجابات واضحة.",
    feature2Title: "تدفق طلب الحجز",
    feature2Text:
      "ينتقل من الاستفسار إلى وقت مطلوب بدون أن يضطر الفريق للبدء من الصفر في كل مرة.",
    feature3Title: "تجربة واتساب طبيعية",
    feature3Text:
      "المريض يبقى داخل المحادثة المعتادة بدل نقله إلى نظام منفصل.",
    feature4Title: "دعم اللغات",
    feature4Text:
      "مبني لدعم مسارات التواصل بالعربية والإنجليزية والتركية.",
    feature5Title: "التقاط الطلبات بعد الدوام",
    feature5Text:
      "يجمع الاستفسارات الجديدة عندما يكون الفريق مشغولًا أو خارج وقت العمل.",
    feature6Title: "وضوح تشغيلي",
    feature6Text:
      "ينشئ عملية استقبال أكثر اتساقًا بحيث تصبح المحادثات أسهل في المراجعة والمتابعة.",

    testimonialsKicker: "حالات الاستخدام",
    testimonialsTitle:
      "مصمم للعيادات التي تريد مسار تواصل أنظف مع المرضى على واتساب.",
    summary1Value: "ردود أسرع",
    summary1: "مفيد عندما تؤثر سرعة الرد على انتباه المريض",
    summary2Value: "تكرار أقل",
    summary2: "مناسب للفرق التي تجيب على نفس الأسئلة يوميًا",
    summary3Value: "استقبال أوضح",
    summary3: "أفضل عندما تحتاج تفاصيل الحجز إلى تنظيم أكبر",
    testimonial1:
      "مناسب للعيادات التي تستقبل عددًا متكررًا من استفسارات واتساب وتحتاج ثباتًا أكبر في أول رد.",
    testimonial1Author: "الأنسب لـ — تحسين استقبال المرضى",
    testimonial2:
      "مفيد عندما يحتاج الاستقبال إلى طريقة أوضح لتجميع نوع الخدمة والوقت وبيانات التواصل.",
    testimonial2Author: "الأنسب لـ — طلبات الحجز المنظمة",
    testimonial3:
      "ذو صلة خاصة بالعيادات التي تخدم المرضى ضمن مسارات تواصل عربية وإنجليزية وتركية.",
    testimonial3Author: "الأنسب لـ — العيادات متعددة اللغات",

    demoKicker: "ديمو تفاعلي",
    demoTitle: "جرّب الديمو وشاهد تدفق الحجز أثناء العمل.",
    demoSub:
      "هذا نموذج مبسط يوضح كيف يمكن للمساعد أن يرد، ويوجه المحادثة، ويجمع تفاصيل الحجز.",
    demoNote:
      "النسخة الحية يتم ربطها مباشرة بسير العمل داخل عيادتك ويمكن تخصيصها حسب الخدمات واللغات وطريقة الحجز.",
    demoBtn: "جرّب الديمو",
    demoBtnSecondary: "شاهد خيارات الإعداد",

    pricingKicker: "خيارات الإعداد",
    pricingTitle: "باقات مرنة تناسب العيادات في مراحل مختلفة من التبني.",
    pricingSub:
      "ابدأ بإعداد أخف، أو انتقل إلى خطة شهرية، أو اطلب نموذجًا أكثر تخصيصًا وملكية.",
    pricing1Title: "Starter",
    pricing1Price: "يبدأ من 149$",
    pricing1Fit: "للعيادات التي تختبر تدفق واتساب منظمًا لاستقبال الطلبات.",
    pricing1Text:
      "إعداد أولي للعيادات التي تريد البدء بنطاق أتمتة محدد ومسار إطلاق أبسط.",
    pricingBadge: "الأكثر مرونة",
    pricing2Title: "Growth",
    pricing2Price: "تتوفر خطط شهرية",
    pricing2Fit:
      "للعيادات التي تريد دعمًا مستمرًا وتحديثات وتحسينًا متواصلًا لسير العمل.",
    pricing2Text:
      "مناسب عندما يكون واتساب بالفعل قناة نشطة ويحتاج النظام أن يبقى منسجمًا مع التشغيل.",
    pricing3Title: "Custom Ownership",
    pricing3Price: "يتوفر إعداد مخصص",
    pricing3Fit:
      "للعيادات التي تحتاج نظامًا أكثر تخصيصًا وتعديلًا أعمق.",
    pricing3Text:
      "مناسب للعيادات التي لديها متطلبات خاصة في سير العمل أو منطق الخدمات أو الاستخدام الطويل.",
    pricingNote: "السعر النهائي يعتمد على حجم العيادة ومتطلبات سير العمل.",
    pricingCta: "احجز مكالمة الإعداد المجانية",

    finalKicker: "الخطوة التالية",
    finalTitle:
      "شاهد التدفق أولًا، ثم قرر كيف تريد تخصيصه لعيادتك.",
    finalSub:
      "الديمو يوضح الفكرة. أما النسخة الحية فتُشكّل حسب خدماتك، وأسلوب الرد، واللغات، وسير الحجز داخل عيادتك.",
    finalBtn: "ابدأ على رقم عيادتك",
    finalSecondaryBtn: "افتح الديمو مرة أخرى",

    waFinal:
      "مرحبا، أريد التحدث بخصوص إعداد مساعد واتساب بالذكاء الاصطناعي لعيادتي ومعرفة الخطوات التالية.",
    waFloat:
      "مرحبا، أريد معلومات أكثر عن مساعد واتساب بالذكاء الاصطناعي لعيادتي.",
    waSetup:
      "مرحبا، أريد حجز مكالمة إعداد مجانية لمعرفة الخيار الأنسب لعيادتي."
  },

  tr: {
    pageTitle: "ClinicBot | Klinikler için WhatsApp Yapay Zeka Asistanı",
    pageDescription:
      "Klinikler için daha hızlı yanıt veren, çok dilli desteği olan ve sohbetleri yapılandırılmış rezervasyon taleplerine dönüştüren WhatsApp yapay zeka asistanı.",

    navCta: "Demoyu Dene",

    heroBadge: "Daha hızlı WhatsApp yanıtlarına ihtiyaç duyan klinikler için",
    heroTitle:
      "WhatsApp konuşmaları hastayı rezervasyona yaklaştırmalı — gelen kutusunda beklememeli.",
    heroSub:
      "ConveXa, kliniklerin daha hızlı yanıt vermesine, hasta sorularını net biçimde yönlendirmesine ve yapılandırılmış rezervasyon talepleri toplamasına yardımcı olur.",
    heroPrimary: "Demoyu Dene",
    heroSecondary: "Nasıl Çalıştığını Gör",
    heroHelper:
      "Aşağıda basitleştirilmiş etkileşimli bir demo bulunuyor. Canlı sürüm doğrudan kliniğinizin iş akışına ve WhatsApp konuşmalarına bağlanır.",
    heroChatStatus: "Şimdi çevrimiçi",
    heroChatPlaceholder: "Yapılandırılmış kayıt hazırlanıyor...",

    heroProof1Value: "WhatsApp-first",
    heroProof1: "Hasta talebini sohbet üzerinden yöneten klinikler için tasarlandı",
    heroProof2Value: "Çok dilli",
    heroProof2: "Arapça, İngilizce ve Türkçe hasta konuşmaları için hazır",
    heroProof3Value: "Yapılandırılmış akış",
    heroProof3: "WhatsApp mesajlarını net rezervasyon taleplerine dönüştürmek için tasarlandı",

    trustedLabel: "Gerçek klinik iş akışları düşünülerek tasarlandı",
    trustedItem1: "Çok dilli hazır",
    trustedItem2: "7/24 talep yakalama",
    trustedItem3: "WhatsApp-first akış",
    trustedItem4: "Kolay özelleştirme",

    stat1Value: "Daha hızlı",
    stat1: "Yeni hasta mesajları geldiğinde yanıt gecikmesini azaltmak için tasarlandı.",
    stat2Value: "Daha net",
    stat2: "Konuşmaları tutarlı yanıtlar ve daha net sonraki adımlarla yönlendirir.",
    stat3Value: "Daha hafif",
    stat3: "Tekrarlayan resepsiyon yanıtlarını azaltır, ekip daha değerli işlere odaklanır.",
    stat4Value: "Daha düzenli",
    stat4: "Gelen sohbetleri dağınık konuşmalar yerine yapılandırılmış taleplere dönüştürür.",

    trustKicker: "Güven sinyalleri",
    trustTitle:
      "Pratik tasarım. Anlaşılır yapı. Gerçek klinik iş akışları için üretildi.",
    trustSub:
      "Abartılı iddialar yok. Sadece WhatsApp ciddi bir hasta kanalı olduğunda kliniklerin genelde ihtiyaç duyduğu operasyonel avantajlar var.",
    trustCard1Title: "Çok dilli hazır",
    trustCard1Text:
      "Arapça, İngilizce ve Türkçe konuşmaları tek akış içinde destekler.",
    trustCard2Title: "Mesai dışında da çalışır",
    trustCard2Text:
      "Resepsiyon meşgulken veya çevrimdışı olduğunda bile hasta talebini yakalar.",
    trustCard3Title: "WhatsApp-first klinikler için üretildi",
    trustCard3Text:
      "Deneyim doğal kalır çünkü hasta zaten kullandığı kanalda kalır.",
    trustCard4Title: "Kolay uyarlanır",
    trustCard4Text:
      "Konuşma mantığı hizmetlerinize, iş akışınıza ve rezervasyon sürecinize göre şekillendirilebilir.",

    problemKicker: "Neden önemli",
    problemTitle:
      "Hasta ilgisi hızlı hareket eder. Yanıtlarınızın arkasında bir sistem olmalı.",
    problemSub:
      "WhatsApp ilk temas noktası olduğunda hız ve yapı, hizmet kadar önemli hale gelir.",
    problemCard1Title: "Gecikme ivmeyi bozar",
    problemCard1Text:
      "Yavaş bir yanıt, konuşma daha tam başlamadan hasta niyetini zayıflatabilir.",
    problemCard2Title: "Manuel yanıtlar kolay ölçeklenmez",
    problemCard2Text:
      "Resepsiyon ekibi gününü aynı sorulara aynı cevapları vererek geçirmemeli.",
    problemCard3Title: "Dağınık sohbetler dağınık takip yaratır",
    problemCard3Text:
      "Net bir akış olmadığında rezervasyon detayları kullanılabilir talep yerine sohbet içinde kaybolur.",

    solutionKicker: "Nasıl çalışır",
    solutionTitle:
      "Net yanıt veren, niyeti anlayan ve ekibinizin ihtiyaç duyduğu detayları toplayan bir WhatsApp asistanı.",
    flow1: "Merhaba, bu hafta diş beyazlatma için randevunuz var mı?",
    flow2: "Evet — yardımcı olabiliriz. Salı mı Perşembe mi sizin için daha uygun?",
    flow3: "Perşembe 17:00’den sonra.",
    flow4:
      "Harika. 17:30 için bir talep hazırlayabilirim. Lütfen ad soyad ve telefon numaranızı gönderin.",
    flowStatus: "Rezervasyon talebi otomatik hazırlandı",
    solutionPoint1Title: "Anında yanıt verir",
    solutionPoint1Text:
      "Hastalar manuel takip beklemek yerine hemen yanıt alır.",
    solutionPoint2Title: "Niyeti belirler",
    solutionPoint2Text:
      "Akış, hizmet ilgisini, uygun zamanı ve iletişim bilgisini tek yerde toplar.",
    solutionPoint3Title: "Resepsiyonu destekler",
    solutionPoint3Text:
      "Ekibiniz tekrarlayan sorulara daha az zaman ayırır, gerçek hasta koordinasyonuna daha çok odaklanır.",
    solutionPoint4Title: "Çok dilli kliniklere uygundur",
    solutionPoint4Text:
      "Düzenli olarak farklı dillerde hasta talebi alan klinikler için faydalıdır.",

    featuresKicker: "Temel özellikler",
    featuresTitle:
      "Kliniklerin WhatsApp’ı düzenli ve dönüşüm odaklı tutmak için genelde ihtiyaç duyduğu temel yapı.",
    feature1Title: "Akıllı yanıt yönetimi",
    feature1Text:
      "Tekrarlayan soruları, hizmet taleplerini ve yaygın hasta niyetlerini net yanıtlarla karşılar.",
    feature2Title: "Rezervasyon talep akışı",
    feature2Text:
      "Ekibi her seferinde sıfırdan başlatmadan sorudan talep edilen zaman dilimine geçer.",
    feature3Title: "Doğal WhatsApp deneyimi",
    feature3Text:
      "Hasta ayrı bir sisteme itilmeden tanıdık sohbet yapısında kalır.",
    feature4Title: "Dil desteği",
    feature4Text:
      "Arapça, İngilizce ve Türkçe iletişim akışlarını desteklemek için tasarlandı.",
    feature5Title: "Mesai sonrası talep yakalama",
    feature5Text:
      "Ekip meşgulken, çevrimdışıyken veya mesai dışındayken yeni talepleri toplar.",
    feature6Title: "Operasyonel netlik",
    feature6Text:
      "Daha tutarlı bir ilk karşılama süreci kurar, böylece konuşmaları gözden geçirmek ve takip etmek kolaylaşır.",

    testimonialsKicker: "Kullanım senaryoları",
    testimonialsTitle:
      "WhatsApp üzerinde daha temiz bir hasta iletişim akışı isteyen klinikler için tasarlandı.",
    summary1Value: "Daha hızlı yanıtlar",
    summary1: "Yanıt hızının hasta ilgisini etkilediği durumlarda faydalı",
    summary2Value: "Daha az tekrar",
    summary2: "Her gün aynı soruları yanıtlayan ekipler için yararlı",
    summary3Value: "Daha net ilk karşılama",
    summary3: "Rezervasyon detayları daha yapılandırılmış olmalıysa daha iyi",
    testimonial1:
      "Sık WhatsApp talebi alan ve ilk yanıtta daha fazla tutarlılık isteyen klinikler için iyi bir uyum sağlar.",
    testimonial1Author: "En uygun — hasta karşılama optimizasyonu",
    testimonial2:
      "Resepsiyonun hizmet ilgisi, zamanlama ve iletişim detaylarını daha net toplaması gerektiğinde faydalıdır.",
    testimonial2Author: "En uygun — yapılandırılmış rezervasyon talepleri",
    testimonial3:
      "Arapça, İngilizce ve Türkçe hasta iletişimi olan klinikler için özellikle uygundur.",
    testimonial3Author: "En uygun — çok dilli klinikler",

    demoKicker: "Etkileşimli demo",
    demoTitle: "Demoyu deneyin ve rezervasyon akışını görün.",
    demoSub:
      "Bu, asistanın nasıl yanıt verdiğini, konuşmayı yönlendirdiğini ve rezervasyon detaylarını topladığını gösteren basit bir demodur.",
    demoNote:
      "Canlı sürüm doğrudan kliniğinizin iş akışına bağlanır ve hizmetlerinize, dillere ve rezervasyon sürecinize göre uyarlanabilir.",
    demoBtn: "Demoyu Dene",
    demoBtnSecondary: "Kurulum Seçeneklerini Gör",

    pricingKicker: "Kurulum seçenekleri",
    pricingTitle:
      "Benimseme seviyesine göre farklı kliniklere uygun esnek paketler.",
    pricingSub:
      "Daha hafif bir kurulumla başlayın, aylık iş akışına geçin veya daha özelleştirilmiş bir sahiplik modeli isteyin.",
    pricing1Title: "Starter",
    pricing1Price: "$149’dan başlar",
    pricing1Fit: "Yapılandırılmış bir WhatsApp karşılama akışını test eden klinikler için.",
    pricing1Text:
      "Daha dar otomasyon kapsamı ve daha basit lansman yolu isteyen klinikler için giriş kurulumu.",
    pricingBadge: "En esnek",
    pricing2Title: "Growth",
    pricing2Price: "Aylık planlar mevcut",
    pricing2Fit:
      "Sürekli destek, güncelleme ve iş akışı iyileştirmesi isteyen klinikler için.",
    pricing2Text:
      "WhatsApp zaten aktif bir kanal olduğunda ve sistemin operasyonla uyumlu kalması gerektiğinde en uygunudur.",
    pricing3Title: "Custom Ownership",
    pricing3Price: "Özel kurulum mevcut",
    pricing3Fit:
      "Daha fazla özelleştirme ve daha derin uyarlama gereken klinikler için.",
    pricing3Text:
      "Daha özel iş akışları، hizmet mantığı veya uzun vadeli kullanım gereksinimleri olan klinikler için uygundur.",
    pricingNote: "Son fiyat klinik büyüklüğüne ve iş akışı gereksinimlerine göre değişir.",
    pricingCta: "Ücretsiz Kurulum Görüşmesi Ayarla",

    finalKicker: "Sonraki adım",
    finalTitle:
      "Önce akışı görün. Sonra kliniğinize nasıl uyarlanacağına karar verin.",
    finalSub:
      "Demo konsepti gösterir. Canlı sürüm ise hizmetlerinize, yanıt tarzınıza, dillere ve rezervasyon iş akışınıza göre şekillenir.",
    finalBtn: "Kendi Numaranızda Başlatın",
    finalSecondaryBtn: "Demoyu Yeniden Aç",

    waFinal:
      "Merhaba, kliniğim için WhatsApp yapay zeka asistanı kurulumu hakkında konuşmak ve sonraki adımları öğrenmek istiyorum.",
    waFloat:
      "Merhaba, kliniğim için WhatsApp yapay zeka asistanı hakkında daha fazla bilgi almak istiyorum.",
    waSetup:
      "Merhaba, kliniğime en uygun seçeneği öğrenmek için ücretsiz bir kurulum görüşmesi ayarlamak istiyorum."
  }
};

/* ======================
LANGUAGE / I18N
====================== */

const langButtons = document.querySelectorAll(".lang-btn");
const i18nElements = document.querySelectorAll("[data-i18n]");

function setLanguage(lang) {
  const selected = translations[lang] || translations.en;

  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  document.body.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");

  document.title = selected.pageTitle;

  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute("content", selected.pageDescription);
  }

  i18nElements.forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (selected[key]) {
      el.textContent = selected[key];
    }
  });

  langButtons.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  localStorage.setItem("siteLang", lang);
  updateWhatsAppLinks(lang);
  updateDemoLinks(lang);
}

langButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    setLanguage(btn.dataset.lang);
  });
});

/* ======================
WHATSAPP READY MESSAGES
====================== */

function getWhatsAppMessageKey(type) {
  switch (type) {
    case "final":
      return "waFinal";
    case "setup":
      return "waSetup";
    case "float":
      return "waFloat";
    default:
      return "waFloat";
  }
}

function updateWhatsAppLinks(lang) {
  const selected = translations[lang] || translations.en;
  const waLinks = document.querySelectorAll(".wa-link");

  waLinks.forEach((link) => {
    const type = link.getAttribute("data-wa-message");
    const messageKey = getWhatsAppMessageKey(type);
    const message = selected[messageKey] || selected.waFloat || "";
    const encodedMessage = encodeURIComponent(message);

    link.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
  });
}

/* ======================
DEMO LINKS
====================== */

function updateDemoLinks(lang) {
  const demoLinks = document.querySelectorAll(".demo-link");
  demoLinks.forEach((link) => {
    link.href = `demo/index.html?lang=${lang}`;
  });
}

/* ======================
LOAD SAVED LANGUAGE
====================== */

const savedLang = localStorage.getItem("siteLang") || "en";
setLanguage(savedLang);

/* ======================
CURSOR EFFECT
====================== */

const cursor = document.querySelector(".cursor");
const blur = document.querySelector(".cursor-blur");

document.addEventListener("mousemove", (e) => {
  if (cursor && blur && window.innerWidth > 760) {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

    blur.style.left = e.clientX + "px";
    blur.style.top = e.clientY + "px";
  }
});

/* ======================
CARD TILT
====================== */

const cards = document.querySelectorAll(
  ".feature-card, .problem-card, .testimonial-card, .pricing-card, .trust-card, .stat-card"
);

cards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    if (window.innerWidth <= 900) return;

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 28;
    const rotateY = (centerX - x) / 28;

    card.style.transform =
      `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform =
      "perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0px)";
  });
});

/* ======================
SCROLL REVEAL
====================== */

const reveal = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  {
    threshold: 0.14
  }
);

reveal.forEach((el) => observer.observe(el));

/* ======================
BUTTON MAGNET EFFECT
====================== */

const buttons = document.querySelectorAll(".cta-primary");

buttons.forEach((btn) => {
  btn.addEventListener("mousemove", (e) => {
    if (window.innerWidth <= 900) return;

    const rect = btn.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    btn.style.transform = `translate(${x * 0.10}px, ${y * 0.10}px)`;
  });

  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "translate(0px,0px)";
  });
});

/* ======================
CARD LIGHT FOLLOW
====================== */

const glowCards = document.querySelectorAll(
  ".feature-card, .problem-card, .testimonial-card, .pricing-card, .trust-card"
);

glowCards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty("--x", x + "px");
    card.style.setProperty("--y", y + "px");
  });
});