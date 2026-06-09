import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/content/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${siteConfig.company.name} collects, uses, and protects your information.`,
};

export default function PrivacyPage() {
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
      <h1 className="mt-6 font-display text-4xl font-light text-white md:text-5xl">Privacy Policy</h1>
      <p className="mt-3 font-mono text-xs uppercase tracking-wider text-white/40">Last updated {updated}</p>

      <div className="mt-10 space-y-8 text-white/70 leading-relaxed">
        <section>
          <h2 className="mb-2 font-display text-xl text-white">Overview</h2>
          <p>
            {siteConfig.company.name} ("we", "us") builds immersive VR sports experiences. This policy
            explains what we collect when you use our app and website, and how we use it.
          </p>
        </section>
        <section>
          <h2 className="mb-2 font-display text-xl text-white">Information we collect</h2>
          <p>
            Account details you provide (such as your email), basic device and headset information needed
            to stream experiences, and anonymized usage analytics that help us improve performance.
          </p>
        </section>
        <section>
          <h2 className="mb-2 font-display text-xl text-white">How we use it</h2>
          <p>
            To deliver and improve our experiences, to communicate about early access and updates, and to
            keep the service secure. We do not sell your personal information.
          </p>
        </section>
        <section>
          <h2 className="mb-2 font-display text-xl text-white">Your choices</h2>
          <p>
            You may request access to, correction of, or deletion of your personal data at any time by
            emailing{" "}
            <a href={`mailto:${siteConfig.company.email}`} className="text-primary hover:underline">
              {siteConfig.company.email}
            </a>
            .
          </p>
        </section>
        <section>
          <h2 className="mb-2 font-display text-xl text-white">Contact</h2>
          <p>
            Questions about this policy? Reach us at{" "}
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
