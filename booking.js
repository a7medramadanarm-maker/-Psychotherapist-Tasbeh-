/* =========================================================
Booking System
Tasbeeh Mohamed - Psychotherapy Website
Supabase Version
WhatsApp: Disabled on Booking Page
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

"use strict";

/* =====================================================
   Providers
===================================================== */

const providers = {
    "tasbeeh-mohamed": {
        nameAr: "تسبيح محمد",
        nameEn: "Tasbeeh Mohamed"
    },

    "mariam-mahmoud": {
        nameAr: "مريم محمود",
        nameEn: "Mariam Mahmoud"
    }
};


/* =====================================================
   Elements
===================================================== */

const bookingForm = document.getElementById("bookingForm");

const providerName = document.getElementById("providerName");
const summaryProvider = document.getElementById("summaryProvider");

const service = document.getElementById("service");
const sessionType = document.getElementById("sessionType");

const bookingDate = document.getElementById("bookingDate");
const bookingTime = document.getElementById("bookingTime");

const clientName = document.getElementById("clientName");
const clientPhone = document.getElementById("clientPhone");
const clientEmail = document.getElementById("clientEmail");

const notes = document.getElementById("notes");
const consent = document.getElementById("consent");

const bookingSubmit = document.getElementById("bookingSubmit");
const bookingMessage = document.getElementById("bookingMessage");

const submitText = document.querySelector(".submit-text");
const submitLoading = document.querySelector(".submit-loading");

const summaryService = document.getElementById("summaryService");
const summaryDate = document.getElementById("summaryDate");
const summaryTime = document.getElementById("summaryTime");


/* =====================================================
   Get Provider
===================================================== */

const params = new URLSearchParams(
    window.location.search
);

const providerId = params.get("provider");

if (!providerId || !providers[providerId]) {
    window.location.href = "providers.html";
    return;
}

const provider = providers[providerId];


/* =====================================================
   Display Provider
===================================================== */

if (providerName) {
    providerName.textContent = provider.nameAr;
}

if (summaryProvider) {
    summaryProvider.textContent = provider.nameAr;
}


/* =====================================================
   Minimum Booking Date
===================================================== */

if (bookingDate) {

    const today = new Date();

    const year = today.getFullYear();

    const month = String(
        today.getMonth() + 1
    ).padStart(2, "0");

    const day = String(
        today.getDate()
    ).padStart(2, "0");

    bookingDate.min =
        `${year}-${month}-${day}`;
}


/* =====================================================
   Restore Selected Service
===================================================== */

const selectedService =
    sessionStorage.getItem(
        "tasbeehSelectedService"
    );

if (selectedService && service) {

    const options =
        Array.from(service.options);

    const matchingOption =
        options.find(option =>
            option.value === selectedService ||
            option.textContent.trim() === selectedService
        );

    if (matchingOption) {
        service.value = matchingOption.value;
    }

    sessionStorage.removeItem(
        "tasbeehSelectedService"
    );
}


/* =====================================================
   Update Booking Summary
===================================================== */

function updateSummary() {

    /* Service */

    if (summaryService) {

        const selectedOption =
            service?.options[
                service.selectedIndex
            ];

        summaryService.textContent =
            selectedOption &&
            selectedOption.value
                ? selectedOption.textContent.trim()
                : "—";
    }


    /* Date */

    if (summaryDate) {

        if (bookingDate?.value) {

            const date = new Date(
                bookingDate.value +
                "T00:00:00"
            );

            summaryDate.textContent =
                date.toLocaleDateString(
                    "ar-EG",
                    {
                        year: "numeric",
                        month: "long",
                        day: "numeric"
                    }
                );

        } else {

            summaryDate.textContent = "—";
        }
    }


    /* Time */

    if (summaryTime) {

        if (bookingTime?.value) {

            const [hours, minutes] =
                bookingTime.value.split(":");

            const date = new Date();

            date.setHours(
                Number(hours),
                Number(minutes)
            );

            summaryTime.textContent =
                date.toLocaleTimeString(
                    "ar-EG",
                    {
                        hour: "numeric",
                        minute: "2-digit"
                    }
                );

        } else {

            summaryTime.textContent = "—";
        }
    }
}


/* =====================================================
   Form Change Events
   IMPORTANT:
   These events ONLY update the summary.
   No WhatsApp action exists here.
===================================================== */

service?.addEventListener(
    "change",
    updateSummary
);

sessionType?.addEventListener(
    "change",
    () => {
        // Session type only changes the selected value.
        // No redirect and no WhatsApp action.
    }
);

bookingDate?.addEventListener(
    "change",
    updateSummary
);

bookingTime?.addEventListener(
    "change",
    updateSummary
);

updateSummary();


/* =====================================================
   Message Helper
===================================================== */

function showMessage(
    message,
    type = "error"
) {

    if (!bookingMessage) {
        return;
    }

    bookingMessage.textContent = message;

    bookingMessage.className =
        `booking-message ${type}`;

    bookingMessage.style.display = "block";
}


