import { Link } from "react-router-dom";

const ScacModal = () => {
  return (
    <div className="modal-box md:max-w-2xl bg-[#09101A] text-white font-inter p-14">
      <h2 className="text-[#55E6A5] text-2xl font-bold">
        Safia's Creative Art and Craft
      </h2>
      <h5 className="font-bold mb-5">
        A Full-stack Arts & Crafts showcase website
      </h5>
      <hr className="border-b-2 border-[#55E6A5]" />
      <ul className="mt-5 space-y-2 list-disc">
        <li>Anyone can see all Art&Crafts</li>
        <li>
          A Register User can add her own Art&Craft under 6 categories, and
          update and delete their data/Art&Crafts,
        </li>
        <li>
          Register users can see their data on their own in the My Art&Craft
          section by customization.
        </li>
      </ul>
      <div className="mt-2">
        <h3>
          {" "}
          <span className="font-bold text-[#55E6A5]">Uses Technology:</span>
          <span>
            {" "}
            HTML, CSS, Tailwind Css, React, Express.js, Mongo DB, Firebase
          </span>
        </h3>
        <div className="mt-4 flex items-center justify-between">
          <Link
            target="_blank"
            to="https://safias-art-and-craft.web.app"
            className="border-2 border-[#55E6A5] p-2 rounded-full text-sm hover:bg-[#55E6A5] hover:font-bold hover:text-black"
          >
            Live Links
          </Link>
          <Link
            target="_blank"
            to="https://github.com/mohaiminul375/safia-s-creative-art-client"
            className="border-2 border-[#55E6A5] p-2 rounded-full text-sm hover:bg-[#55E6A5] hover:font-bold hover:text-black"
          >
            Github Clients
          </Link>
          <Link
            target="_blank"
            to="https://github.com/mohaiminul375/safia-s-creative-art-server"
            className="border-2 border-[#55E6A5] p-2 rounded-full text-sm hover:bg-[#55E6A5] hover:font-bold hover:text-black"
          >
            Github Server
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ScacModal;
