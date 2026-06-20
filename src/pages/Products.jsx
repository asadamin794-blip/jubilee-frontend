
// import React, { useMemo, useState } from "react";
// import { Search, Mail, X, Phone, MessageSquareText, Tag } from "lucide-react";

// // ✅ Replace these imports with your real product images later
// import p1 from "../assets/productpage1.png";
// import p2 from "../assets/productpage2.png";
// import p3 from "../assets/productpage3.png";
// import p4 from "../assets/productpage4.png";
// import p5 from "../assets/productpage5.png";
// import p6 from "../assets/productpage6.png";
// import p7 from "../assets/productpage7.png";
// import p8 from "../assets/productpage8.png";
// import p9 from "../assets/productpage9.png";
// import p10 from "../assets/productpage10.png";
// import p11 from "../assets/productpage11.png";
// import p12 from "../assets/productpage12.png";
// import p13 from "../assets/productpage13.png";
// import p14 from "../assets/productpage14.png";
// import p15 from "../assets/productpage15.png";
// import p16 from "../assets/productpage16.png";
// import p17 from "../assets/productpage17.png";
// import p18 from "../assets/productpage18.png";
// import p19 from "../assets/productpage19.png";


// // fixed family pills (one line)
// const families = [
//   "All",
//   "T-Shirts",
//   "Fleece",
//   "Polo",
//   "Thermal",
//   "Nantucket",
//   "Polyester",
//   "Woven",
//   "Sherpa",
// ];

// const [q, setQ] = useState("");
// const [cat, setCat] = useState("All");

// const filtered = useMemo(() => {
//   const query = q.trim().toLowerCase();

//   return products.filter((p) => {
//     const matchesFamily = cat === "All" ? true : p.family === cat;

//     const matchesQuery =
//       !query ||
//       p.name.toLowerCase().includes(query) ||
//       p.description.toLowerCase().includes(query) ||
//       (p.family || "").toLowerCase().includes(query) ||
//       (p.category || "").toLowerCase().includes(query);

//     return matchesFamily && matchesQuery;
//   });
// }, [products, q, cat]);



// // ---------- Helpers ----------
// const EMAIL_TO = "info@jubilee-apparel.com";

// function buildMailto({ productName, subject, phone, reason }) {
//   const finalSubject = encodeURIComponent(subject || `Product inquiry — ${productName}`);
//   const body = encodeURIComponent(
//     `Hello Jubilee Apparel,\n\nI'm interested in:\n- Product: ${productName}\n\nDetails:\n- Contact No: ${phone}\n- Reason: ${reason}\n\nPlease share MOQ, lead time, and pricing.\n\nThanks,`
//   );
//   return `mailto:${EMAIL_TO}?subject=${finalSubject}&body=${body}`;
// }

// function Pill({ active, children, onClick }) {
//   return (
//     <button
//       type="button"
//       onClick={onClick}
//       className={[
//         "rounded-full px-4 py-2 text-xs font-semibold transition whitespace-nowrap",
//         active
//           ? "bg-brand-700 text-white shadow-soft"
//           : "border border-ink-900/10 bg-white text-ink-700 hover:bg-ink-50",
//       ].join(" ")}
//     >
//       {children}
//     </button>
//   );
// }

// /** ✅ Popup Modal (frontend-only, opens email on submit) */
// function InquiryModal({ open, onClose, productName }) {
//   const [subject, setSubject] = useState(`Product inquiry — ${productName}`);
//   const [phone, setPhone] = useState("");
//   const [reason, setReason] = useState("");

//   // keep subject in sync when product changes
//   React.useEffect(() => {
//     setSubject(`Product inquiry — ${productName}`);
//   }, [productName]);

//   if (!open) return null;

//   const submit = (e) => {
//     e.preventDefault();

//     if (!phone.trim()) return alert("Please enter your contact number.");
//     if (!reason.trim()) return alert("Please add a short reason.");

//     window.location.href = buildMailto({
//       productName,
//       subject,
//       phone,
//       reason,
//     });

//     onClose();
//   };

//   return (
//     <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
//       {/* overlay */}
//       <div className="absolute inset-0 bg-ink-900/60 backdrop-blur-sm" onClick={onClose} />

//       {/* modal */}
//       <div className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-white/10 bg-white shadow-soft">
//         <div className="flex items-center justify-between border-b border-ink-900/10 p-5">
//           <div>
//             <div className="text-xs font-semibold text-ink-500">Inquiry</div>
//             <div className="text-sm font-extrabold text-ink-900">{productName}</div>
//           </div>
//           <button
//             type="button"
//             onClick={onClose}
//             className="rounded-xl border border-ink-900/10 bg-white p-2 text-ink-600 hover:bg-ink-50"
//             aria-label="Close"
//           >
//             <X size={18} />
//           </button>
//         </div>

//         <form onSubmit={submit} className="p-5">
//           {/* Subject */}
//           <label className="block">
//             <div className="mb-1 flex items-center gap-2 text-xs font-bold text-ink-700">
//               <Tag size={16} className="text-brand-700" /> Subject
//             </div>
//             <input
//               value={subject}
//               onChange={(e) => setSubject(e.target.value)}
//               className="w-full rounded-2xl border border-ink-900/10 bg-white px-4 py-3 text-sm text-ink-900 outline-none focus:border-brand-300 focus:ring-4 focus:ring-brand-100"
//               placeholder="Subject"
//             />
//           </label>

//           {/* Contact No */}
//           <label className="mt-4 block">
//             <div className="mb-1 flex items-center gap-2 text-xs font-bold text-ink-700">
//               <Phone size={16} className="text-brand-700" /> Contact No
//             </div>
//             <input
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//               className="w-full rounded-2xl border border-ink-900/10 bg-white px-4 py-3 text-sm text-ink-900 outline-none focus:border-brand-300 focus:ring-4 focus:ring-brand-100"
//               placeholder="+92 3xx xxxxxxx"
//             />
//           </label>

//           {/* Reason */}
//           <label className="mt-4 block">
//             <div className="mb-1 flex items-center gap-2 text-xs font-bold text-ink-700">
//               <MessageSquareText size={16} className="text-brand-700" /> Reason
//             </div>
//             <textarea
//               value={reason}
//               onChange={(e) => setReason(e.target.value)}
//               rows={4}
//               className="w-full resize-none rounded-2xl border border-ink-900/10 bg-white px-4 py-3 text-sm text-ink-900 outline-none focus:border-brand-300 focus:ring-4 focus:ring-brand-100"
//               placeholder="MOQ, pricing, sampling, lead time, shipping…"
//             />
//           </label>

//           {/* Actions */}
//           <div className="mt-5 flex items-center justify-end gap-2">
//             <button
//               type="button"
//               onClick={onClose}
//               className="rounded-xl border border-ink-900/10 bg-white px-4 py-2 text-xs font-semibold text-ink-700 hover:bg-ink-50"
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className="inline-flex items-center gap-2 rounded-xl bg-brand-700 px-4 py-2 text-xs font-semibold text-white transition hover:bg-brand-800"
//             >
//               <Mail size={16} />
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// function ProductCard({ p, onInquire }) {
//   return (
//     <article className="group overflow-hidden rounded-2xl border border-ink-900/10 bg-white shadow-soft transition hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(0,0,0,0.12)]">
//       {/* Image */}
//       <div className="relative aspect-[4/3] overflow-hidden bg-ink-50">
//         <img
//           src={p.image}
//           alt={p.name}
//           className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
//           loading="lazy"
//         />

//         {/* Category badge */}
//         <div className="absolute left-4 top-4 rounded-full border border-white/40 bg-white/80 px-3 py-1 text-[11px] font-semibold text-ink-900 backdrop-blur">
//           {p.category}
//         </div>
//       </div>

//       {/* Content */}
//       <div className="p-5">
//         <div className="flex items-start justify-between gap-3">
//           <div>
//             <h3 className="text-sm font-extrabold text-ink-900">{p.name}</h3>
//             <p className="mt-1 text-xs leading-5 text-ink-700">{p.description}</p>
//           </div>

//           {/* Small tag */}
       
//         </div>

