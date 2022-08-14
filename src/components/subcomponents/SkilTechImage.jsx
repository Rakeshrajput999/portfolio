import React from "react";

const SkilltachImage = (props) => {
  return (
    <div className="tw-shadow-md tw-shadow-slate-800 hover:tw-scale-110 tw-duration-500 tw-w-30 tw-h-24 tw-flex tw-justify-center tw-flex-col tw-items-center tw-m-2">
      <div className="tw-text-6xl">{props.children}</div>
      <p className="tw-text-amber-200">{props.tech}</p>
    </div>
  );
};

export default SkilltachImage;
