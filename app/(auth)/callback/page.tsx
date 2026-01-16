import { supabaseServer } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export default async function CallbackPage() {
    const supabase = supabaseServer();
    const {
        data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
        redirect("/login");
    }

    // TODO: upsert user profile in DB
    // legacy Firebase UID mapping handled here if exists

    redirect("/dashboard");
}
