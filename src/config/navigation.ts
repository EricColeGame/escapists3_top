import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  HelpCircle,
  History,
  MessagesSquare,
  MonitorPlay,
  Users,
  Wrench,
} from "lucide-react";

export interface NavItem {
  /** 翻译键（nav 命名空间），同时是分类 slug（= content/<locale>/<slug>/ 目录名） */
  key: string;
  /** 路由路径，必须是绝对路径 */
  path: `/${string}`;
  icon: LucideIcon;
  /** 是否为 MDX 内容类型（决定是否参与 content/<locale>/<type>/ 的静态生成） */
  isContentType: boolean;
}

/**
 * 导航配置。
 * key 必须与以下五处保持一致：
 *   1. content/<locale>/<slug>/ 目录名
 *   2. src/lib/content.ts 的 GROUP_TITLES / GROUP_ORDER
 *   3. src/locales/en.json 的 nav 命名空间
 *   4. src/locales/en.json 的顶级分类键（overviewTitle / overviewDescription）
 */
export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", icon: BookOpen, isContentType: true },
  { key: "mechanics", path: "/mechanics", icon: Wrench, isContentType: true },
  { key: "multiplayer", path: "/multiplayer", icon: Users, isContentType: true },
  { key: "platforms", path: "/platforms", icon: MonitorPlay, isContentType: true },
  { key: "community", path: "/community", icon: MessagesSquare, isContentType: true },
  { key: "predecessors", path: "/predecessors", icon: History, isContentType: true },
  { key: "questions", path: "/questions", icon: HelpCircle, isContentType: true },
] satisfies readonly NavItem[];

export const CONTENT_TYPES = NAVIGATION_CONFIG.filter(
  (item) => item.isContentType,
).map((item) => item.path.replace(/^\//, ""));
