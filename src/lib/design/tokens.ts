export const tokens = {
  "color": {
    "brand": {
      "primary": "#22c55e",
      "primaryDark": "#166534",
      "primaryLight": "#dcfce7",
      "accent": "#0ea5e9"
    },
    "neutral": {
      "white": "#ffffff",
      "black": "#111827"
    },
    "gray": {
      "50": "#f9fafb",
      "100": "#f3f4f6",
      "200": "#e5e7eb",
      "300": "#d1d5db",
      "400": "#9ca3af",
      "500": "#6b7280",
      "600": "#4b5563",
      "700": "#374151",
      "800": "#1f2937",
      "900": "#111827"
    },
    "feedback": {
      "success": "#16a34a",
      "warning": "#f59e0b",
      "error": "#dc2626",
      "info": "#2563eb"
    }
  },
  "elevation": {
    "none": "none",
    "sm": "0px 1px 2px rgba(15, 23, 42, 0.08)",
    "md": "0px 4px 6px rgba(15, 23, 42, 0.12)",
    "lg": "0px 10px 15px rgba(15, 23, 42, 0.16)"
  },
  "radius": {
    "none": "0px",
    "sm": "4px",
    "md": "8px",
    "lg": "12px",
    "xl": "16px",
    "pill": "9999px"
  },
  "spacing": {
    "scale": {
      "0": "0px",
      "1": "4px",
      "2": "8px",
      "3": "12px",
      "4": "16px",
      "5": "20px",
      "6": "24px",
      "8": "32px",
      "10": "40px",
      "12": "48px",
      "16": "64px",
      "20": "80px"
    }
  },
  "typography": {
    "fontFamily": {
      "sans": "'Inter', 'Helvetica Neue', Arial, sans-serif",
      "mono": "'Fira Code', 'SFMono-Regular', Menlo, monospace"
    },
    "fontWeight": {
      "regular": "400",
      "medium": "500",
      "semibold": "600",
      "bold": "700"
    },
    "fontSize": {
      "xs": "0.75rem",
      "sm": "0.875rem",
      "md": "1rem",
      "lg": "1.125rem",
      "xl": "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem"
    },
    "lineHeight": {
      "tight": "1.25",
      "snug": "1.375",
      "normal": "1.5",
      "relaxed": "1.625"
    }
  }
} as const;
export type Tokens = typeof tokens;
