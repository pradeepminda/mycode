import { LuBuilding, LuLayoutList, LuLayoutTemplate } from "react-icons/lu";

import product1imageOne_Cat_1_ from "../assets/Images/8563flowguard-img.jpg";
import product1imagetwo_Cat_1_ from "../assets/Images/3332flowguard-img2.jpg";
import product2imageOne_Cat_1_ from "../assets/Images/easyfit-upvc-application-image.jpg";
import product2imagetwo_Cat_1_ from "../assets/Images/easyfit-upvc-range-image.jpg";

import product1imageOne_Cat_2_ from "../assets/Images/ultrafit-application-image.jpg";
import product1imagetwo_Cat_2_ from "../assets/Images/ultrafit-range-image.jpg";

import product1imageOne_Cat_3_ from "../assets/Images/corfit-application-image-2.jpg";
import product1imagetwo_Cat_3_ from "../assets/Images/corfit-pipes-image-1.jpg";
import product2imageOne_Cat_3_ from "../assets/Images/foamfit-application-image.jpg";
import product2imagetwo_Cat_3_ from "../assets/Images/foamfit-gallary-1.jpg";
import product3imageOne_Cat_3_ from "../assets/Images/corfit-ins1.jpg";
import product3imagetwo_Cat_3_ from "../assets/Images/corfit-part3.jpg";

import product1imageOne_Cat_4_ from "../assets/Images/cablefit-application-image.jpg";

import product1imageOne_Cat_5_ from "../assets/Images/greenfit-application-image.jpg";
import product1imagetwo_Cat_5_ from "../assets/Images/greenfit-range-image.jpg";

import product1imageOne_Cat_6_ from "../assets/Images/3340intro-rhs-pic.png";
import product1imagetwo_Cat_6_ from "../assets/Images/Agri-Pipes.jpg";
import product1imageThree_Cat_6_ from "../assets/Images/4219aqua-pipes-pic.png";

import product1imageOne_Cat_7_ from "../assets/Images/cosmic-saffron.png";

export const BLOG_NAVBAR_DATA = [
  {
    id: "01",
    label: "Home",
    icon: LuLayoutTemplate,
    path: "/",
  },
  {
    id: "02",
    label: "Products",
    icon: LuLayoutList,
    path: "/products",
  },
  {
    id: "03",
    label: "About Us",
    icon: LuBuilding,
    path: "/about-us",
  },
];

export const Cat_1_Products = [
  {
    slug: "flowguard-plus-cPVC",
    name: "Flowguard Plus- CPVC Hot and Cold Portable Water Plumbing System",
    description:
      "Invented in 1959, used all over the world, established as a trusted product and now brought to you by Prince Pipes, FlowGuard Plus CPVC plumbing systems are built to last for generations. Designed for a service life of 50 years, these CPVC pipes and fittings can withstand temperatures up to 93ºC and are ideal for hot and cold water applications. NSF certified for Prince Flowguard Plus One-Step Low VOC CPVC Cement Medium Body Yellow only.",
    imgUrl: [product1imageOne_Cat_1_, product1imagetwo_Cat_1_],
    tableData: [],
    productSpec: [
      {
        key: "FEATURES",
        value: [
          "IS 16098 pt 2,CPWD,MES,etc",
          "Suitable for use up to 93°C",
          "High tensile and impact strength",
          "Freedom from toxicity, odours and tastes",
          "Low thermal expansion",
          "UV resistant",
          "25% Higher pressure bearing capacity at higher temperatures",
          "Consistent product quality",
          "Peace of mind assured",
          "Fire retardant",
          "No corrosion, leakage, scaling and pitting",
          "Lowest bacterial growth",
        ],
      },
      {
        key: "APPLICATION",
        value: [
          "Indoor and outdoor Installations of hot & cold water plumbing lines",
          "Solar water heaters",
          "For concealed, downtake & terrace looping",
          "Public utilities & swimming pools",
          "Residential & commercial buildings",
        ],
      },
    ],
  },
  {
    slug: "easyfit-upvc-plumbing-systems",
    name: "Easyfit - UPVC Plumbing Systems",
    description:
      "Easyfit UPVC systems are lead-free, safe, and reliable plumbing solutions for residential and commercial applications. They support water temperatures from 5°C to 60°C and offer quick installation and excellent chemical resistance.",
    imgUrl: [product2imageOne_Cat_1_, product2imagetwo_Cat_1_],
    tableData: [
      {
        size: "15 to 250",
        class: "SCH 40 & SCH 80",
        standard: "ASTM D - 1785",
        endConnection: "Solvent Cement Joint, Threaded Joint",
      },
      {
        size: "15 to 150",
        class: "SCH 40 & SCH 80",
        standard: "ASTM D 2466 / D 2467",
        endConnection: "Solvent Cement Socket Joint, Threads",
      },
    ],
    productSpec: [
      {
        key: "FEATURES",
        value: [
          "Lead-free and safe for drinking water",
          "Supports water temperature from 5°C to 60°C",
          "Self-extinguishing and does not support combustion",
          "Fast and easy installation",
          "Proven performance in diverse applications",
        ],
      },
      {
        key: "APPLICATION",
        value: [
          "Residential & commercial buildings",
          "Swimming pools & public utilities",
          "RO & DM water plants",
          "Concealed piping and terrace looping",
        ],
      },
    ],
  },
];

const Cat_2_Products = [
  {
    slug: "ultrafit-swr-piping-systems",
    name: "Ultrafit – SWR Piping Systems",
    description:
      "Ultrafit SWR pipes offer leak-proof sewerage solutions for residential, commercial, and industrial buildings. These lightweight yet robust pipes come with rubber ring joints to ensure long-term sealing and compatibility with other drainage systems.",
    imgUrl: [product1imageOne_Cat_2_, product1imagetwo_Cat_2_],
    tableData: [
      {
        size: "40 to 200",
        class: "Type A & B",
        standard: "IS 13592",
        endConnection: "Rubber Ring & Solvent Joint",
      },
      {
        size: "75, 90, 110, 160",
        class: "-",
        standard: "IS 14735",
        endConnection: "Rubber Ring Joint",
      },
    ],
    productSpec: [
      {
        key: "FEATURES",
        value: [
          "Lighter but strong construction",
          "Compatible with various drainage products",
          "Cost-effective and durable",
          "Rubber ring seals provide leak-proof performance",
        ],
      },
      {
        key: "APPLICATION",
        value: [
          "Public utilities",
          "Building drainage systems (internal/external)",
          "Ventilation and industrial drainage",
        ],
      },
    ],
  },
];

