import Card from "components/card";
import React from "react";
const Storage = () => {
  return (
    <Card extra={"w-full h-full p-4"}>
      {/* Your storage */}
      <div className="mb-auto flex flex-col items-center justify-center">
        <div className="mt-2 flex items-center justify-center rounded-full bg-lightPrimary p-[26px] text-5xl font-bold text-brand-500 dark:!bg-navy-700 dark:text-white">
        <svg xmlns="http://www.w3.org/2000/svg" width="126" height="84" viewBox="0 0 126 84" fill="none">
                <g clip-path="url(#clip0_134_392)">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M101.85 31.5C98.175 13.65 82.425 0 63 0C47.775 0 34.65 8.4 28.35 21C12.075 23.1 0 36.225 0 52.5C0 69.825 14.175 84 31.5 84H99.75C114.45 84 126 72.45 126 57.75C126 44.1 114.975 32.55 101.85 31.5ZM52.5 68.25L34.125 49.875L41.475 42.525L52.5 53.55L79.8 26.25L87.15 33.6L52.5 68.25Z" fill="#1F5EFF"/>
                </g>
                <defs>
                  <clipPath id="clip0_134_392">
                    <rect width="126" height="84" fill="white"/>
                  </clipPath>
                </defs>
        </svg>
        </div>
        <h4 className="mb-px mt-3 text-[25px] font-[700] text-gray-800 dark:text-white">
        Your Application review
        </h4>
        <p className="px-5 text-center text-[15px] font-[400] text-gray-600 md:!px-0 xl:!px-8">
        We are currently reviewing your application,
        this may take up to 3 days maximum.
        You will be notified after your application 
        review process is done
        </p>
      </div>

      {/* Progress bar */}

      <div className="flex flex-col">
        <div className="flex justify-between">
          <p className="text-[15px] font-[600] text-gray-600">Level 22.6</p>
          <p className="text-[15px] font-[600] text-gray-600">Level 50</p>
        </div>
        <div className="mt-2 flex h-3 w-full items-center rounded-full bg-lightPrimary dark:!bg-navy-700">
          <span className="h-full w-1/2 rounded-full bg-blue-600 dark:!bg-white" />
        </div>
      </div>
    </Card>
  );
};

export default Storage;
