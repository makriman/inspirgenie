export interface Platform {
  slug: string;
  name: string;
  description: string;
  longDescription: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  features: string[];
  apps: string[];
  color: string;
}

export const platforms: Platform[] = [
  {
    slug: "shopify",
    name: "Shopify",
    description: "Full Shopify and Shopify Plus operations support — orders, support, catalogue, and more.",
    longDescription: "From Shopify admin to Shopify Flow, your dedicated operator knows the platform inside out.",
    metaTitle: "Shopify Operations Support UK | inspir",
    metaDescription: "Hire a dedicated Shopify operator for £999/month. Orders, support, catalogue, returns — fully managed. Works with Shopify and Shopify Plus.",
    h1: "Shopify operations support for UK businesses",
    features: [
      "Order processing and refunds in Shopify admin",
      "Discount code creation and management",
      "Draft order handling",
      "Collection and product management",
      "Metafield management",
      "Shopify Payments dispute documentation",
      "Abandoned cart follow-up",
      "Shopify Plus script and flow management",
      "Multi-location inventory in Shopify",
      "Customer account management"
    ],
    apps: ["Gorgias", "Klaviyo", "ShipStation", "Loop Returns", "Recharge", "Shopify Flow", "Metafields Guru"],
    color: "#96bf48"
  },
  {
    slug: "woocommerce",
    name: "WooCommerce",
    description: "WooCommerce operations support — products, orders, plugins, and daily admin.",
    longDescription: "WooCommerce on WordPress has its own operational complexity. Your operator handles it.",
    metaTitle: "WooCommerce Operations Support UK | inspir",
    metaDescription: "Hire a dedicated WooCommerce operator for £999/month. Orders, support, products, plugins — fully managed by an experienced operator.",
    h1: "WooCommerce operations support for UK businesses",
    features: [
      "Order management in WooCommerce dashboard",
      "Product and variation management",
      "Coupon and discount setup",
      "Plugin compatibility monitoring",
      "Tax and shipping zone configuration",
      "Subscription management (WooCommerce Subscriptions)",
      "Refund and chargeback handling",
      "Customer account administration",
      "WooCommerce reports and exports",
      "Category and attribute management"
    ],
    apps: ["WooCommerce Subscriptions", "YITH Plugins", "WooCommerce Bookings", "Freshdesk", "ShipStation"],
    color: "#7f54b3"
  },
  {
    slug: "magento",
    name: "Magento",
    description: "Magento 2 and Adobe Commerce operations — complex catalogue, multi-store, and more.",
    longDescription: "Magento's power comes with operational complexity. A dedicated operator makes it manageable.",
    metaTitle: "Magento Operations Support UK | inspir",
    metaDescription: "Hire a dedicated Magento operator for £999/month. Complex catalogue, orders, customer management — handled by an experienced Magento operator.",
    h1: "Magento operations support for UK businesses",
    features: [
      "Order management in Magento admin",
      "Complex product catalogue management",
      "Configurable, grouped, and bundle product setup",
      "Attribute set management",
      "Customer group administration",
      "Multi-store operations",
      "Cache management and indexing",
      "Pricing rule management",
      "ERP data coordination",
      "Credit memo and return processing"
    ],
    apps: ["Magento 2 admin", "Adobe Commerce", "Zendesk", "ShipperHQ", "Dotdigital"],
    color: "#f26322"
  },
  {
    slug: "bigcommerce",
    name: "BigCommerce",
    description: "BigCommerce operations support — control panel, channel manager, and daily admin.",
    longDescription: "BigCommerce's enterprise features need an operator who knows the platform well.",
    metaTitle: "BigCommerce Operations Support UK | inspir",
    metaDescription: "Hire a dedicated BigCommerce operator for £999/month. Products, orders, customer support — fully managed across your BigCommerce store.",
    h1: "BigCommerce operations support for UK businesses",
    features: [
      "Order management in BigCommerce control panel",
      "Product and modifier management",
      "Custom field configuration",
      "Price list management",
      "Customer group administration",
      "Channel manager operations",
      "Multi-storefront support",
      "Bulk pricing management",
      "Refund and return processing",
      "Shipping zone configuration"
    ],
    apps: ["BigCommerce control panel", "Gorgias", "ShipStation", "Yotpo", "Channel Advisor"],
    color: "#34313f"
  }
];

export const allPlatforms = [
  ...platforms,
  { slug: "wix", name: "Wix", description: "Wix eCommerce operations support" },
  { slug: "squarespace", name: "Squarespace", description: "Squarespace Commerce operations support" },
  { slug: "prestashop", name: "PrestaShop", description: "PrestaShop operations support" },
  { slug: "opencart", name: "OpenCart", description: "OpenCart operations support" }
];
