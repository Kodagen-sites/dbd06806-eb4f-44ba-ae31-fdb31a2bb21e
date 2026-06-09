"use client";

import { useState } from "react";
import Link from "next/link";
import ScrollCanvas from "@/components/ScrollCanvas";
import { siteConfig } from "@/content/site-config";
import framesManifest from "@/content/frames-manifest.json";
import {
  FadeUp,
  StaggerChildren,
  TextReveal,
  ImageRevealMask,
  MagneticButton,
  CardTiltLayer,
  HeroScrollText,
} from "@/components/motion";
import { imageSlot } from "@/lib/assets";

export default function Home() {
  return (
    <div className="relative">
      <ScrubHero />
      <ExperiencesSection />
      <HowItWorksSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
}

// ============================================================
// HERO — scroll-paced cinematic (ScrollCanvas frame scrub + chapters)
// ============================================================
function ScrubHero() {
  const [p, setP] = useState(0);

  return (
    <ScrollCanvas
      frameCount={framesManifest.frameCount}
      pattern={framesManifest.frameUrlTemplate}
      scrollDistance={siteConfig.scrollHero.scrollDistance}
      loadingLabel={siteConfig.company.name}
      loadingVariant="L4"
      onProgress={setP}
    >
      <HeroScrollText
        progress={p}
        position="bottom-left"
        textColor="#F2FBFE"
        accentColor={siteConfig.brand.accent}
        accentTextColor={siteConfig.brand.bg}
        chapters={[
          {
            at: 0,
            eyebrow: `${siteConfig.company.name} — ${siteConfig.company.tagline}`,
            headlineLines: ["Step onto", "the pitch"],
            subline:
              "Front-row at the World Cup, streamed straight to your headset — no ticket, no travel.",
          },
          {
            at: 0.4,
            eyebrow: "Presence over pixels",
            headlineLines: ["Feel every", "roar"],
            subline:
              "Thousands of living, chanting fans render around you in spatial audio. Matchday, alive.",
          },
          {
            at: 0.75,
            eyebrow: "Anywhere on earth",
            headlineLines: ["The World Cup,", "in VR"],
            subline: "Pitchside seats and 360° replays on any standalone headset.",
            cta: { label: siteConfig.cta.primary, href: "#contact" },
          },
        ]}
      />

      <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.4em] text-white/60">
        Scroll ↓
      </div>
    </ScrollCanvas>
  );
}

