// // chatbotKnowledge.js

// export const chatbotKnowledge = [

//   // ═══════════════════════════════════════════════════════════
//   // GREETINGS & SMALL TALK
//   // ═══════════════════════════════════════════════════════════
//   {
//     keywords: ["hi", "hello", "hey", "heyy", "helo", "hii", "hiii", "yo", "sup", "what's up", "whats up"],
//     answer: "Hello 👋 Welcome to Jubilee Apparel! I'm here to help with product inquiries, OEM programs, sampling, pricing, and more. What can I help you with today?"
//   },
//   {
//     keywords: ["good morning", "morning"],
//     answer: "Good morning! 🌤️ Welcome to Jubilee Apparel. How can I assist you today?"
//   },
//   {
//     keywords: ["good afternoon", "afternoon"],
//     answer: "Good afternoon! ☀️ Welcome to Jubilee Apparel. Feel free to ask about our products, capabilities, or programs."
//   },
//   {
//     keywords: ["good evening", "evening", "good night", "goodnight"],
//     answer: "Good evening! 🌙 Welcome to Jubilee Apparel. How can I help you today?"
//   },
//   {
//     keywords: ["how are you", "how r you", "how are u", "you ok", "you good"],
//     answer: "I'm doing great, thanks for asking! 😊 I'm here and ready to help with any questions about Jubilee Apparel. What would you like to know?"
//   },
//   {
//     keywords: ["thank you", "thanks", "thankyou", "thank u", "thx", "ty", "appreciated", "cheers"],
//     answer: "You're very welcome! 😊 If you have any more questions about our products or services, feel free to ask anytime."
//   },
//   {
//     keywords: ["bye", "goodbye", "see you", "later", "cya", "take care", "talk later"],
//     answer: "Goodbye! 👋 Thank you for visiting Jubilee Apparel. Feel free to reach out anytime at info@jubilee-apparel.com. Have a great day!"
//   },
//   {
//     keywords: ["who are you", "what are you", "are you a bot", "are you human", "are you ai", "are you robot", "chatbot"],
//     answer: "I'm the Jubilee Apparel virtual assistant 🤖 — here to answer your questions about our manufacturing capabilities, products, OEM programs, and export services. For formal inquiries, please use the Contact page."
//   },
//   {
//     keywords: ["help", "assist", "support", "guide", "what can you do", "what do you know"],
//     answer: "I can help you with: 📦 Products & garment types | 🏭 Factory capabilities & capacity | 🧵 Fabrics, GSM & finishing | 🎨 Printing & embroidery | 📋 Sampling & tech packs | 💰 Pricing & MOQ | 🚢 Shipping & export | 🤝 OEM & private label. Just ask anything!"
//   },

//   // ═══════════════════════════════════════════════════════════
//   // COMPANY — WHO, WHAT, WHERE, WHEN, WHY
//   // ═══════════════════════════════════════════════════════════
//   {
//     keywords: ["who are jubilee", "about jubilee", "about the company", "tell me about you", "what is jubilee", "jubilee apparel", "company overview", "overview"],
//     answer: "Jubilee Apparel Private Limited is a leading export-oriented manufacturer of knitted ready-made garments based in Karachi, Pakistan. Established in the early 1990s, we've spent over three decades building a reputation for precision, quality, and reliable delivery — serving global buyers across the USA, Canada, Europe, and the UK."
//   },
//   {
//     keywords: ["when established", "founded", "since when", "how old", "history", "since", "1990", "years in business", "how many years"],
//     answer: "Jubilee Apparel was established in the early 1990s — that's over 30 years of continuous garment manufacturing experience. From our early days as a small-scale textile operation, we've grown into a full-scale export manufacturer with integrated knitting, dyeing, cutting, stitching, and finishing under one roof."
//   },
//   {
//     keywords: ["where are you", "location", "address", "karachi", "pakistan", "epz", "export processing zone", "where located", "based in", "city"],
//     answer: "📍 We're located at: Plot No 2 & 3, Sector A-IV, Karachi Export Processing Zone (KEPZ), 75150 — Karachi, Pakistan. Operating from the EPZ supports efficient export logistics, duty benefits, and documentation handling for international shipments."
//   },
//   {
//     keywords: ["contact", "email", "phone", "reach", "get in touch", "inquiry", "contact us", "reach out", "how to contact"],
//     answer: "📧 Email us at: info@jubilee-apparel.com\n📍 Address: Plot No 2 & 3, Sector A-IV, KEPZ, Karachi, Pakistan\n\nFor a formal inquiry including your product details, quantities, and target dates, please use our Contact page: [[CONTACT_LINK]]"
//   },
//   {
//     keywords: ["clients", "customers", "buyers", "who do you work with", "who buys from you", "market", "usa", "america", "canada", "europe", "uk"],
//     answer: "Approximately 85% of our clients are based in the USA 🇺🇸, with the remainder in Canada 🇨🇦, Europe 🇪🇺, and the UK 🇬🇧. We work with international sourcing teams, retail brands, wholesalers, and institutional buyers on OEM and private-label programs."
//   },
//   {
//     keywords: ["why choose", "why jubilee", "what makes you different", "why should i choose you", "what is your advantage", "competitive advantage", "unique", "best manufacturer"],
//     answer: "Here's why global buyers choose Jubilee Apparel:\n✅ 30+ years of manufacturing experience\n✅ End-to-end production under one roof (knitting → export packing)\n✅ 25,000+ garments/day combined capacity\n✅ OEM & private-label expertise\n✅ Export-ready finishing and documentation\n✅ EPZ-based for efficient international logistics\n✅ Trusted by buyers in USA, Canada, Europe & UK"
//   },
//   {
//     keywords: ["mission", "vision", "values", "goal", "what do you stand for"],
//     answer: "Our mission is to deliver precision-manufactured garments with consistent quality, on-time delivery, and full support for global sourcing programs — combining traditional craftsmanship with modern production techniques."
//   },

//   // ═══════════════════════════════════════════════════════════
//   // FACTORY & CAPACITY
//   // ═══════════════════════════════════════════════════════════
//   {
//     keywords: ["factory", "facilities", "plant", "units", "manufacturing unit", "production site", "how big", "size of factory"],
//     answer: "Jubilee Apparel operates multiple integrated manufacturing units under one operational framework — covering knitting, dyeing & washing, cutting, stitching, finishing, printing, and embroidery. All units are managed together to ensure consistent quality and output."
//   },
//   {
//     keywords: ["capacity", "how much can you produce", "production capacity", "how many garments", "daily output", "per day"],
//     answer: "Our combined production capacity is approximately 25,000+ garments per day across knits and wovens (program-dependent). Breakdown:\n🧶 Knitting: 15,000 kg/day\n✂️ Cutting: 18,000 pcs/day (Bierrebi) + 12,000 pcs/day (manual)\n🪡 Stitching: 400 machines across 2 facilities"
//   },
//   {
//     keywords: ["knitting", "knitting machine", "knitting capacity", "how many machines knitting"],
//     answer: "We operate 55 modern knitting machines with a capacity of over 15,000 kg/day of knitted fabric — covering our entire fabric requirements in-house. The knitting facility handles both internal programs and commercial processing."
//   },
//   {
//     keywords: ["dyeing", "washing", "fabric dyeing", "dye", "color fabric", "processing", "finishing house"],
//     answer: "We have a joint venture with a large knitwear dyeing & finishing house capable of processing up to 15,000 kg/day of knitted fabric in both tubular and open-width forms. This covers all of Jubilee's dyeing and finishing needs plus commercial processing."
//   },
//   {
//     keywords: ["cutting", "cutting capacity", "bierrebi", "cutting machine", "fabric cutting"],
//     answer: "Jubilee is one of the few manufacturers in the region using Bierrebi's (Italy) state-of-the-art tubular cutting technology:\n✂️ Bierrebi automated line: 18,000 garments/day\n✂️ Manual cutting: 12,000 garments/day\nTotal: ~30,000 cut pieces/day — with high precision and superior fabric utilization."
//   },
//   {
//     keywords: ["stitching", "sewing", "sewing machine", "stitching machine", "how many machines", "juki", "yamato", "siruba", "mitsubishi"],
//     answer: "Our knit stitching units operate 400 machines across two manufacturing facilities. Equipment includes Juki, Mitsubishi, Yamato, and Siruba — specialized machines with auto-trimming capabilities for clean finishing and high throughput, supported by inline QC and end-line audit."
//   },

