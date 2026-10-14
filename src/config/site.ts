export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "The Escapists 3 Wiki",
  shortName: "The Escapists 3",
  logoText: "E3",
  tagline: "Escape Guides, Crafting, Items & Prison Routes",
  description: "Explore The Escapists 3 Wiki for prison escape guides, crafting recipes, items, weapons, prison tips, and co-op strategies for Team17's upcoming 3D sandbox game.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://escapists3.top",
  supportEmail: "support@escapists3.top",
  gameUrl: "https://store.steampowered.com/app/3602260/The_Escapists_3/",
  heroVideoId: "F7djxrVO-Tg", // The Escapists 3 — Official Announcement Trailer (Team17)
  social: {
    discord: "https://discord.gg/team17",
    youtube: "https://www.youtube.com/@Team17Ltd",
    twitter: "https://x.com/Team17",
  },
  locales: ["en", "es", "de", "fr"],
  defaultLocale: "en",
};
