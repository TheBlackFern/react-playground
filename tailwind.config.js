/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      screens: {
        xs: "360px",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        wrong: "hsl(215.3, 25%, 26.7%)",
        correct: "hsl(142.4, 71.8%, 29.2%)",
        almost: "hsl(224.3, 76.3%, 48%)",
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        tilt: {
          "0%, 50%, 100%": {
            transform: "rotate(0deg)",
          },
          "25%": {
            transform: "rotate(2deg)",
          },
          "75%": {
            transform: "rotate(-2deg)",
          },
        },
        color: {
          "12.5%": {
            "background-image": "linear-gradient(90deg, #dc2626, #a3e635)", //red-600 lime-400
            transform: "scaleX(var(--max-scale)) scaleY(var(--max-scale))",
          },
          "0%, 100%": {
            "background-image": "linear-gradient(90deg, #dc2626, #a3e635)",
            transform: "scaleX(var(--min-scale)) scaleY(var(--min-scale))",
          },
          "25%, 50%, 75%": {
            transform: "scaleX(var(--min-scale)) scaleY(var(--min-scale))",
          },
          "37.5%": {
            "background-image": "linear-gradient(90deg, #0ea5e9, #ec4899)", //cyan-500 pink-500
            transform: "scaleX(var(--max-scale)) scaleY(var(--max-scale))",
          },
          "67.5%": {
            "background-image": "linear-gradient(90deg, #d946ef, #14b8a6)", //fushia-500 teal-500
            transform: "scaleX(var(--max-scale)) scaleY(var(--max-scale))",
          },
          "87.5%": {
            "background-image": "linear-gradient(90deg, #0ea5e9, #f97316)", //sky-500 orange-500
            transform: "scaleX(var(--max-scale)) scaleY(var(--max-scale))",
          },
        },
        transparent: {
          "12.5%": {
            color: "hsl(var(--foreground))",
          },
          "17.5%, 32.5%": {
            color: "transparent",
          },
          "37.5%": {
            color: "hsl(var(--foreground))",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        tilt: "tilt 10s linear infinite",
        transparent: "transparent 10s linear infinite",
        color: "color 10s linear infinite",
      },
      spacing: {
        18: "72px",
        17: "68px",
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
        hanken: ["Hanken Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
