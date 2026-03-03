import { Metadata } from 'next';
import ContactClient from "@/components/ContactClient";

export const metadata: Metadata = {
  title: "Contact Deegonic | Start Your Project Today",
  description: "Ready to upgrade? Contact Deegonic for a free consultation. Website developer in Delhi for local brands.",
};

export default function ContactPage() {
  return <ContactClient />;
}
