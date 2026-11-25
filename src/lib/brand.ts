/**
 * YALO facts, taken from the public Instagram account @yalo.963 (via public snippets).
 * The live profile needs a login, so re-check these against the page before launch.
 */

export const BRAND = {
  name: "YALO",
  handle: "yalo.963",
  url: "https://www.instagram.com/yalo.963/",
  slogan: "Youth Against Living Ordinary",
  tagline: "Wear your attitude",
  /** Bio line: wholesale and retail, delivery to every governorate. */
  trade: { ar: "للجملة والمفرق", en: "Wholesale & retail" },
  delivery: { ar: "توصيل لكل المحافظات", en: "Delivery to every governorate" },
  /** Hashtags the account uses on its posts. */
  hashtags: ["#YALO", "#sportstyle", "#streetwear", "#sportwear", "#lifestyle", "#syria"],
  /** Snapshot from the search result, not live. */
  snapshot: { followers: 412, following: 433, posts: 39 },
  city: "Damascus",
  firstBranchDate: "2026-11-21",
} as const;

export type FeedTone = "gold" | "bordeaux" | "ink" | "bone";

export interface FeedPost {
  /** The caption exactly as published. */
  caption: string;
  /** Date shown on the post (YYYY-MM-DD). */
  date: string;
  tone: FeedTone;
  kind: "photo" | "text";
}

/** Captions from public snippets of the account's posts. */
export const FEED_POSTS: FeedPost[] = [
  {
    caption: "BE ready for a new and first branch in Damascus 💛",
    date: "2026-11-21",
    tone: "gold",
    kind: "photo",
  },
  {
    caption: "بوردو 🎀 زيتي 🎀 رمادي من عنا كل يوم في جديد ليناسب كل الاذواق",
    date: "2026-10-24",
    tone: "bordeaux",
    kind: "photo",
  },
  {
    caption: "First branch 💛 #sportstyle #streetwear #syria #sportwear",
    date: "2026-09-27",
    tone: "ink",
    kind: "photo",
  },
  {
    caption: "بتجنّن للبيت وللقعدة المريحة 😍 ألوان وموديلات حلوة ✨",
    date: "2026-09-13",
    tone: "bone",
    kind: "photo",
  },
];

/** Colour names from the captions. The swatch values are approximations: confirm them against the real garments. */
export const COLORWAYS = [
  { name: { ar: "بوردو", en: "Bordeaux" }, hex: "#5E1A2B" },
  { name: { ar: "زيتي", en: "Olive" }, hex: "#5B5A2E" },
  { name: { ar: "رمادي", en: "Grey" }, hex: "#8C8C89" },
] as const;

/**
 * Branches from the YALO "coming soon" post on Facebook (screenshot shared by the owner).
 * Both are announced as "soon" with no opening date.
 */
export const BRANCHES = [
  {
    id: "qassaa",
    city: { ar: "دمشق", en: "Damascus" },
    area: { ar: "القصاع", en: "Al-Qassa'a" },
    landmark: { ar: "مقابل مشفى الفرنسي", en: "Opposite French Hospital" },
  },
  {
    id: "jaramana",
    city: { ar: "جرمانا", en: "Jaramana" },
    area: { ar: "مفرق الروضة", en: "Al-Rawda junction" },
    landmark: { ar: "جرمانا", en: "Jaramana" },
  },
] as const;

/**
 * Product lines. There are no prices or photos in the public snippets, so these come from the account's
 * image descriptions and captions ("sweatpants", "sleepwear", "streetwear", "sportswear").
 */
export const PRODUCT_LINES = [
  { id: "sweatpants", name: { ar: "بناطيل رياضية", en: "Sweatpants" } },
  { id: "lounge", name: { ar: "ملابس نوم ومنزل", en: "Sleepwear & lounge" } },
  { id: "streetwear", name: { ar: "ستريت وير", en: "Streetwear" } },
  { id: "sportswear", name: { ar: "سبورت وير", en: "Sportswear" } },
] as const;
