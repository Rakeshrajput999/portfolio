import React from 'react'

const WorkCard = (props) => {
  return (
    <div
      style={{ backgroundImage: `url(${props.img})` }}
      className="tw-gap-4 tw-rounded-md tw-transition hover:tw-scale-105 tw-my-4 tw-duration-1000 tw-bg-no-repeat tw-bg-center tw-bg-auto "
    >
      <div className="tw-shadow-lg tw-shadow-black tw-container tw-rounded-md tw-flex tw-justify-center tw-items-center tw-mx-auto content-div">
        {/* hower effect */}
        <div className="tw-opacity-0 hover:tw-opacity-100 tw-duration-1000 tw-bg-slate-300 tw-w-full tw-h-full tw-flex tw-flex-col tw-justify-center tw-items-center tw-rounded-md">
          <span className="tw-text-2xl tw-font-bold tw-text-slate-900 tw-tracking-wider">
            {props.company}
          </span>

          <div className="tw-pt-8 tw-text-center ">
<div>
  {props.role}
</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkCard