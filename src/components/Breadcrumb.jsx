import React from "react";

function Breadcrumb({ steps }) {
  return (
    <div className="py-3">
      <nav className="flex items-center space-x-2 text-sm">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            {step.href ? (
              <a
                href={step.href}
                className={"text-sky-600 font-medium hover:text-sky-800"}
              >
                {step.label}
              </a>
            ) : (
              <span className="text-gray-700 font-semibold">{step.label}</span>
            )}
            {index < steps.length - 1 && (
              <span className="text-gray-400">›</span>
            )}
          </React.Fragment>
        ))}
      </nav>
    </div>
  );
}

export default Breadcrumb;
