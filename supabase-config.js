/* =========================================================
   Supabase Configuration
   Tasbeeh Mohamed - Psychotherapy Website
========================================================= */

const SUPABASE_URL = "https://bnpbomnvnlsqczpglozr.supabase.co";

const SUPABASE_ANON_KEY =
    "sb_publishable_F0reAKhZOEmx3d3ELJ1xnw_jRSRkONX";

const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
);
