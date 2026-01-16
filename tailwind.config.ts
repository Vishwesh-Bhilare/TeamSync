import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./lib/**/*.{ts,tsx}",
    ],
    theme: {
        extend: {
            screens: {
                xs: "475px",
            },
            colors: {
                primary: "#3B82F6",
                secondary: "#1E40AF",
                accent: "#60A5FA",
                background: "#FFFFFF",
                surface: "#F8FAFC",
                textPrimary: "#1F2937",
                textSecondary: "#6B7280",
                disabled: "#9CA3AF",
            },
            boxShadow: {
                soft: "0 4px 6px -1px rgba(0,0,0,0.1)",
            },
            borderRadius: {
                sm: "6px",
                md: "8px",
                lg: "12px",
                xl: "16px",
            },
            fontFamily: {
                sans: ["Inter", "system-ui", "sans-serif"],
            },
        },
    },
    plugins: [],
};
export default config;
