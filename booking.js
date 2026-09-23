/* =========================================================
   Booking System
   Tasbeh Mohamed
   Supabase Providers Version
========================================================= */

document.addEventListener("DOMContentLoaded", async () => {

    "use strict";


    /* =========================================================
       Elements
    ========================================================= */

    const providerName =
        document.getElementById("providerName");

    const service =
        document.getElementById("service");

    const sessionType =
        document.getElementById("sessionType");

    const bookingDate =
        document.getElementById("bookingDate");

    const bookingTime =
        document.getElementById("bookingTime");

    const clientName =
        document.getElementById("clientName");

    const clientPhone =
        document.getElementById("clientPhone");

    const clientEmail =
        document.getElementById("clientEmail");

    const notes =
        document.getElementById("notes");

    const consent =
        document.getElementById("consent");

    const bookingForm =
        document.getElementById("bookingForm");

    const bookingMessage =
        document.getElementById("bookingMessage");

    const bookingSubmit =
        document.getElementById("bookingSubmit");


    const summaryProvider =
        document.getElementById("summaryProvider");

    const summaryService =
        document.getElementById("summaryService");

    const summaryDate =
        document.getElementById("summaryDate");

    const summaryTime =
        document.getElementById("summaryTime");


    /* =========================================================
       Check Supabase
    ========================================================= */

    if (
        typeof supabaseClient === "undefined" ||
        !supabaseClient
    ) {

        showMessage(
            "تعذر الاتصال بقاعدة البيانات. تأكد من إعداد Supabase.",
            "error"
        );

        return;
    }


    /* =========================================================
       Get Provider Slug
    ========================================================= */

    const params =
        new URLSearchParams(window.location.search);

    const providerSlug =
        params.get("provider");


    if (!providerSlug) {

        window.location.href =
            "providers.html";

        return;
    }


    /* =========================================================
       Provider Variable
    ========================================================= */

    let provider = null;


    /* =========================================================
       Load Provider
    ========================================================= */

    async function loadProvider() {

        try {

            const {
                data,
                error
            } = await supabaseClient

                .from("providers")

                .select(`
                    id,
                    name_ar,
                    name_en,
                    slug,
                    role_ar,
                    role_en,
                    description_ar,
                    description_en,
                    services,
                    session_types,
                    image_url,
                    is_active
                `)

                .eq("slug", providerSlug)

                .eq("is_active", true)

                .single();


            if (error) {

                console.error(
                    "Provider loading error:",
                    error
                );

                showMessage(
                    "تعذر تحميل بيانات المختص.",
                    "error"
                );

                return false;
            }


            if (!data) {

                showMessage(
                    "المختص غير موجود أو غير متاح حاليًا.",
                    "error"
                );

                return false;
            }


            provider = data;


            /* =========================================
               Provider Name
            ========================================= */

            if (providerName) {

                providerName.textContent =
                    provider.name_ar;

            }


            if (summaryProvider) {

                summaryProvider.textContent =
                    provider.name_ar;

            }


            /* =========================================
               Load Services
            ========================================= */

            loadServices();


            /* =========================================
               Load Session Types
            ========================================= */

            loadSessionTypes();


            return true;

        } catch (error) {

            console.error(
                "Unexpected provider error:",
                error
            );

            showMessage(
                "حدث خطأ أثناء تحميل بيانات المختص.",
                "error"
            );

            return false;
        }

    }


    /* =========================================================
       Load Services
    ========================================================= */

    function loadServices() {

        if (!service) {
            return;
        }


        const services =
            Array.isArray(provider.services)
                ? provider.services
                : [];


        service.innerHTML = "";


        /* Default option */

        const defaultOption =
            document.createElement("option");

        defaultOption.value = "";

        defaultOption.textContent =
            "اختر الخدمة";

        service.appendChild(
            defaultOption
        );


        services.forEach(item => {

            const option =
                document.createElement("option");

            option.value =
                item;

            option.textContent =
                item;

            service.appendChild(
                option
            );

        });


        /* =========================================
           Restore Selected Service
        ========================================= */

        const savedService =
            sessionStorage.getItem(
                "tasbeehSelectedService"
            );


        if (
            savedService &&
            services.includes(savedService)
        ) {

            service.value =
                savedService;

        }


        updateSummary();

    }


    /* =========================================================
       Load Session Types
    ========================================================= */

    function loadSessionTypes() {

        if (!sessionType) {
            return;
        }


        const sessionTypes =
            Array.isArray(provider.session_types)
                ? provider.session_types
                : ["Online"];


        sessionType.innerHTML = "";


        const defaultOption =
            document.createElement("option");

        defaultOption.value = "";

        defaultOption.textContent =
            "اختر نوع الجلسة";

        sessionType.appendChild(
            defaultOption
        );


        sessionTypes.forEach(item => {

            const option =
                document.createElement("option");

            option.value =
                item;

            option.textContent =
                item;

            sessionType.appendChild(
                option
            );

        });


        /* Automatically select if only one type */

        if (sessionTypes.length === 1) {

            sessionType.value =
                sessionTypes[0];

        }


        updateSummary();

    }


    /* =========================================================
       Set Minimum Date
    ========================================================= */

    if (bookingDate) {

        const today =
            new Date();

        const year =
            today.getFullYear();

        const month =
            String(
                today.getMonth() + 1
            ).padStart(2, "0");

        const day =
            String(
                today.getDate()
            ).padStart(2, "0");


        const todayString =
            `${year}-${month}-${day}`;


        bookingDate.min =
            todayString;

    }


    /* =========================================================
       Update Summary
    ========================================================= */

    function updateSummary() {

        if (summaryProvider && provider) {

            summaryProvider.textContent =
                provider.name_ar;

        }


        if (summaryService) {

            summaryService.textContent =
                service?.value ||
                "—";

        }


        if (summaryDate) {

            summaryDate.textContent =
                bookingDate?.value ||
                "—";

        }


        if (summaryTime) {

            summaryTime.textContent =
                bookingTime?.value ||
                "—";

        }

    }


    /* =========================================================
       Show Message
    ========================================================= */

    function showMessage(
        message,
        type = "success"
    ) {

        if (!bookingMessage) {
            return;
        }


        bookingMessage.textContent =
            message;


        bookingMessage.className =
            "booking-message " + type;


        bookingMessage.style.display =
            "block";


        bookingMessage.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }


    /* =========================================================
       Clear Message
    ========================================================= */

    function clearMessage() {

        if (!bookingMessage) {
            return;
        }


        bookingMessage.textContent =
            "";


        bookingMessage.style.display =
            "none";

    }


    /* =========================================================
       Validate Phone
    ========================================================= */

    function isValidPhone(phone) {

        const cleanPhone =
            phone
                .replace(
                    /[\s\-()+]/g,
                    ""
                );


        return /^\d{10,15}$/.test(
            cleanPhone
        );

    }


    /* =========================================================
       Validate Email
    ========================================================= */

    function isValidEmail(email) {

        if (!email) {
            return true;
        }


        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            .test(email);

    }


    /* =========================================================
       Validate Date
    ========================================================= */

    function isValidDate(dateValue) {

        if (!dateValue) {
            return false;
        }


        const selectedDate =
            new Date(
                dateValue + "T00:00:00"
            );


        const today =
            new Date();

        today.setHours(
            0,
            0,
            0,
            0
        );


        return selectedDate >= today;

    }


    /* =========================================================
       Input Listeners
    ========================================================= */

    service?.addEventListener(
        "change",
        updateSummary
    );


    sessionType?.addEventListener(
        "change",
        updateSummary
    );


    bookingDate?.addEventListener(
        "change",
        updateSummary
    );


    bookingTime?.addEventListener(
        "change",
        updateSummary
    );


    /* =========================================================
       Save Selected Service
    ========================================================= */

    service?.addEventListener(
        "change",
        () => {

            if (service.value) {

                sessionStorage.setItem(
                    "tasbeehSelectedService",
                    service.value
                );

            }

        }
    );


    /* =========================================================
       Submit Booking
    ========================================================= */

    bookingForm?.addEventListener(
        "submit",
        async (event) => {

            event.preventDefault();


            clearMessage();


            /* =========================================
               Provider Check
            ========================================= */

            if (!provider) {

                showMessage(
                    "بيانات المختص غير متاحة.",
                    "error"
                );

                return;
            }


            /* =========================================
               Service Validation
            ========================================= */

            if (
                !service ||
                !service.value
            ) {

                showMessage(
                    "من فضلك اختر الخدمة.",
                    "error"
                );

                service?.focus();

                return;
            }


            /* =========================================
               Session Type
            ========================================= */

            if (
                !sessionType ||
                !sessionType.value
            ) {

                showMessage(
                    "من فضلك اختر نوع الجلسة.",
                    "error"
                );

                sessionType?.focus();

                return;
            }


            /* =========================================
               Date
            ========================================= */

            if (
                !bookingDate ||
                !bookingDate.value
            ) {

                showMessage(
                    "من فضلك اختر تاريخ الجلسة.",
                    "error"
                );

                bookingDate?.focus();

                return;
            }


            if (
                !isValidDate(
                    bookingDate.value
                )
            ) {

                showMessage(
                    "تاريخ الجلسة غير صحيح.",
                    "error"
                );

                bookingDate?.focus();

                return;
            }


            /* =========================================
               Time
            ========================================= */

            if (
                !bookingTime ||
                !bookingTime.value
            ) {

                showMessage(
                    "من فضلك اختر وقت الجلسة.",
                    "error"
                );

                bookingTime?.focus();

                return;
            }


            /* =========================================
               Client Name
            ========================================= */

            const name =
                clientName?.value.trim() || "";


            if (!name) {

                showMessage(
                    "من فضلك اكتب الاسم.",
                    "error"
                );

                clientName?.focus();

                return;
            }


            if (name.length < 2) {

                showMessage(
                    "من فضلك اكتب الاسم بشكل صحيح.",
                    "error"
                );

                clientName?.focus();

                return;
            }


            /* =========================================
               Phone
            ========================================= */

            const phone =
                clientPhone?.value.trim() || "";


            if (!phone) {

                showMessage(
                    "من فضلك اكتب رقم الهاتف.",
                    "error"
                );

                clientPhone?.focus();

                return;
            }


            if (!isValidPhone(phone)) {

                showMessage(
                    "من فضلك أدخل رقم هاتف صحيح.",
                    "error"
                );

                clientPhone?.focus();

                return;
            }


            /* =========================================
               Email
            ========================================= */

            const email =
                clientEmail?.value.trim() || "";


            if (!isValidEmail(email)) {

                showMessage(
                    "من فضلك أدخل بريدًا إلكترونيًا صحيحًا.",
                    "error"
                );

                clientEmail?.focus();

                return;
            }


            /* =========================================
               Consent
            ========================================= */

            if (
                consent &&
                !consent.checked
            ) {

                showMessage(
                    "يجب الموافقة على شروط الحجز.",
                    "error"
                );

                consent.focus();

                return;
            }


            /* =========================================
               Disable Button
            ========================================= */

            const originalButtonText =
                bookingSubmit?.innerHTML;


            if (bookingSubmit) {

                bookingSubmit.disabled =
                    true;

                bookingSubmit.innerHTML =
                    `
                    <i class="fa-solid fa-spinner fa-spin"></i>
                    جاري إرسال الطلب...
                    `;

            }


            /* =========================================
               Booking Object
            ========================================= */

            const booking = {

                provider_id:
                    provider.id,

                provider_name:
                    provider.name_ar,

                service:
                    service.value,

                session_type:
                    sessionType.value,

                booking_date:
                    bookingDate.value,

                booking_time:
                    bookingTime.value,

                client_name:
                    name,

                client_phone:
                    phone,

                client_email:
                    email || null,

                notes:
                    notes?.value.trim() || null,

                status:
                    "pending"

            };


            /* =========================================
               Insert Booking
            ========================================= */

            try {

                const {
                    data,
                    error
                } = await supabaseClient

                    .from("bookings")

                    .insert([
                        booking
                    ])

                    .select()
                    .single();


                if (error) {

                    console.error(
                        "Booking insert error:",
                        error
                    );


                    if (
                        error.code === "42501"
                    ) {

                        showMessage(
                            "ليس لديك صلاحية إرسال الحجز حاليًا. يجب إعداد صلاحية INSERT في Supabase.",
                            "error"
                        );

                    } else {

                        showMessage(
                            "حدث خطأ أثناء إرسال الحجز. حاول مرة أخرى.",
                            "error"
                        );

                    }


                    return;
                }


                console.log(
                    "Booking created:",
                    data
                );


                /* =========================================
                   Success
                ========================================= */

                showMessage(
                    "تم إرسال طلب الحجز بنجاح. سيتم التواصل معك لتأكيد الموعد.",
                    "success"
                );


                /* =========================================
                   Reset
                ========================================= */

                bookingForm.reset();


                /* Restore Provider */

                if (providerName) {

                    providerName.textContent =
                        provider.name_ar;

                }


                if (summaryProvider) {

                    summaryProvider.textContent =
                        provider.name_ar;

                }


                updateSummary();


            } catch (error) {

                console.error(
                    "Unexpected booking error:",
                    error
                );


                showMessage(
                    "حدث خطأ غير متوقع. حاول مرة أخرى.",
                    "error"
                );

            } finally {

                if (bookingSubmit) {

                    bookingSubmit.disabled =
                        false;

                    bookingSubmit.innerHTML =
                        originalButtonText ||
                        "إرسال طلب الحجز";

                }

            }

        }
    );


    /* =========================================================
       Start
    ========================================================= */

    const providerLoaded =
        await loadProvider();


    if (!providerLoaded) {

        if (bookingSubmit) {

            bookingSubmit.disabled =
                true;

        }

    }

});
