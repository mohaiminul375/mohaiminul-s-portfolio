import { Slide } from "react-awesome-reveal";
import mern from "../../assets/MERN_2.png";

const About = () => {
  return (
    <div className="mt-36" id="about">
      <div className="text-4xl text-center font-bold font-play_write text-[#55E6A5]">
        About Me
      </div>
      <div className="mt-10 flex flex-col md:flex-row justify-between items-center">
        <div className="md:w-1/2 px-8 md:px-0">
          <Slide direction="right" triggerOnce={true} duration={2000}>
            <h2 className="text-3xl mb-3">Hi There,</h2>
            <h5 className="text-xl">
              This Mohaiminul Islam. Front-End Web Developer React & Next.Js
              with a strong passion for coding. my long-term goal is to become a
              Full Stack Web Developer, specializing in the MERN stack. Though I
              don't come from an IT background, my enthusiasm drives me to
              continuously learn and improve, providing the best services to my
              clients. I also have experience in social work through past
              volunteer roles, where I developed strong interpersonal skills
              that continue to benefit my professional journey.
            </h5>
            <h5 className="text-xl mt-5">
              For me, coding isn't just a career it's a passion, and I’m
              dedicated to making a positive impact both in the tech world and
              my community..
            </h5>
            <div className="mt-10 grid md:grid-cols-2 gap-5">
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

        <div className="mt-5 md:mt-0 md:w-1/2 flex justify-center">
          <Slide direction="left" triggerOnce={true} duration={2000}>
            <img src={mern} alt="" className="bg-white rounded-full" />
          </Slide>
        </div>
      </div>
    </div>
  );
};

export default About;