// const Cat_3_Products = [
// {
//   slug: "flowguard-plus-cpvc-plumbing-systems",
//   name: "Flowguard Plus - CPVC Plumbing Systems",
//   description:
//     "Flowguard Plus CPVC pipes are designed for hot and cold water systems with a service life of 50 years. They offer excellent temperature and pressure resistance, UV stability, and are ideal for concealed and external plumbing applications.",
//   imgUrl: [product5imageOne, product5imageTwo],
//   tableData: [
//     {
//       size: "15 to 50",
//       class: "SDR 11 & 13.5",
//       standard: "IS 15778 / ASTM D 2846",
//       endConnection: "Solvent Cement Joint"
//     },
//     {
//       size: "65 to 250",
//       class: "SCH 40 & SCH 80",
//       standard: "ASTM F 441 / F 439 / F 438",
//       endConnection: "Solvent Cement Joint, Threads"
//     }
//   ],
//   productSpec: [
//     {
//       key: "FEATURES",
//       value: [
//         "Service life of 50 years",
//         "Withstands temperatures up to 93°C",
//         "Unparalleled UV resistance",
//         "Fire retardant with high tensile strength",
//         "25% better pressure bearing capacity"
//       ]
//     },
//     {
//       key: "APPLICATION",
//       value: [
//         "Hot and cold water plumbing systems",
//         "Residential and commercial concealed piping",
//         "Down take and terrace looping"
//       ]
//     }
//   ]
// },
//   {
//     slug: "corfit-underground-double-wall-corrugated-pipes",
//     name: "Corfit - Underground Double Wall Corrugated pipes",
//     description: "Corfit DWC* Pipes and fittings are manufactured using HDPE polymer. These pipes are resistant to various types of gases & chemicals which are generated due to putrefaction of various ingredients flowing in the system.\nCorfit DWC* Pipes are manufactured as per IS 16098 (Part-2), have a smooth internal surface and corrugated external surface. The corrugated external surface provides greater stiffness, withstands soil movements & takes higher loads (static & dynamic), whereas the internal surface helps in smooth flow of sewerage.",
//     imgUrl: [product1imageOne, product1imagetwo],
//     tableData: [],
//     productSpec: [
//       {
//         key: "FEATURES",
//         value: [
//           "Easy to handle, transport and store",
//           "Superior performance than RCC Pipes",
//           "Available in long length of 6 meter so minimum joints ensuring less chances of leakage",
//           "Corrosion & abrasion resistant",
//           "Anti-rodent material",
//         ],
//       },
//       {
//         key: "APPLICATION",
//         value: [
//           "Underground drainage",
//           "Sewerage",
//           "Storm water & surface water drainage",
//           "Industrial liquid waste",
//           "Highway & road drainage",
//         ],
//       },
//     ],
//   },
// ];
const Cat_3_products = [
  {
    slug: "corfit-underground-double-wall-corrugated-pipes",
    name: "Corfit - Underground Double Wall Corrugated Pipes",
    description:
      "Corfit DWC Pipes are manufactured using HDPE polymers and are designed for underground drainage and sewerage systems. These pipes are lighter and more cost-effective than conventional pipes, with high resistance to abrasion and chemicals. Their corrugated exterior handles static and dynamic loads effectively, while the smooth internal bore reduces the risk of blockages.",
    imgUrl: [product1imageOne_Cat_3_, product1imagetwo_Cat_3_],
    tableData: [
      {
        size: "100 to 1000",
        class: "SN4 & SN8",
        standard: "IS 16098-Part2",
        endConnection: "Rubber Ring joint",
      },
    ],
    productSpec: [
      {
        key: "FEATURES",
        value: [
          "Lighter and less expensive than conventionally used pipes",
          "Manufactured using HDPE polymers",
          "Corrugated exterior supports higher loads (static & dynamic)",
          "Easy transportation, lightweight, and operable in wet conditions",
          "Resistant to abrasion and corrosion",
          "Smooth internal bore minimizes blockage risk",
          "Good impact resistance",
          "Anti-rodent material",
          "Also available: Inspection chamber 600mm base & 315mm base",
        ],
      },
      {
        key: "APPLICATION",
        value: [
          "Underground drainage & sewerage systems",
          "Highway & road drainage",
          "Storm water & surface water drainage",
          "Industrial liquid waste",
        ],
      },
    ],
  },
  {
    slug: "foamfit-underground-drainage-piping-systems",
    name: "Foamfit - Underground Drainage Piping Systems",
    description:
      "Foamfit is a multilayered piping system ideal for underground drainage in housing and government development projects. Its structure ensures great load-bearing capacity and firmness, while being lighter than solid wall UPVC pipes.",
    imgUrl: [product2imageOne_Cat_3_, product2imagetwo_Cat_3_],
    tableData: [
      {
        size: "160, 200, 250, 315",
        class: "SN2 (NON-ISI)",
        standard: "IS 16098 Part 1",
        endConnection: "Elastomeric Sealing Ring Joint & Solvent Joint",
      },
      {
        size: "110, 125, 160, 200, 250, 315",
        class: "SN4",
        standard: "IS 16098 Part 1",
        endConnection: "Elastomeric Sealing Ring Joint & Solvent Joint",
      },
      {
        size: "110, 125, 160, 200, 250, 315",
        class: "SN8",
        standard: "IS 16098 Part 1",
        endConnection: "Elastomeric Sealing Ring Joint & Solvent Joint",
      },
    ],
    productSpec: [
      {
        key: "FEATURES",
        value: [
          "Multilayered pipes ideal for housing & government developments",
          "High load bearing capacity with firm core",
          "Lighter than solid wall UPVC pipes",
          "Easy for underground installation",
          "Compatible with other drainage products",
          "Cost-saving, easy to install, and anti-rodent",
        ],
      },
      {
        key: "APPLICATION",
        value: ["Underground drainage systems"],
      },
    ],
  },
  {
    slug: "corfit-manhole-chambers",
    name: "Corfit Manhole Chambers",
    description:
      "Corfit Manhole & Inspection Chambers are made from PE material, offering superior chemical resistance and mechanical strength. Designed with features like socket, spigot, and side inlet connections, these chambers enable efficient, leak-proof underground drainage inspection and maintenance.",
    imgUrl: [product3imageOne_Cat_3_, product3imagetwo_Cat_3_],
    tableData: [
      {
        size: "Base: 1000/750, Riser: 580/315, Cone: 1180/1330/1480",
        class: "-",
        standard: "BS EN 13598-1 & 2",
        endConnection: "Rubber Sealing Ring (Socket, Spigot & Side Inlet)",
      },
    ],
    productSpec: [
      {
        key: "FEATURES",
        value: [
          "Made from PE, resistant to acids, bases & organic compounds",
          "Resists aggressive substances like sulphuric acid & hydrogen sulphide",
          "Steps provided to access the chamber base",
          "Leak-proof rubber sealing ring for all inlet/outlet types",
          "Approx. 2° slope in inspection base ensures gravity flow",
        ],
      },
      {
        key: "APPLICATION",
        value: ["Commercial & municipal sewerage/drainage networks"],
      },
    ],
  },
];