// ============================================================
// #experiences — services as tilting image cards
// ============================================================
function ExperiencesSection() {
  return (
    <section
      id="experiences"
      className="relative min-h-screen scroll-mt-24 border-t border-white/5 bg-bg px-6 py-28"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-14">
          <FadeUp>
            <div className="mb-3 font-mono text-[11px] uppercase tracking-[0.3em] text-primary/80">
              {siteConfig.servicesHeading}
            </div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="font-display text-4xl font-light text-white md:text-6xl">
              Six ways into the game
            </h2>
          </FadeUp>
        </div>

        <StaggerChildren
          staggerDelay={0.08}
          className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {siteConfig.services.slice(0, 6).map((svc) => (
            <CardTiltLayer
              key={svc.slug}
              className="group h-full rounded-2xl border border-white/10 bg-white/[0.02] transition-colors hover:border-primary/40"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-t-2xl bg-gradient-to-br from-primary/30 via-white/5 to-accent/30">
                <img
                  src={imageSlot(`service-${svc.slug}`, `/service-${svc.slug}.jpg`)}
                  alt={svc.name}
                  className="absolute inset-0 h-full w-full object-cover opacity-100 transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => ((e.target as HTMLImageElement).style.display = "none")}
                />
                <div className="absolute bottom-4 left-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-primary/40 bg-primary/20 backdrop-blur-md">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="mb-2 font-display text-lg text-white">{svc.name}</h3>
                <p className="text-sm leading-snug text-white/60">{svc.description}</p>
                {svc.highlights && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {svc.highlights.map((h) => (
                      <span
                        key={h}
                        className="rounded-full border border-white/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-white/55"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </CardTiltLayer>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}

// ============================================================
// #how — oversized manifesto word + 3-step process
// ============================================================
function HowItWorksSection() {
  return (
    <section
      id="how"
      className="relative min-h-screen scroll-mt-24 overflow-hidden px-6 py-28 md:px-12"
      style={{ background: siteConfig.brand.accent }}
    >
      <div className="mx-auto w-full max-w-7xl">
        <FadeUp>
          <div
            className="mb-6 font-mono text-xs uppercase tracking-[0.4em] opacity-60"
            style={{ color: siteConfig.brand.bg }}
          >
            {siteConfig.whyUs.heading}
          </div>
        </FadeUp>

        <TextReveal
          as="h2"
          className="break-words font-display text-[72px] font-light leading-[0.88] tracking-tight sm:text-[120px] md:text-[200px] lg:text-[280px]"
          stagger={0.08}
        >
          {siteConfig.sectionThemeWord}
        </TextReveal>

        <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-3">
          {siteConfig.process.map((step) => (
            <FadeUp key={step.step} delay={0.1 * step.step}>
              <div style={{ color: siteConfig.brand.bg }}>
                <div className="font-display text-5xl font-light opacity-40">
                  {String(step.step).padStart(2, "0")}
                </div>
                <h3 className="mt-3 font-display text-xl font-semibold">{step.title}</h3>
                <p className="mt-2 max-w-xs text-sm opacity-75">{step.description}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// #about — story + reveal-masked headset mockup
// ============================================================
function AboutSection() {
  const feature = siteConfig.features[0];

  return (
    <section
      id="about"
      className="relative min-h-screen scroll-mt-24 border-t border-white/5 bg-bg px-6 py-28"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 md:grid-cols-2">
        <div>
          <FadeUp>
            <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.3em] text-primary/80">
              {siteConfig.aboutHeading}
            </div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="mb-6 font-display text-4xl font-light leading-[1.05] text-white md:text-6xl">
              {feature.title}
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="mb-8 text-lg leading-relaxed text-white/70">{siteConfig.aboutStory}</p>
          </FadeUp>

          <StaggerChildren staggerDelay={0.08} initialDelay={0.3} className="space-y-3">
            {siteConfig.whyUs.items.map((item) => (
              <div key={item.title} className="flex items-start gap-3">
                <div className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                <div>
                  <div className="font-display text-sm font-semibold text-white">{item.title}</div>
                  <div className="mt-0.5 text-sm text-white/60">{item.description}</div>
                </div>
              </div>
            ))}
          </StaggerChildren>

          <div className="mt-10 flex flex-wrap gap-8">
            {siteConfig.stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-4xl font-light text-primary">{s.value}</div>
                <div className="mt-1 font-mono text-[11px] uppercase tracking-wider text-white/50">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <ImageRevealMask
            src={imageSlot("section-2-mockup", "/section-2-mockup.jpg")}
            alt={feature.title}
            aspectClass="aspect-[4/3]"
            className="rounded-2xl border border-white/10 bg-gradient-to-br from-primary/20 via-white/5 to-accent/20"
          />
        </div>
      </div>
    </section>
  );
}

// ============================================================
// #contact — CTA + trust bar
// ============================================================
function ContactSection() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-24 border-t border-white/5 bg-bg px-6 py-32"
    >
      <div className="mx-auto max-w-3xl text-center">
        <FadeUp>
          <h2 className="mb-6 font-display text-5xl font-light leading-[1.0] text-white md:text-7xl">
            {siteConfig.ctaBlock.heading}
          </h2>
        </FadeUp>
        <FadeUp delay={0.15}>
          <p className="mx-auto mb-10 max-w-xl text-lg text-white/70">
            {siteConfig.ctaBlock.description}
          </p>
        </FadeUp>
        <FadeUp delay={0.3}>
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <MagneticButton
              as="a"
              href={`mailto:${siteConfig.company.email}`}
              className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-primary px-8 py-4 font-display font-medium text-bg hover:brightness-110"
            >
              {siteConfig.cta.primary}
            </MagneticButton>
            <a
              href="#experiences"
              className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-white/20 px-8 py-4 font-display font-medium text-white hover:bg-white/5"
            >
              {siteConfig.cta.secondary}
            </a>
          </div>
        </FadeUp>
        <FadeUp delay={0.45}>
          <div className="mt-8 flex flex-wrap justify-center gap-x-4 gap-y-2 font-mono text-[10px] uppercase tracking-wider text-white/50 md:text-[11px]">
            {siteConfig.trustBar.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
