import Appbar from "./(components)/appbar";
import Description from "./(components)/description";
import { JobProfile } from "./(components)/JobProfile";
import Requirements from "./(components)/requirements";
import Company from "./(components)/company";
import Stats from "./(components)/stats";

const Jobs = () => {
  return (
    <div className="flex flex-col">
      <Appbar />
      <div  className="flex flex-row">

        <div className="flex-col flex w-[82.4375rem]">
        <JobProfile/>
        <Requirements/>
        <Description/>
        <Company/>
        </div>

        <div className="flex flex-col w-[25.5625rem]">
          <Stats/>
        </div>

      </div>
    </div>
  );
};

export default Jobs;
