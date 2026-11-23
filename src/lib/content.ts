export const problems = [
  {
    title: "Scattered tools",
    description:
      "Teams jump between spreadsheets, chats, and half-built systems. We replace the patchwork with one reliable workflow.",
  },
  {
    title: "Slow operations",
    description:
      "Orders, inventory, and field work stall when software cannot keep up. We build platforms that match how your team actually works.",
  },
  {
    title: "No clear visibility",
    description:
      "Leaders cannot see revenue, stock, or delivery status in one place. We turn day-to-day activity into dashboards you can act on.",
  },
] as const;

export type ProductModule = {
  title: string;
  items: string[];
};

export type Product = {
  id: string;
  name: string;
  category: string;
  summary: string;
  description: string;
  features: string[];
  stack: string[];
  image: string;
  gallery: string[];
  imageAlt: string;
  modules?: ProductModule[];
  liveUrl?: string;
  featured?: boolean;
};

export const products: Product[] = [
  {
    id: "restaurant-pos",
    name: "Restaurant POS Admin",
    category: "Restaurant software",
    featured: true,
    summary:
      "Kitchen-live ops, revenue analytics, inventory alerts, and menu performance — built for busy floors.",
    description:
      "A modern restaurant operations terminal for managers and kitchen teams. Monitor revenue, guests, table time, and top sellers in real time, with inventory expiry alerts and full module coverage from orders to staff reports.",
    features: [
      "Service overview with daily, weekly, and monthly filters",
      "Live kitchen status and revenue trend charts",
      "Inventory expiry alerts to reduce waste",
      "Top sellers with visual performance bars",
      "Orders, menu, dining, vendors, staff, and reports",
    ],
    stack: ["Next.js", "Real-time UI", "POS workflows", "Analytics"],
    image: "/products/restaurant-pos.jpg",
    gallery: ["/products/restaurant-pos.jpg"],
    imageAlt: "Restaurant POS Admin dashboard preview",
    liveUrl: "https://restaurant-pos-alpha-seven.vercel.app/",
  },
  {
    id: "utility-store",
    name: "Utility Store System",
    category: "Utility store software",
    featured: true,
    summary:
      "Retail / utility store admin with inventory, purchasing, products, low-stock alerts, and sales analytics.",
    description:
      "A complete utility and retail store platform (Little Store). Manage products, warehouses, stock transfers, vendors, purchasing, and a live dashboard with revenue, orders, and category breakdown — plus ERP Copilot AI support.",
    features: [
      "Products, categories, warehouses, and stock movements",
      "Purchasing, vendors, and purchase workflows",
      "Low-stock alerts and product catalog tools",
      "Sales trend and category breakdown dashboards",
      "ERP Copilot for operational questions",
    ],
    modules: [
      {
        title: "Inventory & catalog",
        items: [
          "Categories, warehouses, products, stock transfers",
          "Stock movements and low-stock visibility",
          "Add / view products from the dashboard",
        ],
      },
      {
        title: "Purchasing",
        items: ["Vendors and purchasing modules", "Purchase order tracking"],
      },
      {
        title: "Analytics & AI",
        items: [
          "Revenue, orders, and product KPIs",
          "Sales trend and category charts",
          "ERP Copilot assistant",
        ],
      },
    ],
    stack: ["Next.js", "Retail ERP", "Inventory", "AI Copilot"],
    image: "/products/utility-store.jpg",
    gallery: ["/products/utility-store.jpg"],
    imageAlt: "Utility Store System admin preview",
  },
  {
    id: "field-sales-app",
    name: "Field Sales Onboarding & Visits",
    category: "Location tracking app",
    featured: true,
    summary:
      "All-in-one field sales app for 1-tap check-in, shop onboarding, and visit tracking on the go.",
    description:
      "A mobile field sales platform that supercharges onboarding and visits. Reps verify location with one tap, add new shops in minutes, visit onboarded merchants, and review past activity — built for teams that live on the road.",
    features: [
      "1-tap GPS check-in to verify location and start the day",
      "Onboard new shops and merchants in minutes",
      "Visit shop flow to verify already onboarded merchants",
      "Daily status when no shops are onboarded yet",
      "View history of past visits and shops",
    ],
    modules: [
      {
        title: "Check-in & location",
        items: [
          "One-tap check-in with location pin verification",
          "Start-your-day attendance for field reps",
        ],
      },
      {
        title: "Shop onboarding & visits",
        items: [
          "Onboard new shop — add a new merchant fast",
          "Visit shop — verify an onboarded merchant",
          "Empty-state guidance when no shops are onboarded yet",
        ],
      },
      {
        title: "History",
        items: [
          "Past visits & shops timeline",
          "Quick access from the home dashboard",
        ],
      },
    ],
    stack: ["Mobile app", "GPS / location", "Field sales", "Onboarding"],
    image: "/products/field-sales.jpg",
    gallery: ["/products/field-sales.jpg"],
    imageAlt: "Field Sales Onboarding & Visits app preview",
  },
  {
    id: "erp-software",
    name: "ERP Software Suite",
    category: "ERP software",
    summary:
      "Executive ERP dashboard for revenue, expenses, pending orders, invoices, inventory, and approvals.",
    description:
      "A full ERP-style operations suite with Magnetic executive views — revenue and expense KPIs, pending orders, approvals, inventory, purchase orders, quotations, sales orders, invoices, payments, and customers.",
    features: [
      "Real-time revenue, expenses, and pending order KPIs",
      "Inventory, purchase orders, quotations, sales orders",
      "Invoices, payments, customers, and user access",
      "Export reports and urgent approval workflows",
      "Support and settings for multi-user teams",
    ],
    stack: ["Next.js", "ERP", "Finance", "Operations"],
    image: "/products/erp-suite.jpg",
    gallery: ["/products/erp-suite.jpg", "/products/utility-store.jpg"],
    imageAlt: "ERP Software Suite dashboard preview",
  },
  {
    id: "business-automation",
    name: "Complete Business Automation",
    category: "ERP & automation",
    summary:
      "Inventory, purchasing, WhatsApp AI sales, double-entry accounting, and analytics in one system.",
    description:
      "An end-to-end business automation platform for retail and wholesale teams. Run multi-location inventory, purchase & sales, WhatsApp AI ordering, full double-entry accounting, and AI-powered reports — on mobile, tablet, and desktop.",
    features: [
      "Multi-warehouse inventory with variants, barcode, batch & expiry",
      "Purchase orders, GRN, landed cost, and vendor payments",
      "WhatsApp AI sales agent with auto invoice & stock deduction",
      "Full double-entry accounting with P&L and balance sheet",
      "Roles, activity log, Urdu/English, barcode & thermal print",
    ],
    modules: [
      {
        title: "Inventory management",
        items: [
          "Unlimited products, categories, brands & variants",
          "Barcode, SKU, batch, expiry, multi-price support",
          "Multi-location stock, transfers, adjustments & ledger",
          "Low-stock alerts, reorder levels, negative-stock prevention",
        ],
      },
      {
        title: "Purchase management",
        items: [
          "PO creation, purchase invoice & GRN",
          "Landed cost (freight + tax), purchase returns",
          "Vendor history, due tracking, WhatsApp PO send",
        ],
      },
      {
        title: "Sales + WhatsApp AI",
        items: [
          "AI agent for price/stock queries and COD orders",
          "Auto invoice PDF on WhatsApp + stock deduction",
          "POS invoicing, price lists, discounts, returns",
          "Customer ledger, groups & WhatsApp broadcasts",
        ],
      },
      {
        title: "Accounting & reports",
        items: [
          "Auto journals, chart of accounts, trial balance",
          "P&L, balance sheet, cashbook, aging & tax reports",
          "Sales/inventory analytics + AI WhatsApp reports",
        ],
      },
    ],
    stack: ["Next.js", "ERP", "WhatsApp Cloud API", "AI Copilot", "Accounting"],
    image: "/products/utility-store.jpg",
    gallery: ["/products/utility-store.jpg", "/products/erp-suite.jpg"],
    imageAlt: "Complete Business Automation system preview",
  },
];

export const aiSolutions = [
  {
    title: "WhatsApp sales agents",
    description:
      "Assistants that quote stock, take orders, and send invoices inside the channels your customers already use.",
  },
  {
    title: "ERP & ops copilots",
    description:
      "Ask inventory, sales, and daily business questions in plain language — answers grounded in your live system data.",
  },
  {
    title: "Document & search intelligence",
    description:
      "Extract, classify, and find information across invoices, catalogs, and ops records without manual digging.",
  },
  {
    title: "AI inside your products",
    description:
      "Practical AI features embedded in POS, ERP, and custom platforms — measured by time saved, not demos.",
  },
] as const;

export const approachSteps = [
  {
    step: "01",
    title: "Understand the problem",
    description:
      "We map the bottleneck, talk to the people who feel it daily, and define what success looks like in numbers.",
  },
  {
    step: "02",
    title: "Build the solution",
    description:
      "Custom software, integrations, and interfaces ship as one system — usable, secure, and ready for real load.",
  },
  {
    step: "03",
    title: "Improve with proof",
    description:
      "We measure results, tighten what works, and expand only when the solution is holding up in production.",
  },
] as const;
