import { Briefcase, MessageSquare,ChevronDown } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="h-[6.8125rem] flex items-center">
      <div className="my-[1.5rem] ml-[2.5rem] mr-[24px] h-[4.625rem] w-full flex flex-grow justify-between items-center">
        <div className="h-[3.8125rem] w-[6.25rem] bg-[#E7E7E7] text-[20px] leading-[27px] text-[#DC4A2D] font-bold flex justify-center items-center flex-col">
          Logo
        </div>
        <div className="h-[4.625rem]  w-[33.625rem] border-[#D1D1D1] border-[0.5px] rounded-[36px] mb-[1px] flex justify-between   ">
          <div className="flex flex-col justify-center items-center ml-[8px]">
            <div className="flex  justify-center items-center w-[6.8125rem] h-[3.625rem] bg-[#DC4A2D] border-[2px] border-[#FCB4A5] rounded-[49px] ">
              <div className="flex flex-col justify-center items-center mt-[3px]">
              <div className="flex   flex-row flex-grow items-center justify-center gap-3 ">
                <Briefcase className="text-[#FFFFFF] w-[20px] h-[18px]" />
                <p className="text-[#ffffff] text-[20px] leading-[27px] font-[500] pb-[1.7px] ">
                  Jobs
                </p>
              </div>
              </div>
            </div>
          </div>

          <div className="w-[128px]  flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center h-full">
              <div className="flex flex-row justify-between gap-2">
                <div className="relative">
                  <MessageSquare className="h-[24px] w-[24px] text-[#B0B0B0] mt-[3px]" />
                  <div className="w-[6px] h-[6px] rounded-full bg-[#DC4A2D] p-1 absolute top-[-0.005px] left-[19px]"></div>
                </div>
                <p className="text-[20px] leading-[27px] text-[#B0B0B0]  flex flex-col items-center justify-center mb-[2px] relative">
                  Messages
                </p>
              </div>
            </div>
          </div>

          <div className="w-[128px]  flex flex-col justify-center items-center mr-[23px]">
            <div className="flex flex-col justify-center items-center h-full">
              <div className="flex flex-row justify-between gap-2">
                {/* <MessageSquare className="h-[24px] w-[24px] text-[#B0B0B0] mt-[4px]"/> */}
                <Image
                  alt="coins"
                  src="/coin.svg"
                  width={20}
                  height={20}
                  className=""
                />
                <p className="text-[20px] leading-[27px] text-[#B0B0B0]  flex flex-col items-center justify-center mb-[2px]">
                  Payments
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between items-center ml-3">
          <div className="flex-row flex justify-between mx-auto gap-4">
            <div className="flex relative">
              <Image alt="bell" src="/bell.svg" height={25.33} width={23.3} />
              <div className="w-[6px] h-[6px] rounded-full bg-[#DC4A2D] p-1 absolute top-[4px] left-[16px] "></div>
            </div>


            <div className="flex flex-row gap-2 pr-[3px] items-center justify-center">
            <Image
              alt="company"
              src="/atlsian.svg"
              height={40}
              width={40}
              className="rounded-full"
            />
            <ChevronDown className="text-[black] text-[2px]"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
