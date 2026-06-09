import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/content/site-config";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `The terms governing your use of ${siteConfig.company.name}.`,
};

export default function TermsPage() {
  const updated = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="mx-auto max-w-3xl px-6 pb-24 pt-36">
      <Link href="/" className="font-mono text-xs uppercase tracking-[0.3em] text-primary/80 hover:text-primary">
        ← Back home
      </Link>
      <h1 className="mt-6 font-display text-4xl font-light text-white md:text-5xl">Terms of Service</h1>
      <p className="mt-3 font-mono text-xs uppercase tracking-wider text-white/40">Last updated {updated}</p>

      <div className="mt-10 space-y-8 text-white/70 leading-relaxed">
        <section>
          <h2 className="mb-2 font-display text-xl text-white">Acceptance of terms</h2>
          <p>
            By accessing {siteConfig.company.name} or joining our early-access program, you agree to these
            terms. If you do not agree, please do not use the service.
          </p>
        </section>
        <section>
          <h2 className="mb-2 font-display text-xl text-white">Use of the service</h2>
          <p>
            Our VR experiences are provided for personal, non-commercial entertainment. You agree not to
            misuse, reverse-engineer, or redistribute the service or its content.
          </p>
        </section>
        <section>
          <h2 className="mb-2 font-display text-xl text-white">Intellectual property</h2>
          <p>
            All software, footage, and branding remain the property of {siteConfig.company.name} and its
            licensors. Match footage may be subject to additional third-party rights.
          </p>
        </section>
        <section>
          <h2 className="mb-2 font-display text-xl text-white">Disclaimer</h2>
          <p>
            The service is provided "as is" during early access. Availability, fixtures, and features may
            change without notice.
          </p>
        </section>
        <section>
          <h2 className="mb-2 font-display text-xl text-white">Contact</h2>
          <p>
            Questions about these terms? Email{" "}
            <a href={`mailto:${siteConfig.company.email}`} className="text-primary hover:underline">
              {siteConfig.company.email}
            </a>
            .
          </p>
        </section>
      </div>
    </article>
  );
}
