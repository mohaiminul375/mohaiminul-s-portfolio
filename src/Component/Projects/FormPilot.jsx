import { FaXmark } from "react-icons/fa6";
import { Link } from "react-router-dom";

const FormPilot = () => {
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
      <h2 className="text-[#55E6A5] text-2xl font-bold">Form Pilot</h2>
      <h5 className="font-bold mb-5">
        A Simple Form validation site with Zod and React hook Form
      </h5>
      <hr className="border-b-2 border-[#55E6A5]" />
      <ul className="mt-5 space-y-2 list-disc">
        <li>
          The application includes a multi-step form to collect user/visitor
          basic information in a structured and user-friendly way.
        </li>
        <li>
          Each step of the form includes input validation. If any required field
          is filled incorrectly or left empty An error message will be shown.
        </li>
        <li>
          {" "}
          The user will be prevented from proceeding to the next step until the
          error is resolved.{" "}
        </li>
        <li>
          Once all steps are successfully completed: A summary view will display
          all the entered information for review. and the final data will be
          printed in the browser console.
        </li>
        <li>
          The data will also be saved to the database via an API call through
          tanstack query and axios. All validate Data
        </li>
      </ul>
      <div className="mt-2">
        <h3>
          {" "}
          <span className="font-bold text-[#55E6A5]">Uses Technology:</span>
          <span>
            {" "}
            HTML, CSS, ShadCn, Next.Js, Typescript, Framer Motion, React Hook
            Form, Zod, Axios, Express.js, Mongo DB.
          </span>
        </h3>
        <div className="mt-4 flex items-center justify-between">
          <Link
            target="_blank"
            to="https://next-form-pilot.vercel.app"
            className="border-2 border-[#55E6A5] p-2 rounded-full text-sm hover:bg-[#55E6A5] hover:font-bold hover:text-black"
          >
            Live Links
          </Link>
          <Link
            target="_blank"
            to="https://github.com/mohaiminul375/Next-Form-Pilot"
            className="border-2 border-[#55E6A5] p-2 rounded-full text-sm hover:bg-[#55E6A5] hover:font-bold hover:text-black"
          >
            Github Client
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FormPilot;
