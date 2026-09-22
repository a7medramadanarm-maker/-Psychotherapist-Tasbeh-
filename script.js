document.addEventListener("DOMContentLoaded", () => {
    "use strict";

    /* =========================================================
       TASBEEH MOHAMED
       Psychological Therapy & Mental Health Platform
       Main JavaScript
    ========================================================= */


    /* =========================================================
       CONFIGURATION
    ========================================================= */

    const WHATSAPP_NUMBER = "201003089153";
    const LANGUAGE_KEY = "tasbeehLanguage";

    const html = document.documentElement;
    const body = document.body;


    /* =========================================================
       DOM ELEMENTS
    ========================================================= */

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


    /* =========================================================
       TRANSLATIONS
    ========================================================= */

    const translations = {

        ar: {

            /* Brand */
            brandSubtitle:
                "العلاج النفسي والصحة النفسية",

            /* Navigation */
            navHome:
                "الرئيسية",

            navHow:
                "كيف يعمل",

            navServices:
                "مجالات العلاج",

            navExperience:
                "تجربتك",

            navAbout:
                "عن تسبيح",

            navFaq:
                "الأسئلة الشائعة",

            /* General */
            startNow:
                "ابدأ الآن",

            discoverHow:
                "اكتشف كيف يعمل الموقع",

            safe:
                "مساحة آمنة",

            safeText:
                "تحدث براحة وبدون أحكام",

            professionalCare:
                "رعاية نفسية متخصصة",

            professionalCareText:
                "اهتمام باحتياجاتك النفسية",

            flexible:
                "تجربة مرنة",

            flexibleText:
                "بما يناسب وقتك وروتينك",

            privacy:
                "خصوصية واحترام",

            comfortableCare:
                "تجربة علاجية مريحة",

            /* Hero */
            heroKicker:
                "مساحة للرعاية والصحة النفسية",

            heroTitle:
                "مساحة آمنة للعلاج النفسي والراحة النفسية",

            heroDescription:
                "رحلتك نحو صحة نفسية أفضل تبدأ بخطوة. احصل على رعاية نفسية متخصصة في بيئة آمنة ومحترمة تساعدك على فهم ما تمر به والعمل على ما يهمك.",

            heroNote:
                "خصوصية واحترام ورعاية بدون أحكام",

            heroVisualText:
                "مساحتك الآمنة",

            /* How */
            howEyebrow:
                "كيف يعمل الموقع",

            howTitle:
                "البداية يمكن أن تكون بسيطة.",

            howDescription:
                "خطوات واضحة تساعدك على اتخاذ الخطوة الأولى نحو الرعاية النفسية المناسبة.",

            step1Title:
                "أخبرنا بما تمر به",

            step1Text:
                "شارك ما تشعر به وما الذي تبحث عنه، بالقدر الذي تشعر معه بالراحة.",

            step2Title:
                "حدد احتياجك",

            step2Text:
                "تعرف على مجالات العلاج والرعاية النفسية الأقرب إلى احتياجك.",

            step3Title:
                "ابدأ رحلتك العلاجية",

            step3Text:
                "انتقل إلى الخطوة التالية المناسبة لك وابدأ رحلة الرعاية النفسية.",

            step4Title:
                "استمر في التحسن",

            step4Text:
                "تابع رحلتك وتعلم طرقًا تساعدك على التعامل مع تحدياتك بصورة أفضل.",

            /* Services */
            servicesEyebrow:
                "مجالات العلاج النفسي",

            servicesTitle:
                "اختر المجال الأقرب إلى احتياجك.",

            servicesDescription:
                "تختلف احتياجات الصحة النفسية من شخص لآخر، لذلك يمكنك التعرف على المجالات المختلفة واختيار ما يناسب حالتك.",

            showDetails:
                "تعرف على التفاصيل",

            hideDetails:
                "إخفاء التفاصيل",

            startWithThis:
                "ابدأ من هنا",

            service1Title:
                "القلق والتوتر",

            service1Short:
                "فهم القلق والتوتر والتعامل مع الضغوط اليومية بصورة أكثر صحة.",

            service1Details:
                "مساحة لفهم مصادر القلق والتوتر والتعامل مع الأفكار والمواقف التي تزيد من الضغط النفسي.",

            service1Point1:
                "فهم مصادر القلق والضغط",

            service1Point2:
                "التعامل مع الأفكار المقلقة",

            service1Point3:
                "تطوير طرق أفضل للتعامل مع الضغوط",

            service2Title:
                "العلاقات",

            service2Short:
                "تحسين التواصل وفهم العلاقات ووضع حدود صحية.",

            service2Details:
                "مساحة لفهم العلاقات بشكل أعمق وتحسين التواصل والتعامل مع الخلافات.",

            service2Point1:
                "تحسين التواصل",

            service2Point2:
                "وضع حدود صحية",

            service2Point3:
                "التعامل مع الخلافات",

            service3Title:
                "الثقة بالنفس",

            service3Short:
                "فهم الذات والتعامل مع النقد الذاتي وبناء صورة أكثر توازنًا عن النفس.",

            service3Details:
                "التركيز على علاقتك بنفسك وفهم نقاط القوة والتعامل مع النقد الذاتي.",

            service3Point1:
                "فهم نفسك بشكل أفضل",

            service3Point2:
                "التعامل مع النقد الذاتي",

            service3Point3:
                "بناء ثقة أكثر توازنًا",

            service4Title:
                "الصحة النفسية والتطور",

            service4Short:
                "اكتسب وضوحًا وفهمًا أفضل لنفسك وحياتك وأهدافك.",

            service4Details:
                "مساحة للعمل على التحديات الشخصية وفهم الأفكار والمشاعر وتحديد الخطوات المناسبة.",

            service4Point1:
                "فهم الأولويات",

            service4Point2:
                "تحديد أهداف واضحة",

            service4Point3:
                "بناء خطوات عملية",

            service5Title:
                "الدعم النفسي الأسري",

            service5Short:
                "التعامل مع التحديات الأسرية وتحسين التواصل داخل الأسرة.",

            service5Details:
                "مساحة لفهم المواقف الأسرية ووجهات النظر المختلفة والتعامل مع التحديات بصورة أكثر وعيًا.",

            service5Point1:
                "فهم المواقف الأسرية",

            service5Point2:
                "تحسين الحوار",

            service5Point3:
                "التعامل مع التحديات",

            service6Title:
                "العلاج والدعم النفسي",

            service6Short:
                "مساحة للرعاية النفسية والتعامل مع التحديات التي تؤثر على حياتك.",

            service6Details:
                "يعتمد نوع الرعاية على احتياج كل شخص وطبيعة ما يمر به، مع توجيه الحالات التي تحتاج إلى تقييم متخصص إلى المختص المناسب.",

            service6Point1:
                "فهم احتياجاتك النفسية",

            service6Point2:
                "التعامل مع التحديات النفسية",

            service6Point3:
                "تحديد الخطوة العلاجية المناسبة",

            /* Journey */
            journeyEyebrow:
                "رحلتك",

            journeyTitle:
                "خطوة بخطوة، وبالوتيرة التي تناسبك.",

            journeyDescription:
                "العلاج النفسي رحلة تختلف من شخص لآخر، والمهم أن تبدأ بالخطوة المناسبة لك.",

            journey1Status:
                "البداية",

            journey1Title:
                "فهم ما تمر به",

            journey1Text:
                "ابدأ بالتعرف على احتياجاتك وما تريد أن تعمل عليه.",

            journey2Status:
                "الخطوة التالية",

            journey2Title:
                "تحديد الاحتياجات",

            journey2Text:
                "حدد المجال الأقرب إلى ما تمر به.",

            journey3Status:
                "قيد التقدم",

            journey3Title:
                "العمل على التغيير",

            journey3Text:
                "اعمل تدريجيًا على التغييرات التي تريدها.",

            journey4Status:
                "مستمر",

            journey4Title:
                "متابعة رحلتك",

            journey4Text:
                "استمر في فهم نفسك والتقدم بما يناسب حالتك واحتياجاتك.",

            /* Experience */
            experienceEyebrow:
                "تجربتك",

            experienceTitle:
                "العلاج يبدأ بفهمك.",

            experienceDescription:
                "لكل شخص رحلة مختلفة، لذلك يجب أن تكون تجربتك العلاجية محترمة ومريحة وتركز على ما يهمك.",

            experienceVisual:
                "مساحة للرعاية النفسية",

            experience1Title:
                "رعاية تناسب احتياجك",

            experience1Text:
                "احتياجاتك وتجربتك في قلب عملية الرعاية النفسية.",

            experience2Title:
                "بيئة مريحة",

            experience2Text:
                "مساحة هادئة يمكنك فيها التحدث بحرية وصدق.",

            experience3Title:
                "احترام وخصوصية",

            experience3Text:
                "التعامل مع تجربتك وخصوصيتك باحترام وحرص.",

            /* About */
            aboutEyebrow:
                "عن تسبيح",

            aboutTitle:
                "مساحة يمكنك أن تشعر فيها بالأمان.",

            aboutText1:
                "تم بناء Tasbeeh Mohamed حول فكرة بسيطة: الرعاية النفسية تبدأ عندما تشعر أن هناك من يسمعك ويفهم ما تمر به.",

            aboutText2:
                "الهدف هو تقديم تجربة محترمة ومريحة تساعدك على فهم احتياجاتك النفسية والوصول إلى الخطوة المناسبة لك.",

            learnMore:
                "ابدأ التعرف على احتياجك",

            aboutCardText:
                "الرعاية النفسية تبدأ بخطوة.",

            /* CTA */
            ctaEyebrow:
                "الخطوة الأولى",

            ctaTitle:
                "ابدأ رحلتك نحو صحة نفسية أفضل.",

            ctaText:
                "لست بحاجة إلى امتلاك جميع الإجابات من البداية. أخبرنا قليلًا عما تبحث عنه وسنساعدك على فهم الخطوة التالية.",

            ctaNote:
                "لن يستغرق الأمر سوى بضع دقائق",

            /* FAQ */
            faqEyebrow:
                "الأسئلة الشائعة",

            faqTitle:
                "أسئلة قد تكون في ذهنك.",

            faqDescription:
                "بعض الإجابات التي قد تساعدك قبل أن تبدأ.",

            faq1Question:
                "كيف تعمل العملية؟",

            faq1Answer:
                "تبدأ بخطوة بسيطة للتعرف على احتياجاتك وما تبحث عنه. بعد ذلك يمكنك تحديد المجال المناسب والخطوة التالية.",

            faq2Question:
                "هل معلوماتي خاصة؟",

            faq2Answer:
                "الخصوصية جزء أساسي من تجربة الرعاية النفسية. شارك فقط المعلومات التي تشعر بالراحة تجاهها.",

            faq3Question:
                "هل يمكنني اختيار وقت مناسب؟",

            faq3Answer:
                "يمكنك اختيار الوقت الأنسب لك وفقًا للمواعيد المتاحة.",

            faq4Question:
                "هل هذا علاج نفسي؟",

            faq4Answer:
                "تختلف طبيعة الرعاية حسب احتياج كل شخص. الحالات التي تتطلب تقييمًا أو علاجًا متخصصًا ينبغي التعامل معها مع مختص مؤهل ومرخص.",

            faq5Question:
                "كيف أبدأ؟",

            faq5Answer:
                "اضغط على «ابدأ الآن» وأخبرنا بشكل بسيط عما تبحث عنه. الخطوة الأولى هي أن توضح احتياجك.",

            faqCtaTitle:
                "ما زال لديك سؤال؟",

            faqCtaText:
                "يمكنك التواصل معنا إذا كنت تحتاج إلى معرفة المزيد قبل أن تبدأ.",

            contactUs:
                "تواصل معنا",

            /* Assessment */
            assessmentEyebrow:
                "ابدأ من هنا",

            assessmentTitle:
                "ما الذي تبحث عنه الآن؟",

            assessmentDescription:
                "اختر المجال الأقرب إلى احتياجك.",

            assessmentQuestion:
                "ما المجال الأقرب لما تمر به؟",

            assessmentAnxiety:
                "القلق والتوتر",

            assessmentRelationships:
                "العلاقات",

            assessmentSelf:
                "الثقة بالنفس",

            assessmentGrowth:
                "الصحة النفسية والتطور",

            assessmentHint:
                "يمكنك تغيير اختيارك في أي وقت.",

            continueWhatsApp:
                "تواصل عبر واتساب",

            /* Footer */
            footerDescription:
                "منصة للرعاية النفسية والعلاج النفسي في مساحة محترمة ومريحة.",

            footerExplore:
                "استكشف",

            footerStart:
                "ابدأ رحلتك"
        },


        /* =====================================================
           ENGLISH
        ===================================================== */

        en: {

            /* Brand */
            brandSubtitle:
                "Psychological Therapy & Mental Health",

            /* Navigation */
            navHome:
                "Home",

            navHow:
                "How It Works",

            navServices:
                "Therapy Areas",

            navExperience:
                "Your Experience",

            navAbout:
                "About Tasbeeh",

            navFaq:
                "FAQ",

            /* General */
            startNow:
                "Get Started",

            discoverHow:
                "How It Works",

            safe:
                "A Safe Space",

            safeText:
                "Talk comfortably without judgment",

            professionalCare:
                "Specialized Care",

            professionalCareText:
                "Care focused on your mental health needs",

            flexible:
                "Flexible Experience",

            flexibleText:
                "Designed around your time and routine",

            privacy:
                "Privacy & Respect",

            comfortableCare:
                "Comfortable Care",

            /* Hero */
            heroKicker:
                "A Space for Mental Health & Care",

            heroTitle:
                "A Safe Space for Psychological Therapy & Mental Wellbeing",

            heroDescription:
                "Your journey toward better mental health starts with a step. Explore psychological care in a respectful and supportive environment designed around your needs.",

            heroNote:
                "Privacy, respect and care without judgment",

            heroVisualText:
                "Your Safe Space",

            /* How */
            howEyebrow:
                "How It Works",

            howTitle:
                "Getting started can be simple.",

            howDescription:
                "Clear steps to help you take the first step toward the care that fits your needs.",

            step1Title:
                "Tell Us What You're Experiencing",

            step1Text:
                "Share what you're feeling and what you're looking for, only as much as you feel comfortable sharing.",

            step2Title:
                "Identify Your Needs",

            step2Text:
                "Explore different therapy and mental-health areas and identify what is closest to your needs.",

            step3Title:
                "Start Your Journey",

            step3Text:
                "Move to the next step that fits you and begin your mental-health care journey.",

            step4Title:
                "Continue Your Progress",

            step4Text:
                "Continue learning about yourself and developing healthier ways to deal with challenges.",

            /* Services */
            servicesEyebrow:
                "Psychological Therapy Areas",

            servicesTitle:
                "Explore the area closest to your needs.",

            servicesDescription:
                "Mental-health needs are different for everyone. Explore the available areas and identify what fits your situation.",

            showDetails:
                "View Details",

            hideDetails:
                "Hide Details",

            startWithThis:
                "Start Here",

            service1Title:
                "Anxiety & Stress",

            service1Short:
                "Understand anxiety and stress and develop healthier ways to manage daily pressure.",

            service1Details:
                "A space to understand sources of anxiety and stress, recognize thoughts and situations that increase pressure, and develop healthier coping approaches.",

            service1Point1:
                "Understand sources of anxiety and stress",

            service1Point2:
                "Work with anxious thoughts",

            service1Point3:
                "Develop healthier coping strategies",

            service2Title:
                "Relationships",

            service2Short:
                "Improve communication, understand relationships and build healthier boundaries.",

            service2Details:
                "A space to understand relationships more deeply, improve communication and approach disagreements with greater awareness.",

            service2Point1:
                "Improve communication",

            service2Point2:
                "Build healthy boundaries",

            service2Point3:
                "Handle disagreements",

            service3Title:
                "Self-Confidence",

            service3Short:
                "Understand yourself, work with self-criticism and develop a more balanced view of yourself.",

            service3Details:
                "Focus on your relationship with yourself, understand your strengths and work with patterns of self-criticism.",

            service3Point1:
                "Understand yourself better",

            service3Point2:
                "Work with self-criticism",

            service3Point3:
                "Build balanced confidence",

            service4Title:
                "Mental Wellbeing & Personal Development",

            service4Short:
                "Gain greater clarity and understanding of yourself, your life and your goals.",

            service4Details:
                "A space to work through personal challenges, understand thoughts and emotions, and identify appropriate next steps.",

            service4Point1:
                "Understand your priorities",

            service4Point2:
                "Set clear goals",

            service4Point3:
                "Build practical steps",

            service5Title:
                "Family Mental Health Support",

            service5Short:
                "Approach family challenges and communication with greater awareness.",

            service5Details:
                "A space to understand family situations and different perspectives while developing healthier ways to communicate.",

            service5Point1:
                "Understand family situations",

            service5Point2:
                "Improve communication",

            service5Point3:
                "Handle challenges with awareness",

            service6Title:
                "Psychological Care",

            service6Short:
                "A space for mental-health care and support with challenges affecting your life.",

            service6Details:
                "The appropriate type of care depends on each person's needs and circumstances. Situations requiring specialized assessment should be directed to an appropriately qualified professional.",

            service6Point1:
                "Understand your mental-health needs",

            service6Point2:
                "Work through psychological challenges",

            service6Point3:
                "Identify appropriate next steps",

            /* Journey */
            journeyEyebrow:
                "Your Journey",

            journeyTitle:
                "One step at a time, at your own pace.",

            journeyDescription:
                "Mental-health journeys are different for everyone. What matters is starting with the step that fits you.",

            journey1Status:
                "Starting",

            journey1Title:
                "Understand What You're Experiencing",

            journey1Text:
                "Begin by understanding your needs and what you want to work on.",

            journey2Status:
                "Next Step",

            journey2Title:
                "Identify Your Needs",

            journey2Text:
                "Identify the area closest to what you're experiencing.",

            journey3Status:
                "In Progress",

            journey3Title:
                "Work Toward Change",

            journey3Text:
                "Gradually work on the changes you want to make.",

            journey4Status:
                "Ongoing",

            journey4Title:
                "Continue Your Journey",

            journey4Text:
                "Continue understanding yourself and moving forward in a way that fits your needs.",

            /* Experience */
            experienceEyebrow:
                "Your Experience",

            experienceTitle:
                "Therapy Starts With Understanding You.",

            experienceDescription:
                "Everyone's journey is different, so your experience should be respectful, comfortable and focused on what matters to you.",

            experienceVisual:
                "A Space for Mental Health Care",

            experience1Title:
                "Care That Fits Your Needs",

            experience1Text:
                "Your needs and experience remain central to the care process.",

            experience2Title:
                "A Comfortable Environment",

            experience2Text:
                "A calm space where you can speak openly and honestly.",

            experience3Title:
                "Privacy & Respect",

            experience3Text:
                "Your experience and privacy are treated with care and respect.",

            /* About */
            aboutEyebrow:
                "About Tasbeeh",

            aboutTitle:
                "A Space Where You Can Feel Safe.",

            aboutText1:
                "Tasbeeh Mohamed was built around a simple idea: mental-health care begins when you feel heard and understood.",

            aboutText2:
                "The goal is to provide a respectful and comfortable experience that helps you understand your needs and identify an appropriate next step.",

            learnMore:
                "Explore Your Needs",

            aboutCardText:
                "Mental-health care starts with a step.",

            /* CTA */
            ctaEyebrow:
                "The First Step",

            ctaTitle:
                "Start Your Journey Toward Better Mental Health.",

            ctaText:
                "You do not need to have all the answers from the beginning. Tell us a little about what you're looking for and we'll help you understand the next step.",

            ctaNote:
                "It only takes a few minutes",

            /* FAQ */
            faqEyebrow:
                "Frequently Asked Questions",

            faqTitle:
                "Questions You May Have.",

            faqDescription:
                "Here are some answers that may help before you begin.",

            faq1Question:
                "How does the process work?",

            faq1Answer:
                "It starts with a simple step to understand your needs and what you're looking for. You can then identify the relevant area and next step.",

            faq2Question:
                "Is my information private?",

            faq2Answer:
                "Privacy is an important part of the mental-health care experience. Share only the information you feel comfortable sharing.",

            faq3Question:
                "Can I choose a suitable time?",

            faq3Answer:
                "You can choose the time that works best for you based on the available appointments.",

            faq4Question:
                "Is this psychological therapy?",

            faq4Answer:
                "The type of care depends on each person's needs. Situations requiring specialized assessment or treatment should be handled by an appropriately qualified and licensed professional.",

            faq5Question:
                "How do I get started?",

            faq5Answer:
                "Click “Get Started” and tell us briefly what you're looking for. The first step is simply to identify your needs.",

            faqCtaTitle:
                "Still Have a Question?",

            faqCtaText:
                "Contact us if you need more information before getting started.",

            contactUs:
                "Contact Us",

            /* Assessment */
            assessmentEyebrow:
                "Start Here",

            assessmentTitle:
                "What Are You Looking For?",

            assessmentDescription:
                "Choose the area closest to your needs.",

            assessmentQuestion:
                "Which area is closest to what you're experiencing?",

            assessmentAnxiety:
                "Anxiety & Stress",

            assessmentRelationships:
                "Relationships",

            assessmentSelf:
                "Self-Confidence",

            assessmentGrowth:
                "Mental Wellbeing & Development",

            assessmentHint:
                "You can change your selection at any time.",

            continueWhatsApp:
                "Continue on WhatsApp",

            /* Footer */
            footerDescription:
                "A respectful and comfortable platform for psychological care and mental-health support.",

            footerExplore:
                "Explore",

            footerStart:
                "Start Your Journey"
        }
    };


    /* =========================================================
       LANGUAGE FUNCTIONS
    ========================================================= */

    let currentLanguage =
        localStorage.getItem(LANGUAGE_KEY) || "ar";


    function getTranslation(key) {

        if (
            translations[currentLanguage] &&
            translations[currentLanguage][key]
        ) {
            return translations[currentLanguage][key];
        }

        return null;
    }


    function applyTranslations() {

        const elements =
            document.querySelectorAll("[data-i18n]");

        elements.forEach((element) => {

            const key =
                element.getAttribute("data-i18n");

            const translated =
                getTranslation(key);

            if (translated === null) {
                return;
            }

            /*
             * Use textContent for normal elements.
             * This prevents HTML injection and keeps
             * translations clean.
             */
            element.textContent = translated;

        });


        /* HTML direction */

        if (currentLanguage === "ar") {

            html.lang = "ar";
            html.dir = "rtl";

        } else {

            html.lang = "en";
            html.dir = "ltr";

        }


        /* Language button */

        if (languageSwitch) {

            languageSwitch.textContent =
                currentLanguage === "ar" ? "EN" : "AR";

            languageSwitch.setAttribute(
                "aria-label",
                currentLanguage === "ar"
                    ? "Switch to English"
                    : "التبديل إلى العربية"
            );

        }


        /* Document title */

        document.title =
            currentLanguage === "ar"
                ? "Tasbeeh Mohamed | العلاج النفسي والصحة النفسية"
                : "Tasbeeh Mohamed | Psychological Therapy & Mental Health";


        /*
         * Re-sync service button text after translation.
         */
        updateServiceButtonLabels();

    }


    function switchLanguage() {

        currentLanguage =
            currentLanguage === "ar"
                ? "en"
                : "ar";

        localStorage.setItem(
            LANGUAGE_KEY,
            currentLanguage
        );

        applyTranslations();

    }


    if (languageSwitch) {

        languageSwitch.addEventListener(
            "click",
            switchLanguage
        );

    }


    /* =========================================================
       MOBILE MENU
    ========================================================= */

    function openMenu() {

        if (!navbar || !menuToggle) {
            return;
        }

        navbar.classList.add("active");
        menuToggle.classList.add("active");

        menuToggle.setAttribute(
            "aria-expanded",
            "true"
        );

        body.classList.add("menu-open");

    }


    function closeMenu() {

        if (!navbar || !menuToggle) {
            return;
        }

        navbar.classList.remove("active");
        menuToggle.classList.remove("active");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

        body.classList.remove("menu-open");

    }


    function toggleMenu() {

        if (!navbar) {
            return;
        }

        const isOpen =
            navbar.classList.contains("active");

        if (isOpen) {
            closeMenu();
        } else {
            openMenu();
        }

    }


    if (menuToggle) {

        menuToggle.addEventListener(
            "click",
            toggleMenu
        );

    }


    /*
     * Close menu after clicking a navigation link.
     */

    document
        .querySelectorAll(".nav-link")
        .forEach((link) => {

            link.addEventListener(
                "click",
                closeMenu
            );

        });


    /*
     * Close menu when clicking outside.
     */

    document.addEventListener(
        "click",
        (event) => {

            if (!navbar || !menuToggle) {
                return;
            }

            const clickedInsideMenu =
                navbar.contains(event.target);

            const clickedToggle =
                menuToggle.contains(event.target);

            if (
                navbar.classList.contains("active") &&
                !clickedInsideMenu &&
                !clickedToggle
            ) {
                closeMenu();
            }

        }
    );


    /* =========================================================
       HEADER SCROLL EFFECT
    ========================================================= */

    function handleHeaderScroll() {

        if (!siteHeader) {
            return;
        }

        if (window.scrollY > 30) {

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


    /* =========================================================
       SERVICE ACCORDION
    ========================================================= */

    const serviceCards =
        document.querySelectorAll(".service-card");


    function updateServiceButtonLabels() {

        serviceCards.forEach((card) => {

            const button =
                card.querySelector(".service-expand");

            const text =
                button?.querySelector("span");

            if (!button || !text) {
                return;
            }

            const isExpanded =
                card.classList.contains("expanded");

            text.textContent =
                isExpanded
                    ? getTranslation("hideDetails")
                    : getTranslation("showDetails");

            button.setAttribute(
                "aria-expanded",
                String(isExpanded)
            );

        });

    }


    serviceCards.forEach((card) => {

        const button =
            card.querySelector(".service-expand");

        if (!button) {
            return;
        }

        button.addEventListener(
            "click",
            () => {

                const wasExpanded =
                    card.classList.contains("expanded");


                /*
                 * Close other cards.
                 */

                serviceCards.forEach((otherCard) => {

                    if (otherCard !== card) {

                        otherCard.classList.remove(
                            "expanded"
                        );

                        const otherButton =
                            otherCard.querySelector(
                                ".service-expand"
                            );

                        if (otherButton) {

                            otherButton.setAttribute(
                                "aria-expanded",
                                "false"
                            );

                        }

                    }

                });


                /*
                 * Toggle selected card.
                 */

                card.classList.toggle(
                    "expanded",
                    !wasExpanded
                );


                updateServiceButtonLabels();

            }
        );

    });


    /* =========================================================
       FAQ ACCORDION
    ========================================================= */

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

                const isActive =
                    item.classList.contains("active");


                /*
                 * Close all FAQ items.
                 */

                faqItems.forEach((otherItem) => {

                    otherItem.classList.remove("active");

                    const otherQuestion =
                        otherItem.querySelector(
                            ".faq-question"
                        );

                    if (otherQuestion) {

                        otherQuestion.setAttribute(
                            "aria-expanded",
                            "false"
                        );

                    }

                });


                /*
                 * Open selected item.
                 */

                if (!isActive) {

                    item.classList.add("active");

                    question.setAttribute(
                        "aria-expanded",
                        "true"
                    );

                }

            }
        );

    });


    /* =========================================================
       ASSESSMENT MODAL
    ========================================================= */

    let selectedAssessment = null;


    function openAssessmentModal() {

        if (!assessmentModal) {
            return;
        }

        assessmentModal.classList.add("active");

        assessmentModal.setAttribute(
            "aria-hidden",
            "false"
        );

        body.classList.add("modal-open");


        /*
         * Focus close button for accessibility.
         */

        setTimeout(() => {

            if (modalClose) {
                modalClose.focus();
            }

        }, 100);

    }


    function closeAssessmentModal() {

        if (!assessmentModal) {
            return;
        }

        assessmentModal.classList.remove("active");

        assessmentModal.setAttribute(
            "aria-hidden",
            "true"
        );

        body.classList.remove("modal-open");

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


    /* =========================================================
       ASSESSMENT OPTIONS
    ========================================================= */

    const assessmentOptions =
        document.querySelectorAll(
            ".assessment-option"
        );


    const assessmentNames = {

        ar: {

            anxiety:
                "القلق والتوتر",

            relationships:
                "العلاقات",

            self:
                "الثقة بالنفس",

            growth:
                "الصحة النفسية والتطور"

        },

        en: {

            anxiety:
                "Anxiety & Stress",

            relationships:
                "Relationships",

            self:
                "Self-Confidence",

            growth:
                "Mental Wellbeing & Development"

        }

    };


    function updateWhatsAppLink() {

        if (!modalWhatsApp) {
            return;
        }


        let message;

        if (selectedAssessment) {

            const selectedName =
                assessmentNames[currentLanguage][
                    selectedAssessment
                ];

            message =
                currentLanguage === "ar"
                    ? `مرحبًا، أريد الاستفسار عن الرعاية النفسية. المجال الذي أبحث عنه: ${selectedName}`
                    : `Hello, I would like to ask about psychological care. The area I am looking for is: ${selectedName}`;

        } else {

            message =
                currentLanguage === "ar"
                    ? "مرحبًا، أريد الاستفسار عن الرعاية النفسية."
                    : "Hello, I would like to ask about psychological care.";

        }


        modalWhatsApp.href =
            `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    }


    assessmentOptions.forEach((option) => {

        option.addEventListener(
            "click",
            () => {

                /*
                 * Remove previous selection.
                 */

                assessmentOptions.forEach(
                    (otherOption) => {

                        otherOption.classList.remove(
                            "selected"
                        );

                        otherOption.setAttribute(
                            "aria-pressed",
                            "false"
                        );

                    }
                );


                /*
                 * Select current option.
                 */

                option.classList.add("selected");

                option.setAttribute(
                    "aria-pressed",
                    "true"
                );


                selectedAssessment =
                    option.dataset.assessment || null;


                /*
                 * Update WhatsApp.
                 */

                updateWhatsAppLink();

            }
        );

    });


    /* =========================================================
       SERVICE START BUTTONS
    ========================================================= */

    const serviceStartButtons =
        document.querySelectorAll(".service-start");


    serviceStartButtons.forEach((button) => {

        button.addEventListener(
            "click",
            (event) => {

                event.preventDefault();

                const card =
                    button.closest(".service-card");

                const serviceTitle =
                    card?.querySelector(
                        ".service-title"
                    )?.textContent.trim();


                /*
                 * Store selected service for the next
                 * providers / booking stage.
                 */

                if (serviceTitle) {

                    sessionStorage.setItem(
                        "tasbeehSelectedService",
                        serviceTitle
                    );

                }


                /*
                 * For now open the assessment modal.
                 * Later this can become:
                 *
                 * providers.html?service=...
                 *
                 */

                openAssessmentModal();

            }
        );

    });


    /* =========================================================
       HEADER / NAV CTA LINKS
    ========================================================= */

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


    /* =========================================================
       SMOOTH SCROLL
    ========================================================= */

    document
        .querySelectorAll(
            'a[href^="#"]:not([href="#"])'
        )
        .forEach((link) => {

            link.addEventListener(
                "click",
                (event) => {

                    const targetId =
                        link.getAttribute("href");

                    /*
                     * Assessment is handled separately.
                     */

                    if (
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


    /* =========================================================
       ESCAPE KEY
    ========================================================= */

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

                closeAssessmentModal();

                return;

            }


            if (
                navbar &&
                navbar.classList.contains("active")
            ) {

                closeMenu();

            }

        }
    );


    /* =========================================================
       RESIZE
    ========================================================= */

    window.addEventListener(
        "resize",
        () => {

            /*
             * Prevent mobile menu from remaining open
             * after switching to desktop.
             */

            if (
                window.innerWidth > 900 &&
                navbar &&
                navbar.classList.contains("active")
            ) {

                closeMenu();

            }

        }
    );


    /* =========================================================
       FOOTER YEAR
    ========================================================= */

    if (currentYear) {

        currentYear.textContent =
            new Date().getFullYear();

    }


    /* =========================================================
       INITIALIZATION
    ========================================================= */

    applyTranslations();

    updateWhatsAppLink();

});
