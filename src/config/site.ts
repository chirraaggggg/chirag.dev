import { USER } from "@/features/portfolio/data/user";
import type { NavItem } from "@/types/nav";

export const SITE_INFO = {
  name: USER.displayName,
  url: process.env.APP_URL || "https://chirags.dev",
  ogImage: USER.ogImage,
  description: USER.bio,
  keywords: USER.keywords,
};

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
};

export const MAIN_NAV: NavItem[] = [];

export const GITHUB_USERNAME = "chirraaggggg";
export const SOURCE_CODE_GITHUB_REPO = "chirraaggggg/chiragsharma.dev";
export const SOURCE_CODE_GITHUB_URL = "https://github.com/chirraaggggg/chiragsharma.dev";

export const SPONSORSHIP_URL = "https://github.com/sponsors/chirraaggggg";

export const UTM_PARAMS = {
  utm_source: "chirags.dev",
  utm_medium: "referral",
  utm_campaign: "portfolio",
};