//         {/* Colors */}
//         <div className="mt-4">
//           <div className="text-[11px] font-bold text-ink-500">Available colors</div>
//           <div className="mt-2 flex flex-wrap gap-2">
//             {p.colors.map((c) => (
//               <div
//                 key={c.name}
//                 className="inline-flex items-center gap-2 rounded-full border border-ink-900/10 bg-white px-2.5 py-1 text-[11px] text-ink-800"
//                 title={c.name}
//               >
//                 <span
//                   className="h-3 w-3 rounded-full border border-ink-900/10"
//                   style={{ backgroundColor: c.hex }}
//                 />
//                 {c.name}
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* CTA */}
//         <div className="mt-5 flex items-center justify-between gap-3">
//           <div className="text-[11px] font-semibold text-ink-500">MOQ & lead time on request</div>

//           <button
//             type="button"
//             onClick={() => onInquire(p)}
//             className="inline-flex items-center gap-2 rounded-xl bg-brand-700 px-4 py-2 text-xs font-semibold text-white transition hover:bg-brand-800"
//           >
//             <Mail size={16} />
//             Inquire
//           </button>
//         </div>
//       </div>
//     </article>
//   );
// }

// export default function Products() {
//   // ✅ Self-contained products (edit from this page only)
//   const products = useMemo(
//     () => [
//       {
//         id: "p1",
//         name: "Crewneck T-Shirt",
//         category: "T-SHIRT",
//         image: p1,
//         description: "A clean everyday crewneck built for consistent fit, smooth finishing, and private-label programs.",
//            colors: [
//   { name: "BLACK", hex: "#111827" },
//   { name: "CHARCOAL", hex: "#374151" },
//   { name: "HEATHER GREY", hex: "#9CA3AF" },
//   { name: "NAVY", hex: "#0B1F3A" },
//   { name: "WHITE", hex: "#FFFFFF" },
//   { name: "SAND", hex: "#EADBC8" },
//   { name: "YELLOW", hex: "#FACC15" },
//   { name: "OATMEAL", hex: "#E7DCC8" },
//   { name: "ORANGE", hex: "#F97316" },
//   { name: "PINK", hex: "#EC4899" },
//   { name: "BABY PINK", hex: "#FBCFE8" },
//   { name: "PURPLE", hex: "#7C3AED" },
//   { name: "GREEN", hex: "#16A34A" },
//   { name: "GREEN HEATHER", hex: "#6B7F73" },
//   { name: "FOREST", hex: "#14532D" },
//   { name: "HUNTER GREEN", hex: "#1F3B2C" },
//   { name: "BURGUNDY", hex: "#7F1D1D" },
//   { name: "LIGHT BLUE", hex: "#60A5FA" },
//   { name: "CEDAR BROWN", hex: "#6B3F2A" },
//   { name: "CHOCLATE", hex: "#4E2A1E" },
//   { name: "DENIM HEATHER", hex: "#4B5563" },
//   { name: "ROYAL", hex: "#1D4ED8" },
//   { name: "RED", hex: "#DC2626" },
//   { name: "GUN METAL", hex: "#374151" },
// ]

//       },
//       {
//         id: "p2",
//         name: "Thermal Henley",
//         category: "THERMAL HENLEY",
//         image: p2,
//         description: "Warm Henley with a clean placket and export-ready finishing—ideal for winter basics.",
//        colors: [
//   { name: "BLACK", hex: "#111827" },
//   { name: "CHARCOAL", hex: "#374151" },
//   { name: "HEATHER GREY", hex: "#9CA3AF" },
//   { name: "NAVY", hex: "#0B1F3A" },
//   { name: "WHITE", hex: "#FFFFFF" },
//   { name: "SAND", hex: "#EADBC8" },
//   { name: "YELLOW", hex: "#FACC15" },
//   { name: "OATMEAL", hex: "#E7DCC8" },
//   { name: "ORANGE", hex: "#F97316" },
//   { name: "PINK", hex: "#EC4899" },
//   { name: "BABY PINK", hex: "#FBCFE8" },
//   { name: "PURPLE", hex: "#7C3AED" },
//   { name: "GREEN", hex: "#16A34A" },
//   { name: "GREEN HEATHER", hex: "#6B7F73" },
//   { name: "FOREST", hex: "#14532D" },
//   { name: "HUNTER GREEN", hex: "#1F3B2C" },
//   { name: "BURGUNDY", hex: "#7F1D1D" },
//   { name: "LIGHT BLUE", hex: "#60A5FA" },
//   { name: "CEDAR BROWN", hex: "#6B3F2A" },
//   { name: "CHOCLATE", hex: "#4E2A1E" },
//   { name: "DENIM HEATHER", hex: "#4B5563" },
//   { name: "ROYAL", hex: "#1D4ED8" },
//   { name: "RED", hex: "#DC2626" },
//   { name: "GUN METAL", hex: "#374151" },
// ]

//       },
//       {
//         id: "p3",
//         name: "Thermal Crewneck",
//         category: "THERMAL CREWNECK",
//         image: p3,
//         description: "Soft thermal crewneck for seasonal programs with consistent specs and smooth hand-feel.",
//        colors: [
//   { name: "BLACK", hex: "#111827" },
//   { name: "CHARCOAL", hex: "#374151" },
//   { name: "HEATHER GREY", hex: "#9CA3AF" },
//   { name: "NAVY", hex: "#0B1F3A" },
//   { name: "WHITE", hex: "#FFFFFF" },
//   { name: "SAND", hex: "#EADBC8" },
//   { name: "YELLOW", hex: "#FACC15" },
//   { name: "OATMEAL", hex: "#E7DCC8" },
//   { name: "ORANGE", hex: "#F97316" },
//   { name: "PINK", hex: "#EC4899" },
//   { name: "BABY PINK", hex: "#FBCFE8" },
//   { name: "PURPLE", hex: "#7C3AED" },
//   { name: "GREEN", hex: "#16A34A" },
//   { name: "GREEN HEATHER", hex: "#6B7F73" },
//   { name: "FOREST", hex: "#14532D" },
//   { name: "HUNTER GREEN", hex: "#1F3B2C" },
//   { name: "BURGUNDY", hex: "#7F1D1D" },
//   { name: "LIGHT BLUE", hex: "#60A5FA" },
//   { name: "CEDAR BROWN", hex: "#6B3F2A" },
//   { name: "CHOCLATE", hex: "#4E2A1E" },
//   { name: "DENIM HEATHER", hex: "#4B5563" },
//   { name: "ROYAL", hex: "#1D4ED8" },
//   { name: "RED", hex: "#DC2626" },
//   { name: "GUN METAL", hex: "#374151" },
// ]

//       },
//       {
//         id: "p4",
//         name: "Fleece Pullover Hoodie",
//         category: "FLEECE PULLOVER HOODIES",
//         image: p4,
//         description: "Mid-weight fleece hoodie made for comfort, durability, and brand-ready trims.",
//        colors: [
//   { name: "BLACK", hex: "#111827" },
//   { name: "CHARCOAL", hex: "#374151" },
//   { name: "HEATHER GREY", hex: "#9CA3AF" },
//   { name: "NAVY", hex: "#0B1F3A" },
//   { name: "WHITE", hex: "#FFFFFF" },
//   { name: "SAND", hex: "#EADBC8" },
//   { name: "YELLOW", hex: "#FACC15" },
//   { name: "OATMEAL", hex: "#E7DCC8" },
//   { name: "ORANGE", hex: "#F97316" },
//   { name: "PINK", hex: "#EC4899" },
//   { name: "BABY PINK", hex: "#FBCFE8" },
//   { name: "PURPLE", hex: "#7C3AED" },
//   { name: "GREEN", hex: "#16A34A" },
//   { name: "GREEN HEATHER", hex: "#6B7F73" },
//   { name: "FOREST", hex: "#14532D" },
//   { name: "HUNTER GREEN", hex: "#1F3B2C" },
//   { name: "BURGUNDY", hex: "#7F1D1D" },
//   { name: "LIGHT BLUE", hex: "#60A5FA" },
//   { name: "CEDAR BROWN", hex: "#6B3F2A" },
//   { name: "CHOCLATE", hex: "#4E2A1E" },
//   { name: "DENIM HEATHER", hex: "#4B5563" },
//   { name: "ROYAL", hex: "#1D4ED8" },
//   { name: "RED", hex: "#DC2626" },
//   { name: "GUN METAL", hex: "#374151" },
// ]

