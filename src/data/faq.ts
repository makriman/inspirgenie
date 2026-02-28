export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQCategory {
  title: string;
  slug: string;
  items: FAQItem[];
}

export const faqCategories: FAQCategory[] = [
  {
    title: "Getting Started & Onboarding",
    slug: "getting-started",
    items: [
      {
        question: "How quickly can I get started?",
        answer: "Two weeks from first payment to go-live. The scoping call usually happens within 48 hours of your enquiry, and we can have a contract ready within days after that. Most clients are fully operational within 14 days of signing."
      },
      {
        question: "What do I actually need to provide?",
        answer: "Access to your ecommerce platform admin, any helpdesk or support tools you use, and time for a 30-minute scoping call. That's it. If you don't have SOPs or a helpdesk set up, we handle that during onboarding at no extra charge."
      },
      {
        question: "What if I have no helpdesk or proper systems?",
        answer: "We'll set one up during onboarding. We'll recommend a helpdesk tool (you pay the tool subscription directly, we handle setup and configuration), create your first SOPs, and document your processes. Many of our clients start with nothing formal — that's normal."
      },
      {
        question: "Can I interview operators before one is assigned?",
        answer: "Not by default. We match operators based on your platform, timezone, and scope. If you have specific requirements — language, timezone, particular platform expertise — let us know during the scoping call and we'll accommodate where possible."
      },
      {
        question: "What is the vetting process for operators?",
        answer: "Every operator goes through skills testing, platform certification, communication assessment, and a trial period before joining our team. We don't hire generalists — every operator has hands-on ecommerce experience before they work with a client."
      },
      {
        question: "Is there a kickoff call before work starts?",
        answer: "Yes. After the two-week onboarding, there's a kickoff call between you, your operator, and your account contact at inspir. We walk through the agreed scope, tools, escalation rules, and reporting cadence before day one."
      },
      {
        question: "What if my processes change after onboarding?",
        answer: "SOPs are living documents. When your processes change, your operator updates the documentation. Major scope changes are discussed with your account contact to make sure coverage stays aligned with what you actually need."
      }
    ]
  },
  {
    title: "Scope & Operations",
    slug: "scope",
    items: [
      {
        question: "Is this only for customer support?",
        answer: "No. Customer support is one part of the service. Your operator handles orders, catalogue management, returns, inventory monitoring, data admin, and QA — whatever your store needs within the agreed scope."
      },
      {
        question: "What ecommerce tasks can they handle?",
        answer: "Anything operational: processing orders, handling refunds, uploading products, managing inventory, responding to customer queries, coordinating with suppliers and 3PLs, data entry, reporting, and quality checks. See our services pages for full details on each area."
      },
      {
        question: "Do you work with Shopify Plus, WooCommerce, Magento and other platforms?",
        answer: "Yes. We support Shopify (including Plus), WooCommerce, Magento, BigCommerce, Wix, Squarespace, PrestaShop, OpenCart, and others. Your operator is trained on your specific platform and its tools."
      },
      {
        question: "What apps and tools do your operators know?",
        answer: "Common helpdesks (Gorgias, Zendesk, Freshdesk, Re:amaze), shipping tools (ShipStation, Shippo), returns portals (Loop, Returnly), inventory tools, and platform-specific apps. If you use something specific, we train on it during the two-week onboarding."
      },
      {
        question: "Can they coordinate with our 3PL, suppliers, or returns portal?",
        answer: "Yes. Your operator can communicate with third parties on your behalf, following your escalation rules and brand voice. This includes supplier restocking requests, 3PL queries, and returns portal coordination."
      },
      {
        question: "Can they write product copy or update the theme?",
        answer: "Product descriptions and SEO copy, yes. Theme development or custom coding, no — that's outside scope. We handle operational content, not design or development work."
      },
      {
        question: "What is outside scope?",
        answer: "Paid advertising management, graphic design, theme development, custom coding, financial accounting, and strategic consulting. If you're unsure whether something is in scope, ask during the scoping call — we'll give you a straight answer."
      }
    ]
  },
  {
    title: "Your Operator",
    slug: "your-operator",
    items: [
      {
        question: "Where are your operators based?",
        answer: "Our operators work remotely. Every client has a named account contact at inspir, based in London, who you can reach directly for escalations, scope questions, and account reviews."
      },
      {
        question: "Can they cover weekends, evenings, or unusual hours?",
        answer: "Standard coverage is weekday business hours matched to your timezone. Weekend or extended hours can be arranged — discuss requirements during the scoping call and we'll confirm availability."
      },
      {
        question: "What happens if my operator is off sick or on holiday?",
        answer: "We have backup coverage in place. Your SOPs ensure continuity — a trained backup operator steps in using the same documented processes. Most clients don't notice the difference because the processes are fully documented."
      },
      {
        question: "How do I communicate with them day to day?",
        answer: "However you prefer. Slack, email, Teams, WhatsApp — we adapt to your workflow. Most clients use a shared Slack channel. You can also communicate through your helpdesk if that's easier."
      },
      {
        question: "Will my customers know they're not in-house?",
        answer: "No. Your operator follows your brand voice, uses your email addresses or helpdesk account, and represents your brand. To your customers, they're part of your team."
      },
      {
        question: "Can one operator handle more than one store?",
        answer: "If both stores are small enough to fit comfortably within 40 hours per week, yes. We scope this during the initial call. For larger operations or stores with high volume, we recommend a dedicated operator per store."
      },
      {
        question: "Do I need to manage them closely?",
        answer: "No. That's the point. You define the scope and SOPs (or we build them). Your operator executes independently. Weekly reports keep you informed without requiring daily oversight from you."
      }
    ]
  },
  {
    title: "Quality, Reporting & AI",
    slug: "quality",
    items: [
      {
        question: "How do I know the work is being done properly?",
        answer: "Full audit trail of all actions taken. Weekly reports covering volume, quality metrics, and escalations. Monthly review calls with your account contact. You always know what's been done, when, and by whom."
      },
      {
        question: "What happens when something goes wrong?",
        answer: "Escalation to your account contact at inspir. We investigate, document the issue, and implement corrective steps. Serious issues trigger an immediate review. You're never left to figure it out alone."
      },
      {
        question: "What does 'AI-trained' mean in practice?",
        answer: "Our operators use AI tools to work faster and more accurately: drafting responses, categorising tickets, flagging anomalies, suggesting product descriptions. They're trained to use AI as a tool, not a replacement for judgement. The human is always accountable."
      },
      {
        question: "What is the AI chatbot included free?",
        answer: "We deploy a chatbot on your storefront trained on your FAQs and store policies. It handles routine questions — delivery times, return policy, order status — 24 hours a day, seven days a week, and routes anything complex to your operator."
      },
      {
        question: "Does the chatbot replace the human operator?",
        answer: "No. The chatbot handles simple, repetitive queries so your operator can focus on complex issues, order management, and catalogue work. They complement each other — the chatbot reduces volume, the operator handles everything that needs judgement."
      },
      {
        question: "Who is my point of contact at inspir?",
        answer: "You get a named account contact in London who handles scope changes, escalations, billing, and monthly reviews. You also communicate directly with your operator for day-to-day tasks. You're never talking to a generic support inbox."
      }
    ]
  },
  {
    title: "Pricing & Payments",
    slug: "pricing",
    items: [
      {
        question: "What does £999/month get me?",
        answer: "One dedicated operator, 40 hours per week, matched to your timezone, following your SOPs and brand voice. Plus weekly reports, full audit trail, SOP documentation, and a free AI chatbot deployed on your storefront. No hidden fees."
      },
      {
        question: "What is the annual plan?",
        answer: "£9,990 per year, paid upfront. That's £1,998 less than paying monthly — effectively two months free. Annual clients also get priority operator matching and a dedicated onboarding call."
      },
      {
        question: "How does pricing work for multiple operators?",
        answer: "Each operator is £999/month. Volume pricing: 3 operators at £2,997/mo, 5 at £4,995/mo, 10 at £9,990/mo. For 10 or more, contact us for custom pricing. Annual pricing available for all tiers."
      },
      {
        question: "When do I pay and how?",
        answer: "Monthly in advance. Bank transfer or invoice is standard. Stripe or card payment available on request. All prices in GBP. Invoices are issued at the start of each billing cycle."
      },
      {
        question: "Are there any other costs?",
        answer: "No hidden fees from inspir. If we recommend a helpdesk or other tool during setup, you pay the tool subscription directly — we configure it. The only ongoing cost is your £999/month operator fee."
      },
      {
        question: "What if I want to pause or reduce operators?",
        answer: "Monthly billing, no lock-in. You can reduce or cancel at the end of any billing cycle with written notice. Annual plans can be discussed on a case-by-case basis — contact your account manager."
      },
      {
        question: "Do I get an invoice I can expense?",
        answer: "Yes. Proper B2B invoices issued for every payment, from inspir learning LTD with our registered address. Suitable for VAT reclaim if applicable."
      }
    ]
  },
  {
    title: "Contract, SLA & Security",
    slug: "contract",
    items: [
      {
        question: "What is in the contract?",
        answer: "Scope of work, service levels, response times, escalation procedures, billing terms, cancellation terms, data handling, and confidentiality. Clear, readable English — no legal traps. You'll know exactly what you're agreeing to."
      },
      {
        question: "What response times are guaranteed?",
        answer: "Defined in your SLA based on your needs. Typical: urgent tickets within 1 hour, standard queries within 4 hours during agreed business hours. Response time commitments are documented and tracked."
      },
      {
        question: "How do I cancel?",
        answer: "Written notice before your next billing date. No penalty, no exit fees. Monthly plans end at the current cycle. Annual plans — speak to your account contact and we'll work out the right approach."
      },
      {
        question: "Who owns the SOPs and work produced?",
        answer: "You do. Every SOP, process document, report, and template created for your store belongs to you. If you leave, you take everything with you."
      },
      {
        question: "How is data handled? Are you GDPR compliant?",
        answer: "Yes. We process data under a formal Data Processing Agreement included in your contract. Operators access only what's needed for their role. We comply with UK GDPR and data protection regulations. Your customers' data is handled correctly."
      },
      {
        question: "Who gets access to my store admin?",
        answer: "Only your assigned operator and, if needed for backup coverage, one designated backup operator. Access is documented and revoked immediately when the engagement ends."
      }
    ]
  }
];

export const allFAQs = faqCategories.flatMap(cat => cat.items);
