/**
 * Content, credentials, customer reviews, and copy for Heaven Furniture Mart.
 */

export const BRAND = {
  name: "Heaven Furniture Mart",
  tagline: "Designed. Crafted. Customized.",
  taglineBn: "পরিকল্পিত · হস্তনির্মিত · আপনার পছন্দমতো",
  address: "Agrabad Access Road (Opposite RAK Ceramics), Chattogram, Bangladesh",
  locationBn: "আগ্রাবাদ এক্সেস রোড (আরএকে সিরামিকসের বিপরীতে), চট্টগ্রাম",
  phone: "+880 1960-481983",
  phoneRaw: "+8801960481983",
  phoneDisplay: "+880 1960-481983",
  email: "heavenfurnituremart@gmail.com",
  openingHours: "Open 7 Days a Week • 10:00 AM – 8:30 PM Daily",
  founder: "Abul Kalam Bhuiyan",
  founderRole: "Managing Director & Founder",
  socials: {
    facebook: "https://facebook.com/HeavenFurnitureMart",
    instagram: "https://instagram.com/heaven_furniture_ltd",
    youtube: "https://youtube.com/@HeavenFurnitureMart",
  },
  mapUrl: "https://maps.google.com/?q=Heaven+Furniture+Mart+Agrabad+Access+Road+Chattogram",
  whatsappUrl:
    "https://wa.me/8801960481983?text=Hi%20Heaven%20Furniture,%20I%20would%20like%20to%20inquire%20about%20a%20custom%20piece.",
  whatsappHeroUrl:
    "https://wa.me/8801960481983?text=Hi%20Heaven%20Furniture,%20I'd%20like%20to%20consult%20about%20custom%20furniture.",
};

export const HERO_TRUST_RIBBON = {
  rating: "4.8",
  reviewCount: "30 Google Reviews",
  location: "Agrabad, Chattogram",
  stars: 5,
};

export const HERO_PILLS = [
  "✓ Free design consultation",
  "✓ Delivery & installation included",
  "✓ 100% Seasoned Hardwood",
];

export const MANIFESTO_PILLARS = [
  {
    number: "01",
    title: "100% CHT Seasoned Teak",
    subtitle: "খাঁটি চিটাগাং সেগুন কাঠ",
    detail:
      "Sourced strictly from mature Chittagong Hill Tracts timber, kiln-seasoned and chemically treated to endure coastal humidity and salinity for generations.",
  },
  {
    number: "02",
    title: "Mezban-Scale Dining",
    subtitle: "ঐতিহ্যবাহী মেজবানি আতিথেয়তা",
    detail:
      "From intimate duplex suites to bespoke 10-to-12-seater banquet dining tables built for grand Chittagonian family feasts.",
  },
  {
    number: "03",
    title: "Dedicated Expat Concierge",
    subtitle: "প্রবাসী পরিবারের জন্য বিশেষ সেবা",
    detail:
      "Seamless remote design consultation, video joinery updates, and turnkey white-glove installation for Non-Resident Bangladeshi homeowners.",
  },
  {
    number: "04",
    title: "No Ready-Made Panels",
    subtitle: "হাতে খোদাই করা স্থায়ী স্থাপত্য",
    detail:
      "Zero cheap engineered particle boards. Hand-carved solid wood joinery built to be passed down as family heirlooms.",
  },
];

export const BESPOKE_WORKFLOW = [
  {
    step: "01",
    title: "Discover",
    subtitle: "You Tell Us What You Need",
    description: "Share your floor plans, room dimensions, aesthetic taste, and lifestyle rituals with our senior spatial consultants.",
  },
  {
    step: "02",
    title: "Design",
    subtitle: "Heaven Designs It",
    description: "We develop millimeter-precise architectural proportions, timber grain curations, and custom 3D spatial elevations.",
  },
  {
    step: "03",
    title: "Craft",
    subtitle: "Heaven Crafts It",
    description: "Our master carpenters hand-shape seasoned Segun teak with generational mortise-and-tenon joinery and organic finishes.",
  },
  {
    step: "04",
    title: "Install",
    subtitle: "Heaven Delivers & Installs It",
    description: "Our dedicated in-house technical team provides white-glove delivery, seamless room placement, and final styling.",
  },
];

