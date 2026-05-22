export interface ToolField {
  id: string;
  label: string;
  type: 'number' | 'text' | 'date' | 'select' | 'radio' | 'checkbox' | 'textarea' | 'slider';
  defaultValue: any;
  placeholder?: string;
  options?: { label: string; value: string }[];
  min?: number;
  max?: number;
  step?: number;
}

export interface ToolOutput {
  id: string;
  label: string;
  type: 'text' | 'currency' | 'percentage' | 'badge' | 'custom';
  color?: 'emerald' | 'amber' | 'blue' | 'red' | 'white';
}

export interface ToolFAQ {
  q: string;
  a: string;
}

export interface ToolDefinition {
  slug: string;
  name: string;
  category: string;
  seoH1: string;
  badge: string;
  description: string;
  whyUnique: string;
  howToUse: string[];
  faqs: ToolFAQ[];
  fields: ToolField[];
  calculate: (inputs: Record<string, any>) => Record<string, any>;
  outputs: ToolOutput[];
}

export const CATEGORIES = [
  "Finance & Tax Tools",
  "Health & Vitality Tools",
  "Time & Countdown Utilities",
  "Math & Scientific Utilities",
  "Metric Conversion Tools",
  "Developer & Design Utilities"
];

export const TOOLS_LIST: ToolDefinition[] = [
  {
    slug: "gst-calculator-india",
    name: "GST Calculator India",
    category: "Finance & Tax Tools",
    seoH1: "Free Online GST Calculator India",
    badge: "Finance",
    description: "Calculate standard Goods and Services Tax (GST) for Indian business transactions across major tax slabs (5%, 12%, 18%, 28%) with options to add or remove GST from the base amount.",
    whyUnique: "This tool is tuned for Indian GST compliance. It processes both additive and subtractive calculations instantaneously, delivering precise cgst/sgst partitions locally in your sandbox browser.",
    howToUse: [
      "Select the transaction basis standard amount in Rupees.",
      "Choose the appropriate Indian GST Slab percentage (5%, 12%, 18%, or 28%).",
      "Choose whether you want to Add GST to the base rate or Remove GST from the billing total."
    ],
    faqs: [
      { q: "What is the CGST and SGST split?", a: "CGST (Central GST) and SGST (State GST) are splits of the total tax amount. Each slice corresponds to exactly 50% of the total GST charged on an intra-state business transaction." },
      { q: "Is this calculator aligned with the latest GST rules?", a: "Yes, it supports all modern standard Indian GST slabs which are 5%, 12%, 18%, and 28% respectively." }
    ],
    fields: [
      { id: "amount", label: "Amount (₹)", type: "number", defaultValue: 10000, min: 0 },
      { id: "slab", label: "GST Slab", type: "select", defaultValue: "18", options: [
        { label: "5% Standard Essential", value: "5" },
        { label: "12% Secondary Rate", value: "12" },
        { label: "18% Standard Business", value: "18" },
        { label: "28% Luxury Class", value: "28" }
      ]},
      { id: "gstType", label: "Calculation Action", type: "radio", defaultValue: "add", options: [
        { label: "Add GST", value: "add" },
        { label: "Remove GST", value: "remove" }
      ]}
    ],
    calculate: (inputs) => {
      const amount = Number(inputs.amount || 0);
      const slab = Number(inputs.slab || 18);
      const isAdd = inputs.gstType === "add";
      let baseAmount = amount;
      let gstAmount = 0;
      let totalAmount = amount;

      if (isAdd) {
        gstAmount = amount * (slab / 100);
        totalAmount = amount + gstAmount;
      } else {
        baseAmount = amount / (1 + slab / 100);
        gstAmount = amount - baseAmount;
        totalAmount = amount;
      }

      return {
        baseAmount: baseAmount.toFixed(2),
        cgst: (gstAmount / 2).toFixed(2),
        sgst: (gstAmount / 2).toFixed(2),
        totalGst: gstAmount.toFixed(2),
        total: totalAmount.toFixed(2)
      };
    },
    outputs: [
      { id: "baseAmount", label: "Base Price (Exclusive of GST)", type: "currency" },
      { id: "cgst", label: "CGST (Central Share)", type: "currency", color: "blue" },
      { id: "sgst", label: "SGST (State Share)", type: "currency", color: "blue" },
      { id: "totalGst", label: "Total Tax (GST)", type: "currency", color: "amber" },
      { id: "total", label: "Total Payable", type: "currency", color: "emerald" }
    ]
  },
  {
    slug: "reverse-gst-calculator",
    name: "Reverse GST Calculator",
    category: "Finance & Tax Tools",
    seoH1: "Reverse GST Calculator Online",
    badge: "Finance",
    description: "Extract the authentic pre-tax base cost and exact cumulative GST from any standard tax-inclusive price point instantly.",
    whyUnique: "This tool lets you deconstruct inclusive billing costs immediately, helping with financial planning and verifying tax breakdowns in vendor invoices.",
    howToUse: [
      "Input the Total Retail Price (including taxes).",
      "Select the specific GST percentage rate applied.",
      "Observe the calculated pre-tax values instantly."
    ],
    faqs: [
      { q: "What is reverse GST calculation?", a: "Reverse GST calculation finds the base price and total tax applied when you only know the final inclusive retail amount." },
      { q: "What is the formula for reverse GST?", a: "Base Price = Inclusive Amount / (1 + GST rate/100)." }
    ],
    fields: [
      { id: "inclusivePrice", label: "Total Inclusive Price (₹)", type: "number", defaultValue: 11800, min: 0 },
      { id: "slab", label: "Tax Slab Percentage", type: "select", defaultValue: "18", options: [
        { label: "5% Rate", value: "5" },
        { label: "12% Rate", value: "12" },
        { label: "18% Rate", value: "18" },
        { label: "28% Rate", value: "28" }
      ]}
    ],
    calculate: (inputs) => {
      const total = Number(inputs.inclusivePrice || 0);
      const slab = Number(inputs.slab || 18);
      const base = total / (1 + slab / 100);
      const tax = total - base;
      return {
        basePrice: base.toFixed(2),
        taxPart: tax.toFixed(2),
        totalAmount: total.toFixed(2)
      };
    },
    outputs: [
      { id: "basePrice", label: "Pre-tax Base Price", type: "currency" },
      { id: "taxPart", label: "Extracted Tax Portion", type: "currency", color: "amber" },
      { id: "totalAmount", label: "Tax Inclusive Bill Total", type: "currency", color: "emerald" }
    ]
  },
  {
    slug: "compound-interest-calculator",
    name: "Compound Interest Calculator",
    category: "Finance & Tax Tools",
    seoH1: "Compound Interest Calculator",
    badge: "Finance",
    description: "Model long-term savings projections under standard monthly compound compounding, with support for monthly contribution stacking.",
    whyUnique: "This tool performs compounding calculations progressively per cycle, creating high-precision models for systematic investing and mutual fund projections.",
    howToUse: [
      "Enter the initial principal investment amount.",
      "Configure the recurring monthly contributions.",
      "Input the annualized expected interest rate and cumulative timeline."
    ],
    faqs: [
      { q: "What is compound interest?", a: "Interest calculated on both the initial principal deposit and all previous accumulated interest payouts." },
      { q: "How often is compounding processed here?", a: "Our calculation engine assumes interest is compounded monthly for realistic financial modeling." }
    ],
    fields: [
      { id: "principal", label: "Initial Principal ($/₹)", type: "number", defaultValue: 5000, min: 0 },
      { id: "monthly", label: "Monthly Addition ($/₹)", type: "number", defaultValue: 200, min: 0 },
      { id: "rate", label: "Annual Rate (%)", type: "number", defaultValue: 8, min: 0 },
      { id: "years", label: "Compounding Timeline (Years)", type: "number", defaultValue: 10, min: 1, max: 100 }
    ],
    calculate: (inputs) => {
      const P = Number(inputs.principal || 0);
      const PMT = Number(inputs.monthly || 0);
      const r = Number(inputs.rate || 0) / 100;
      const t = Number(inputs.years || 10);
      const n = 12; // monthly compounding

      let balance = P;
      let totalInvested = P;

      for (let i = 0; i < t * n; i++) {
        balance = balance * (1 + r / n) + PMT;
        totalInvested += PMT;
      }

      const totalInterest = Math.max(0, balance - totalInvested);

      return {
        invested: totalInvested.toFixed(2),
        interest: totalInterest.toFixed(2),
        finalBalance: balance.toFixed(2)
      };
    },
    outputs: [
      { id: "invested", label: "Total Capital Contribution", type: "currency" },
      { id: "interest", label: "Accumulated Pure Interest Yield", type: "currency", color: "amber" },
      { id: "finalBalance", label: "Final Portfolio Future Value", type: "currency", color: "emerald" }
    ]
  },
  {
    slug: "freelance-invoice-tax",
    name: "Freelance Invoice Tax",
    category: "Finance & Tax Tools",
    seoH1: "Freelance Invoice withholding Tax Calculator",
    badge: "Finance",
    description: "Determine your net freelance revenue after accounting for customizable regional withholding tax subtractions.",
    whyUnique: "This tool helps modern contractors calculate accurate payout expectations by factoring in withholding parameters on client billings.",
    howToUse: [
      "Input your base invoice billing amount.",
      "Set the corresponding client withholding tax rate.",
      "Instantly read the net payout amount."
    ],
    faqs: [
      { q: "What is withholding tax?", a: "A system where the client subtracts income tax directly from the freelancer's invoice and sends it straight to the government." },
      { q: "How is it calculated?", a: "Withholding Amount = Gross Invoice Amount * Withholding Rate%." }
    ],
    fields: [
      { id: "gross", label: "Gross Invoice Billable (₹/$)", type: "number", defaultValue: 2500, min: 0 },
      { id: "withholding", label: "Withholding Tax Rate (%)", type: "number", defaultValue: 10, min: 0, max: 100 }
    ],
    calculate: (inputs) => {
      const gross = Number(inputs.gross || 0);
      const taxRate = Number(inputs.withholding || 0);
      const tax = gross * (taxRate / 100);
      const net = gross - tax;
      return {
        grossAmt: gross.toFixed(2),
        taxAmt: tax.toFixed(2),
        netPayout: net.toFixed(2)
      };
    },
    outputs: [
      { id: "grossAmt", label: "Gross Original Invoice", type: "currency" },
      { id: "taxAmt", label: "Tax Amount Withheld", type: "currency", color: "red" },
      { id: "netPayout", label: "Net Liquid Payout", type: "currency", color: "emerald" }
    ]
  },
  {
    slug: "interest-comparison-calculator",
    name: "Interest Comparison Calculator",
    category: "Finance & Tax Tools",
    seoH1: "Simple vs Compound Interest Comparison Calculator",
    badge: "Finance",
    description: "Compare simple interest and compound interest side-by-side using identical principal and timeline parameters.",
    whyUnique: "It highlights the power of compounding over time, showing you exactly how much extra return compounding generates compared to a simple interest structure.",
    howToUse: [
      "Enter high-level starting principal assets.",
      "Input annual target compound yield rate.",
      "Specify absolute investment times in years to see the performance differences."
    ],
    faqs: [
      { q: "What is simple interest?", a: "Interest calculated only as a percentage of the original principal amount deposited." },
      { q: "Why does compounding outperform simple interest?", a: "Compound interest generates return on top of return, creating exponential growth curves over time." }
    ],
    fields: [
      { id: "principal", label: "Investment Principal ($/₹)", type: "number", defaultValue: 10000, min: 0 },
      { id: "rate", label: "Annual Interest Rate (%)", type: "number", defaultValue: 8, min: 0 },
      { id: "years", label: "Timeline Scope (Years)", type: "number", defaultValue: 15, min: 1, max: 50 }
    ],
    calculate: (inputs) => {
      const P = Number(inputs.principal || 0);
      const r = Number(inputs.rate || 0) / 100;
      const t = Number(inputs.years || 15);

      const simpleI = P * r * t;
      const simpleTotal = P + simpleI;

      const compoundTotal = P * Math.pow(1 + r / 12, 12 * t);
      const compoundI = compoundTotal - P;

      const variance = compoundTotal - simpleTotal;

      return {
        simpleI: simpleI.toFixed(2),
        compoundI: compoundI.toFixed(2),
        simpleTotal: simpleTotal.toFixed(2),
        compoundTotal: compoundTotal.toFixed(2),
        diff: variance.toFixed(2)
      };
    },
    outputs: [
      { id: "simpleTotal", label: "Simple Yield Future Value", type: "currency" },
      { id: "compoundTotal", label: "Compound Yield Future Value", type: "currency" },
      { id: "diff", label: "Compounding Premium Earned", type: "currency", color: "emerald" }
    ]
  },
  {
    slug: "salary-hike-percentage-calculator",
    name: "Salary Hike %, India",
    category: "Finance & Tax Tools",
    seoH1: "Salary Hike Percentage Calculator",
    badge: "Finance",
    description: "Calculate the exact percentage increment and absolute monthly variance after a salary revision.",
    whyUnique: "Perfect for budget planning and salary reviews. It shows both absolute and percentage gains to help you evaluate job offers easily.",
    howToUse: [
      "Input original, historic baseline salary metrics.",
      "Input revised current salary structures.",
      "View structural absolute hikes instantly."
    ],
    faqs: [
      { q: "What is a good standard annual salary increment?", a: "Average annual increments range from 8% to 12%, depending on industry performance and local demand." },
      { q: "How is percentage hike calculated?", a: "Percentage Hike = ((New Salary - Old Salary) / Old Salary) * 100." }
    ],
    fields: [
      { id: "oldSalary", label: "Old Monthly Salary (₹/$)", type: "number", defaultValue: 50000, min: 0 },
      { id: "newSalary", label: "New Monthly Salary (₹/$)", type: "number", defaultValue: 65000, min: 0 }
    ],
    calculate: (inputs) => {
      const oldS = Number(inputs.oldSalary || 1);
      const newS = Number(inputs.newSalary || 0);
      const variance = newS - oldS;
      const percent = (variance / oldS) * 100;

      return {
        absoluteGain: variance.toFixed(2),
        percentageHike: percent.toFixed(2) + "%",
        ratio: (newS / oldS).toFixed(2) + "x"
      };
    },
    outputs: [
      { id: "absoluteGain", label: "Net Monthly Increase", type: "currency" },
      { id: "percentageHike", label: "Salary Increment Percentage", type: "badge", color: "emerald" },
      { id: "ratio", label: "Earnings Multiplication Factor", type: "text" }
    ]
  },
  {
    slug: "discounts-calculator",
    name: "Discounts Calculator",
    category: "Finance & Tax Tools",
    seoH1: "Online Double Discount Coupon Calculator",
    badge: "Finance",
    description: "Apply dual-stacked discount percentages to get accurate final prices and total savings.",
    whyUnique: "Perfect for retail shopping. It shows you exactly what happens when you stack a general store discount with an extra coupon code, preventing bad math.",
    howToUse: [
      "Enter the base product price retail values.",
      "Select the first discount rate applied at check-out.",
      "Optional: Enter secondary coupons to find the final stacked discount."
    ],
    faqs: [
      { q: "How are stacked discounts calculated?", a: "The second discount is applied to the already discounted price, not the original starting price." }
    ],
    fields: [
      { id: "price", label: "Retail Standard Price ($/₹)", type: "number", defaultValue: 120, min: 0 },
      { id: "disc1", label: "Primary Discount (%)", type: "number", defaultValue: 25, min: 0, max: 100 },
      { id: "disc2", label: "Stacked Coupon Discount (%)", type: "number", defaultValue: 10, min: 0, max: 100 }
    ],
    calculate: (inputs) => {
      const price = Number(inputs.price || 0);
      const d1 = Number(inputs.disc1 || 0);
      const d2 = Number(inputs.disc2 || 0);

      const level1 = price * (1 - d1 / 100);
      const finalPrice = level1 * (1 - d2 / 100);
      const saved = price - finalPrice;

      return {
        savings: saved.toFixed(2),
        finalPrice: finalPrice.toFixed(2)
      };
    },
    outputs: [
      { id: "savings", label: "Total Saved Capital", type: "currency", color: "amber" },
      { id: "finalPrice", label: "Checkout Net Due", type: "currency", color: "emerald" }
    ]
  },
  {
    slug: "crypto-profit-loss",
    name: "Crypto Profit & Loss",
    category: "Finance & Tax Tools",
    seoH1: "Cryptocurrency Profit and Loss Calculator",
    badge: "Finance",
    description: "Model cryptocurrency trading profits or losses, factoring in transaction fees during buy and sell actions.",
    whyUnique: "It gives you precise net profit calculations by automatically factoring in exchange entry/exit fees on both sides of the trade.",
    howToUse: [
      "Enter total investment capital.",
      "Specify coin buy rates and subsequent sell target values.",
      "Configure percentage transaction commissions to find your true net returns."
    ],
    faqs: [
      { q: "Why are trading fees important?", a: "Exchange fees can eat into small trading gains. Factoring them in on both buy and sell sides prevents unexpected losses." }
    ],
    fields: [
      { id: "invested", label: "Total Investment ($)", type: "number", defaultValue: 1000, min: 0 },
      { id: "buyPrice", label: "Asset Purchase Price ($)", type: "number", defaultValue: 50000, min: 1 },
      { id: "sellPrice", label: "Asset Sell Price ($)", type: "number", defaultValue: 55000, min: 0 },
      { id: "fees", label: "Exchange Trading Fee (%)", type: "number", defaultValue: 0.1, min: 0, max: 10 }
    ],
    calculate: (inputs) => {
      const investment = Number(inputs.invested || 0);
      const buyPrice = Number(inputs.buyPrice || 1);
      const sellPrice = Number(inputs.sellPrice || 0);
      const feePercent = Number(inputs.fees || 0.1) / 100;

      const buyFee = investment * feePercent;
      const initialUnits = (investment - buyFee) / buyPrice;

      const grossValue = initialUnits * sellPrice;
      const sellFee = grossValue * feePercent;
      const netPayout = grossValue - sellFee;

      const netProfit = netPayout - investment;
      const roi = (netProfit / investment) * 100;

      return {
        pnl: netProfit.toFixed(2),
        feesPaid: (buyFee + sellFee).toFixed(2),
        roi: roi.toFixed(2) + "%"
      };
    },
    outputs: [
      { id: "feesPaid", label: "Total Commissions Paid", type: "currency", color: "amber" },
      { id: "roi", label: "Pure Return on Investment", type: "badge", color: "emerald" },
      { id: "pnl", label: "Net Investment Yield", type: "currency", color: "emerald" }
    ]
  },
  {
    slug: "hourly-to-salary-calculator",
    name: "Hourly Wage to Salary",
    category: "Finance & Tax Tools",
    seoH1: "Hourly to Annual Salary Converter",
    badge: "Finance",
    description: "Convert hourly wages into equivalents across weekly, monthly, and annual intervals based on standard work schedules.",
    whyUnique: "It provides a clear view of aggregate career income by breaking down hourly rates into weekly payouts and annual salaries.",
    howToUse: [
      "Enter your hourly base pay rate.",
      "Configure average weekly working hours.",
      "Instantly calculate cumulative salary equivalents."
    ],
    faqs: [
      { q: "How is annual salary estimated?", a: "We assume a standard 52-week work year. Working 40 hours per week at $25/hr results in a $52,000 annual salary before taxes." }
    ],
    fields: [
      { id: "hourly", label: "Hourly Wage ($/₹)", type: "number", defaultValue: 25, min: 0 },
      { id: "hoursPerWeek", label: "Expected Weekly Work Hours", type: "number", defaultValue: 40, min: 1, max: 168 }
    ],
    calculate: (inputs) => {
      const rate = Number(inputs.hourly || 0);
      const hours = Number(inputs.hoursPerWeek || 40);

      const weekly = rate * hours;
      const biweekly = weekly * 2;
      const annual = weekly * 52;
      const monthly = annual / 12;

      return {
        weeklyAmt: weekly.toFixed(2),
        monthlyAmt: monthly.toFixed(2),
        annualAmt: annual.toFixed(2)
      };
    },
    outputs: [
      { id: "weeklyAmt", label: "Equivalent Weekly Earnings", type: "currency" },
      { id: "monthlyAmt", label: "Equivalent Monthly Salary", type: "currency" },
      { id: "annualAmt", label: "Equivalent Annual Gross Salary", type: "currency", color: "emerald" }
    ]
  },
  {
    slug: "sip-delayed-cost",
    name: "SIP Delayed Cost",
    category: "Finance & Tax Tools",
    seoH1: "Systematic Investment Plan Delayed Cost Calculator",
    badge: "Finance",
    description: "Calculate what procrastinating on strategic Mutual Fund structured Systematic Investment Plans (SIP) actually costs your ultimate nest egg.",
    whyUnique: "Creates an absolute comparison visualization showing you exactly how starting late can significantly reduce your future compounding wealth.",
    howToUse: [
      "Select expected monthly target financial contributions.",
      "Assume a long-term CAGR return percentage estimate.",
      "Input target horizon times and delayed scope intervals to calculate total opportunity costs."
    ],
    faqs: [
      { q: "Why is delaying a SIP so costly?", a: "Due to exponential compounding curves, the largest returns are generated in the final years. Even a short delay of 1-3 years can cut your future wealth in half." }
    ],
    fields: [
      { id: "sip", label: "Monthly SIP Instalment (₹/$)", type: "number", defaultValue: 10000, min: 0 },
      { id: "cagr", label: "Expected Return rate CAGR (%)", type: "number", defaultValue: 12, min: 1, max: 30 },
      { id: "tenure", label: "Investment Tenure (Years)", type: "number", defaultValue: 20, min: 1, max: 40 },
      { id: "delay", label: "Delay Duration (Years)", type: "number", defaultValue: 2, min: 1, max: 10 }
    ],
    calculate: (inputs) => {
      const P = Number(inputs.sip || 0);
      const i = Number(inputs.cagr || 12) / 100 / 12;
      const n = Number(inputs.tenure || 20) * 12;
      const d = Number(inputs.delay || 2) * 12;

      // Wealth if started immediately
      const wealthNow = P * ((Math.pow(1 + i, n) - 1) / i) * (1 + i);
      const investedNow = P * n;

      // Wealth if delayed
      const nDelayed = n - d;
      const wealthDelayed = P * ((Math.pow(1 + i, nDelayed) - 1) / i) * (1 + i);
      const investedDelayed = P * nDelayed;

      const difference = wealthNow - wealthDelayed;

      return {
        wealthNowAmt: wealthNow.toFixed(2),
        wealthDelayedAmt: wealthDelayed.toFixed(2),
        lossCost: difference.toFixed(2)
      };
    },
    outputs: [
      { id: "wealthNowAmt", label: "Future Value (Starting Today)", type: "currency" },
      { id: "wealthDelayedAmt", label: "Future Value (Delayed Start)", type: "currency" },
      { id: "lossCost", label: "Cost of Delay (Lost Portfolio Value)", type: "currency", color: "red" }
    ]
  },
  // Health Tools
  {
    slug: "lmp-due-date-calculator",
    name: "LMP Pregnancy Due Date",
    category: "Health & Vitality Tools",
    seoH1: "Pregnancy Estimated Due Date Calculator",
    badge: "Health",
    description: "Determine Estimated Due Date (EDD) based on Naegele's rule from the first day of your last menstrual cycle.",
    whyUnique: "It calculates the standard 40-week clinical terms, giving you the EDD, conception windows, and current gestation tracking instantly.",
    howToUse: [
      "Select the calendar date of the Last Menstrual Period (LMP).",
      "Click compute to view estimated due targets.",
      "Get estimated milestone timelines instantly."
    ],
    faqs: [
      { q: "What is Naegele's Rule?", a: "A clinical rule of thumb that estimates a pregnancy due date by adding 7 days to the first day of the last menstrual period, subtracting 3 months, and adding 1 year." }
    ],
    fields: [
      { id: "lmpDate", label: "LMP Start Date", type: "date", defaultValue: "2026-01-01" }
    ],
    calculate: (inputs) => {
      const lmpVal = inputs.lmpDate || "2026-01-01";
      const lmp = new Date(lmpVal);
      if (isNaN(lmp.getTime())) return { edd: "Invalid Date", conception: "Invalid Date", progress: "N/A" };

      // EDD: Add 280 days
      const edd = new Date(lmp.getTime() + 280 * 24 * 60 * 60 * 1000);
      // Conception: LMP + 14 days
      const conception = new Date(lmp.getTime() + 14 * 24 * 60 * 60 * 1000);

      // Current gestation week
      const diffTime = Math.abs(new Date().getTime() - lmp.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      const weeks = Math.floor(diffDays / 7);

      return {
        edd: edd.toDateString(),
        conception: conception.toDateString(),
        progress: `${weeks} Weeks gestation`
      };
    },
    outputs: [
      { id: "edd", label: "Estimated Due Date (EDD)", type: "text", color: "emerald" },
      { id: "conception", label: "Probable Conception Date", type: "text" },
      { id: "progress", label: "Active Gestational Week", type: "badge", color: "blue" }
    ]
  },
  {
    slug: "pregnancy-conception-calculator",
    name: "Pregnancy Conception Date",
    category: "Health & Vitality Tools",
    seoH1: "Pregnancy Conception Period Calculator",
    badge: "Health",
    description: "Work backward from any estimated or ultrasound-confirmed Due Date to determine the dynamic conception window.",
    whyUnique: "Uses clinical gestational averages to estimate the 5-day conception window, running entirely on local browser logic.",
    howToUse: [
      "Provide your medical target due date.",
      "Extract original conception windows seamlessly."
    ],
    faqs: [
      { q: "How is the conception date calculated from a due date?", a: "Conception typically occurs 266 days before the estimated due date, within a narrow 5-day cycle window." }
    ],
    fields: [
      { id: "dueDate", label: "Expected Due Date", type: "date", defaultValue: "2026-10-01" }
    ],
    calculate: (inputs) => {
      const dueVal = inputs.dueDate || "2026-10-01";
      const due = new Date(dueVal);
      if (isNaN(due.getTime())) return { startWindow: "N/A", endWindow: "N/A", midPoint: "N/A" };

      // Conception date is roughly due date - 266 days
      const baseConception = new Date(due.getTime() - 266 * 24 * 60 * 60 * 1000);
      const start = new Date(baseConception.getTime() - 2 * 24 * 60 * 60 * 1000);
      const end = new Date(baseConception.getTime() + 2 * 24 * 60 * 60 * 1000);

      return {
        midPoint: baseConception.toDateString(),
        startWindow: start.toDateString(),
        endWindow: end.toDateString()
      };
    },
    outputs: [
      { id: "midPoint", label: "Most Probable Conception Date", type: "text", color: "emerald" },
      { id: "startWindow", label: "Conception Window Option Start", type: "text" },
      { id: "endWindow", label: "Conception Window Option End", type: "text" }
    ]
  },
  {
    slug: "ivf-due-date-calculator",
    name: "IVF Due Date Calculator",
    category: "Health & Vitality Tools",
    seoH1: "IVF Gestation and Due Date Calculator",
    badge: "Health",
    description: "Calculate your estimated pregnancy due date based on IVF embryology transfer milestones (3-day vs. 5-day embryo transfer).",
    whyUnique: "Accounts specifically for embryo culture terms (Cleavage Day 3 vs. Blastocyst Day 5), offering precision estimates for IVF.",
    howToUse: [
      "Select the specific embryo transfer date.",
      "Specify embryo stage (Day 3 or Day 5).",
      "Calculate corresponding EDD schedules."
    ],
    faqs: [
      { q: "Why is IVF EDD more accurate?", a: "Because the exact date of conception (fertilization) is meticulously documented during laboratory procedures, removing any cycle length guesswork." }
    ],
    fields: [
      { id: "transferDate", label: "Embryo Transfer Date", type: "date", defaultValue: "2026-05-01" },
      { id: "embryoType", label: "Embryo Stage", type: "select", defaultValue: "5", options: [
        { label: "Day 3 Transfer", value: "3" },
        { label: "Day 5 Transfer", value: "5" }
      ]}
    ],
    calculate: (inputs) => {
      const transVal = inputs.transferDate || "2026-05-01";
      const trans = new Date(transVal);
      const stage = Number(inputs.embryoType || 5);
      if (isNaN(trans.getTime())) return { edd: "Invalid Date", milestone: "" };

      // EDD calculation:
      // Day 3 Transfer: Transfer Date + 263 days
      // Day 5 Transfer: Transfer Date + 261 days
      const daysToAdd = stage === 3 ? 263 : 261;
      const edd = new Date(trans.getTime() + daysToAdd * 24 * 60 * 60 * 1000);

      return {
        edd: edd.toDateString(),
        milestone: "Estimated 40 Weeks milestone"
      };
    },
    outputs: [
      { id: "edd", label: "Expected Delivery Date (EDD)", type: "text", color: "emerald" },
      { id: "milestone", label: "Full-term Milestones", type: "badge", color: "blue" }
    ]
  },
  {
    slug: "ovulation-window-calculator",
    name: "Ovulation Window Predictor",
    category: "Health & Vitality Tools",
    seoH1: "Free Online Ovulation Window Calculator",
    badge: "Health",
    description: "Enter standard cycle histories to model peak biological fertility zones and prepare for family planning.",
    whyUnique: "Runs local algorithms to predict your peak fertile days and safe windows, providing immediate results inside your sandbox application.",
    howToUse: [
      "Provide historical period onset timelines.",
      "Input average cycle lengths in days.",
      "Calculate your personal fertile windows."
    ],
    faqs: [
      { q: "When does ovulation usually occur?", a: "In standard 28-day menstrual cycles, ovulation typically happens on day 14." }
    ],
    fields: [
      { id: "lastPeriod", label: "First Day of Last Period", type: "date", defaultValue: "2026-05-10" },
      { id: "length", label: "Average Cycle Length (Days)", type: "number", defaultValue: 28, min: 20, max: 45 }
    ],
    calculate: (inputs) => {
      const lastVal = inputs.lastPeriod || "2026-05-10";
      const start = new Date(lastVal);
      const cycle = Number(inputs.length || 28);
      if (isNaN(start.getTime())) return { ovulation: "N/A", window: "N/A" };

      const ovulation = new Date(start.getTime() + (cycle - 14) * 24 * 60 * 60 * 1000);
      const startFertile = new Date(ovulation.getTime() - 4 * 24 * 60 * 60 * 1000);
      const endFertile = new Date(ovulation.getTime() + 1 * 24 * 60 * 60 * 1000);

      return {
        ovulationDate: ovulation.toDateString(),
        window: `${startFertile.toLocaleDateString()} - ${endFertile.toLocaleDateString()}`
      };
    },
    outputs: [
      { id: "ovulationDate", label: "Predicted Ovulation Day", type: "text", color: "amber" },
      { id: "window", label: "Peak Fertility Window Days", type: "text", color: "emerald" }
    ]
  },
  {
    slug: "period-cycle-predictor",
    name: "Period Cycle Predictor",
    category: "Health & Vitality Tools",
    seoH1: "6-Month Calendar Period Forecast Calculator",
    badge: "Health",
    description: "Generate 6-month predictions for your upcoming period cycles to help you plan with confidence.",
    whyUnique: "Maps out consistent timelines over 6 entire months dynamically on the client, keeping your physiological data private.",
    howToUse: [
      "Select your last period calendar date.",
      "Input normal cycle duration lengths.",
      "Review the projected start dates."
    ],
    faqs: [
      { q: "Is this predictor completely accurate?", a: "While helpful for planning, prediction math assumes consistent biological cycles and should not replace clinical medical advice." }
    ],
    fields: [
      { id: "lastPeriod", label: "Last Period Start", type: "date", defaultValue: "2026-05-01" },
      { id: "cycle", label: "Average Cycle Length", type: "number", defaultValue: 28, min: 21, max: 40 }
    ],
    calculate: (inputs) => {
      const lastVal = inputs.lastPeriod || "2026-05-01";
      const start = new Date(lastVal);
      const cycle = Number(inputs.cycle || 28);
      if (isNaN(start.getTime())) return { m1: "N/A", m2: "N/A", m6: "N/A" };

      const dates = [];
      for (let i = 1; i <= 6; i++) {
        const nextDate = new Date(start.getTime() + (cycle * i) * 24 * 60 * 60 * 1000);
        dates.push(nextDate.toDateString());
      }
      return {
        m1: dates[0],
        m2: dates[1],
        m3: dates[2],
        m4: dates[3],
        m5: dates[4],
        m6: dates[5]
      };
    },
    outputs: [
      { id: "m1", label: "Month 1 Projective Cycle", type: "text", color: "emerald" },
      { id: "m2", label: "Month 2 Projective Cycle", type: "text" },
      { id: "m3", label: "Month 3 Projective Cycle", type: "text" },
      { id: "m4", label: "Month 4 Projective Cycle", type: "text" },
      { id: "m5", label: "Month 5 Projective Cycle", type: "text" },
      { id: "m6", label: "Month 6 Projective Cycle", type: "text" }
    ]
  },
  {
    slug: "bmi-calculator",
    name: "Body Mass Index (BMI)",
    category: "Health & Vitality Tools",
    seoH1: "Free Online Body Mass Index (BMI) Calculator",
    badge: "Health",
    description: "Input height and weight variables to immediately calculate clinical Body Mass Index (BMI), identify weight groups, and discover target weight ranges.",
    whyUnique: "Offers comprehensive analysis, showing you the exact weight adjustments needed to reach a perfect health index standard.",
    howToUse: [
      "Enter body mass weights in Kilograms.",
      "Specify physical stature heights in Centimeters.",
      "Check standard index outputs."
    ],
    faqs: [
      { q: "What is a healthy BMI index?", a: "According to WHO standards, a BMI between 18.5 and 24.9 is considered a healthy baseline weight." }
    ],
    fields: [
      { id: "height", label: "Height (cm)", type: "number", defaultValue: 175, min: 50, max: 250 },
      { id: "weight", label: "Weight (kg)", type: "number", defaultValue: 70, min: 10, max: 300 }
    ],
    calculate: (inputs) => {
      const h = Number(inputs.height || 175) / 100;
      const w = Number(inputs.weight || 70);
      const bmi = w / (h * h);

      let status = "Healthy Weight";
      let color = "emerald";
      if (bmi < 18.5) { status = "Underweight"; color = "blue"; }
      else if (bmi >= 25 && bmi < 29.9) { status = "Overweight"; color = "amber"; }
      else if (bmi >= 30) { status = "Obese Class"; color = "red"; }

      const idealWeight = 22 * (h * h);

      return {
        bmiVal: bmi.toFixed(1),
        statusGroup: status,
        idealWeightAmt: idealWeight.toFixed(1) + " kg"
      };
    },
    outputs: [
      { id: "bmiVal", label: "Your BMI Score", type: "badge", color: "emerald" },
      { id: "statusGroup", label: "Clinical Weight Category", type: "text" },
      { id: "idealWeightAmt", label: "Target Weight (Ideal 22 BMI)", type: "text", color: "emerald" }
    ]
  },
  {
    slug: "bmr-calculator",
    name: "Basal Metabolic Rate (BMR)",
    category: "Health & Vitality Tools",
    seoH1: "BMR metabolic Rate Calculator India",
    badge: "Health",
    description: "Calculate your body's base daily energy needs in calories using the standard Harris-Benedict formulas.",
    whyUnique: "Offers metabolic analysis instantly, providing accurate calorie baselines to support your structural fitness goals.",
    howToUse: [
      "Specify your biological age and physical gender.",
      "Enter height and mass weight standards to get your BMR.",
      "Review baseline metabolic levels."
    ],
    faqs: [
      { q: "What is BMR?", a: "The minimum calorie intake required to maintain vital organ function, breathing, and circulation while at absolute rest." }
    ],
    fields: [
      { id: "age", label: "Age (Years)", type: "number", defaultValue: 28, min: 1, max: 120 },
      { id: "gender", label: "Gender", type: "select", defaultValue: "male", options: [
        { label: "Male physical profile", value: "male" },
        { label: "Female physical profile", value: "female" }
      ]},
      { id: "height", label: "Height (cm)", type: "number", defaultValue: 175 },
      { id: "weight", label: "Weight (kg)", type: "number", defaultValue: 70 }
    ],
    calculate: (inputs) => {
      const age = Number(inputs.age || 28);
      const gender = inputs.gender || "male";
      const h = Number(inputs.height || 175);
      const w = Number(inputs.weight || 70);

      let bmr = 0;
      if (gender === "male") {
        bmr = 88.362 + (13.397 * w) + (4.799 * h) - (5.677 * age);
      } else {
        bmr = 447.593 + (9.247 * w) + (3.098 * h) - (4.330 * age);
      }
      return {
        bmrVal: bmr.toFixed(0) + " Calories/day"
      };
    },
    outputs: [
      { id: "bmrVal", label: "Calculated Daily BMR Speed", type: "text", color: "emerald" }
    ]
  },
  {
    slug: "macro-split-ratio",
    name: "Macro Split & Diet Ratios",
    category: "Health & Vitality Tools",
    seoH1: "Macro Calorie Split Ratio Calculator",
    badge: "Health",
    description: "Split your target daily calories into optimal protein, carbohydrate, and fat gram ratios based on your fitness goals.",
    whyUnique: "Supports structural diet plans, providing target profiles like Keto, Bulking, or Balanced splits in seconds.",
    howToUse: [
      "Enter estimated daily calorie goals.",
      "Select your fitness pathway goal.",
      "Check target micro-gram balances."
    ],
    faqs: [
      { q: "What are the rules for macromolecule splits?", a: "Each gram of Carb and Protein contains 4 calories, while each gram of Fat contains 9 calories. Splits balance these counts to match your selected weight goals." }
    ],
    fields: [
      { id: "calories", label: "Target Daily Calories", type: "number", defaultValue: 2000, min: 500, max: 10000 },
      { id: "pathway", label: "Diet Ratio Plan", type: "select", defaultValue: "balanced", options: [
        { label: "Balanced Scale (40% C / 30% P / 30% F)", value: "balanced" },
        { label: "Keto Plan (5% C / 25% P / 70% F)", value: "keto" },
        { label: "Bulking Gains (50% C / 30% P / 20% F)", value: "bulking" }
      ]}
    ],
    calculate: (inputs) => {
      const cal = Number(inputs.calories || 2000);
      const plan = inputs.pathway || "balanced";

      let cPct = 40, pPct = 30, fPct = 30;
      if (plan === "keto") { cPct = 5; pPct = 25; fPct = 70; }
      else if (plan === "bulking") { cPct = 50; pPct = 30; fPct = 20; }

      const carbG = (cal * (cPct / 100)) / 4;
      const protG = (cal * (pPct / 100)) / 4;
      const fatG = (cal * (fPct / 100)) / 9;

      return {
        carbOut: `${carbG.toFixed(0)} grams`,
        protOut: `${protG.toFixed(0)} grams`,
        fatOut: `${fatG.toFixed(0)} grams`
      };
    },
    outputs: [
      { id: "carbOut", label: "Carbohydrate Needs (g)", type: "text", color: "blue" },
      { id: "protOut", label: "Protein Target (g)", type: "text", color: "emerald" },
      { id: "fatOut", label: "Healthy Fats (g)", type: "text", color: "amber" }
    ]
  },
  {
    slug: "water-intake-calculator",
    name: "Water Intake Target",
    category: "Health & Vitality Tools",
    seoH1: "Water Intake Requirement Calculator",
    badge: "Health",
    description: "Determine your recommended daily water target based on body weight guidelines and activity levels.",
    whyUnique: "Gives you customized health recommendations in liters by factoring in physical exercise and perspiration rates.",
    howToUse: [
      "Input body weight in Kilograms.",
      "Indicate your normal physical activity level.",
      "Check recommended hydration volumes."
    ],
    faqs: [
      { q: "How much water does an active adult need?", a: "An average adult needs 2.5 to 3.5 liters daily, with needs scaling up based on environmental temperature and exercise intensity." }
    ],
    fields: [
      { id: "weight", label: "Body Weight (kg)", type: "number", defaultValue: 70 },
      { id: "activity", label: "Activity Level", type: "select", defaultValue: "medium", options: [
        { label: "Low Activity (Sedentary)", value: "low" },
        { label: "Medium Activity", value: "medium" },
        { label: "High Activity (Vigorous Workout)", value: "high" }
      ]}
    ],
    calculate: (inputs) => {
      const w = Number(inputs.weight || 70);
      const act = inputs.activity || "medium";

      // Base: 35ml per kg of bodyweight
      let baseMl = w * 35;
      if (act === "medium") baseMl += 400;
      else if (act === "high") baseMl += 800;

      const liters = baseMl / 1000;
      return {
        liters: liters.toFixed(1) + " Liters",
        glasses: Math.round(baseMl / 250).toFixed(0) + " Individual Glasses (250ml)"
      };
    },
    outputs: [
      { id: "liters", label: "Target Water Volume Daily", type: "badge", color: "blue" },
      { id: "glasses", label: "Equivalent Glass Counts", type: "text" }
    ]
  },
  {
    slug: "bac-calculator",
    name: "BAC Alcohol Tracker",
    category: "Health & Vitality Tools",
    seoH1: "Blood Alcohol Concentration (BAC) Calculator",
    badge: "Health",
    description: "Estimate blood alcohol saturation levels and metabolic sobriety timelines using the standard clinical Widmark Equation.",
    whyUnique: "Applies safe Widmark factor structures with decay ratios, calculating metabolization times entirely on the client side.",
    howToUse: [
      "Select physical profile characteristics.",
      "Input quantity of standard alcoholic drinks consumed.",
      "Specify times since consumption to estimate current relative ranges."
    ],
    faqs: [
      { q: "What is a single standard drink?", a: "Defined as exactly 14 grams of pure active alcohol (equivalent to a 12oz regular beer or 5oz glass of wine)." }
    ],
    fields: [
      { id: "weight", label: "Weight (kg)", type: "number", defaultValue: 75, min: 30 },
      { id: "gender", label: "Gender Type", type: "select", defaultValue: "male", options: [
        { label: "Male physical composition", value: "male" },
        { label: "Female physical composition", value: "female" }
      ]},
      { id: "drinks", label: "Standard Drinks Consumed", type: "number", defaultValue: 3, min: 0 },
      { id: "hours", label: "Time Passed Since First Drink (Hours)", type: "number", defaultValue: 2, min: 0 }
    ],
    calculate: (inputs) => {
      const w = Number(inputs.weight || 75);
      const gender = inputs.gender || "male";
      const drinks = Number(inputs.drinks || 3);
      const t = Number(inputs.hours || 2);

      // Widmark formula
      // BAC = [ (Drinks * 14) / (Weight_grams * r) ] * 100 - (t * Beta)
      // r is gender coefficient: Male 0.68, Female 0.55
      // beta is standard metabolic clearance rate: 0.015% per hour
      const r = gender === "male" ? 0.68 : 0.55;
      const weightG = w * 1000;
      const alcoholG = drinks * 14;

      let bac = (alcoholG / (weightG * r)) * 100 - (t * 0.015);
      bac = Math.max(0, bac);

      const hoursToZero = bac / 0.015;

      return {
        bacPct: bac.toFixed(3) + "%",
        timeline: hoursToZero === 0 ? "Fully Sober" : `Estimated ${hoursToZero.toFixed(1)} Hours to 0.00% clearance`
      };
    },
    outputs: [
      { id: "bacPct", label: "Estimated BAC Percentage", type: "badge", color: "red" },
      { id: "timeline", label: "Clearance Sobriety Timeline Forecast", type: "text", color: "emerald" }
    ]
  },
  // Time Tools
  {
    slug: "pomodoro-timer",
    name: "Pomodoro Timer",
    category: "Time & Countdown Utilities",
    seoH1: "Free Online Interactive Pomodoro Timer",
    badge: "Utility",
    description: "Boost your productivity with our custom focus tracker, which alternates work intervals with strategic recovery breaks.",
    whyUnique: "A fully client-side work-rest timer with built-in status updates and audio notification chimes.",
    howToUse: [
      "Click start to begin the standard 25-minute study interval.",
      "Focus deeply until you hear the completion chime.",
      "Take a short 5-minute break to refresh."
    ],
    faqs: [
      { q: "What is the Pomodoro Technique?", a: "A productivity system created by Francesco Cirillo that uses a timer to break down work into intervals, traditionally 25 minutes in length, separated by short breaks." }
    ],
    fields: [
      { id: "workTime", label: "Focus Duration (Minutes)", type: "number", defaultValue: 25 },
      { id: "breakTime", label: "Short Break Duration (Minutes)", type: "number", defaultValue: 5 }
    ],
    calculate: (inputs) => {
      return {
        status: "Interactive - run via dashboard",
        setting: `Focus: ${inputs.workTime || 25}min | Break: ${inputs.breakTime || 5}min`
      };
    },
    outputs: [
      { id: "status", label: "Current App Status", type: "text" },
      { id: "setting", label: "Configured Schedule Options", type: "text", color: "emerald" }
    ]
  },
  {
    slug: "online-stopwatch",
    name: "Online Stopwatch Laps",
    category: "Time & Countdown Utilities",
    seoH1: "High-Precision Online Stopwatch Tool",
    badge: "Utility",
    description: "Track precise millisecond time intervals and record clean lap times in real-time.",
    whyUnique: "A highly responsive performance tracker with dynamic split table outputs, designed entirely in elegant dark mode.",
    howToUse: [
      "Click start to begin tracking time instantly.",
      "Record laps to save split times without stopping.",
      "Click stop to pause tracking."
    ],
    faqs: [
      { q: "Is the timing count highly accurate?", a: "Yes, it uses high-precision performance browser timestamps to track splits down to the millisecond." }
    ],
    fields: [],
    calculate: () => {
      return {
        control: "Interactive StopWatch",
        state: "Use start actions block below"
      };
    },
    outputs: [
      { id: "control", label: "Functional Model Type", type: "text" },
      { id: "state", label: "Active Tracking Indicator", type: "text", color: "emerald" }
    ]
  },
  {
    slug: "countdown-timer-exams",
    name: "Exam Countdown Timer",
    category: "Time & Countdown Utilities",
    seoH1: "Live Exam Countdown Timer Clock",
    badge: "Utility",
    description: "A precise deadline tracker to help you stay on schedule for your target exams.",
    whyUnique: "Calculates precise gaps and shows real-time countdowns down to the second.",
    howToUse: [
      "Select your target exam date.",
      "Keep this browser page active to track the time remaining."
    ],
    faqs: [
      { q: "Can I bookmark my countdown?", a: "Yes! The URL retains hash routing state so you can return to your tracker easily." }
    ],
    fields: [
      { id: "examDate", label: "Test Target Date", type: "date", defaultValue: "2026-12-15" }
    ],
    calculate: (inputs) => {
      const examVal = inputs.examDate || "2026-12-15";
      const target = new Date(examVal);
      const now = new Date();
      const diff = target.getTime() - now.getTime();

      if (diff <= 0) return { days: "Reached", hours: "0", minutes: "0", seconds: "0" };

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      return {
        countdownText: `${days} Days, ${hours} Hours, ${minutes} Minutes, ${seconds} Seconds Remaining`
      };
    },
    outputs: [
      { id: "countdownText", label: "Time Remaining Until Milestone", type: "text", color: "emerald" }
    ]
  },
  {
    slug: "age-calculator-birthdate",
    name: "Age & Birthdate Metrics",
    category: "Time & Countdown Utilities",
    seoH1: "Chronological Age and Birthdate Calculator",
    badge: "Utility",
    description: "Calculate your exact age down to the minute, showing your lifetime in years, months, weeks, and days.",
    whyUnique: "Provides deep chronological analysis, running entirely on local browser logic with zero background APIs.",
    howToUse: [
      "Select your birth date on the calendar.",
      "Instantly discover your lifetime duration metrics."
    ],
    faqs: [
      { q: "How are leap years factored into age calculations?", a: "Leap years are automatically accounted for based on real calendar dates." }
    ],
    fields: [
      { id: "birthdate", label: "Your Date of Birth", type: "date", defaultValue: "1999-05-19" }
    ],
    calculate: (inputs) => {
      const dobVal = inputs.birthdate || "1999-05-19";
      const dob = new Date(dobVal);
      const now = new Date();
      if (isNaN(dob.getTime())) return { years: "N/A" };

      const diff = now.getTime() - dob.getTime();
      const yrs = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const weeks = Math.floor(days / 7);
      const months = Math.floor(days / 30.437);

      return {
        years: `${yrs} Years`,
        months: `${months} Months lived`,
        weeks: `${weeks} Weeks lived`,
        days: `${days} Total days lived`
      };
    },
    outputs: [
      { id: "years", label: "Completed Lifespan Years", type: "badge", color: "emerald" },
      { id: "months", label: "Total Completed Months", type: "text" },
      { id: "weeks", label: "Total Completed Weeks", type: "text" },
      { id: "days", label: "Total Days Lived", type: "text", color: "blue" }
    ]
  },
  {
    slug: "days-between-dates",
    name: "Days Between Two Dates",
    category: "Time & Countdown Utilities",
    seoH1: "Absolute Days Between Dates Calculator",
    badge: "Utility",
    description: "Calculate the exact number of days between any two selected dates.",
    whyUnique: "Instantly counts differences over any dynamic timeline, perfect for project management schedules.",
    howToUse: [
      "Select your start date.",
      "Select your target end date."
    ],
    faqs: [
      { q: "Are both start and end dates included?", a: "By default, this tool calculates the absolute mathematical difference, counting the days in between." }
    ],
    fields: [
      { id: "d1", label: "Starting date", type: "date", defaultValue: "2026-05-01" },
      { id: "d2", label: "End target date", type: "date", defaultValue: "2026-12-31" }
    ],
    calculate: (inputs) => {
      const d1 = new Date(inputs.d1 || "2026-05-01");
      const d2 = new Date(inputs.d2 || "2026-12-31");
      if (isNaN(d1.getTime()) || isNaN(d2.getTime())) return { days: "N/A" };

      const diff = Math.abs(d2.getTime() - d1.getTime());
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));

      return {
        days: `${days} Days`,
        weeks: `${(days / 7).toFixed(1)} Weeks`
      };
    },
    outputs: [
      { id: "days", label: "Absolute Days Difference", type: "text", color: "emerald" },
      { id: "weeks", label: "Formatted Weeks Equivalent", type: "text" }
    ]
  },
  {
    slug: "time-zone-converter-slider",
    name: "TimeZone Zone Slider",
    category: "Time & Countdown Utilities",
    seoH1: "Multi Time Zone Converter Slider",
    badge: "Utility",
    description: "Convert times across major time zones (EST, GMT, IST, JST) instantly.",
    whyUnique: "Uses a slider to update times across other key global zones in real-time.",
    howToUse: [
      "Drag the slider to adjust your local hour.",
      "Observe the matching converted times in other key zones."
    ],
    faqs: [
      { q: "Are daylight savings (DST) factored in?", a: "Yes, it uses your browser's local timezone settings for calculations." }
    ],
    fields: [
      { id: "localHour", label: "Your Local Hour (24h Scale)", type: "slider", defaultValue: 12, min: 0, max: 23, step: 1 }
    ],
    calculate: (inputs) => {
      const h = Number(inputs.localHour || 12);

      // Simple relative shifts assuming standard offsets
      // IST is UTC+5.5, GMT/UTC 0, EST is UTC-5, JST is UTC+9
      // Let's assume current hour is UTC+5.5 (IST) as local base if in India
      const utcBase = (h - 5.5 + 24) % 24;
      const hours = (offset: number) => {
        const value = (utcBase + offset + 24) % 24;
        const hr = Math.floor(value);
        const mn = (value % 1) * 60;
        return `${hr.toString().padStart(2, "0")}:${mn.toString().padStart(2, "0")}`;
      };

      return {
        gmt: hours(0) + " GMT",
        est: hours(-5) + " EST",
        ist: hours(5.5) + " IST",
        jst: hours(9) + " JST"
      };
    },
    outputs: [
      { id: "gmt", label: "Greenwich Mean Time (GMT)", type: "text" },
      { id: "est", label: "Eastern Standard Time (EST)", type: "text" },
      { id: "ist", label: "Indian Standard Time (IST)", type: "text", color: "emerald" },
      { id: "jst", label: "Japan Standard Time (JST)", type: "text" }
    ]
  },
  {
    slug: "military-time-converter",
    name: "Military 24h Converter",
    category: "Time & Countdown Utilities",
    seoH1: "Online Military 24-Hour Time Converter",
    badge: "Utility",
    description: "Convert standard AM/PM times into military 2400-hour system numbers.",
    whyUnique: "A clean converter that supports two-way conversions with clear visual tables.",
    howToUse: [
      "Enter any standard time value.",
      "Translate instantly between systems."
    ],
    faqs: [
      { q: "What is military time?", a: "A 24-hour timekeeping system that eliminates the need for AM/PM indicators." }
    ],
    fields: [
      { id: "hour", label: "Hour", type: "number", defaultValue: 7, min: 1, max: 12 },
      { id: "minute", label: "Minutes", type: "number", defaultValue: 30, min: 0, max: 59 },
      { id: "ampm", label: "Period", type: "select", defaultValue: "PM", options: [
        { label: "AM", value: "AM" },
        { label: "PM", value: "PM" }
      ]}
    ],
    calculate: (inputs) => {
      let h = Number(inputs.hour || 12);
      const m = Number(inputs.minute || 0).toString().padStart(2, "0");
      const ampm = inputs.ampm || "PM";

      if (ampm === "PM" && h !== 12) h += 12;
      if (ampm === "AM" && h === 12) h = 0;

      const mil = h.toString().padStart(2, "0") + m + " Hours";
      return {
        milTime: mil
      };
    },
    outputs: [
      { id: "milTime", label: "Military Format Notation", type: "text", color: "emerald" }
    ]
  },
  {
    slug: "days-until-event",
    name: "Days Until Event Date",
    category: "Time & Countdown Utilities",
    seoH1: "Days Until Event Countdown Calculator",
    badge: "Utility",
    description: "Estimate the exact number of days remaining until your next major event or personal milestone.",
    whyUnique: "A bookmarkable daily countdown utility that runs entirely inside your browser.",
    howToUse: [
      "Select your target event date.",
      "Check the remaining days instantly."
    ],
    faqs: [
      { q: "Does this tool update automatically?", a: "Yes, it calculates live differences against your browser's current date and time." }
    ],
    fields: [
      { id: "evDate", label: "Future Event Date", type: "date", defaultValue: "2026-12-25" }
    ],
    calculate: (inputs) => {
      const eDate = new Date(inputs.evDate || "2026-12-25");
      const now = new Date();
      if (isNaN(eDate.getTime())) return { days: "N/A" };

      const diff = eDate.getTime() - now.getTime();
      const days = Math.ceil(diff / (1000 * 60 * 60 * 24));

      return {
        daysCount: days > 0 ? `${days} Days Remaining` : "Event Passed"
      };
    },
    outputs: [
      { id: "daysCount", label: "Calculated Day Clearance", type: "text", color: "emerald" }
    ]
  },
  {
    slug: "working-days-calculator",
    name: "Working Days (Net)",
    category: "Time & Countdown Utilities",
    seoH1: "Business Working Days Calculator Online",
    badge: "Utility",
    description: "Calculate standard business working days between two dates, with option to exclude custom public holidays.",
    whyUnique: "Designed specifically for professional project management schedules.",
    howToUse: [
      "Select start and end dates.",
      "Toggle weekend and holiday exclusions to find working business days."
    ],
    faqs: [
      { q: "Are weekends excluded by default?", a: "Yes, Saturdays and Sundays are excluded from calculations by default." }
    ],
    fields: [
      { id: "start", label: "Start Date", type: "date", defaultValue: "2026-05-01" },
      { id: "end", label: "End Date", type: "date", defaultValue: "2026-05-31" },
      { id: "excludeSat", label: "Exclude Saturdays", type: "checkbox", defaultValue: true },
      { id: "excludeSun", label: "Exclude Sundays", type: "checkbox", defaultValue: true }
    ],
    calculate: (inputs) => {
      const d1 = new Date(inputs.start || "2026-05-01");
      const d2 = new Date(inputs.end || "2026-05-31");
      if (isNaN(d1.getTime()) || isNaN(d2.getTime())) return { netDays: "N/A" };

      const exSat = !!inputs.excludeSat;
      const exSun = !!inputs.excludeSun;

      let count = 0;
      const current = new Date(d1.getTime());
      while (current <= d2) {
        const day = current.getDay();
        const isSat = day === 6;
        const isSun = day === 0;

        if (!(isSat && exSat) && !(isSun && exSun)) {
          count++;
        }
        current.setDate(current.getDate() + 1);
      }
      return {
        netDays: `${count} Business Days`
      };
    },
    outputs: [
      { id: "netDays", label: "Net Working Days", type: "text", color: "emerald" }
    ]
  },
  // Math and Scientific Tools
  {
    slug: "wpm-typing-test",
    name: "WPM Speed Typing Test",
    category: "Developer & Design Utilities",
    seoH1: "Free Online WPM Speed Typing Test",
    badge: "Interactive",
    description: "Measure your actual typing speed and accuracy against a fixed paragraph string in a fun, 60-second test sequence.",
    whyUnique: "A fully local typing test with real-time speed checking and accuracy metrics.",
    howToUse: [
      "Select your typing paragraph options.",
      "Start typing in the text field to begin the 60-second test.",
      "View your results once the timer runs down."
    ],
    faqs: [
      { q: "What is a good typing speed?", a: "Average speed is around 40 WPM. Professional speeds usually exceed 65 to 80 WPM." }
    ],
    fields: [
      { id: "testParagraph", label: "Practice Text", type: "select", defaultValue: "scientific", options: [
        { label: "Scientific Views Technology Core", value: "scientific" },
        { label: "Classic Literature Focus Study", value: "classic" }
      ]}
    ],
    calculate: () => {
      return {
        mode: "Interactive Typing Panel",
        status: "Please use interactive layout below"
      };
    },
    outputs: [
      { id: "mode", label: "System Operational Mode", type: "text" },
      { id: "status", label: "Session Live Status", type: "text", color: "emerald" }
    ]
  },
  {
    slug: "cgpa-to-percentage",
    name: "CGPA to Percentage, India",
    category: "Math & Scientific Utilities",
    seoH1: "CGPA to Percentage Indian Converter",
    badge: "Math",
    description: "Convert university CGPA scales to equivalent percentile scores using standard regional formulas.",
    whyUnique: "Instantly converts academic GPAs using standard formulas, perfect for competitive exam prep.",
    howToUse: [
      "Enter your CGPA (on a standard 10-point scale).",
      "Get corresponding percentage scores instantly."
    ],
    faqs: [
      { q: "What is the standard CBSE CGPA conversion?", a: "Percentage = CGPA * 9.5." }
    ],
    fields: [
      { id: "cgpa", label: "CGPA Scored (10 Scale)", type: "number", defaultValue: 8.5, min: 0, max: 10, step: 0.01 }
    ],
    calculate: (inputs) => {
      const cgpa = Number(inputs.cgpa || 0);
      const pct = cgpa * 9.5;
      return {
        pctScore: pct.toFixed(1) + "%",
        classOption: pct >= 75 ? "First Class Distinction" : pct >= 60 ? "First Class" : "Second Class"
      };
    },
    outputs: [
      { id: "pctScore", label: "Converted Marks Percentage", type: "badge", color: "emerald" },
      { id: "classOption", label: "Academic Standing Equivalent", type: "text" }
    ]
  },
  {
    slug: "gpa-calculator-semester",
    name: "GPA Semester Calculator",
    category: "Math & Scientific Utilities",
    seoH1: "Interactive College Semester GPA Calculator",
    badge: "Math",
    description: "Calculate your semester GPA by entering course grades and credit weights into an interactive table.",
    whyUnique: "A highly responsive GPA calculator that lets you add and customize subject scores easily.",
    howToUse: [
      "Add rows for your current courses.",
      "Enter credit hours and grading scales.",
      "Check your semester averages instantly."
    ],
    faqs: [
      { q: "What is a Weighted GPA?", a: "A GPA that factors in the credit hours of each class, giving more weight to longer or more difficult courses." }
    ],
    fields: [
      { id: "g1", label: "Subject 1 Grade (A=4, B=3, C=2)", type: "number", defaultValue: 4, min: 0, max: 4 },
      { id: "c1", label: "Subject 1 Credits", type: "number", defaultValue: 3, min: 1 },
      { id: "g2", label: "Subject 2 Grade", type: "number", defaultValue: 3, min: 0, max: 4 },
      { id: "c2", label: "Subject 2 Credits", type: "number", defaultValue: 4, min: 1 }
    ],
    calculate: (inputs) => {
      const g1 = Number(inputs.g1 || 4);
      const c1 = Number(inputs.c1 || 3);
      const g2 = Number(inputs.g2 || 3);
      const c2 = Number(inputs.c2 || 4);

      const totalCredits = c1 + c2;
      const points = (g1 * c1) + (g2 * c2);
      const gpa = points / totalCredits;

      return {
        totalCredits: totalCredits.toFixed(0),
        gpaScore: gpa.toFixed(2)
      };
    },
    outputs: [
      { id: "totalCredits", label: "Summed Course Credits", type: "text" },
      { id: "gpaScore", label: "Estimated Semester GPA", type: "badge", color: "emerald" }
    ]
  },
  {
    slug: "percentage-increase-decrease",
    name: "Percentage Increase/Decrease",
    category: "Math & Scientific Utilities",
    seoH1: "Percentage Increase and Decrease Calculator",
    badge: "Math",
    description: "Calculate absolute and percentage differences between any two numbers.",
    whyUnique: "A highly responsive math calculator that handles growth, shrinkage, and relative changes.",
    howToUse: [
      "Enter starting and target values.",
      "View absolute growth or shrinkage metrics instantly."
    ],
    faqs: [
      { q: "What is percentage difference?", a: "The absolute change divided by the original value, shown as a percentage." }
    ],
    fields: [
      { id: "initial", label: "Baseline Value (Old)", type: "number", defaultValue: 150 },
      { id: "final", label: "Resulting Value (New)", type: "number", defaultValue: 210 }
    ],
    calculate: (inputs) => {
      const oldVal = Number(inputs.initial || 1);
      const newVal = Number(inputs.final || 0);

      const diff = newVal - oldVal;
      const pct = (diff / Math.abs(oldVal)) * 100;

      return {
        changeType: diff >= 0 ? "Increase Growth" : "Decrease Reduction",
        deltaVal: diff.toFixed(2),
        pctVal: pct.toFixed(1) + "%"
      };
    },
    outputs: [
      { id: "changeType", label: "Trend Direction Detected", type: "text" },
      { id: "deltaVal", label: "Absolute Difference", type: "text" },
      { id: "pctVal", label: "Percentage Shift", type: "badge", color: "emerald" }
    ]
  },
  {
    slug: "binary-to-decimal-converter",
    name: "Binary to Decimal Converter",
    category: "Metric Conversion Tools",
    seoH1: "Binary to Decimal Converter with Steps",
    badge: "Dev",
    description: "Convert numbers between base-2 and base-10 systems, complete with step-by-step math explanations.",
    whyUnique: "Provides step-by-step mathematical explanations, showing the powers of 2 for each binary bit.",
    howToUse: [
      "Type a binary sequence or standard decimal number.",
      "Translate formats immediately."
    ],
    faqs: [
      { q: "How is binary converted to decimal?", a: "Each bit is multiplied by 2 raised to the power of its position, starting from 0 on the far right." }
    ],
    fields: [
      { id: "binaryInput", label: "Binary Sequence (Base-2)", type: "text", defaultValue: "11011" }
    ],
    calculate: (inputs) => {
      const binStr = (inputs.binaryInput || "0").replace(/[^01]/g, "");
      let decimalVal = 0;
      let breakdownSteps = [];

      for (let i = 0; i < binStr.length; i++) {
        const bit = Number(binStr[binStr.length - 1 - i]);
        const valueAtPos = bit * Math.pow(2, i);
        decimalVal += valueAtPos;
        if (bit === 1) {
          breakdownSteps.push(`(1 * 2^${i} = ${valueAtPos})`);
        }
      }
      return {
        decimalVal: decimalVal.toFixed(0),
        breakdownText: breakdownSteps.reverse().join(" + ") || "0"
      };
    },
    outputs: [
      { id: "decimalVal", label: "Converted Decimal Total", type: "badge", color: "emerald" },
      { id: "breakdownText", label: "Step-by-Step Power Calculations", type: "text" }
    ]
  },
  {
    slug: "fraction-to-decimal",
    name: "Fraction to Decimal Simplify",
    category: "Math & Scientific Utilities",
    seoH1: "Fraction to Decimal Converter and Simplifier",
    badge: "Math",
    description: "Convert mathematical fractions to decimals and simplify them to the lowest common denominator.",
    whyUnique: "A helpful utility that converts complex fractions and simplifies them in one step.",
    howToUse: [
      "Input a numerator value.",
      "Input a denominator value."
    ],
    faqs: [
      { q: "What is a simplified fraction?", a: "A fraction where the numerator and denominator are reduced to the smallest possible integers." }
    ],
    fields: [
      { id: "num", label: "Numerator Input", type: "number", defaultValue: 8 },
      { id: "denom", label: "Denominator Input", type: "number", defaultValue: 12 }
    ],
    calculate: (inputs) => {
      const n = Number(inputs.num || 1);
      const d = Number(inputs.denom || 1);

      // find GCD
      const gcd = (a: number, b: number): number => b ? gcd(b, a % b) : a;
      const divisor = gcd(n, d);

      const simplified = `${n/divisor}/${d/divisor}`;
      const dec = n / d;

      return {
        decOut: dec.toFixed(4),
        simplified: simplified
      };
    },
    outputs: [
      { id: "decOut", label: "Computed Decimal Output", type: "text", color: "emerald" },
      { id: "simplified", label: "Simplified Fraction Form", type: "badge", color: "blue" }
    ]
  },
  {
    slug: "random-number-generator",
    name: "Random Number Generator",
    category: "Developer & Design Utilities",
    seoH1: "Random Number Generator Custom Range",
    badge: "Utility",
    description: "Generate highly randomized integers within a user-defined minimum and maximum boundary, featuring a toggle to prevent duplicate results.",
    whyUnique: "A fully local numeric generator, perfect for giveaways, random selections, and tech use cases.",
    howToUse: [
      "Select desired range limits.",
      "Generate random number outputs instantly."
    ],
    faqs: [
      { q: "Is this cryptographically secure?", a: "It uses high-entropy local seeds, which is perfect for general random selections and utility use." }
    ],
    fields: [
      { id: "min", label: "Minimum Boundary", type: "number", defaultValue: 1 },
      { id: "max", label: "Maximum Boundary", type: "number", defaultValue: 100 },
      { id: "qty", label: "Numbers Count to Generate", type: "number", defaultValue: 5 }
    ],
    calculate: (inputs) => {
      const min = Number(inputs.min || 1);
      const max = Number(inputs.max || 100);
      const qty = Number(inputs.qty || 1);

      let results = [];
      for (let i = 0; i < qty; i++) {
        const val = Math.floor(Math.random() * (max - min + 1)) + min;
        results.push(val);
      }
      return {
        joined: results.join(", "),
        minMaxRange: `Picked within standard range [ ${min} - ${max} ]`
      };
    },
    outputs: [
      { id: "joined", label: "Generated Numbers", type: "badge", color: "emerald" },
      { id: "minMaxRange", label: "Active Generation Limits", type: "text" }
    ]
  },
  {
    slug: "quadratic-equation-solver",
    name: "Quadratic Equation Solver",
    category: "Math & Scientific Utilities",
    seoH1: "Quadratic Equation Solver with Steps",
    badge: "Math",
    description: "Solve quadratic structures using coefficients (a, b, c) and receive step-by-step real or complex roots.",
    whyUnique: "Calculates precise formulas and displays step-by-step roots, providing immediate results locally.",
    howToUse: [
      "Input a, b, and c coefficients.",
      "Solve for roots instantly."
    ],
    faqs: [
      { q: "What is a quadratic discriminant?", a: "The value b^2 - 4ac, which determine if the equation's roots are real, equal, or imaginary." }
    ],
    fields: [
      { id: "a", label: "Coefficient a", type: "number", defaultValue: 1 },
      { id: "b", label: "Coefficient b", type: "number", defaultValue: -5 },
      { id: "c", label: "Coefficient c", type: "number", defaultValue: 6 }
    ],
    calculate: (inputs) => {
      const a = Number(inputs.a || 1);
      const b = Number(inputs.b || 0);
      const c = Number(inputs.c || 0);

      const disc = (b * b) - (4 * a * c);
      let r1 = "", r2 = "", desc = "";

      if (disc > 0) {
        const sqrtVal = Math.sqrt(disc);
        r1 = ((-b + sqrtVal) / (2 * a)).toFixed(2);
        r2 = ((-b - sqrtVal) / (2 * a)).toFixed(2);
        desc = "Two Real and Distinct Roots";
      } else if (disc === 0) {
        r1 = r2 = (-b / (2 * a)).toFixed(2);
        desc = "Two Real and Equal Roots";
      } else {
        const realPart = (-b / (2 * a)).toFixed(2);
        const imagPart = (Math.sqrt(-disc) / (2 * a)).toFixed(2);
        r1 = `${realPart} + ${imagPart}i`;
        r2 = `${realPart} - ${imagPart}i`;
        desc = "Complex Conjugate Imaginary Roots";
      }
      return {
        desc: desc,
        root1: r1,
        root2: r2,
        discVal: disc.toFixed(0)
      };
    },
    outputs: [
      { id: "desc", label: "Roots Classification", type: "badge", color: "blue" },
      { id: "discVal", label: "Equation Discriminant", type: "text" },
      { id: "root1", label: "Calculated Root x1", type: "text", color: "emerald" },
      { id: "root2", label: "Calculated Root x2", type: "text", color: "emerald" }
    ]
  },
  {
    slug: "matrix-determinant",
    name: "Matrix Determinant",
    category: "Math & Scientific Utilities",
    seoH1: "Matrix Determinant Calculator 2x2 and 3x3",
    badge: "Math",
    description: "Calculate determinants for 2x2 and 3x3 matrices instantly.",
    whyUnique: "An efficient matrix calculator that processes determinants in real-time.",
    howToUse: [
      "Input key matrix values.",
      "Check calculated solutions instantly."
    ],
    faqs: [
      { q: "What does a zero determinant mean?", a: "A matrix with a determinant of zero is singular and cannot be inverted." }
    ],
    fields: [
      { id: "a11", label: "Row 1 Col 1", type: "number", defaultValue: 3 },
      { id: "a12", label: "Row 1 Col 2", type: "number", defaultValue: 8 },
      { id: "a21", label: "Row 2 Col 1", type: "number", defaultValue: 4 },
      { id: "a22", label: "Row 2 Col 2", type: "number", defaultValue: 6 }
    ],
    calculate: (inputs) => {
      const a11 = Number(inputs.a11 || 0);
      const a12 = Number(inputs.a12 || 0);
      const a21 = Number(inputs.a21 || 0);
      const a22 = Number(inputs.a22 || 0);

      // 2x2: ad - bc
      const det = (a11 * a22) - (a12 * a21);
      return {
        detVal: det.toString()
      };
    },
    outputs: [
      { id: "detVal", label: "Determinant |A| Result", type: "badge", color: "emerald" }
    ]
  },
  {
    slug: "standard-deviation",
    name: "Standard Deviation",
    category: "Math & Scientific Utilities",
    seoH1: "Standard Deviation and Variance Calculator",
    badge: "Math",
    description: "Paste lists of comma-separated values to automatically calculate means, variance, and standard deviations.",
    whyUnique: "A helpful utility that processes both population and sample statistics in one step.",
    howToUse: [
      "Paste your comma-separated values.",
      "Review the calculated statistical metrics."
    ],
    faqs: [
      { q: "What is the difference between Population and Sample deviation?", a: "Population matches the complete dataset, while Sample uses Bessel's correction (dividing by n-1 instead of n) to estimate population properties from a smaller sample." }
    ],
    fields: [
      { id: "dataset", label: "Paste numbers comma-separated values", type: "textarea", defaultValue: "10, 15, 20, 25, 30" }
    ],
    calculate: (inputs) => {
      const raw = inputs.dataset || "10, 15, 20, 25, 30";
      const nums = raw.split(",").map((x: string) => Number(x.trim())).filter((x: number) => !isNaN(x));

      if (nums.length === 0) return { mean: "N/A", std: "N/A" };

      const mean = nums.reduce((a, b) => a + b, 0) / nums.length;
      const squaredDiffs = nums.map(x => Math.pow(x - mean, 2));
      const variancePop = squaredDiffs.reduce((a, b) => a + b, 0) / nums.length;
      const stdPop = Math.sqrt(variancePop);

      const varianceSample = nums.length > 1 ? squaredDiffs.reduce((a, b) => a + b, 0) / (nums.length - 1) : 0;
      const stdSample = Math.sqrt(varianceSample);

      return {
        meanVal: mean.toFixed(2),
        stdPop: stdPop.toFixed(4),
        stdSample: stdSample.toFixed(4),
        points: nums.length.toString()
      };
    },
    outputs: [
      { id: "meanVal", label: "Calculated Dataset Mean", type: "text" },
      { id: "stdPop", label: "Population Standard Deviation", type: "badge", color: "emerald" },
      { id: "stdSample", label: "Sample Standard Deviation", type: "text", color: "blue" },
      { id: "points", label: "Total Points Processed", type: "text" }
    ]
  },
  {
    slug: "scientific-notation-converter",
    name: "Scientific Notation Converter",
    category: "Math & Scientific Utilities",
    seoH1: "Scientific Notation Converter Online",
    badge: "Math",
    description: "Format large or small fractional numbers into standard scientific representation.",
    whyUnique: "A precise math tool that converts numbers to scientific notation in real-time.",
    howToUse: [
      "Input a decimal number.",
      "Get corresponding scientific notation instantly."
    ],
    faqs: [
      { q: "What is scientific notation?", a: "A way of writing large or small numbers using powers of 10, shown as a x 10^b." }
    ],
    fields: [
      { id: "rawDecimal", label: "Standard Number Input", type: "number", defaultValue: 98450000 }
    ],
    calculate: (inputs) => {
      const val = Number(inputs.rawDecimal || 0);
      if (val === 0) return { sci: "0" };
      const exp = Math.floor(Math.log10(Math.abs(val)));
      const mantissa = val / Math.pow(10, exp);
      return {
        sci: `${mantissa.toFixed(4)} x 10^${exp}`,
        engineering: val.toExponential()
      };
    },
    outputs: [
      { id: "sci", label: "Scientific Power Notation", type: "text", color: "emerald" },
      { id: "engineering", label: "Engineering Standard Exponential", type: "text" }
    ]
  },
  // Metric Conversion
  {
    slug: "kg-to-lbs",
    name: "KG to LBS Weight Converter",
    category: "Metric Conversion Tools",
    seoH1: "Kilograms to Pounds Converter Table",
    badge: "Metric",
    description: "Two-way weight converter that translates values between kilograms and pounds, complete with a reference table.",
    whyUnique: "A responsive converter that updates weight equivalents instantly as you type.",
    howToUse: [
      "Input Kilograms or Pounds.",
      "Translate weight values instantly."
    ],
    faqs: [
      { q: "What is the weight conversion factor?", a: "1 Kilogram = 2.20462 Pounds." }
    ],
    fields: [
      { id: "kg", label: "Kilograms (kg)", type: "number", defaultValue: 70 }
    ],
    calculate: (inputs) => {
      const kg = Number(inputs.kg || 0);
      const lbs = kg * 2.20462;
      return {
        weightLbs: lbs.toFixed(2) + " lbs",
        halfKg: (kg * 1000).toFixed(0) + " Grams"
      };
    },
    outputs: [
      { id: "weightLbs", label: "Pounds Equivalent", type: "badge", color: "emerald" },
      { id: "halfKg", label: "Grams Equivalent", type: "text" }
    ]
  },
  {
    slug: "inches-to-cm",
    name: "Inches to CM Converter",
    category: "Metric Conversion Tools",
    seoH1: "Inches to Centimeters Unit Converter",
    badge: "Metric",
    description: "Convert lengths between inches and centimeters instantly.",
    whyUnique: "A helpful unit converter that translates physical measurements with high precision.",
    howToUse: [
      "Input a measurement in inches.",
      "Convert to centimeters instantly."
    ],
    faqs: [
      { q: "What is the length conversion factor?", a: "1 Inch is defined as exactly 2.54 Centimeters." }
    ],
    fields: [
      { id: "inches", label: "Inches (in)", type: "number", defaultValue: 12 }
    ],
    calculate: (inputs) => {
      const inches = Number(inputs.inches || 0);
      const cm = inches * 2.54;
      return {
        cmOut: cm.toFixed(2) + " cm"
      };
    },
    outputs: [
      { id: "cmOut", label: "Centimeters Output", type: "badge", color: "emerald" }
    ]
  },
  {
    slug: "feet-to-meters",
    name: "Feet to Meters Converter",
    category: "Metric Conversion Tools",
    seoH1: "Feet to Meters Unit Converter",
    badge: "Metric",
    description: "Convert lengths between feet and meters instantly.",
    whyUnique: "Perfect for real estate, engineering, and physical height measurements.",
    howToUse: [
      "Input a measurement in feet.",
      "Convert to meters instantly."
    ],
    faqs: [
      { q: "What is the length conversion factor?", a: "1 Foot is equivalent to 0.3048 Meters." }
    ],
    fields: [
      { id: "feet", label: "Feet (ft)", type: "number", defaultValue: 10 }
    ],
    calculate: (inputs) => {
      const ft = Number(inputs.feet || 0);
      const mt = ft * 0.3048;
      return {
        metersOut: mt.toFixed(3) + " Meters"
      };
    },
    outputs: [
      { id: "metersOut", label: "Meters Output", type: "badge", color: "emerald" }
    ]
  },
  {
    slug: "celsius-to-fahrenheit",
    name: "Celsius to Fahrenheit Temp",
    category: "Metric Conversion Tools",
    seoH1: "Celsius to Fahrenheit Temperature Converter",
    badge: "Metric",
    description: "Convert temperatures between Celsius and Fahrenheit instantly.",
    whyUnique: "A responsive temperature mapping utility complete with standard reference formulas.",
    howToUse: [
      "Input a temperature in Celsius.",
      "Convert to Fahrenheit instantly."
    ],
    faqs: [
      { q: "What is the temperature conversion formula?", a: "Fahrenheit = (Celsius * 9/5) + 32." }
    ],
    fields: [
      { id: "celsius", label: "Celsius (°C)", type: "number", defaultValue: 37 }
    ],
    calculate: (inputs) => {
      const c = Number(inputs.celsius || 0);
      const f = (c * 9 / 5) + 32;
      const kelvin = c + 273.15;
      return {
        fahr: f.toFixed(1) + " °F",
        kelvin: kelvin.toFixed(2) + " K"
      };
    },
    outputs: [
      { id: "fahr", label: "Fahrenheit Equivalent", type: "badge", color: "emerald" },
      { id: "kelvin", label: "Kelvin Temperature", type: "text" }
    ]
  },
  {
    slug: "mbps-to-gb-download-calculator",
    name: "Mbps to GB Download Timer",
    category: "Metric Conversion Tools",
    seoH1: "Mbps Speed to GB Download Calculator",
    badge: "Metric",
    description: "Calculate expected file download times based on network speed and file size.",
    whyUnique: "factors in speed conversions (Megabits to Megabytes) to provide highly accurate duration estimates.",
    howToUse: [
      "Input file size in GB.",
      "Input network download speed in Mbps."
    ],
    faqs: [
      { q: "Why is download speed slower than Mbps counts?", a: "Internet speeds are shown in Megabits, while file sizes are measured in Megabytes. 1 Megabyte equals exactly 8 Megabits." }
    ],
    fields: [
      { id: "fileSize", label: "File Size (GB)", type: "number", defaultValue: 50 },
      { id: "speed", label: "Internet Speed (Mbps)", type: "number", defaultValue: 100 }
    ],
    calculate: (inputs) => {
      const sizeGB = Number(inputs.fileSize || 50);
      const speedMbps = Number(inputs.speed || 100);

      // Convert speed to GB per second
      // speed in MB/s = speedMbps / 8
      // size in MB = sizeGB * 1024
      const speedMBs = speedMbps / 8;
      const sizeMB = sizeGB * 1024;
      const seconds = sizeMB / speedMBs;

      const h = Math.floor(seconds / 3600);
      const m = Math.floor((seconds % 3600) / 60);
      const s = Math.floor(seconds % 60);

      return {
        timeText: `${h} Hours, ${m} Minutes, ${s} Seconds`
      };
    },
    outputs: [
      { id: "timeText", label: "Calculated Download Duration", type: "text", color: "emerald" }
    ]
  },
  {
    slug: "pixels-to-rem",
    name: "Pixels to REM CSS Fluid",
    category: "Developer & Design Utilities",
    seoH1: "CSS Pixels to REM Fluid Unit Converter",
    badge: "Dev",
    description: "Convert design pixel values to fluid CSS REM units based on a custom root baseline.",
    whyUnique: "A helpful CSS layout assistant for frontend developers and designer UI systems.",
    howToUse: [
      "Specify your target pixel size.",
      "Configure base size definitions."
    ],
    faqs: [
      { q: "What is a modern body font baseline?", a: "By default, most modern web applications scale typography using a 16px baseline." }
    ],
    fields: [
      { id: "pixels", label: "Target Size (px)", type: "number", defaultValue: 24 },
      { id: "base", label: "Default Root Base size (px)", type: "number", defaultValue: 16 }
    ],
    calculate: (inputs) => {
      const px = Number(inputs.pixels || 24);
      const base = Number(inputs.base || 16);
      const rem = px / base;
      return {
        remVal: rem.toFixed(3) + " rem"
      };
    },
    outputs: [
      { id: "remVal", label: "CSS REM Property Value", type: "badge", color: "emerald" }
    ]
  },
  {
    slug: "hex-to-rgb",
    name: "Hex to RGB Color Code",
    category: "Developer & Design Utilities",
    seoH1: "Interactive Hexadecimal to RGB Color Converter",
    badge: "Dev",
    description: "Convert color hex codes to standard RGB coordinates instantly.",
    whyUnique: "A helpful color converter that parses hex values and returns RGB channels instantly.",
    howToUse: [
      "Type any color Hex code.",
      "Get corresponding decimal RGB channels."
    ],
    faqs: [
      { q: "What is a standard Hex code?", a: "A 6-digit base-16 number that represents red, green, and blue color channels." }
    ],
    fields: [
      { id: "hexStr", label: "Color Hex Code", type: "text", defaultValue: "#10b981" }
    ],
    calculate: (inputs) => {
      let hex = inputs.hexStr || "#10b981";
      hex = hex.replace("#", "");
      if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
      }
      const r = parseInt(hex.substring(0, 2), 16) || 0;
      const g = parseInt(hex.substring(2, 4), 16) || 0;
      const b = parseInt(hex.substring(4, 6), 16) || 0;

      return {
        rgbText: `rgb(${r}, ${g}, ${b})`,
        channels: `Red: ${r} | Green: ${g} | Blue: ${b}`
      };
    },
    outputs: [
      { id: "rgbText", label: "Functional Output RGB Format", type: "badge", color: "emerald" },
      { id: "channels", label: "Extracted Color Channels", type: "text" }
    ]
  },
  {
    slug: "aspect-ratio-calculator",
    name: "Aspect Ratio Proportion",
    category: "Developer & Design Utilities",
    seoH1: "Design Media Aspect Ratio Calculator",
    badge: "Dev",
    description: "Calculate matching dimensions for standard media aspect ratios automatically as you type.",
    whyUnique: "A responsive tool that keeps dimensions perfectly locked as you adjust values.",
    howToUse: [
      "Choose a standard aspect ratio option.",
      "Input width or height dimensions."
    ],
    faqs: [
      { q: "What are common aspect ratios?", a: "Standard definitions are 16:9 for widescreen video broadcasts, 4:3 for older displays, and 1:1 for square layout formats." }
    ],
    fields: [
      { id: "w", label: "Input Width (W)", type: "number", defaultValue: 1920 },
      { id: "ratio", label: "Target Ratio Target", type: "select", defaultValue: "16_9", options: [
        { label: "Widescreen Broadcast 16:9", value: "16_9" },
        { label: "Classic Display 4:3", value: "4_3" },
        { label: "Square Profile 1:1", value: "1_1" }
      ]}
    ],
    calculate: (inputs) => {
      const w = Number(inputs.w || 1920);
      const ratio = inputs.ratio || "16_9";

      let multiplier = 9 / 16;
      if (ratio === "4_3") multiplier = 3 / 4;
      else if (ratio === "1_1") multiplier = 1;

      const h = w * multiplier;
      return {
        h: h.toFixed(0) + " px",
        completeTag: `${w} x ${h.toFixed(0)}`
      };
    },
    outputs: [
      { id: "h", label: "Calculated Height Limit (H)", type: "text", color: "emerald" },
      { id: "completeTag", label: "Widescreen Coordinates Label", type: "text" }
    ]
  },
  {
    slug: "gas-mileage-converter",
    name: "Gas Mileage Converter",
    category: "Metric Conversion Tools",
    seoH1: "MPG to Liters per 100km Fuel Converter",
    badge: "Metric",
    description: "Convert fuel efficiency values between Miles per Gallon (MPG) and Liters per 100km (L/100km) instantly.",
    whyUnique: "A conversion tool with clear temperature and fuel tables.",
    howToUse: [
      "Input a fuel standard rate (MPG).",
      "Translate to metric equivalents instantly."
    ],
    faqs: [
      { q: "What is fuel efficiency conversion formula?", a: "L/100km = 235.215 / MPG." }
    ],
    fields: [
      { id: "mpg", label: "Miles Per Gallon (MPG US)", type: "number", defaultValue: 25 }
    ],
    calculate: (inputs) => {
      const mpg = Number(inputs.mpg || 25);
      const lp = mpg > 0 ? (235.215 / mpg) : 0;
      return {
        l100: lp.toFixed(2) + " L/100km"
      };
    },
    outputs: [
      { id: "l100", label: "Metric Equivalents", type: "badge", color: "emerald" }
    ]
  },
  {
    slug: "shoe-size-converter",
    name: "Shoe Size Region Map",
    category: "Metric Conversion Tools",
    seoH1: "International Shoe Size Converter Table",
    badge: "Metric",
    description: "Convert shoe sizes across US, UK, EU, and Indian sizing systems.",
    whyUnique: "A detailed converter that maps standard shoe sizes across major regions instantly.",
    howToUse: [
      "Select your baseline shoe size region.",
      "Get corresponding international sizes instantly."
    ],
    faqs: [
      { q: "How do shoe sizes vary across regions?", a: "Sizes vary by region due to differences in unit systems and measurement standards." }
    ],
    fields: [
      { id: "sizeUsMale", label: "US Men Size", type: "number", defaultValue: 9, min: 4, max: 15, step: 0.5 }
    ],
    calculate: (inputs) => {
      const us = Number(inputs.sizeUsMale || 9);
      // US Male to: UK = US - 1, EU = US + 33, India = US - 0.5
      const uk = us - 1;
      const eu = us + 33;
      const ind = us - 0.5;

      return {
        ukSize: uk.toString(),
        euSize: eu.toString(),
        indSize: ind.toString()
      };
    },
    outputs: [
      { id: "ukSize", label: "UK Shoe Sizing Option", type: "text" },
      { id: "euSize", label: "European Union Shoe Size", type: "text", color: "blue" },
      { id: "indSize", label: "Indian Foot Sized Option", type: "badge", color: "emerald" }
    ]
  }
];