//       },
//       `{
//         id: "p5",
//         name: "Fleece Zipper Hoodie",
//         category: "FLEECE ZIPPER HOODIES",
//         image: p5,
//         description: "Zip hoodie with clean seam finishing and reliable sizing—built for repeat OEM programs.",
//       colors: [
//   { name: "BLACK", hex: "#111827" },
//   { name: "CHARCOAL", hex: "#374151" },
//   { name: "HEATHER GREY", hex: "#9CA3AF" },
//   { name: "NAVY", hex: "#0B1F3A" },
//   { name: "WHITE", hex: "#FFFFFF" },
//   { name: "SAND", hex: "#EADBC8" },
//   { name: "YELLOW", hex: "#FACC15" },
//   { name: "OATMEAL", hex: "#E7DCC8" },
//   { name: "ORANGE", hex: "#F97316" },
//   { name: "PINK", hex: "#EC4899" },
//   { name: "BABY PINK", hex: "#FBCFE8" },
//   { name: "PURPLE", hex: "#7C3AED" },
//   { name: "GREEN", hex: "#16A34A" },
//   { name: "GREEN HEATHER", hex: "#6B7F73" },
//   { name: "FOREST", hex: "#14532D" },
//   { name: "HUNTER GREEN", hex: "#1F3B2C" },
//   { name: "BURGUNDY", hex: "#7F1D1D" },
//   { name: "LIGHT BLUE", hex: "#60A5FA" },
//   { name: "CEDAR BROWN", hex: "#6B3F2A" },
//   { name: "CHOCLATE", hex: "#4E2A1E" },
//   { name: "DENIM HEATHER", hex: "#4B5563" },
//   { name: "ROYAL", hex: "#1D4ED8" },
//   { name: "RED", hex: "#DC2626" },
//   { name: "GUN METAL", hex: "#374151" },
// ]

//       },
//       {
//         id: "p6",
//         name: "Fleece Sweatshirt",
//         category: "FLEECE SWEATSHIRTS",
//         image: p6,
//         description: "Classic crew sweatshirt with smooth rib finishing and consistent bulk production quality.",
//        colors: [
//   { name: "BLACK", hex: "#111827" },
//   { name: "CHARCOAL", hex: "#374151" },
//   { name: "HEATHER GREY", hex: "#9CA3AF" },
//   { name: "NAVY", hex: "#0B1F3A" },
//   { name: "WHITE", hex: "#FFFFFF" },
//   { name: "SAND", hex: "#EADBC8" },
//   { name: "YELLOW", hex: "#FACC15" },
//   { name: "OATMEAL", hex: "#E7DCC8" },
//   { name: "ORANGE", hex: "#F97316" },
//   { name: "PINK", hex: "#EC4899" },
//   { name: "BABY PINK", hex: "#FBCFE8" },
//   { name: "PURPLE", hex: "#7C3AED" },
//   { name: "GREEN", hex: "#16A34A" },
//   { name: "GREEN HEATHER", hex: "#6B7F73" },
//   { name: "FOREST", hex: "#14532D" },
//   { name: "HUNTER GREEN", hex: "#1F3B2C" },
//   { name: "BURGUNDY", hex: "#7F1D1D" },
//   { name: "LIGHT BLUE", hex: "#60A5FA" },
//   { name: "CEDAR BROWN", hex: "#6B3F2A" },
//   { name: "CHOCLATE", hex: "#4E2A1E" },
//   { name: "DENIM HEATHER", hex: "#4B5563" },
//   { name: "ROYAL", hex: "#1D4ED8" },
//   { name: "RED", hex: "#DC2626" },
//   { name: "GUN METAL", hex: "#374151" },
// ]

//       },
//       {
//         id: "p7",
//         name: "Nantucket Pullover Hoodie",
//         category: "NANTUCKET PULLOVER HOODIES",
//         image: p7,
//         description: "Heavyweight pullover designed for structured shape, soft feel, and export-ready finishing.",
//         colors: [
//          { name: "SALT&PEPPER", hex: "#6B7280" },
// { name: "SOFT PINK", hex: "#F9A8D4" },
// { name: "BANANA YELLOW", hex: "#FDE047" },
// { name: "BLUE MELANGE", hex: "#6B8FBF" },
// { name: "CORAL", hex: "#FB7185" },
// { name: "ICELAVENDAR", hex: "#DDD6FE" },
// { name: "SEA GRASS", hex: "#84A98C" },
// { name: "CHARCOA", hex: "#374151" },

//         ],
//       },`
//       {
//         id: "p8",
//         name: "Nantucket Zipper Hoodie",
//         category: "NANTUCKET ZIPPER HOODIES",
//         image: p8,
//         description: "Premium zip hoodie with strong seams and consistent trims—ready for private label.",
//         colors: [
//           { name: "SALT&PEPPER", hex: "#6B7280" },
// { name: "SOFT PINK", hex: "#F9A8D4" },
// { name: "BANANA YELLOW", hex: "#FDE047" },
// { name: "BLUE MELANGE", hex: "#6B8FBF" },
// { name: "CORAL", hex: "#FB7185" },
// { name: "ICELAVENDAR", hex: "#DDD6FE" },
// { name: "SEA GRASS", hex: "#84A98C" },
// { name: "CHARCOA", hex: "#374151" },

//         ],
//       },
//       {
//         id: "p9",
//         name: "Nantucket Sweatshirt",
//         category: "NANTUCKET SWEATSHIRTS",
//         image: p9,
//         description: "Structured sweatshirt built for long-lasting wear with clean stitch finishing.",
//         colors: [
//         { name: "SALT&PEPPER", hex: "#6B7280" },
// { name: "SOFT PINK", hex: "#F9A8D4" },
// { name: "BANANA YELLOW", hex: "#FDE047" },
// { name: "BLUE MELANGE", hex: "#6B8FBF" },
// { name: "CORAL", hex: "#FB7185" },
// { name: "ICELAVENDAR", hex: "#DDD6FE" },
// { name: "SEA GRASS", hex: "#84A98C" },
// { name: "CHARCOA", hex: "#374151" },

//         ],
//       },
//       {
//         id: "p10",
//         name: "Sherpa Zipper Hoodie",
//         category: "SHERPA ZIPPER HOODIES",
//         image: p10,
//         description: "Sherpa-lined zip hoodie for warmth, comfort, and durable construction.",
//        colors: [
//   { name: "BLACK", hex: "#111827" },
//   { name: "CHARCOAL", hex: "#374151" },
//   { name: "HEATHER GREY", hex: "#9CA3AF" },
//   { name: "NAVY", hex: "#0B1F3A" },
//   { name: "WHITE", hex: "#FFFFFF" },
//   { name: "SAND", hex: "#EADBC8" },
//   { name: "YELLOW", hex: "#FACC15" },
//   { name: "OATMEAL", hex: "#E7DCC8" },
//   { name: "ORANGE", hex: "#F97316" },
//   { name: "PINK", hex: "#EC4899" },
//   { name: "BABY PINK", hex: "#FBCFE8" },
//   { name: "PURPLE", hex: "#7C3AED" },
//   { name: "GREEN", hex: "#16A34A" },
//   { name: "GREEN HEATHER", hex: "#6B7F73" },
//   { name: "FOREST", hex: "#14532D" },
//   { name: "HUNTER GREEN", hex: "#1F3B2C" },
//   { name: "BURGUNDY", hex: "#7F1D1D" },
//   { name: "LIGHT BLUE", hex: "#60A5FA" },
//   { name: "CEDAR BROWN", hex: "#6B3F2A" },
//   { name: "CHOCLATE", hex: "#4E2A1E" },
//   { name: "DENIM HEATHER", hex: "#4B5563" },
//   { name: "ROYAL", hex: "#1D4ED8" },
//   { name: "RED", hex: "#DC2626" },
//   { name: "GUN METAL", hex: "#374151" },
// ]