const Cat_4_products = [
  {
    slug: "cablefit-cable-ducting-pipes",
    name: "Cablefit - Cable Ducting Pipes",
    description:
      "Cablefit is designed to provide mechanical protection to electrical, telecom, optical, and signaling cables. Made of HDPE, it features a unique double-walled construction that enhances impact strength and durability.",
    imgUrl: [product1imageOne_Cat_4_],
    tableData: [
      {
        size: "40 to 200",
        class: "-",
        standard: "IS 16205-24",
        endConnection: "Coupler (With or without rubber ring)",
      },
      {
        size: "50 to 90",
        class: "-",
        standard: "-",
        endConnection: "Coupler (With or without rubber ring)",
      },
    ],
    productSpec: [
      {
        key: "FEATURES",
        value: [
          "Technically approved for cost, time & labor savings",
          "Made of HDPE for strength and chemical resistance",
          "Prevents stress cracks",
          "Lightweight and durable double-walled construction",
          "Smooth inner surface for easy duct/cable insertion",
        ],
      },
      {
        key: "APPLICATION",
        value: [
          "Electrical cable protection",
          "Telecom, optical, and signaling cable protection",
          "Flyovers, tunnels, overbridges, and railway signals",
        ],
      },
    ],
  },
];
const Cat_5_Products = [
  {
    slug: "greenfit-ppr-plumbing-systems",
    name: "Greenfit – PP-R Plumbing Systems",
    description:
      "Greenfit PP-R systems are high-performance plumbing pipes designed for extreme temperatures, chemical resistance, and safe drinking water. They feature heat-fusion joints, high flow rate, and resistance to scaling and bacterial growth.",
    imgUrl: [product1imageOne_Cat_5_, product1imagetwo_Cat_5_],
    tableData: [
      {
        size: "20 to 160",
        class: "10, 16 & 20 Kg/cm²",
        standard: "IS: 15801",
        endConnection: "Poly-fusion welding joint",
      },
      {
        size: "180 to 315",
        class: "10 Kg/cm²",
        standard: "DIN: 8077/8078",
        endConnection: "Poly-fusion welding joint",
      },
    ],
    productSpec: [
      {
        key: "FEATURES",
        value: [
          "Proven for temperatures from -20°C to 95°C",
          "No scaling, high pH tolerance",
          "Triple-layer UV resistant pipes for outdoor use",
          "Antimicrobial inner layer ensures safe drinking water",
          "Low friction & energy-efficient flow",
        ],
      },
      {
        key: "APPLICATION",
        value: [
          "HVAC piping systems",
          "Chemical & pharma industries",
          "Residential & commercial hot/cold water",
          "Solar and floor heating systems",
          "Drinking water and food-grade liquids",
        ],
      },
    ],
  },
];

const Cat_6_products = [
  {
    slug: "aquafit-agriculture-piping-systems",
    name: "Aquafit - Agriculture Piping Systems",
    description:
      "Aquafit is a lightweight UPVC piping system ideal for drinking water supply and agricultural irrigation. It features corrosion resistance, smooth bore for higher flow, and easy solvent joint installation.",
    imgUrl: [
      product1imageOne_Cat_6_,
      product1imagetwo_Cat_6_,
      product1imageThree_Cat_6_,
    ],
    tableData: [
      {
        size: "20 to 400",
        class: "2.5, 4, 6, 8, 10 & 12.5 Kg/cm²",
        standard: "IS 4985",
        endConnection: "Solvent Joint",
      },
      {
        size: "20 to 250",
        class: "4, 6, 10 & 16 Kg/cm²",
        standard: "IS 7834",
        endConnection: "Solvent Joint, Threads",
      },
    ],
    productSpec: [
      {
        key: "FEATURES",
        value: [
          "Light weight and easy to transport, store, handle & install",
          "Smooth bore ensures higher flow compared to GI pipes",
          "Quick installation with solvent cement joint",
          "Rustproof and corrosion-resistant material",
          "Cost-effective and long working life",
        ],
      },
      {
        key: "APPLICATION",
        value: [
          "Drinking water supply & distribution",
          "Agricultural water supply & irrigation",
          "Slurry lines, ventilation pipelines, cable ducting",
        ],
      },
    ],
  },
];

const Cat_7_producs = [
  {
    slug: "storefit-water-storage-tanks",
    name: "Storefit – Water Storage Tanks",
    description:
      "Storefit tanks are roto-moulded with triple-layer insulation to ensure water temperature stability and hygiene. Designed for strength, UV resistance, and long-term durability, they are ideal for household, commercial, and industrial water storage needs.",
    imgUrl: [product1imageOne_Cat_7_],
    tableData: [
      {
        size: "300 to 10000 Litres",
        class: "-",
        standard: "IS 12701:1996",
        endConnection: "-",
      },
    ],
    productSpec: [
      {
        key: "FEATURES",
        value: [
          "Roto-moulded with 3-layer insulation for thermal efficiency",
          "Outer white layer offers UV resistance",
          "Inner food-grade polymer layer prevents contamination",
          "Threaded lid and air ventilator for freshness",
          "Extra ribs for durability & strength",
        ],
      },
      {
        key: "APPLICATION",
        value: [
          "Potable water storage",
          "Infrastructure projects",
          "Industrial effluent holding",
          "Irrigation & borewell systems",
        ],
      },
    ],
  },
];

