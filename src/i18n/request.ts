import de from "@/locales/de.json";
import en from "@/locales/en.json";
import es from "@/locales/es.json";
import fr from "@/locales/fr.json";
import { hasLocale } from "next-intl";
import { getRequestConfig } from "next-intl/server";
import { type Locale, routing } from "./routing";

type Messages = typeof en;

/**
 * 构建期静态打包的语言文件列表（next-intl 需要在编译期解析 import）。
 * 必须与 routing.locales 完全一致，文件末尾的编译期断言会强制校验。
 */
const PACKED_LOCALES = ["en", "es", "de", "fr"] as const;

const messagesMap: Record<
  (typeof PACKED_LOCALES)[number],
  Partial<Messages>
> = {
  en,
  es,
  de,
  fr,
};

// 编译期校验：静态打包语言与 routing.locales 必须互为子集（缺失或多余都会报错）
type Exact<A, B> = [A] extends [B] ? ([B] extends [A] ? true : never) : never;
const packedLocalesMatchRouting: Exact<
  (typeof PACKED_LOCALES)[number],
  Locale
> = true;

function deepMerge<T>(base: T, override: Partial<T>): T {
  if (
    typeof base !== "object" ||
    base === null ||
    typeof override !== "object" ||
    override === null
  ) {
    return (override as T) ?? base;
  }

  if (Array.isArray(base)) {
    return (Array.isArray(override) ? override : base) as T;
  }

  const result: Record<string, unknown> = {
    ...(base as Record<string, unknown>),
  };

  for (const key of Object.keys(override as Record<string, unknown>)) {
    const baseValue = (base as Record<string, unknown>)[key];
    const overrideValue = (override as Record<string, unknown>)[key];
    if (overrideValue === undefined) continue;
    result[key] = deepMerge(baseValue as never, overrideValue as never);
  }

  return result as T;
}

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  const messages = deepMerge(en, messagesMap[locale] ?? {});

  return { locale, messages };
});
