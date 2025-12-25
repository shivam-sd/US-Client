export type Product = {
  slug: string;
  name: string;
  price: number;
  image: string;
  features: string[];
  specs: { label: string; value: string }[];
  highlight?: boolean;
};

export const products: Product[] = [
  {
    slug: "brilson-card-classic",
    name: "Brilson Classic",
    price: 299,
    image: "/card-classic.png",
    features: ["Matte finish PVC", "Instant tap/share", "Custom profile"],
    specs: [
      { label: "Material", value: "PVC (Matte)" },
      { label: "Finish", value: "Soft-touch" },
      { label: "Connectivity", value: "NFC + QR" },
    ],
  },
  {
    slug: "brilson-card-premium",
    name: "Brilson Premium",
    price: 599,
    image: "/card-premium.png",
    features: ["Satin metal", "Laser etching", "Advanced analytics"],
    specs: [
      { label: "Material", value: "Anodized Aluminum" },
      { label: "Finish", value: "Satin" },
      { label: "Connectivity", value: "NFC + QR" },
    ],
    highlight: true,
  },
  {
    slug: "brilson-card-luxe",
    name: "Brilson Luxe",
    price: 999,
    image: "/card-Luxe.png",
    features: ["Brushed titanium", "Edge chamfer", "Priority support"],
    specs: [
      { label: "Material", value: "Titanium" },
      { label: "Finish", value: "Brushed" },
      { label: "Connectivity", value: "NFC + QR" },
    ],
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}
