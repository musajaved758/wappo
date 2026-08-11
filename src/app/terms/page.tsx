import type { Metadata } from "next";
import Link from "next/link";
import { FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Wappo CRM by CodingGeeks.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-card border border-border rounded-2xl p-8 sm:p-12 shadow-sm">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-10 w-10 items-center justify-center rounded-lg bg-primary/10 flex">
            <FileText className="h-5 w-5 text-primary" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight">Terms of Service</h1>
        </div>

        <p className="text-muted-foreground mb-6">
          Last updated: August 11, 2026
        </p>

        <div className="prose prose-slate dark:prose-invert space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-3">1. Agreement to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing or using Wappo CRM (operated by CodingGeeks), you agree to be bound by these 
              Terms of Service. If you do not agree to all of these terms, do not access or use our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">2. Description of Service</h2>
            <p className="text-muted-foreground leading-relaxed">
              Wappo CRM provides a self-hostable CRM template and workspace integration for the WhatsApp Business API, 
              including features such as a shared inbox, contact management, sales pipelines, broadcasts, and no-code automations.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">3. User Accounts</h2>
            <p className="text-muted-foreground leading-relaxed">
              When you register an account, you agree to provide accurate and complete information. You are solely 
              responsible for maintaining the confidentiality of your account credentials and for all activities 
              that occur under your account.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">4. WhatsApp Policy Compliance</h2>
            <p className="text-muted-foreground leading-relaxed">
              Your use of the WhatsApp Business API through our software must comply with Meta&apos;s WhatsApp Business Terms of 
              Service, WhatsApp Business Policy, and all other applicable policies. You agree not to use the service 
              for sending spam, unsolicited marketing messages, or prohibited content.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">5. Intellectual Property</h2>
            <p className="text-muted-foreground leading-relaxed">
              The CRM application templates and source codes are licensed under the MIT License. You may copy, modify, 
              distribute, and host the software in accordance with the terms of the MIT License.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">6. Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              In no event shall CodingGeeks, its partners, or developers be liable for any indirect, incidental, special, 
              consequential, or punitive damages, including loss of profits, data, or goodwill, arising out of your 
              use or inability to use our services.
            </p>
          </section>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex justify-between text-sm text-muted-foreground">
          <Link href="/privacy" className="hover:text-foreground underline">
            Privacy Policy
          </Link>
          <Link href="/" className="hover:text-foreground underline">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
