/**
 * All visible copy, in Arabic (default) and English.
 * Facts come from the @yalo.963 bio and captions. Lines marked DRAFT are new brand copy written for this page: review them before launch.
 */

const ar = {
  nav: {
    manifesto: "فلسفتنا",
    colors: "الألوان",
    products: "المنتجات",
    instagram: "إنستغرام",
    branch: "الفروع",
    trade: "الجملة والمفرق",
    switchTo: "English",
    order: "تسوّقي الآن",
    follow: "تابعنا",
    open: "القائمة",
    close: "إغلاق",
  },
  hero: {
    eyebrow: "أول فرع في دمشق · قريباً",
    lead: "ملابس ستريت وير ورياضية للشباب، تتجدد ألوانها وموديلاتها كل يوم.",
    ctaPrimary: "تابعنا على إنستغرام",
    ctaSecondary: "الفرع الأول في دمشق",
    scroll: "مرّر",
    tagline: "ارتدِ شخصيتك",
  },
  marquee: [
    "Youth Against Living Ordinary",
    "ارتدِ شخصيتك",
    "#sportstyle",
    "#streetwear",
    "#sportwear",
    "#syria",
    "أول فرع في دمشق",
  ],
  manifesto: {
    eyebrow: "فلسفتنا",
    title: "ضد أن نعيش حياة عادية.",
    words: ["YOUTH", "AGAINST", "LIVING", "ORDINARY"],
    // DRAFT
    body: "YALO اختصار لـ Youth Against Living Ordinary: جيلٌ يرفض أن يكون عادياً، ويعبّر عن نفسه بما يرتديه.",
  },
  colors: {
    eyebrow: "الألوان",
    title: "جديد كل يوم.",
    lead: "ألوان وموديلات تتجدد باستمرار لتناسب كل الأذواق.",
    hint: "مرّر المؤشر لتكشف اللون",
  },
  feed: {
    eyebrow: "إنستغرام",
    title: "من حسابنا مباشرة.",
    lead: "آخر ما نشرناه، كما كُتب تماماً.",
    follow: "تابع @yalo.963",
    photo: "صورة",
  },
  products: {
    eyebrow: "المنتجات",
    title: "ما نقدّمه.",
    lead: "من منشوراتنا: بناطيل رياضية، وملابس نوم ومنزل، وستريت وير وسبورت وير.",
    source: "من منشورات الحساب",
    cta: "شاهد المنتجات على إنستغرام",
  },
  branch: {
    eyebrow: "الفروع",
    title: "قريباً في دمشق وجرمانا.",
    lead: "نفتح فروعنا قريباً. تابعنا لتكون أول من يعرف موعد الافتتاح.",
    soon: "قريباً",
    address: "العنوان",
    cta: "تابعنا لتعرف الموعد",
  },
  trade: {
    eyebrow: "للجملة والمفرق",
    title: "توصيل لكل المحافظات.",
    lead: "للتجار والأفراد: راسلنا مباشرة عبر إنستغرام للحصول على تفاصيل الجملة والمفرق والتوصيل.",
    items: ["للجملة", "للمفرق", "توصيل لكل المحافظات"],
    cta: "راسلنا على إنستغرام",
  },
  detail: {
    back: "كل المنتجات",
    colors: "الألوان المتوفرة",
    priceTitle: "السعر والطلب",
    priceBody: "أسعار الأطقم والتوفر تُرسل عبر إنستغرام. راسلنا وسنرد عليك مباشرة.",
    cta: "اطلب عبر إنستغرام",
  },
  footer: {
    tagline: "ارتدِ شخصيتك.",
    follow: "تابعنا",
    rights: "جميع الحقوق محفوظة",
    back: "إلى الأعلى",
  },
  seoTitle: "YALO | ارتدِ شخصيتك",
  seoDescription:
    "YALO: ملابس ستريت وير وسبورت وير وأطقم بيتية من سوريا. تصفّح المنتجات والألوان، وتابعنا على إنستغرام @yalo.963.",
};

const en: typeof ar = {
  nav: {
    manifesto: "Manifesto",
    colors: "Colors",
    products: "Products",
    instagram: "Instagram",
    branch: "Branches",
    trade: "Wholesale",
    switchTo: "العربية",
    order: "Shop now",
    follow: "Follow us",
    open: "Menu",
    close: "Close",
  },
  hero: {
    eyebrow: "First branch in Damascus · coming soon",
    lead: "Streetwear and sportswear for the youth, with colors and models that change every day.",
    ctaPrimary: "Follow on Instagram",
    ctaSecondary: "The first branch in Damascus",
    scroll: "Scroll",
    tagline: "Wear your attitude",
  },
  marquee: [
    "Youth Against Living Ordinary",
    "Wear your attitude",
    "#sportstyle",
    "#streetwear",
    "#sportwear",
    "#syria",
    "First branch in Damascus",
  ],
  manifesto: {
    eyebrow: "Manifesto",
    title: "Against living an ordinary life.",
    words: ["YOUTH", "AGAINST", "LIVING", "ORDINARY"],
    // DRAFT
    body: "YALO stands for Youth Against Living Ordinary: a generation that refuses to blend in, and says who it is through what it wears.",
  },
  colors: {
    eyebrow: "Colors",
    title: "Something new every day.",
    lead: "Colors and models that keep changing, to suit every taste.",
    hint: "Hover to reveal a colorway",
  },
  feed: {
    eyebrow: "Instagram",
    title: "Straight from our account.",
    lead: "Our latest posts, exactly as they were written.",
    follow: "Follow @yalo.963",
    photo: "Photo",
  },
  products: {
    eyebrow: "Products",
    title: "What we offer.",
    lead: "From our posts: sweatpants, sleepwear and lounge wear, streetwear and sportswear.",
    source: "From the account's posts",
    cta: "See the products on Instagram",
  },
  branch: {
    eyebrow: "Branches",
    title: "Coming soon to Damascus and Jaramana.",
    lead: "We are opening new branches soon. Follow us to be the first to know the opening date.",
    soon: "Coming soon",
    address: "Location",
    cta: "Follow for the opening date",
  },
  trade: {
    eyebrow: "Wholesale & retail",
    title: "Delivery to every governorate.",
    lead: "For shops and individuals: message us on Instagram for wholesale, retail and delivery details.",
    items: ["Wholesale", "Retail", "Delivery to every governorate"],
    cta: "Message us on Instagram",
  },
  detail: {
    back: "All products",
    colors: "Available colours",
    priceTitle: "Price & ordering",
    priceBody: "Set prices and availability are shared on Instagram. Message us and we will reply directly.",
    cta: "Order on Instagram",
  },
  footer: {
    tagline: "Wear your attitude.",
    follow: "Follow us",
    rights: "All rights reserved",
    back: "Back to top",
  },
  seoTitle: "YALO | Wear your attitude",
  seoDescription:
    "YALO: streetwear, sportswear and lounge sets from Syria. Browse products and colours, and follow @yalo.963 on Instagram.",
};

export const COPY = { ar, en } as const;
export type Lang = keyof typeof COPY;
export type Copy = typeof ar;
