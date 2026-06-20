// import React from 'react'
// import { ShieldCheck, Users, Timer, Leaf, MapPin ,Package } from 'lucide-react'
// import SectionTitle from '../components/SectionTitle.jsx'
// import { company } from '../data/company.js'
// import ref2 from '../assets/ref-2.png'
// import ref3 from '../assets/ref-3.png'

// const cards = [
//   {
//     icon: <Users size={18} />,
//     title: 'Customer-centric philosophy',
//     desc: 'Long-term partnerships built on communication, reliability and repeatable quality.'
//   },
//   {
//     icon: <Timer size={18} />,
//     title: 'Faster delivery',
//     desc: 'Integrated operations reduce handoffs and speed up sampling and production cycles.'
//   },
//  {
//   icon: <Package size={18} />,
//   title: 'Brand-ready output',
//   desc: 'OEM aligned workflows for labels, trims, packaging, and export presentation—ready for retail and e-commerce.'
// }

// ]

// export default function About() {
//   return (
//     <div>
//     <section className="bg-ink-900">
//   <div className="container-app py-14 text-center">
//     <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white/80 mt-3">
//       About
//     </div>
//     <h1 className="mt-5 text-4xl font-black tracking-tight text-white sm:text-5xl">
//       About Jubilee Apparel
//     </h1>
  
//   </div>
//   <div className="h-14 bg-gradient-to-b from-white/0 to-white" />
// </section>



//       <section className="bg-white">
//         <div className="container-app py-14">
//           <div className="grid gap-8 lg:grid-cols-2">
//             <div>
//               <h3 className="text-xl font-extrabold text-ink-900 font-mont">Company introduction</h3>
//               <p className="mt-3 text-sm leading-6 text-ink-700 font-playfair">{company.intro.blurb}</p>

//               <h3 className="mt-8 text-xl font-extrabold text-ink-900 font-mont">History</h3>
//               <p className="mt-3 text-sm leading-6 text-ink-700 font-playfair">{company.intro.history}</p>

//               <div className="mt-8 rounded-2xl border border-ink-900/10 bg-ink-50 p-6">
//   <div className="flex items-center gap-2 text-sm font-extrabold text-ink-900">
//     <Package size={18} className="text-brand-700 font-mont" /> Brand-Ready Production
//   </div>
//   <p className="mt-2 text-sm text-ink-700 font-playfair">
//     OEM aligned workflows for private label—custom trims, labels, hangtags, polybags, and export-ready packing.
//   </p>
// </div>

//             </div>

//             <div className="space-y-5">
//               <div className="overflow-hidden rounded-2xl border border-ink-900/10 bg-white shadow-soft">
//                 <img src={ref3} alt="Jubilee Apparel" className="h-[260px] w-full object-cover" />
//               </div>
//               <div className="overflow-hidden rounded-2xl border border-ink-900/10 bg-white shadow-soft">
//                 <img src={ref2} alt="Facility" className="h-[260px] w-full object-cover" />
//               </div>
//             </div>
//           </div>

//           <div className="mt-12 grid gap-4 md:grid-cols-3">
//             {cards.map((c) => (
//               <div key={c.title} className="rounded-2xl border border-ink-900/10 bg-white p-6 shadow-soft">
//                 <div className="inline-flex items-center gap-2 rounded-xl bg-brand-50 px-3 py-2 text-brand-800">
//                   {c.icon}
//                   <span className="text-xs font-bold">Key focus</span>
//                 </div>
//                 <div className="mt-4 text-sm font-extrabold text-ink-900 font-mont">{c.title}</div>
//                 <div className="mt-2 text-sm leading-6 text-ink-700">{c.desc}</div>
//               </div>
//             ))}
//           </div>

//       <div className="mt-12 grid gap-4 lg:grid-cols-3">
//   {/* Footprint overview */}
//   <div className="rounded-2xl border border-ink-900/10 bg-ink-900 p-7 text-white shadow-soft lg:col-span-2">
//     <div className="flex flex-wrap items-center gap-3">
//       <div className="text-lg font-extrabold font-mont">Footprint overview</div>

//       <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/80">
//         <span className="text-white font-extrabold font-playfair">4</span> Manufacturing Sites
//       </div>

