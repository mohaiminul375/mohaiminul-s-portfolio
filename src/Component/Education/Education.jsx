import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  return (
    <div className="mt-36 px-10 md:px0" id="education">
      <div className="text-4xl text-center font-bold font-play_write text-[#55E6A5]">
        MY Education
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        <div className="bg-[#141C27] border-2 border-[#141C27] p-4 md:w-96 rounded-md">
          <div className="flex justify-center">
            <FaGraduationCap className="text-center text-4xl text-[#55E6A5]" />
          </div>
          <h4 className="text-2xl mt-5">BBA-in Management,</h4>
          <h5 className="font-bold">Govt. Edward College, Pabna</h5>

          <p className="text-[#55E6A5] mt-2">2023- current</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
