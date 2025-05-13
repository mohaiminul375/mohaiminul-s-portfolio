import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" bg-[#141C27]">
      <div className=" p-10">
        <div className="flex justify-center items-center">
          <div className="text-center">
            <h2 className="text-3xl text-[#55E6A5] font-play_write mb-2">
              Mohaiminul Islam
            </h2>
            <p className="text-[#55E6A5]">
              Hi Thanks for visit my website. That&apos;s All of you need to
              know about me And You Can connect with me social media.
            </p>
          </div>
        </div>
        {/* ICONS */}
        <div className="mt-5 flex items-center text-3xl text-[#55E6A5] justify-center gap-5">
          <Link
            to="https://www.linkedin.com/in/md-mohaiminul-375m"
            target="_blank"
          >
            <FaLinkedin />
          </Link>
          <Link to="https://www.facebook.com/mohaiminulweb375" target="_blank">
            <FaFacebook />
          </Link>
          <Link to="https://github.com/mohaiminul375" target="_blank">
            <FaGithub />
          </Link>
          <Link to="https://wa.me/+8801533057483" target="_blank">
            <FaWhatsapp />
          </Link>
        </div>
        <div>
          <h4 className="text-[#55E6A5] text-center mt-3">
            © All Rights and reserved by Mohaiminul Islam 2024-2025
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Footer;
