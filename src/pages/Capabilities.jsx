// import React from 'react'
// import SectionTitle from '../components/SectionTitle.jsx'
// import { capabilities } from '../data/capabilities.js'
// import { Card, CardBody } from '../components/ui/Card.jsx'
// import ref1 from '../assets/ref-1.png'

// export default function Capabilities() {
//   return (
//     <div>
//       <section className="bg-ink-900">
//   <div className="container-app py-14 text-center">
//     <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white/80 mt-3">
//       Manufacturing Facility
//     </div>

//     <h1 className="mt-5 text-4xl font-black tracking-tight text-white sm:text-5xl">
//       Facilities
//     </h1>

 
//   </div>

//   {/* soft transition */}
//   <div className="h-14 bg-gradient-to-b from-white/0 to-white" />
// </section>

//       <section className="bg-white mt-4">
//         <div className="container-app py-14">
//           <div className="grid gap-8 lg:grid-cols-3">
//             <div className="lg:col-span-1">
//               <div className="sticky top-28 rounded-2xl border border-ink-900/10 bg-ink-50 p-6">
//                 <div className="text-sm font-extrabold text-ink-900">At a glance</div>
//                 <p className="mt-2 text-sm text-ink-700">
//                   Integrated operations help minimize wastage and improve delivery speed. Replace any copy with your exact wording.
//                 </p>
//                 <div className="mt-4 overflow-hidden rounded-2xl border border-ink-900/10 bg-white">
//                   <img src={ref1} alt="Capability preview" className="h-[180px] w-full object-cover" />
//                 </div>
//               </div>
//             </div>

//             <div className="lg:col-span-2 space-y-5">
//               {capabilities.map((c) => (
//                 <Card key={c.id} className="bg-white">
//                   <CardBody>
//                     <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
//                       <div>
//                         <div className="text-lg font-extrabold text-ink-900">{c.title}</div>
//                       </div>
//                       <div className="grid grid-cols-3 gap-2">
//                         {c.metrics.map((m) => (
//                           <div key={m.k} className="rounded-xl border border-ink-900/10 bg-ink-50 p-3">
//                             <div className="text-[10px] font-bold text-ink-500">{m.k}</div>
//                             <div className="mt-1 text-xs font-extrabold text-ink-900">{m.v}</div>
//                           </div>
//                         ))}
//                       </div>
//                     </div>

//                     <p className="mt-4 text-sm leading-6 text-ink-700">{c.body}</p>

//                    <div className="mt-5 overflow-hidden rounded-2xl border border-brand-100 bg-brand-50">
//   <div className="grid gap-4 p-5 sm:grid-cols-[1fr_180px] sm:items-center">
//     {/* Left: text */}
//     <div>
//       <div className="text-xs font-bold text-brand-800">Capacity highlight</div>
//       <div className="mt-1 text-sm text-ink-800">{c.highlight}</div>

//       {/* optional extra line */}
//       {/* <p className="mt-2 text-xs text-ink-600">
//         Replace with a short buyer-facing note (optional).
//       </p> */}
//     </div>

//     {/* Right: image */}
//     <div className="relative h-28 w-full overflow-hidden rounded-xl border border-ink-900/10 bg-white sm:h-24">
//       <img
//         src={c.highlightImage}   // <- add per capability
//         alt={`${c.title} highlight`}
//         className="h-full w-full object-cover"
//         loading="lazy"
//       />
//       {/* optional overlay for premium look */}
//       <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-900/10 to-transparent" />
//     </div>
//   </div>
// </div>

//                   </CardBody>
//                 </Card>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }


import React, { useEffect, useMemo, useRef, useState } from "react";
import { capabilities } from "../data/capabilities.js";
import { Card, CardBody } from "../components/ui/Card.jsx";

import emb1 from "../assets/ref-1.png";
import emb2 from "../assets/ref-2.png";
import emb3 from "../assets/ref-3.png";
import emb4 from "../assets/ref-1.png";
import emb5 from "../assets/ref-3.png";

