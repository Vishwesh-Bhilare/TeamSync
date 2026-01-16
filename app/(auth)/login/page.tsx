"use client";

import { supabaseBrowser } from "@/lib/supabase/browser";
import { Button } from "@/components/ui/Button";
import { useState } from "react";

export default function LoginPage() {
    const supabase = supabaseBrowser();
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("");

    const loginWithEmail = async () => {
        setLoading(true);
        await supabase.auth.signInWithOtp({
            email,
            options: {
                emailRedirectTo: `${location.origin}/callback`,
            },
        });
        setLoading(false);
    };

    const loginWithGithub = async () => {
        setLoading(true);
        await supabase.auth.signInWithOAuth({
            provider: "github",
            options: {
                redirectTo: `${location.origin}/callback`,
            },
        });
        setLoading(false);
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-6">
        <div className="w-full max-w-md rounded-lg bg-surface p-8 shadow-soft">
        <h1 className="text-2xl font-bold">Log in</h1>

        <input
        type="email"
        placeholder="you@example.com"
        className="mt-6 w-full rounded-md border px-4 py-2"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />

        <Button
        className="mt-4 w-full"
        loading={loading}
        onClick={loginWithEmail}
        >
        Continue with Email
        </Button>

        <div className="my-6 text-center text-sm text-textSecondary">
        or
        </div>

        <Button
        variant="secondary"
        className="w-full"
        onClick={loginWithGithub}
        >
        Continue with GitHub
        </Button>
        </div>
        </div>
    );
}