//   // ═══════════════════════════════════════════════════════════
//   // PRODUCTS — FULL RANGE
//   // ═══════════════════════════════════════════════════════════
//   {
//     keywords: ["what do you make", "products", "garments", "what do you manufacture", "what do you produce", "product range", "product list", "catalogue", "catalog"],
//     answer: "We manufacture a full range of knit and woven garments:\n👕 T-shirts & Crew Necks\n👕 Polo Shirts\n🧥 Hoodies (Pullover, Zipper, Sherpa)\n🧥 Sweatshirts\n👖 Fleece Pants & Joggers\n👖 Cargo Pants & Woven Trousers\n🏥 Medical Scrubs\n🦺 Safety / Hi-Vis Wear\n😴 Sleepwear & Loungewear\n🎽 Performance & Activewear\nPlus custom OEM programs for any category."
//   },
//   {
//     keywords: ["t-shirt", "tshirt", "tee shirt", "tee", "basic tee", "crew neck tee", "round neck"],
//     answer: "We produce T-shirts in a wide range of fits (regular, oversized, fitted), fabric compositions (100% cotton, poly-cotton blends, performance polyester), and GSM options. Programs can include custom trims, neck labels, care labels, and export-ready packing."
//   },
//   {
//     keywords: ["polo", "polo shirt", "polo tee", "collar shirt", "pique polo", "uniform polo"],
//     answer: "We manufacture polo shirts with structured collars, plackets, and clean stitching — commonly produced for uniforms, corporate wear, and retail basics. Available in multiple fabric and weight options with customizable trims."
//   },
//   {
//     keywords: ["hoodie", "hooded sweatshirt", "pullover hoodie", "zip hoodie", "zipper hoodie", "sherpa hoodie", "fleece hoodie"],
//     answer: "Our hoodie range includes:\n• Pullover hoodies\n• Full-zip hoodies\n• Half-zip hoodies\n• Sherpa-lined hoodies\n• Fleece and polyester hoodies\nAll built for bulk OEM export programs with custom branding, labeling, and finishing options."
//   },
//   {
//     keywords: ["sweatshirt", "crewneck sweatshirt", "crew sweat", "sweater"],
//     answer: "We manufacture crew neck and custom sweatshirts in fleece, cotton blend, and performance fabrics — suitable for retail, workwear, and branded programs."
//   },
//   {
//     keywords: ["joggers", "jogger pants", "sweatpants", "fleece pants", "track pants", "lounge pants"],
//     answer: "Our bottomwear range includes fleece joggers, sweatpants, lounge pants, and track pants — produced in various fabric weights and fits with custom waistbands, drawcords, pockets, and hem finishes."
//   },
//   {
//     keywords: ["cargo pants", "cargo trousers", "cargo", "work pants", "utility pants"],
//     answer: "We produce cargo pants and utility trousers in woven fabrics with functional pockets, reinforced stitching, and export-standard construction — suitable for workwear and retail programs."
//   },
//   {
//     keywords: ["woven", "woven trousers", "woven pants", "woven shirt", "woven products"],
//     answer: "Our woven program covers trousers, pants, and shirts in various fabric options — built to buyer specifications with export-ready finishing and packaging."
//   },
//   {
//     keywords: ["scrubs", "medical scrubs", "doctor uniform", "nurse uniform", "hospital wear", "healthcare apparel", "surgical scrubs"],
//     answer: "We manufacture medical scrub sets (tops & bottoms) designed for durability, colorfastness, and comfort — suitable for hospitals, clinics, and healthcare institutional buyers. Programs support repeat orders and consistent sizing."
//   },
//   {
//     keywords: ["safety vest", "safety wear", "hi vis", "high visibility", "reflective vest", "reflective wear", "workwear", "hi-vis jacket"],
//     answer: "We produce safety wear and high-visibility garments including reflective vests and workwear jackets — designed for worksite use with functional fabric choices and buyer-specified safety standards."
//   },
//   {
//     keywords: ["sleepwear", "pyjama", "pajama", "nightwear", "loungewear", "sleep set"],
//     answer: "We manufacture sleepwear and loungewear sets in soft knit fabrics — including pajama sets, lounge shorts, sleep tops, and full-length styles. Available for retail and wholesale export programs."
//   },
//   {
//     keywords: ["activewear", "sportswear", "gym wear", "athletic wear", "performance wear", "workout clothes", "yoga", "leggings", "sports bra"],
//     answer: "We produce performance and activewear garments in moisture-wicking and stretch fabrics — suitable for gym, sport, yoga, and athleisure retail programs. Custom sublimation, DTG, and DTF printing also available for activewear."
//   },
//   {
//     keywords: ["uniform", "corporate uniform", "school uniform", "workwear uniform", "staff uniform", "team wear"],
//     answer: "We specialize in uniform manufacturing for corporate, hospitality, healthcare, and institutional clients — including polos, T-shirts, scrubs, safety wear, and custom-branded sets with matching trims and packaging."
//   },
//   {
//     keywords: ["kids", "children", "baby", "infant", "toddler", "kids wear", "kids clothing"],
//     answer: "We can produce garments for children's and infant programs depending on specification and volume requirements. Please share your product details and size range via Contact: [[CONTACT_LINK]]"
//   },

//   // ═══════════════════════════════════════════════════════════
//   // PRINTING & DECORATION
//   // ═══════════════════════════════════════════════════════════
//   {
//     keywords: ["printing", "print", "garment printing", "what printing do you offer", "printing options"],
//     answer: "We offer a comprehensive range of decoration services:\n🖨️ Screen Printing (Oval machine, up to 10,000 pcs/day)\n🖨️ DTG Printing (2 machines, 2,500 pcs/day)\n🖨️ DTF Printing (2 machines, 3,500 pcs/day)\n🌟 DTF Fluorescent Printing (2 machines, 3,500 pcs/day)\n✨ UV DTF Printing (1 machine, 12,000 patches/day)\n🪡 Embroidery (6 machines)"
//   },
//   {
//     keywords: ["screen print", "screen printing", "oval screen", "multi color print"],
//     answer: "Our oval screen printing machine handles up to 10,000 pieces/day with multi-color capability — supported from sampling through bulk production. Quality-checked before packing with consistent shade and wash performance."
//   },
//   {
//     keywords: ["dtg", "dtg print", "direct to garment", "digital print on garment", "digital garment printing"],
//     answer: "We operate 2 DTG (Direct-to-Garment) printing machines with a capacity of 2,500 pcs/day. DTG delivers high-resolution artwork and smooth hand-feel — ideal for quick concept approvals, sampling, and smaller production runs."
//   },
//   {
//     keywords: ["dtf", "dtf print", "direct to film", "transfer print", "film transfer"],
//     answer: "Our DTF (Direct-to-Film) printing setup includes 2 machines with 3,500 pcs/day capacity — offering vibrant graphics with reliable durability across a wide range of fabrics, blends, and product categories."
//   },
//   {
//     keywords: ["dtf fluorescent", "fluorescent print", "neon print", "glow print", "fluroscent"],
//     answer: "We offer Fluorescent DTF printing (2 machines, 3,500 pcs/day) for premium presentation — clean vivid transfers suitable for trims, packaging elements, labels, and special program applications."
//   },
//   {
//     keywords: ["uv dtf", "uv print", "uv transfer", "uv patches", "patch printing"],
//     answer: "Our UV DTF machine produces up to 12,000 patches/day — ideal for premium branding on trims, packaging elements, labels, and special product applications requiring a high-end finish."
//   },
//   {
//     keywords: ["embroidery", "embroidered logo", "logo embroidery", "monogram", "stitched logo", "patch", "embroidered patch"],
//     answer: "We operate 6 embroidery machines supporting bulk and sampling programs — including logos, monograms, patches, and decorative stitching. Placement mapping and thread matching support available. All styles with clean finishing and consistent quality."
//   },
//   {
//     keywords: ["sublimation", "sublimation print", "all over print", "aop", "full print"],
//     answer: "For sublimation or all-over print (AOP) programs, please share your fabric composition, artwork, and placement specifications via Contact. Our team will advise based on your program requirements: [[CONTACT_LINK]]"
//   },
//   {
//     keywords: ["heat transfer", "heat press", "vinyl print", "transfer label"],
//     answer: "Heat transfer and vinyl applications can be supported based on program needs. Share your design, placement, and garment type via Contact for technical alignment: [[CONTACT_LINK]]"
//   },
//   {
//     keywords: ["artwork", "design file", "print file", "ai file", "pdf artwork", "vector", "psd"],
//     answer: "Please send artwork files (AI, PDF, or high-resolution formats) with your print placement details and color specifications via Contact: [[CONTACT_LINK]] Our team will review and advise on suitability for the required printing method."
//   },

