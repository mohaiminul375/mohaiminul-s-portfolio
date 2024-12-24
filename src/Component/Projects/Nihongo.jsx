import { FaXmark } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Nihongo = () => {
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
      <h2 className="text-[#55E6A5] text-2xl font-bold">Nihongo Dojo</h2>
      <h5 className="font-bold mb-5">
        A Simple Japanese language learning platform.
      </h5>
      <hr className="border-b-2 border-[#55E6A5]" />
      <ul className="mt-5 space-y-2 list-disc">
        <li>
          Login Redirect: Users are redirected to the login page upon visiting
          the site.
        </li>
        <li>
          Lesson Page: After login, users are redirected to the lesson page to
          learn Japanese vocabulary and track their progress.
        </li>
        <li>
          Admin Access: Only admins can add, edit, and manage lessons,
          tutorials, and vocabularies.
        </li>
        <li>
          User Management: Admins can manage users, including promoting or
          banning them.
        </li>
      </ul>
      <div className="mt-2">
        <h3>
          {" "}
          <span className="font-bold text-[#55E6A5]">Uses Technology:</span>
          <span>
            {" "}
            HTML, CSS, ShadCn, Next.Js, Typescript, Express.js, Mongo DB, JWT,
            Custom Authentication
          </span>
        </h3>
        <div className="mt-4 flex items-center justify-between">
          <Link
            target="_blank"
            to="https://nihongo-dojo-client.vercel.app"
            className="border-2 border-[#55E6A5] p-2 rounded-full text-sm hover:bg-[#55E6A5] hover:font-bold hover:text-black"
          >
            Live Links
          </Link>
          <Link
            target="_blank"
            to="https://github.com/mohaiminul375/nihongo-dojo-client"
            className="border-2 border-[#55E6A5] p-2 rounded-full text-sm hover:bg-[#55E6A5] hover:font-bold hover:text-black"
          >
            Github Client
          </Link>
          <Link
            target="_blank"
            to="https://github.com/mohaiminul375/nihongo-dojo-server"
            className="border-2 border-[#55E6A5] p-2 rounded-full text-sm hover:bg-[#55E6A5] hover:font-bold hover:text-black"
          >
            Github Server
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nihongo;
