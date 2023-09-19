import Card from "components/card";

const Widget2 = ({ text }) => {
  return (
    <Card extra="!flex-col flex-grow items-left rounded-[20px]">
  
      <div className="h-50 flex w-auto flex-col justify-left">
        <p className="text-[15px] font-[400] text-gray-700 dark:text-white w-[305px] p-3">
          {text}
        </p>
        <input className="w-auto h-[51px] rounded-[10px] bg-gray-20 border-[1px] border-gray-30 bg-gray-100 m-2 p-3"/>
       
      </div>
      
    </Card>
  );
};

export default Widget2;
