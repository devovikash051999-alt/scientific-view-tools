import { Metadata } from 'next';
import ScientificViewsSuiteClient from './page-client';

export const metadata: Metadata = {
  title: 'Scientific Views Tools - Premium 50-in-1 JavaScript Online Calculator Suite',
  description: '50-in-1 premium online calculator, converter, health tracker, and developer utility web suite. Immediate calculations and beautiful design.',
};

export default function Page() {
  return <ScientificViewsSuiteClient />;
}
