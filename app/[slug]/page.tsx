import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { TOOLS_LIST } from '@/lib/tools-registry';
import ScientificViewsSuiteClient from '../page-client';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  const legalPages: Record<string, { title: string; desc: string }> = {
    "privacy-policy": {
      title: "Privacy Policy & Cookie Consent | Scientific Views Tools",
      desc: "Review the privacy guidelines, user data handling, and cookies policy for the Scientific Views free online utilities suite."
    },
    "terms-of-service": {
      title: "Terms of Service & Regulations | Scientific Views Tools",
      desc: "The legal terms, conditions, and user guidelines governing your use of Scientific Views online calculators."
    },
    "disclaimer": {
      title: "Legal Disclaimer & Liability Limitation | Scientific Views Tools",
      desc: "Information liability, software warranty limitations, and calculation terms of service for our free web tools."
    },
    "contact": {
      title: "Contact Us & Accessible Human Feedback | Scientific Views Tools",
      desc: "Get in touch with the Scientific Views team for feature requests, bug reports, or general calculation tool suggestions."
    },
    "about": {
      title: "About Us | Scientific Views Tools - Empowering Decisive Calculations",
      desc: "Learn about Scientific Views, our dedication to high-performance, completely serverless, client-side math and vitality engines."
    }
  };

  if (slug && legalPages[slug]) {
    return {
      title: legalPages[slug].title,
      description: legalPages[slug].desc,
    };
  }

  const tool = TOOLS_LIST.find(t => t.slug === slug);
  if (tool) {
    return {
      title: `${tool.name} - Free Online Tool | Scientific Views`,
      description: `Use our high-precision online ${tool.name.toLowerCase()} for immediate, accurate results. 100% private, serverless client-side computation.`,
    };
  }

  return {
    title: "Scientific Views Tools - Premium 50-in-1 JavaScript Online Calculator Suite",
    description: "50-in-1 premium online calculator, converter, health tracker, and developer utility web suite. Immediate calculations and beautiful design.",
  };
}

export default async function ToolPage({ params }: PageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  // Let's specify exact acceptable paths; anything else will render the standard directory or 404
  const isLegalPage = ["privacy-policy", "terms-of-service", "disclaimer", "contact", "about"].includes(slug);
  const exists = TOOLS_LIST.some(t => t.slug === slug) || isLegalPage;

  // If a user goes to /some-nonexistent-path, we trigger Next.js notFound()
  if (!exists) {
    notFound();
  }

  return <ScientificViewsSuiteClient initialSlug={slug} />;
}