//       },
//       {
//         id: "p11",
//         name: "Fleece Pants",
//         category: "FLEECE PANTS",
//         image: p11,
//         description: "Soft fleece pants with modern fit and clean finishing—ideal for loungewear programs.",
//        colors: [
//   { name: "BLACK", hex: "#111827" },
//   { name: "CHARCOAL", hex: "#374151" },
//   { name: "HEATHER GREY", hex: "#9CA3AF" },
//   { name: "NAVY", hex: "#0B1F3A" },
//   { name: "WHITE", hex: "#FFFFFF" },
//   { name: "SAND", hex: "#EADBC8" },
//   { name: "YELLOW", hex: "#FACC15" },
//   { name: "OATMEAL", hex: "#E7DCC8" },
//   { name: "ORANGE", hex: "#F97316" },
//   { name: "PINK", hex: "#EC4899" },
//   { name: "BABY PINK", hex: "#FBCFE8" },
//   { name: "PURPLE", hex: "#7C3AED" },
//   { name: "GREEN", hex: "#16A34A" },
//   { name: "GREEN HEATHER", hex: "#6B7F73" },
//   { name: "FOREST", hex: "#14532D" },
//   { name: "HUNTER GREEN", hex: "#1F3B2C" },
//   { name: "BURGUNDY", hex: "#7F1D1D" },
//   { name: "LIGHT BLUE", hex: "#60A5FA" },
//   { name: "CEDAR BROWN", hex: "#6B3F2A" },
//   { name: "CHOCLATE", hex: "#4E2A1E" },
//   { name: "DENIM HEATHER", hex: "#4B5563" },
//   { name: "ROYAL", hex: "#1D4ED8" },
//   { name: "RED", hex: "#DC2626" },
//   { name: "GUN METAL", hex: "#374151" },
// ]

//       },
//       {
//         id: "p12",
//         name: "Fleece Cargo Pants",
//         category: "FLEECE CARGO PANTS",
//         image: p12,
//         description: "Cargo fleece pants with utility pockets and reinforced stress points for repeat orders.",
//         colors: [
//   { name: "BLACK", hex: "#111827" },
//   { name: "CHARCOAL", hex: "#374151" },
//   { name: "HEATHER GREY", hex: "#9CA3AF" },
//   { name: "NAVY", hex: "#0B1F3A" },
//   { name: "WHITE", hex: "#FFFFFF" },
//   { name: "SAND", hex: "#EADBC8" },
//   { name: "YELLOW", hex: "#FACC15" },
//   { name: "OATMEAL", hex: "#E7DCC8" },
//   { name: "ORANGE", hex: "#F97316" },
//   { name: "PINK", hex: "#EC4899" },
//   { name: "BABY PINK", hex: "#FBCFE8" },
//   { name: "PURPLE", hex: "#7C3AED" },
//   { name: "GREEN", hex: "#16A34A" },
//   { name: "GREEN HEATHER", hex: "#6B7F73" },
//   { name: "FOREST", hex: "#14532D" },
//   { name: "HUNTER GREEN", hex: "#1F3B2C" },
//   { name: "BURGUNDY", hex: "#7F1D1D" },
//   { name: "LIGHT BLUE", hex: "#60A5FA" },
//   { name: "CEDAR BROWN", hex: "#6B3F2A" },
//   { name: "CHOCLATE", hex: "#4E2A1E" },
//   { name: "DENIM HEATHER", hex: "#4B5563" },
//   { name: "ROYAL", hex: "#1D4ED8" },
//   { name: "RED", hex: "#DC2626" },
//   { name: "GUN METAL", hex: "#374151" },
// ]

//       },
//       {
//         id: "p13",
//         name: "Tank Top",
//         category: "TANK TOPS",
//         image: p13,
//         description: "Lightweight tank for warm climates and active programs—easy to customize for branding.",
//         colors: [
//           { name: "White", hex: "#ffffff" },
//           { name: "Black", hex: "#111827" },

//         ],
//       },
//       {
//         id: "p14",
//         name: "Medical Scrubs Set",
//         category: "MEDICAL SCRUBS TOP & PANTS",
//         image: p14,
//         description: "Scrubs designed for institutional supply with consistent sizing, comfort, and clean finishing.",
//         colors: [
//           { name: "PINK", hex: "#EC4899" },
//           { name: "GREEN", hex: "#16A34A" },
//           { name: "BLUE", hex: "#6B8FBF" },
//         ],
//       },
//       {
//         id: "p15",
//         name: "Safety Vest",
//         category: "SAFETY VEST",
//         image: p15,
//         description: "High-visibility vest option for workwear programs with reliable stitching and export packing.",
//         colors: [
    
//                       { name: "SAFETY GREEN", hex: "#39FF14" },
//                   { name: "SAFETY ORANGE", hex: "#FF6A00" },

//         ],
//       },
//        {
//         id: "p16",
//         name: "Nebraska Polyster Woven Pants",
//         category: "NEBRASKA POLYSTER WOVEN PANTS",
//         image: p16,
//         description: "Polyester woven pants built for everyday durability—lightweight, clean-fitting, and ideal for bulk OEM programs.",
//         colors: [
//           { name: "BLACK", hex: "#111827" },
//   { name: "CHARCOAL", hex: "#374151" },
//           { name: "NAVY", hex: "#0B1F3A" },
//   { name: "MILITARY GREEN", hex: "#556B2F" },

//         ],
//       },
//        {
//         id: "p17",
//         name: "Polyester T-Shirts ",
//         category: "POLYESTER T-SHIRTS",
//         image: p17,
//         description: "High-visibility polyester T-shirt with a smooth, quick-dry finish—built for all-day comfort and consistent bulk production.",
//         colors: [
//          { name: "BLACK", hex: "#111827" },
//                   { name: "SAFETY ORANGE", hex: "#FF6A00" },
//                   { name: "SAFETY GREEN", hex: "#39FF14" },

//         ],
//       },
//        {
//         id: "p18",
//         name: "Polyester Polo",
//         category: "POLYESTER POLO",
//         image: p18,
//         description: "A high-visibility polyester polo engineered for all-day comfort, moisture control, and durable performance on active job sites.",
//         colors: [
//            { name: "BLACK", hex: "#111827" },
//                   { name: "SAFETY ORANGE", hex: "#FF6A00" },
//                   { name: "SAFETY GREEN", hex: "#39FF14" },
//         ],
//       },
//        {
//         id: "p19",
//         name: "Polyester Hoodie",
//         category: "POLYESTER HOODIE",
//         image: p19,
//         description: "Polyester hoodie built for programs—durable, colorfast, and export-ready with clean stitching and smooth finishing.",
//         colors: [
//            { name: "BLACK", hex: "#111827" },
//                   { name: "SAFETY ORANGE", hex: "#FF6A00" },
//                   { name: "SAFETY GREEN", hex: "#39FF14" },
//         ],
//       },
//     ],
//     []
//   );

//   const categories = useMemo(() => {
//     const set = new Set(products.map((p) => p.category));
//     return ["All", ...Array.from(set)];
//   }, [products]);

//   const [q, setQ] = useState("");
//   const [cat, setCat] = useState("All");

//   // ✅ categories UI (prevents "mess" when too many pills)
//   const VISIBLE_CATS = 9;
//   const [showAllCats, setShowAllCats] = useState(false);

//   const visibleCats = showAllCats ? categories : categories.slice(0, VISIBLE_CATS);
//   const hiddenCats = categories.slice(VISIBLE_CATS);

//   // ✅ modal state
//   const [modalOpen, setModalOpen] = useState(false);
//   const [selected, setSelected] = useState(null);

//   const filtered = useMemo(() => {
//     const query = q.trim().toLowerCase();
//     return products.filter((p) => {
//       const matchesCat = cat === "All" ? true : p.category === cat;
//       const matchesQuery =
//         !query ||
//         p.name.toLowerCase().includes(query) ||
//         p.description.toLowerCase().includes(query) ||
//         p.category.toLowerCase().includes(query);
//       return matchesCat && matchesQuery;
//     });
//   }, [products, q, cat]);

//   const openInquiry = (p) => {
//     setSelected(p);
//     setModalOpen(true);
//   };

//   return (
//     <div>
//       {/* HERO */}
//       <section className="bg-ink-900">
//         <div className="container-app py-14 text-center">
//           <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white/80 mt-3">
//             Products
//           </div>
//           <h1 className="mt-5 text-4xl font-black tracking-tight text-white sm:text-5xl">
//             Product Gallery
//           </h1>
        
//         </div>
//         <div className="h-14 bg-gradient-to-b from-white/0 to-white" />
//       </section>

//       {/* Filters */}
//      <section className="bg-white mt-7">
//   <div className="container-app py-10">
//     <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
      
//       {/* LEFT: Category pills (single clean row) */}
//       <div className="flex flex-wrap items-center gap-2">
//         {families.map((c) => (
//           <Pill key={c} active={cat === c} onClick={() => setCat(c)}>
//             {c}
//           </Pill>
//         ))}
//       </div>