function clearMessage() {

    if (!bookingMessage) {
        return;
    }

    bookingMessage.textContent = "";

    bookingMessage.className =
        "booking-message";

    bookingMessage.style.display = "none";
}


/* =====================================================
   Loading State
===================================================== */

function setLoading(isLoading) {

    if (!bookingSubmit) {
        return;
    }

    bookingSubmit.disabled = isLoading;

    if (submitText) {
        submitText.hidden = isLoading;
    }

    if (submitLoading) {
        submitLoading.hidden = !isLoading;
    }
}


/* =====================================================
   Phone Validation
===================================================== */

function validatePhone(phone) {

    const cleanPhone =
        phone.replace(
            /[\s\-()+]/g,
            ""
        );

    return /^[0-9]{10,15}$/.test(
        cleanPhone
    );
}


/* =====================================================
   Form Validation
===================================================== */

function validateForm() {

    if (!service?.value) {

        showMessage(
            "من فضلك اختر نوع الخدمة."
        );

        service?.focus();

        return false;
    }


    if (!sessionType?.value) {

        showMessage(
            "من فضلك اختر نوع الجلسة."
        );

        sessionType?.focus();

        return false;
    }


    if (!bookingDate?.value) {

        showMessage(
            "من فضلك اختر تاريخ الجلسة."
        );

        bookingDate?.focus();

        return false;
    }


    if (!bookingTime?.value) {

        showMessage(
            "من فضلك اختر وقت الجلسة."
        );

        bookingTime?.focus();

        return false;
    }


    if (!clientName?.value.trim()) {

        showMessage(
            "من فضلك اكتب اسمك."
        );

        clientName?.focus();

        return false;
    }


    if (!clientPhone?.value.trim()) {

        showMessage(
            "من فضلك اكتب رقم الهاتف."
        );

        clientPhone?.focus();

        return false;
    }


    if (!validatePhone(clientPhone.value)) {

        showMessage(
            "من فضلك أدخل رقم هاتف صحيح."
        );

        clientPhone?.focus();

        return false;
    }


    if (
        clientEmail?.value &&
        !clientEmail.checkValidity()
    ) {

        showMessage(
            "من فضلك أدخل بريدًا إلكترونيًا صحيحًا."
        );

        clientEmail?.focus();

        return false;
    }


    if (!consent?.checked) {

        showMessage(
            "يجب الموافقة على إرسال بيانات الحجز."
        );

        consent?.focus();

        return false;
    }


    return true;
}


/* =====================================================
   Submit Booking
===================================================== */

bookingForm?.addEventListener(
    "submit",
    async (event) => {

        event.preventDefault();

        clearMessage();

        if (!validateForm()) {
            return;
        }

        setLoading(true);


        /* =================================================
           Booking Data
        ================================================= */

        const booking = {

            provider_id:
                providerId,

            provider_name:
                provider.nameAr,

            service:
                service.value,

            session_type:
                sessionType.value,

            booking_date:
                bookingDate.value,

            booking_time:
                bookingTime.value,

            client_name:
                clientName.value.trim(),

            client_phone:
                clientPhone.value.trim(),

            client_email:
                clientEmail?.value.trim() || null,

            notes:
                notes?.value.trim() || null,

            status:
                "pending"
        };


        try {

            /* =============================================
               Check Supabase
            ============================================= */

            if (
                typeof supabaseClient ===
                "undefined"
            ) {

                throw new Error(
                    "Supabase client is not available."
                );
            }


            /* =============================================
               Insert Booking
            ============================================= */

            const {
                error
            } = await supabaseClient
                .from("bookings")
                .insert([booking]);


            if (error) {

                console.error(
                    "Supabase booking error:",
                    error
                );

                throw error;
            }


            /* =============================================
               Success
            ============================================= */

            showMessage(
                "تم إرسال طلب الحجز بنجاح. سيتم التواصل معك لتأكيد الموعد.",
                "success"
            );


            /* Reset Form */

            bookingForm.reset();


            /* Restore Provider */

            if (providerName) {
                providerName.textContent =
                    provider.nameAr;
            }

            if (summaryProvider) {
                summaryProvider.textContent =
                    provider.nameAr;
            }


            updateSummary();


        } catch (error) {

            console.error(
                "Booking submission failed:",
                error
            );


            let message =
                "حدث خطأ أثناء إرسال الحجز. حاول مرة أخرى.";


            /* Supabase Permission Error */

            if (
                error &&
                error.code === "42501"
            ) {

                message =
                    "لا توجد صلاحية لإرسال الحجز. يرجى مراجعة إعدادات Supabase.";
            }


            /* Network / Configuration Error */

            if (
                error &&
                error.message ===
                "Supabase client is not available."
            ) {

                message =
                    "تعذر الاتصال بنظام الحجز. يرجى المحاولة مرة أخرى.";
            }


            showMessage(
                message,
                "error"
            );

        } finally {

            setLoading(false);
        }
    }
);

});