//   // ═══════════════════════════════════════════════════════════
//   // OEM & PRIVATE LABEL
//   // ═══════════════════════════════════════════════════════════
//   {
//     keywords: ["oem", "oem manufacturing", "original equipment manufacturer", "manufacture for my brand", "make for my brand"],
//     answer: "Yes — OEM manufacturing is one of our core strengths. We support end-to-end programs: from your tech pack and fabric selection through sampling, bulk production, custom labeling, and export-ready packing — all under your brand."
//   },
//   {
//     keywords: ["private label", "white label", "my own brand", "my brand name", "brand label", "own label"],
//     answer: "We fully support private-label manufacturing. This includes: custom woven/printed neck labels, care labels, hangtags, barcode stickers, branded polybags, and buyer-specific packaging — giving your product a retail-ready presentation."
//   },
//   {
//     keywords: ["custom", "customization", "custom order", "custom design", "made to order", "bespoke", "custom made"],
//     answer: "Yes — we handle fully customized programs. Share your tech pack, design references, fabric requirements, and target quantities via Contact: [[CONTACT_LINK]] Our team will guide you from development through delivery."
//   },
//   {
//     keywords: ["labels", "woven label", "neck label", "care label", "size label", "main label"],
//     answer: "We support all label types: woven neck labels, printed care labels, size labels, main labels, and custom trim accessories — all per buyer specifications. Share your label artwork and placement details via Contact."
//   },
//   {
//     keywords: ["hangtag", "hang tag", "swing tag", "price tag", "barcode tag"],
//     answer: "Hangtags, barcode stickers, and price tickets can be incorporated per your program requirements. Share specifications and artwork via Contact: [[CONTACT_LINK]]"
//   },
//   {
//     keywords: ["packaging", "polybag", "carton", "packing", "box", "poly bag", "hanger", "folded", "retail pack"],
//     answer: "We support full export-ready packing including:\n📦 Individual polybags (flat folded / on hanger)\n🏷️ Size stickers & barcode labeling\n📦 Master cartons with carton marks\n📋 Buyer-specific packing instructions\nShare your packing manual or requirements via Contact."
//   },

//   // ═══════════════════════════════════════════════════════════
//   // FABRICS & MATERIALS
//   // ═══════════════════════════════════════════════════════════
//   {
//     keywords: ["fabric", "material", "what fabric", "fabric options", "textile", "cloth", "composition"],
//     answer: "We work with a wide range of fabrics:\n🧶 100% Cotton\n🔀 Poly-Cotton Blends\n💨 100% Polyester\n🧥 Fleece (cotton & poly)\n🏃 Performance/Moisture-wicking fabrics\n🛏️ Interlock & Jersey\n🧵 Pique (for polos)\n📐 Woven fabrics (for trousers/cargo)\nAll sourced to buyer specifications or from our in-house knitting."
//   },
//   {
//     keywords: ["cotton", "100 cotton", "pure cotton", "combed cotton", "carded cotton", "organic cotton"],
//     answer: "We work with various cotton grades including combed ring-spun, carded, and organic cotton — depending on the program requirements and buyer specifications. Please share your fabric standard via Contact."
//   },
//   {
//     keywords: ["polyester", "poly", "100 polyester", "full polyester", "synthetic fabric"],
//     answer: "We work with 100% polyester and poly-blend fabrics for hoodies, activewear, fleece programs, and performance garments — including moisture-wicking and quick-dry constructions."
//   },
//   {
//     keywords: ["blend", "poly cotton", "polycotton", "50 50", "60 40", "cotton blend"],
//     answer: "Poly-cotton blends (50/50, 60/40, 65/35, etc.) are commonly used across our product range — offering a balance of softness, durability, and print performance. Share your required blend ratio via Contact."
//   },
//   {
//     keywords: ["fleece", "fleece fabric", "french terry", "terry fabric", "brushed fleece", "polar fleece"],
//     answer: "We work with various fleece constructions including French Terry, brushed fleece, and polar fleece — used in hoodies, sweatshirts, joggers, and loungewear programs."
//   },
//   {
//     keywords: ["gsm", "fabric weight", "grams per sqm", "how heavy", "oz weight", "160 gsm", "180 gsm", "200 gsm", "220 gsm", "240 gsm", "260 gsm"],
//     answer: "Yes — programs can be developed to specific GSM targets (e.g., 160, 180, 200, 220, 240, 260 GSM). In-house knitting allows us to align fabric weight to your requirements. Share your target GSM and hand-feel preference via Contact."
//   },
//   {
//     keywords: ["stretch", "elastane", "spandex", "lycra", "4 way stretch", "stretchable"],
//     answer: "Elastane/spandex-blended fabrics can be incorporated for programs requiring stretch — commonly used in activewear, fitted garments, and performance products. Share your stretch percentage requirement via Contact."
//   },
//   {
//     keywords: ["sustainable", "eco", "organic", "recycled", "gots", "oeko tex", "green", "sustainability"],
//     answer: "We can work with sustainable fabric options including GOTS-certified organic cotton and recycled fabric blends depending on the program. Please share your sustainability requirements and certifications via Contact: [[CONTACT_LINK]]"
//   },

//   // ═══════════════════════════════════════════════════════════
//   // QUALITY & STANDARDS
//   // ═══════════════════════════════════════════════════════════
//   {
//     keywords: ["quality", "quality control", "qc", "quality check", "quality assurance", "qa"],
//     answer: "Quality control is integrated at every production stage at Jubilee Apparel:\n✅ Fabric inspection (GSM, shrinkage, shade)\n✅ Inline QC during stitching\n✅ End-line audit before finishing\n✅ Final inspection before packing\n✅ Shipment-ready QC sign-off"
//   },
//   {
//     keywords: ["aql", "acceptable quality level", "aql 2.5", "aql inspection", "final inspection"],
//     answer: "We support buyer-specified AQL standards (commonly AQL 2.5 for general defects). If you follow a specific AQL level or have a defect classification list (critical/major/minor), please share it via Contact so we can align our QC process."
//   },
//   {
//     keywords: ["defects", "defective", "reject", "poor quality", "rework", "quality problem"],
//     answer: "We maintain controlled inline and end-line processes to reduce defects and rework. For buyer-specific defect classifications (critical, major, minor), share your QC manual or AQL standard via Contact: [[CONTACT_LINK]]"
//   },
//   {
//     keywords: ["third party inspection", "third party", "buyer inspection", "qc agent", "inline inspection", "pre shipment"],
//     answer: "We can accommodate third-party and buyer-nominated inspections at any production stage — inline, end-line, or pre-shipment. Please advise your inspection preference via Contact."
//   },
//   {
//     keywords: ["certification", "certificate", "iso", "gots", "oeko tex", "compliance", "audit", "social audit", "bsci", "sedex"],
//     answer: "For certification and compliance requirements (ISO, GOTS, OEKO-TEX, BSCI, Sedex audits, etc.), please contact us directly at info@jubilee-apparel.com or via the Contact page so we can provide current documentation."
//   },
//   {
//     keywords: ["wash test", "wash performance", "shrinkage test", "colorfast", "colorfastness", "lab test"],
//     answer: "Quality programs can include wash/shrinkage and colorfastness testing depending on buyer requirements. Share your test protocols, standards (e.g., AATCC, ISO), and pass criteria via Contact: [[CONTACT_LINK]]"
//   },

