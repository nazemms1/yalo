/**
 * Product catalog built only from the photos the shop owner shared.
 * Names and descriptions describe what is visible in the photos. Prices are not known yet: sales go through Instagram.
 * Colour hex values are approximations taken from the photos, not from fabric swatches.
 */

export type CategoryId = "sweatpants" | "lounge" | "streetwear" | "sportswear";

export const CATEGORIES: { id: CategoryId; name: { ar: string; en: string } }[] = [
  { id: "sweatpants", name: { ar: "بناطيل رياضية", en: "Sweatpants" } },
  { id: "lounge", name: { ar: "ملابس نوم ومنزل", en: "Lounge" } },
  { id: "streetwear", name: { ar: "ستريت وير", en: "Streetwear" } },
  { id: "sportswear", name: { ar: "سبورت وير", en: "Sportswear" } },
];

export interface ProductColor {
  name: { ar: string; en: string };
  hex: string;
}

export interface Product {
  slug: string;
  category: CategoryId;
  name: { ar: string; en: string };
  summary: { ar: string; en: string };
  points: { ar: string; en: string }[];
  colors: ProductColor[];
  photos: { src: string; alt: { ar: string; en: string } }[];
}

export const PRODUCTS: Product[] = [
  {
    slug: "cream-stand-collar-set",
    category: "sportswear",
    name: { ar: "طقم كريمي بياقة عالية", en: "Cream stand-collar set" },
    summary: {
      ar: "جاكيت بسحّاب وياقة عالية مع بنطال واسع، وخطوط خياطة واضحة على الكتف والصدر.",
      en: "Zip jacket with a stand collar and wide-leg pants, with clear seam lines on the shoulder and chest.",
    },
    points: [
      { ar: "سحّاب أمامي وياقة عالية", en: "Front zip and stand collar" },
      { ar: "جيوب جانبية وأكمام مضلعة", en: "Side pockets and ribbed cuffs" },
      { ar: "بنطال واسع بخط مستقيم", en: "Wide straight-leg pants" },
    ],
    colors: [
      { name: { ar: "كريمي", en: "Cream" }, hex: "#EDE4D0" },
      { name: { ar: "بني", en: "Brown" }, hex: "#6B4A3A" },
      { name: { ar: "أسود", en: "Black" }, hex: "#2A2A2A" },
    ],
    photos: [
      { src: "/yalo/products/cream-1.jpg", alt: { ar: "طقم كريمي على عارضة", en: "Cream set on a model" } },
      { src: "/yalo/products/cream-2.jpg", alt: { ar: "ألوان الطقم على الشماعات", en: "Set colours on hangers" } },
      { src: "/yalo/products/cream-3.jpg", alt: { ar: "الطقم الكريمي من الخلف", en: "Cream set from the back" } },
    ],
  },
  {
    slug: "hoodie-set",
    category: "streetwear",
    name: { ar: "طقم هودي وبنطال", en: "Hoodie and sweatpants set" },
    summary: {
      ar: "هودي بقبعة وجيب كنغورو مع بنطال رياضي واسع، وشعار YALO مطرّز على الصدر.",
      en: "Hoodie with a drawstring hood and kangaroo pocket, with wide sweatpants and a small embroidered YALO logo on the chest.",
    },
    points: [
      { ar: "قبعة برباط وجيب كنغورو", en: "Drawstring hood and kangaroo pocket" },
      { ar: "شعار YALO مطرّز", en: "Embroidered YALO logo" },
      { ar: "بنطال رياضي واسع", en: "Wide sweatpants" },
    ],
    colors: [
      { name: { ar: "رمادي فحمي", en: "Charcoal" }, hex: "#4A4A48" },
      { name: { ar: "أخضر مزرق", en: "Teal" }, hex: "#2F5A57" },
      { name: { ar: "عنابي", en: "Burgundy" }, hex: "#6E1F33" },
    ],
    photos: [{ src: "/yalo/products/hoodie-1.jpg", alt: { ar: "ثلاث عارضات بالهودي والبنطال", en: "Three models in hoodie sets" } }],
  },
  {
    slug: "velvet-zip-set",
    category: "lounge",
    name: { ar: "طقم مخمل بسحّاب", en: "Velvet zip set" },
    summary: {
      ar: "طقم مخملي بسحّاب وياقة عالية، برباط خصر قابل للشد، وخطوط جانبية على الكم والبنطال.",
      en: "Velvet zip set with a stand collar, an adjustable drawstring waist, and side stripes on the sleeves and pants.",
    },
    points: [
      { ar: "قماش مخملي ناعم", en: "Soft velvet fabric" },
      { ar: "رباط خصر قابل للشد", en: "Adjustable drawstring waist" },
      { ar: "خطوط جانبية على الكم والبنطال", en: "Side stripes on sleeves and pants" },
    ],
    colors: [
      { name: { ar: "بني", en: "Brown" }, hex: "#5E3B2C" },
      { name: { ar: "زيتي فاتح", en: "Sage" }, hex: "#A9B8A0" },
      { name: { ar: "عنابي", en: "Burgundy" }, hex: "#6E1F33" },
    ],
    photos: [
      { src: "/yalo/products/velvet-1.jpg", alt: { ar: "أطقام مخملية على عارضة", en: "Velvet sets on a rack" } },
      { src: "/yalo/products/velvet-2.jpg", alt: { ar: "تفاصيل الطقم المخملي الأخضر", en: "Sage velvet set details" } },
    ],
  },
];

export const getProduct = (slug: string) => PRODUCTS.find((product) => product.slug === slug);

/** Branch photos are not shared yet. Add the storefront image path here when it is available. */
export const BRANCH_PHOTOS: Record<string, string | undefined> = {
  qassaa: undefined,
  jaramana: undefined,
};