const Cat_8_producs = [];
const Cat_9_producs = [];

// export const categories = [
//   {
//     id: "cat-1",
//     name: "Plumbing",
//     count: 3,
//     products: Cat_1_Products,
//   },
//   {
//     id: "cat-2",
//     name: "Sewerage Drainage Pipes & Fittings",
//     count: 6,
//     products: Cat_2_Products,
//   },
//   { id: "cat-3", name: "Underground", count: 6, products: Cat_3_products },
//   { id: "cat-4", name: "Cable Protection", count: 2, products: Cat_4_products },
//   { id: "cat-5", name: "Industrial", count: 5, products: Cat_5_Products },
//   {
//     id: "cat-6",
//     name: "Agriculture & Borewell",
//     count: 3,
//     products: Cat_6_products,
//   },
//   {
//     id: "cat-7",
//     name: "Water Storage Tanks",
//     count: 1,
//     products: Cat_7_producs,
//   },
//   {
//     id: "cat-8",
//     name: "Surface Drainage System",
//     count: 2,
//     products: Cat_8_producs,
//   },
//   { id: "cat-9", name: "PTMT Tapware", count: 1, products: Cat_9_producs },
// ];

export const Cat_1_Product = [
  {
    slug: "easyfit-upvc-plumbing-systems",
    name: "Easyfit - UPVC Plumbing Systems",
    description:
      "Easyfit UPVC systems are lead-free, safe, and reliable plumbing solutions for residential and commercial applications. They support water temperatures from 5°C to 60°C and offer quick installation and excellent chemical resistance.",
    imgUrl: [product2imageOne_Cat_1_, product2imagetwo_Cat_1_],
    tableData: [
      {
        size: "15 to 250",
        class: "SCH 40 & SCH 80",
        standard: "ASTM D - 1785",
        endConnection: "Solvent Cement Joint, Threaded Joint",
      },
      {
        size: "15 to 150",
        class: "SCH 40 & SCH 80",
        standard: "ASTM D 2466 / D 2467",
        endConnection: "Solvent Cement Socket Joint, Threads",
      },
    ],
    productSpec: [
      {
        key: "FEATURES",
        value: [
          "Lead-free and safe for drinking water",
          "Supports water temperature from 5°C to 60°C",
          "Self-extinguishing and does not support combustion",
          "Fast and easy installation",
          "Proven performance in diverse applications",
        ],
      },
      {
        key: "APPLICATION",
        value: [
          "Residential & commercial buildings",
          "Swimming pools & public utilities",
          "RO & DM water plants",
          "Concealed piping and terrace looping",
        ],
      },
    ],
  },
  {
    slug: "flowguard-plus-cPVC",
    name: "Flowguard Plus- CPVC Hot and Cold Portable Water Plumbing System",
    description:
      "Invented in 1959, used all over the world, established as a trusted product and now brought to you by Prince Pipes, FlowGuard Plus CPVC plumbing systems are built to last for generations. Designed for a service life of 50 years, these CPVC pipes and fittings can withstand temperatures up to 93ºC and are ideal for hot and cold water applications. NSF certified for Prince Flowguard Plus One-Step Low VOC CPVC Cement Medium Body Yellow only.",
    imgUrl: [product1imageOne_Cat_1_, product1imagetwo_Cat_1_],
    tableData: [],
    productSpec: [
      {
        key: "FEATURES",
        value: [
          "IS 16098 pt 2,CPWD,MES,etc",
          "Suitable for use up to 93°C",
          "High tensile and impact strength",
          "Freedom from toxicity, odours and tastes",
          "Low thermal expansion",
          "UV resistant",
          "25% Higher pressure bearing capacity at higher temperatures",
          "Consistent product quality",
          "Peace of mind assured",
          "Fire retardant",
          "No corrosion, leakage, scaling and pitting",
          "Lowest bacterial growth",
        ],
      },
      {
        key: "APPLICATION",
        value: [
          "Indoor and outdoor Installations of hot & cold water plumbing lines",
          "Solar water heaters",
          "For concealed, downtake & terrace looping",
          "Public utilities & swimming pools",
          "Residential & commercial buildings",
        ],
      },
    ],
  },
  {
    slug: "cablefit-cable-ducting-pipes",
    name: "Cablefit - Cable Ducting Pipes",
    description:
      "Cablefit is designed to provide mechanical protection to electrical, telecom, optical, and signaling cables. Made of HDPE, it features a unique double-walled construction that enhances impact strength and durability.",
    imgUrl: [product1imageOne_Cat_4_],
    tableData: [
      {
        size: "40 to 200",
        class: "-",
        standard: "IS 16205-24",
        endConnection: "Coupler (With or without rubber ring)",
      },
      {
        size: "50 to 90",
        class: "-",
        standard: "-",
        endConnection: "Coupler (With or without rubber ring)",
      },
    ],
    productSpec: [
      {
        key: "FEATURES",
        value: [
          "Technically approved for cost, time & labor savings",
          "Made of HDPE for strength and chemical resistance",
          "Prevents stress cracks",
          "Lightweight and durable double-walled construction",
          "Smooth inner surface for easy duct/cable insertion",
        ],
      },
      {
        key: "APPLICATION",
        value: [
          "Electrical cable protection",
          "Telecom, optical, and signaling cable protection",
          "Flyovers, tunnels, overbridges, and railway signals",
        ],
      },
    ],
  },
  {
    slug: "corfit-manhole-chambers",
    name: "Corfit Manhole Chambers",
    description:
      "Corfit Manhole & Inspection Chambers are made from PE material, offering superior chemical resistance and mechanical strength. Designed with features like socket, spigot, and side inlet connections, these chambers enable efficient, leak-proof underground drainage inspection and maintenance.",
    imgUrl: [product3imageOne_Cat_3_, product3imagetwo_Cat_3_],
    tableData: [
      {
        size: "Base: 1000/750, Riser: 580/315, Cone: 1180/1330/1480",
        class: "-",
        standard: "BS EN 13598-1 & 2",
        endConnection: "Rubber Sealing Ring (Socket, Spigot & Side Inlet)",
      },
    ],
    productSpec: [
      {
        key: "FEATURES",
        value: [
          "Made from PE, resistant to acids, bases & organic compounds",
          "Resists aggressive substances like sulphuric acid & hydrogen sulphide",
          "Steps provided to access the chamber base",
          "Leak-proof rubber sealing ring for all inlet/outlet types",
          "Approx. 2° slope in inspection base ensures gravity flow",
        ],
      },
      {
        key: "APPLICATION",
        value: ["Commercial & municipal sewerage/drainage networks"],
      },
    ],
  },
  {
    slug: "corfit-underground-double-wall-corrugated-pipes",
    name: "Corfit - Underground Double Wall Corrugated Pipes",
    description:
      "Corfit DWC Pipes are manufactured using HDPE polymers and are designed for underground drainage and sewerage systems. These pipes are lighter and more cost-effective than conventional pipes, with high resistance to abrasion and chemicals. Their corrugated exterior handles static and dynamic loads effectively, while the smooth internal bore reduces the risk of blockages.",
    imgUrl: [product1imageOne_Cat_3_, product1imagetwo_Cat_3_],
    tableData: [
      {
        size: "100 to 1000",
        class: "SN4 & SN8",
        standard: "IS 16098-Part2",
        endConnection: "Rubber Ring joint",
      },
    ],
    productSpec: [
      {
        key: "FEATURES",
        value: [
          "Lighter and less expensive than conventionally used pipes",
          "Manufactured using HDPE polymers",
          "Corrugated exterior supports higher loads (static & dynamic)",
          "Easy transportation, lightweight, and operable in wet conditions",
          "Resistant to abrasion and corrosion",
          "Smooth internal bore minimizes blockage risk",
          "Good impact resistance",
          "Anti-rodent material",
          "Also available: Inspection chamber 600mm base & 315mm base",
        ],
      },
      {
        key: "APPLICATION",
        value: [
          "Underground drainage & sewerage systems",
          "Highway & road drainage",
          "Storm water & surface water drainage",
          "Industrial liquid waste",
        ],
      },
    ],
  },
  {
    slug: "foamfit-underground-drainage-piping-systems",
    name: "Foamfit - Underground Drainage Piping Systems",
    description:
      "Foamfit is a multilayered piping system ideal for underground drainage in housing and government development projects. Its structure ensures great load-bearing capacity and firmness, while being lighter than solid wall UPVC pipes.",
    imgUrl: [product2imageOne_Cat_3_, product2imagetwo_Cat_3_],
    tableData: [
      {
        size: "160, 200, 250, 315",
        class: "SN2 (NON-ISI)",
        standard: "IS 16098 Part 1",
        endConnection: "Elastomeric Sealing Ring Joint & Solvent Joint",
      },
      {
        size: "110, 125, 160, 200, 250, 315",
        class: "SN4",
        standard: "IS 16098 Part 1",
        endConnection: "Elastomeric Sealing Ring Joint & Solvent Joint",
      },
      {
        size: "110, 125, 160, 200, 250, 315",
        class: "SN8",
        standard: "IS 16098 Part 1",
        endConnection: "Elastomeric Sealing Ring Joint & Solvent Joint",
      },
    ],
    productSpec: [
      {
        key: "FEATURES",
        value: [
          "Multilayered pipes ideal for housing & government developments",
          "High load bearing capacity with firm core",
          "Lighter than solid wall UPVC pipes",
          "Easy for underground installation",
          "Compatible with other drainage products",
          "Cost-saving, easy to install, and anti-rodent",
        ],
      },
      {
        key: "APPLICATION",
        value: ["Underground drainage systems"],
      },
    ],
  },
];

