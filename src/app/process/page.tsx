import { Metadata } from 'next';
import ProcessClient from "@/components/ProcessClient";

export const metadata: Metadata = {
  title: "Process & FAQ | Deegonic - How We Build Premium Sites",
  description: "Learn about the 6-step process Deegonic uses to build high-performance websites for Delhi businesses. FAQ included.",
};

export default function ProcessPage() {
  return <ProcessClient />;
}