//   // ═══════════════════════════════════════════════════════════
//   // SAMPLING
//   // ═══════════════════════════════════════════════════════════
//   {
//     keywords: ["sample", "sampling", "samples", "can i get a sample", "how to get sample", "request sample"],
//     answer: "Yes — samples can be arranged based on your program requirements. To proceed, please share:\n📄 Tech pack or design reference\n🧵 Fabric requirement & GSM\n📏 Size range\n📦 Trim / label details\n📅 Target sample date\nSend via Contact: [[CONTACT_LINK]]"
//   },
//   {
//     keywords: ["proto sample", "prototype", "first sample", "concept sample", "development sample"],
//     answer: "Proto/development samples can be arranged to verify your design concept. Please share your tech pack or reference images, fabric requirement, and measurement chart via Contact: [[CONTACT_LINK]]"
//   },
//   {
//     keywords: ["fit sample", "size set", "graded sample", "measurement sample"],
//     answer: "Fit samples and size sets can be produced to verify construction, fit, and measurements before bulk production. Share your spec sheet, size range, and fit expectations via Contact."
//   },
//   {
//     keywords: ["pp sample", "pre production sample", "pre-production", "production sample", "bulk match"],
//     answer: "Pre-production (PP) samples can be submitted for buyer approval before cutting bulk — ensuring fabric, trims, construction, and finish match approved standards. Please advise your PP requirements via Contact."
//   },
//   {
//     keywords: ["lab dip", "color approval", "pantone", "shade band", "color match", "dye approval"],
//     answer: "Lab dip / shade approvals can be included in the production workflow for color-critical programs. Share your Pantone references, color standards, or approved swatch details via Contact: [[CONTACT_LINK]]"
//   },
//   {
//     keywords: ["sample cost", "sample charge", "sample fee", "how much for sample", "free sample"],
//     answer: "Sample costs vary based on complexity, fabric, and trims involved. Please submit your inquiry via Contact and our team will advise on sampling cost and timeline: [[CONTACT_LINK]]"
//   },
//   {
//     keywords: ["sample lead time", "how long for sample", "sample time", "how fast sample"],
//     answer: "Sample lead times depend on fabric availability, design complexity, and decoration requirements. Typical development samples take 2–3 weeks. Please share your program details for an accurate timeline via Contact: [[CONTACT_LINK]]"
//   },

//   // ═══════════════════════════════════════════════════════════
//   // TECH PACK & SPECIFICATIONS
//   // ═══════════════════════════════════════════════════════════
//   {
//     keywords: ["tech pack", "technical pack", "spec sheet", "specification", "garment spec", "design specification"],
//     answer: "Yes — please share your tech pack and spec sheet through the Contact page. We'll review construction details, measurements, BOM (Bill of Materials), and production notes to align our team to your requirements: [[CONTACT_LINK]]"
//   },
//   {
//     keywords: ["bom", "bill of materials", "material list", "trim sheet"],
//     answer: "A BOM (Bill of Materials) helps us source and align all fabric, trims, labels, and accessories to your specification. Please share your BOM along with your tech pack via Contact: [[CONTACT_LINK]]"
//   },
//   {
//     keywords: ["measurement", "measurements", "size chart", "size spec", "grading", "grade rule"],
//     answer: "Please provide your measurement specification and grade rules in your tech pack. Our pattern and production teams will work to your specs. Share via Contact: [[CONTACT_LINK]]"
//   },
//   {
//     keywords: ["do you do design", "design service", "pattern making", "pattern", "toile"],
//     answer: "We can support design development from reference images or mood boards — including pattern making and proto sampling — depending on program requirements. Share your references via Contact: [[CONTACT_LINK]]"
//   },

//   // ═══════════════════════════════════════════════════════════
//   // MOQ & ORDERING
//   // ═══════════════════════════════════════════════════════════
//   {
//     keywords: ["moq", "minimum order", "minimum quantity", "how many minimum", "small order", "low moq"],
//     answer: "MOQ depends on product type, fabric, customization level, and decoration requirements. Please submit an inquiry via Contact with your product details and our team will advise on MOQ for your specific program: [[CONTACT_LINK]]"
//   },
//   {
//     keywords: ["can i order small", "small quantity", "trial order", "test order", "low quantity"],
//     answer: "Trial and test orders can be discussed depending on the product and program setup. Please share your details via Contact and our team will advise: [[CONTACT_LINK]]"
//   },
//   {
//     keywords: ["bulk order", "large order", "mass production", "volume order", "big order"],
//     answer: "We specialize in bulk production with consistent specs and controlled processes — ideal for seasonal programs and long-term buyers. Please share your quantities, product list, and target ship dates via Contact: [[CONTACT_LINK]]"
//   },
//   {
//     keywords: ["reorder", "repeat order", "replenishment", "restocking", "re-order"],
//     answer: "We maintain production records and specifications for easy repeat and replenishment orders — supporting long-term buyer programs with consistent quality and turnaround. Contact us to set up your repeat order: [[CONTACT_LINK]]"
//   },
//   {
//     keywords: ["order process", "how to order", "how to place order", "steps to order", "process"],
//     answer: "Here's how to get started:\n1️⃣ Share your tech pack/design + fabric requirement via Contact\n2️⃣ Our team reviews and sends a quotation\n3️⃣ Sampling arranged and approved\n4️⃣ Bulk production order confirmed\n5️⃣ Production with QC milestones\n6️⃣ Final inspection + export packing\n7️⃣ Shipment & documentation\n\nStart here: [[CONTACT_LINK]]"
//   },

//   // ═══════════════════════════════════════════════════════════
//   // PRICING & QUOTATION
//   // ═══════════════════════════════════════════════════════════
//   {
//     keywords: ["price", "pricing", "cost", "how much", "rate", "quotation", "quote", "price list", "price per piece", "unit cost"],
//     answer: "Pricing depends on design complexity, fabric type, GSM, quantity, decoration, and delivery requirements. To receive a formal quotation, please share your product details via Contact: [[CONTACT_LINK]]\n📧 Or email: info@jubilee-apparel.com"
//   },
//   {
//     keywords: ["cheap", "cheapest", "low cost", "affordable", "budget", "best price", "competitive price"],
//     answer: "We offer competitive pricing for quality OEM production. Costs depend on your specifications and quantities. To get the best pricing, share your program details via Contact: [[CONTACT_LINK]]"
//   },
//   {
//     keywords: ["payment", "payment terms", "how to pay", "advance", "lc", "letter of credit", "tt", "bank transfer"],
//     answer: "Payment terms vary by order size and buyer relationship. Common terms include LC (Letter of Credit) and TT (Bank Transfer). Please discuss terms directly with our team via Contact: [[CONTACT_LINK]]"
//   },
//   {
//     keywords: ["discount", "bulk discount", "volume discount", "negotiate", "deal"],
//     answer: "Volume pricing and long-term program benefits can be discussed. Please share your program details and quantities via Contact for commercial terms: [[CONTACT_LINK]]"
//   },

//   // ═══════════════════════════════════════════════════════════
//   // LEAD TIME & DELIVERY
//   // ═══════════════════════════════════════════════════════════
//   {
//     keywords: ["lead time", "production time", "how long", "delivery time", "timeline", "when ready", "turnaround"],
//     answer: "Lead times vary based on product, fabric availability, quantity, and decoration requirements. Typical bulk lead times range from 45–75 days from order confirmation. Share your program for an accurate schedule via Contact: [[CONTACT_LINK]]"
//   },
//   {
//     keywords: ["urgent", "rush order", "fast delivery", "express", "asap", "quick turnaround"],
//     answer: "Rush and urgent programs can be discussed based on current production capacity. Please contact us directly at info@jubilee-apparel.com or via the Contact page with your timeline and quantity: [[CONTACT_LINK]]"
//   },
//   {
//     keywords: ["delivery date", "ship date", "when will ship", "eta", "estimated arrival"],
//     answer: "Delivery/ship dates are confirmed at the time of order based on product specs, quantity, and production scheduling. Share your target ship date via Contact so we can plan accordingly: [[CONTACT_LINK]]"
//   },

//   // ═══════════════════════════════════════════════════════════
//   // SHIPPING & EXPORT
//   // ═══════════════════════════════════════════════════════════
//   {
//     keywords: ["shipping", "export", "freight", "international shipping", "how do you ship", "shipment"],
//     answer: "We are an export-oriented manufacturer based in KEPZ, Karachi — fully equipped for international shipments with export documentation, commercial invoices, packing lists, and certificates of origin as required."
//   },
//   {
//     keywords: ["incoterms", "fob", "cif", "exw", "ddp", "cfr", "shipping terms"],
//     answer: "We can work with standard international incoterms including FOB, CIF, EXW, and others depending on buyer preference and logistics setup. Please share your preferred shipping terms via Contact: [[CONTACT_LINK]]"
//   },
//   {
//     keywords: ["air freight", "sea freight", "ocean freight", "by air", "by sea", "container"],
//     answer: "Both air and sea freight options are available depending on your timeline and budget. As an EPZ-based manufacturer, export logistics are streamlined for international shipments."
//   },
//   {
//     keywords: ["customs", "import duty", "clearance", "documentation", "export doc", "certificate of origin"],
//     answer: "We provide full export documentation including commercial invoice, packing list, certificate of origin, and other buyer-required documents. Please share your specific documentation checklist via Contact."
//   },
//   {
//     keywords: ["forwarder", "freight forwarder", "logistics", "3pl", "shipping agent"],
//     answer: "We can coordinate with your nominated freight forwarder or advise on logistics options depending on your program. Share your forwarder contact or logistics preference via Contact: [[CONTACT_LINK]]"
//   },

