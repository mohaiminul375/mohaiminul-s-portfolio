import { FaXmark } from "react-icons/fa6";
import { Link } from "react-router-dom";


const GroupGuruModal = () => {
    return (
        <div className="modal-box md:max-w-2xl bg-[#09101A] text-white font-inter p-14">
            <div className="flex justify-end">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="p-1 rounded-full border-2 border-red-700 text-red-500">
            <FaXmark />
          </button>
        </form>
      </div>
      <h2 className="text-[#55E6A5] text-2xl font-bold">Group Guru</h2>
      <h5 className="font-bold mb-5">
        A Full-stack Online group study assignment Website
      </h5>
      <hr className="border-b-2 border-[#55E6A5]" />
      <ul className="mt-5 space-y-2 list-disc">
        <li>
          Users can Create their own assignment and submit any assignment
        </li>
        <li>
          Users can See their own progress in my submission section and LeaderBoard. 
        </li>
        <li>
          Users can evaluate any assignment excluding submitted by their own
        </li>
      </ul>
      <div className="mt-2">
        <h3>
          {" "}
          <span className="font-bold text-[#55E6A5]">Uses Technology:</span>
          <span>
            {" "}
            HTML, CSS, Tailwind Css, React, Express.js, Mongo DB, Firebase, JWT
          </span>
        </h3>
            <div className="mt-4 flex items-center justify-between">
                <Link target="_blank" to='https://group-guru-375m.web.app' className="border-2 border-[#55E6A5] p-2 rounded-full text-sm hover:bg-[#55E6A5] hover:font-bold hover:text-black">Live Links</Link>
                <Link target="_blank" to='https://github.com/mohaiminul375/Group-Guru-client' className="border-2 border-[#55E6A5] p-2 rounded-full text-sm hover:bg-[#55E6A5] hover:font-bold hover:text-black">Github Clients</Link>
                <Link target="_blank" to="https://github.com/mohaiminul375/Group-Guru-server" className="border-2 border-[#55E6A5] p-2 rounded-full text-sm hover:bg-[#55E6A5] hover:font-bold hover:text-black">Github Server</Link>
            </div>
      </div>
    </div>
    );
};

export default GroupGuruModal;