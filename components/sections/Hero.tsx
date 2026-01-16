import { landingPage } from "@/lib/mockData";

export default function Hero() {
    const { headline, subheadline, stats } = landingPage.hero;

    return (
        <section className="px-6 py-16 max-w-7xl mx-auto">
        <div className="max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
        {headline}
        </h1>
        <p className="mt-4 text-lg text-textSecondary">
        {subheadline}
        </p>

        <div className="mt-8">
        <a
        href="/signup"
        className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-white font-medium shadow-soft hover:bg-secondary transition"
        >
        Get Started
        </a>
        </div>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat) => (
            <div
            key={stat.label}
            className="rounded-md bg-surface p-4 shadow-soft"
            >
            <div className="text-2xl font-semibold">{stat.value}</div>
            <div className="text-sm text-textSecondary">
            {stat.label}
            </div>
            </div>
        ))}
        </div>
        </section>
    );
}