//   // ═══════════════════════════════════════════════════════════
//   // PARTNERSHIPS & BUSINESS
//   // ═══════════════════════════════════════════════════════════
//   {
//     keywords: ["partnership", "partner", "long term", "collaboration", "work together", "strategic partner"],
//     answer: "We welcome long-term manufacturing partnerships with brands, sourcing companies, wholesalers, and retail buyers. If you're exploring a sourcing relationship, share your product program and target volumes via Contact: [[CONTACT_LINK]]"
//   },
//   {
//     keywords: ["sourcing", "sourcing partner", "garment sourcing", "find manufacturer", "looking for manufacturer"],
//     answer: "You've found the right partner 🤝 Jubilee Apparel is a fully integrated, export-oriented OEM manufacturer with 30+ years of experience serving global buyers. Share your sourcing requirements via Contact: [[CONTACT_LINK]]"
//   },
//   {
//     keywords: ["new buyer", "first time", "new customer", "how to start", "i want to work with you", "interested"],
//     answer: "Great to hear you're interested! 👋 Here's how to get started:\n1️⃣ Share your product list and quantities\n2️⃣ We'll send a capability overview and initial quote\n3️⃣ Sampling arranged if needed\n4️⃣ Full program confirmed\n\nStart here: [[CONTACT_LINK]]"
//   },
//   {
//     keywords: ["visit factory", "factory visit", "can i visit", "tour", "come to factory"],
//     answer: "Factory visits can be arranged for qualified buyers. Please contact us in advance at info@jubilee-apparel.com to coordinate your visit details and program."
//   },

//   // ═══════════════════════════════════════════════════════════
//   // COMMON LAYMAN / CASUAL QUESTIONS
//   // ═══════════════════════════════════════════════════════════
//   {
//     keywords: ["do you have stock", "ready stock", "in stock", "ready made", "off the shelf", "available now"],
//     answer: "We are a manufacturing company — we produce to order rather than holding retail stock. For custom OEM or bulk programs, share your requirements via Contact: [[CONTACT_LINK]]"
//   },
//   {
//     keywords: ["can i buy one piece", "single piece", "retail", "buy one", "individual", "personal order"],
//     answer: "We're a B2B export manufacturer and typically work on bulk production programs. For individual or retail purchases, we'd recommend sourcing from retail outlets. For bulk/brand programs, contact us via: [[CONTACT_LINK]]"
//   },
//   {
//     keywords: ["do you sell in pakistan", "local market", "domestic market", "pakistan market", "sell locally"],
//     answer: "Our primary focus is export manufacturing. For local Pakistan inquiries, please reach us directly at info@jubilee-apparel.com and we'll advise based on current availability."
//   },
//   {
//     keywords: ["are you hiring", "jobs", "career", "vacancy", "recruitment", "work for you"],
//     answer: "For career and recruitment inquiries, please email us directly at info@jubilee-apparel.com with your CV and area of interest."
//   },
//   {
//     keywords: ["social media", "instagram", "facebook", "linkedin", "twitter", "youtube", "follow you"],
//     answer: "For social media and brand updates, please check our website or contact us at info@jubilee-apparel.com. We'd be happy to connect!"
//   },
//   {
//     keywords: ["website", "your website", "official site", "jubilee website", "web page"],
//     answer: "You're already on our website! 🌐 You can explore our Capabilities, Products, and Contact sections. For any specific program inquiry, visit: [[CONTACT_LINK]]"
//   },

//   // ═══════════════════════════════════════════════════════════
//   // GUARDRAILS- 
//   // ═══════════════════════════════════════════════════════════
//   {
//     keywords: ["politics", "political", "religion", "religious", "adult", "illegal", "hack", "crypto", "bitcoin", "drugs", "weapon"],
//     answer: "I'm specifically trained to assist with Jubilee Apparel's manufacturing, products, OEM programs, and export services. For other topics, please use a different source. 😊"
//   },

//   // ═══════════════════════════════════════════════════════════
//   // FALLBACK
//   // ═══════════════════════════════════════════════════════════
//   {
//     keywords: ["*"],
//     answer: "Thanks for your question! 😊 I'm best equipped to help with:\n🧵 Products & garment types\n🏭 Factory capacity & capabilities\n🎨 Printing & embroidery\n📋 Sampling & tech packs\n💰 Pricing & MOQ\n🚢 Export & shipping\n🤝 OEM & private label\n\nFor a formal response from our team: [[CONTACT_LINK]]\n📧 info@jubilee-apparel.com"
//   }

// ];







// chatbotKnowledge.js

// export const chatbotKnowledge = [

//   // ═══════════════════════════════════════════════
//   // SYSTEM FALLBACK (MUST ALWAYS BE LAST MATCH)
//   // ═══════════════════════════════════════════════
//   {
//     keywords: ["*"],
//     answer: {
//       neutral:
//         "Thanks for your question 😊 For detailed assistance, please contact our team via the Contact page.",
//       formal:
//         "We’ll need more details to assist you properly. Please reach out through the Contact page for support.",
//       friendly:
//         "Good question 😊 I’ll get you the right answer — please contact our team so we can guide you properly.",
//     },
//   },

//   // ═══════════════════════════════════════════════
//   // GREETINGS & SMALL TALK (HUMANIZED MULTI-TONE)
//   // ═══════════════════════════════════════════════
//   {
//     keywords: ["hi", "hello", "hey", "hii", "yo", "sup"],
//     answer: {
//       neutral:
//         "Hello 👋 Welcome to Jubilee Apparel. How can I help you today?",
//       friendly:
//         "Hey there 👋 Great to see you! What can I help you with at Jubilee Apparel?",
//       formal:
//         "Good day. Welcome to Jubilee Apparel. How may I assist you?",
//     },
//   },
//   {
//     keywords: ["good morning", "morning"],
//     answer: {
//       neutral: "Good morning 🌤️ How can I assist you today?",
//       friendly: "Good morning 😊 Hope you’re doing great!",
//       formal: "Good morning. How may I assist you today?",
//     },
//   },
//   {
//     keywords: ["good evening", "evening"],
//     answer: {
//       neutral: "Good evening 🌙 How can I help?",
//       friendly: "Good evening 😊 What can I do for you?",
//       formal: "Good evening. How may I assist you?",
//     },
//   },
//   {
//     keywords: ["thanks", "thank you", "thx", "appreciate"],
//     answer: {
//       neutral: "You’re welcome 😊",
//       friendly: "Anytime 😊 happy to help!",
//       formal: "You’re welcome. Glad I could assist.",
//     },
//   },
//   {
//     keywords: ["bye", "goodbye", "see you"],
//     answer: {
//       neutral: "Goodbye 👋 Have a great day!",
//       friendly: "Bye 👋 Come back anytime!",
//       formal: "Goodbye. Thank you for visiting Jubilee Apparel.",
//     },
//   },

//   // ═══════════════════════════════════════════════
//   // COMPANY OVERVIEW (FULL WEBSITE DATA INTEGRATED)
//   // ═══════════════════════════════════════════════
//   {
//     keywords: ["about", "who are you", "company", "jubilee"],
//     answer:
//       "Jubilee Apparel Private Limited is an export-oriented OEM garment manufacturer established in the early 1990s. With 30+ years of experience, we deliver precision-made knitted garments globally with strong reputation in quality, reliability, and on-time delivery.",
//   },
//   {
//     keywords: ["history", "founded", "established", "since"],
//     answer:
//       "Founded in the early 1990s, Jubilee Apparel started as a small textile unit and evolved into a large-scale export manufacturer serving global brands across the USA, Canada, Europe, and the UK.",
//   },
//   {
//     keywords: ["why you", "why jubilee", "advantage", "choose"],
//     answer:
//       "✔ 30+ years experience\n✔ End-to-end manufacturing under one roof\n✔ 20,000+ garments/day capacity\n✔ Export-ready compliance\n✔ Strong global buyer base\n✔ Integrated knitting, dyeing, stitching & finishing",
//   },

//   // ═══════════════════════════════════════════════
//   // LOCATION & CONTACT (CRITICAL ROUTING)
//   // ═══════════════════════════════════════════════
//   {
//     keywords: ["contact", "email", "reach", "phone"],
//     answer:
//       "📧 info@jubilee-apparel.com\n📍 Plot No 2 & 3, Sector A-IV, Karachi Export Processing Zone\n\nFor full assistance, please use the Contact page → [[CONTACT_LINK]]",
//   },
//   {
//     keywords: ["location", "where", "address", "karachi", "pakistan"],
//     answer:
//       "We are based in Karachi Export Processing Zone (KEPZ), Pakistan — a fully export-oriented manufacturing hub.",
//   },

