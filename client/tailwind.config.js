/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      colors: {
        navy: { DEFAULT: "#0C2340", dark: "#060F1A", light: "#1A3D6E" },
        blue: { mid: "#2563A8", light: "#3B82C4", pale: "#EBF2FA" },
        gold: { DEFAULT: "#D4A017", light: "#F5C842", pale: "#FDF6E3" },
        offwhite: "#F7F9FC",
        footer: "#0A0F1E",
        success: "#2ECC71",
        error: "#E74C3C",
        text: {
          primary: "#111827",
          secondary: "#4B5563",
          muted: "#9CA3AF",
          inverse: "#FFFFFF",
        },
        border: { light: "#E5E7EB", dark: "#1E3A5F" },
      },
      boxShadow: {
        card: "var(--shadow-card)",
        glow: "var(--shadow-glow)",
        heavy: "var(--shadow-heavy)",
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
      },
    },
  },
  plugins: [],
}
