import React from "react";

// Sample data structure
const defaultTableData = {
  pipes: [
    {
      size: "100 to 1000",
      class: "SN4 & SN8",
      standard: "IS 16098-Part2",
      endConnection: "Rubber Ring joint",
    },
    {
      size: "75 to 200",
      class: "SN2",
      standard: "IS 16098-Part1",
      endConnection: "Socket joint",
    },
    {
      size: "50 to 150",
      class: "SN4",
      standard: "ASTM F714",
      endConnection: "Rubber Ring joint",
    },
  ],
  fittings: [
    {
      size: "100 to 1000",
      standard: "-",
      endConnection: "Rubber Ring joint",
    },
    {
      size: "75 to 200",
      standard: "IS 16098",
      endConnection: "Socket joint",
    },
    {
      size: "50 to 150",
      standard: "ASTM F714",
      endConnection: "Rubber Ring joint",
    },
  ],
};

export default function ProductTable({
  data = defaultTableData,
  title = "Product Specifications",
  showNote = true,
  className = "",
}) {
  return (
    <div className={`py-6 bg-gray-50 ${className}`}>
      <div>
        <h2 className="text-xl font-semibold mb-4 text-gray-800">{title}</h2>

        <div className="overflow-x-auto shadow-lg rounded-lg">
          <table className="w-full border-separate border-spacing-0 bg-white rounded-lg">
            {/* Header Row */}
            <thead>
              <tr>
                <th
                  className="bg-blue-100 border border-gray-400 px-4 py-3 text-center font-semibold text-gray-800 first:rounded-tl-lg"
                  colSpan="4"
                >
                  Pipes
                </th>
                <th
                  className="bg-blue-100 border border-gray-400 px-4 py-3 text-center font-semibold text-gray-800 last:rounded-tr-lg"
                  colSpan="3"
                >
                  Fittings
                </th>
              </tr>
            </thead>

            {/* Sub Header Row */}
            <thead>
              <tr>
                <th className="bg-gray-100 border border-gray-400 px-4 py-2 text-center font-medium text-gray-700">
                  Size(mm)
                </th>
                <th className="bg-gray-100 border border-gray-400 px-4 py-2 text-center font-medium text-gray-700">
                  Class
                </th>
                <th className="bg-gray-100 border border-gray-400 px-4 py-2 text-center font-medium text-gray-700">
                  Standard
                </th>
                <th className="bg-gray-100 border border-gray-400 px-4 py-2 text-center font-medium text-gray-700">
                  End Connection
                </th>
                <th className="bg-gray-100 border border-gray-400 px-4 py-2 text-center font-medium text-gray-700">
                  Size(mm)
                </th>
                <th className="bg-gray-100 border border-gray-400 px-4 py-2 text-center font-medium text-gray-700">
                  Standard
                </th>
                <th className="bg-gray-100 border border-gray-400 px-4 py-2 text-center font-medium text-gray-700">
                  End Connection
                </th>
              </tr>
            </thead>

            {/* Data Rows */}
            <tbody>
              {data.pipes.map((pipe, index) => {
                const fitting = data.fittings[index] || {};
                const isLast = data.pipes.length - 1 === index;
                return (
                  <tr key={index}>
                    <td
                      className={`border border-gray-400 px-4 py-3 text-center text-gray-800 ${
                        isLast ? "first:rounded-bl-lg" : ""
                      }`}
                    >
                      {pipe.size || "-"}
                    </td>
                    <td className="border border-gray-400 px-4 py-3 text-center text-gray-800">
                      {pipe.class || "-"}
                    </td>
                    <td className="border border-gray-400 px-4 py-3 text-center text-gray-800">
                      {pipe.standard || "-"}
                    </td>
                    <td className="border border-gray-400 px-4 py-3 text-center text-gray-800">
                      {pipe.endConnection || "-"}
                    </td>
                    <td className="border border-gray-400 px-4 py-3 text-center text-gray-800">
                      {fitting.size || "-"}
                    </td>
                    <td className="border border-gray-400 px-4 py-3 text-center text-gray-800">
                      {fitting.standard || "-"}
                    </td>
                    <td
                      className={`border border-gray-400 px-4 py-3 text-center text-gray-800 ${
                        isLast ? "last:rounded-br-lg" : ""
                      }`}
                    >
                      {fitting.endConnection || "-"}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Additional Information */}
        {/* {showNote && (
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-gray-700">
              <strong>Note:</strong> All specifications are subject to change
              without notice. Please contact our technical team for detailed
              specifications and custom requirements.
            </p>
          </div>
        )} */}
      </div>
    </div>
  );
}