//   // ═══════════════════════════════════════════════
//   // FACTORY & CAPACITY
//   // ═══════════════════════════════════════════════
//   {
//     keywords: ["capacity", "how many", "per day", "production"],
//     answer:
//       "Our combined production capacity is ~20,000 garments/day including knitting, stitching, and finishing operations.",
//   },
//   {
//     keywords: ["knitting"],
//     answer:
//       "We operate 55 knitting machines with a capacity of 15,000 kg/day for consistent fabric supply.",
//   },
//   {
//     keywords: ["dyeing", "washing"],
//     answer:
//       "We process up to 15,000 kg/day through our dyeing & finishing JV setup for uniform color and quality control.",
//   },
//   {
//     keywords: ["cutting"],
//     answer:
//       "We use Bierrebi automated cutting (18,000 pcs/day) plus manual cutting (12,000 pcs/day) for precision production.",
//   },
//   {
//     keywords: ["stitching", "sewing"],
//     answer:
//       "Our stitching units operate 400 machines across multiple facilities with auto-trim and inline QC systems.",
//   },

//   // ═══════════════════════════════════════════════
//   // PRODUCTS (FULL RANGE A–Z)
//   // ═══════════════════════════════════════════════
//   {
//     keywords: ["products", "what do you make", "catalog"],
//     answer:
//       "We manufacture: T-Shirts, Polos, Hoodies, Sweatshirts, Joggers, Cargo Pants, Activewear, Scrubs, Uniforms, Sleepwear, and custom OEM apparel programs.",
//   },
//   {
//     keywords: ["t-shirt", "tee"],
//     answer:
//       "We produce cotton, poly-cotton, and performance T-shirts in multiple fits (regular, oversized, slim) with custom branding options.",
//   },
//   {
//     keywords: ["hoodie"],
//     answer:
//       "We manufacture pullover, zip, sherpa, and fleece hoodies with OEM customization and export-grade finishing.",
//   },
//   {
//     keywords: ["sweatshirt"],
//     answer:
//       "We produce fleece sweatshirts designed for durability, comfort, and retail-ready finishing.",
//   },
//   {
//     keywords: ["jogger", "pants"],
//     answer:
//       "We manufacture fleece joggers, cargo pants, and lounge bottoms with custom fits and trims.",
//   },
//   {
//     keywords: ["scrubs", "medical"],
//     answer:
//       "We produce medical scrubs for healthcare institutions with durable fabric and consistent sizing.",
//   },
//   {
//     keywords: ["activewear", "gym"],
//     answer:
//       "We produce performance activewear including moisture-wicking and stretchable fabrics for sports and gym use.",
//   },

//   // ═══════════════════════════════════════════════
//   // PRINTING & EMBELLISHMENT
//   // ═══════════════════════════════════════════════
//   {
//     keywords: ["printing", "print"],
//     answer:
//       "We offer Screen Printing, DTG, DTF, Fluorescent DTF, UV DTF, and Embroidery with industrial-scale capacity.",
//   },
//   {
//     keywords: ["embroidery"],
//     answer:
//       "We operate 6 embroidery machines for logos, patches, and custom branding with high precision finishing.",
//   },
//   {
//     keywords: ["dtg"],
//     answer:
//       "DTG printing delivers high-resolution graphics ideal for sampling and small-batch production.",
//   },
//   {
//     keywords: ["dtf"],
//     answer:
//       "DTF printing offers durable, vibrant designs compatible with multiple fabric types.",
//   },

//   // ═══════════════════════════════════════════════
//   // OEM / PRIVATE LABEL (CORE BUSINESS)
//   // ═══════════════════════════════════════
//   {
//     keywords: ["oem", "private label", "brand"],
//     answer:
//       "We specialize in OEM & private-label manufacturing including custom labels, packaging, trims, and export-ready branding solutions.",
//   },
//   {
//     keywords: ["sample"],
//     answer:
//       "We provide sampling based on tech packs, fabric selection, and design requirements. Please contact us for development.",
//   },
//   {
//     keywords: ["moq"],
//     answer:
//       "MOQ depends on product type and customization level. Please share details for accurate guidance.",
//   },

//   // ═══════════════════════════════════════════════
//   // PRICING & QUOTATION (ALWAYS REDIRECT STYLE)
//   // ═══════════════════════════════════════════════
//   {
//     keywords: ["price", "cost", "quote", "pricing"],
//     answer:
//       "Pricing depends on fabric, design, quantity, and customization. Please use the Contact page for an accurate quotation → [[CONTACT_LINK]]",
//   },

//   // ═══════════════════════════════════════════════
//   // SHIPPING & EXPORT
//   // ═══════════════════════════════════════════════
//   {
//     keywords: ["shipping", "export", "delivery"],
//     answer:
//       "We handle full export documentation and international shipping (FOB, CIF, EXW) for global buyers.",
//   },

//   // ═══════════════════════════════════════════════
//   // QUALITY CONTROL
//   // ═══════════════════════════════════════════════
//   {
//     keywords: ["quality", "qc", "inspection"],
//     answer:
//       "We follow strict QC at every stage: fabric inspection, inline stitching checks, end-line audits, and pre-shipment inspection.",
//   },

//   // ═══════════════════════════════════════════════
//   // FALLBACK CONTACT RULE (IMPORTANT)
//   // ═══════════════════════════════════════════════
//   {
//     keywords: ["unknown"],
//     answer:
//       "For detailed assistance, please contact our team via the Contact page so we can guide you properly.",
//   },
// ];


// // ═══════════════════════════════════════════════
// // SMART MATCHING ENGINE (IMPROVED)
// // ═══════════════════════════════════════════════

// export function findReply(message) {
//   const text = message.toLowerCase();

//   let best = null;
//   let score = 0;

//   for (const item of chatbotKnowledge) {
//     if (item.keywords.includes("*")) continue;

//     let localScore = 0;

//     for (const k of item.keywords) {
//       if (text.includes(k)) localScore++;
//     }

//     if (localScore > score) {
//       score = localScore;
//       best = item;
//     }
//   }

//   const result = best || chatbotKnowledge.find(i => i.keywords.includes("*"));

//   // Tone selector (simple randomization)
//   const tone = ["neutral", "friendly", "formal"][Math.floor(Math.random() * 3)];

//   return typeof result.answer === "string"
//     ? result.answer
//     : result.answer[tone];
// }