export const Cat_2_Product = [
  {
    slug: "ultrafit-swr-piping-systems",
    name: "Ultrafit – SWR Piping Systems",
    description:
      "Ultrafit SWR pipes offer leak-proof sewerage solutions for residential, commercial, and industrial buildings. These lightweight yet robust pipes come with rubber ring joints to ensure long-term sealing and compatibility with other drainage systems.",
    imgUrl: [product1imageOne_Cat_2_, product1imagetwo_Cat_2_],
    tableData: [
      {
        size: "40 to 200",
        class: "Type A & B",
        standard: "IS 13592",
        endConnection: "Rubber Ring & Solvent Joint",
      },
      {
        size: "75, 90, 110, 160",
        class: "-",
        standard: "IS 14735",
        endConnection: "Rubber Ring Joint",
      },
    ],
    productSpec: [
      {
        key: "FEATURES",
        value: [
          "Lighter but strong construction",
          "Compatible with various drainage products",
          "Cost-effective and durable",
          "Rubber ring seals provide leak-proof performance",
        ],
      },
      {
        key: "APPLICATION",
        value: [
          "Public utilities",
          "Building drainage systems (internal/external)",
          "Ventilation and industrial drainage",
        ],
      },
    ],
  },
];
export const Cat_3_Product = [
  {
    slug: "greenfit-ppr-plumbing-systems",
    name: "Greenfit – PP-R Plumbing Systems",
    description:
      "Greenfit PP-R systems are high-performance plumbing pipes designed for extreme temperatures, chemical resistance, and safe drinking water. They feature heat-fusion joints, high flow rate, and resistance to scaling and bacterial growth.",
    imgUrl: [product1imageOne_Cat_5_, product1imagetwo_Cat_5_],
    tableData: [
      {
        size: "20 to 160",
        class: "10, 16 & 20 Kg/cm²",
        standard: "IS: 15801",
        endConnection: "Poly-fusion welding joint",
      },
      {
        size: "180 to 315",
        class: "10 Kg/cm²",
        standard: "DIN: 8077/8078",
        endConnection: "Poly-fusion welding joint",
      },
    ],
    productSpec: [
      {
        key: "FEATURES",
        value: [
          "Proven for temperatures from -20°C to 95°C",
          "No scaling, high pH tolerance",
          "Triple-layer UV resistant pipes for outdoor use",
          "Antimicrobial inner layer ensures safe drinking water",
          "Low friction & energy-efficient flow",
        ],
      },
      {
        key: "APPLICATION",
        value: [
          "HVAC piping systems",
          "Chemical & pharma industries",
          "Residential & commercial hot/cold water",
          "Solar and floor heating systems",
          "Drinking water and food-grade liquids",
        ],
      },
    ],
  },
];