//       {/* RIGHT: Search */}
//       <div className="relative w-full max-w-md lg:max-w-sm">
//         <Search
//           className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-400"
//           size={18}
//         />
//         <input
//           value={q}
//           onChange={(e) => setQ(e.target.value)}
//           placeholder="Search products…"
//           className="w-full rounded-2xl border border-ink-900/10 bg-white py-3 pl-10 pr-4 text-sm text-ink-900 outline-none focus:border-brand-300 focus:ring-4 focus:ring-brand-100"
//         />
//       </div>

//     </div>
//   </div>
// </section>


//       {/* Products grid */}
//       <section className="bg-white mt-10">
//         <div className="container-app pb-14">
//           <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
//             {filtered.map((p) => (
//               <ProductCard key={p.id} p={p} onInquire={openInquiry} />
//             ))}
//           </div>

//           {filtered.length === 0 ? (
//             <div className="mt-8 rounded-2xl border border-ink-900/10 bg-ink-50 p-6 text-sm text-ink-700">
//               No products match your search. Try clearing filters.
//             </div>
//           ) : null}
//         </div>
//       </section>

//       {/* ✅ Inquiry modal */}
//       <InquiryModal
//         open={modalOpen}
//         onClose={() => setModalOpen(false)}
//         productName={selected?.name || "Product"}
//       />
//     </div>
//   );
// }






import React, { useMemo, useState, useEffect } from "react";
import { Search, Mail, X, Phone, MessageSquareText, Tag } from "lucide-react";

// ✅ Replace these imports with your real product images later
import p1 from "../assets/productpage1.png";
import p2 from "../assets/productpage2.png";
import p3 from "../assets/productpage3.png";
import p4 from "../assets/productpage4.png";
import p5 from "../assets/productpage5.png";
import p6 from "../assets/productpage6.png";
import p7 from "../assets/productpage7.png";
import p8 from "../assets/productpage8.png";
import p9 from "../assets/productpage9.png";
import p10 from "../assets/productpage10.png";
import p11 from "../assets/productpage11.png";
import p12 from "../assets/productpage12.png";
import p13 from "../assets/productpage13.png";
import p17 from "../assets/productpage17.png";
import p18 from "../assets/productpage18.png";
import p19 from "../assets/productpage19.png";

function ColorsPreview({ colors = [], initial = 7 }) {
  const [open, setOpen] = useState(false);

  const visible = useMemo(() => {
    if (!Array.isArray(colors)) return [];
    return open ? colors : colors.slice(0, initial);
  }, [colors, open, initial]);

  const hiddenCount = Math.max(0, colors.length - initial);

  if (!colors.length) return null;

  return (
    <div className="mt-2">
      <div className="flex flex-wrap gap-2">
        {visible.map((c) => (
          <div
            key={c.name}
            className="inline-flex items-center gap-2 rounded-full border border-ink-900/10 bg-white px-2.5 py-1 text-[11px] text-ink-800"
            title={c.name}
          >
            <span
              className="h-3 w-3 rounded-full border border-ink-900/10"
              style={{ backgroundColor: c.hex }}
            />
            {c.name}
          </div>
        ))}

        {/* ✅ More / Less button (only if many colors) */}
        {colors.length > initial && (
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center rounded-full border border-ink-900/10 bg-ink-50 px-3 py-1 text-[11px] font-semibold text-ink-700 hover:bg-ink-100"
          >
            {open ? "Less" : `More (${hiddenCount})`}
          </button>
        )}
      </div>
    </div>
  );
}

// fixed family pills (one line)
const families = [
  "All",
  "T-Shirts",
  "Fleece",
  "Polo",
  "Thermal",
  "Nantucket",
  "Polyester",
];

// ---------- Helpers ----------
const EMAIL_TO = "info@jubilee-apparel.com";

function buildMailto({ productName, subject, phone, reason }) {
  const finalSubject = encodeURIComponent(
    subject || `Product inquiry — ${productName}`
  );
  const body = encodeURIComponent(
    `Hello Jubilee Apparel,\n\nI'm interested in:\n- Product: ${productName}\n\nDetails:\n- Contact No: ${phone}\n- Reason: ${reason}\n\nPlease share MOQ, lead time, and pricing.\n\nThanks,`
  );
  return `mailto:${EMAIL_TO}?subject=${finalSubject}&body=${body}`;
}

function Pill({ active, children, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "rounded-full px-4 py-2 text-xs font-semibold transition whitespace-nowrap",
        active
          ? "bg-brand-700 text-white shadow-soft"
          : "border border-ink-900/10 bg-white text-ink-700 hover:bg-ink-50",
      ].join(" ")}
    >
      {children}
    </button>
  );
}

