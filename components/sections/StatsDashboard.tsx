import { landingPage } from "@/lib/mockData";

export default function StatsDashboard() {
    return (
        <section className="px-6 py-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {landingPage.hero.stats.map((stat) => (
            <div
            key={stat.label}
            className="rounded-lg bg-surface p-6 shadow-soft text-center"
            >
            <div className="text-3xl font-bold">{stat.value}</div>
            <div className="mt-1 text-sm text-textSecondary">
            {stat.label}
            </div>
            </div>
        ))}
        </div>
        </section>
    );
}