export const PROCESS_PHASES = [
  {
    phase: "01",
    title: "Free Design Consultation",
    detail: "One-on-one layout evaluation, architectural dimensions, and aesthetic alignment before cutting any timber.",
  },
  {
    phase: "02",
    title: "Proportion & Hardwood Selection",
    detail: "Hand-selection of seasoned Chittagong Segun teak, indigenous cured hardwoods, and tailored luxury fabrics.",
  },
  {
    phase: "03",
    title: "Artisanal Hand-Carving & Joinery",
    detail: "Interlocking mortise-and-tenon construction and precise CNC relief shaped by master woodcraft artisans.",
  },
  {
    phase: "04",
    title: "Delivery & White-Glove Installation",
    detail: "Direct in-house transit from our workshop to your home, seamless room placement, and final inspection.",
  },
];

export const FOUNDER_SPOTLIGHT = {
  quote:
    "At Heaven Furniture Mart, we believe furniture is more than just function; it is a reflection of lifestyle, taste, and comfort. Every piece we create is designed to bring lasting elegance into the homes of our clients.",
  author: "Abul Kalam Bhuiyan",
  role: "Managing Director & Founder",
  pedigree: [
    { value: "500+", label: "Happy Homeowners" },
    { value: "6+", label: "Years of Trust" },
    { value: "1,000+", label: "Pieces Crafted" },
  ],
};

export const MILESTONES_JOURNEY = [
  {
    year: "2020",
    title: "Founded",
    subtitle: "Founded by Abul Kalam Bhuiyan with a dedicated joinery workshop in Chattogram.",
  },
  {
    year: "2021",
    title: "Agrabad Showroom",
    subtitle: "Inaugurated our flagship showroom opposite RAK Ceramics on Agrabad Access Road.",
  },
  {
    year: "2024–25",
    title: "Furniture Fair",
    subtitle: "Exhibited showcase bespoke living and dining suites at the International Furniture Fair, Chattogram.",
  },
  {
    year: "2025",
    title: "Chamber of Commerce",
    subtitle: "Elected proud member of the Chittagong Chamber of Commerce & Industry (CCCI).",
  },
  {
    year: "2026",
    title: "BFIOA Recognition",
    subtitle: "Nationwide BFIOA recognition for master woodworking craftsmanship and bespoke design excellence.",
  },
];

export interface CustomerTestimonial {
  name: string;
  avatar: string;
  review: string;
  rating?: number;
  badge?: string;
}