/** ✅ Popup Modal (frontend-only, opens email on submit) */
function InquiryModal({ open, onClose, productName }) {
  const [subject, setSubject] = useState(`Product inquiry — ${productName}`);
  const [phone, setPhone] = useState("");
  const [reason, setReason] = useState("");

  // keep subject in sync when product changes
  useEffect(() => {
    setSubject(`Product inquiry — ${productName}`);
  }, [productName]);

  if (!open) return null;

  const submit = (e) => {
    e.preventDefault();
    if (!phone.trim()) return alert("Please enter your contact number.");
    if (!reason.trim()) return alert("Please add a short reason.");

    window.location.href = buildMailto({
      productName,
      subject,
      phone,
      reason,
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      <div
        className="absolute inset-0 bg-ink-900/60 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-white/10 bg-white shadow-soft">
        <div className="flex items-center justify-between border-b border-ink-900/10 p-5">
          <div>
            <div className="text-xs font-mont font-semibold text-ink-500">Inquiry</div>
            <div className="text-sm font-mont font-extrabold text-ink-900">
              {productName}
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl border border-ink-900/10 bg-white p-2 text-ink-600 hover:bg-ink-50"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>

        <form onSubmit={submit} className="p-5">
          <label className="block">
            <div className="mb-1 flex items-center gap-2 text-xs font-bold text-ink-700">
              <Tag size={16} className="text-brand-700 font-playfair font-semibold" /> Subject
            </div>
            <input
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full rounded-2xl border border-ink-900/10 bg-white px-4 py-3 text-sm text-ink-900 outline-none focus:border-brand-300 focus:ring-4 focus:ring-brand-100"
              placeholder="Subject"
            />
          </label>

          <label className="mt-4 block">
            <div className="mb-1 flex items-center gap-2 text-xs font-bold text-ink-700">
              <Phone size={16} className="text-brand-700 font-playfair font-semibold" /> Contact No
            </div>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full rounded-2xl border border-ink-900/10 bg-white px-4 py-3 text-sm text-ink-900 outline-none focus:border-brand-300 focus:ring-4 focus:ring-brand-100"
              placeholder="+92 3xx xxxxxxx"
            />
          </label>

          <label className="mt-4 block">
            <div className="mb-1 flex items-center gap-2 text-xs font-bold text-ink-700">
              <MessageSquareText size={16} className="text-brand-700 font-playfair font-semibold" /> Reason
            </div>
            <textarea
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              rows={4}
              className="w-full font-mont font-semibold resize-none rounded-2xl border border-ink-900/10 bg-white px-4 py-3 text-sm text-ink-900 outline-none focus:border-brand-300 focus:ring-4 focus:ring-brand-100"
              placeholder="MOQ, sampling, lead time, shipping…"
            />
          </label>

          <div className="mt-5 flex items-center justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="rounded-xl border font-mont border-ink-900/10 bg-white px-4 py-2 text-xs font-semibold text-ink-700 hover:bg-ink-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="inline-flex font-mont items-center gap-2 rounded-xl bg-brand-700 px-4 py-2 text-xs font-semibold text-white transition hover:bg-brand-800"
            >
              <Mail size={16} />
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function ProductCard({ p, onInquire }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-ink-900/10 bg-white shadow-soft transition hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(0,0,0,0.12)]">
      <div className="relative aspect-[4/3] overflow-hidden bg-ink-50">
        <img
          src={p.image}
          alt={p.name}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
          loading="lazy"
        />
        <div className="absolute left-4 top-4 rounded-full border border-white/40 bg-white/80 px-3 py-1 text-[11px] font-semibold text-ink-900 backdrop-blur">
          {p.category}
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-sm font-extrabold text-ink-900">{p.name}</h3>
        <p className="mt-1 text-xs leading-5 text-ink-700">{p.description}</p>

      <div className="mt-4">
  <div className="text-[11px] font-mont font-bold text-ink-500">Available colors</div>
  <ColorsPreview colors={p.colors} initial={7} />
</div>


        <div className="mt-5 flex items-center justify-between gap-3">
          <div className="text-[11px] font-mont font-semibold text-ink-500">
            MOQ & lead time on request
          </div>
          <button
            type="button"
            onClick={() => onInquire(p)}
            className="inline-flex items-center font-mont gap-2 rounded-xl bg-brand-700 px-4 py-2 text-xs font-semibold text-white transition hover:bg-brand-800"
          >
            <Mail size={16} />
            Inquire
          </button>
        </div>
      </div>
    </article>
  );
}

export default function Products() {
  // ✅ state MUST be inside component
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");

  const [modalOpen, setModalOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  // ✅ products list (IMPORTANT: add family field)
  const products = useMemo(
    () => [
       {
        id: "p1",
        name: "T-Shirt",
        family:"T-Shirts",
        category: "T-SHIRT",
        image: p1,
        description: "A clean everyday crewneck built for consistent fit, smooth finishing, and private-label programs.",
 colors: [
   // Greens (all together)
  { name: "GREEN", hex: "#16A34A" },
  { name: "GREEN HEATHER", hex: "#6B7F73" },
  { name: "FOREST", hex: "#14532D" },
  { name: "HUNTER GREEN", hex: "#1F3B2C" },

  // Reds (all together)
  { name: "RED", hex: "#DC2626" },
  { name: "BURGUNDY", hex: "#7F1D1D" },
  // Neutrals
  { name: "BLACK", hex: "#111827" },
  { name: "WHITE", hex: "#FFFFFF" },
  { name: "SAND", hex: "#EADBC8" },
  { name: "OATMEAL", hex: "#E7DCC8" },

  // Greys (all together)
  { name: "CHARCOAL", hex: "#374151" },
  { name: "GUN METAL", hex: "#374151" },
  { name: "HEATHER GREY", hex: "#9CA3AF" },
  { name: "DENIM HEATHER", hex: "#4B5563" },

  // Blues (all together)
  { name: "NAVY", hex: "#0B1F3A" },
  { name: "ROYAL", hex: "#1D4ED8" },
  { name: "LIGHT BLUE", hex: "#60A5FA" },

  // Pinks (together)
  { name: "PINK", hex: "#EC4899" },
  { name: "BABY PINK", hex: "#FBCFE8" },

  // Purple
  { name: "PURPLE", hex: "#7C3AED" },

  // Warm tones
  { name: "YELLOW", hex: "#FACC15" },
  { name: "ORANGE", hex: "#F97316" },

  // Browns (together)
  { name: "CEDAR BROWN", hex: "#6B3F2A" },
  { name: "CHOCLATE", hex: "#4E2A1E" },
]


      },
      {
        id: "p2",
        name: "Thermal Henley",
        family:"Thermal",
        category: "THERMAL HENLEY",
        image: p2,
        description: "Warm Henley with a clean placket and export-ready finishing—ideal for winter basics.",
       colors: [
  // Greens (all together)
  { name: "GREEN", hex: "#16A34A" },
  { name: "GREEN HEATHER", hex: "#6B7F73" },
  { name: "FOREST", hex: "#14532D" },
  { name: "HUNTER GREEN", hex: "#1F3B2C" },

  // Reds (all together)
  { name: "RED", hex: "#DC2626" },
  { name: "BURGUNDY", hex: "#7F1D1D" },
  // Neutrals
  { name: "BLACK", hex: "#111827" },
  { name: "WHITE", hex: "#FFFFFF" },
  { name: "SAND", hex: "#EADBC8" },
  { name: "OATMEAL", hex: "#E7DCC8" },

  // Greys (all together)
  { name: "CHARCOAL", hex: "#374151" },
  { name: "GUN METAL", hex: "#374151" },
  { name: "HEATHER GREY", hex: "#9CA3AF" },
  { name: "DENIM HEATHER", hex: "#4B5563" },

  // Blues (all together)
  { name: "NAVY", hex: "#0B1F3A" },
  { name: "ROYAL", hex: "#1D4ED8" },
  { name: "LIGHT BLUE", hex: "#60A5FA" },

  // Pinks (together)
  { name: "PINK", hex: "#EC4899" },
  { name: "BABY PINK", hex: "#FBCFE8" },

  // Purple
  { name: "PURPLE", hex: "#7C3AED" },

  // Warm tones
  { name: "YELLOW", hex: "#FACC15" },
  { name: "ORANGE", hex: "#F97316" },

  // Browns (together)
  { name: "CEDAR BROWN", hex: "#6B3F2A" },
  { name: "CHOCLATE", hex: "#4E2A1E" },
]

      },
      {
        id: "p3",
        name: "Thermal Crewneck",
        family:"Thermal",
        category: "THERMAL CREWNECK",
        image: p3,
        description: "Soft thermal crewneck for seasonal programs with consistent specs and smooth hand-feel.",
       colors: [
  // Greens (all together)
  { name: "GREEN", hex: "#16A34A" },
  { name: "GREEN HEATHER", hex: "#6B7F73" },
  { name: "FOREST", hex: "#14532D" },
  { name: "HUNTER GREEN", hex: "#1F3B2C" },

  // Reds (all together)
  { name: "RED", hex: "#DC2626" },
  { name: "BURGUNDY", hex: "#7F1D1D" },
  // Neutrals
  { name: "BLACK", hex: "#111827" },
  { name: "WHITE", hex: "#FFFFFF" },
  { name: "SAND", hex: "#EADBC8" },
  { name: "OATMEAL", hex: "#E7DCC8" },

  // Greys (all together)
  { name: "CHARCOAL", hex: "#374151" },
  { name: "GUN METAL", hex: "#374151" },
  { name: "HEATHER GREY", hex: "#9CA3AF" },
  { name: "DENIM HEATHER", hex: "#4B5563" },

  // Blues (all together)
  { name: "NAVY", hex: "#0B1F3A" },
  { name: "ROYAL", hex: "#1D4ED8" },
  { name: "LIGHT BLUE", hex: "#60A5FA" },

  // Pinks (together)
  { name: "PINK", hex: "#EC4899" },
  { name: "BABY PINK", hex: "#FBCFE8" },

  // Purple
  { name: "PURPLE", hex: "#7C3AED" },

  // Warm tones
  { name: "YELLOW", hex: "#FACC15" },
  { name: "ORANGE", hex: "#F97316" },

  // Browns (together)
  { name: "CEDAR BROWN", hex: "#6B3F2A" },
  { name: "CHOCLATE", hex: "#4E2A1E" },
]

      },
      {
        id: "p5",
        name: "Fleece Zipper Hoodie",
        family:"Fleece",
        category: "FLEECE ZIPPER HOODIES",
        image: p5,
        description: "Zip hoodie with clean seam finishing and reliable sizing—built for repeat OEM programs.",
      colors: [
  // Greens (all together)
  { name: "GREEN", hex: "#16A34A" },
  { name: "GREEN HEATHER", hex: "#6B7F73" },
  { name: "FOREST", hex: "#14532D" },
  { name: "HUNTER GREEN", hex: "#1F3B2C" },

  // Reds (all together)
  { name: "RED", hex: "#DC2626" },
  { name: "BURGUNDY", hex: "#7F1D1D" },
  // Neutrals
  { name: "BLACK", hex: "#111827" },
  { name: "WHITE", hex: "#FFFFFF" },
  { name: "SAND", hex: "#EADBC8" },
  { name: "OATMEAL", hex: "#E7DCC8" },

  // Greys (all together)
  { name: "CHARCOAL", hex: "#374151" },
  { name: "GUN METAL", hex: "#374151" },
  { name: "HEATHER GREY", hex: "#9CA3AF" },
  { name: "DENIM HEATHER", hex: "#4B5563" },

  // Blues (all together)
  { name: "NAVY", hex: "#0B1F3A" },
  { name: "ROYAL", hex: "#1D4ED8" },
  { name: "LIGHT BLUE", hex: "#60A5FA" },

  // Pinks (together)
  { name: "PINK", hex: "#EC4899" },
  { name: "BABY PINK", hex: "#FBCFE8" },

  // Purple
  { name: "PURPLE", hex: "#7C3AED" },

  // Warm tones
  { name: "YELLOW", hex: "#FACC15" },
  { name: "ORANGE", hex: "#F97316" },

  // Browns (together)
  { name: "CEDAR BROWN", hex: "#6B3F2A" },
  { name: "CHOCLATE", hex: "#4E2A1E" },
]

      },
      {
        id: "p4",
        name: "Fleece Pullover Hoodie",
        family:"Fleece",
        category: "FLEECE PULLOVER HOODIES",
        image: p4,
        description: "Mid-weight fleece hoodie made for comfort, durability, and brand-ready trims.",
       colors: [
  // Greens (all together)
  { name: "GREEN", hex: "#16A34A" },
  { name: "GREEN HEATHER", hex: "#6B7F73" },
  { name: "FOREST", hex: "#14532D" },
  { name: "HUNTER GREEN", hex: "#1F3B2C" },

  // Reds (all together)
  { name: "RED", hex: "#DC2626" },
  { name: "BURGUNDY", hex: "#7F1D1D" },
  // Neutrals
  { name: "BLACK", hex: "#111827" },
  { name: "WHITE", hex: "#FFFFFF" },
  { name: "SAND", hex: "#EADBC8" },
  { name: "OATMEAL", hex: "#E7DCC8" },

  // Greys (all together)
  { name: "CHARCOAL", hex: "#374151" },
  { name: "GUN METAL", hex: "#374151" },
  { name: "HEATHER GREY", hex: "#9CA3AF" },
  { name: "DENIM HEATHER", hex: "#4B5563" },

  // Blues (all together)
  { name: "NAVY", hex: "#0B1F3A" },
  { name: "ROYAL", hex: "#1D4ED8" },
  { name: "LIGHT BLUE", hex: "#60A5FA" },

  // Pinks (together)
  { name: "PINK", hex: "#EC4899" },
  { name: "BABY PINK", hex: "#FBCFE8" },

  // Purple
  { name: "PURPLE", hex: "#7C3AED" },

  // Warm tones
  { name: "YELLOW", hex: "#FACC15" },
  { name: "ORANGE", hex: "#F97316" },

  // Browns (together)
  { name: "CEDAR BROWN", hex: "#6B3F2A" },
  { name: "CHOCLATE", hex: "#4E2A1E" },
       ]

      },
      
      {
        id: "p6",
        name: "Fleece Sweatshirt",
        family:"Fleece",
        category: "FLEECE SWEATSHIRTS",
        image: p6,
        description: "Classic crew sweatshirt with smooth rib finishing and consistent bulk production quality.",
       colors: [
// Greens (all together)
  { name: "GREEN", hex: "#16A34A" },
  { name: "GREEN HEATHER", hex: "#6B7F73" },
  { name: "FOREST", hex: "#14532D" },
  { name: "HUNTER GREEN", hex: "#1F3B2C" },

  // Reds (all together)
  { name: "RED", hex: "#DC2626" },
  { name: "BURGUNDY", hex: "#7F1D1D" },
  // Neutrals
  { name: "BLACK", hex: "#111827" },
  { name: "WHITE", hex: "#FFFFFF" },
  { name: "SAND", hex: "#EADBC8" },
  { name: "OATMEAL", hex: "#E7DCC8" },

  // Greys (all together)
  { name: "CHARCOAL", hex: "#374151" },
  { name: "GUN METAL", hex: "#374151" },
  { name: "HEATHER GREY", hex: "#9CA3AF" },
  { name: "DENIM HEATHER", hex: "#4B5563" },

  // Blues (all together)
  { name: "NAVY", hex: "#0B1F3A" },
  { name: "ROYAL", hex: "#1D4ED8" },
  { name: "LIGHT BLUE", hex: "#60A5FA" },

  // Pinks (together)
  { name: "PINK", hex: "#EC4899" },
  { name: "BABY PINK", hex: "#FBCFE8" },

  // Purple
  { name: "PURPLE", hex: "#7C3AED" },

  // Warm tones
  { name: "YELLOW", hex: "#FACC15" },
  { name: "ORANGE", hex: "#F97316" },

  // Browns (together)
  { name: "CEDAR BROWN", hex: "#6B3F2A" },
  { name: "CHOCLATE", hex: "#4E2A1E" },
]

      },
      {
        id: "p7",
        name: "Nantucket Pullover Hoodie",
                family:"Nantucket",
        category: "NANTUCKET PULLOVER HOODIES",
        image: p7,
        description: "Heavyweight pullover designed for structured shape, soft feel, and export-ready finishing.",
       colors: [
  // Greys / Neutrals
  { name: "SALT&PEPPER", hex: "#6B7280" },
  { name: "CHARCOA", hex: "#374151" },

  // Blues
  { name: "BLUE MELANGE", hex: "#6B8FBF" },

  // Greens
  { name: "SEA GRASS", hex: "#84A98C" },

  // Yellows
  { name: "BANANA YELLOW", hex: "#FDE047" },

  // Pinks / Corals
  { name: "SOFT PINK", hex: "#F9A8D4" },
  { name: "CORAL", hex: "#FB7185" },

  // Purples
  { name: "ICELAVENDAR", hex: "#DDD6FE" },
]

      },
      {
        id: "p9",
        name: "Nantucket Sweatshirt",
                family:"Nantucket",
        category: "NANTUCKET SWEATSHIRTS",
        image: p9,
        description: "Structured sweatshirt built for long-lasting wear with clean stitch finishing.",
       colors: [
  // Greys / Neutrals
  { name: "SALT&PEPPER", hex: "#6B7280" },
  { name: "CHARCOA", hex: "#374151" },

  // Blues
  { name: "BLUE MELANGE", hex: "#6B8FBF" },

  // Greens
  { name: "SEA GRASS", hex: "#84A98C" },

  // Yellows
  { name: "BANANA YELLOW", hex: "#FDE047" },

  // Pinks / Corals
  { name: "SOFT PINK", hex: "#F9A8D4" },
  { name: "CORAL", hex: "#FB7185" },

  // Purples
  { name: "ICELAVENDAR", hex: "#DDD6FE" },
]

      },
      {
        id: "p8",
        name: "Nantucket Zipper Hoodie",
                family:"Nantucket",
        category: "NANTUCKET ZIPPER HOODIES",
        image: p8,
        description: "Premium zip hoodie with strong seams and consistent trims—ready for private label.",
  colors: [
  // Greys / Neutrals
  { name: "SALT&PEPPER", hex: "#6B7280" },
  { name: "CHARCOA", hex: "#374151" },

  // Blues
  { name: "BLUE MELANGE", hex: "#6B8FBF" },

  // Greens
  { name: "SEA GRASS", hex: "#84A98C" },

  // Yellows
  { name: "BANANA YELLOW", hex: "#FDE047" },

  // Pinks / Corals
  { name: "SOFT PINK", hex: "#F9A8D4" },
  { name: "CORAL", hex: "#FB7185" },

  // Purples
  { name: "ICELAVENDAR", hex: "#DDD6FE" },
]

      },
      
 {
        id: "p10",
        name: "Fleece Sherpa Zipper Hoodie",
                family:"Fleece",
        category: "SHERPA ZIPPER HOODIES",
        image: p10,
        description: "Sherpa-lined zip hoodie for warmth, comfort, and durable construction.",
       colors: [
  // Greens (all together)
  { name: "GREEN", hex: "#16A34A" },
  { name: "GREEN HEATHER", hex: "#6B7F73" },
  { name: "FOREST", hex: "#14532D" },
  { name: "HUNTER GREEN", hex: "#1F3B2C" },

  // Reds (all together)
  { name: "RED", hex: "#DC2626" },
  { name: "BURGUNDY", hex: "#7F1D1D" },
  // Neutrals
  { name: "BLACK", hex: "#111827" },
  { name: "WHITE", hex: "#FFFFFF" },
  { name: "SAND", hex: "#EADBC8" },
  { name: "OATMEAL", hex: "#E7DCC8" },

  // Greys (all together)
  { name: "CHARCOAL", hex: "#374151" },
  { name: "GUN METAL", hex: "#374151" },
  { name: "HEATHER GREY", hex: "#9CA3AF" },
  { name: "DENIM HEATHER", hex: "#4B5563" },

  // Blues (all together)
  { name: "NAVY", hex: "#0B1F3A" },
  { name: "ROYAL", hex: "#1D4ED8" },
  { name: "LIGHT BLUE", hex: "#60A5FA" },

  // Pinks (together)
  { name: "PINK", hex: "#EC4899" },
  { name: "BABY PINK", hex: "#FBCFE8" },

  // Purple
  { name: "PURPLE", hex: "#7C3AED" },

  // Warm tones
  { name: "YELLOW", hex: "#FACC15" },
  { name: "ORANGE", hex: "#F97316" },

  // Browns (together)
  { name: "CEDAR BROWN", hex: "#6B3F2A" },
  { name: "CHOCLATE", hex: "#4E2A1E" },
]

      },
       {
        id: "p11",
        name: "Fleece Pants",
       family:"Fleece",
        category: "FLEECE PANTS",
        image: p11,
        description: "Soft fleece pants with modern fit and clean finishing—ideal for loungewear programs.",
       colors: [
  // Greens (all together)
  { name: "GREEN", hex: "#16A34A" },
  { name: "GREEN HEATHER", hex: "#6B7F73" },
  { name: "FOREST", hex: "#14532D" },
  { name: "HUNTER GREEN", hex: "#1F3B2C" },

  // Reds (all together)
  { name: "RED", hex: "#DC2626" },
  { name: "BURGUNDY", hex: "#7F1D1D" },
  // Neutrals
  { name: "BLACK", hex: "#111827" },
  { name: "WHITE", hex: "#FFFFFF" },
  { name: "SAND", hex: "#EADBC8" },
  { name: "OATMEAL", hex: "#E7DCC8" },

  // Greys (all together)
  { name: "CHARCOAL", hex: "#374151" },
  { name: "GUN METAL", hex: "#374151" },
  { name: "HEATHER GREY", hex: "#9CA3AF" },
  { name: "DENIM HEATHER", hex: "#4B5563" },

  // Blues (all together)
  { name: "NAVY", hex: "#0B1F3A" },
  { name: "ROYAL", hex: "#1D4ED8" },
  { name: "LIGHT BLUE", hex: "#60A5FA" },

  // Pinks (together)
  { name: "PINK", hex: "#EC4899" },
  { name: "BABY PINK", hex: "#FBCFE8" },

  // Purple
  { name: "PURPLE", hex: "#7C3AED" },

  // Warm tones
  { name: "YELLOW", hex: "#FACC15" },
  { name: "ORANGE", hex: "#F97316" },

  // Browns (together)
  { name: "CEDAR BROWN", hex: "#6B3F2A" },
  { name: "CHOCLATE", hex: "#4E2A1E" },
]

      },
      {
        id: "p12",
        name: "Fleece Cargo Pants",
                family:"Fleece",
        category: "FLEECE CARGO PANTS",
        image: p12,
        description: "Cargo fleece pants with utility pockets and reinforced stress points for repeat orders.",
        colors: [
  // Greens (all together)
  { name: "GREEN", hex: "#16A34A" },
  { name: "GREEN HEATHER", hex: "#6B7F73" },
  { name: "FOREST", hex: "#14532D" },
  { name: "HUNTER GREEN", hex: "#1F3B2C" },

  // Reds (all together)
  { name: "RED", hex: "#DC2626" },
  { name: "BURGUNDY", hex: "#7F1D1D" },
  // Neutrals
  { name: "BLACK", hex: "#111827" },
  { name: "WHITE", hex: "#FFFFFF" },
  { name: "SAND", hex: "#EADBC8" },
  { name: "OATMEAL", hex: "#E7DCC8" },

  // Greys (all together)
  { name: "CHARCOAL", hex: "#374151" },
  { name: "GUN METAL", hex: "#374151" },
  { name: "HEATHER GREY", hex: "#9CA3AF" },
  { name: "DENIM HEATHER", hex: "#4B5563" },

  // Blues (all together)
  { name: "NAVY", hex: "#0B1F3A" },
  { name: "ROYAL", hex: "#1D4ED8" },
  { name: "LIGHT BLUE", hex: "#60A5FA" },

  // Pinks (together)
  { name: "PINK", hex: "#EC4899" },
  { name: "BABY PINK", hex: "#FBCFE8" },

  // Purple
  { name: "PURPLE", hex: "#7C3AED" },

  // Warm tones
  { name: "YELLOW", hex: "#FACC15" },
  { name: "ORANGE", hex: "#F97316" },

  // Browns (together)
  { name: "CEDAR BROWN", hex: "#6B3F2A" },
  { name: "CHOCLATE", hex: "#4E2A1E" },
]

      },
    
      

      {
        id: "p17",
        name: "Polyester T-Shirts",
        family: "Polyester",
        category: "POLYESTER T-SHIRTS",
        image: p17,
        description:
          "Quick-dry polyester tee built for comfort, color consistency, and bulk production.",
        colors: [{ name: "SAFETY ORANGE", hex: "#FF6A00" },
          { name: "BLACK", hex: "#111827" },
                  { name: "SAFETY GREEN", hex: "#39FF14" },
        ],
      },

      {
        id: "p18",
        name: "Polyester Polo",
        family:"Polyester",
        category: "POLYESTER POLO",
        image: p18,
        description:
          "Performance polo engineered for moisture control and durable wear in active environments.",
        colors: [  { name: "BLACK", hex: "#111827" },
                 { name: "SAFETY ORANGE", hex: "#FF6A00" },
                 { name: "SAFETY GREEN", hex: "#39FF14" },],
      },

      {
        id: "p19",
        name: "Polyester Hoodie",
        family: "Polyester",
        category: "POLYESTER HOODIE",
        image: p19,
        description:
          "Durable polyester hoodie with clean stitching and export-ready finishing.",
        colors: [  { name: "BLACK", hex: "#111827" },
                   { name: "SAFETY ORANGE", hex: "#FF6A00" },
                  { name: "SAFETY GREEN", hex: "#39FF14" },],
      },
       {
        id: "p13",
        name: "Tank Top",
        category: "TANK TOPS",
                family:"Fleece",
        image: p13,
        description: "Lightweight tank for warm climates and active programs—easy to customize for branding.",
        colors: [
          { name: "White", hex: "#ffffff" },
          { name: "Black", hex: "#111827" },

        ],
      },

    ],
    
    []
  );

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();

    return products.filter((p) => {
      const matchesFamily = cat === "All" ? true : p.family === cat;

      const matchesQuery =
        !query ||
        p.name.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        (p.family || "").toLowerCase().includes(query) ||
        (p.category || "").toLowerCase().includes(query);

      return matchesFamily && matchesQuery;
    });
  }, [products, q, cat]);

  const openInquiry = (p) => {
    setSelected(p);
    setModalOpen(true);
  };

  return (
    <div>
      {/* HERO */}
      <section className="bg-ink-900">
        <div className="container-app py-14 text-center">
          <div className="inline-flex items-center font-mont gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white/80 mt-3">
            Products
          </div>
          <h1 className="mt-5 text-4xl font-playfair font-black tracking-tight text-white sm:text-5xl">
            Product Gallery
          </h1>
        </div>
        <div className="h-14 bg-gradient-to-b from-white/0 to-white" />
      </section>

      {/* FILTERS (pills left, search right) */}
      <section className="bg-white mt-7">
        <div className="container-app py-10 font-mont font-bold">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex font-playfair font-semibold flex-wrap items-center gap-2">
              {families.map((c) => (
                <Pill key={c} active={cat === c} onClick={() => setCat(c)}>
                  {c}
                </Pill>
              ))}
            </div>

            <div className="relative w-full max-w-md lg:max-w-sm">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-400"
                size={18}
              />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search products…"
                className="w-full rounded-2xl border border-ink-900/10 bg-white py-3 pl-10 pr-4 text-sm text-ink-900 outline-none focus:border-brand-300 focus:ring-4 focus:ring-brand-100"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS GRID */}
      <section className="bg-white mt-10">
        <div className="container-app pb-14 font-mont">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => (
              <ProductCard key={p.id} p={p} onInquire={openInquiry} />
            ))}
          </div>

          {filtered.length === 0 ? (
            <div className="mt-8  font-semibold rounded-2xl border border-ink-900/10 bg-ink-50 p-6 text-sm text-ink-700 font-playfair">
              No products match your search. Try clearing filters.
            </div>
          ) : null}
        </div>
      </section>

      {/* MODAL */}
      <InquiryModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        productName={selected?.name || "Product"}
      />
    </div>
  );
}
