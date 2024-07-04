import { Link } from "react-router-dom";

const MeritMatrixModal = () => {
  return (
    <div className="modal-box md:max-w-2xl bg-[#09101A] text-white font-inter p-14">
      <h2 className="text-[#55E6A5] text-2xl font-bold">Merit-Matrix</h2>
      <h5 className="font-bold mb-5">
        A Full-stack Scholarship Management website
      </h5>
      <hr className="border-b-2 border-[#55E6A5]" />
      <ul className="mt-5 space-y-2 list-disc">
        <li>
          Users can find suitable scholarships by searching for the scholarship
          name, degree name, or university name.
        </li>
        <li>
          Users can update their application and cancel application any time.
        </li>
        <li>
          Only Admins and Moderators can add a scholarship and manage all
          scholarship and all application
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
                <Link target="_blank" to='https://merit-matrix-375m.web.app' className="border-2 border-[#55E6A5] p-2 rounded-full text-sm hover:bg-[#55E6A5] hover:font-bold hover:text-black">Live Links</Link>
                <Link target="_blank" to='https://github.com/mohaiminul375/merit-matrix-client' className="border-2 border-[#55E6A5] p-2 rounded-full text-sm hover:bg-[#55E6A5] hover:font-bold hover:text-black">Github Clients</Link>
                <Link target="_blank" to="https://github.com/mohaiminul375/merit-matrix-server" className="border-2 border-[#55E6A5] p-2 rounded-full text-sm hover:bg-[#55E6A5] hover:font-bold hover:text-black">Github Server</Link>
            </div>
      </div>
    </div>
  );
};

export default MeritMatrixModal;
