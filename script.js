"use strict";

/* =========================================================
   TASBEEH MOHAMED
   Personal Support & Growth
   Main JavaScript
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       SETTINGS
    ====================================================== */

    const WHATSAPP_NUMBER = "201003089153";
    const LANGUAGE_KEY = "tasbeehLanguage";

    /* =====================================================
       ELEMENTS
    ====================================================== */

    const html = document.documentElement;
    const body = document.body;

    const siteHeader = document.getElementById("siteHeader");
    const languageSwitch = document.getElementById("languageSwitch");

    const navbar = document.getElementById("navbar");
    const menuToggle = document.getElementById("menuToggle");

    const assessmentButton =
        document.getElementById("assessmentButton");

    const assessmentModal =
        document.getElementById("assessmentModal");

    const modalClose =
        document.getElementById("modalClose");

    const currentYear =
        document.getElementById("currentYear");


    /* =====================================================
       TRANSLATIONS
    ====================================================== */

    const translations = {

        en: {

            /* Navigation */
            navHowItWorks: "How It Works",
            navServices: "Services",
            navAbout: "About",
            navFaq: "FAQ",
            getStarted: "Get Started",

            /* Hero */
            heroEyebrow:
                "A safe and comfortable space for you",

            heroTitle:
                "Your journey toward feeling better starts here.",

            heroDescription:
                "Get personalized support in a safe and comfortable environment designed around your needs, goals and personal journey.",

            heroButton:
                "Get Started",

            learnMore:
                "Learn How It Works",

            trustPrivate:
                "Private & Confidential",

            trustPersonalized:
                "Personalized Support",

            supportSession:
                "Support Session",

            secure:
                "Secure",

            personalized:
                "Designed For You",

            messageOne:
                "You don't have to face everything alone.",

            flexible:
                "Flexible",

            /* Trust */
            trustPointOne:
                "Personal Attention",

            trustPointTwo:
                "Comfortable Sessions",

            trustPointThree:
                "Privacy Focused",

            trustedText:
                "A space designed to help you move forward",

            /* How It Works */
            howTag:
                "How It Works",

            howTitle:
                "Starting can be simple.",

            howDescription:
                "Simple steps to help you take the first step without feeling overwhelmed.",

            stepOneTitle:
                "Tell Us What You Need",

            stepOneText:
                "Share what you are going through and what kind of support you are looking for.",

            stepTwoTitle:
                "Find Your Approach",

            stepTwoText:
                "Explore the support approach that fits your goals and personal needs.",

            stepThreeTitle:
                "Start Your Sessions",

            stepThreeText:
                "Choose a suitable time and begin your journey at your own pace.",

            stepFourTitle:
                "Keep Growing",

            stepFourText:
                "Continue building healthier habits and a deeper understanding of yourself.",

            /* Services */
            servicesTag:
                "Support That Fits You",

            servicesTitle:
                "Whatever you're going through, you don't have to face it alone.",

            servicesDescription:
                "Explore different areas of support and choose what feels closest to your needs.",

            serviceOneTitle:
                "Anxiety & Stress",

            serviceOneText:
                "Understand stress, manage anxiety and develop healthier ways to deal with pressure.",

            serviceTwoTitle:
                "Relationships",

            serviceTwoText:
                "Build better communication, healthy boundaries and balanced relationships.",

            serviceThreeTitle:
                "Self-Esteem",

            serviceThreeText:
                "Strengthen your self-understanding, confidence and relationship with yourself.",

            serviceFourTitle:
                "Personal Growth",

            serviceFourText:
                "Gain clarity, set meaningful goals and move forward with purpose.",

            serviceFiveTitle:
                "Family Support",

            serviceFiveText:
                "Approach family situations and challenges with more awareness and understanding.",

            serviceSixTitle:
                "Life Coaching",

            serviceSixText:
                "Work on personal goals, motivation and positive changes in your life.",

            explore:
                "Explore",

            /* Experience */
            yourJourney:
                "Your Journey",

            active:
                "Active",

            journeyOne:
                "Getting Started",

            journeyTwo:
                "Understanding Your Goals",

            journeyThree:
                "Building New Habits",

            completed:
                "Completed",

            inProgress:
                "In Progress",

            experienceTag:
                "Your Experience",

            experienceTitle:
                "Support starts with understanding you.",

            experienceText:
                "Everyone has a different journey, so your experience should feel personal, comfortable and focused on what matters to you.",

            featureOneTitle:
                "Personalized Approach",

            featureOneText:
                "Your goals and experiences remain at the heart of the support process.",

            featureTwoTitle:
                "Comfortable Environment",

            featureTwoText:
                "A calm space where you can speak freely and honestly.",

            featureThreeTitle:
                "Flexible Support",

            featureThreeText:
                "Build a routine that works with your life and daily schedule.",

            /* About */
            aboutTag:
                "About Tasbeeh",

            aboutTitle:
                "A space where you can be yourself.",

            aboutTextOne:
                "Tasbeeh Mohamed is built around a simple idea: meaningful support begins when you feel heard and understood.",

            aboutTextTwo:
                "The goal is to provide a comfortable, respectful and supportive experience that helps you understand what you're going through and work toward the changes you want.",

            aboutQuote:
                "You deserve a space where your story can be heard without judgment.",

            aboutButton:
                "Learn More",

            /* Start */
            startTag:
                "Take The First Step",

            startTitle:
                "You don't need to have all the answers from the beginning.",

            startText:
                "Start by telling us a little about what you're looking for, and we'll help you understand the next step.",

            startButton:
                "Get Started",

            startNote:
                "It only takes a few minutes",

            /* FAQ */
            faqTag:
                "Frequently Asked Questions",

            faqTitle:
                "Have questions? We're here to help.",

            faqText:
                "Find answers to some of the most common questions before you begin.",

            faqOneQuestion:
                "How does the process work?",

            faqOneAnswer:
                "You begin by sharing the type of support you are looking for. Then you can explore available options and choose what feels right for you.",

            faqTwoQuestion:
                "Is my information private?",

            faqTwoAnswer:
                "Your privacy matters. Personal information should be handled according to the privacy practices and policies of the service.",

            faqThreeQuestion:
                "Can I choose a convenient time?",

            faqThreeAnswer:
                "The platform can be designed to allow you to request or choose a session time that fits your schedule.",

            faqFourQuestion:
                "Is this therapy or personal coaching?",

            faqFourAnswer:
                "Available services may include mental wellbeing support, personal development and coaching depending on the services provided.",

            faqFiveQuestion:
                "How do I get started?",

            faqFiveAnswer:
                "Simply click Get Started and follow the short beginning steps.",

            /* Assessment */
            assessmentTag:
                "A Personalized Start",

            assessmentTitle:
                "Let's understand what you need.",

            assessmentText:
                "Answer a few simple questions and we'll help you identify the type of support closest to your current needs.",

            assessmentButton:
                "Start",

            assessmentLink:
                "Quick Assessment",

            modalTag:
                "Let's Begin Together",

            modalTitle:
                "What are you looking for support with?",

            modalText:
                "Choose the option that feels closest to what you're looking for right now.",

            optionAnxiety:
                "Anxiety & Stress",

            optionRelationships:
                "Relationships",

            optionSelf:
                "Self-Esteem",

            optionGrowth:
                "Personal Growth",

            /* Footer */
            footerDescription:
                "A supportive space for wellbeing, personal development and growth.",

            footerExplore:
                "Explore",

            footerSupport:
                "Support",

            footerConnect:
                "Connect",

            footerConnectText:
                "Have a question? We'd be happy to hear from you.",

            contactUs:
                "Contact Us",

            allRights:
                "All Rights Reserved.",

            privacy:
                "Privacy",

            terms:
                "Terms"
        },


        /* =================================================
           ARABIC
        ================================================== */

        ar: {

            /* Navigation */
            navHowItWorks:
                "كيف يعمل الموقع",

            navServices:
                "الخدمات",

            navAbout:
                "من نحن",

            navFaq:
                "الأسئلة الشائعة",

            getStarted:
                "ابدأ الآن",

            /* Hero */
            heroEyebrow:
                "مساحة آمنة ومريحة لك",

            heroTitle:
                "رحلتك نحو الشعور بشكل أفضل تبدأ من هنا.",

            heroDescription:
                "احصل على دعم شخصي في بيئة آمنة ومريحة مصممة حول احتياجاتك وأهدافك ورحلتك الشخصية.",

            heroButton:
                "ابدأ الآن",

            learnMore:
                "اكتشف كيف يعمل الموقع",

            trustPrivate:
                "خصوصية وسرية",

            trustPersonalized:
                "دعم شخصي",

            supportSession:
                "جلسة دعم",

            secure:
                "آمن",

            personalized:
                "مصمم خصيصًا لك",

            messageOne:
                "لست مضطرًا لمواجهة كل شيء بمفردك.",

            flexible:
                "مرن",

            /* Trust */
            trustPointOne:
                "اهتمام شخصي",

            trustPointTwo:
                "جلسات مريحة",

            trustPointThree:
                "خصوصية في المقام الأول",

            trustedText:
                "مساحة مصممة لمساعدتك على التقدم",

            /* How It Works */
            howTag:
                "كيف يعمل الموقع",

            howTitle:
                "البداية يمكن أن تكون بسيطة.",

            howDescription:
                "خطوات بسيطة تساعدك على اتخاذ الخطوة الأولى دون الشعور بالضغط.",

            stepOneTitle:
                "أخبرنا بما تحتاجه",

            stepOneText:
                "شاركنا ما تمر به ونوع الدعم الذي تبحث عنه.",

            stepTwoTitle:
                "اختر الأسلوب المناسب",

            stepTwoText:
                "استكشف أسلوب الدعم الذي يتناسب مع أهدافك واحتياجاتك الشخصية.",

            stepThreeTitle:
                "ابدأ جلساتك",

            stepThreeText:
                "اختر الوقت المناسب لك وابدأ رحلتك بالوتيرة التي تناسبك.",

            stepFourTitle:
                "استمر في التطور",

            stepFourText:
                "استمر في بناء عادات أفضل وفهم أعمق لنفسك.",

            /* Services */
            servicesTag:
                "دعم يناسب احتياجاتك",

            servicesTitle:
                "أيًا كان ما تمر به، لست مضطرًا لمواجهته بمفردك.",

            servicesDescription:
                "استكشف مجالات الدعم المختلفة واختر ما تشعر أنه الأقرب لاحتياجاتك.",

            serviceOneTitle:
                "القلق والتوتر",

            serviceOneText:
                "افهم التوتر، وتعامل مع القلق، وطوّر طرقًا أكثر صحة للتعامل مع الضغوط.",

            serviceTwoTitle:
                "العلاقات",

            serviceTwoText:
                "طوّر التواصل، وضع حدودًا صحية، وابنِ علاقات أكثر توازنًا.",

            serviceThreeTitle:
                "الثقة بالنفس",

            serviceThreeText:
                "طوّر فهمك لنفسك وثقتك بها وعلاقتك بذاتك.",

            serviceFourTitle:
                "التطور الشخصي",

            serviceFourText:
                "اكتسب وضوحًا، وحدد أهدافًا مهمة، وتقدم في حياتك بوعي وهدف.",

            serviceFiveTitle:
                "الدعم الأسري",

            serviceFiveText:
                "تعامل مع المواقف والتحديات الأسرية بوعي وفهم أكبر.",

            serviceSixTitle:
                "التدريب على الحياة",

            serviceSixText:
                "اعمل على أهدافك الشخصية ودافعك نحو التغيير الإيجابي في حياتك.",

            explore:
                "استكشف",

            /* Experience */
            yourJourney:
                "رحلتك",

            active:
                "نشطة",

            journeyOne:
                "البدء",

            journeyTwo:
                "فهم أهدافك",

            journeyThree:
                "بناء عادات جديدة",

            completed:
                "مكتمل",

            inProgress:
                "قيد التقدم",

            experienceTag:
                "تجربتك",

            experienceTitle:
                "الدعم يبدأ بفهمك.",

            experienceText:
                "لكل شخص رحلة مختلفة، لذلك يجب أن تكون تجربتك شخصية ومريحة وتركز على ما يهمك.",

            featureOneTitle:
                "أسلوب شخصي",

            featureOneText:
                "أهدافك وتجاربك تظل في قلب عملية الدعم.",

            featureTwoTitle:
                "بيئة مريحة",

            featureTwoText:
                "مساحة هادئة يمكنك فيها التحدث بحرية وصدق.",

            featureThreeTitle:
                "دعم مرن",

            featureThreeText:
                "كوّن روتينًا يتناسب مع حياتك وجدولك اليومي.",

            /* About */
            aboutTag:
                "عن تسبيح",

            aboutTitle:
                "مساحة يمكنك أن تكون فيها على طبيعتك.",

            aboutTextOne:
                "تم بناء Tasbeeh Mohamed حول فكرة بسيطة: الدعم الحقيقي يبدأ عندما تشعر أن هناك من يسمعك ويفهمك.",

            aboutTextTwo:
                "الهدف هو تقديم تجربة مريحة ومحترمة وداعمة تساعدك على فهم ما تمر به والعمل نحو التغييرات التي تريدها.",

            aboutQuote:
                "أنت تستحق مساحة يمكن فيها أن تُسمع قصتك دون أحكام.",

            aboutButton:
                "اعرف المزيد",

            /* Start */
            startTag:
                "اتخذ الخطوة الأولى",

            startTitle:
                "لست بحاجة إلى امتلاك جميع الإجابات من البداية.",

            startText:
                "ابدأ بإخبارنا قليلًا عما تبحث عنه، وسنساعدك على فهم الخطوة التالية.",

            startButton:
                "ابدأ الآن",

            startNote:
                "لن يستغرق الأمر سوى بضع دقائق",

            /* FAQ */
            faqTag:
                "الأسئلة الشائعة",

            faqTitle:
                "لديك أسئلة؟ نحن هنا لمساعدتك.",

            faqText:
                "تعرف على إجابات بعض الأسئلة الأكثر شيوعًا قبل أن تبدأ.",

            faqOneQuestion:
                "كيف تعمل العملية؟",

            faqOneAnswer:
                "تبدأ بمشاركة نوع الدعم الذي تبحث عنه، ثم يمكنك استكشاف الخيارات المتاحة واختيار ما يناسبك.",

            faqTwoQuestion:
                "هل معلوماتي خاصة؟",

            faqTwoAnswer:
                "خصوصيتك مهمة. يجب التعامل مع المعلومات الشخصية وفقًا لممارسات وسياسات الخصوصية الخاصة بالخدمة.",

            faqThreeQuestion:
                "هل يمكنني اختيار وقت مناسب؟",

            faqThreeAnswer:
                "يمكن تصميم المنصة بحيث تتيح لك طلب أو اختيار موعد جلسة يتناسب مع جدولك.",

            faqFourQuestion:
                "هل هذا علاج نفسي أم تدريب شخصي؟",

            faqFourAnswer:
                "قد تشمل الخدمات المتاحة دعم الصحة النفسية والتطوير الشخصي والتدريب، بحسب الخدمات المقدمة.",

            faqFiveQuestion:
                "كيف أبدأ؟",

            faqFiveAnswer:
                "اضغط على ابدأ الآن واتبع الخطوات الأولى البسيطة.",

            /* Assessment */
            assessmentTag:
                "بداية مخصصة لك",

            assessmentTitle:
                "دعنا نفهم ما تحتاجه.",

            assessmentText:
                "أجب عن بعض الأسئلة البسيطة وسنساعدك على تحديد نوع الدعم الأقرب لاحتياجاتك الحالية.",

            assessmentButton:
                "ابدأ",

            assessmentLink:
                "تقييم سريع",

            modalTag:
                "لنبدأ معًا",

            modalTitle:
                "في ماذا تبحث عن الدعم؟",

            modalText:
                "اختر الخيار الأقرب لما تبحث عنه في الوقت الحالي.",

            optionAnxiety:
                "القلق والتوتر",

            optionRelationships:
                "العلاقات",

            optionSelf:
                "الثقة بالنفس",

            optionGrowth:
                "التطور الشخصي",

            /* Footer */
            footerDescription:
                "مساحة داعمة للرفاهية والتطور الشخصي والنمو.",

            footerExplore:
                "استكشف",

            footerSupport:
                "الدعم",

            footerConnect:
                "تواصل معنا",

            footerConnectText:
                "لديك سؤال؟ يسعدنا أن نسمع منك.",

            contactUs:
                "تواصل معنا",

            allRights:
                "جميع الحقوق محفوظة.",

            privacy:
                "الخصوصية",

            terms:
                "الشروط"
        }

    };


    /* =====================================================
       LANGUAGE
    ====================================================== */

    function getSavedLanguage() {

        const savedLanguage =
            localStorage.getItem(LANGUAGE_KEY);

        if (savedLanguage === "ar" || savedLanguage === "en") {
            return savedLanguage;
        }

        return "en";
    }


    function updateTranslations(language) {

        const dictionary =
            translations[language] || translations.en;

        document
            .querySelectorAll("[data-i18n]")
            .forEach((element) => {

                const key =
                    element.getAttribute("data-i18n");

                if (!dictionary[key]) {
                    return;
                }

                element.textContent =
                    dictionary[key];
            });


        /* HTML direction */

        if (language === "ar") {

            html.lang = "ar";
            html.dir = "rtl";

            body.classList.add("arabic-mode");

            if (languageSwitch) {
                languageSwitch.textContent = "English";
                languageSwitch.setAttribute(
                    "aria-label",
                    "Switch to English"
                );
            }

            document.title =
                "تسبيح محمد | الدعم والتطور الشخصي";

            updateMetaDescription(
                "مساحة آمنة وداعمة للتطور الشخصي والرفاهية والعلاقات والتدريب على الحياة."
            );

        } else {

            html.lang = "en";
            html.dir = "ltr";

            body.classList.remove("arabic-mode");

            if (languageSwitch) {
                languageSwitch.textContent = "العربية";
                languageSwitch.setAttribute(
                    "aria-label",
                    "التبديل إلى العربية"
                );
            }

            document.title =
                "Tasbeeh Mohamed | Personal Support & Growth";

            updateMetaDescription(
                "A private and supportive space for personal growth, emotional wellbeing, relationships and life coaching."
            );
        }


        localStorage.setItem(
            LANGUAGE_KEY,
            language
        );
    }


    function updateMetaDescription(description) {

        const meta =
            document.querySelector(
                'meta[name="description"]'
            );

        if (meta) {
            meta.setAttribute(
                "content",
                description
            );
        }
    }


    if (languageSwitch) {

        languageSwitch.addEventListener(
            "click",
            () => {

                const currentLanguage =
                    html.lang === "ar"
                        ? "ar"
                        : "en";

                const nextLanguage =
                    currentLanguage === "en"
                        ? "ar"
                        : "en";

                updateTranslations(nextLanguage);
            }
        );
    }


    /* =====================================================
       MOBILE MENU
    ====================================================== */

    function closeMobileMenu() {

        if (!navbar || !menuToggle) {
            return;
        }

        navbar.classList.remove("active");

        menuToggle.classList.remove("active");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

        const icon =
            menuToggle.querySelector("i");

        if (icon) {

            icon.classList.remove(
                "fa-xmark"
            );

            icon.classList.add(
                "fa-bars"
            );
        }
    }


    function toggleMobileMenu() {

        if (!navbar || !menuToggle) {
            return;
        }

        const isOpen =
            navbar.classList.toggle("active");

        menuToggle.classList.toggle(
            "active",
            isOpen
        );

        menuToggle.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

        const icon =
            menuToggle.querySelector("i");

        if (icon) {

            icon.classList.toggle(
                "fa-bars",
                !isOpen
            );

            icon.classList.toggle(
                "fa-xmark",
                isOpen
            );
        }
    }


    if (menuToggle) {

        menuToggle.addEventListener(
            "click",
            toggleMobileMenu
        );
    }


    if (navbar) {

        navbar
            .querySelectorAll("a")
            .forEach((link) => {

                link.addEventListener(
                    "click",
                    closeMobileMenu
                );
            });
    }


    /* =====================================================
       FAQ ACCORDION
    ====================================================== */

    const faqItems =
        document.querySelectorAll(".faq-item");


    faqItems.forEach((item) => {

        const question =
            item.querySelector(".faq-question");

        if (!question) {
            return;
        }

        question.addEventListener(
            "click",
            () => {

                const wasActive =
                    item.classList.contains("active");


                /* Close all */

                faqItems.forEach((faq) => {

                    faq.classList.remove(
                        "active"
                    );

                    const btn =
                        faq.querySelector(
                            ".faq-question"
                        );

                    if (btn) {
                        btn.setAttribute(
                            "aria-expanded",
                            "false"
                        );
                    }
                });


                /* Open selected */

                if (!wasActive) {

                    item.classList.add(
                        "active"
                    );

                    question.setAttribute(
                        "aria-expanded",
                        "true"
                    );
                }

            }
        );

        question.setAttribute(
            "aria-expanded",
            "false"
        );
    });


    /* =====================================================
       ASSESSMENT MODAL
    ====================================================== */

    function openAssessment() {

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

        if (modalClose) {
            setTimeout(() => {
                modalClose.focus();
            }, 50);
        }
    }


    function closeAssessment() {

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


    if (assessmentButton) {

        assessmentButton.addEventListener(
            "click",
            openAssessment
        );
    }


    if (modalClose) {

        modalClose.addEventListener(
            "click",
            closeAssessment
        );
    }


    /* Click outside modal */

    if (assessmentModal) {

        assessmentModal.addEventListener(
            "click",
            (event) => {

                if (
                    event.target ===
                    assessmentModal
                ) {
                    closeAssessment();
                }
            }
        );
    }


    /* =====================================================
       ASSESSMENT OPTIONS
    ====================================================== */

    const assessmentOptions =
        document.querySelectorAll(
            ".assessment-option"
        );


    const optionNames = {

        anxiety: {
            en: "Anxiety & Stress",
            ar: "القلق والتوتر"
        },

        relationships: {
            en: "Relationships",
            ar: "العلاقات"
        },

        self: {
            en: "Self-Esteem",
            ar: "الثقة بالنفس"
        },

        growth: {
            en: "Personal Growth",
            ar: "التطور الشخصي"
        }

    };


    assessmentOptions.forEach((option) => {

        option.addEventListener(
            "click",
            () => {

                assessmentOptions.forEach(
                    (item) => {
                        item.classList.remove(
                            "selected"
                        );
                    }
                );


                option.classList.add(
                    "selected"
                );


                const selectedOption =
                    option.getAttribute(
                        "data-option"
                    );


                const language =
                    html.lang === "ar"
                        ? "ar"
                        : "en";


                const selectedName =
                    optionNames[selectedOption]
                        ? optionNames[selectedOption][language]
                        : "";


                /* Small delay gives the
                   selected state time to appear */

                setTimeout(() => {

                    closeAssessment();

                    openWhatsApp(
                        selectedOption,
                        selectedName
                    );

                }, 350);

            }
        );
    });


    /* =====================================================
       WHATSAPP
    ====================================================== */

    function openWhatsApp(
        selectedOption = "",
        selectedName = ""
    ) {

        const language =
            html.lang === "ar"
                ? "ar"
                : "en";


        let message = "";


        if (language === "ar") {

            message =
                "مرحبًا تسبيح محمد، أريد الاستفسار عن خدمات الدعم والتطور الشخصي.";

            if (selectedName) {

                message +=
                    `\n\nالمجال الذي أبحث عن دعم فيه: ${selectedName}`;
            }

        } else {

            message =
                "Hello Tasbeeh Mohamed, I would like to ask about your personal support and growth services.";

            if (selectedName) {

                message +=
                    `\n\nArea I am looking for support with: ${selectedName}`;
            }
        }


        const whatsappURL =
            `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;


        window.open(
            whatsappURL,
            "_blank",
            "noopener,noreferrer"
        );
    }


    /* =====================================================
       CONTACT US → WHATSAPP
    ====================================================== */

    const contactLinks =
        document.querySelectorAll(
            '.service-link'
        );


    contactLinks.forEach((link) => {

        const textElement =
            link.querySelector(
                '[data-i18n="contactUs"]'
            );


        if (!textElement) {
            return;
        }


        link.setAttribute(
            "href",
            `https://wa.me/${WHATSAPP_NUMBER}`
        );

        link.setAttribute(
            "target",
            "_blank"
        );

        link.setAttribute(
            "rel",
            "noopener noreferrer"
        );


        link.addEventListener(
            "click",
            (event) => {

                event.preventDefault();

                openWhatsApp();
            }
        );
    });


    /* =====================================================
       HEADER SCROLL EFFECT
    ====================================================== */

    function handleHeaderScroll() {

        if (!siteHeader) {
            return;
        }

        if (window.scrollY > 30) {

            siteHeader.classList.add(
                "scrolled"
            );

        } else {

            siteHeader.classList.remove(
                "scrolled"
            );
        }
    }


    window.addEventListener(
        "scroll",
        handleHeaderScroll,
        {
            passive: true
        }
    );


    handleHeaderScroll();


    /* =====================================================
       CLOSE MOBILE MENU ON RESIZE
    ====================================================== */

    window.addEventListener(
        "resize",
        () => {

            if (
                window.innerWidth > 900
            ) {
                closeMobileMenu();
            }
        }
    );


    /* =====================================================
       ESCAPE KEY
    ====================================================== */

    document.addEventListener(
        "keydown",
        (event) => {

            if (event.key !== "Escape") {
                return;
            }


            if (
                assessmentModal &&
                assessmentModal.classList.contains(
                    "active"
                )
            ) {
                closeAssessment();
            }


            if (
                navbar &&
                navbar.classList.contains(
                    "active"
                )
            ) {
                closeMobileMenu();
            }
        }
    );


    /* =====================================================
       SMOOTH SCROLL
    ====================================================== */

    document
        .querySelectorAll(
            'a[href^="#"]'
        )
        .forEach((link) => {

            link.addEventListener(
                "click",
                (event) => {

                    const targetID =
                        link.getAttribute(
                            "href"
                        );


                    if (
                        !targetID ||
                        targetID === "#"
                    ) {
                        return;
                    }


                    const target =
                        document.querySelector(
                            targetID
                        );


                    if (!target) {
                        return;
                    }


                    event.preventDefault();


                    const headerHeight =
                        siteHeader
                            ? siteHeader.offsetHeight
                            : 0;


                    const targetPosition =
                        target.getBoundingClientRect()
                            .top +
                        window.scrollY -
                        headerHeight -
                        15;


                    window.scrollTo({
                        top: targetPosition,
                        behavior: "smooth"
                    });


                    closeMobileMenu();
                }
            );
        });


    /* =====================================================
       CURRENT YEAR
    ====================================================== */

    if (currentYear) {

        currentYear.textContent =
            new Date().getFullYear();
    }


    /* =====================================================
       BODY SCROLL LOCK
    ====================================================== */

    if (!document.getElementById("modal-scroll-style")) {

        const style =
            document.createElement("style");

        style.id =
            "modal-scroll-style";

        style.textContent = `
            body.modal-open {
                overflow: hidden;
            }
        `;

        document.head.appendChild(style);
    }


    /* =====================================================
       INITIALIZE LANGUAGE
    ====================================================== */

    updateTranslations(
        getSavedLanguage()
    );


    /* =====================================================
       INITIALIZE FAQ ARIA
    ====================================================== */

    faqItems.forEach((item) => {

        const question =
            item.querySelector(".faq-question");

        if (question) {

            question.setAttribute(
                "aria-expanded",
                item.classList.contains("active")
                    ? "true"
                    : "false"
            );
        }
    });


    /* =====================================================
       FINAL INITIALIZATION
    ====================================================== */

    console.log(
        "Tasbeeh Mohamed website initialized successfully."
    );

});
