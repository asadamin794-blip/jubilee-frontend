// export const capabilities = [
//   {
//     id: 'knitting',
//     title: 'Knitting',
//     highlight: '50 modern machines • 15,000 kg/day',
//     body:
//       'Jubilee maintains comprehensive knitting capabilities to fulfill its entire fabric needs in-house. The facility operates 50 modern knitting machines with the capacity to produce more than 15,000 kgs/day of knitted fabric.',
//     metrics: [
//       { k: 'Machines', v: '50' },
//       { k: 'Output', v: '15,000 kg/day' },
//       { k: 'Capability', v: 'In-house supply' }
//     ]
//   },
//   {
//     id: 'dyeing',
//     title: 'Fabric Dyeing & Washing',
//     highlight: 'JV processing • 15,000 kg/day',
//     body:
//       'Jubilee has a joint venture with a large knitwear dyeing & finishing house. The operation processes up to 15,000 kgs/day of knitted fabric in both tubular and open-width forms, covering Jubilee’s entire dyeing and finishing needs and also offering commercial processing services.',
//     metrics: [
//       { k: 'JV capacity', v: '15,000 kg/day' },
//       { k: 'Forms', v: 'Tubular & open-width' },
//       { k: 'Services', v: 'Internal + commercial' }
//     ]
//   },
//   {
//     id: 'cutting',
//     title: 'Cutting',
//     highlight: 'Bierrebi (Italy) + manual capacity',
//     body:
//       'Jubilee is among the few manufacturers in the region using Bierrebi’s state-of-the-art tubular cutting technology. This delivers high cutting speed, precision, and superior fabric utilization. Jubilee can cut 18,000 garments/day on the Bierrebi line and another 12,000 garments/day manually.',
//     metrics: [
//       { k: 'Bierrebi line', v: '18,000 garments/day' },
//       { k: 'Manual cutting', v: '12,000 garments/day' },
//       { k: 'Edge', v: 'Precision + utilization' }
//     ]
//   },
//   {
//     id: 'wovens',
//     title: 'Stitching & Finishing — Wovens',
//     highlight: 'Dedicated woven unit • 250 machines',
//     body:
//       'A dedicated unit for woven garments houses 250 stitching machines capable of producing a wide range of woven products including casual trousers, scrubs, and sleepwear. The unit is equipped with machines from well-known global brands to ensure reliable output and quality.',
//     metrics: [
//       { k: 'Machines', v: '250' },
//       { k: 'Products', v: 'Trousers, scrubs, sleepwear' },
//       { k: 'Focus', v: 'Durability + finish' }
//     ]
//   },
//   {
//     id: 'knits',
//     title: 'Stitching & Finishing — Knits',
//     highlight: '400 machines across 2 facilities',
//     body:
//       'The knit units operate 400 stitching machines spread across two manufacturing facilities. Specialized machines with auto-trimming capabilities support clean finishing and high throughput. The equipment lineup includes Juki, Mitsubishi, Yamato, and Siruba.',
//     metrics: [
//       { k: 'Machines', v: '400' },
//       { k: 'Brands', v: 'Juki, Mitsubishi, Yamato, Siruba' },
//       { k: 'Feature', v: 'Auto-trimming' }
//     ]
//   },
//   {
//     id: 'value',
//     title: 'Value-Added Services',
//     highlight: 'Compliance-ready • export-focused',
//     body:
//       'From labeling and tagging to export-ready packing, Jubilee offers value-added services designed to simplify sourcing. Services can be tailored per buyer requirements to support smooth inspections, logistics, and delivery.',
//     metrics: [
//       { k: 'Services', v: 'Labeling, packing, QA' },
//       { k: 'Customization', v: 'Buyer requirements' },
//       { k: 'Outcome', v: 'Faster delivery' }
//     ]
//   }
// ]




// src/data/capabilities.js
import capKnit from '../assets/ref-1.png'
import capDye from '../assets/ref-2.png'
import capCut from '../assets/ref-3.png'
import capWovens from '../assets/ref-1.png'
import capKnits from '../assets/ref-2.png'

export const capabilities = [
  {
    id: 'knitting',
    title: 'Knitting',
    highlight: '55 modern machines • 15,000 kg/day',
    body:
      'Jubilee maintains comprehensive knitting capabilities to fulfill its entire fabric needs in-house. The facility operates 55 modern knitting machines with the capacity to produce more than 15,000 kgs/day of knitted fabric.',
    metrics: [
      { k: 'Machines', v: '55' },
      { k: 'Output', v: '15,000 kg/day' },
      { k: 'Services', v: ' Internal & Commercial' }
    ],
    highlightImage: capKnit
  },
  {
    id: 'dyeing',
    title: 'Fabric Dyeing & Washing',
    highlight: 'JV processing • 15,000 kg/day',
    body:
      'Jubilee has a joint venture with a large knitwear dyeing & finishing house. The operation processes up to 15,000 kgs/day of knitted fabric in both tubular and open-width forms, covering Jubilee’s entire dyeing and finishing needs and also offering commercial processing services.',
    metrics: [
      { k: 'JV capacity', v: '15,000 kg/day' },
      { k: 'Forms', v: 'Tubular & open-width' },
      { k: 'Services', v: 'Internal + commercial' }
    ],
    highlightImage: capDye
  },
  {
    id: 'cutting',
    title: 'Cutting',
    highlight: 'Bierrebi (Italy) + manual capacity',
    body:
      'Jubilee is among the few manufacturers in the region using Bierrebi’s state-of-the-art tubular cutting technology. This delivers high cutting speed, precision, and superior fabric utilization. Jubilee can cut 18,000 garments/day on the Bierrebi line and another 12,000 garments/day manually.',
    metrics: [
      { k: 'Bierrebi line', v: '12,000 garments/day' },
      { k: 'Manual cutting', v: '8,000 garments/day' },
      { k: 'Edge', v: 'Precision + utilization' }
    ],
    highlightImage: capCut
  },

  {
    id: 'knits',
    title: 'Stitching & Finishing — Knits',
    highlight: '400 machines across 2 facilities',
    body:
      'The knit units operate 400 stitching machines spread across two manufacturing facilities. Specialized machines with auto-trimming capabilities support clean finishing and high throughput. The equipment lineup includes Juki, Mitsubishi, Yamato, and Siruba.',
    metrics: [
      { k: 'Machines', v: '400' },
      { k: 'Process', v: 'Inline QC + endline audit' },
      { k: 'Feature', v: 'Auto-trimming' }
    ],
    highlightImage: capKnits
  }
  
]
