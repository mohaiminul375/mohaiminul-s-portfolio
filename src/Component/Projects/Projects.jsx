import merit_matrix from "../../assets/merit-matrix-project.png";
import group_guru from "../../assets/group_guru.png";
import nihongo_dojo from "../../assets/nihongo-dojo.png";
import electro_hub from "../../assets/electro-hub.png";
import scas from "../../assets/scas.png";
import { Zoom } from "react-awesome-reveal";
import MeritMatrixModal from "./MeritMatrixModal";
import GroupGuruModal from "./GroupGuruModal";
import ScacModal from "./ScacModal";
import Nihongo from "./Nihongo";
import ElectroHubModal from "./ElectroHubModal";
const Projects = () => {
  return (
    <div className="mt-36 px-10 md:px-0" id="projects">
      <div className="text-4xl text-center font-bold font-play_write text-[#55E6A5]">
        My Projects
      </div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {/* project-1 */}
        <Zoom triggerOnce="false" duration={2000}>
          <div className="group relative items-center justify-center overflow-hidden cursor-pointer md:w-[350px] xl:w-96">
            <div className="w-full rounded-md">
              <img
                className="w-full rounded-lg group-hover:scale-105 transition-transform duration-1000"
                src={electro_hub}
                alt="home_page"
              />
            </div>
            {/* Default image visibility with minimal dark on hover */}
            <div className="absolute inset-0 bg-[#09101A]/30 group-hover:bg-[#09101A]/60 transition-all duration-500"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[55%] space-y-1 group-hover:translate-y-0 transition-all">
              <h3 className="text-2xl text-black bg-[#55E6A5] group-hover:bg-transparent group-hover:text-white p-2 rounded-md duration-300 transition-all">
                Electro-Hub
              </h3>
              <p className="text-lg opacity-0 group-hover:opacity-100 transition-opacity">
                A Full functionality Gadget E-commerce Website
              </p>
              <h3
                onClick={() =>
                  document.getElementById("my_modal_1").showModal()
                }
                className="opacity-0 group-hover:opacity-100 transition-opacity hover:underline hover:font-bold"
              >
                View Details
              </h3>
            </div>
            {/* modal */}
            <dialog id="my_modal_1" className="modal">
              <ElectroHubModal></ElectroHubModal>
            </dialog>
          </div>
        </Zoom>

        {/* project-2 */}

        <Zoom triggerOnce="false" duration={2000}>
          <div className="group relative items-center justify-center overflow-hidden cursor-pointer md:w-[350px] xl:w-96">
            <div className="w-full rounded-md">
              <img
                className="w-full rounded-lg group-hover:scale-105 transition-transform duration-1000"
                src={merit_matrix}
                alt="home_page"
              />
            </div>
            {/* Default image visibility with minimal dark on hover */}
            <div className="absolute inset-0 bg-[#09101A]/30 group-hover:bg-[#09101A]/60 transition-all duration-500"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[55%] space-y-1 group-hover:translate-y-0 transition-all">
              <h3 className="text-2xl text-black bg-[#55E6A5] group-hover:bg-transparent group-hover:text-white p-2 rounded-md duration-300 transition-all">
                Merit-Matrix
              </h3>
              <p className="text-lg opacity-0 group-hover:opacity-100 transition-opacity">
                A scholarship Management Website
              </p>
              <h3
                onClick={() =>
                  document.getElementById("my_modal_2").showModal()
                }
                className="opacity-0 group-hover:opacity-100 transition-opacity hover:underline hover:font-bold"
              >
                View Details
              </h3>
            </div>
            {/* modal */}
            <dialog id="my_modal_2" className="modal">
              <MeritMatrixModal></MeritMatrixModal>
            </dialog>
          </div>
        </Zoom>

        {/* project-2 */}
        <Zoom triggerOnce="false" duration={2000}>
          <div className="group relative items-center justify-center overflow-hidden cursor-pointer md:w-[350px] xl:w-96">
            <div className="w-full rounded-md">
              <img
                className="w-full rounded-lg group-hover:scale-105 transition-transform duration-1000"
                src={nihongo_dojo}
                alt="home_page"
              />
            </div>
            {/* Default image visibility with minimal dark on hover */}
            <div className="absolute inset-0 bg-[#09101A]/30 group-hover:bg-[#09101A]/80 transition-all duration-500"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[55%] space-y-1 group-hover:translate-y-0 transition-all">
              <h3 className="text-2xl text-black bg-[#55E6A5] group-hover:bg-transparent group-hover:text-white p-2 rounded-md duration-300 transition-all">
                Nihongo Dojo
              </h3>
              <p className="text-lg opacity-0 group-hover:opacity-100 transition-opacity">
                A Simple Japanese language learning Platform
              </p>
              <h3
                onClick={() =>
                  document.getElementById("my_modal_4").showModal()
                }
                className="opacity-0 group-hover:opacity-100 transition-opacity hover:underline hover:font-bold"
              >
                View Details
              </h3>
            </div>
            {/* modal */}
            <dialog id="my_modal_4" className="modal">
              <Nihongo />
            </dialog>
          </div>
        </Zoom>

        {/* project-3 */}
        <Zoom triggerOnce="false" duration={2000}>
          <div className="group relative items-center justify-center overflow-hidden cursor-pointer md:w-[350px] xl:w-96">
            <div className="w-full rounded-md">
              <img
                className="w-full rounded-lg group-hover:scale-105 transition-transform duration-1000"
                src={group_guru}
                alt="home_page"
              />
            </div>
            {/* Default image visibility with minimal dark on hover */}
            <div className="absolute inset-0 bg-[#09101A]/30 group-hover:bg-[#09101A]/80 transition-all duration-500"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[55%] space-y-1 group-hover:translate-y-0 transition-all">
              <h3 className="text-2xl text-black bg-[#55E6A5] group-hover:bg-transparent group-hover:text-white p-2 rounded-md duration-300 transition-all">
                Group-Guru
              </h3>

              <p className="text-lg opacity-0 group-hover:opacity-100 transition-opacity">
                An Online group study assignment platform
              </p>
              <h3
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
                className="opacity-0 group-hover:opacity-100 transition-opacity hover:underline hover:font-bold"
              >
                View Details
              </h3>
            </div>
            {/* modal */}
            <dialog id="my_modal_3" className="modal">
              <GroupGuruModal></GroupGuruModal>
            </dialog>
          </div>
        </Zoom>

        {/* project-5 */}
        <Zoom triggerOnce="false" duration={2000}>
          <div className="group relative items-center justify-center overflow-hidden cursor-pointer md:w-96">
            {/* <div className="w-full rounded-md ">
              <img
                className="w-full rounded-lg group-hover:scale-105 transition-transform duration-1000"
                src={scas}
                alt=""
              />
            </div> */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-[#55E6A5]/90 group-hover:via-[#55E6A5]/30 group-hover:to-[#55E6A5]/90"></div>
            {/* <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[55%] space-y-1 group-hover:translate-y-0 transition-all">
              <h3 className="text-2xl text-[#55E6A5] group-hover:text-white">
                Safia's Creative art studio
              </h3>
              <p className="text-lg opacity-0 group-hover:opacity-100 transition-opacity">
                An Arts & Crafts showcase Website.
              </p>
              <h3
                onClick={() =>
                  document.getElementById("my_modal_5").showModal()
                }
                className="opacity-0 group-hover:opacity-100 transition-opacity hover:underline hover:font-bold"
              >
                View Details
              </h3>
            </div> */}
            {/* modal */}
            {/* <dialog id="my_modal_4" className="modal">
              <ScacModal></ScacModal>
            </dialog> */}
          </div>
        </Zoom>
      </div>
    </div>
  );
};

export default Projects;
