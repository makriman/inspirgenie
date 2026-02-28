export interface NavItem {
  label: string;
  href: string;
  description?: string;
}

export interface NavGroup {
  label: string;
  items: NavItem[];
}

export const serviceNavItems: NavItem[] = [
  { label: "Customer Support", href: "/services/customer-support", description: "Email, live chat, helpdesk tickets" },
  { label: "Order Management", href: "/services/order-management", description: "Processing, fulfilment, refunds" },
  { label: "Catalogue Management", href: "/services/catalogue-management", description: "Products, variants, SEO copy" },
  { label: "Returns & Refunds", href: "/services/returns-refunds", description: "RMA, restocking, return analytics" },
  { label: "Inventory Operations", href: "/services/inventory-operations", description: "Stock monitoring, supplier coordination" },
];

export const platformNavItems: NavItem[] = [
  { label: "Shopify", href: "/platforms/shopify", description: "Shopify & Shopify Plus" },
  { label: "WooCommerce", href: "/platforms/woocommerce", description: "WooCommerce on WordPress" },
  { label: "Magento", href: "/platforms/magento", description: "Magento 2 & Adobe Commerce" },
  { label: "BigCommerce", href: "/platforms/bigcommerce", description: "BigCommerce operations" },
];

export const mainNav: NavItem[] = [
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
];

export const footerNav = {
  services: [
    { label: "Customer Support", href: "/services/customer-support" },
    { label: "Order Management", href: "/services/order-management" },
    { label: "Catalogue Management", href: "/services/catalogue-management" },
    { label: "Returns & Refunds", href: "/services/returns-refunds" },
    { label: "Inventory Operations", href: "/services/inventory-operations" },
    { label: "All Services", href: "/services" },
  ],
  platforms: [
    { label: "Shopify", href: "/platforms/shopify" },
    { label: "WooCommerce", href: "/platforms/woocommerce" },
    { label: "Magento", href: "/platforms/magento" },
    { label: "BigCommerce", href: "/platforms/bigcommerce" },
    { label: "All Platforms", href: "/platforms" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Pricing", href: "/pricing" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "Blog", href: "/blog" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
    { label: "Cookies", href: "/cookies" },
  ]
};
