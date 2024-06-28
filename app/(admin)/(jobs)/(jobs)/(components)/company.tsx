import Image from "next/image";

const Company = () => {
  return (
    <div className="border-[1px] h-[339px]  ">
      <div className="ml-[6.25rem] mt-[43px] mb-[2.25rem] w-[46rem]">
        <div className="flex gap-[12px] items-center justify-start">
          <Image alt="atlasian" src="/icons/atlasia_rounded.svg" height={40} width={40} />
          <p className="text-[20px] leading-[27px] text-[#4F4F4F] font-[500]">
            Atlassian
          </p>
        </div>

        <div className="flex flex-row  gap-[3rem] mt-[26px] ">
          <div className="flex flex-col gap-[1.5rem] ">
            <div className="flex flex-col gap-[0.5rem] w-[344px]">
              <p className="tect-[14px] text-[#6E6D6D] leading-[18.9px] font-[500]">
                Company Size
              </p>
              <p className="tect-[16px] text-[#3D3D3D] leading-[21.6px] font-[500]">
                1k - 2k Employees
              </p>
            </div>

            <div className="flex flex-col gap-[0.5rem] w-[344px]">
              <p className="tect-[14px] text-[#6E6D6D] leading-[18.9px] font-[500]">
                Sector
              </p>
              <p className="tect-[16px] text-[#3D3D3D] leading-[21.6px] font-[500]">
                Information Technology, Infrastructure
              </p>
            </div>

            <div className="flex flex-col gap-[0.5rem] w-[344px]">
              <p className="tect-[14px] text-[#6E6D6D] leading-[18.9px] font-[500]">
                Founded In
              </p>
              <p className="tect-[16px] text-[#3D3D3D] leading-[21.6px] font-[500]">
                2019
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-[1.5rem] w-[344px] ">
            <div className="flex flex-col gap-[0.5rem]">
              <p className="tect-[14px] text-[#6E6D6D] leading-[18.9px] font-[500]">
                Type
              </p>
              <p className="tect-[16px] text-[#3D3D3D] leading-[21.6px] font-[500]">
                Private
              </p>
            </div>

            <div className="flex flex-col gap-[0.5rem] w-[344px]">
              <p className="tect-[14px] text-[#6E6D6D] leading-[18.9px] font-500">
                Funding
              </p>
              <p className="tect-[16px] text-[#3D3D3D] leading-[21.6px] font-[500]">
                Bootstrapped
              </p>
            </div>

            <div className="flex flex-col gap-[0.5rem] w-[344px]">
              <p className="tect-[14px] text-[#6E6D6D] leading-[18.9px]">
                Founded By
              </p>
              <p className="tect-[16px] text-[#3D3D3D] leading-[21.6px] font-[500]">
                Scott Farquhar, Mike Cannon-Brookes
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;
