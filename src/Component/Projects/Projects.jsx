import { Link } from "react-router-dom";
import merit_matrix from "../../assets/merit-matrix-project.png";
import group_guru from "../../assets/group_guru.png"
import scas from "../../assets/scas.png"
import { Zoom } from "react-awesome-reveal";
const Projects = () => {
  return (
    <div className="mt-36 px-10 md:px-0" id="projects">
      <div className="text-4xl text-center font-bold font-play_write text-[#55E6A5]">
        MY Projects
      </div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {/* project-1 */}
        <Zoom triggerOnce='false' duration={2000}>
        <div className="group relative items-center justify-center overflow-hidden cursor-pointer md:w-96">
          <div className="w-full rounded-md ">
            <img
              className="w-full rounded-lg group-hover:scale-105 transition-transform duration-1000"
              src={merit_matrix}
              alt=""
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-[#55E6A5]/90 group-hover:via-[#55E6A5]/30 group-hover:to-[#55E6A5]/90"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[55%] space-y-1 group-hover:translate-y-0 transition-all">
            <h3 className="text-2xl text-[#55E6A5] group-hover:text-white">
              Merit-Matrix
            </h3>
            <p className="text-lg opacity-0 group-hover:opacity-100 transition-opacity">
              A scholarship Management Website
            </p>
            <h3 className="opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="hover:underline font-bold">
                <Link to="https://merit-matrix-375m.web.app" target="_blank">
                  Live Site
                </Link>
              </span>{" "}
              |{" "}
              <span className="hover:underline font-bold">
                <Link to="https://github.com/mohaiminul375/merit-matrix-client" target="_blank">
                  GitHub Client
                </Link>
              </span>{" "}
              | <span className="hover:underline font-bold">
                <Link to='https://github.com/mohaiminul375/merit-matrix-server' target="_blank">
                GitHub Server
                </Link>
                </span>
            </h3>
          </div>
        </div>
        </Zoom>
        {/* project-2 */}
        <Zoom triggerOnce='false' duration={2000}>
        <div className="group relative items-center justify-center overflow-hidden cursor-pointer md:w-96">
          <div className="w-full rounded-md ">
            <img
              className="w-full rounded-lg group-hover:scale-105 transition-transform duration-1000"
              src={group_guru}
              alt=""
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-[#55E6A5]/90 group-hover:via-[#55E6A5]/30 group-hover:to-[#55E6A5]/90"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[55%] space-y-1 group-hover:translate-y-0 transition-all">
            <h3 className="text-2xl text-[#55E6A5] group-hover:text-white">
              Group-Guru
            </h3>
            <p className="text-lg opacity-0 group-hover:opacity-100 transition-opacity">
              An Online group study assignment platform
            </p>
            <h3 className="opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="hover:underline font-bold">
                <Link to="https://group-guru-375m.web.app" target="_blank">
                  Live Site
                </Link>
              </span>{" "}
              |{" "}
              <span className="hover:underline font-bold">
                <Link to="https://github.com/mohaiminul375/Group-Guru-client" target="_blank">
                  GitHub Client
                </Link>
              </span>{" "}
              | <span className="hover:underline font-bold">
                <Link to='https://github.com/mohaiminul375/Group-Guru-server' target="_blank">
                GitHub Server
                </Link>
                </span>
            </h3>
          </div>
        </div>
        </Zoom>
        {/* project-3 */}
        <Zoom triggerOnce='false' duration={2000}>
        <div className="group relative items-center justify-center overflow-hidden cursor-pointer md:w-96">
          <div className="w-full rounded-md ">
            <img
              className="w-full rounded-lg group-hover:scale-105 transition-transform duration-1000"
              src={scas}
              alt=""
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-[#55E6A5]/90 group-hover:via-[#55E6A5]/30 group-hover:to-[#55E6A5]/90"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[55%] space-y-1 group-hover:translate-y-0 transition-all">
            <h3 className="text-2xl text-[#55E6A5] group-hover:text-white">
              Safia's Creative art studio
            </h3>
            <p className="text-lg opacity-0 group-hover:opacity-100 transition-opacity">
              An Arts & Crafts showcase Website.
            </p>
            <h3 className="opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="hover:underline font-bold">
                <Link to="https://safias-art-and-craft.web.app/" target="_blank">
                  Live Site
                </Link>
              </span>{" "}
              |{" "}
              <span className="hover:underline font-bold">
                <Link to="https://github.com/mohaiminul375/safia-s-creative-art-client" target="_blank">
                  GitHub Client
                </Link>
              </span>{" "}
              | <span className="hover:underline font-bold">
                <Link to='https://github.com/mohaiminul375/safia-s-creative-art-server' target="_blank">
                GitHub Server
                </Link>
                </span>
            </h3>
          </div>
        </div>
        </Zoom>
      </div>
    </div>
  );
};

export default Projects;
