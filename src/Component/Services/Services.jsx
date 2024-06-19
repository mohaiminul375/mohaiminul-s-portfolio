import { Zoom } from "react-awesome-reveal";
import { FaCode, FaMobileAlt } from "react-icons/fa";
// import Zoom from 'react-reveal/Zoom';
const Services = () => {
  return (
    <div className="mt-36">
      <div className="text-4xl text-center font-bold font-play_write text-[#55E6A5]">
        {" "}
        MY Services
      </div>

      <div className="grid md:grid-cols-3 gap-5 mt-10">
        <Zoom triggerOnce={true}>
        <div className="bg-[#141C27] border-2 border-[#141C27] p-4 w-96 rounded-md">
          <div className="flex justify-center">
          <FaCode className="text-center text-4xl text-[#55E6A5]" />
          </div>
          <h4 className="text-center text-2xl my-3">Web Development</h4>
          <p>
            As a front-end developer tasked with building a MERN stack website
            with a focus on better UX and functionality, your role involves
            multiple responsibilities and steps to ensure a seamless user
            experience and an efficient, robust application.
          </p>
        </div>
        </Zoom>
        <Zoom triggerOnce={true}>
        <div className="bg-[#141C27] border-2 border-[#141C27] p-4 w-96 rounded-md">
          <div className="flex justify-center">
          <FaMobileAlt className="text-center text-4xl text-[#55E6A5]" />
          </div>
          <h4 className="text-center text-2xl my-3">Responsive Development</h4>
          <p>
            As a front-end developer, I am always responsible and determined to make every project responsive for better user interface and user experience.
          </p>
        </div>
        </Zoom>
      </div>
    </div>
  );
};

export default Services;