export const Cat_4_Product = [
  {
    slug: "aquafit-agriculture-piping-systems",
    name: "Aquafit - Agriculture Piping Systems",
    description:
      "Aquafit is a lightweight UPVC piping system ideal for drinking water supply and agricultural irrigation. It features corrosion resistance, smooth bore for higher flow, and easy solvent joint installation.",
    imgUrl: [
      product1imageOne_Cat_6_,
      product1imagetwo_Cat_6_,
      product1imageThree_Cat_6_,
    ],
    tableData: [
      {
        size: "20 to 400",
        class: "2.5, 4, 6, 8, 10 & 12.5 Kg/cm²",
        standard: "IS 4985",
        endConnection: "Solvent Joint",
      },
      {
        size: "20 to 250",
        class: "4, 6, 10 & 16 Kg/cm²",
        standard: "IS 7834",
        endConnection: "Solvent Joint, Threads",
      },
    ],
    productSpec: [
      {
        key: "FEATURES",
        value: [
          "Light weight and easy to transport, store, handle & install",
          "Smooth bore ensures higher flow compared to GI pipes",
          "Quick installation with solvent cement joint",
          "Rustproof and corrosion-resistant material",
          "Cost-effective and long working life",
        ],
      },
      {
        key: "APPLICATION",
        value: [
          "Drinking water supply & distribution",
          "Agricultural water supply & irrigation",
          "Slurry lines, ventilation pipelines, cable ducting",
        ],
      },
    ],
  },
];

const Cat_5_product = [
  {
    slug: "storefit-water-storage-tanks",
    name: "Storefit – Water Storage Tanks",
    description:
      "Storefit tanks are roto-moulded with triple-layer insulation to ensure water temperature stability and hygiene. Designed for strength, UV resistance, and long-term durability, they are ideal for household, commercial, and industrial water storage needs.",
    imgUrl: [product1imageOne_Cat_7_],
    tableData: [
      {
        size: "300 to 10000 Litres",
        class: "-",
        standard: "IS 12701:1996",
        endConnection: "-",
      },
    ],
    productSpec: [
      {
        key: "FEATURES",
        value: [
          "Roto-moulded with 3-layer insulation for thermal efficiency",
          "Outer white layer offers UV resistance",
          "Inner food-grade polymer layer prevents contamination",
          "Threaded lid and air ventilator for freshness",
          "Extra ribs for durability & strength",
        ],
      },
      {
        key: "APPLICATION",
        value: [
          "Potable water storage",
          "Infrastructure projects",
          "Industrial effluent holding",
          "Irrigation & borewell systems",
        ],
      },
    ],
  },
];

export const categories = [
  {
    id: "cat-1",
    name: "UNDERGROUND DRAINAGE ",
    count: 10,
    products: Cat_1_Product,
  },
  {
    id: "cat-2",
    name: "S W R",
    count: 4,
    products: Cat_2_Product,
  },
  {
    id: "cat-3",
    name: "INDUSTRIAL PIPING SYSTEM",
    count: 2,
    products: Cat_3_Product,
  },
  {
    id: "cat-4",
    name: "AGRICULTURE & BOREWELL",
    count: 3,
    products: Cat_4_Product,
  },
  { id: "cat-5", name: "WATER STORAGE", count: 2, products: Cat_5_product },
];

