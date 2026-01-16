import { landingPage } from "@/lib/mockData";

export default function HackathonGrid() {
    return (
        <section className="px-6 py-16 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">
        Featured Hackathons
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {landingPage.featuredHackathons.map((hack) => (
            <div
            key={hack.id}
            className="rounded-lg bg-surface p-6 shadow-soft flex flex-col justify-between"
            >
            <div>
            <h3 className="text-xl font-semibold">
            {hack.name}
            </h3>

            <div className="mt-3 flex flex-wrap gap-2">
            {hack.tags.map((tag) => (
                <span
                key={tag}
                className="text-xs rounded-md bg-accent/20 text-primary px-2 py-1"
                >
                {tag}
                </span>
            ))}
            </div>
            </div>

            <div className="mt-6 flex items-center justify-between">
            <span className="text-sm text-textSecondary">
            {hack.openSlots} slots open
            </span>
            <a
            href="/signup"
            className="text-sm font-medium text-primary hover:underline"
            >
            Join →
            </a>
            </div>
            </div>
        ))}
        </div>
        </section>
    );
}
