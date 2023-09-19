import PieChart from "components/charts/PieChart";
import { pieChartData, pieChartOptions } from "variables/charts";
import Card from "components/card";

const PieChartCard = () => {
  return (
    <Card extra="rounded-[20px] p-3">
      <div className="flex flex-row justify-between px-3 pt-2">
        <div>
          <h4 className="text-[25px] font-[900] text-gray-900 dark:text-white">
            Your Skills Chart
          </h4>
        </div>

        <div className="mb-6 flex items-center justify-center">
          <select className="mb-3 mr-2 flex items-center justify-center text-sm font-bold text-gray-600 hover:cursor-pointer dark:!bg-navy-800 dark:text-white">
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
            <option value="weekly">Weekly</option>
          </select>
        </div>
      </div>

      <div className="mb-auto flex h-[220px] w-full items-center justify-center">
        <PieChart options={pieChartOptions} series={pieChartData} />
      </div>
      <div className="flex flex-row !justify-between rounded-2xl px-6 py-3 shadow-2xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center">
            <div className="h-2 w-2 rounded-full bg-gray-800" />
            <p className=" text-[15px] font-[400] text-gray-800">PHP</p>
          </div>
          <p className="mt-px text-[15px] font-[400] text-gray-800  dark:text-white">
            70%
          </p>
        </div>

        <div className="h-11 w-px bg-gray-300 dark:bg-white/10" />

        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center">
            <div className="h-2 w-2 rounded-full bg-[#626262]" />
            <p className=" text-[15px] font-[400] text-gray-500">CSS</p>
          </div>
          <p className="mt-px text-[15px] font-[400] text-gray-500 dark:text-white">
            63%
          </p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center">
            <div className="h-2 w-2 rounded-full bg-[#6AD2FF]" />
            <p className=" text-[15px] font-[400] text-blue-400">React JS</p>
          </div>
          <p className="mt-px text-[15px] font-[400] text-blue-400 dark:text-white">
            45%
          </p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center">
            <div className="h-2 w-2 rounded-full bg-[#002384]" />
            <p className=" text-[15px] font-[400] text-blue-900">HTML5</p>
          </div>
          <p className="mt-px text-[15px] font-[400] text-blue-900 dark:text-white">
            55%
          </p>
        </div>

        
      </div>
    </Card>
  );
};

export default PieChartCard;
