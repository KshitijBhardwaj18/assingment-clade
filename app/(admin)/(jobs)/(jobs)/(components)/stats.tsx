import Image from "next/image";

const Stats = () => {
  return (
    <div className="ml-[1.5625rem] mt-[2.25rem] w-[361px]">
      <div className="flex flex-row gap-[1rem]">
        <div className="w-[10.75rem] height-[46px] bg-[#FEF4F2] border-[0.8px] border-[#DC4A2D] rounded-[8px] flex  ">
          <div className="flex  w-full gap-[10px] ml-[33.5px] my-[11.5px] mr-[13px]  ">
            <Image alt="bin" src="/icons/bin.svg" height={20} width={20} />
            <p className="text-[16px]  text-nowrap leading-[21.6px] text-[#DC4A2D] flex items center font-[500]">
              Delete job
            </p>
          </div>
        </div>

        <div className="w-[10.75rem] height-[46px] text-[#DC4A2D] border-[2px] border-[#FED3CA] rounded-[8px] flex items-center pl-[45px] bg-[#DC4A2D]">
          <div className="flex gap-[10px] ">
            <Image alt="bin" src="/icons/pen.svg" height={16} width={16} />
            <p className="text-[16px] leading-[21.6px] text-white font-[500]">
              Edit job
            </p>
          </div>
        </div>
      </div>

      <div className="mt-[1.5rem] flex flex-col gap-[1rem] p-[12px]">
        <div className="flex w-[21rem] flex-row justify-between">
          <div className="w-[8.4375rem] h-[2.625rem] flex gap-[10px] p-[10px_10px_14px_10px] items-center">
            <Image
              alt="applicants"
              src="/icons/applicants.svg"
              height={20}
              width={20}
            />
            <p className="text-[16px] leading-[21.6px] font-[500] text-[#4F4F4F]">
              Applicants
            </p>
          </div>

          <p className="text-[20px] leading-[27px] font-[600] text-[#3D3D3D] p-[6px_10px]">
            400
          </p>
        </div>

        <div className="w-[21rem] h-[1px] bg-[#E7E7E7]"></div>

        <div className="flex w-[21rem] flex-row justify-between">
          <div className="w-[8.4375rem] h-[2.625rem] flex gap-[10px] p-[10px_10px_14px_10px] items-center">
            <Image
              alt="applicants"
              src="/icons/matches.svg"
              height={20}
              width={20}
            />
            <p className="text-[16px] leading-[21.6px] font-[500] text-[#4F4F4F]">
              Matches
            </p>
          </div>

          <p className="text-[20px] leading-[27px] font-[600] text-[#3D3D3D] p-[6px_10px]">
            100
          </p>
        </div>

        <div className="w-[21rem] h-[1px] bg-[#E7E7E7]"></div>

        <div className="flex w-[21rem] flex-row justify-between">
          <div className="w-[8.4375rem] h-[2.625rem] flex gap-[10px] p-[10px_10px_14px_10px] items-center">
            <Image
              alt="applicants"
              src="/icons/message.svg"
              height={20}
              width={20}
            />
            <p className="text-[16px] leading-[21.6px] font-[500] text-[#4F4F4F]">
              Messages
            </p>
          </div>

          <p className="text-[20px] leading-[27px] font-[600] text-[#3D3D3D] p-[6px_10px]">
            147
          </p>
        </div>

        <div className="w-[21rem] h-[1px] bg-[#E7E7E7]"></div>

        <div className="flex w-[21rem] flex-row justify-between">
          <div className="w-[8.4375rem] h-[2.625rem] flex gap-[10px] p-[10px_10px_14px_10px] items-center">
            <Image
              alt="applicants"
              src="/icons/view.svg"
              height={20}
              width={20}
            />
            <p className="text-[16px] leading-[21.6px] font-[500] text-[#4F4F4F]">
              Views
            </p>
          </div>

          <p className="text-[20px] leading-[27px] font-[600] text-[#3D3D3D] p-[6px_10px]">
            800
          </p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
