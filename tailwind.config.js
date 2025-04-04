/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Palette de couleurs pastel
        indigo: {
          50: "#eef2ff",
          100: "#e0e7ff",
          200: "#c7d2fe",
          300: "#a5b4fc",
          400: "#818cf8",
          500: "#6366f1",
          600: "#4f46e5",
          700: "#4338ca",
          800: "#3730a3",
          900: "#312e81",
          950: "#1e1b4b",
        },
        primary: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#b9e6fe",
          300: "#7cd4fd",
          400: "#36bffa",
          500: "#0ca5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
        },
        // Nouvelles couleurs pastel pour les catégories
        category: {
          food: "#9ED5C5",       // Vert pastel
          entertainment: "#BCABD9", // Violet pastel
          transportation: "#FFB996", // Orange pastel
          shopping: "#FDE4CF",   // Beige pastel
          health: "#FFA1A1",     // Rouge pastel
          other: "#A7C5EB",      // Bleu pastel
        },
        // Mode sombre
        dark: {
          background: "#1E1E2E",
          card: "#2A2A3C",
          border: "#393950",
          text: "#CDD6F4",
          muted: "#989AB3",
        },
        // Couleurs fonctionnelles pour l'application
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: "var(--card)",
        "card-foreground": "var(--card-foreground)",
        popover: "var(--popover)",
        "popover-foreground": "var(--popover-foreground)",
        muted: "var(--muted)",
        "muted-foreground": "var(--muted-foreground)",
        accent: "var(--accent)",
        "accent-foreground": "var(--accent-foreground)",
        destructive: "var(--destructive)",
        "destructive-foreground": "var(--destructive-foreground)",
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
      },
      borderColor: {
        DEFAULT: "var(--border)"
      },
      backgroundColor: {
        DEFAULT: "var(--background)"
      },
    },
  },
  plugins: [],
};