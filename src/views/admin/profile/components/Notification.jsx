import Card from "components/card";
import Switch from "components/switch";
import React from "react";

function Notification() {
  return (
    <Card extra={"w-full h-full p-3"}>
      <div className="relative mb-3 flex items-center justify-between pt-1">
        <h4 className="text-[30px] font-[700] text-gray-800 dark:text-white">
          Notifications
        </h4>
      </div>
      <div className="flex flex-col">
        {/* the custom checkbox desing added in src/index.js */}
        <div className="mt-3 flex items-center gap-3">
          <Switch id="switch1" />
          <label
            for="checkbox1"
            className="text-[20px] font-[500] text-gray-800 dark:text-white"
          >
            Application process complete notification
          </label>
        </div>

        <div className="mt-4 flex items-center gap-3">
          <Switch id="switch2" />
          <label
            for="checkbox2"
            className="text-[20px] font-[500] text-gray-800 dark:text-white"
          >
            New Tasks notifications
          </label>
        </div>

        <div className="mt-4 flex items-center gap-3">
          <Switch id="switch3" />
          <label
            for="checkbox3"
            className="text-[20px] font-[500] text-gray-800 dark:text-white"
          >
            New courses available notification
          </label>
        </div>

        <div className="mt-4 flex items-center gap-3">
          <Switch id="switch4" />
          <label
            for="checkbox4"
            className="text-[20px] font-[500] text-gray-800 dark:text-white"
          >
           Rating reminders notifications
          </label>
        </div>

        <div className="mt-4 flex items-center gap-3">
          <Switch id="switch5" />
          <label
            for="checkbox5"
            className="text-[20px] font-[500] text-gray-800 dark:text-white"
          >
            Meetups near you notification
          </label>
        </div>

        <div className="mt-4 flex items-center gap-3">
          <Switch id="switch6" />
          <label
            for="checkbox6"
            className="text-[20px] font-[500] text-gray-800 dark:text-white"
          >
            Company news notifications
          </label>
        </div>
        <div className="mt-4 flex items-center gap-3">
          <Switch id="switch7" />
          <label
            for="checkbox7"
            className="text-[20px] font-[500] text-gray-800 dark:text-white"
          >
           New launches and projects
          </label>
        </div>
        <div className="mt-4 flex items-center gap-3">
          <Switch id="switch8" />
          <label
            for="checkbox8"
            className="text-[20px] font-[500] text-gray-800 dark:text-white"
          >
            Subscribe to newsletter
          </label>
        </div>
        <div className="mt-4 flex items-center gap-3">
          <Switch id="switch8" />
          <label
            for="checkbox8"
            className="text-[20px] font-[500] text-gray-800 dark:text-white"
          >
            Email me when someone get  an
            internship role
          </label>
        </div>
      </div>
    </Card>
  );
}

export default Notification;