// ✅ Keep embellishment OUTSIDE component (no hooks here)
const embellishment = [
  {
    id: "embroidery",
    title: "Embroidery",
    body:
      "Full-service embroidery for all garment types—logos, monograms, patches, and decorative stitching with clean finishing and consistent quality.",
    highlight: "All embroidery styles • Placement & thread matching support",
    highlightImage: emb1,
    metrics: [
      { k: "Machines", v: "6" },
      { k: "Output", v: "Bulk + sampling" },
      { k: 'Edge', v: 'Precision + utilization' },
    ],
  },
  {
    id: "screen",
    title: "Screen Printing(Oval)",
    body:
      "End-to-end screen printing with consistent shade, coverage, and wash performance—supported from sampling to bulk production.",
    highlight: "Multi-color capable • Quality checked before packing",
    highlightImage: emb2,
    metrics: [
      { k: "Machines", v: "1" },
      { k: "Capacity/Day", v: "10,000 Pcs " },
      { k: 'Edge', v: 'Precision + utilization' },
    ],
  },
  {
    id: "dtg",
    title: "DTG Printing",
    body:
      "High-resolution DTG printing for detailed artwork and smooth hand-feel—ideal for quick approvals, sampling, and smaller production runs.",
    highlight: "High detail output • Fast concept approval support",
    highlightImage: emb3,
    metrics: [
      { k: "Machines", v: "2" },
      { k: "Capacity/Day", v: "2500 Pcs" },
      { k: 'Edge', v: 'Precision + utilization' },
    ],
  },
  {
    id: "dtg",
    title: "DTF Printing ",
    body:
      "DTF printing for vibrant graphics and reliable durability—works across a wide range of fabrics, blends, and product categories.",
    highlight: "Vibrant & durable • Broad fabric compatibility",
    highlightImage: emb4,
    metrics: [
      { k: "Machines", v: "2" },
      { k: "Capacity/Day", v: "3500 Pcs" },
      { k: 'Edge', v: 'Precision + utilization' },
    ],
  },
   {
    id: "uvdtf",
    title: "DTF Printing(Fluroscent)",
    body:
      "DTF Printing(Fluroscent) for premium presentation—clean transfers for trims, packaging elements, labels, and special applications as required by the program.",
    highlight: "Premium branding finish • Program-based applications",
    highlightImage: emb5,
    metrics: [
      { k: "Machines", v: "2" },
      { k: "Capacity/Day", v: "3500 Pcs" },
      { k: 'Edge', v: 'Precision + utilization' },
    ],
  },
  {
    id: "uvdtf",
    title: "UV DTF Printing",
    body:
      "UV DTF branding for premium presentation—clean transfers for trims, packaging elements, labels, and special applications as required by the program.",
    highlight: "Premium branding finish • Program-based applications",
    highlightImage: emb5,
    metrics: [
      { k: "Machines", v: "1" },
      { k: "Capacity/Day", v: "12000 Patches" },
      { k: 'Edge', v: 'Precision + utilization' },
    ],
  },
];

