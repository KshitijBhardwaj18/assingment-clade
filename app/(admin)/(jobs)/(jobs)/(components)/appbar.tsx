const Appbar = () => {
  return (
    <div className="h-[4.1875rem] border border-[#E7E7E7] flex-col items-center justify-center">
      <div className="h-full flex flex-row justify-start gap-[4.5rem] flex-start items-center   w-[37.875rem] ml-[6.25rem]">
        <div className="h-full flex  flex-col items-center justify-center relative">
          <p className="text-[20px] leading-[27px] text-[#DC4A2D] font-bold ">
            Job preview
          </p>
          <div className="w-[65px] h-[2px] bg-[#DC4A2D]  absolute bottom-0 "></div>
        </div>
        <p className="text-[20px] leading-[27px] text-[#888888] font-[500] ">Applicants</p>
        <p className="text-[20px] leading-[27px] text-[#888888] font-[500]  ">Match</p>
        <p className="text-[20px] leading-[27px] text-[#888888] font-[500] ">Messages</p>
      </div>
    </div>
  );
};

export default Appbar;
