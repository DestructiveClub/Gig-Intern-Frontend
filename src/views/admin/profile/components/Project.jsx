import React from "react";
import { MdModeEditOutline } from "react-icons/md";
import image1 from "assets/img/profile/image1.png";
import image2 from "assets/img/profile/image2.png";
import image3 from "assets/img/profile/image3.png";
import Card from "components/card";

const Project = () => {
  return (
    <Card extra={"w-full p-4 h-full"}>
      <div className="mb-8 w-full">
        <h4 className="text-[25px] font-[700] text-gray-800 dark:text-white">
        All Selected Internship Preference
        </h4>
        <p className="mt-2 text-[15px] font-[400] text-gray-700">
        Here you can find details about your Selected fields of internship
        preferences. Complete the user skill test exercise to be giving an
        opportunity to be an intern in a great business.
        </p>
      </div>
      {/* Project 1 */}
      <div className="flex w-full items-center justify-between rounded-2xl bg-white p-3 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
        <div className="flex items-center">
          <div className="">
            <img className="h-[83px] w-[83px] rounded-lg" src={image1} alt="" />
          </div>
          <div className="ml-4">
            <p className="text-[18px] font-[700] text-gray-800 dark:text-white">
            Web Designer
            </p>
            <p className="mt-2 text-[15px] font-[400] text-gray-700">
            Internship_Preferences#1.
            </p>
            <a
                className="ml-1 text-[15px] font-[500] text-blue-600 hover:text-blue-500 dark:text-white"
                href=" "
              >
                See product details
              </a>
          </div>
        </div>
        <div className="mr-4 flex items-center justify-center text-blue-600 dark:text-white">
          <MdModeEditOutline />
        </div>
      </div>
      {/* Project 1 */}
      <div className="mt-3 flex w-full items-center justify-between rounded-2xl bg-white p-3 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
        <div className="flex items-center">
          <div className="">
            <img className="h-[83px] w-[83px] rounded-lg" src={image3} alt="" />
          </div>
          <div className="ml-4">
            <p className="text-[18px] font-[700] text-gray-800 dark:text-white">
            Mobile App  Design
            </p>
            <p className="mt-2 text-[15px] font-[400] text-gray-700">
            Internship_Preferences#1 .
            </p>
            <a
                className="ml-1 text-[15px] font-[500] text-blue-600 hover:text-blue-500 dark:text-white"
                href=" "
              >
                See product details
              </a>
          </div>
        </div>
        <div className="mr-4 flex items-center justify-center text-blue-600 dark:text-white">
          <MdModeEditOutline />
        </div>
      </div>
      {/* Project 1 */}
      <div className="mt-3 flex w-full items-center justify-between rounded-2xl bg-white p-3 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
        <div className="flex items-center">
          <div className="">
            <img className="h-[83px] w-[83px] rounded-lg" src={image2} alt="" />
          </div>
          <div className="ml-4">
            <p className="text-[18px] font-[700] text-gray-800 dark:text-white">
            Affiliate Marketing
            </p>
            <p className="mt-2 text-[15px] font-[400] text-gray-700">
            Internship_Preferences#1 .
            </p>
            <a
                className="ml-1 text-[15px] font-[500] text-blue-600 hover:text-blue-500 dark:text-white"
                href=" "
              >
                See product details
              </a>
          </div>
        </div>
        <div className="mr-4 flex items-center justify-center text-blue-600 dark:text-white">
          <MdModeEditOutline />
        </div>
      </div>
    </Card>
  );
};

export default Project;
