import React from 'react'

const WorkCard = (props) => {
  return (
    <div
      style={{ backgroundImage: `url(${props.img})` }}
      className="tw-gap-4 tw-rounded-md tw-transition hover:tw-scale-105 tw-my-4 tw-duration-1000"
    >
      <div className="tw-shadow-lg tw-shadow-black tw-container tw-rounded-md tw-flex tw-justify-center tw-items-center tw-mx-auto content-div">
        {/* hower effect */}
        <div className="tw-opacity-0 hover:tw-opacity-100 tw-duration-1000 tw-bg-slate-300 tw-w-full tw-h-full tw-flex tw-flex-col tw-justify-center tw-items-center tw-rounded-md">
          <span className="tw-text-2xl tw-font-bold tw-text-slate-900 tw-tracking-wider">
            Reactjs Appplication
          </span>
          <div className="tw-pt-8 tw-text-center ">
            <a href="">
              <button className="tw-text-center tw-rounded-lg tw-px-4 tw-py-3 tw-m-2 tw-bg-gray-200 tw-text-slate-900 tw-font-bold tw-text-lg">
                Code
              </button>
            </a>
            <a href="">
              <button className="tw-text-center tw-rounded-lg tw-px-4 tw-py-3 tw-m-2 tw-bg-gray-200 tw-text-slate-900 tw-font-bold tw-text-lg">
                Demo
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkCard