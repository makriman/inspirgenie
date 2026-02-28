export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: string;
  bullets: string[];
  metaTitle: string;
  metaDescription: string;
  h1: string;
  keywords: string[];
}

export const services: Service[] = [
  {
    slug: "customer-support",
    title: "Ecommerce Customer Support",
    shortTitle: "Customer Support",
    description: "Email, live chat, helpdesk tickets — every channel, fully managed. WISMO queries, returns, order edits, and escalations handled from day one.",
    icon: "💬",
    bullets: [
      "WISMO and order status queries",
      "Returns, exchanges, and refund requests",
      "Live chat and email management",
      "Helpdesk ticket triage and resolution",
      "Escalation handling and documentation",
      "Post-resolution follow-ups",
      "Brand voice maintained across all responses"
    ],
    metaTitle: "Ecommerce Customer Support, Managed | inspir",
    metaDescription: "Outsource your ecommerce customer support to a dedicated operator. Email, live chat, helpdesk tickets — all channels, all platforms.",
    h1: "Ecommerce customer support, fully managed",
    keywords: ["ecommerce customer support outsourcing", "ecommerce helpdesk support UK", "outsource customer service ecommerce"]
  },
  {
    slug: "order-management",
    title: "Order Management",
    shortTitle: "Order Management",
    description: "Order processing, fulfilment coordination, refunds, and cancellations. Your operator handles every order from placement to resolution.",
    icon: "📦",
    bullets: [
      "Order processing and confirmation",
      "Fulfilment coordination with 3PLs",
      "Refunds and cancellation handling",
      "Payment discrepancy investigation",
      "Chargeback documentation",
      "Draft order management",
      "Wholesale and B2B order handling"
    ],
    metaTitle: "Ecommerce Order Management Support | inspir",
    metaDescription: "From order processing to refund handling and chargeback documentation. Your dedicated operator manages it all.",
    h1: "Order processing and fulfilment, handled",
    keywords: ["ecommerce order management", "order processing outsourcing", "ecommerce fulfilment support"]
  },
  {
    slug: "catalogue-management",
    title: "Catalogue Management",
    shortTitle: "Catalogue Management",
    description: "Product uploads, edits, variants, and collection organisation. SEO-optimised titles, descriptions, and image QA — done properly.",
    icon: "🗂️",
    bullets: [
      "New product uploads and edits",
      "Variant and option management",
      "SEO title and description optimisation",
      "Image upload and quality assurance",
      "Collection and category organisation",
      "Product tagging and metadata",
      "Bulk CSV import and data cleaning"
    ],
    metaTitle: "Product Catalogue Management Service | inspir",
    metaDescription: "Product uploads, variant management, SEO titles, image QA, collection organisation — your catalogue, managed daily.",
    h1: "Product uploads, edits, and catalogue ops",
    keywords: ["product listing service ecommerce", "catalogue management ecommerce", "product upload service"]
  },
  {
    slug: "returns-refunds",
    title: "Returns & Refunds Management",
    shortTitle: "Returns & Refunds",
    description: "RMA creation, refund processing, and restocking coordination. Every return handled per your policy, documented and tracked.",
    icon: "↩️",
    bullets: [
      "RMA creation and tracking",
      "Refund processing per your policy",
      "Restocking coordination",
      "Return reason logging and reporting",
      "Exchange management",
      "Returns portal management (Loop, Returnly)",
      "Fraud flag review and escalation"
    ],
    metaTitle: "Ecommerce Returns & Refunds Management | inspir",
    metaDescription: "RMA creation, refund processing, restocking coordination, and return analytics. Your returns process, fully managed.",
    h1: "Returns, refunds, and RMA management",
    keywords: ["ecommerce returns management", "refund processing service", "RMA management ecommerce"]
  },
  {
    slug: "inventory-operations",
    title: "Inventory Operations",
    shortTitle: "Inventory Ops",
    description: "Stock monitoring, inventory audits, and supplier coordination. Never oversell. Never run out. Always know what's where.",
    icon: "📊",
    bullets: [
      "Stock level monitoring and alerts",
      "Inventory audits and reconciliation",
      "Supplier restocking coordination",
      "Multi-location inventory management",
      "Low stock threshold management",
      "Inventory discrepancy investigation",
      "Purchase order tracking"
    ],
    metaTitle: "Ecommerce Inventory Operations Support | inspir",
    metaDescription: "Stock level monitoring, inventory audits, supplier coordination, and multi-location management. Never oversell or run out.",
    h1: "Inventory monitoring and supplier coordination",
    keywords: ["ecommerce inventory management support", "stock management service", "inventory operations outsourcing"]
  }
];

export const additionalServices = [
  {
    title: "Data & Admin",
    icon: "📋",
    description: "Metafield management, product tagging, data cleanup, spreadsheet and CSV work."
  },
  {
    title: "Quality Assurance",
    icon: "✅",
    description: "Listing QA, order accuracy checks, policy compliance, and audit trail maintenance."
  },
  {
    title: "AI Chatbot (Free)",
    icon: "🤖",
    description: "Deployed on your storefront. Trained on your FAQs. Handles routine queries 24/7."
  }
];
