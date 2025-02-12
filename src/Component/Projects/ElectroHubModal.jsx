import { FaXmark } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ElectroHubModal = () => {
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
      <h2 className="text-[#55E6A5] text-2xl font-bold">Electro-Hub</h2>
      <h5 className="font-bold mb-5">
        A Full functionality Gadget E-commerce Website.
      </h5>
      <hr className="border-b-2 border-[#55E6A5]" />
      <ul className="mt-5 space-y-2 list-disc">
        <li>
          Role-based access ensures secure management for users and admins.
          Users can purchase gadgets while admins oversee operations seamlessly.
        </li>
        <li>
          Users enjoy a smooth shopping experience with SSLCommerz payments.
          They can track their order progress with detailed updates
        </li>
        <li>
          Admins have full control to add, edit, or delete products. They can
          manage orders by approving, shipping, etc.
        </li>
        <li>
          Comprehensive user and order management ensures efficiency. Admins can
          monitor activities while users track orders effortlessly.
        </li>
      </ul>
      <div className="mt-2">
        <h3>
          {" "}
          <span className="font-bold text-[#55E6A5]">Uses Technology:</span>
          <span>
            {" "}
            HTML, Tailwind CSS, NextUI, Next.Js, Typescript, Next Auth,
            Express.js, Mongo DB, SSLCommerz(Payment).
          </span>
        </h3>
        <div className="mt-4 flex items-center justify-between">
          <Link
            target="_blank"
            to="https://electro-hub-tau.vercel.app"
            className="border-2 border-[#55E6A5] p-2 rounded-full text-sm hover:bg-[#55E6A5] hover:font-bold hover:text-black"
          >
            Live Links
          </Link>
          <Link
            target="_blank"
            to="https://github.com/mohaiminul375/electro-hub"
            className="border-2 border-[#55E6A5] p-2 rounded-full text-sm hover:bg-[#55E6A5] hover:font-bold hover:text-black"
          >
            Github Client
          </Link>
          <Link
            target="_blank"
            to="https://github.com/mohaiminul375/electro-server"
            className="border-2 border-[#55E6A5] p-2 rounded-full text-sm hover:bg-[#55E6A5] hover:font-bold hover:text-black"
          >
            Github Server
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ElectroHubModal;
