import React from "react";
import { useColorModeValue } from "@chakra-ui/system";
import Nft2 from "assets/img/nfts/Nft2.png";
import Nft1 from "assets/img/nfts/Nft1.png";
import Nft3 from "assets/img/nfts/Nft3.png";
import Nft4 from "assets/img/nfts/Nft4.png";
import Nft5 from "assets/img/nfts/Nft5.png";
import Nft6 from "assets/img/nfts/Nft6.png";

import Card from "components/card";

const HistoryCard = () => {
  const HistoryData = [
    {
      image: Nft1,
      title: "Graphic Design",
      owner: "Mark Benjamin",
      time: "30s",
    },
    {
      image: Nft2,
      title: "Copy-Writing",
      owner: "By Mark Benjamin",
      time: "50m",
    },
    {
      image: Nft3,
      title: "Email Marketing",
      owner: "By Mark Benjamin",
      time: "20s",
    },
    {
      image: Nft4,
      title: "Content Marketing",
      owner: "By Mark Benjamin",
      time: "4h",
    },
    {
      image: Nft5,
      title: "Blender",
      owner: "By Mark Benjamin",
      time: "30s",
    },
    {
      image: Nft6,
      title: "Motion Designer",
      owner: "By Mark Benjamin",
      time: "2m",
    },
    {
      image: Nft6,
      title: "Product Manager",
      owner: "By Mark Benjamin",
      time: "2m",
    },
  ];

  const cardShadow = useColorModeValue(
    "0px 3px 2px 0px rgba(0, 0, 0, 0.12), 2px 3px 4px 0px rgba(0, 0, 0, 0.12)",
    "unset"
  );

  return (
    <Card extra={"mt-3 !z-5 overflow-hidden p-3"}>
      {/* HistoryCard Header */}
      <div className="flex items-center justify-between rounded-t-3xl p-3">
        <div className="text-[25px] font-[700] text-gray-900 dark:text-white">
          Course History
        </div>
        <button className="linear rounded-[20px] bg-lightPrimary px-4 py-2 text-base font-medium text-brand-500 transition duration-200 hover:bg-gray-100 active:bg-gray-200 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 dark:active:bg-white/20">
          See all
        </button>
      </div>

      {/* History CardData */}

      {HistoryData.map((data, index) => (
        <div style={{boxShadow: cardShadow}} className="flex h-full w-full rounded-md mb-3 items-start justify-between bg-white px-3 py-[5px] hover:shadow-2xl dark:!bg-navy-800 dark:shadow-none dark:hover:!bg-navy-700">
          <div className="flex items-center gap-3">
            <div className="flex h-[100px] w-[130px] items-center justify-center">
              <img
                className="h-full w-full rounded-[5px]"
                src={data.image}
                alt=""
              />
            </div>
            <div className="flex flex-col">
              <h5 className="text-[15px] font-[400] text-gray-900 dark:text-white">
                {" "}
                {data.title}
              </h5>
              <p className="mt-1 text-[14px] font-[400] text-gray-700">
                {" "}
                {data.owner}{" "}
              </p>
            </div>
          </div>

          <div className="mt-1 flex items-center justify-center text-navy-700 dark:text-white">
            <div className="ml-2 flex items-center text-[12px] font-[400] text-gray-700 dark:text-white">
              <p>{data.time}</p>
              <p className="ml-1">ago</p>
            </div>
          </div>
        </div>
      ))}
    </Card>
  );
};

export default HistoryCard;
