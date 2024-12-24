import { Zoom } from "react-awesome-reveal";

const Skills = () => {
  return (
    <div className="mt-36" id="skills">
      <div className="text-4xl text-center font-bold font-play_write text-[#55E6A5]">
        MY Skills
      </div>
      <div className="mt-10 space-y-5 px-10 md:px-0">
        {/* row 1 */}
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="md:w-1/2">
            <Zoom triggerOnce="false">
              <h3 className="text-xl font-bold">HTML</h3>
              <progress
                className="progress progress-accent"
                value="90"
                max="100"
              ></progress>
              <span>90%</span>
            </Zoom>
          </div>
          <div className=" md:w-1/2">
            <Zoom triggerOnce="false">
              <h3 className="text-xl font-bold">CSS</h3>
              <progress
                className="progress progress-accent"
                value="70"
                max="100"
              ></progress>
              <span>70%</span>
            </Zoom>
          </div>
        </div>
        {/* row 2 */}
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="md:w-1/2">
            <Zoom triggerOnce="false">
              <h3 className="text-xl font-bold">Tailwind Css</h3>
              <progress
                className="progress progress-accent"
                value="70"
                max="100"
              ></progress>
              <span>70%</span>
            </Zoom>
          </div>
          <div className=" md:w-1/2">
            <Zoom triggerOnce="false">
              <h3 className="text-xl font-bold">Bootstrap</h3>
              <progress
                className="progress progress-accent"
                value="70"
                max="100"
              ></progress>
              <span>70%</span>
            </Zoom>
          </div>
        </div>
        {/* row3 */}
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="md:w-1/2">
            <Zoom triggerOnce="false">
              <h3 className="text-xl font-bold">ShadCn UI</h3>
              <progress
                className="progress progress-accent"
                value="70"
                max="100"
              ></progress>
              <span>70%</span>
            </Zoom>
          </div>
          <div className="md:w-1/2">
            <Zoom triggerOnce="false">
              <h3 className="text-xl font-bold">Javascript</h3>
              <progress
                className="progress progress-accent"
                value="70"
                max="100"
              ></progress>
              <span>70%</span>
            </Zoom>
          </div>
        </div>
        {/* row 3 */}
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className=" md:w-1/2">
            <Zoom triggerOnce="false">
              <h3 className="text-xl font-bold">React</h3>
              <progress
                className="progress progress-accent"
                value="80"
                max="100"
              ></progress>
              <span>80%</span>
            </Zoom>
          </div>
          <div className=" md:w-1/2">
            <Zoom triggerOnce="false">
              <h3 className="text-xl font-bold">Next.Js</h3>
              <progress
                className="progress progress-accent"
                value="70"
                max="100"
              ></progress>
              <span>70%</span>
            </Zoom>
          </div>
        </div>
        {/* row 4 */}
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="md:w-1/2">
            <Zoom triggerOnce="false">
              <h3 className="text-xl font-bold">Typescript</h3>
              <progress
                className="progress progress-accent"
                value="50"
                max="100"
              ></progress>
              <span>50%</span>
            </Zoom>
          </div>
          <div className="md:w-1/2">
            <Zoom triggerOnce="false">
              <h3 className="text-xl font-bold">Node Js</h3>
              <progress
                className="progress progress-accent"
                value="40"
                max="100"
              ></progress>
              <span>40%</span>
            </Zoom>
          </div>
        </div>
        {/* row 4 */}
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className=" md:w-1/2">
            <h3 className="text-xl font-bold">Express Js</h3>
            <progress className="progress progress-accent" value="40" max="100">
           
            </progress>
            <span>40%</span>
          </div>
          <div className="md:w-1/2">
            <Zoom triggerOnce="false">
              <h3 className="text-xl font-bold">Mongo DB</h3>
              <progress
                className="progress progress-accent"
                value="40"
                max="100"
              ></progress>
              <span>40%</span>
            </Zoom>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
