import { Typewriter } from "react-simple-typewriter";
import profile from "../../assets/My-Profile-Photo.png";
import { Slide } from "react-awesome-reveal";
const Banner = () => {
  return (
    <div className="px-20">
      <div className="flex-col md:flex md:flex-row justify-between items-center">
        <div>
          <Slide direction="left" triggerOnce={false} delay={1000}>
            <h2 className="text-4xl mb-2">Hi,</h2>
            <h2 className="text-5xl font-inter">Mohaiminul Islam is there</h2>
            <h3 className="text-3xl text-[#55E6A5] mt-3">
              I am a{" "}
              <span style={{ color: "#55E6A5", fontWeight: "" }}>
                {/* Style will be inherited from the parent element */}
                <Typewriter
                  words={[
                    " Front-end Developer",
                    "React Developer",
                    "Junior MREN Stack Developer",
                  ]}
                  loop={5}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                  // onLoopDone={handleDone}
                  // onType={handleType}
                />
              </span>
            </h3>
          </Slide>
        </div>
        {/* image */}
        <div>
          <Slide direction="right" triggerOnce={false}>
            <img src={profile} alt="" />
          </Slide>
        </div>
      </div>
    </div>
  );
};

export default Banner;
