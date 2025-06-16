import React from "react";
import Breadcrumb from "../Breadcrumb";

import UI_IMG from "../../assets/ui-img.png";

const PageHeader = ({ pageTitle, infoText, steps }) => {
  return (
    <div className="min-h-[160px] relative bg-gradient-to-r from-sky-50 via-cyan-50 to-sky-50 rounded-xl px-10 py-5 border border-sky-200">
      <div className="grid grid-cols-12">
        <div className="col-span-8">
          <div className={`${infoText ? '' : 'mt-5'}`}>
            <Breadcrumb steps={steps} />

            <h4 className="text-sky-800 text-xl font-medium">{pageTitle}</h4>
            <p className="text-sky-800 text-xs font-medium mt-1.5 leading-5">
              {infoText}
            </p>
          </div>
        </div>
      </div>

      <img
        src={UI_IMG}
        alt=""
        className="h-[150px] absolute bottom-0 right-0"
      />
    </div>
  );
};

export default PageHeader;