export const chatbotKnowledge = [

  // ═══════════════════════════════════════════════
  // SYSTEM FALLBACK (MUST ALWAYS BE LAST MATCH)
  // ═══════════════════════════════════════════════
  {
    keywords: ["*"],
    answer: {
      neutral:
        "Thanks for your question 😊 For detailed assistance, please contact our team via the Contact page.",
      formal:
        "We’ll need more details to assist you properly. Please reach out through the Contact page for support.",
      friendly:
        "Good question 😊 I’ll get you the right answer — please contact our team so we can guide you properly.",
    },
  },

  // ═══════════════════════════════════════════════
  // GREETINGS & SMALL TALK (HUMANIZED MULTI-TONE)
  // ═══════════════════════════════════════════════
  {
    keywords: [
      "hi", "hello", "hey", "hii", "hiii", "yo", "sup", "salam",
      "assalam", "aoa", "helo", "hellow", "hy", "heyy", "hi there",
      "is anyone there", "anyone here", "are you there",
    ],
    answer: {
      neutral:
        "Hello 👋 Welcome to Jubilee Apparel. How can I help you today?",
      friendly:
        "Hey there 👋 Great to see you! What can I help you with at Jubilee Apparel?",
      formal:
        "Good day. Welcome to Jubilee Apparel. How may I assist you?",
    },
  },
  {
    keywords: ["good morning", "morning", "gm"],
    answer: {
      neutral: "Good morning 🌤️ How can I assist you today?",
      friendly: "Good morning 😊 Hope you’re doing great!",
      formal: "Good morning. How may I assist you today?",
    },
  },
  {
    keywords: ["good evening", "evening", "good afternoon", "afternoon"],
    answer: {
      neutral: "Good evening 🌙 How can I help?",
      friendly: "Good evening 😊 What can I do for you?",
      formal: "Good evening. How may I assist you?",
    },
  },
  {
    keywords: [
      "thanks", "thank you", "thx", "tysm", "appreciate", "appreciated",
      "thank u", "ty", "great thanks", "ok thanks", "got it thanks",
    ],
    answer: {
      neutral: "You’re welcome 😊",
      friendly: "Anytime 😊 happy to help!",
      formal: "You’re welcome. Glad I could assist.",
    },
  },
  {
    keywords: [
      "bye", "goodbye", "see you", "see ya", "cya", "later",
      "talk later", "gtg", "ok bye",
    ],
    answer: {
      neutral: "Goodbye 👋 Have a great day!",
      friendly: "Bye 👋 Come back anytime!",
      formal: "Goodbye. Thank you for visiting Jubilee Apparel.",
    },
  },
  {
    keywords: [
      "how are you", "how r u", "how you doing", "whats up", "what's up",
      "how is it going", "how are things",
    ],
    answer: {
      neutral: "I’m doing great, thanks for asking 😊 How can I help you today?",
      friendly: "All good here 😊 What can I help you with?",
      formal: "I am functioning well, thank you. How may I assist you?",
    },
  },

  // ═══════════════════════════════════════════════
  // COMPANY OVERVIEW
  // ═══════════════════════════════════════════════
  {
    keywords: [
      "who are you", "what is jubilee", "company", "jubilee",
      "tell me about", "about you", "about jubilee", "what do you do",
      "what is this company", "introduce yourself", "introduction",
      "company profile", "company info", "who is this", "background",
      "what kind of company", "what type of business", "your business",
      "who runs this", "tell me about your company", "company overview",
    ],
    answer:
      "Jubilee Apparel Private Limited is an export-oriented OEM garment manufacturer established in the early 1990s. With 30+ years of experience, we deliver precision-made knitted garments globally with strong reputation in quality, reliability, and on-time delivery.",
  },
  {
    keywords: [
      "history", "founded", "establish", "established", "since when",
      "how old", "how long have you been", "when did you start",
      "start up", "started", "origin", "began",
    ],
    answer:
      "Founded in the early 1990s, Jubilee Apparel started as a small textile unit and evolved into a large-scale export manufacturer serving global brands across the USA, Canada, Europe, and the UK.",
  },
  {
    keywords: [
      "why you", "why jubilee", "advantage", "choose", "why should i",
      "why choose", "what makes you different", "why pick", "benefits",
      "what makes you special", "competitive advantage", "strengths",
      "why work with you", "why partner", "unique selling point",
    ],
    answer:
      "✔ 30+ years experience\n✔ End-to-end manufacturing under one roof\n✔ 20,000+ garments/day capacity\n✔ Export-ready compliance\n✔ Strong global buyer base\n✔ Integrated knitting, dyeing, stitching & finishing",
  },
  {
    keywords: [
      "team", "staff", "employees", "how many workers", "how many people",
      "workforce", "headcount",
    ],
    answer:
      "Jubilee Apparel employs a large skilled workforce across knitting, dyeing, cutting, stitching, printing, and finishing departments to ensure smooth end-to-end production.",
  },

  // ═══════════════════════════════════════════════
  // LOCATION & CONTACT
  // ═══════════════════════════════════════════════
  {
    keywords: [
      "contact", "email", "reach", "phone", "contact number", "call you",
      "get in touch", "reach you", "talk to someone", "talk to a human",
      "real person", "customer support", "support team", "contact details",
      "contact info", "whatsapp", "how to contact", "speak to someone",
      "need help from a person", "connect with you",
    ],
    answer:
      "📧 info@jubilee-apparel.com\n📍 Plot No 2 & 3, Sector A-IV, Karachi Export Processing Zone\n\nFor full assistance, please use the Contact page → [[CONTACT_LINK]]",
  },
  {
    keywords: [
      "location", "where", "address", "karachi", "pakistan", "based in",
      "where are you located", "where is your factory", "office location",
      "factory location", "where is jubilee", "country", "city",
      "where do you operate", "based",
    ],
    answer:
      "We are based in Karachi Export Processing Zone (KEPZ), Pakistan — a fully export-oriented manufacturing hub.",
  },

  // ═══════════════════════════════════════════════
  // FACTORY & CAPACITY
  // ═══════════════════════════════════════════════
  {
    keywords: [
      "capacity", "how many", "per day", "production", "daily capacity",
      "output", "how much can you produce", "production volume",
      "how many pieces per day", "how many garments", "monthly capacity",
      "total capacity", "max capacity", "production capability",
    ],
    answer:
      "Our combined production capacity is ~20,000 garments/day including knitting, stitching, and finishing operations.",
  },
  {
    keywords: [
      "knitting", "knit", "knitting machines", "fabric machines",
      "knit fabric", "how do you make fabric",
    ],
    answer:
      "We operate 55 knitting machines with a capacity of 15,000 kg/day for consistent fabric supply.",
  },
  {
    keywords: [
      "dyeing", "washing", "dye", "color", "colour", "dyeing process",
      "fabric color", "garment wash", "color matching", "colour matching",
    ],
    answer:
      "We process up to 15,000 kg/day through our dyeing & finishing JV setup for uniform color and quality control.",
  },
  {
    keywords: [
      "cutting", "fabric cutting", "cutting machine", "bierrebi",
      "automated cutting", "manual cutting",
    ],
    answer:
      "We use Bierrebi automated cutting (18,000 pcs/day) plus manual cutting (12,000 pcs/day) for precision production.",
  },
  {
    keywords: [
      "stitching", "sewing", "sew", "stitch", "sewing machines",
      "stitching units", "sewing capacity", "sewing lines",
    ],
    answer:
      "Our stitching units operate 400 machines across multiple facilities with auto-trim and inline QC systems.",
  },
  {
    keywords: [
      "factory", "facility", "facilities", "factory size", "plant",
      "manufacturing unit", "setup", "infrastructure", "machines",
      "equipment", "how big is your factory",
    ],
    answer:
      "Jubilee Apparel operates integrated facilities covering knitting, dyeing, cutting, stitching, printing, and finishing — all under one roof for full production control.",
  },

  // ═══════════════════════════════════════════════
  // PRODUCTS (FULL RANGE A–Z)
  // ═══════════════════════════════════════════════
  {
    keywords: [
      "products", "what do you make", "catalog", "catalogue",
      "what do you manufacture", "what products", "what do you sell",
      "what do you produce", "what items", "product range",
      "product list", "what kind of clothes", "what kind of garments",
      "what clothes do you make", "what can you make", "what can you produce",
      "garments you make", "garment types", "what you people got",
      "what you got", "what do you have", "what u have", "what u got",
      "what is available", "show me products", "product catalog",
      "items you sell", "things you make", "what stuff do you make",
      "range of products", "all products", "full range", "product types",
      "what categories", "categories of products", "clothing types",
      "apparel range", "what apparel", "merchandise", "services",
      "what services", "services you provide", "services you offer",
      "what services do you provide", "what services do you offer",
      "what do you offer", "services available", "what kind of services",
    ],
    answer:
      "We manufacture: T-Shirts, Polos, Hoodies, Sweatshirts, Joggers, Cargo Pants, Activewear, Scrubs, Uniforms, Sleepwear, and custom OEM apparel programs.",
  },
  {
    keywords: [
      "t-shirt", "tshirt", "tee", "t shirt", "tees", "t-shirts",
      "cotton shirt", "round neck shirt", "basic tee",
    ],
    answer:
      "We produce cotton, poly-cotton, and performance T-shirts in multiple fits (regular, oversized, slim) with custom branding options.",
  },
  {
    keywords: [
      "polo", "polo shirt", "polos", "collar shirt", "golf shirt",
    ],
    answer:
      "We manufacture polo shirts in cotton, pique, and performance fabrics with custom collars, placket styles, and branding options.",
  },
  {
    keywords: [
      "hoodie", "hoodies", "hooded jacket", "pullover hoodie",
      "zip hoodie", "sherpa hoodie",
    ],
    answer:
      "We manufacture pullover, zip, sherpa, and fleece hoodies with OEM customization and export-grade finishing.",
  },
  {
    keywords: [
      "sweatshirt", "sweatshirts", "crewneck", "fleece top",
    ],
    answer:
      "We produce fleece sweatshirts designed for durability, comfort, and retail-ready finishing.",
  },
  {
    keywords: [
      "jogger", "joggers", "pants", "trousers", "cargo", "cargo pants",
      "sweatpants", "lounge pants", "track pants",
    ],
    answer:
      "We manufacture fleece joggers, cargo pants, and lounge bottoms with custom fits and trims.",
  },
  {
    keywords: [
      "scrubs", "medical", "medical wear", "hospital uniform",
      "nurse uniform", "healthcare clothing", "medical scrubs",
    ],
    answer:
      "We produce medical scrubs for healthcare institutions with durable fabric and consistent sizing.",
  },
  {
    keywords: [
      "activewear", "gym", "gym wear", "sportswear", "sports clothes",
      "workout clothes", "training wear", "fitness wear", "athletic wear",
      "performance wear",
    ],
    answer:
      "We produce performance activewear including moisture-wicking and stretchable fabrics for sports and gym use.",
  },
  {
    keywords: [
      "uniform", "uniforms", "workwear", "staff uniform", "school uniform",
      "corporate uniform", "company uniform",
    ],
    answer:
      "We manufacture corporate, staff, and institutional uniforms tailored to your sizing, fabric, and branding requirements.",
  },
  {
    keywords: [
      "sleepwear", "pajamas", "pyjamas", "nightwear", "loungewear",
    ],
    answer:
      "We produce comfortable sleepwear and loungewear sets in soft cotton and fleece fabrics for retail and OEM programs.",
  },

  // ═══════════════════════════════════════════════
  // PRINTING & EMBELLISHMENT
  // ═══════════════════════════════════════════════
  {
    keywords: [
      "printing", "print", "prints", "design print", "logo print",
      "custom print", "printing options", "printing methods",
    ],
    answer:
      "We offer Screen Printing, DTG, DTF, Fluorescent DTF, UV DTF, and Embroidery with industrial-scale capacity.",
  },
  {
    keywords: [
      "embroidery", "embroidered", "logo stitching", "embroidered logo",
    ],
    answer:
      "We operate 6 embroidery machines for logos, patches, and custom branding with high precision finishing.",
  },
  {
    keywords: ["dtg", "direct to garment"],
    answer:
      "DTG printing delivers high-resolution graphics ideal for sampling and small-batch production.",
  },
  {
    keywords: ["dtf", "direct to film", "uv dtf", "fluorescent dtf"],
    answer:
      "DTF printing offers durable, vibrant designs compatible with multiple fabric types.",
  },
  {
    keywords: [
      "screen print", "screen printing", "silk screen",
    ],
    answer:
      "Screen printing is ideal for bulk orders with bold, long-lasting designs on cotton and blended fabrics.",
  },

  // ═══════════════════════════════════════════════
  // OEM / PRIVATE LABEL
  // ═══════════════════════════════════════════════
  {
    keywords: [
      "oem", "private label", "brand", "white label", "custom brand",
      "make my own brand", "manufacture for my brand", "branding service",
      "own label", "custom label",
    ],
    answer:
      "We specialize in OEM & private-label manufacturing including custom labels, packaging, trims, and export-ready branding solutions.",
  },
  {
    keywords: [
      "sample", "samples", "sampling", "can i get a sample",
      "sample order", "tech pack", "test order", "prototype",
    ],
    answer:
      "We provide sampling based on tech packs, fabric selection, and design requirements. Please contact us for development.",
  },
  {
    keywords: [
      "moq", "minimum order", "minimum order quantity", "minimum quantity",
      "smallest order", "how many pieces minimum",
    ],
    answer:
      "MOQ depends on product type and customization level. Please share details for accurate guidance.",
  },

  // ═══════════════════════════════════════════════
  // PRICING & QUOTATION
  // ═══════════════════════════════════════════════
  {
    keywords: [
      "price", "prices", "cost", "costs", "quote", "quotation",
      "pricing", "how much", "rate", "rates", "budget", "price list",
      "how expensive", "what is the price", "give me a quote",
      "cost estimate", "pricing details",
    ],
    answer:
      "Pricing depends on fabric, design, quantity, and customization. Please use the Contact page for an accurate quotation → [[CONTACT_LINK]]",
  },

  // ═══════════════════════════════════════════════
  // SHIPPING & EXPORT
  // ═══════════════════════════════════════════════
  {
    keywords: [
      "shipping", "export", "delivery", "ship", "shipment",
      "international shipping", "fob", "cif", "exw", "lead time",
      "delivery time", "how long to deliver", "do you export",
      "do you ship internationally", "worldwide shipping", "global shipping",
      "shipping countries", "which countries do you ship to",
    ],
    answer:
      "We handle full export documentation and international shipping (FOB, CIF, EXW) for global buyers.",
  },

  // ═══════════════════════════════════════════════
  // QUALITY CONTROL
  // ═══════════════════════════════════════════════
  {
    keywords: [
      "quality", "qc", "inspection", "quality control", "quality check",
      "certifications", "certified", "standards", "compliance",
      "is the quality good", "do you check quality",
    ],
    answer:
      "We follow strict QC at every stage: fabric inspection, inline stitching checks, end-line audits, and pre-shipment inspection.",
  },

  // ═══════════════════════════════════════════════
  // FALLBACK CONTACT RULE
  // ═══════════════════════════════════════════════
  {
    keywords: ["unknown", "not sure", "no idea", "don't know"],
    answer:
      "For detailed assistance, please contact our team via the Contact page so we can guide you properly.",
  },
];

