import { landingPage } from "@/lib/mockData";

export default function HowItWorks() {
    return (
        <section className="px-6 py-16 bg-surface">
        <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">
        How it works
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
        {landingPage.howItWorks.map((step) => (
            <div
            key={step.step}
            className="rounded-lg bg-background p-6 shadow-soft"
            >
            <div className="text-primary font-semibold mb-2">
            Step {step.step}
            </div>
            <h3 className="text-xl font-semibold">
            {step.title}
            </h3>
            <p className="mt-2 text-textSecondary">
            {step.description}
            </p>
            </div>
        ))}
        </div>
        </div>
        </section>
    );
}
