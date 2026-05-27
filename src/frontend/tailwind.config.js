import typography from "@tailwindcss/typography";
import containerQueries from "@tailwindcss/container-queries";
import animate from "tailwindcss-animate";
import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["index.html", "src/**/*.{js,ts,jsx,tsx,html,css}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "oklch(var(--border))",
        input: "oklch(var(--input))",
        ring: "oklch(var(--ring) / <alpha-value>)",
        background: "oklch(var(--background))",
        foreground: "oklch(var(--foreground))",
        primary: {
          DEFAULT: "oklch(var(--primary) / <alpha-value>)",
          foreground: "oklch(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "oklch(var(--secondary) / <alpha-value>)",
          foreground: "oklch(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "oklch(var(--destructive) / <alpha-value>)",
          foreground: "oklch(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "oklch(var(--muted) / <alpha-value>)",
          foreground: "oklch(var(--muted-foreground) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "oklch(var(--accent) / <alpha-value>)",
          foreground: "oklch(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "oklch(var(--popover))",
          foreground: "oklch(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "oklch(var(--card))",
          foreground: "oklch(var(--card-foreground))",
        },
        chart: {
          1: "oklch(var(--chart-1))",
          2: "oklch(var(--chart-2))",
          3: "oklch(var(--chart-3))",
          4: "oklch(var(--chart-4))",
          5: "oklch(var(--chart-5))",
        },
        sidebar: {
          DEFAULT: "oklch(var(--sidebar))",
          foreground: "oklch(var(--sidebar-foreground))",
          primary: "oklch(var(--sidebar-primary))",
          "primary-foreground": "oklch(var(--sidebar-primary-foreground))",
          accent: "oklch(var(--sidebar-accent))",
          "accent-foreground": "oklch(var(--sidebar-accent-foreground))",
          border: "oklch(var(--sidebar-border))",
          ring: "oklch(var(--sidebar-ring))",
        },
        /* DWELL Brand Colors */
        teal: {
          50: '#E6F7FD',
          100: '#CCF0FB',
          400: '#00B4E6',
          500: '#009FD4',
          600: '#007FA9',
        },
        gold: {
          400: '#D4B483',
          500: '#C9A96E',
          600: '#B8924A',
        },
        charcoal: {
          700: '#2D3142',
          800: '#1E2135',
        },
        emerald: {
          500: '#10B981',
        },
      },
      fontFamily: {
        sans: ['Space Grotesk', 'Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        xs: "0 1px 2px 0 rgba(0,0,0,0.05)",
        glass: "0 4px 24px rgba(0,159,212,0.08), 0 1px 4px rgba(0,0,0,0.06)",
        'teal-glow': "0 0 24px rgba(0,159,212,0.25), 0 4px 16px rgba(0,159,212,0.15)",
        'gold-glow': "0 0 24px rgba(201,169,110,0.3), 0 4px 16px rgba(201,169,110,0.15)",
        card: "0 2px 16px rgba(45,49,66,0.08), 0 1px 4px rgba(45,49,66,0.04)",
        'card-hover': "0 8px 32px rgba(45,49,66,0.12), 0 2px 8px rgba(45,49,66,0.08)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fadeInUp": {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fadeInLeft": {
          from: { opacity: "0", transform: "translateX(-24px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        "fadeInRight": {
          from: { opacity: "0", transform: "translateX(24px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "scrollX": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "tealPulse": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "fade-in-left": "fadeInLeft 0.6s ease-out forwards",
        "fade-in-right": "fadeInRight 0.6s ease-out forwards",
        "float": "float 3s ease-in-out infinite",
        "shimmer": "shimmer 2.5s infinite",
        "scroll-x": "scrollX 30s linear infinite",
        "teal-pulse": "tealPulse 2s ease-in-out infinite",
      },
    },
  },
  plugins: [
    typography,
    containerQueries,
    animate,
    plugin(function({ addUtilities }) {
      addUtilities({
        '.glass-card': {
          background: 'rgba(255,255,255,0.72)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: '1px solid rgba(0,159,212,0.12)',
          boxShadow: '0 4px 24px rgba(0,159,212,0.08)',
        },
        '.glass-navbar': {
          background: 'rgba(255,255,255,0.88)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(0,159,212,0.1)',
          boxShadow: '0 2px 16px rgba(45,49,66,0.06)',
        },
        '.btn-teal': {
          background: 'linear-gradient(135deg, #009FD4, #00B4E6)',
          color: '#ffffff',
          fontWeight: '600',
          padding: '0.75rem 1.75rem',
          borderRadius: '8px',
          transition: 'all 0.3s ease',
          cursor: 'pointer',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '48px',
          lineHeight: '1.2',
          letterSpacing: '0.01em',
          '&:hover': {
            boxShadow: '0 0 28px rgba(0,159,212,0.4)',
            transform: 'translateY(-2px)',
          },
        },
        '.btn-gold': {
          background: 'linear-gradient(135deg, #C9A96E, #D4B483)',
          color: '#1E2135',
          fontWeight: '600',
          padding: '0.75rem 1.75rem',
          borderRadius: '8px',
          transition: 'all 0.3s ease',
          cursor: 'pointer',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '48px',
          '&:hover': {
            boxShadow: '0 0 28px rgba(201,169,110,0.4)',
            transform: 'translateY(-2px)',
          },
        },
        '.btn-outline-teal': {
          background: 'transparent',
          color: '#009FD4',
          border: '1.5px solid #009FD4',
          fontWeight: '600',
          padding: '0.75rem 1.75rem',
          borderRadius: '8px',
          transition: 'all 0.3s ease',
          cursor: 'pointer',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '48px',
          '&:hover': {
            background: 'rgba(0,159,212,0.08)',
            boxShadow: '0 0 16px rgba(0,159,212,0.2)',
          },
        },
      });
    }),
  ],
};
