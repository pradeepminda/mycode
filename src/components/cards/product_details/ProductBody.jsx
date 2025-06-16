import React from "react";

function ProductBody() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">
        Astral D-Rex DWC HDPE Pipes
      </h1>

      {/* Approval */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Approval</h3>
        <p className="text-gray-700">IS 16098 pt 2,CPWD,MES,etc</p>
      </div>

      {/* Sizes */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Sizes</h3>
        <p className="text-gray-700">75mm to 800mm pipes & fittings</p>
      </div>

      {/* Application */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Application
        </h3>
        <p className="text-gray-700">
          Non-pressure, underground pipes for drainage, sewerage, storm water,
          Culverts & Highway Drainage
        </p>
      </div>

      {/* Substitute */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Substitute</h3>
        <p className="text-gray-700">
          To conventionally used products like PVC pipes, HDPE pipes, RCC pipes,
          Eco drain, NuDrain etc
        </p>
      </div>

      {/* Enquiry Button */}
      <button className="bg-black text-white px-8 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors duration-200">
        ENQUIRY
      </button>
    </div>
  );
}

export default ProductBody;
