import nft1 from "assets/img/nfts/NftBanner1.png";

const Profile = () => {
  return (
    <div
      className="flex w-full flex-col rounded-[20px] bg-cover px-[30px] py-[30px] md:px-[64px] md:py-[56px]"
      style={{ backgroundImage: `url(${nft1})` }}
    >
      <div className="w-full">
        <h4 className="mb-[14px] max-w-full text-[30px] font-[700] text-white md:w-[64%] md:text-3xl md:leading-[42px] lg:w-[46%] xl:w-[85%] 2xl:w-[75%] 3xl:w-[52%]">
        Discover, Learn and Build 
        yours skills while you take 
        on some of our free Courses
        All available at Gig Intern
        </h4>
        <p className="mb-[40px] max-w-full text-[20px] font-[400] text-[#D1D1D1] md:w-[64%] lg:w-[40%] xl:w-[72%] 2xl:w-[60%] 3xl:w-[45%]">
        Enter this creative world. Discover the latest
        Skills in demand or start a new course of 
        your preference!
        </p>

        <div className="mt-[36px] flex items-center justify-between gap-4 sm:justify-start 2xl:gap-10">
          <button className="text-black linear rounded-xl bg-white px-4 py-2 text-center text-base font-medium transition duration-200 hover:!bg-white/80 active:!bg-white/70">
            Start Now
          </button>
          <button
            href=" "
            className=" border border-white px-4 py-2 rounded-xl text-base font-medium text-lightPrimary hover:text-lightPrimary 2xl:ml-1"
          >
            Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
