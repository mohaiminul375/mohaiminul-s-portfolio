import { FaXmark } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ZenTask = () => {
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
      <h2 className="text-[#55E6A5] text-2xl font-bold">Zen Task</h2>
      <h5 className="font-bold mb-5">A Full Stack Kanban Dashboard</h5>
      <hr className="border-b-2 border-[#55E6A5]" />
      <ul className="mt-5 space-y-2 list-disc">
        <li>Custom authentication using JWT</li>
        <li>Interactive dashboard with task summary</li>
        <li>Create, update, and manage tasks</li>
        <li>Advanced task filtering & sorting</li>
        <li>
          Intuitive Drag & Drop task status updates (To-do ➡ In Progress ➡
          Complete)
        </li>
        <li>Fully responsive and user-friendly UI</li>
      </ul>
      <div className="mt-2">
        <h3>
          {" "}
          <span className="font-bold text-[#55E6A5]">Uses Technology:</span>
          <span>
            {" "}
            HTML, CSS, ShadCn, Next.Js, Typescript, react-beautiful-DnD,
            Express.js, Mongoose, JWT, bcrypt, Custom Authentication
          </span>
        </h3>
        <div className="mt-4 flex items-center justify-between">
          <Link
            target="_blank"
            to="https://zentask-eight.vercel.app"
            className="border-2 border-[#55E6A5] p-2 rounded-full text-sm hover:bg-[#55E6A5] hover:font-bold hover:text-black"
          >
            Live Links
          </Link>
          <Link
            target="_blank"
            to="https://github.com/mohaiminul375/zen-task"
            className="border-2 border-[#55E6A5] p-2 rounded-full text-sm hover:bg-[#55E6A5] hover:font-bold hover:text-black"
          >
            Github Client
          </Link>
          <Link
            target="_blank"
            to="https://github.com/mohaiminul375/zen-task-server"
            className="border-2 border-[#55E6A5] p-2 rounded-full text-sm hover:bg-[#55E6A5] hover:font-bold hover:text-black"
          >
            Github Server
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ZenTask;
