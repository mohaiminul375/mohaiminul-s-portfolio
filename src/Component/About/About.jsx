import { Slide } from "react-awesome-reveal";
import mern from "../../assets/MERN.png";
import 'animate.css';
const About = () => {
  return (
    <div className="mt-36">
      <div className="text-4xl text-center font-bold font-play_write text-[#55E6A5]">
        About Me
      </div>
      <div className="mt-10 flex justify-between items-center">
    
        <div className="w-1/2">
        <Slide direction="right" triggerOnce={true} duration={2000}>
          <h2 className="text-3xl mb-3">Hi There,</h2>
          <h5 className="text-xl">
            This Mohaiminul Islam. Front-end Web Developer React with a strong passion
            for coding. But My ultimate aspiration is to evolve into a Full Stack Web Development proficient in the MERN stack. Driven and results-oriented, I am eager to contribute
            and demonstrate my skills through customized solutions, and
            validated projects, I am Always ready to prove myself through
            dedicated and impactful work
          </h5>
          <div className="mt-10 grid grid-cols-2 gap-5">
            <div>
              <h2 className="text-2xl font-bold mb-2">Name:</h2>
              <p className="text-xl">Mohaiminul Islam</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-2">Email:</h2>
              <p className="text-xl">mohaiminul375@gmail.com</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-2">Phone:</h2>
              <p className="text-xl">+8801533057483</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-2">GitHub:</h2>
              <p className="text-base">https://github.com/mohaiminul375</p>
            </div>
          </div>
          </Slide>
        </div>
        
        <div className="w-1/2 flex justify-center">
        <Slide direction="left" triggerOnce={true} duration={2000}>
          <img src={mern} alt="" />
          </Slide>
        </div>
      </div>
    </div>
  );
};

export default About;
