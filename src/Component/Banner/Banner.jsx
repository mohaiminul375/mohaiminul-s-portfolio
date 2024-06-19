import { Typewriter } from "react-simple-typewriter";
import profile from "../../assets/My-Profile-Photo.png";
import { Slide } from "react-awesome-reveal";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div className="px-20">
      <div className="flex-col md:flex md:flex-row justify-between items-center">
        <div>
          <Slide direction="left" triggerOnce={true} delay={1000}>
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
            <div className="mt-5 flex items-center text-3xl text-[#55E6A5] justify-start gap-5">
              <Link to='https://www.linkedin.com/in/md-mohaiminul-375m' target="_blank">
                <FaLinkedin />
              </Link>
              <Link  to='https://www.facebook.com/mohaiminulweb375' target="_blank">
              <FaFacebook />
              </Link>
              <Link  to='https://github.com/mohaiminul375' target="_blank">
              <FaGithub />
              </Link>
            </div>
            <div className="mt-5 flex items-center gap-3">
              <button className="bg-[#55E6A5] px-3 rounded-md text-black py-3 font-medium flex items-center text-lg">
                Hire Me
              </button>
              <a href="https://drive.google.com/uc?export=download&id=1G15G1Tg1e5O9g_Bi2hwKW_pdXqSCSMv4">
                <button className="bg-[#55E6A5] px-3 rounded-md text-black py-3 font-medium flex items-center text-lg">
                  Download Resume
                  <MdOutlineFileDownload className="text-xl" />
                </button>
              </a>
            </div>
          </Slide>
        </div>
        {/* image */}
        <div>
          <Slide direction="right" triggerOnce={true}>
            <img src={profile} alt="" />
          </Slide>
        </div>
      </div>
    </div>
  );
};

export default Banner;
