import MiniCalendar from "components/calendar/MiniCalendar";
import PieChartCard from "views/admin/default/components/PieChartCard";
import avatar from "assets/img/avatars/avatar11.png";

import { columnsDataCheck, columnsDataComplex } from "./variables/columnsData";

import Widget from "components/widget/Widget";
import Widget2 from "components/widget/Widget2";
import CheckTable from "views/admin/default/components/CheckTable";
import ComplexTable from "views/admin/default/components/ComplexTable";
import TaskCard from "views/admin/default/components/TaskCard";
import tableDataCheck from "./variables/tableDataCheck.json";
import tableDataComplex from "./variables/tableDataComplex.json";

const Dashboard = () => {
  return (
    <div className="flex w-full flex-col gap-5 mt-10">
      {/* Card widget */}

      <div className="grid h-full grid-cols-1 gap-3 lg:!grid-cols-12">
        <div className="col-span-3 lg:col-span-4 lg:mb-0 3xl:col-span-3">
        <Widget
          profile={<img src={avatar} alt="profile" className=" rounded-full h-[120px] w-[120px]" />}
          name={"Calvin Philips"}
          career={"Software Developer"}
          location={"Kumasi, Ghana."}
          text={"Application Review"}
          status={"In Process"}

        />
        </div>
        <div className="z-0 col-span-3 lg:col-span-4 lg:!mb-0">
        <Widget2

          text={"Your application is being processed, you will be notified soon, when our team complete your application review. While waiting you can make sure to take our skill test programs , to make verifying easy and fast. Thank you "}

        />
        </div>
        
        <div className="z-0 col-span-3 lg:col-span-4 lg:!mb-0">
          <TaskCard />
      </div>

      </div>


      <div className="grid h-full grid-cols-1 gap-5 lg:!grid-cols-12">
        {/* Check Table */}
        <div className="col-span-5 lg:col-span-9 lg:mb-0 3xl:col-span-5">
          <CheckTable
            columnsData={columnsDataCheck}
            tableData={tableDataCheck}
          />
        </div>

        {/* Traffic chart & Pie Chart */}

        <div className="z-0 col-span-4 lg:col-span-3 lg:!mb-0">
          <PieChartCard />
        </div>

        {/* Complex Table , Task & Calendar */}
    <div className="col-span-5 lg:col-span-7 lg:mb-0 3xl:col-span-5">
        <ComplexTable
          columnsData={columnsDataComplex}
          tableData={tableDataComplex}
        />
  </div>
        {/* Task chart & Calendar */}

        <div className="z-0 col-span-5 lg:col-span-5 lg:!mb-0">
          <div className="grid grid-cols-1 rounded-[20px]">
            <MiniCalendar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
