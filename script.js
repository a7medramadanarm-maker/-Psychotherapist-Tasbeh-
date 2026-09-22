heredocument.addEventListener("DOMContentLoaded", () => {
    "use strict";

    /* =========================================================
       Tasbeeh Mohamed
       Personal Support & Growth
       Prepared By: Eng Ahmad Ramadan
    ========================================================= */

    /* =========================================================
       CONFIG
    ========================================================= */

    const WHATSAPP_NUMBER = "201003089153";
    const LANGUAGE_KEY = "tasbeehLanguage";

    let currentLanguage = localStorage.getItem(LANGUAGE_KEY) || "ar";
    let selectedAssessment = null;

    /* =========================================================
       TRANSLATIONS
    ========================================================= */

    const translations = {
        ar: {
            /* Navigation */
            navHome: "الرئيسية",
            navHow: "كيف يعمل",
            navServices: "مجالات الدعم",
            navExperience: "تجربتك",
            navAbout: "عن تسبيح",
            navFaq: "الأسئلة الشائعة",
            startNow: "ابدأ الآن",

            /* Hero */
            heroKicker: "مساحة للدعم والنمو الشخصي",
            heroTitle: "مساحة آمنة ومريحة لك",
            heroDescription:
                "رحلتك نحو الشعور بشكل أفضل تبدأ من هنا. احصل على دعم شخصي في بيئة آمنة ومريحة مصممة حول احتياجاتك وأهدافك ورحلتك الشخصية.",
            discoverHow: "اكتشف كيف يعمل الموقع",
            heroNote: "خصوصية واحترام ومساحة بدون أحكام",
            heroVisualText: "مساحتك",
            safe: "مساحة آمنة",
            safeText: "تحدث براحة وبدون أحكام",
            personalSupport: "دعم شخصي",
            personalSupportText: "تجربة تناسب احتياجاتك",
            flexible: "دعم مرن",
            flexibleText: "بما يناسب وقتك وروتينك",
            privacy: "خصوصية واحترام",
            supportSession: "دعم شخصي",

            /* How It Works */
            howEyebrow: "كيف يعمل الموقع",
            howTitle: "البداية يمكن أن تكون بسيطة.",
            howDescription:
                "خطوات بسيطة تساعدك على اتخاذ الخطوة الأولى دون الشعور بالضغط.",

            step1Title: "أخبرنا بما تحتاجه",
            step1Text:
                "شاركنا ما تمر به ونوع الدعم الذي تبحث عنه، بالقدر الذي تشعر معه بالراحة.",

            step2Title: "اختر الأسلوب المناسب",
            step2Text:
                "استكشف مجالات الدعم المختلفة واختر ما يتناسب مع أهدافك واحتياجاتك الشخصية.",

            step3Title: "ابدأ جلساتك",
            step3Text:
                "اختر الوقت المناسب لك وابدأ رحلتك بالوتيرة التي تناسب حياتك.",

            step4Title: "استمر في التطور",
            step4Text:
                "استمر في بناء عادات أفضل وفهم أعمق لنفسك وأهدافك.",

            /* Services */
            servicesEyebrow: "مجالات الدعم",
            servicesTitle: "اختر المساحة الأقرب لما تحتاجه.",
            servicesDescription:
                "كل شخص لديه تجربة مختلفة، لذلك يمكنك اختيار المجال الذي تشعر أنه الأقرب لما تمر به.",

            service1Title: "القلق والتوتر",
            service1Short:
                "افهم التوتر وتعامل مع القلق وطوّر طرقًا أكثر صحة للتعامل مع الضغوط.",
            service1Details:
                "يمكن أن تساعدك هذه المساحة على فهم مصادر الضغط والقلق لديك، والتعرف على الأفكار والمواقف التي تزيد من التوتر، والعمل على تطوير أساليب أكثر هدوءًا ووعيًا للتعامل مع المواقف اليومية.",
            service1Point1: "فهم مصادر القلق والضغط",
            service1Point2: "التعامل مع الأفكار المقلقة",
            service1Point3: "بناء طرق أكثر هدوءًا للتعامل مع الضغوط",

            service2Title: "العلاقات",
            service2Short:
                "طوّر التواصل، وضع حدودًا صحية، وابنِ علاقات أكثر توازنًا.",
            service2Details:
                "مساحة لفهم العلاقات بشكل أعمق، وتحسين التواصل، والتعرف على الاحتياجات والحدود الشخصية، والتعامل مع الخلافات بطريقة أكثر وعيًا وتوازنًا.",
            service2Point1: "تحسين التواصل",
            service2Point2: "وضع حدود صحية",
            service2Point3: "التعامل مع الخلافات بشكل أفضل",

            service3Title: "الثقة بالنفس",
            service3Short:
                "طوّر فهمك لنفسك وثقتك بها وعلاقتك بذاتك.",
            service3Details:
                "ركّز على علاقتك بنفسك، وفهم نقاط قوتك، والتعامل مع النقد الذاتي، وبناء صورة أكثر توازنًا عن ذاتك وقدراتك.",
            service3Point1: "فهم نفسك بشكل أفضل",
            service3Point2: "تقليل النقد الذاتي",
            service3Point3: "بناء ثقة أكثر توازنًا",

            service4Title: "التطور الشخصي",
            service4Short:
                "اكتسب وضوحًا، وحدد أهدافًا مهمة، وتقدم في حياتك بوعي وهدف.",
            service4Details:
                "إذا كنت تشعر أنك تريد تغيير شيء في حياتك أو تحتاج إلى وضوح أكبر، يمكن أن تساعدك هذه المساحة على ترتيب أفكارك وتحديد أهدافك والخطوات التي تريد العمل عليها.",
            service4Point1: "تحديد الأولويات",
            service4Point2: "وضع أهداف واضحة",
            service4Point3: "بناء خطوات عملية للتغيير",

            service5Title: "الدعم الأسري",
            service5Short:
                "تعامل مع المواقف والتحديات الأسرية بوعي وفهم أكبر.",
            service5Details:
                "مساحة تساعدك على التفكير في المواقف الأسرية وفهم وجهات النظر المختلفة، وتحسين أسلوب التواصل والتعامل مع التحديات اليومية.",
            service5Point1: "فهم المواقف الأسرية",
            service5Point2: "تحسين الحوار",
            service5Point3: "التعامل مع التحديات بوعي",

            service6Title: "التدريب على الحياة",
            service6Short:
                "اعمل على أهدافك الشخصية ودافعك نحو التغيير الإيجابي في حياتك.",
            service6Details:
                "يركز هذا المسار على الأهداف الشخصية، والوضوح، والدافع، وتحويل الأفكار إلى خطوات عملية يمكن دمجها في حياتك اليومية.",
            service6Point1: "تحديد أهدافك",
            service6Point2: "زيادة الوضوح والدافع",
            service6Point3: "تحويل الأهداف إلى خطوات",

            startWithThis: "ابدأ من هنا",

            /* Journey */
            journeyEyebrow: "رحلتك",
            journeyTitle: "خطوة بخطوة، وبالوتيرة التي تناسبك.",
            journeyDescription:
                "التغيير ليس سباقًا. المهم أن تبدأ بخطوة تشعر أنها مناسبة لك.",

            journey1Status: "البداية",
            journey1Title: "فهم أهدافك",
            journey1Text:
                "ابدأ بفهم ما تبحث عنه وما تريد أن تعمل عليه.",

            journey2Status: "مكتمل",
            journey2Title: "تحديد احتياجاتك",
            journey2Text:
                "اختر مجال الدعم الأقرب لما تمر به.",

            journey3Status: "قيد التقدم",
            journey3Title: "بناء عادات جديدة",
            journey3Text:
                "اعمل تدريجيًا على التغييرات التي تريدها.",

            journey4Status: "مستمر",
            journey4Title: "تجربتك",
            journey4Text:
                "استمر في فهم نفسك والتقدم بما يناسبك.",

            /* Experience */
            experienceEyebrow: "تجربتك",
            experienceTitle: "الدعم يبدأ بفهمك.",
            experienceDescription:
                "لكل شخص رحلة مختلفة، لذلك يجب أن تكون تجربتك شخصية ومريحة وتركز على ما يهمك.",
            experienceVisual: "مساحة لك",

            experience1Title: "أسلوب شخصي",
            experience1Text:
                "أهدافك وتجاربك تظل في قلب عملية الدعم.",

            experience2Title: "بيئة مريحة",
            experience2Text:
                "مساحة هادئة يمكنك فيها التحدث بحرية وصدق.",

            experience3Title: "دعم مرن",
            experience3Text:
                "كوّن روتينًا يتناسب مع حياتك وجدولك اليومي.",

            /* About */
            aboutEyebrow: "عن تسبيح",
            aboutTitle: "مساحة يمكنك أن تكون فيها على طبيعتك.",
            aboutText1:
                "تم بناء Tasbeeh Mohamed حول فكرة بسيطة: الدعم الحقيقي يبدأ عندما تشعر أن هناك من يسمعك ويفهمك.",
            aboutText2:
                "الهدف هو تقديم تجربة مريحة ومحترمة وداعمة تساعدك على فهم ما تمر به والعمل نحو التغييرات التي تريدها.",
            learnMore: "اعرف المزيد",
            aboutCardText: "الدعم يبدأ بخطوة.",

            /* CTA */
            ctaEyebrow: "الخطوة الأولى",
            ctaTitle: "اتخذ الخطوة الأولى",
            ctaText:
                "لست بحاجة إلى امتلاك جميع الإجابات من البداية. ابدأ بإخبارنا قليلًا عما تبحث عنه، وسنساعدك على فهم الخطوة التالية.",
            ctaNote: "لن يستغرق الأمر سوى بضع دقائق",

            /* FAQ */
            faqEyebrow: "الأسئلة الشائعة",
            faqTitle: "هل لديك سؤال؟",
            faqDescription:
                "إليك بعض الإجابات التي قد تساعدك قبل أن تبدأ.",

            faq1Question: "كيف تعمل العملية؟",
            faq1Answer:
                "تبدأ بخطوة بسيطة للتعرف على احتياجاتك وما تبحث عنه. بعد ذلك يمكنك استكشاف مجال الدعم المناسب لك، ثم اختيار الخطوة التالية التي تناسبك.",

            faq2Question: "هل معلوماتي خاصة؟",
            faq2Answer:
                "الخصوصية جزء أساسي من تجربة Tasbeeh Mohamed. شارك فقط المعلومات التي تشعر بالراحة تجاهها، ويتم التعامل مع ما تقدمه باحترام وحرص.",

            faq3Question: "هل يمكنني اختيار وقت مناسب؟",
            faq3Answer:
                "يمكنك اختيار الوقت الأنسب لك وفقًا للمواعيد المتاحة، بحيث تكون التجربة أكثر ملاءمة لروتينك اليومي والتزاماتك.",

            faq4Question: "هل هذا علاج نفسي أم تدريب شخصي؟",
            faq4Answer:
                "تختلف طبيعة الدعم حسب احتياجك. بعض المسارات تركز على الدعم الشخصي والنمو وتحديد الأهداف، بينما الحالات التي تتطلب تقييمًا أو علاجًا متخصصًا ينبغي التعامل معها مع مختص مؤهل ومرخّص.",

            faq5Question: "كيف أبدأ؟",
            faq5Answer:
                "اضغط على «ابدأ الآن» وأخبرنا بشكل بسيط عما تبحث عنه. لا تحتاج إلى امتلاك جميع الإجابات من البداية؛ الخطوة الأولى فقط هي أن توضح ما تحتاج إليه.",

            faqCtaTitle: "ما زال لديك سؤال؟",
            faqCtaText:
                "يمكنك التواصل معنا إذا كنت تحتاج إلى معرفة المزيد قبل أن تبدأ.",
            contactUs: "تواصل معنا",

            /* Assessment */
            assessmentEyebrow: "ابدأ من هنا",
            assessmentTitle: "ما الذي تبحث عنه الآن؟",
            assessmentDescription:
                "اختر ما يشبه احتياجك أكثر، ولا توجد إجابة صحيحة أو خاطئة.",
            assessmentQuestion: "ما المجال الأقرب لما تمر به؟",
            assessmentHint: "يمكنك تغيير اختيارك في أي وقت.",

            assessmentAnxiety: "القلق والتوتر",
            assessmentRelationships: "العلاقات",
            assessmentSelf: "الثقة بالنفس",
            assessmentGrowth: "التطور الشخصي",

            continueWhatsApp: "تواصل عبر واتساب",

            /* Footer */
            footerDescription:
                "مساحة مريحة ومحترمة للدعم الشخصي والنمو وفهم ما يهمك.",
            footerExplore: "استكشف",
            footerStart: "ابدأ رحلتك"
        },

        en: {
            /* Navigation */
            navHome: "Home",
            navHow: "How It Works",
            navServices: "Support Areas",
            navExperience: "Your Experience",
            navAbout: "About Tasbeeh",
            navFaq: "FAQ",
            startNow: "Start Now",

            /* Hero */
            heroKicker: "A Space for Support & Personal Growth",
            heroTitle: "A Safe and Comfortable Space for You",
            heroDescription:
                "Your journey toward feeling better can start here. Find personal support in a safe and comfortable environment designed around your needs, goals, and personal journey.",
            discoverHow: "See How It Works",
            heroNote: "Privacy, respect, and a judgment-free space",
            heroVisualText: "Your Space",
            safe: "Safe Space",
            safeText: "Talk comfortably and without judgment",
            personalSupport: "Personal Support",
            personalSupportText: "An experience shaped around your needs",
            flexible: "Flexible Support",
            flexibleText: "Designed around your time and routine",
            privacy: "Privacy & Respect",
            supportSession: "Personal Support",

            /* How It Works */
            howEyebrow: "How It Works",
            howTitle: "Starting can be simple.",
            howDescription:
                "Simple steps to help you take the first step without feeling pressured.",

            step1Title: "Tell Us What You Need",
            step1Text:
                "Share what you are going through and the type of support you are looking for, as much as you feel comfortable sharing.",

            step2Title: "Choose What Fits You",
            step2Text:
                "Explore the different support areas and choose what fits your goals and personal needs.",

            step3Title: "Start Your Sessions",
            step3Text:
                "Choose a suitable time and begin your journey at a pace that fits your life.",

            step4Title: "Keep Growing",
            step4Text:
                "Continue building healthier habits and a deeper understanding of yourself and your goals.",

            /* Services */
            servicesEyebrow: "Support Areas",
            servicesTitle: "Choose the space that feels closest to what you need.",
            servicesDescription:
                "Everyone has a different experience, so you can choose the area that feels most relevant to what you are going through.",

            service1Title: "Anxiety & Stress",
            service1Short:
                "Understand stress, manage anxiety, and develop healthier ways to handle pressure.",
            service1Details:
                "This space can help you understand sources of stress and anxiety, recognize thoughts and situations that increase pressure, and develop calmer and more mindful ways to handle everyday situations.",
            service1Point1: "Understand sources of anxiety and stress",
            service1Point2: "Work with anxious thoughts",
            service1Point3: "Build calmer ways to handle pressure",

            service2Title: "Relationships",
            service2Short:
                "Improve communication, build healthy boundaries, and create more balanced relationships.",
            service2Details:
                "A space to understand relationships more deeply, improve communication, recognize personal needs and boundaries, and approach disagreements with greater awareness and balance.",
            service2Point1: "Improve communication",
            service2Point2: "Build healthy boundaries",
            service2Point3: "Handle disagreements more effectively",

            service3Title: "Self-Confidence",
            service3Short:
                "Develop a better understanding of yourself, your confidence, and your relationship with yourself.",
            service3Details:
                "Focus on your relationship with yourself, understand your strengths, work with self-criticism, and build a more balanced view of yourself and your abilities.",
            service3Point1: "Understand yourself better",
            service3Point2: "Reduce self-criticism",
            service3Point3: "Build more balanced confidence",

            service4Title: "Personal Growth",
            service4Short:
                "Gain clarity, set meaningful goals, and move forward with awareness and purpose.",
            service4Details:
                "If you feel ready to change something in your life or need more clarity, this space can help you organize your thoughts, define your goals, and identify practical steps to work on.",
            service4Point1: "Set your priorities",
            service4Point2: "Create clear goals",
            service4Point3: "Build practical steps for change",

            service5Title: "Family Support",
            service5Short:
                "Approach family situations and challenges with greater awareness and understanding.",
            service5Details:
                "A space to reflect on family situations, understand different perspectives, improve communication, and deal with everyday challenges more consciously.",
            service5Point1: "Understand family situations",
            service5Point2: "Improve dialogue",
            service5Point3: "Handle challenges with awareness",

            service6Title: "Life Coaching",
            service6Short:
                "Work on personal goals, motivation, and positive change in your life.",
            service6Details:
                "This path focuses on personal goals, clarity, motivation, and turning ideas into practical steps that can become part of your everyday life.",
            service6Point1: "Define your goals",
            service6Point2: "Increase clarity and motivation",
            service6Point3: "Turn goals into practical steps",

            startWithThis: "Start Here",

            /* Journey */
            journeyEyebrow: "Your Journey",
            journeyTitle: "Step by step, at your own pace.",
            journeyDescription:
                "Change is not a race. What matters is starting with a step that feels right for you.",

            journey1Status: "Starting",
            journey1Title: "Understand Your Goals",
            journey1Text:
                "Start by understanding what you are looking for and what you want to work on.",

            journey2Status: "Complete",
            journey2Title: "Identify Your Needs",
            journey2Text:
                "Choose the support area that feels closest to what you are experiencing.",

            journey3Status: "In Progress",
            journey3Title: "Build New Habits",
            journey3Text:
                "Gradually work on the changes you want to make.",

            journey4Status: "Ongoing",
            journey4Title: "Your Experience",
            journey4Text:
                "Keep understanding yourself and moving forward in a way that fits you.",

            /* Experience */
            experienceEyebrow: "Your Experience",
            experienceTitle: "Support starts with understanding you.",
            experienceDescription:
                "Everyone has a different journey, so your experience should feel personal, comfortable, and focused on what matters to you.",
            experienceVisual: "A Space for You",

            experience1Title: "Personal Approach",
            experience1Text:
                "Your goals and experiences remain at the heart of the support process.",

            experience2Title: "Comfortable Environment",
            experience2Text:
                "A calm space where you can speak freely and honestly.",

            experience3Title: "Flexible Support",
            experience3Text:
                "Build a routine that works with your life and daily schedule.",

            /* About */
            aboutEyebrow: "About Tasbeeh",
            aboutTitle: "A space where you can be yourself.",
            aboutText1:
                "Tasbeeh Mohamed was built around a simple idea: real support begins when you feel that someone is listening to you and understanding you.",
            aboutText2:
                "The goal is to provide a comfortable, respectful, and supportive experience that helps you understand what you are going through and work toward the changes you want.",
            learnMore: "Learn More",
            aboutCardText: "Support starts with one step.",

            /* CTA */
            ctaEyebrow: "The First Step",
            ctaTitle: "Take the First Step",
            ctaText:
                "You do not need to have all the answers from the beginning. Start by telling us a little about what you are looking for, and we will help you understand the next step.",
            ctaNote: "It only takes a few minutes",

            /* FAQ */
            faqEyebrow: "Frequently Asked Questions",
            faqTitle: "Have a question?",
            faqDescription:
                "Here are some answers that may help before you get started.",

            faq1Question: "How does the process work?",
            faq1Answer:
                "It starts with a simple step to understand your needs and what you are looking for. You can then explore the right support area and choose the next step that fits you.",

            faq2Question: "Is my information private?",
            faq2Answer:
                "Privacy is an important part of the Tasbeeh Mohamed experience. Share only what you feel comfortable sharing, and the information you provide should be treated with care and respect.",

            faq3Question: "Can I choose a suitable time?",
            faq3Answer:
                "You can choose a time that works best for you based on available appointments, making the experience easier to fit into your routine and commitments.",

            faq4Question: "Is this therapy or life coaching?",
            faq4Answer:
                "The type of support depends on your needs. Some paths focus on personal support, growth, and goals, while situations requiring assessment or specialized treatment should be handled by a qualified and licensed professional.",

            faq5Question: "How do I get started?",
            faq5Answer:
                "Click “Start Now” and tell us simply what you are looking for. You do not need to have all the answers from the beginning; the first step is simply explaining what you need.",

            faqCtaTitle: "Still have a question?",
            faqCtaText:
                "You can contact us if you would like to know more before getting started.",
            contactUs: "Contact Us",

            /* Assessment */
            assessmentEyebrow: "Start Here",
            assessmentTitle: "What are you looking for right now?",
            assessmentDescription:
                "Choose the option that feels closest to what you need. There is no right or wrong answer.",
            assessmentQuestion: "Which area feels closest to what you are experiencing?",
            assessmentHint: "You can change your choice at any time.",

            assessmentAnxiety: "Anxiety & Stress",
            assessmentRelationships: "Relationships",
            assessmentSelf: "Self-Confidence",
            assessmentGrowth: "Personal Growth",

            continueWhatsApp: "Continue on WhatsApp",

            /* Footer */
            footerDescription:
                "A comfortable and respectful space for personal support, growth, and understanding what matters to you.",
            footerExplore: "Explore",
            footerStart: "Start Your Journey"
        }
    };

    /* =========================================================
       ELEMENTS
    ========================================================= */

    const html = document.documentElement;
    const body = document.body;

    const languageSwitch = document.getElementById("languageSwitch");

    const menuToggle = document.getElementById("menuToggle");
    const navbar = document.getElementById("navbar");

    const siteHeader = document.getElementById("siteHeader");

    const assessmentModal = document.getElementById("assessmentModal");
    const modalOverlay = document.getElementById("modalOverlay");
    const modalClose = document.getElementById("modalClose");
    const modalWhatsApp = document.getElementById("modalWhatsApp");

    const currentYear = document.getElementById("currentYear");

    /* =========================================================
       LANGUAGE
    ========================================================= */

    function translatePage(lang) {
        const dictionary = translations[lang];

        if (!dictionary) return;

        document.querySelectorAll("[data-i18n]").forEach((element) => {
            const key = element.getAttribute("data-i18n");

            if (dictionary[key] !== undefined) {
                element.textContent = dictionary[key];
            }
        });
    }

    function updateLanguageButton() {
        if (!languageSwitch) return;

        languageSwitch.textContent = currentLanguage === "ar" ? "EN" : "AR";

        languageSwitch.setAttribute(
            "aria-label",
            currentLanguage === "ar"
                ? "Switch to English"
                : "التبديل إلى العربية"
        );
    }

    function applyLanguage(lang) {
        currentLanguage = lang === "en" ? "en" : "ar";

        html.lang = currentLanguage;
        html.dir = currentLanguage === "ar" ? "rtl" : "ltr";

        translatePage(currentLanguage);
        updateLanguageButton();

        localStorage.setItem(LANGUAGE_KEY, currentLanguage);

        updateWhatsAppLink();
    }

    if (languageSwitch) {
        languageSwitch.addEventListener("click", () => {
            const nextLanguage =
                currentLanguage === "ar" ? "en" : "ar";

            applyLanguage(nextLanguage);
        });
    }

    /* =========================================================
       MOBILE MENU
    ========================================================= */

    function openMenu() {
        if (!menuToggle || !navbar) return;

        menuToggle.classList.add("active");
        navbar.classList.add("active");

        menuToggle.setAttribute("aria-expanded", "true");
        body.classList.add("menu-open");
    }

    function closeMenu() {
        if (!menuToggle || !navbar) return;

        menuToggle.classList.remove("active");
        navbar.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");
        body.classList.remove("menu-open");
    }

    if (menuToggle && navbar) {
        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.addEventListener("click", () => {
            const isOpen = navbar.classList.contains("active");

            if (isOpen) {
                closeMenu();
            } else {
                openMenu();
            }
        });

        navbar.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", () => {
                closeMenu();
            });
        });
    }

    /* =========================================================
       HEADER SCROLL
    ========================================================= */

    function handleHeaderScroll() {
        if (!siteHeader) return;

        if (window.scrollY > 30) {
            siteHeader.classList.add("scrolled");
        } else {
            siteHeader.classList.remove("scrolled");
        }
    }

    window.addEventListener("scroll", handleHeaderScroll, {
        passive: true
    });

    handleHeaderScroll();

    /* =========================================================
       SERVICE ACCORDION
    ========================================================= */

    const serviceCards = document.querySelectorAll(".service-card");

    serviceCards.forEach((card) => {
        const expandButton = card.querySelector(".service-expand");

        if (!expandButton) return;

        expandButton.setAttribute("aria-expanded", "false");

        expandButton.addEventListener("click", () => {
            const isExpanded = card.classList.contains("expanded");

            serviceCards.forEach((otherCard) => {
                otherCard.classList.remove("expanded");

                const otherButton =
                    otherCard.querySelector(".service-expand");

                if (otherButton) {
                    otherButton.setAttribute(
                        "aria-expanded",
                        "false"
                    );
                }
            });

            if (!isExpanded) {
                card.classList.add("expanded");
                expandButton.setAttribute("aria-expanded", "true");
            }
        });
    });

    /* =========================================================
       FAQ ACCORDION
    ========================================================= */

    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach((item) => {
        const question = item.querySelector(".faq-question");

        if (!question) return;

        question.setAttribute("aria-expanded", "false");

        question.addEventListener("click", () => {
            const isActive = item.classList.contains("active");

            faqItems.forEach((otherItem) => {
                otherItem.classList.remove("active");

                const otherQuestion =
                    otherItem.querySelector(".faq-question");

                if (otherQuestion) {
                    otherQuestion.setAttribute(
                        "aria-expanded",
                        "false"
                    );
                }
            });

            if (!isActive) {
                item.classList.add("active");
                question.setAttribute("aria-expanded", "true");
            }
        });
    });

    /* =========================================================
       ASSESSMENT MODAL
    ========================================================= */

    const assessmentButtons = document.querySelectorAll(
        "[data-assessment]"
    );

    function getAssessmentText() {
        const dictionary = translations[currentLanguage];

        const assessmentMap = {
            anxiety: dictionary.assessmentAnxiety,
            relationships: dictionary.assessmentRelationships,
            self: dictionary.assessmentSelf,
            growth: dictionary.assessmentGrowth
        };

        return (
            assessmentMap[selectedAssessment] ||
            (currentLanguage === "ar"
                ? "أحتاج إلى معرفة المجال المناسب لي"
                : "I need help choosing the right area")
        );
    }

    function buildWhatsAppMessage() {
        const selectedText = getAssessmentText();

        if (currentLanguage === "ar") {
            return (
                "مرحبًا تسبيح، أريد أن أبدأ وأحتاج إلى دعم في مجال: " +
                selectedText +
                ". أود معرفة الخطوة التالية."
            );
        }

        return (
            "Hello Tasbeeh, I would like to get started and I am looking for support with: " +
            selectedText +
            ". I would like to know the next step."
        );
    }

    function updateWhatsAppLink() {
        if (!modalWhatsApp) return;

        const message = encodeURIComponent(
            buildWhatsAppMessage()
        );

        modalWhatsApp.href =
            `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    }

    function selectAssessment(button) {
        assessmentButtons.forEach((option) => {
            option.classList.remove("selected");
            option.setAttribute("aria-pressed", "false");
        });

        button.classList.add("selected");
        button.setAttribute("aria-pressed", "true");

        selectedAssessment =
            button.getAttribute("data-assessment");

        updateWhatsAppLink();
    }

    assessmentButtons.forEach((button) => {
        button.setAttribute("aria-pressed", "false");

        button.addEventListener("click", () => {
            selectAssessment(button);
        });
    });

    function openAssessment() {
        if (!assessmentModal) return;

        assessmentModal.classList.add("active");
        assessmentModal.setAttribute("aria-hidden", "false");

        body.classList.add("modal-open");

        updateWhatsAppLink();

        setTimeout(() => {
            if (modalClose) {
                modalClose.focus();
            }
        }, 50);
    }

    function closeAssessment() {
        if (!assessmentModal) return;

        assessmentModal.classList.remove("active");
        assessmentModal.setAttribute("aria-hidden", "true");

        body.classList.remove("modal-open");
    }

    /* =========================================================
       OPEN ASSESSMENT BUTTONS
    ========================================================= */

    const assessmentTriggers = document.querySelectorAll(
        'a[href="#assessment"], button[data-open-assessment], #openAssessment'
    );

    assessmentTriggers.forEach((trigger) => {
        trigger.addEventListener("click", (event) => {
            event.preventDefault();

            closeMenu();
            openAssessment();
        });
    });

    /* =========================================================
       SERVICE START BUTTONS
    ========================================================= */

    const serviceStartButtons =
        document.querySelectorAll(".service-start");

    serviceStartButtons.forEach((button) => {
        button.addEventListener("click", (event) => {
            event.preventDefault();

            const card = button.closest(".service-card");

            if (card) {
                const assessmentType =
                    getAssessmentFromService(card);

                if (assessmentType) {
                    selectedAssessment = assessmentType;

                    assessmentButtons.forEach((option) => {
                        const isSelected =
                            option.getAttribute("data-assessment") ===
                            assessmentType;

                        option.classList.toggle(
                            "selected",
                            isSelected
                        );

                        option.setAttribute(
                            "aria-pressed",
                            isSelected ? "true" : "false"
                        );
                    });
                }
            }

            openAssessment();
        });
    });

    function getAssessmentFromService(card) {
        const titleElement =
            card.querySelector(".service-title");

        if (!titleElement) return null;

        const title =
            titleElement.textContent.trim().toLowerCase();

        if (
            title.includes("القلق") ||
            title.includes("stress") ||
            title.includes("anxiety")
        ) {
            return "anxiety";
        }

        if (
            title.includes("العلاقات") ||
            title.includes("relationship")
        ) {
            return "relationships";
        }

        if (
            title.includes("الثقة") ||
            title.includes("confidence")
        ) {
            return "self";
        }

        if (
            title.includes("التطور") ||
            title.includes("growth")
        ) {
            return "growth";
        }

        return null;
    }

    /* =========================================================
       MODAL CONTROLS
    ========================================================= */

    if (modalClose) {
        modalClose.addEventListener("click", closeAssessment);
    }

    if (modalOverlay) {
        modalOverlay.addEventListener("click", closeAssessment);
    }

    /* =========================================================
       ESCAPE KEY
    ========================================================= */

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeMenu();
            closeAssessment();
        }
    });

    /* =========================================================
       CLOSE MENU ON RESIZE
    ========================================================= */

    window.addEventListener("resize", () => {
        if (window.innerWidth > 900) {
            closeMenu();
        }
    });

    /* =========================================================
       SMOOTH SCROLL
    ========================================================= */

    document.querySelectorAll('a[href^="#"]').forEach((link) => {
        link.addEventListener("click", (event) => {
            const targetId =
                link.getAttribute("href");

            if (
                !targetId ||
                targetId === "#" ||
                targetId === "#assessment"
            ) {
                return;
            }

            const target =
                document.querySelector(targetId);

            if (!target) return;

            event.preventDefault();

            closeMenu();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    });

    /* =========================================================
       FOOTER YEAR
    ========================================================= */

    if (currentYear) {
        currentYear.textContent =
            new Date().getFullYear();
    }

    /* =========================================================
       ACCESSIBILITY
    ========================================================= */

    if (assessmentModal) {
        assessmentModal.setAttribute("aria-hidden", "true");
    }

    /* =========================================================
       INITIALIZE
    ========================================================= */

    applyLanguage(currentLanguage);

});

ده كده الـ JS الكامل ومفروض تحطه مكان "script.js" الحالي بالكامل، من غير ما تضيف JavaScript تاني داخل "index.html".

والنسخة دي متوافقة مع الـ "index.html" والـ "style.css" اللي اشتغلنا عليهم، خصوصًا فتح تفاصيل الخدمات + FAQ + تبديل اللغة + نافذة ابدأ الآن + التحويل لواتساب.
