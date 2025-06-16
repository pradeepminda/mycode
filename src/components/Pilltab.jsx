import React from "react";

function Pilltab({ steps, active, onTabClick }) {
  return (
    <div className="flex gap-2 overflow-x-auto mb-0 md:mb-1">
      {steps?.map((item, index) => {
        const Icon = item.icon; // Get icon from each item
        return (
          <div
            key={item?.id || index}
            className={`flex items-center px-4 py-1 rounded-full font-medium text-sm cursor-pointer whitespace-nowrap ${
              active === item?.id
                ? "bg-blue-600 text-white" // Active tab styles
                : "bg-white text-gray-800 border border-gray-200" // Inactive tab styles
            }`}
            onClick={() => onTabClick(item?.id)}
          >
            {Icon && <Icon className="w-4 h-4 mr-2" />}
            {item?.label}
          </div>
        );
      })}
    </div>
  );
}

export default Pilltab;