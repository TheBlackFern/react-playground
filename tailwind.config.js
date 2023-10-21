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
      rotate: {
        24: "24deg",
        16: "16deg",
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
        gradient: {
          "0%, 22%, 100%": {
            "background-position": "0% 50%",
            opacity: 0.75,
          },
          "25%, 50%, 75%": {
            opacity: 0.1,
          },
          "98%": {
            opacity: 0.1,
          },
          "28%, 47%": {
            "background-position": "33% 50%",
            opacity: 0.75,
          },
          "53%, 72%": {
            "background-position": "66% 50%",
            opacity: 0.75,
          },
          "78%, 95%": {
            "background-position": "100% 50%",
            opacity: 0.75,
          },
        },
        "gradient-button": {
          "0%, 25%, 50%, 75%, 100%": {
            transform: "scaleX(0.9) scaleY(0.9)",
            background: "#a3e635",
          },
          "2.5%, 23.5%": {
            transform: "scaleX(1) scaleY(1)",
            background: "linear-gradient(270deg, #dc2626, #a3e635)",
          },
          "27.5%, 48.5%": {
            transform: "scaleX(1) scaleY(1)",
            background: "linear-gradient(270deg, #22d3ee, #db2777)",
          },
          "52.5%, 73.5%": {
            transform: "scaleX(1) scaleY(1)",
            background: "linear-gradient(270deg, #c084fc, #0d9488)",
          },
          "77.5%, 98.5%": {
            transform: "scaleX(1) scaleY(1)",
            background: "linear-gradient(270deg, #0284c7, #fb923c)",
          },
        },
        "gradient-border": {
          "0%, 25%, 50%, 75%, 100%": {
            opacity: 0.3,
          },
          "2.5%, 21%": {
            opacity: 1,
            background: "linear-gradient(270deg, #dc2626, #a3e635)",
          },
          "27.5%, 46%": {
            opacity: 1,
            background: "linear-gradient(270deg, #22d3ee, #db2777)",
          },
          "52.5%, 71%": {
            opacity: 1,
            background: "linear-gradient(270deg, #c084fc, #0d9488)",
          },
          "77.5%, 96%": {
            opacity: 1,
            background: "linear-gradient(270deg, #0284c7, #fb923c)",
          },
        },
        transparent: {
          "0%": {
            color: "hsl(var(--foreground))",
          },
          "2.5%, 21%": {
            color: "transparent",
          },
          "25%": {
            color: "hsl(var(--foreground))",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        tilt: "tilt 10s linear infinite",
        transparent: "transparent 10s linear infinite",
        "gradient-button": "gradient-button 10s ease-in-out infinite",
        "gradient-border": "gradient-border 10s ease-in-out infinite",
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