//       <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/80">
//         <span className="text-white font-extrabold font-playfair">150,000+</span> sq. ft. Production Area
//       </div>
//     </div>

//     <p className="mt-4 max-w-3xl text-sm text-white/70 font-playfair">
//       Built for OEM export programs—integrated operations help ensure consistent output,
//       predictable lead times, and export-ready packing.
//     </p>

//     <div className="mt-5 flex items-center gap-2 text-sm text-white/80 font-playfair">
//       <MapPin size={18} /> Export Processing Zone, Karachi, Pakistan
//     </div>
//   </div>

  

// <div className="rounded-2xl border border-ink-900/10 bg-white p-7 shadow-soft">
//   <div className="text-sm font-extrabold text-ink-900 font-mont">Why Buyers Choose Jubilee</div>

//   <ul className="mt-4 space-y-3">
//     {[
     
//       {
//         name: "Quality Control",
//         description: "From the first stitch to final packing, we inspect every piece to deliver consistent fit, finish, and quality."
//       },
//       {
//         name: "Optimized Dispatch Support",
//         description: "We support buyer shipping workflows with clear packing presentation, barcode/label compliance, and shipment-ready packaging to reduce delays at handover.."
//       },
    
//     ].map((x) => (
//       <li key={x.name} className="rounded-xl border border-ink-900/10 bg-ink-50 p-4">
//         <div className="text-sm font-extrabold text-ink-900">{x.name}</div>
//         <div className="mt-1 text-xs text-ink-700">{x.description}</div>
//       </li>
//     ))}
//   </ul>
// </div>

            
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }




import React from "react";
import { Package, BadgeCheck } from "lucide-react";
import { company } from "../data/company.js";
import ref2 from "../assets/ref-2.png";
import ref3 from "../assets/ref-3.png";

export default function About() {
  return (
    <div>
      {/* HERO (keep as is) */}
      <section className="bg-ink-900">
        <div className="container-app py-14 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white/80 mt-3">
            Who We Are
          </div>
          <h1 className="mt-5 text-4xl font-black tracking-tight text-white sm:text-5xl">
            About Jubilee Apparel
          </h1>
        </div>
        <div className="h-14 bg-gradient-to-b from-white/0 to-white" />
      </section>

      {/* CONTENT */}
      <section className="bg-white">
        <div className="container-app py-14 ">
          {/* ✅ Row 1: Company introduction (left text) + Image (right) */}
          <div className="grid gap-10 lg:grid-cols-2 mt-5 lg:items-start">
            <div>
             <div className="flex justify-center">
  <h3 className="text-3xl font-extrabold text-ink-900 font-mont underline underline-offset-8 decoration-2 text-center">
    Company introduction
  </h3>
</div>

              <p className="mt-4 text-lg font-medium leading-6 text-ink-700 font-playfair">
                {company.intro.blurb}
              </p>
<p className="mt-4 text-lg leading-6 font-medium text-ink-700 font-playfair">
                {company.intro.blurbs}
              </p>
              
            </div>

            <div className="space-y-5">
              <div className="overflow-hidden rounded-2xl border border-ink-900/10 bg-white shadow-soft">
                <img
                  src={ref3}
                  alt="Jubilee Apparel"
                  className="h-[280px] w-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* ✅ Row 2: Image (left) + History content + Brand-ready production (right) */}
          <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:items-start">
            {/* Left: image placed where History was */}
            <div className="space-y-5">
              <div className="overflow-hidden rounded-2xl border border-ink-900/10 bg-white shadow-soft">
                <img
                  src={ref2}
                  alt="Facility"
                  className="h-[320px] w-full object-cover"
                />
              </div>
            </div>

            {/* Right: History + Brand-ready production */}
            <div>
      <div className="flex justify-center">
  <h3 className="text-3xl font-extrabold text-ink-900 font-mont underline underline-offset-8 decoration-2">
    History
  </h3>
</div>

              <p className="mt-4 text-lg  font-medium leading-6 text-ink-700 font-playfair">
                {company.intro.history}
              </p>
  <p className="mt-4 text-lg leading-6 font-medium text-ink-700 font-playfair">
                {company.intro.historys}
              </p>
              
            </div>
          </div>

          {/* ✅ Small closing note (simple + trendy, not “intro cards”) */}
          
        </div>
      </section>
    </div>
  );
}
