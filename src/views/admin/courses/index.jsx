import Profile from "./components/Profile";
import NFt2 from "assets/img/nfts/Nft2.png";
import NFt4 from "assets/img/nfts/Nft4.png";
import NFt3 from "assets/img/nfts/Nft3.png";
import NFt5 from "assets/img/nfts/Nft5.png";
import NFt6 from "assets/img/nfts/Nft6.png";

import HistoryCard from "./components/HistoryCard";
import CourseCard from "components/card/CourseCard";
import Card from "components/card";

const cardShadow = {
  color:
  "0px 3px 2px 0px rgba(0, 0, 0, 0.12), 2px 3px 4px 0px rgba(0, 0, 0, 0.12)"
};

const Courses = () => {
  return (
    <div className="mt-3 grid h-full grid-cols-1 gap-5 xl:grid-cols-3 2xl:grid-cols-3">

      <div className="col-span-1 h-fit w-full md:col-span-2 xl:col-span-2 2xl:col-span-2">
        {/* NFt Profile */}
        <Profile />
        <div style={{boxShadow: cardShadow.color, borderRadius: "10px"}}>
    <Card  extra={"mt-3 pb-10 !z-5 overflow-hidden p-3 shadow-600"}>
        {/* NFt Header */}
        <div className="mb-4 mt-5 flex flex-col justify-between px-4 md:flex-row md:items-center">
          
          <h4 className="ml-1 text-2xl font-bold text-navy-700 dark:text-white">
            Trending Courses
          </h4>
          <ul className="mt-4 flex items-center justify-between md:mt-0 md:justify-center md:!gap-5 2xl:!gap-12">
            <li>
              <a
                className="text-base font-medium text-brand-500 hover:text-brand-500 dark:text-white"
                href=" "
              >
                Art
              </a>
            </li>
            <li>
              <a
                className="text-base font-medium text-brand-500 hover:text-brand-500 dark:text-white"
                href=" "
              >
                Music
              </a>
            </li>
            <li>
              <a
                className="text-base font-medium text-brand-500 hover:text-brand-500 dark:text-white"
                href=" "
              >
                Marketing
              </a>
            </li>
            <li>
              <a
                className="text-base font-medium text-brand-500 hover:text-brand-500 dark:text-white"
                href=" "
              >
                <a href=" ">Software development</a>
              </a>
            </li>
          </ul>
        </div>

        {/* NFTs trending card */}
        <div className="z-20 grid grid-cols-1 gap-5 md:grid-cols-3">
          <CourseCard
            title="Soft Skills"
            intro="Complete this program to 
            discover how to succeed as 
            an Academic"
            level="EASY"
            image={NFt3}
          />
          <CourseCard
            title="Digital Marketing"
            intro="Complete this program to 
            discover how to succeed as 
            an Academic"
            level="EASY"
            image={NFt2}
          />
          <CourseCard
            title="Soft Skills"
            intro="Complete this program to 
            discover how to succeed as 
            an Academic"
            level="EASY"
            image={NFt4}
          />
        </div>
        </Card>
        </div>
        <div style={{boxShadow: cardShadow.color, borderRadius: "10px"}}>
        <Card extra={"mt-3 pb-10 !z-5 overflow-hidden p-3 shadow-600"}>
        {/* Recenlty Added setion */}
        <div className="mb-5 mt-5 flex items-center justify-between px-[26px]">
          <h4 className="text-2xl font-bold text-navy-700 dark:text-white">
            Recently Added Courses
          </h4>
        </div>
        
        {/* Recently Add NFTs */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-4">
          <CourseCard
            title="Marketing Analysis"
            intro="Complete this program to 
            discover how to succeed as 
            an Academic"
            level="EASY"
            image={NFt4}
          />
          <CourseCard
            title="Public Relations"
            intro="Complete this program to 
            discover how to succeed as 
            an Academic"
            level="EASY"
            image={NFt5}
          />
          <CourseCard
            title="Podcast Maangement"
            intro="Complete this program to 
            discover how to succeed as 
            an Academic"
            level="EASY"
            image={NFt6}
          />
          <CourseCard
            title="Web Design"
            intro="Complete this program to 
            discover how to succeed as 
            an Academic"
            level="EASY"
            image={NFt6}
          />
        </div>
        </Card>
        </div>
      </div>

      {/* right side section */}

      <div className="col-span-1 h-full w-full rounded-xl 2xl:col-span-1">
        <HistoryCard />
      </div>
    </div>
  
  );
};

export default Courses;
