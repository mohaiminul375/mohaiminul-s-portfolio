import { Typewriter } from "react-simple-typewriter";
import profile from "../../assets/My-Profile-Photo.png";
import { Slide } from "react-awesome-reveal";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
const Banner = () => {
  return (
    <div className="mx-10 md:mx-20 pt-28 md:pt-16" id="banner">
      <div className="flex-col md:flex md:flex-row justify-between items-center">
        <div>
          <Slide direction="left" triggerOnce={true} duration={3000}>
            <h2 className="text-4xl mb-2">Hi,</h2>
            <h2 className="text-5xl font-inter">Mohaiminul Islam is there</h2>
            <h3 className="text-3xl text-[#55E6A5] mt-3">
              I am a{" "}
              <span style={{ color: "#55E6A5", fontWeight: "" }}>
                {/* Style will be inherited from the parent element */}
                <Typewriter
                  words={[
                    "Front-end Developer",
                    "React Developer",
                    "Next.js Developer",
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
              <RouterLink
                to="https://www.linkedin.com/in/md-mohaiminul-375m"
                target="_blank"
              >
                <FaLinkedin />
              </RouterLink>
              <RouterLink
                to="https://www.facebook.com/mohaiminulweb375"
                target="_blank"
              >
                <FaFacebook />
              </RouterLink>
              <RouterLink to="https://github.com/mohaiminul375" target="_blank">
                <FaGithub />
              </RouterLink>
              <RouterLink to="https://wa.me/+8801533057483" target="_blank">
                <FaWhatsapp />
              </RouterLink>
            </div>
            <div className="mt-5 flex items-center gap-3">
              <ScrollLink
                to="contact"
                className="bg-[#55E6A5] px-3 rounded-md text-black md:py-3 font-medium flex items-center text-lg cursor-pointer"
              >
                Hire Me
              </ScrollLink>
              <a href="https://drive.google.com/file/d/1G15G1Tg1e5O9g_Bi2hwKW_pdXqSCSMv4/view?usp=drive_link">
                <button className="bg-[#55E6A5] px-1 md:px-3 rounded-md text-black md:py-3 font-medium flex items-center text-lg">
                  Download Resume
                  <MdOutlineFileDownload className="text-xl" />
                </button>
              </a>
            </div>
          </Slide>
        </div>
        {/* image */}
        <div className="mt-5 md:mt-0">
          <Slide direction="right" triggerOnce={true} duration={3000}>
            <img
              className="rounded-full border border-[#55E6A5] shadow-lg shadow-[#55E6A5] "
              src={profile}
              alt=""
            />
          </Slide>
        </div>
      </div>
    </div>
  );
};

export default Banner;
