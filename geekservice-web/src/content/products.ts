export type ProductCategory =
  | "All Products"
  | "Computer Accessories"
  | "Printer Supplies"
  | "Appliance Parts";

export type ServiceType = "computer" | "printer" | "appliance" | "maintenance";

export type Product = {
  id: string;
  slug: string;
  title: string;
  category: Exclude<ProductCategory, "All Products">;
  imageSrc: string;
  price: number;
  salePrice?: number;
  badge?: "Sale";
  attributes: Partial<{
    productType: string;
    capacity: string;
    color: string;
    connectivity: string;
    length: string;
    material: string;
    packSize: string;
    ports: string;
    size: string;
    type: string;
  }>;
};

export const products: Product[] = [
  {
    id: "p_hp_laserjet_4101fdw",
    slug: "hp-laserjet-pro-4101fdw",
    title:
      "HP LaserJet Pro 4101fdw Wireless Multifunction Black & White Laser Printer",
    category: "Printer Supplies",
    imageSrc:
      "/products%20images/HP%20LaserJet%20Pro%204101fdw%20Wireless%20Multifunction%20Black%20%26%20White%20Laser%20Printer.png",
    price: 620.99,
    salePrice: 420.99,
    badge: "Sale",
    attributes: {
      productType: "Printer",
      connectivity: "Wireless",
      type: "Laser",
      color: "Black",
    },
  },
  {
    id: "p_hp_officejet_8139e",
    slug: "hp-officejet-pro-8139e",
    title:
      "HP OfficeJet Pro 8139e Wireless All-in-One Colour Printer Scanner Copier, Home Office",
    category: "Printer Supplies",
    imageSrc:
      "/products%20images/HP%20OfficeJet%20Pro%208139e%20Wireless%20All-in-One%20Colour%20Printer%20Scanner%20Copier,%20Home%20O%20%20Regular%20Price%20%24320.99%20Sale%20Price%20%24199.99.png",
    price: 320.99,
    salePrice: 199.99,
    badge: "Sale",
    attributes: {
      productType: "Printer",
      connectivity: "Wireless",
      type: "Inkjet",
      color: "White",
    },
  },
  {
    id: "p_appliance_power_cord",
    slug: "appliance-power-cord",
    title: "Appliance Power Cord",
    category: "Appliance Parts",
    imageSrc: "/products%20images/Appliance%20Power%20Cord.png",
    price: 28.0,
    attributes: {
      productType: "Appliance Part",
      length: "6 ft",
      color: "Black",
    },
  },
  {
    id: "p_replacement_knob",
    slug: "replacement-appliance-knob",
    title: "Replacement Appliance Knob",
    category: "Appliance Parts",
    imageSrc: "/products%20images/Replacement%20Appliance%20Knob.png",
    price: 22.0,
    attributes: {
      productType: "Appliance Part",
      material: "Plastic",
      color: "White",
    },
  },
  {
    id: "p_universal_filter",
    slug: "universal-appliance-filter",
    title: "Universal Appliance Filter",
    category: "Appliance Parts",
    imageSrc: "/products%20images/Universal%20Appliance%20Filter.png",
    price: 40.0,
    attributes: {
      productType: "Filter",
      size: "Universal",
    },
  },
  {
    id: "p_wireless_print_server",
    slug: "wireless-print-server",
    title: "Wireless Print Server",
    category: "Printer Supplies",
    imageSrc: "/products%20images/Wireless%20Print%20Server.png",
    price: 60.0,
    attributes: {
      productType: "Networking",
      connectivity: "Wireless",
      ports: "Ethernet",
    },
  },
  {
    id: "p_ink_organizer",
    slug: "ink-cartridge-organizer",
    title: "Ink Cartridge Organizer",
    category: "Printer Supplies",
    imageSrc: "/products%20images/Ink%20Cartridge%20Organizer.png",
    price: 30.0,
    attributes: {
      productType: "Organizer",
      material: "Plastic",
    },
  },
  {
    id: "p_universal_printer_paper",
    slug: "universal-printer-paper",
    title: "Universal Printer Paper",
    category: "Printer Supplies",
    imageSrc: "/products%20images/Universal%20Printer%20Paper.png",
    price: 15.0,
    attributes: {
      productType: "Paper",
      packSize: "500 sheets",
      size: "Letter",
    },
  },
  {
    id: "p_cleaning_kit",
    slug: "tech-cleaning-kit",
    title: "Tech Cleaning Kit",
    category: "Computer Accessories",
    imageSrc: "/products%20images/Tech%20Cleaning%20Kit.png",
    price: 20.0,
    attributes: {
      productType: "Accessory",
      type: "Cleaning",
    },
  },
  {
    id: "p_compact_usb_hub",
    slug: "compact-usb-hub",
    title: "Compact USB Hub",
    category: "Computer Accessories",
    imageSrc: "/products/compact-usb-hub.jpg",
    price: 35.0,
    attributes: {
      productType: "Accessory",
      ports: "USB",
      connectivity: "Wired",
      color: "Gray",
    },
  },
  {
    id: "p_gel_mouse_pad",
    slug: "ergonomic-gel-mouse-pad",
    title: "Ergonomic Gel Mouse Pad",
    category: "Computer Accessories",
    imageSrc: "/products/ergonomic-gel-mouse-pad.jpg",
    price: 25.0,
    attributes: {
      productType: "Accessory",
      material: "Gel",
      color: "Black",
    },
  },
];

export const categoryOptions: ProductCategory[] = [
  "All Products",
  "Computer Accessories",
  "Printer Supplies",
  "Appliance Parts",
];

