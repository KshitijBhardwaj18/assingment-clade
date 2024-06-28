import SkillButton from "./skillbutton";
import Image from "next/image";
const Requirements = () => {
  return (
    <div className="h-[11.1875rem] w-full border pl-[6.25rem] pt-[2rem]  ">
      <div className="flex flex-row gap-[4rem]  ">
        <div className="flex flex-col gap-[0.5rem] w-[170px] h-[115px]">
          <p className="text-[14px] leading-[18.9px] font-[500] text-[#6E6D6D]">
            Skills Required
          </p>
          <SkillButton img="/figma.svg" text="figma" width={66} />
          <SkillButton img="/illustrator.svg" text="Adobe Illustrator" width={126.41} />
          <SkillButton img="/XD.svg" text="Adobe XD" width={88.41} />
         
        </div>
        <div className="flex flex-col gap-[8px] w-[170px]">
          <p className="text-[14px] leading-[18.9px] text-[#6E6D6D] font-[500]">
            Preffered Language
          </p>
          <p className="text-[16px] leading-[21.6px] text-[#3D3D3D] font-[600]">
            English
          </p>
        </div>

        <div className="flex flex-col gap-[8px] w-[170px]">
          <p className="text-[14px] leading-[18.9px] text-[#6E6D6D] font-[500]">
            Type
          </p>
          <p className="text-[16px] leading-[21.6px] text-[#3D3D3D] font-[600]">
            Full time
          </p>
        </div>

        <div className="flex flex-col gap-[8px] w-[179px]">
          <p className="text-[14px] leading-[18.9px] text-[#6E6D6D] font-[500]">
            Years of Experience
          </p>
          <p className="text-[16px] leading-[21.6px] text-[#3D3D3D] font-[600] overflow-auto whitespace-nowrap">
            3+ Years of Experience
          </p>
        </div>
      </div>
    </div>
  );
};

export default Requirements;
