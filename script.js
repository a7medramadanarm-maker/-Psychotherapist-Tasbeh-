/* =========================================================
   TASBEEH MOHAMED
   Psychological Therapy & Mental Health

   Prepared By: Eng Ahmad Ramadan
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    "use strict";


    /* =====================================================
       SETTINGS
    ===================================================== */

    const WHATSAPP_NUMBER = "201003089153";
    const LANGUAGE_KEY = "tasbeehLanguage";


    /* =====================================================
       ELEMENTS
    ===================================================== */

    const html = document.documentElement;
    const body = document.body;

    const siteHeader = document.getElementById("siteHeader");

    const languageSwitch =
        document.getElementById("languageSwitch");

    const menuToggle =
        document.getElementById("menuToggle");

    const navbar =
        document.getElementById("navbar");

    const assessmentModal =
        document.getElementById("assessmentModal");

    const modalOverlay =
        document.getElementById("modalOverlay");

    const modalClose =
        document.getElementById("modalClose");

    const openAssessment =
        document.getElementById("openAssessment");

    const modalWhatsApp =
        document.getElementById("modalWhatsApp");

    const currentYear =
        document.getElementById("currentYear");


    /* =====================================================
       TRANSLATIONS
    ===================================================== */

    const translations = {

        ar: {

            brandSubtitle:
                "العلاج النفسي والصحة النفسية",

            navHome:
                "الرئيسية",

            navHow:
                "كيف نعمل",

            navServices:
                "الخدمات",

            navJourney:
                "رحلتك",

            navAbout:
                "من نحن",

            navFaq:
                "الأسئلة",

            startNow:
                "ابدأ الآن",

            discoverHow:
                "اكتشف كيف نعمل",

            heroKicker:
                "مساحة للرعاية والصحة النفسية",

            heroTitle:
                "مساحة آمنة للعلاج النفسي والراحة النفسية",

            heroDescription:
                "ابدأ رحلة أكثر وعيًا بنفسك من خلال مساحة داعمة تساعدك على فهم مشاعرك والتعامل مع التحديات النفسية بطريقة منظمة وهادئة.",

            heroNote:
                "الخصوصية والاحترام جزء أساسي من التجربة.",

            privacy:
                "خصوصية",

            privacyText:
                "مساحة تحترم خصوصيتك",

            professionalCare:
                "رعاية متخصصة",

            professionalCareText:
                "تجربة منظمة وهادئة",

            flexible:
                "مرونة",

            flexibleText:
                "خطوات تناسب احتياجاتك",

            humanCare:
                "اهتمام إنساني",

            humanCareText:
                "استماع واحترام بدون أحكام",

            howEyebrow:
                "كيف نعمل",

            howTitle:
                "خطوات بسيطة لبداية واضحة",

            howDescription:
                "تبدأ الرحلة بفهم احتياجاتك ثم الانتقال تدريجيًا إلى الخطوات المناسبة لك.",

            step1Title:
                "التعرف على احتياجك",

            step1Text:
                "نبدأ بفهم ما تمر به وما الذي تبحث عن المساعدة فيه.",

            step2Title:
                "اختيار المسار المناسب",

            step2Text:
                "يتم توجيهك إلى الخدمة أو المسار الأكثر ارتباطًا باحتياجك.",

            step3Title:
                "حجز الموعد",

            step3Text:
                "اختر الموعد المناسب وابدأ خطواتك بشكل منظم.",

            step4Title:
                "بدء الرحلة",

            step4Text:
                "تبدأ جلساتك وخطتك بناءً على احتياجاتك وأهدافك العلاجية.",

            servicesEyebrow:
                "الخدمات",

            servicesTitle:
                "دعم نفسي متخصص لمجالات مختلفة",

            servicesDescription:
                "تعرف على المسارات المتاحة واختر المجال الأقرب إلى احتياجك.",

            service1Title:
                "القلق والتوتر",

            service1Short:
                "التعامل مع القلق والضغط النفسي والمشاعر المتكررة.",

            service1Point1:
                "فهم مصادر القلق",

            service1Point2:
                "التعامل مع الضغط النفسي",

            service1Point3:
                "تطوير أساليب أكثر توازنًا",

            service2Title:
                "العلاقات",

            service2Short:
                "فهم الأنماط العاطفية والتعامل مع تحديات العلاقات.",

            service2Point1:
                "فهم أنماط العلاقات",

            service2Point2:
                "التواصل ووضع الحدود",

            service2Point3:
                "التعامل مع الخلافات",

            service3Title:
                "تقدير الذات",

            service3Short:
                "العمل على الصورة الذاتية والثقة بالنفس بطريقة صحية.",

            service3Point1:
                "فهم الأفكار السلبية عن الذات",

            service3Point2:
                "بناء نظرة أكثر توازنًا",

            service3Point3:
                "تطوير الثقة بالنفس",

            service4Title:
                "الصحة النفسية",

            service4Short:
                "مساحة لفهم المشاعر والتحديات النفسية بشكل أعمق.",

            service4Point1:
                "فهم الحالة النفسية",

            service4Point2:
                "متابعة التغيرات والمشاعر",

            service4Point3:
                "بناء خطة مناسبة",

            service5Title:
                "الدعم الأسري",

            service5Short:
                "التعامل مع التحديات الأسرية وتحسين التواصل.",

            service5Point1:
                "فهم المشكلات الأسرية",

            service5Point2:
                "تحسين التواصل",

            service5Point3:
                "التعامل مع الخلافات",

            service6Title:
                "رحلة التعافي والتغيير",

            service6Short:
                "العمل على أنماط التفكير والسلوك التي تحتاج إلى تغيير.",

            service6Point1:
                "تحديد الأنماط التي تحتاج إلى تغيير",

            service6Point2:
                "وضع أهداف واقعية",

            service6Point3:
                "متابعة التقدم تدريجيًا",

            showDetails:
                "التفاصيل",

            hideDetails:
                "إخفاء التفاصيل",

            startService:
                "ابدأ هذا المسار",

            journeyEyebrow:
                "رحلتك",

            journeyTitle:
                "لا تحتاج إلى معرفة كل الإجابات من البداية",

            journeyDescription:
                "المهم أن تبدأ بخطوة واضحة، ثم نتحرك تدريجيًا.",

            journey1Status:
                "البداية",

            journey1Title:
                "ما الذي يحدث الآن؟",

            journey1Text:
                "نفهم التحدي الأساسي والمشاعر المرتبطة به.",

            journey2Status:
                "الفهم",

            journey2Title:
                "فهم الأنماط",

            journey2Text:
                "نتعرف على الأفكار والمشاعر والسلوكيات المتكررة.",

            journey3Status:
                "العمل",

            journey3Title:
                "خطوات عملية",

            journey3Text:
                "نعمل على مهارات واستراتيجيات مناسبة للاحتياج.",

            journey4Status:
                "المتابعة",

            journey4Title:
                "تقييم التقدم",

            journey4Text:
                "نراجع التقدم ونحدد الخطوات التالية.",

            experienceEyebrow:
                "التجربة",

            experienceTitle:
                "تجربة هادئة ومنظمة من أول خطوة",

            experienceDescription:
                "الهدف هو جعل الوصول إلى الدعم النفسي أكثر وضوحًا وبساطة.",

            experience1Title:
                "استماع بدون أحكام",

            experience1Text:
                "مساحة للتعبير عن أفكارك ومشاعرك باحترام.",

            experience2Title:
                "وضوح في الخطوات",

            experience2Text:
                "تعرف ما هي الخطوة التالية بدلًا من الشعور بالتشتت.",

            experience3Title:
                "احترام الخصوصية",

            experience3Text:
                "التعامل مع المعلومات الشخصية والنفسية باحترام.",

            experience4Title:
                "تقدم تدريجي",

            experience4Text:
                "التغيير النفسي رحلة تحتاج إلى وقت واستمرارية.",

            aboutEyebrow:
                "من نحن",

            aboutTitle:
                "مساحة تهتم بالإنسان قبل كل شيء",

            aboutText1:
                "Tasbeeh Mohamed هي مساحة مخصصة للعلاج النفسي والصحة النفسية، تهدف إلى جعل الوصول إلى الدعم النفسي أكثر وضوحًا وتنظيمًا.",

            aboutText2:
                "نؤمن أن طلب المساعدة خطوة طبيعية عندما يواجه الإنسان تحديات تؤثر على حياته ومشاعره وعلاقاته.",

            learnMore:
                "ابدأ من هنا",

            aboutCardText:
                "البداية لا تحتاج إلى أن تكون مثالية، يكفي أن تكون خطوة إلى الأمام.",

            ctaEyebrow:
                "ابدأ رحلتك",

            ctaTitle:
                "مستعد تأخذ أول خطوة؟",

            ctaText:
                "أخبرنا بالمجال الأقرب لما تحتاجه وسنبدأ من هناك.",

            ctaNote:
                "هذا التقييم الأولي لا يُعد تشخيصًا طبيًا.",

            faqEyebrow:
                "الأسئلة الشائعة",

            faqTitle:
                "أسئلة قد تساعدك قبل البداية",

            faqDescription:
                "بعض الإجابات الأساسية قبل اختيار الخطوة التالية.",

            faq1Question:
                "هل أحتاج إلى معرفة مشكلتي بالتحديد؟",

            faq1Answer:
                "لا. يمكنك البدء بوصف ما تشعر به أو ما يسبب لك صعوبة، ثم يتم تحديد الخطوة المناسبة.",

            faq2Question:
                "هل التقييم الأولي يعتبر تشخيصًا؟",

            faq2Answer:
                "لا. التقييم الموجود على الموقع خطوة أولية لفهم احتياجك وليس بديلًا عن التقييم السريري.",

            faq3Question:
                "هل يمكنني اختيار نوع الخدمة؟",

            faq3Answer:
                "نعم، يمكنك اختيار المجال الأقرب لما تبحث عنه ثم الانتقال إلى الخطوة التالية.",

            faq4Question:
                "هل الجلسات متاحة أونلاين؟",

            faq4Answer:
                "تعتمد طريقة الجلسة على النظام والخدمات المتاحة وسيتم توضيح التفاصيل عند الحجز.",

            faq5Question:
                "ماذا لو كنت في حالة طارئة؟",

            faq5Answer:
                "في حالات الطوارئ النفسية أو وجود خطر مباشر على نفسك أو الآخرين، يجب طلب المساعدة الطارئة المحلية فورًا بدلًا من الاعتماد على الموقع.",

            faqCtaTitle:
                "لديك سؤال آخر؟",

            faqCtaText:
                "يمكنك البدء من خلال التواصل معنا.",

            contactUs:
                "تواصل معنا",

            assessmentEyebrow:
                "البداية",

            assessmentTitle:
                "ما المجال الأقرب لاحتياجك؟",

            assessmentDescription:
                "اختر الخيار الأقرب لما تمر به حاليًا.",

            assessmentQuestion:
                "ما الذي ترغب في الحصول على دعم بشأنه؟",

            assessmentHint:
                "يمكنك اختيار خيار واحد.",

            assessmentAnxiety:
                "القلق والتوتر",

            assessmentRelationships:
                "العلاقات",

            assessmentSelf:
                "تقدير الذات",

            assessmentGrowth:
                "الصحة النفسية والتغيير",

            continueWhatsApp:
                "متابعة عبر WhatsApp",

            footerDescription:
                "مساحة رقمية للعلاج النفسي والصحة النفسية مبنية على الخصوصية والاحترام والوضوح.",

            footerExplore:
                "استكشف",

            footerStart:
                "ابدأ",

            preparedBy:
                "Prepared By: Eng Ahmad Ramadan"
        },


        en: {

            brandSubtitle:
                "Psychological Therapy & Mental Health",

            navHome:
                "Home",

            navHow:
                "How It Works",

            navServices:
                "Services",

            navJourney:
                "Your Journey",

            navAbout:
                "About",

            navFaq:
                "FAQ",

            startNow:
                "Get Started",

            discoverHow:
                "Discover How It Works",

            heroKicker:
                "A Space for Mental Health",

            heroTitle:
                "A Safe Space for Psychological Therapy & Mental Wellbeing",

            heroDescription:
                "Begin a more conscious journey with a supportive space designed to help you understand your emotions and navigate psychological challenges with clarity and care.",

            heroNote:
                "Privacy and respect are at the heart of the experience.",

            privacy:
                "Privacy",

            privacyText:
                "A space that respects your privacy",

            professionalCare:
                "Specialized Care",

            professionalCareText:
                "A structured and calm experience",

            flexible:
                "Flexibility",

            flexibleText:
                "Steps adapted to your needs",

            humanCare:
                "Human Care",

            humanCareText:
                "Listening with respect, without judgment",

            howEyebrow:
                "How It Works",

            howTitle:
                "Simple Steps Toward a Clear Beginning",

            howDescription:
                "The journey begins by understanding your needs and then moving gradually toward the right next steps.",

            step1Title:
                "Understand Your Needs",

            step1Text:
                "We begin by understanding what you are experiencing and what you need support with.",

            step2Title:
                "Choose the Right Path",

            step2Text:
                "You are guided toward the service or path that is most relevant to your needs.",

            step3Title:
                "Book Your Session",

            step3Text:
                "Choose a suitable appointment and begin your next steps in an organized way.",

            step4Title:
                "Begin Your Journey",

            step4Text:
                "Your sessions and plan begin according to your needs and therapeutic goals.",

            servicesEyebrow:
                "Services",

            servicesTitle:
                "Psychological Support Across Different Areas",

            servicesDescription:
                "Explore the available paths and choose the area closest to what you need.",

            service1Title:
                "Anxiety & Stress",

            service1Short:
                "Support for anxiety, psychological pressure, and recurring emotional distress.",

            service1Point1:
                "Understanding sources of anxiety",

            service1Point2:
                "Managing psychological stress",

            service1Point3:
                "Developing healthier coping approaches",

            service2Title:
                "Relationships",

            service2Short:
                "Understanding emotional patterns and navigating relationship challenges.",

            service2Point1:
                "Understanding relationship patterns",

            service2Point2:
                "Communication and boundaries",

            service2Point3:
                "Managing conflict",

            service3Title:
                "Self-Esteem",

            service3Short:
                "Working on self-image and confidence in a healthy way.",

            service3Point1:
                "Understanding negative self-beliefs",

            service3Point2:
                "Building a balanced self-view",

            service3Point3:
                "Developing self-confidence",

            service4Title:
                "Mental Health",

            service4Short:
                "A space to understand emotions and psychological challenges more deeply.",

            service4Point1:
                "Understanding your psychological state",

            service4Point2:
                "Tracking emotional changes",

            service4Point3:
                "Building an appropriate plan",

            service5Title:
                "Family Support",

            service5Short:
                "Working through family challenges and improving communication.",

            service5Point1:
                "Understanding family challenges",

            service5Point2:
                "Improving communication",

            service5Point3:
                "Managing conflict",

            service6Title:
                "Recovery & Change",

            service6Short:
                "Working on thought and behavior patterns that need change.",

            service6Point1:
                "Identifying patterns that need change",

            service6Point2:
                "Setting realistic goals",

            service6Point3:
                "Tracking progress gradually",

            showDetails:
                "Details",

            hideDetails:
                "Hide Details",

            startService:
                "Start This Path",

            journeyEyebrow:
                "Your Journey",

            journeyTitle:
                "You Do Not Need All the Answers From the Beginning",

            journeyDescription:
                "What matters is taking a clear first step and moving forward gradually.",

            journey1Status:
                "Beginning",

            journey1Title:
                "What Is Happening Now?",

            journey1Text:
                "We understand the main challenge and the emotions connected to it.",

            journey2Status:
                "Understanding",

            journey2Title:
                "Understanding Patterns",

            journey2Text:
                "We identify recurring thoughts, emotions, and behaviors.",

            journey3Status:
                "Working",

            journey3Title:
                "Practical Steps",

            journey3Text:
                "We work on skills and strategies that fit your needs.",

            journey4Status:
                "Follow-up",

            journey4Title:
                "Reviewing Progress",

            journey4Text:
                "We review progress and identify the next steps.",

            experienceEyebrow:
                "The Experience",

            experienceTitle:
                "A Calm and Structured Experience From the First Step",

            experienceDescription:
                "The goal is to make access to psychological support clearer and simpler.",

            experience1Title:
                "Listening Without Judgment",

            experience1Text:
                "A space to express your thoughts and emotions with respect.",

            experience2Title:
                "Clear Steps",

            experience2Text:
                "Know what comes next instead of feeling lost or overwhelmed.",

            experience3Title:
                "Respect for Privacy",

            experience3Text:
                "Personal and psychological information is handled with respect.",

            experience4Title:
                "Gradual Progress",

            experience4Text:
                "Psychological change is a journey that requires time and consistency.",

            aboutEyebrow:
                "About",

            aboutTitle:
                "A Space That Puts the Person First",

            aboutText1:
                "Tasbeeh Mohamed is a space dedicated to psychological therapy and mental health, designed to make access to psychological support clearer and more organized.",

            aboutText2:
                "We believe that asking for help is a natural step when challenges affect your life, emotions, or relationships.",

            learnMore:
                "Start Here",

            aboutCardText:
                "The beginning does not have to be perfect. It only needs to be a step forward.",

            ctaEyebrow:
                "Start Your Journey",

            ctaTitle:
                "Ready to Take the First Step?",

            ctaText:
                "Tell us which area is closest to what you need, and we will start from there.",

            ctaNote:
                "This initial assessment is not a medical diagnosis.",

            faqEyebrow:
                "Frequently Asked Questions",

            faqTitle:
                "Questions You May Have Before Starting",

            faqDescription:
                "A few basic answers before choosing your next step.",

            faq1Question:
                "Do I need to know exactly what my problem is?",

            faq1Answer:
                "No. You can begin by describing what you are feeling or what is difficult for you, and the appropriate next step can then be identified.",

            faq2Question:
                "Is the initial assessment a diagnosis?",

            faq2Answer:
                "No. The assessment on the website is an initial step to understand your needs and is not a replacement for a clinical assessment.",

            faq3Question:
                "Can I choose the type of service?",

            faq3Answer:
                "Yes. You can choose the area closest to what you are looking for and then continue to the next step.",

            faq4Question:
                "Are sessions available online?",

            faq4Answer:
                "Session format depends on the available system and services. Details will be clarified during booking.",

            faq5Question:
                "What if I am experiencing an emergency?",

            faq5Answer:
                "If you are experiencing a mental health emergency or there is an immediate risk to yourself or others, contact your local emergency services immediately rather than relying on the website.",

            faqCtaTitle:
                "Have Another Question?",

            faqCtaText:
                "You can start by contacting us.",

            contactUs:
                "Contact Us",

            assessmentEyebrow:
                "Get Started",

            assessmentTitle:
                "Which Area Is Closest to Your Needs?",

            assessmentDescription:
                "Choose the option that best matches what you are experiencing.",

            assessmentQuestion:
                "What would you like support with?",

            assessmentHint:
                "You can choose one option.",

            assessmentAnxiety:
                "Anxiety & Stress",

            assessmentRelationships:
                "Relationships",

            assessmentSelf:
                "Self-Esteem",

            assessmentGrowth:
                "Mental Health & Change",

            continueWhatsApp:
                "Continue via WhatsApp",

            footerDescription:
                "A digital space for psychological therapy and mental health built around privacy, respect, and clarity.",

            footerExplore:
                "Explore",

            footerStart:
                "Get Started",

            preparedBy:
                "Prepared By: Eng Ahmad Ramadan"
        }
    };


    /* =====================================================
       LANGUAGE
    ===================================================== */

    function applyTranslations(language) {

        const dictionary =
            translations[language] || translations.ar;

        document
            .querySelectorAll("[data-i18n]")
            .forEach((element) => {

                const key =
                    element.getAttribute("data-i18n");

                if (
                    dictionary[key] !== undefined
                ) {
                    element.textContent =
                        dictionary[key];
                }

            });


        html.lang = language;

        html.dir =
            language === "ar"
                ? "rtl"
                : "ltr";


        document.title =
            language === "ar"
                ? "Tasbeeh Mohamed | العلاج النفسي والصحة النفسية"
                : "Tasbeeh Mohamed | Psychological Therapy & Mental Health";


        if (languageSwitch) {

            languageSwitch.textContent =
                language === "ar"
                    ? "English"
                    : "العربية";

        }


        localStorage.setItem(
            LANGUAGE_KEY,
            language
        );


        updateWhatsAppLink();
    }


    function getCurrentLanguage() {

        return (
            localStorage.getItem(LANGUAGE_KEY) ||
            "ar"
        );

    }


    /* =====================================================
       LANGUAGE BUTTON
    ===================================================== */

    if (languageSwitch) {

        languageSwitch.addEventListener(
            "click",
            (event) => {

                event.preventDefault();

                const current =
                    getCurrentLanguage();

                const next =
                    current === "ar"
                        ? "en"
                        : "ar";

                applyTranslations(next);

            }
        );

    }


    /* =====================================================
       MOBILE MENU
    ===================================================== */

    function closeMenu() {

        if (!navbar || !menuToggle) {
            return;
        }

        navbar.classList.remove("active");

        menuToggle.classList.remove("active");

        body.classList.remove("menu-open");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

    }


    function openMenu() {

        if (!navbar || !menuToggle) {
            return;
        }

        navbar.classList.add("active");

        menuToggle.classList.add("active");

        body.classList.add("menu-open");

        menuToggle.setAttribute(
            "aria-expanded",
            "true"
        );

    }


    /* IMPORTANT:
       ALWAYS CLOSED WHEN PAGE LOADS
    */

    closeMenu();


    if (menuToggle && navbar) {

        menuToggle.addEventListener(
            "click",
            (event) => {

                event.preventDefault();

                event.stopPropagation();

                if (
                    navbar.classList.contains("active")
                ) {

                    closeMenu();

                } else {

                    openMenu();

                }

            }
        );


        navbar
            .querySelectorAll("a")
            .forEach((link) => {

                link.addEventListener(
                    "click",
                    () => {
                        closeMenu();
                    }
                );

            });


        document.addEventListener(
            "click",
            (event) => {

                if (
                    !navbar.classList.contains("active")
                ) {
                    return;
                }

                if (
                    !navbar.contains(event.target) &&
                    !menuToggle.contains(event.target)
                ) {

                    closeMenu();

                }

            }
        );


        document.addEventListener(
            "keydown",
            (event) => {

                if (event.key === "Escape") {
                    closeMenu();
                }

            }
        );


        window.addEventListener(
            "resize",
            () => {

                if (window.innerWidth > 900) {
                    closeMenu();
                }

            }
        );

    }


    /* =====================================================
       HEADER SCROLL
    ===================================================== */

    function handleHeaderScroll() {

        if (!siteHeader) {
            return;
        }

        if (window.scrollY > 20) {

            siteHeader.classList.add("scrolled");

        } else {

            siteHeader.classList.remove("scrolled");

        }

    }

    window.addEventListener(
        "scroll",
        handleHeaderScroll,
        { passive: true }
    );

    handleHeaderScroll();


    /* =====================================================
       SERVICE ACCORDION
    ===================================================== */

    document
        .querySelectorAll(".service-card")
        .forEach((card) => {

            const button =
                card.querySelector(".service-expand");

            if (!button) {
                return;
            }


            button.addEventListener(
                "click",
                () => {

                    const isExpanded =
                        card.classList.toggle(
                            "expanded"
                        );


                    const text =
                        button.querySelector("span");


                    const language =
                        getCurrentLanguage();


                    if (text) {

                        text.textContent =
                            isExpanded
                                ? translations[
                                    language
                                ].hideDetails
                                : translations[
                                    language
                                ].showDetails;

                    }

                }
            );

        });


    /* =====================================================
       FAQ
    ===================================================== */

    document
        .querySelectorAll(".faq-item")
        .forEach((item) => {

            const question =
                item.querySelector(
                    ".faq-question"
                );

            if (!question) {
                return;
            }


            question.addEventListener(
                "click",
                () => {

                    const wasActive =
                        item.classList.contains(
                            "active"
                        );


                    document
                        .querySelectorAll(
                            ".faq-item"
                        )
                        .forEach((faq) => {

                            faq.classList.remove(
                                "active"
                            );

                        });


                    if (!wasActive) {

                        item.classList.add(
                            "active"
                        );

                    }

                }
            );

        });


    /* =====================================================
       ASSESSMENT MODAL
    ===================================================== */

    function openAssessmentModal() {

        if (!assessmentModal) {
            return;
        }

        assessmentModal.classList.add(
            "active"
        );

        assessmentModal.setAttribute(
            "aria-hidden",
            "false"
        );

        body.classList.add(
            "modal-open"
        );

    }


    function closeAssessmentModal() {

        if (!assessmentModal) {
            return;
        }

        assessmentModal.classList.remove(
            "active"
        );

        assessmentModal.setAttribute(
            "aria-hidden",
            "true"
        );

        body.classList.remove(
            "modal-open"
        );

    }


    if (openAssessment) {

        openAssessment.addEventListener(
            "click",
            (event) => {

                event.preventDefault();

                openAssessmentModal();

            }
        );

    }


    document
        .querySelectorAll(
            'a[href="#assessment"]'
        )
        .forEach((link) => {

            link.addEventListener(
                "click",
                (event) => {

                    event.preventDefault();

                    closeMenu();

                    openAssessmentModal();

                }
            );

        });


    if (modalClose) {

        modalClose.addEventListener(
            "click",
            closeAssessmentModal
        );

    }


    if (modalOverlay) {

        modalOverlay.addEventListener(
            "click",
            closeAssessmentModal
        );

    }


    document.addEventListener(
        "keydown",
        (event) => {

            if (
                event.key === "Escape" &&
                assessmentModal &&
                assessmentModal.classList.contains(
                    "active"
                )
            ) {

                closeAssessmentModal();

            }

        }
    );


    /* =====================================================
       ASSESSMENT OPTIONS
    ===================================================== */

    let selectedAssessment = null;


    document
        .querySelectorAll(".assessment-option")
        .forEach((option) => {

            option.addEventListener(
                "click",
                () => {

                    document
                        .querySelectorAll(
                            ".assessment-option"
                        )
                        .forEach((item) => {

                            item.classList.remove(
                                "selected"
                            );

                            item.setAttribute(
                                "aria-pressed",
                                "false"
                            );

                        });


                    option.classList.add(
                        "selected"
                    );

                    option.setAttribute(
                        "aria-pressed",
                        "true"
                    );


                    selectedAssessment =
                        option.dataset.assessment;


                    updateWhatsAppLink();

                }
            );

        });


    /* =====================================================
       WHATSAPP
    ===================================================== */

    function updateWhatsAppLink() {

        if (!modalWhatsApp) {
            return;
        }


        const language =
            getCurrentLanguage();


        let message;


        if (language === "ar") {

            message =
                "مرحبًا Tasbeeh Mohamed، أرغب في معرفة المزيد عن خدمات العلاج النفسي.";

            if (selectedAssessment) {

                const labels = {

                    anxiety:
                        "القلق والتوتر",

                    relationships:
                        "العلاقات",

                    self:
                        "تقدير الذات",

                    growth:
                        "الصحة النفسية والتغيير"

                };

                message +=
                    ` المجال الذي أحتاج الدعم بشأنه: ${labels[selectedAssessment]}.`;

            }

        } else {

            message =
                "Hello Tasbeeh Mohamed, I would like to learn more about psychological therapy services.";

            if (selectedAssessment) {

                const labels = {

                    anxiety:
                        "Anxiety & Stress",

                    relationships:
                        "Relationships",

                    self:
                        "Self-Esteem",

                    growth:
                        "Mental Health & Change"

                };

                message +=
                    ` The area I would like support with is: ${labels[selectedAssessment]}.`;

            }

        }


        modalWhatsApp.href =
            `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    }


    /* =====================================================
       SERVICE START BUTTONS
    ===================================================== */

    document
        .querySelectorAll(".service-start")
        .forEach((button) => {

            button.addEventListener(
                "click",
                () => {

                    const service =
                        button.dataset.service || "";

                    sessionStorage.setItem(
                        "tasbeehSelectedService",
                        service
                    );

                    openAssessmentModal();

                }
            );

        });


    /* =====================================================
       SMOOTH SCROLL
    ===================================================== */

    document
        .querySelectorAll(
            'a[href^="#"]'
        )
        .forEach((link) => {

            link.addEventListener(
                "click",
                (event) => {

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
                        document.querySelector(
                            targetId
                        );


                    if (!target) {
                        return;
                    }


                    event.preventDefault();

                    closeMenu();


                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }
            );

        });


    /* =====================================================
       FOOTER YEAR
    ===================================================== */

    if (currentYear) {

        currentYear.textContent =
            new Date().getFullYear();

    }


    /* =====================================================
       INITIAL LANGUAGE
    ===================================================== */

    applyTranslations(
        getCurrentLanguage()
    );


    /* =====================================================
       INITIAL WHATSAPP
    ===================================================== */

    updateWhatsAppLink();

});
