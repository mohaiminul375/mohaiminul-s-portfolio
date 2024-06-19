const Skills = () => {
  return (
    <div className="mt-36">
      <div className="text-4xl text-center font-bold font-play_write text-[#55E6A5]">
        MY Skills
      </div>
      <div className="mt-10 space-y-5">
        {/* row 1 */}
        <div className="flex justify-between gap-8">
          <div className="w-1/2">
            <h3 className="text-xl font-bold">HTML</h3>
            <progress
              className="progress progress-accent"
              value="90"
              max="100"
            ></progress>
            <span>90%</span>
          </div>
          <div className=" w-1/2">
            <h3 className="text-xl font-bold">CSS</h3>
            <progress
              className="progress progress-accent"
              value="70"
              max="100"
            ></progress>
            <span>70%</span>
          </div>
        </div>
        {/* row 2 */}
        <div className="flex justify-between gap-8">
          <div className="w-1/2">
            <h3 className="text-xl font-bold">Tailwind Css</h3>
            <progress
              className="progress progress-accent"
              value="70"
              max="100"
            ></progress>
            <span>70%</span>
          </div>
          <div className=" w-1/2">
            <h3 className="text-xl font-bold">Bootstrap</h3>
            <progress
              className="progress progress-accent"
              value="70"
              max="100"
            ></progress>
            <span>70%</span>
          </div>
        </div>
        {/* row 3 */}
        <div className="flex justify-between gap-8">
          <div className="w-1/2">
            <h3 className="text-xl font-bold">Javascript</h3>
            <progress
              className="progress progress-accent"
              value="80"
              max="100"
            ></progress>
            <span>80%</span>
          </div>
          <div className=" w-1/2">
            <h3 className="text-xl font-bold">React</h3>
            <progress
              className="progress progress-accent"
              value="80"
              max="100"
            >70%</progress>
            <span>80%</span>
          </div>
        </div>
        {/* row 4 */}
        <div className="flex justify-between gap-8">
          <div className="w-1/2">
            <h3 className="text-xl font-bold">Node Js</h3>
            <progress
              className="progress progress-accent"
              value="70"
              max="100"
            ></progress>
            <span>70%</span>
          </div>
          <div className=" w-1/2">
            <h3 className="text-xl font-bold">Express Js</h3>
            <progress
              className="progress progress-accent"
              value="70"
              max="100"
            >70%</progress>
            <span>70%</span>
          </div>
        </div>
        {/* row 4 */}
        <div className="flex justify-between gap-8">
          <div className="w-1/2">
            <h3 className="text-xl font-bold">Mongo DB</h3>
            <progress
              className="progress progress-accent"
              value="70"
              max="100"
            ></progress>
            <span>70%</span>
          </div>
          {/* <div className=" w-1/2">
            <h3 className="text-xl font-bold">Express Js</h3>
            <progress
              className="progress progress-accent"
              value="70"
              max="100"
            >70%</progress>
            <span>70%</span>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Skills;
