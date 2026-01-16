"use client";

import { useEffect, useState } from "react";
import { landingPage } from "@/lib/mockData";

export default function Testimonials() {
    const testimonials = landingPage.testimonials;
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const id = setInterval(() => {
            setIndex((i) => (i + 1) % testimonials.length);
        }, 4000);
        return () => clearInterval(id);
    }, [testimonials.length]);

    const t = testimonials[index];

    return (
        <section className="px-6 py-20 bg-surface">
        <div className="max-w-3xl mx-auto text-center">
        <blockquote className="text-xl font-medium">
        “{t.quote}”
        </blockquote>
        <div className="mt-4 text-sm text-textSecondary">
        {t.name} — {t.role}
        </div>
        </div>
        </section>
    );
}
