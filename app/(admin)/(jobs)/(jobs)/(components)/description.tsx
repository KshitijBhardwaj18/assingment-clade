const Description = () => {
  return (
    <div className="border w-full h-[29.0625rem] pl-[6.25rem] pt-[2rem] pb-[32px]">
      <div className="flex flex-col h-[401px]  ">
        <p className="text-[14px] leading-[18.9px] m-0 pb-[8px] text-[#6E6D6D] font-[500] ">
          About the job
        </p>
        <div>
          <ol className="list-decimal ml-[0.85rem]">
            <li className="text-[16px] text-[#3D3D3D] font-[500] leading-[28px]">
              Handle the UI/UX research design
            </li>
            <li className="text-[16px] text-[#3D3D3D] font-[500] leading-[28px]">
              Work on researching on latest web applications designs & trends
            </li>
            <li className="text-[16px] text-[#3D3D3D] font-[500] leading-[28px]">
              Work on conceptualizing and visualizing
            </li>
            <li className="text-[16px] text-[#3D3D3D] font-[500] leading-[28px]">
              Work on creating graphics content and other graphic related works
            </li>

            {/* Add more list items here if needed */}
          </ol>
          <p className="text-[16px] text-[#3D3D3D] leading-[28px] font-[500]">Benifits:</p>
          <ul className="ml-[1.6rem]  list-disc">
            <li className="text-[16px] text-[#3D3D3D] font-[500] leading-[28px]">
              Health insurance
            </li>
            <li className="text-[16px] text-[#3D3D3D] font-[500] leading-[28px]">
              Provident Fund
            </li>
          </ul>
          <p className="text-[16px] text-[#3D3D3D] leading-[28px] font-[500]">
            Schedule:
          </p>
          <ul className="ml-[1.6rem] list-disc">
            <li className="text-[16px] text-[#3D3D3D] font-[500] leading-[28px]">
              Day shift
            </li>
          </ul>

          <p className="text-[16px] text-[#3D3D3D] leading-[28px] font-[500]">Supplemental pay types:</p>
          <ul className="ml-[1.6rem] list-disc">
            <li className="text-[16px] text-[#3D3D3D] font-[500] leading-[28px]">
              Performance bonus
            </li>
            <li className="text-[16px] text-[#3D3D3D] font-[500] leading-[28px]">
              Yearly bonus
            </li>
          </ul>

          <p className="text-[16px] text-[#3D3D3D] leading-[28px] font-[500]">Work Location: In Person</p>
        </div>
      </div>
    </div>
  );
};

export default Description;
