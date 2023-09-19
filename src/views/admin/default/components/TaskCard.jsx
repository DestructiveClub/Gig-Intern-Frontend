import React from "react";
import Checkbox from "components/checkbox";
import { MdCheckCircle, MdArrowRight } from "react-icons/md";
import Card from "components/card";

const TaskCard = () => {
  return (
    <Card extra="pb-7 p-[15px] h-autow-[254px]">
      {/* task header */}
      <div className="relative flex flex-row justify-between">
        <div className="flex items-center">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-100 dark:bg-white/5">
            <MdCheckCircle className="h-6 w-6 text-brand-500 dark:text-white" />
          </div>
          <h4 className="ml-4 text-[20px] font-[700] text-black dark:text-white">
            Tasks
          </h4>
        </div>
        <a href="" className="text-[15px] font-[400] text-gray-700">See All</a>
      </div>

      {/* task content */}

      <div className="h-full w-full">
        <div className="mt-5 flex items-center justify-between p-2 border rounded-md">
          <div className="flex items-center justify-center gap-2 ">
            <Checkbox />
            <p className="text-[15px] font-[700] text-gray-800 dark:text-white">
            Mobile Design
                <p className="text-[12px] font-[400] text-gray-800 dark:text-white">
                Lesson 5
                </p>
            </p>
            
          </div>
          <div>
            <MdArrowRight className="h-6 w-6 text-black dark:text-white" />
          </div>
        </div>

        <div className="mt-2 flex items-center justify-between p-2 border rounded-md">
          <div className="flex items-center justify-center gap-2">
            <Checkbox />
            <p className="text-[15px] font-[700] text-gray-800 dark:text-white">
              Mobile Design
                  <p className="text-[12px] font-[400] text-gray-800 dark:text-white">
                  Lesson 5
                </p>
            </p>
            
          </div>
          <div>
            <MdArrowRight className="h-6 w-6 text-black dark:text-white" />
          </div>
        </div>

      </div>
    </Card>
  );
};

export default TaskCard;