export const CUSTOMER_TESTIMONIALS: CustomerTestimonial[] = [
  {
    name: "Rakibur Rahaman",
    avatar: "/assets/reviews/avatars/rakibur-rahaman.png",
    rating: 5,
    badge: "Google Verified",
    review:
      "I used to have a problem when I was working earlier, the table was never comfortable. After a lot of searching, I finally got a custom desktop table made from Heaven Mart Furniture. Honestly, now when I sit at the desk, the whole setup looks very premium and productive. The finishing, build quality, and detailing are amazing.",
  },
  {
    name: "Jefranul Rakib",
    avatar: "/assets/reviews/avatars/jefranul-rakib.png",
    rating: 5,
    badge: "Google Verified",
    review:
      "I bought a living room set from Heaven Furniture, and honestly, the whole experience was amazing. The staff was incredibly helpful without being pushy, and everything arrived right on time without a single scratch.",
  },
  {
    name: "Asraf Khan",
    avatar: "/assets/reviews/avatars/asraf-khan.png",
    rating: 5,
    badge: "Google Verified",
    review:
      "My experience with Heaven Furniture has been great! I purchased furniture for my home—both the quality and service are very good. The materials are durable, the design is beautiful and the price is reasonable. The staff is friendly and helpful.",
  },
  {
    name: "MRH",
    avatar: "/assets/reviews/avatars/mrh.png",
    rating: 5,
    badge: "Google Verified",
    review:
      "MashaAllah, very good service, all the furniture has an extraordinary aesthetic design, everyone should try buying furniture from here at least once.",
  },
  {
    name: "Md Sajjad",
    avatar: "/assets/reviews/avatars/md-sajjad.png",
    rating: 5,
    badge: "Google Verified",
    review:
      "Heaven Furniture really gives a premium feel as the name suggests. The designs are unique, completely changing the look of the room. After using it, I realized that the furniture is sturdy and comfortable. The finishing is clean and neat.",
  },
  {
    name: "Tarek Aziz",
    avatar: "/assets/reviews/avatars/tarek-aziz.png",
    rating: 5,
    badge: "Google Verified",
    review:
      "I am very satisfied with the furniture I bought from Heaven Furniture. The quality of the furniture is good, the wood is sturdy and the finishing is quite nice. The design is modern and comfortable to use.",
  },
  {
    name: "Mayeen Uddin Hasan",
    avatar: "/assets/reviews/avatars/mayeen-uddin.png",
    rating: 5,
    badge: "Google Verified",
    review:
      "Nice furniture collection, and good customer service. The staff guided us through all customization options patiently.",
  },
  {
    name: "Al Mamun",
    avatar: "/assets/reviews/avatars/al-mamun.png",
    rating: 5,
    badge: "Google Verified",
    review:
      "Product quality was good. And the staffs were very polite. Very recommended for anyone looking for authentic hardwood furniture.",
  },
  {
    name: "SM Jahiduzzaman (Babla)",
    avatar: "/assets/reviews/avatars/sm-jahiduzzaman.png",
    rating: 5,
    badge: "Google Verified",
    review:
      "Best service, best quality product. The precision in wood carving and structural strength is truly commendable.",
  },
  {
    name: "Tamim Rubaiyet",
    avatar: "/assets/reviews/avatars/tamim-rubaiyet.png",
    rating: 5,
    badge: "Google Verified",
    review:
      "This place is soo good. The behaviour was soo good and the furniture variety in their Agrabad showroom is impressive.",
  },
  {
    name: "Dil Afroz Begum",
    avatar: "/assets/reviews/avatars/dil-afroz.png",
    rating: 5,
    badge: "Google Verified",
    review:
      "Good service, staff behaviour and fast delivery. Very pleased with the overall craftsmanship and polite delivery team.",
  },
  {
    name: "Vf Qatar",
    avatar: "/assets/reviews/avatars/vf-qatar.png",
    rating: 5,
    badge: "Google Verified",
    review:
      "Visited them, good quality products they have. Everything has customization option. Got their catalog and everything. Hospitality was good.",
  },
  {
    name: "syed mohammad",
    avatar: "/assets/reviews/avatars/syed-mohammad.png",
    rating: 5,
    badge: "Google Verified",
    review:
      "Good collection 💖 Beautiful designs and genuine Chittagong Segun teak finishing that lasts.",
  },
  {
    name: "Jamshed Ul",
    avatar: "/assets/reviews/avatars/jamshed-ul.png",
    rating: 5,
    badge: "Google Verified",
    review:
      "Product was at competitive price. Satisfied with the service and on-time white-glove setup.",
  },
  {
    name: "A. K. M Rakibul Basher",
    avatar: "/assets/reviews/avatars/rakibul-basher.png",
    rating: 5,
    badge: "Google Verified",
    review:
      "Product quality bhalo. Customization is very flexible and well managed by their design craftsmen.",
  },
  {
    name: "Md Mehedi",
    avatar: "/assets/reviews/avatars/md-mehedi.png",
    rating: 5,
    badge: "Google Verified",
    review:
      "Nice furniture collection, had a good experience with them 😊 The team was very cooperative.",
  },
];

export const GOOGLE_REVIEWS = CUSTOMER_TESTIMONIALS;


