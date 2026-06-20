import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, ShieldCheck, GitMerge, Sparkles } from 'lucide-react'
import Button from '../components/ui/Button.jsx'
import SectionTitle from '../components/SectionTitle.jsx'
import { Card, CardBody } from '../components/ui/Card.jsx'
import { stats } from '../data/stats.js'
import { products } from '../data/products.js'
import { company } from '../data/company.js'
import { useCountUp } from '../hooks/useCountUp.js'
import brand1 from "../assets/milltex.png";
import brand2 from "../assets/normann.jpg";
import brand3 from "../assets/first.jpg";
import brand4 from "../assets/southpole.png";
import brand5 from "../assets/active.png";
import brnad6 from "../assets/bottegaverde.png";

import ref1 from '../assets/productpage1.png'
import ref2 from '../assets/productpage17.png'
import ref3 from '../assets/productpage4.png'
import ref4 from '../assets/productpage10.png'
import ref5 from '../assets/productpage6.png'
import ref6 from '../assets/productpage9.png'


const brands = [
  { name: "Brand 1", logo: brand1 },
  { name: "Brand 2", logo: brand2 },
  { name: "Brand 3", logo: brand3 },
  { name: "Brand 4", logo: brand4 },
  { name: "Brand 5", logo: brand5 },
  {name: "Brand 6", logo: brnad6},
  // { name: "Brand 7", logo: brand7 },
];
const imageByKey = {
  ref1,
  ref2,
  ref3,
  ref4,
  ref5,
  ref6,
}

function StatCard({ item }) {
  const ref = React.useRef(null);
  const [inView, setInView] = React.useState(false);

  // ✅ Observe enter + leave so it can replay again and again
  React.useEffect(() => {
    if (!ref.current) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.35 }
    );

    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  // ✅ Force the counter to restart every time it comes back into view
  const [runKey, setRunKey] = React.useState(0);

  React.useEffect(() => {
    if (inView) {
      setRunKey((k) => k + 1); // entering -> restart
    }
  }, [inView]);

  const val = useCountUp({
    start: 0,
    end: item.value,
    durationMs: 1200,
    enabled: inView, // if your hook respects enabled, good. If not, runKey still forces remount.
  });

  return (
    <div
      ref={ref}
      className={[
        "rounded-2xl border border-white/10 bg-white/5 p-6 shadow-soft backdrop-blur",
        "transition-all duration-500 will-change-transform",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
      ].join(" ")}
    >
      <div className="text-base font-extrabold tracking-tight text-white">
        {item.label}
      </div>

      {/* ✅ remount this block every time it re-enters view */}
      <div key={runKey} className="mt-2 text-3xl font-extrabold tracking-tight text-white">
        {val.toLocaleString()}
        <span className="text-white/80">{item.suffix}</span>
      </div>

      <div className="mt-2 text-xs leading-5 text-white/60">
        {item.note}
      </div>
    </div>
  );
}

