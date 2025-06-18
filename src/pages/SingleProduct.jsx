import React, { useEffect, useState } from "react";
import Layout from "../components/layouts/Layout";
import Breadcrumb from "../components/Breadcrumb";
import { LuShield, LuRuler, LuWrench, LuRefreshCw } from "react-icons/lu";
import image from "../assets/Images/Agri-Pipes.jpg";
import Pilltab from "../components/Pilltab";
import { Cat_1_Product, Cat_1_Products } from "../utils/data";
import { useLocation, useNavigate, useNavigation } from "react-router-dom";
const steps = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
];

// const productData = {
//   slug: "foamfit-underground-drainage-piping-systems",
//   name: "Foamfit - Underground Drainage Piping Systems",
//   description:
//     "Foamfit is a multilayered piping system ideal for underground drainage in housing and government development projects. Its structure ensures great load-bearing capacity and firmness, while being lighter than solid wall UPVC pipes.",
//   imgUrl: [image, image],
//   tableData: [
//     {
//       size: "160, 200, 250, 315",
//       class: "SN2 (NON-ISI)",
//       standard: "IS 16098 Part 1",
//       endConnection: "Elastomeric Sealing Ring Joint & Solvent Joint",
//     },
//     {
//       size: "110, 125, 160, 200, 250, 315",
//       class: "SN4",
//       standard: "IS 16098 Part 1",
//       endConnection: "Elastomeric Sealing Ring Joint & Solvent Joint",
//     },
//     {
//       size: "110, 125, 160, 200, 250, 315",
//       class: "SN8",
//       standard: "IS 16098 Part 1",
//       endConnection: "Elastomeric Sealing Ring Joint & Solvent Joint",
//     },
//   ],
//   productSpec: [
//     {
//       key: "FEATURES",
//       value: [
//         "Multilayered pipes ideal for housing & government developments",
//         "High load bearing capacity with firm core",
//         "Lighter than solid wall UPVC pipes",
//         "Easy for underground installation",
//         "Compatible with other drainage products",
//         "Cost-saving, easy to install, and anti-rodent",
//       ],
//     },
//     {
//       key: "APPLICATION",
//       value: ["Underground drainage systems"],
//     },
//   ],
// };
const productData1 = Cat_1_Products?.[0];
function SingleProduct() {
  const [activeTab, setActiveTab] = React.useState("overView");
  const [productData, setProductData] = useState(null); // Initialize as null
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    console.log(
      "location.state?.productDetails",
      location.state?.productDetails
    );

    if (location.state?.productDetails) {
      setProductData(location.state?.productDetails);
    }
  }, [location?.state]);

  if (!productData) {
    return <div>Loading...</div>; // Or some loading spinner
  }

  return (
    <Layout>
      {/* <div>{productData}</div> */}
      <div className="container mx-auto px-4 py-4">
        <Breadcrumb steps={[...steps, { label: productData?.name }]} />
        <h1 className="text-2xl font-bold text-gray-900">
          {productData?.name}
        </h1>

        <div className="flex flex-col lg:flex-row gap-8 mt-6">
          {/* Left Column - Product Images */}
          {/* <div className="lg:w-2/5">
            <div className="bg-white rounded-lg overflow-hidden mb-4 border border-gray-200">
              <img
                src={productData?.imgUrl[0]}
                alt={productData?.name}
                className="w-full h-auto object-cover "
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              {productData?.imgUrl?.map((img, index) => (
                <div
                  key={index}
                  className="bg-gray-100 rounded-md overflow-hidden cursor-pointer hover:ring-2 hover:ring-blue-500 transition-all border border-gray-200"
                >
                  <img
                    src={img}
                    alt={`${productData?.name} ${index + 1}`}
                    className="w-full h-auto object-cover"
                  />
                </div>
              ))}
            </div>
          </div> */}
          <div className="lg:w-2/5">
            <div className="bg-white rounded-lg overflow-hidden mb-4 border border-gray-200">
              <img
                src={productData?.imgUrl[selectedImage]}
                alt={productData?.name}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              {productData?.imgUrl?.map((img, index) => (
                <div
                  key={index}
                  className={`bg-gray-100 rounded-md overflow-hidden cursor-pointer hover:ring-2 hover:ring-blue-500 transition-all border ${
                    selectedImage === index
                      ? "ring-2 ring-blue-500"
                      : "border-gray-200"
                  }`}
                  onClick={() => setSelectedImage(index)}
                >
                  <img
                    src={img}
                    alt={`${productData?.name} ${index + 1}`}
                    className="w-full h-auto object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Product Details */}
          <div className="lg:w-3/5">
            {/* <div className="mb-6">
              <h1 className="text-2xl font-bold text-gray-900">{productData.name}</h1>
              <p className="text-gray-600 mt-2">{productData.description}</p>
            </div> */}

            <TabContent
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              productData={productData}
            />

            {/* Enquiry Button */}
            <div className="mt-2">
              <button
                onClick={() => navigate(`/contact-us`)}
                className="w-full lg:w-auto bg-black hover:bg-white-700 text-white font-bold font-medium py-2 px-4 rounded-lg transition-colors"
              >
                ENQUIRY
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default SingleProduct;

// Updated Tab Content Component
function TabContent({ activeTab, setActiveTab, productData }) {
  const tabs = [
    { id: "overView", label: "OverView", icon: LuRefreshCw },
    { id: "features", label: "Features", icon: LuShield },
    { id: "applications", label: "Applications", icon: LuWrench },
    ...(productData?.tableData?.length > 0
      ? [{ id: "specifications", label: "Specifications", icon: LuRuler }]
      : []),
    // { id: 'standards', label: 'Standards', icon: LuShield },
  ];

  const tabContent = {
    overView: (
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Product OverView
        </h3>
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          {productData?.description}
        </div>
      </div>
    ),
    features: (
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Product Features
        </h3>
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <ul className="space-y-3">
            {productData?.productSpec
              .find((spec) => spec.key === "FEATURES")
              .value.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
          </ul>
        </div>
      </div>
    ),
    specifications: (
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Technical Specifications
        </h3>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Size (mm)
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Class
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Standard
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  End Connection
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {productData?.tableData.map((row, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {row.size}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {row.class}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {row.standard}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {row.endConnection}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    ),
    applications: (
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Applications
        </h3>
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <ul className="space-y-3">
            {productData.productSpec
              .find((spec) => spec.key === "APPLICATION")
              .value.map((app, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700">{app}</span>
                </li>
              ))}
          </ul>
          {/* <div className="mt-6 bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-800 mb-2">Ideal For:</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-blue-700">• Housing projects</p>
                <p className="text-blue-700">• Government infrastructure</p>
                <p className="text-blue-700">• Urban drainage systems</p>
              </div>
              <div>
                <p className="text-blue-700">• Municipal drainage networks</p>
                <p className="text-blue-700">• Commercial developments</p>
                <p className="text-blue-700">• Industrial areas</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    ),
    // standards: (
    //   <div className="space-y-6">
    //     <h3 className="text-xl font-semibold text-gray-900 mb-4">Standards & Approvals</h3>
    //     <div className="grid md:grid-cols-2 gap-4">
    //       <div className="bg-green-50 p-4 rounded-lg border border-green-200">
    //         <div className="flex items-center mb-2">
    //           <LuShield className="w-5 h-5 text-green-600 mr-2" />
    //           <span className="font-semibold text-green-800">IS 16098 Part 1</span>
    //         </div>
    //         <p className="text-sm text-green-700">Indian Standard for Plastic Underground Drainage Pipes</p>
    //       </div>
    //       <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
    //         <div className="flex items-center mb-2">
    //           <LuShield className="w-5 h-5 text-blue-600 mr-2" />
    //           <span className="font-semibold text-blue-800">SN Ratings</span>
    //         </div>
    //         <p className="text-sm text-blue-700">Stiffness Classification (SN2, SN4, SN8)</p>
    //       </div>
    //     </div>
    //     <div className="bg-gray-50 p-4 rounded-lg">
    //       <p className="text-gray-700">All products comply with relevant Indian standards and are approved for use in government and private infrastructure projects.</p>
    //     </div>
    //   </div>
    // )
  };

  return (
    <div>
      {/* <Pilltab
          steps={tabs}
          active={activeTab}
          ontabClick={() => setActiveTab()}
        />
      <div className="border-b border-gray-200">
        <nav className="flex overflow-x-auto px-6" aria-label="Tabs">
           
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${
                  activeTab === tab.id
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
                aria-selected={activeTab === tab.id}
              >
                <Icon className="w-4 h-4 mr-2" />
                {tab.label}
              </button>
            );
          })}
        </nav>
      </div>
      <div className="p-6">{tabContent[activeTab]}</div> */}
      <Pilltab steps={tabs} active={activeTab} onTabClick={setActiveTab} />

      <div className="py-6">{tabContent[activeTab]}</div>
    </div>
  );
}
