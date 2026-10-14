import { defineRouting } from "next-intl/routing";

/**
 * 站点支持的语言集合（唯一真相源）。
 * 必须与 src/i18n/request.ts 的 messagesMap、src/components/language-switcher.tsx
 * 的标签键、以及 src/locales/*.json 的文件名集合保持完全一致。
 */
export const locales = ["en", "es", "de", "fr"] as const;

export const routing = defineRouting({
  locales: [...locales],
  defaultLocale: "en",
  localePrefix: "always",
  localeDetection: false,
});

export type Locale = (typeof locales)[number];
