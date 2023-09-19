import Card from "components/card";

const Widget2 = ({ profile, name, career, location, status, text }) => {
  return (
    <Card extra="!flex-row flex-grow items-center rounded-[20px] p-5">
      <div className="ml-[1px] flex h-[138px] w-auto flex-row items-center">
        <div className="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
          <span className="flex items-center text-brand-500 dark:text-white">
            {profile}
          </span>
        </div>
      </div>

      <div className="h-auto ml-4 flex w-auto flex-col justify-left">
        <h4 className="text-[24px] font-[700] text-blue-600">{name}</h4>
        <p className="text-[17px] font-[700] text-gray-700 dark:text-white">
          {career}
        </p>
        <p className="font-[400] text-[12px] text-gray-600">{location}</p>
        <p className="font-[400] text-[12px] text-blue-600 ">{text}</p>

        <p className="font-[400] text-[15px] text-gray-700">{status}</p>

      </div>
    </Card>
  );
};

export default Widget2;
