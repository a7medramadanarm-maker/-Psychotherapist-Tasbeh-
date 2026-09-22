document.addEventListener("DOMContentLoaded", () => {

    "use strict";


    /* =========================================
       PROVIDERS
    ========================================= */

    const providers = {

        "tasbeeh-mohamed": {
            name: "Tasbeeh Mohamed"
        },

        "mariam-mahmoud": {
            name: "Mariam Mahmoud"
        }

    };


    /* =========================================
       GET PROVIDER FROM URL
    ========================================= */

    const params =
        new URLSearchParams(
            window.location.search
        );

    const providerId =
        params.get("provider");

    const provider =
        providers[providerId];


    if (!provider) {

        window.location.href =
            "providers.html";

        return;
    }


    /* =========================================
       SHOW PROVIDER
    ========================================= */

    document.getElementById(
        "providerName"
    ).textContent = provider.name;


    document.getElementById(
        "summaryProvider"
    ).textContent = provider.name;


    /* =========================================
       FORM
    ========================================= */

    const form =
        document.getElementById(
            "bookingForm"
        );


    form.addEventListener(
        "submit",
        async (event) => {

            event.preventDefault();


            const booking = {

                provider_id:
                    providerId,

                provider_name:
                    provider.name,

                service:
                    document.getElementById(
                        "service"
                    ).value,

                session_type:
                    document.getElementById(
                        "sessionType"
                    ).value,

                booking_date:
                    document.getElementById(
                        "bookingDate"
                    ).value,

                booking_time:
                    document.getElementById(
                        "bookingTime"
                    ).value,

                client_name:
                    document.getElementById(
                        "clientName"
                    ).value.trim(),

                client_phone:
                    document.getElementById(
                        "clientPhone"
                    ).value.trim(),

                client_email:
                    document.getElementById(
                        "clientEmail"
                    ).value.trim(),

                notes:
                    document.getElementById(
                        "notes"
                    ).value.trim(),

                status:
                    "pending"

            };


            console.log(
                "Booking ready for Supabase:",
                booking
            );


            /*
             * هنا بالضبط هنضع Supabase insert
             *
             * await supabase
             *     .from("bookings")
             *     .insert([booking]);
             */


            document.getElementById(
                "bookingMessage"
            ).textContent =
                "تم تجهيز طلب الحجز بنجاح.";


            document.getElementById(
                "bookingMessage"
            ).classList.add("success");

        }
    );

});
