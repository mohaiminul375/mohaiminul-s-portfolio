import merit_matrix from "../../assets/merit-matrix-project.png"
const Projects = () => {
  return (
    <div className="mt-36">
      <div className="text-4xl text-center font-bold font-play_write text-[#55E6A5]">
        MY Projects
      </div>
      <div className="mt-10 grid md:grid-cols-3 gap-5">
        <div className="w-96 rounded-md">
          <img className="w-full rounded-lg" src={merit_matrix} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