export default function Capabilities() {
  // ✅ Combine both lists INSIDE component (allowed)
  const allCards = useMemo(() => {
    return [...capabilities, ...embellishment];
  }, []);

  // ✅ One state only (no duplicates)
  const [activeId, setActiveId] = useState(allCards?.[0]?.id || "knitting");

  // ✅ Refs store BOTH capability + embellishment card nodes
  const cardRefs = useRef({});

  // ✅ active card lookup from combined list
  const activeCap = useMemo(() => {
    return allCards.find((c) => c.id === activeId) || allCards[0];
  }, [activeId, allCards]);

  // ✅ Observe all cards (capabilities + embellishment)
  useEffect(() => {
    const nodes = Object.values(cardRefs.current).filter(Boolean);
    if (!nodes.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        const id = visible[0]?.target?.dataset?.id;
        if (id) setActiveId(id);
      },
      {
        root: null,
        threshold: [0.25, 0.35, 0.5, 0.6, 0.75],
        rootMargin: "-15% 0px -55% 0px",
      }
    );

    nodes.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [allCards.length]);

  return (
    <div>
      {/* HERO */}
      <section className="bg-ink-900">
        <div className="container-app py-14 text-center">
          <div className="inline-flex items-center gap-2 font-mont rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white/80 mt-3">
            Manufacturing Facility
          </div>

          <h1 className="mt-5 text-4xl font-mont font-black tracking-tight text-white sm:text-5xl">
            Capabilities
          </h1>
        </div>

        <div className="h-14 bg-gradient-to-b from-white/0 to-white" />
      </section>

      {/* CONTENT */}
      <section className="bg-white mt-4">
        <div className="container-app py-14">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* LEFT sticky */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 space-y-4">
                <div className="rounded-2xl border border-ink-900/10 bg-ink-50 p-6">
                  <div className="text-sm font-extrabold font-mont text-ink-900">
                    Equipments Overview
                  </div>
                </div>

                <div className="overflow-hidden rounded-2xl border border-ink-900/10 bg-white shadow-soft">
                  <div className="px-5 pt-5">
                    <div className="text-xs font-bold font-mont text-ink-500">
                      Now viewing
                    </div>
                    <div className="mt-1 text-sm font-extrabold text-ink-900">
                      {activeCap?.title}
                    </div>
                    <div className="mt-1 text-xs text-ink-600">
                      {activeCap?.highlight}
                    </div>
                  </div>

                  <div className="mt-4">
                    <div className="relative h-[220px] w-full bg-ink-50">
                      <img
                        src={activeCap?.highlightImage}
                        alt={`${activeCap?.title} preview`}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-900/10 to-transparent" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT side */}
            <div className="lg:col-span-2 space-y-5 font-mont">
              {/* ✅ Capabilities */}
              {capabilities.map((c) => (
                <div
                  key={c.id}
                  ref={(el) => (cardRefs.current[c.id] = el)}
                  data-id={c.id}
                >
                  <Card className="bg-white transition will-change-transform hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(0,0,0,0.10)]">
                    <CardBody>
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <div className="text-lg font-extrabold font-mont text-ink-900">
                            {c.title}
                          </div>
                        </div>

                        <div className="grid grid-cols-3 gap-2">
                          {c.metrics.map((m) => (
                            <div
                              key={m.k}
                              className="rounded-xl border font-mont border-ink-900/10 bg-ink-50 p-3"
                            >
                              <div className="text-[10px] font-bold font-mont text-ink-500">
                                {m.k}
                              </div>
                              <div className="mt-1 text-xs  font-mont font-extrabold text-ink-900">
                                {m.v}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <p className="mt-4 text-sm leading-6 text-ink-700">
                        {c.body}
                      </p>

                      <div className="mt-5 overflow-hidden rounded-2xl border border-brand-100 bg-brand-50">
                        <div className="grid gap-4 p-5 sm:grid-cols-[1fr_190px] sm:items-center">
                          <div>
                            <div className="text-xs font-bold  text-brand-800 font-playfair">
                              Capacity highlight
                            </div>
                            <div className="mt-1 text-sm text-ink-800">
                              {c.highlight}
                            </div>
                          </div>

                          <div className="relative h-28 w-full overflow-hidden rounded-xl border border-ink-900/10 bg-white sm:h-24">
                            <img
                              src={c.highlightImage}
                              alt={`${c.title} highlight`}
                              className="h-full w-full object-cover"
                              loading="lazy"
                            />
                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-900/10 to-transparent" />
                          </div>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </div>
              ))}

              {/* ✅ ADD-ON heading */}
              <div className="pt-10">
                <div className="flex items-center gap-4">
                  <div className="h-px flex-1 bg-ink-900/10" />
                  <div className="rounded-full border font-mont  border-ink-900/10 bg-ink-50 px-4 py-2 text-xs font-bold text-ink-700">
                    ADD-ON SERVICES
                  </div>
                  <div className="h-px flex-1 bg-ink-900/10" />
                </div>

                <h2 className="mt-4 text-center text-2xl font-mont  font-black tracking-tight text-ink-900 sm:text-3xl">
                  Printing & Embellishment
                </h2>
                <p className="mx-auto mt-2 max-w-2xl font-playfair font-semibold text-center text-sm text-ink-700">
                  Brand-ready decoration options to support retail presentation, uniforms, promotions, and export programs.
                </p>
              </div>

              {/* ✅ Embellishment cards (also observed now) */}
              <div className="mt-6 space-y-5">
                {embellishment.map((c) => (
                  <div
                    key={c.id}
                    ref={(el) => (cardRefs.current[c.id] = el)}
                    data-id={c.id}
                  >
                    <Card className="bg-white transition will-change-transform hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(0,0,0,0.10)]">
                      <CardBody>
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                          <div>
                            <div className="text-lg font-mont font-extrabold text-ink-900">
                              {c.title}
                            </div>
                          </div>

                          <div className="grid grid-cols-3 gap-2">
                            {c.metrics.map((m) => (
                              <div
                                key={m.k}
                                className="rounded-xl border font-mont border-ink-900/10 bg-ink-50 p-3"
                              >
                                <div className="text-[10px] font-playfair font-bold text-ink-500">
                                  {m.k}
                                </div>
                                <div className="mt-1 text-xs font-playfair font-extrabold text-ink-900">
                                  {m.v}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <p className="mt-4 text-sm leading-6 text-ink-700">
                          {c.body}
                        </p>

                        <div className="mt-5 overflow-hidden rounded-2xl border border-brand-100 bg-brand-50">
                          <div className="grid gap-4 p-5 sm:grid-cols-[1fr_190px] sm:items-center">
                            <div>
                              <div className="text-xs font-bold font-mont text-brand-800">
                                Capacity highlight
                              </div>
                              <div className="mt-1 text-sm font-playfair font-semibold text-ink-800">
                                {c.highlight}
                              </div>
                            </div>

                            <div className="relative h-28 w-full overflow-hidden rounded-xl border border-ink-900/10 bg-white sm:h-24">
                              <img
                                src={c.highlightImage}
                                alt={`${c.title} highlight`}
                                className="h-full w-full object-cover"
                                loading="lazy"
                              />
                              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-900/10 to-transparent" />
                            </div>
                          </div>
                        </div>
                      </CardBody>
                    </Card>
                  </div>
                ))}
              </div>

              <div className="h-2" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