export const AllProducts = [
  // PLUMBING & INDUSTRIAL
  {
    slug: "flowguard-plus-cpvc",
    name: "FlowGuard Plus CPVC Plumbing Systems",
    description: "India's first GRIHA-certified CPVC system with 50-year service life. Handles temperatures up to 93°C for hot/cold water with low bacterial growth.",
    imgUrl: [],
    tableData: [
      {
        size: "15-250mm (½-10\")",
        class: "SDR 11/13.5, SCH 40/80",
        standard: "IS:15778, ASTM D 2846",
        endConnection: "Solvent Cement"
      }
    ],
    productSpec: [
      {
        key: "FEATURES",
        value: [
          "25% higher pressure capacity",
          "Fire retardant",
          "UV resistant",
          "Lead-free"
        ]
      },
      {
        key: "APPLICATIONS",
        value: [
          "Residential plumbing",
          "Commercial hot water lines",
          "Terrace looping"
        ]
      }
    ]
  },
  {
    slug: "easyfit-upvc",
    name: "Easyfit UPVC Plumbing Systems",
    description: "Lead-free UPVC piping system for safe drinking water transportation with self-extinguishing properties.",
    imgUrl: [],
    tableData: [
      {
        size: "15-250mm (½-10\")",
        class: "SCH 40/80",
        standard: "ASTM D 1785",
        endConnection: "Solvent Cement"
      }
    ],
    productSpec: [
      {
        key: "FEATURES",
        value: [
          "5-60°C temperature range",
          "Corrosion resistant",
          "Easy installation",
          "ISI marked"
        ]
      },
      {
        key: "APPLICATIONS",
        value: [
          "RO water plants",
          "Swimming pools",
          "Industrial water lines"
        ]
      }
    ]
  },
  {
    slug: "greenfit-ppr",
    name: "Greenfit PP-R Plumbing Systems",
    description: "PP-R pipes for extreme temperatures (-20°C to 95°C) with antimicrobial inner layer for drinking water safety.",
    imgUrl: [],
    tableData: [
      {
        size: "20-315mm",
        class: "PN10/16/20",
        standard: "IS:15801, DIN 8077",
        endConnection: "Fusion Welding"
      }
    ],
    productSpec: [
      {
        key: "FEATURES",
        value: [
          "Triple-layer UV protection",
          "Chemical resistant",
          "Low thermal expansion",
          "50-year lifespan"
        ]
      },
      {
        key: "APPLICATIONS",
        value: [
          "Solar heating systems",
          "Pharmaceutical plants",
          "Commercial hot water"
        ]
      }
    ]
  },
  {
    slug: "blue-greenfit",
    name: "Blue Greenfit PP-R Industrial Piping",
    description: "Blue-colored PP-R systems specifically designed for compressed air, vacuum and nitrogen applications.",
    imgUrl: [],
    tableData: [
      {
        size: "20-315mm",
        class: "PN10/16/20",
        standard: "IS:15801",
        endConnection: "Fusion Welding"
      }
    ],
    productSpec: [
      {
        key: "FEATURES",
        value: [
          "Moisture-resistant",
          "Smooth inner surface",
          "Leak-proof joints",
          "Low conductivity"
        ]
      },
      {
        key: "APPLICATIONS",
        value: [
          "Compressed air lines",
          "Instrumentation air",
          "Vacuum piping"
        ]
      }
    ]
  },

  // SWR SYSTEMS
  {
    slug: "easyfit-re",
    name: "Easyfit RE Reclaim Piping",
    description: "Purple-colored UPVC system for recycled wastewater transportation with UV and fire resistance.",
    imgUrl: [],
    tableData: [
      {
        size: "15-250mm (½-10\")",
        class: "SCH 40/80",
        standard: "ASTM D 1785",
        endConnection: "Solvent Cement"
      }
    ],
    productSpec: [
      {
        key: "FEATURES",
        value: [
          "Non-potable water marking",
          "Lead-free material",
          "Cost-effective",
          "Easy identification"
        ]
      },
      {
        key: "APPLICATIONS",
        value: [
          "Greywater recycling",
          "Landscape irrigation",
          "Industrial reuse systems"
        ]
      }
    ]
  },
  {
    slug: "silentfit",
    name: "Silentfit Low Noise SWR",
    description: "3-layer noise insulated drainage system with UPVC outer/inner layers and sound-dampening middle layer.",
    imgUrl: [],
    tableData: [
      {
        size: "40-160mm",
        class: "-",
        standard: "IS 13592",
        endConnection: "Rubber Ring"
      }
    ],
    productSpec: [
      {
        key: "FEATURES",
        value: [
          "30% noise reduction",
          "Hospital-grade quietness",
          "Thermal expansion allowance",
          "Rodent-proof"
        ]
      },
      {
        key: "APPLICATIONS",
        value: [
          "Hospitals",
          "Luxury residences",
          "Recording studios"
        ]
      }
    ]
  },
  {
    slug: "ultrafit-swr",
    name: "Ultrafit SWR Piping",
    description: "Leak-proof sewerage system with rubber ring joints for long-term sealing performance.",
    imgUrl: [],
    tableData: [
      {
        size: "40-200mm",
        class: "Type A/B",
        standard: "IS 13592",
        endConnection: "Rubber Ring"
      }
    ],
    productSpec: [
      {
        key: "FEATURES",
        value: [
          "Lightweight yet strong",
          "Smooth bore design",
          "Chemical resistant",
          "50-year lifespan"
        ]
      },
      {
        key: "APPLICATIONS",
        value: [
          "High-rise buildings",
          "Industrial drainage",
          "Stormwater systems"
        ]
      }
    ]
  },
  {
    slug: "rainfit",
    name: "Rainfit Roofwater Systems",
    description: "Complete rainwater harvesting solution with half-round and downtake pipes for efficient collection.",
    imgUrl: [],
    tableData: [
      {
        size: "75-250mm",
        class: "-",
        standard: "-",
        endConnection: "Clamp/Rubber Ring"
      }
    ],
    productSpec: [
      {
        key: "FEATURES",
        value: [
          "UV stabilized",
          "High flow capacity",
          "Aesthetic design",
          "Corrosion proof"
        ]
      },
      {
        key: "APPLICATIONS",
        value: [
          "Residential rooftops",
          "Parking sheds",
          "Industrial roofing"
        ]
      }
    ]
  },

  // UNDERGROUND
  {
    slug: "foamfit",
    name: "Foamfit Underground Drainage",
    description: "Multi-layer cellular core pipes offering strength with 50% weight reduction compared to solid wall pipes.",
    imgUrl: [],
    tableData: [
      {
        size: "110-315mm",
        class: "SN2/4/8",
        standard: "IS 16098",
        endConnection: "Rubber Ring"
      }
    ],
    productSpec: [
      {
        key: "FEATURES",
        value: [
          "6m lengths available",
          "Load bearing capacity",
          "Easy handling",
          "Joints sealed for 100 years"
        ]
      },
      {
        key: "APPLICATIONS",
        value: [
          "Township projects",
          "Municipal drainage",
          "Industrial estates"
        ]
      }
    ]
  },
  {
    slug: "drainfit",
    name: "Drainfit UPVC Underground",
    description: "Lightweight alternative to concrete pipes with excellent abrasion resistance for underground use.",
    imgUrl: [],
    tableData: [
      {
        size: "63-400mm",
        class: "SN2",
        standard: "IS 15328",
        endConnection: "Solvent/Rubber Ring"
      }
    ],
    productSpec: [
      {
        key: "FEATURES",
        value: [
          "30% lighter than concrete",
          "Smooth inner surface",
          "Chemical resistant",
          "Maintenance-free"
        ]
      },
      {
        key: "APPLICATIONS",
        value: [
          "Road crossings",
          "Park drainage",
          "Factory drainage"
        ]
      }
    ]
  },
  {
    slug: "corfit-dwc",
    name: "Corfit Double Wall Corrugated",
    description: "HDPE pipes with corrugated exterior for soil movement resistance and smooth interior for flow efficiency.",
    imgUrl: [],
    tableData: [
      {
        size: "100-1000mm",
        class: "SNA/SNB",
        standard: "IS 16098",
        endConnection: "Rubber Ring"
      }
    ],
    productSpec: [
      {
        key: "FEATURES",
        value: [
          "Replaces RCC pipes",
          "Withstands dynamic loads",
          "Leak-proof joints",
          "50-year design life"
        ]
      },
      {
        key: "APPLICATIONS",
        value: [
          "Highway drainage",
          "Airport runways",
          "Flood control"
        ]
      }
    ]
  },
  {
    slug: "corfit-manhole",
    name: "Corfit Manhole Chambers",
    description: "PE material chambers resistant to sulfuric acid and hydrogen sulfide found in sewer environments.",
    imgUrl: [],
    tableData: [
      {
        size: "315-1000mm",
        class: "-",
        standard: "BS EN 13598",
        endConnection: "Spigot/Socket"
      }
    ],
    productSpec: [
      {
        key: "FEATURES",
        value: [
          "Chemical resistant",
          "Abrasion proof",
          "Lightweight",
          "Pre-sloped invert"
        ]
      },
      {
        key: "APPLICATIONS",
        value: [
          "Sewage networks",
          "Stormwater systems",
          "Industrial drainage"
        ]
      }
    ]
  },
  {
    slug: "durafit",
    name: "Durafit FRP Covers",
    description: "Fiberglass manhole covers with 1.5-40 ton load capacity and anti-theft properties.",
    imgUrl: [],
    tableData: [
      {
        size: "300-1200mm",
        class: "A15-D400",
        standard: "BS EN 124",
        endConnection: "-"
      }
    ],
    productSpec: [
      {
        key: "FEATURES",
        value: [
          "50% lighter than iron",
          "Anti-slip surface",
          "Lockable options",
          "-40°C to 200°C range"
        ]
      },
      {
        key: "APPLICATIONS",
        value: [
          "Road surfaces",
          "Pedestrian areas",
          "Industrial campuses"
        ]
      }
    ]
  },

  // CABLE PROTECTION
  {
    slug: "cablefit",
    name: "Cablefit Ducting Pipes",
    description: "HDPE double-wall conduits for telecom and power cables with high impact strength.",
    imgUrl: [],
    tableData: [
      {
        size: "50-160mm",
        class: "450N/750N",
        standard: "IS 16205",
        endConnection: "Coupler"
      }
    ],
    productSpec: [
      {
        key: "FEATURES",
        value: [
          "Rodent proof",
          "UV stabilized",
          "Smooth inner wall",
          "6m lengths"
        ]
      },
      {
        key: "APPLICATIONS",
        value: [
          "Fiber optic networks",
          "Electrical conduits",
          "Tunnel wiring"
        ]
      }
    ]
  },
  {
    slug: "wirefit",
    name: "Wirefit Electrical Conduits",
    description: "UPVC conduit pipes with color-coding for different mechanical stress requirements.",
    imgUrl: [],
    tableData: [
      {
        size: "20-63mm",
        class: "LMS/MMS/HMS",
        standard: "IS 9537",
        endConnection: "Solvent Cement"
      }
    ],
    productSpec: [
      {
        key: "FEATURES",
        value: [
          "Fire resistant",
          "Concrete-tight joints",
          "Moisture proof",
          "Color-coded"
        ]
      },
      {
        key: "APPLICATIONS",
        value: [
          "Building wiring",
          "Industrial cabling",
          "Outdoor installations"
        ]
      }
    ]
  },

  // AGRICULTURE
  {
    slug: "aquafit",
    name: "Aquafit Agriculture Pipes",
    description: "UPVC pressure pipes for irrigation with smooth bore to prevent clogging and ensure high flow.",
    imgUrl: [],
    tableData: [
      {
        size: "20-400mm",
        class: "2.5-16kg/cm²",
        standard: "IS 4985",
        endConnection: "Solvent Cement"
      }
    ],
    productSpec: [
      {
        key: "FEATURES",
        value: [
          "Hazen-Williams coefficient 150",
          "UV stabilized",
          "Chemical resistant",
          "30-year lifespan"
        ]
      },
      {
        key: "APPLICATIONS",
        value: [
          "Drip irrigation",
          "Sprinkler systems",
          "Farm water supply"
        ]
      }
    ]
  },
  {
    slug: "safefit",
    name: "Safefit Borewell Systems",
    description: "Complete borewell solution with screen pipes, casing pipes and rising mains with CIRCLIP locking.",
    imgUrl: [],
    tableData: [
      {
        size: "25-400mm",
        class: "V4/Medium/Heavy",
        standard: "IS 12818",
        endConnection: "Threaded"
      }
    ],
    productSpec: [
      {
        key: "FEATURES",
        value: [
          "Color-coded pressure ratings",
          "Sand screen options",
          "High tensile strength",
          "Corrosion proof"
        ]
      },
      {
        key: "APPLICATIONS",
        value: [
          "Agricultural borewells",
          "Industrial water extraction",
          "Community water projects"
        ]
      }
    ]
  },
  {
    slug: "pefit-aqua",
    name: "PEfitAqua HDPE Piping",
    description: "Flexible HDPE systems for water supply with excellent resistance to ground movements.",
    imgUrl: [],
    tableData: [
      {
        size: "20-315mm",
        class: "PE63/80/100",
        standard: "IS 4984",
        endConnection: "Butt Fusion"
      }
    ],
    productSpec: [
      {
        key: "FEATURES",
        value: [
          "Earthquake resistant",
          "Leak-free joints",
          "UV stabilized",
          "50-year design life"
        ]
      },
      {
        key: "APPLICATIONS",
        value: [
          "Rural water supply",
          "Borewell delivery",
          "Mining water lines"
        ]
      }
    ]
  },

  // WATER STORAGE
  {
    slug: "storefit",
    name: "Storefit Water Tanks",
    description: "3-layer insulated tanks with antimicrobial inner lining and 10-year warranty.",
    imgUrl: [],
    tableData: [
      {
        size: "500-10,000L",
        class: "-",
        standard: "IS 12701",
        endConnection: "Multiple ports"
      }
    ],
    productSpec: [
      {
        key: "FEATURES",
        value: [
          "Food grade material",
          "UV protection cover",
          "Reinforced ribs",
          "Threaded lid"
        ]
      },
      {
        key: "APPLICATIONS",
        value: [
          "Residential overhead",
          "Commercial backup",
          "Industrial storage"
        ]
      }
    ]
  },

  // SUB-SURFACE DRAINAGE
  {
    slug: "terrafit",
    name: "Terrafit Sub-Surface Drainage",
    description: "Perforated corrugated pipes with geo-textile wrap for agricultural and civil drainage applications.",
    imgUrl: [],
    tableData: [
      {
        size: "80-100mm",
        class: "-",
        standard: "IS 9271",
        endConnection: "Coupler"
      }
    ],
    productSpec: [
      {
        key: "FEATURES",
        value: [
          "250gsm filter fabric",
          "Flexible coils (50/100m)",
          "Rodent resistant",
          "Chemical inert"
        ]
      },
      {
        key: "APPLICATIONS",
        value: [
          "Farmland drainage",
          "Golf courses",
          "Road base drainage"
        ]
      }
    ]
  }
];
