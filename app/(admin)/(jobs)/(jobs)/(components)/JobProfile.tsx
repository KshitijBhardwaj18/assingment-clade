import Image from "next/image";

export const JobProfile = () => {
  return (
    <div className="w-[82.4375rem] h-[166px] border  ">
     
        <div className="flex flex-col gap-[24px]  mt-[33px] ml-[6.25rem] mb-[2rem]   ">
          <div className="flex flex-row  ">
            <p className="text-[36px] leading-[47.25px] text-[#3D3D3D] font-semibold ">
              Senior Product Designer
            </p>
            <div className="ml-[0.75rem] flex flex-row gap-[0.75rem] items-center pt-[2px]">
              <div className=" rounded-full p-[2px] bg-[#D1D1D1]"></div>
              <p className="text-[14px] flex items-center leading-[18.9px] text-[#888888] font-[600]">
                posted 2 days ago
              </p>
              <div className="w-[57px] h-[22px] rounded-full flex items-center justify-center bg-[#ECFDF3] border border-[#ABEFC6] gap-[5px] ml-[] p-[2px_8px_2px_6px] ">
                <div className=" rounded-full bg-[#17B26A] p-[3px]"></div>
                <p className="flex justify-center items-center  text-[12px] leading-[18px] text-[#067647] font-[500]  ">
                  Open
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-row gap-[1rem] pl-[2px] items-center  ">
            <div className="flex flex-row gap-[0.5rem] items-center  ">
              <Image
                alt="loction"
                src="/icons/location.svg"
                width={16}
                height={20}
              />
              <p className="text-[20px] leading-[27px] font-[500] text-[#5D5D5D]">
                Delaware, USA
              </p>
            </div>

            <div className="w-[4px] h-[4px] rounded-full p-[2px] bg-[#D1D1D1]"></div>

            <div className="flex flex-row gap-[14px] items-center  ">
              <Image
                alt="loction"
                src="/icons/coins.svg"
                width={16}
                height={20}
              />
              <p className="text-[20px] leading-[27px] font-[500] text-[#5D5D5D]">
              $300k-$400k
              </p>
            </div>


          </div>
        </div>
      
    </div>
  );
};