function ProductPreviewCard({ p }) {
  const img1 = imageByKey[p.imageKeys.primary];
  const img2 = imageByKey[p.imageKeys.secondary];

  return (
    <div className="group overflow-hidden rounded-2xl border border-ink-900/10 bg-white shadow-soft">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={img1}
          alt={p.name}
          className="h-full w-full object-cover transition-opacity duration-300 group-hover:opacity-0"
        />
        <img
          src={img2}
          alt={p.name}
          className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />

        <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-ink-900">
          {p.category}
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="text-sm font-extrabold text-ink-900">{p.name}</div>
            <p className="mt-1 text-xs leading-5 text-ink-700">{p.description}</p>
          </div>
        </div>

        {/* ✅ Replace color chips with Explore button */}
        <div className="mt-4">
          <Link
            to="/products"
            className="inline-flex items-center justify-center rounded-xl bg-brand-700 px-4 py-2 text-xs font-bold text-white shadow-soft transition hover:bg-brand-800"
          >
            Explore!
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden bg-ink-900">
        <div className="absolute inset-0">
          <div className="absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-brand-600/30 blur-3xl" />
          <div className="absolute -right-40 top-20 h-[520px] w-[520px] rounded-full bg-white/10 blur-3xl" />
  <div className="absolute -bottom-16 left-0 right-0 h-40 bg-gradient-to-t from-white via-white/60 to-transparent" />
        </div>

        <div className="container-app relative py-16 sm:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <div className="inline-flex font-mont items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white/80">
                <ShieldCheck size={16} /> OEM Manufacturing · Global Buyers .
              </div>
    <h1 className="mt-5 font-mont text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
  <span className="block">Built to scale.</span>
  <span className="block">Made to last.</span>
  <span className="block">Ready to export.</span>
</h1>



              <p className="mt-4 max-w-xl font-playfair text-base leading-7 text-white/80">
                {company.intro.blurb}
              </p>

              <div className="mt-7 flex font-mont flex-col gap-3 sm:flex-row">
                <Button
                  as="a"
                  href={`mailto:${company.email}?subject=Inquiry%20%E2%80%94%20Jubilee%20Apparel`}
                  variant="primary"
                >
                  Inquire now <ArrowRight size={18} />
                </Button>
                <Button as={Link} to="/capabilities" variant="secondary">
                  Explore Facilities!
                </Button>
              </div>

             <div className="mt-7 font-mont font-semibold grid gap-3 sm:grid-cols-2">
  {[
    {
      icon: <GitMerge size={18} />,
      title: "End-to-End Control",
      desc: "Knitting to finishing coordinated under one supply chain"
    },
    {
      icon: <Sparkles size={18} />,
      title: "Precision Manufacturing",
      desc: "Modern equipment, controlled workflows, consistent output"
    }
  ].map((item, i) => (
    <div
      key={i}
      className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur"
    >
      <div className="flex items-start gap-3">
        <div className="mt-0.5 grid h-10 w-10 place-items-center rounded-xl bg-white/10 text-white">
          {item.icon}
        </div>

        <div className="min-w-0">
          {/* Title */}
          <div className="text-[15px] font-mont font-semibold tracking-[-0.01em] text-white">
            {item.title}
          </div>

          {/* Desc */}
          <div className="mt-1 text-[13px]  font-playfair font-semibold leading-relaxed text-white/70">
            {item.desc}
          </div>
        </div>
      </div>
    </div>
  ))}
</div>

            </div>

            <div className="relative self-start">
  <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-soft ">
    <img
      src={ref2}
      alt="Jubilee Apparel preview"
      className="h-[360px] w-full object-cover opacity-90 "
    />
  </div>

  <div className="pointer-events-none font-mont absolute -bottom-5 -left-5 hidden w-72 animate-floaty rounded-2xl border border-white/10 bg-white/5 p-5 text-white shadow-soft backdrop-blur lg:block">
    <div className="flex items-center gap-2 text-sm font-extrabold">
      <CheckCircle2 size={18} /> Compliance-ready production
    </div>
    <div className="mt-2 text-xs font-playfair text-white/60">
      OEM-ready manufacturing built to meet global buyer standards.
    </div>
  </div>
</div>

          </div>

          {/* Stats */}
          <div className="mt-12 grid gap-4 font-mont font-semibold sm:grid-cols-2 lg:grid-cols-4">
  {stats.map((s) => (
    <StatCard key={s.label} item={s} />
  ))}
</div>

        </div>
      </section>

     {/* Value chain (Timeline teaser — Home) */}
<section className="bg-white mt-6">
  <div className="container-app py-16 font-mont font-extrabold">
    <SectionTitle
     align="center"
      eyebrow="Manufacturing Under One Roof"
      title="From Fabric To Export — Under One Roof"
      desc="A streamlined value chain built to reduce handoffs and deliver export-ready garments on time."
    />

    {/* Timeline / Steps */}
    <div className="relative mt-10">
      {/* connector line (desktop) */}
      <div className="absolute left-0 right-0 top-7 hidden h-px bg-ink-900/50 lg:block" />

      {/* ✅ 5 steps => 5 columns on lg (so the line doesn't look "extra") */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {[
          {
            title: "Knitting",
            desc: "In-house fabric capability for consistent quality and lead times.",
            bullets: ["Modern machines", "Stable fabric supply", "Controlled standards"],
          },
          {
            title: "Dyeing & Washing",
            desc: "Processing support for tubular and open-width forms.",
            bullets: ["Uniform shades", "Finishing options", "Bulk-ready flow"],
          },
          {
            title: "Cutting",
            desc: "Precision cutting for maximum utilization and clean panels.",
            bullets: ["High accuracy", "Reduced wastage", "Fast throughput"],
          },
          {
            title: "Stitching (Knits)",
            desc: "Specialized lines for knit programs and repeatable output.",
            bullets: ["Auto-trim support", "Clean seams", "Consistent sizing"],
          },
          {
            title: "Ready to export",
            desc: "From final approval to shipment staging—everything aligned to buyer requirements.",
            bullets: ["Quality checks", "Labeling & tagging", "Export-ready packing"],
          },
        ].map((step, idx) => (
          <div
            key={step.title}
            className="relative rounded-2xl border border-ink-900/10 bg-white p-5 shadow-soft"
          >
            {/* step dot (desktop alignment to line) */}
            <div className="hidden lg:block">
              <div className="absolute left-1/2 top-5 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-white bg-brand-700 shadow" />
            </div>

            {/* step number (mobile/tablet) */}
            <div className="inline-flex items-center gap-2 rounded-full border border-ink-900/10 bg-ink-50 px-3 py-1 text-[11px] font-bold text-ink-700 lg:hidden">
              Step {idx + 1}
            </div>

            {/* ✅ ONLY heading centered */}
            <div className="mt-3 text-sm font-extrabold text-ink-900 text-center">
              {step.title}
            </div>

            {/* keep rest as-is (left/aligned) */}
            <div className="mt-2 text-xs leading-5 text-ink-700">{step.desc}</div>

            <ul className="mt-4 space-y-2 text-xs text-ink-700">
              {step.bullets.map((b) => (
                <li key={b} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-700" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    {/* CTA */}
    <div className="mt-10 flex flex-col font-mont font-bold gap-3 sm:flex-row sm:items-center">
      <Button as={Link} to="/capabilities" variant="primary">
        Explore Full Facilities <ArrowRight size={18} />
      </Button>

      <Button as={Link} to="/contact" variant="secondary">
        Request a quote
      </Button>

      <div className="text-xs text-ink-600 font-mont font-extrabold sm:ml-2">
        Prefer email?{" "}
        <a
          href="mailto:info@jubilee-apparel.com"
          className="font-semibold text-brand-700 hover:underline"
        >
          info@jubilee-apparel.com
        </a>
      </div>
    </div>
  </div>
</section>


   
{/* Our Satisfied Customers — Full width marquee (no box) */}
<section className="bg-brand-50 py-16 mt-6">
<div className="container-app text-center">
  <h2 className="text-3xl font-extrabold text-ink-900 font-mont ">
    Our Satisfied Customers
  </h2>

  <p className="mx-auto mt-2 max-w-2xl text-sm font-semibold text-ink-700 font-playfair">
    Brands and sourcing teams we’ve supported with consistent OEM production.
  </p>
</div>

  {/* Full width marquee row */}
  <div className="relative mt-10 w-full overflow-hidden">
    {/* optional fade edges (looks premium). Remove if you don't want it */}
    <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-brand-50 to-transparent" />
    <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-brand-50 to-transparent" />

   <div className="flex w-max flex-nowrap items-center gap-10 sm:gap-12 md:gap-16 animate-scroll will-change-transform">
  {/* First set */}
  {brands.map((b) => (
    <div
      key={`a-${b.name}`}
      className="shrink-0 flex items-center justify-center
                 h-24 w-36 sm:h-24 sm:w-44 md:h-28 md:w-52"
    >
      <img
        src={b.logo}
        alt={b.name}
        loading="lazy"
        className="max-h-full max-w-full object-contain opacity-90 transition hover:opacity-100"
      />
    </div>
  ))}

  {/* Duplicate set */}
  {brands.map((b) => (
    <div
      key={`b-${b.name}`}
      className="shrink-0 flex items-center justify-center
                 h-24 w-36 sm:h-24 sm:w-44 md:h-28 md:w-52"
      aria-hidden="true"
    >
      <img
        src={b.logo}
        alt=""
        loading="lazy"
        className="max-h-full max-w-full object-contain opacity-90 transition hover:opacity-100"
      />
    </div>
  ))}
</div>

  </div>
</section>



      {/* Products preview */}
      <section className="bg-white mt-6">
        <div className="container-app py-16 font-mont font-extrabold">
         <SectionTitle
  align="center"
  eyebrow="Product preview"
  title="Best-Selling OEM Categories"
  desc="Proven styles that scale smoothly from sampling to shipment."
/>


          <div className="mt-10 grid font-playfair font-semibold gap-5 md:grid-cols-2 lg:grid-cols-3">
            {products.slice(0, 3).map((p) => (
              <ProductPreviewCard key={p.id} p={p} />
            ))}
          </div>

          <div className="mt-10 flex flex-col items-start justify-between gap-4 rounded-2xl border border-ink-900/10 bg-ink-900 p-8 text-white shadow-soft md:flex-row md:items-center">
            <div>
              <div className="text-lg  font-mont font-extrabold">Need a custom program or bulk quote?</div>
              <div className="mt-1 font-mont font-semibold text-sm text-white/70">Share your tech pack, quantities, and target dates — we’ll respond fast.</div>
            </div>
            <div className="flex flex-col font-mont font-semibold gap-3 sm:flex-row">
              <Button as={Link} to="/products" variant="secondary">Explore products</Button>
              <Button as="a" href={`mailto:${company.email}?subject=RFQ%20%E2%80%94%20Jubilee%20Apparel`} variant="primary">
                Send RFQ <ArrowRight size={18} />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
