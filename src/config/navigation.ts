import type { LucideIcon } from "lucide-react";

export interface NavItem {
  /** 翻译键（nav 命名空间） */
  key: string;
  /** 路由路径 */
  path: string;
  icon: LucideIcon;
  /** 是否为 MDX 内容类型（决定是否参与 content/<locale>/<type>/ 的静态生成） */
  isContentType: boolean;
}

/**
 * 导航配置（本阶段已清空，等待后续阶段按新主题重建）。
 * 保留 NavItem 契约：SiteHeader 等消费者读取的 key / path 字段继续存在。
 */
export const NAVIGATION_CONFIG: readonly NavItem[] = [];

export const CONTENT_TYPES = NAVIGATION_CONFIG.filter(
  (item) => item.isContentType,
).map((item) => item.path.replace(/^\//, ""));