// ═══════════════════════════════════════════════
// SMART MATCHING ENGINE (WORD-LEVEL SCORING)
// ═══════════════════════════════════════════════
//
// Why this is better than plain .includes() matching:
// - Old approach: a keyword phrase had to appear *verbatim* inside the
//   user's message. "what products do you got" never matches
//   "what do you make" or "catalog" — zero shared substring, so it falls
//   straight to the fallback answer.
// - New approach: we split both the message and every keyword into words,
//   and score each FAQ entry by how many of its keyword-words actually
//   appear in the user's message (with partial/substring credit too).
//   This means word order, extra filler words ("you got", "do you have"),
//   and minor phrasing differences no longer break matching — the entry
//   with the strongest overlap wins.

const STOP_WORDS = new Set([
  "a", "an", "the", "is", "are", "do", "does", "did", "you", "your",
  "i", "we", "to", "of", "for", "in", "on", "and", "or", "it", "what",
  "how", "can", "could", "would", "have", "has", "my", "me", "please",
  "tell", "about", "get", "got", "with",
]);

function tokenize(str) {
  return str
    .toLowerCase()
    .replace(/[^\w\s]/g, " ")
    .split(/\s+/)
    .filter(Boolean);
}

export function findReply(message) {
  const text = message.toLowerCase().trim();
  const messageTokens = tokenize(text);
  const messageTokenSet = new Set(messageTokens);
  const meaningfulTokens = messageTokens.filter((t) => !STOP_WORDS.has(t));

  let best = null;
  let bestScore = 0;

  for (const item of chatbotKnowledge) {
    if (item.keywords.includes("*")) continue;

    let score = 0;

    for (const keyword of item.keywords) {
      const kw = keyword.toLowerCase();
      const kwTokens = tokenize(kw);

      // Strong signal: every word of a multi-word keyword phrase appears
      // somewhere in the message, as a whole word (not a substring).
      if (kwTokens.length > 1 && kwTokens.every((w) => messageTokenSet.has(w))) {
        score += 3;
        continue;
      }

      // Single-word keyword: only counts as a whole-word match.
      if (kwTokens.length === 1) {
        if (messageTokenSet.has(kwTokens[0])) score += 3;
        continue;
      }

      // Partial credit: count how many *meaningful* words of this
      // keyword phrase appear as whole words in the message.
      const kwWords = kwTokens.filter((w) => !STOP_WORDS.has(w));
      if (kwWords.length === 0) continue;

      let wordHits = 0;
      for (const kwWord of kwWords) {
        if (messageTokenSet.has(kwWord)) {
          wordHits++;
        } else if (kwWord.length >= 5) {
          // Allow substring credit only for longer words (5+ chars),
          // and only against meaningful (non-stop-word) message tokens,
          // to avoid traps like "yo" inside "you"/"your".
          const matched = meaningfulTokens.some(
            (mt) => mt.length >= 5 && (mt.includes(kwWord) || kwWord.includes(mt))
          );
          if (matched) wordHits++;
        }
      }

      if (wordHits > 0) {
        score += wordHits / kwWords.length;
      }
    }

    if (score > bestScore) {
      bestScore = score;
      best = item;
    }
  }

  // Require a solid match signal before trusting "best"; otherwise fall
  // back, so a single coincidental short word can't hijack an unrelated
  // question.
  const result =
    bestScore >= 1
      ? best
      : chatbotKnowledge.find((i) => i.keywords.includes("*"));

  const tone = ["neutral", "friendly", "formal"][Math.floor(Math.random() * 3)];

  return typeof result.answer === "string" ? result.answer : result.answer[tone];
}
