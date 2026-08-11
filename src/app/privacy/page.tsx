import type { Metadata } from "next";
import Link from "next/link";
import { Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Wappo CRM by CodingGeeks.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-card border border-border rounded-2xl p-8 sm:p-12 shadow-sm">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-10 w-10 items-center justify-center rounded-lg bg-primary/10 flex">
            <Shield className="h-5 w-5 text-primary" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight">Privacy Policy</h1>
        </div>

        <p className="text-muted-foreground mb-6">
          Last updated: August 11, 2026
        </p>

        <div className="prose prose-slate dark:prose-invert space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-3">1. Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              Welcome to Wappo CRM, operated by CodingGeeks (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). 
              We are committed to protecting your personal information and your right to privacy. If you have 
              any questions or concerns about this privacy notice, or our practices with regards to your personal 
              information, please contact us.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">2. Information We Collect</h2>
            <p className="text-muted-foreground leading-relaxed">
              We collect information that you provide directly to us when you set up an account, connect your WhatsApp Business API, or interact with our CRM platform. This includes:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-muted-foreground">
              <li>Account information (name, email address, password).</li>
              <li>WhatsApp Integration details (Phone number ID, WABA ID, Access Tokens).</li>
              <li>Customer data processed on your behalf (chat history, contact information, templates).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">3. How We Use Your Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              We use personal information collected via our app for a variety of business purposes, including:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-muted-foreground">
              <li>To facilitate account creation and logon processes.</li>
              <li>To provide and maintain the Wappo CRM platform services.</li>
              <li>To route WhatsApp inbound and outbound messages via webhooks.</li>
              <li>To enforce our terms, conditions, and policies.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">4. Sharing Your Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations. In particular, data is shared with:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-muted-foreground">
              <li><strong>Meta (Facebook)</strong>: To interface with the WhatsApp Business Cloud API.</li>
              <li><strong>Supabase</strong>: For secure data storage and authentication.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">5. Data Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              We implement appropriate technical and organizational security measures, including token encryption (AES-256-GCM), designed to protect the security of any personal information we process.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">6. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have questions or comments about this policy, you may contact CodingGeeks at our primary support channel.
            </p>
          </section>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex justify-between text-sm text-muted-foreground">
          <Link href="/terms" className="hover:text-foreground underline">
            Terms of Service
          </Link>
          <Link href="/" className="hover:text-foreground underline">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
