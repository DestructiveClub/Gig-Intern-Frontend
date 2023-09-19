import Card from "components/card";
import React from "react";

const General = () => {
  return (
    <Card extra={"w-full h-full p-3"}>
      {/* Header */}
      <div className="mt-2 mb-8 w-full">
        <h4 className="px-2 text-[25px] font-[700] text-gray-800 dark:text-white">
          General Information
        </h4>
        <p className="mt-2 px-2 text-[15px] font-[400] text-gray-600">
        Hi, I am  Calvin Philips. A computer Science Bachelor of Science student.
        I’ve skills in web and mobile development with also a zeal to learn more 
        about marketing in addition to my skills. I would like to gain skills in fields 
        of social media, paid advertisement and affiliate marketing  
        </p>
      </div>
      {/* Cards */}
      <div className="grid grid-cols-2 gap-4 px-2">
        <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
          <p className="text-[20px] font-[700] text-gray-800">Education</p>
          <p className="text-[15px] font-[400] text-gray-700 dark:text-white">
          Kwame Nkrumah University Of Science And Technology
          </p>
        </div>

        <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
          <p className="text-[20px] font-[700] text-gray-800">Languages</p>
          <p className="text-[15px] font-[400] text-gray-700 dark:text-white">
            English, French, Twi.
          </p>
        </div>

        <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
          <p className="text-[20px] font-[700] text-gray-800">Department</p>
          <p className="text-[15px]font-[400] text-gray-700 dark:text-white">
           Software Development
          </p>
        </div>

        <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
          <p className="text-[20px] font-[700] text-gray-800">Work History</p>
          <p className="text-[15px] font-[400] text-gray-700 dark:text-white">
            Student
          </p>
        </div>

        <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
          <p className="text-[20px] font-[700] text-gray-800">Organization</p>
          <p className="text-[15px] font-[400] text-gray-700 dark:text-white">
            Impact Lane Consult
          </p>
        </div>

        <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
          <p className="text-[20px] font-[700] text-gray-800">Links</p>
          <p className="text-[15px] font-[400] text-blue-700 dark:text-white">
          LinkedIn, GitHub, Dribble
          </p>
        </div>
      </div>
    </Card>
  );
};

export default General;
