import React from "react";
import Breadcrumb from "../Breadcrumb";

import UI_IMG from "../../assets/ui-img.png";

const PageHeader = ({ pageTitle, infoText, steps }) => {
  return (
    <div className="min-h-[120px] md:min-h-[160px] sm:min-h-[120px] relative bg-gradient-to-r from-sky-50 via-cyan-50 to-sky-50 rounded-xl px-4 sm:px-6 md:px-10 py-3 md:py-5 border border-sky-200 overflow-hidden">
      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-8">
          <div className={`${infoText ? '' : 'mt-2 md:mt-5'}`}>
            <Breadcrumb steps={steps} />

            <h4 className="text-sky-800 text-lg md:text-xl font-medium pr-4 md:pr-0">
              {pageTitle}
            </h4>
            <p className="hidden lg:block text-sky-800 text-xs font-medium mt-1.5 leading-5 pr-4 md:pr-0">
              {infoText}
            </p>
          </div>
        </div>
      </div>

      <img
        src={UI_IMG}
        alt=""
        className="h-[100px] sm:h-[120px] md:h-[150px] absolute bottom-0 right-0 opacity-80 md:opacity-100"
      />
    </div>
  );
};

export default PageHeader;