import { Zoom } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_pjee3on", "template_26i91xl", form.current, {
        publicKey: "Z0yHKQ7VzH6QrBIbN",
      })
      .then(
        () => {
          toast.success("Message send successfully", {
            style: {
              borderRadius: "10px",
              background: "#333",
              color: "#fff",
            },
          });
          console.log("SUCCESS!");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div className="mt-36 pb-36 px-10 md:px0" id="contact">
      <div className="text-4xl text-center font-bold font-play_write text-[#55E6A5]">
        Contact Me
      </div>
      {/* info */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <Zoom triggerOnce="false" duration={2000}>
          <div className="md:w-80 text-center space-y-1 text-[#55E6A5] rounded-md bg-[#141C27] p-5">
            <h4>Email:</h4>
            <p>mohaiminul375@gmail.com</p>
          </div>
        </Zoom>
        <Zoom triggerOnce="false" duration={2000}>
          <div className="md:w-80 text-center space-y-1 text-[#55E6A5] rounded-md bg-[#141C27] p-5">
            <h4>Phone:</h4>
            <p>+880 1533-057483</p>
          </div>
        </Zoom>
        <Zoom triggerOnce="false" duration={2000}>
          <div className="md:w-80 text-center space-y-1 text-[#55E6A5] rounded-md bg-[#141C27] p-5">
            <h4>LinkedIn:</h4>
            <Link
              target="_blank"
              to="https://www.linkedin.com/in/md-mohaiminul-375m"
            >
              <p className="underline">Mohaiminul islam</p>
            </Link>
          </div>
        </Zoom>
      </div>
      <div className="mt-10">
        {/* contact form */}
        <form ref={form} onSubmit={sendEmail}>
          <div className="flex flex-col md:flex-row gap-5">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="text-[#55E6A5]">Your Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="bg-[#141C27] h-11 rounded-md p-3 input-bordered"
                required
                name="user_name"
              />
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="text-[#55E6A5]">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="bg-[#141C27] h-11 rounded-md p-3 input-bordered"
                required
                name="user_email"
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="label">
              <span className="text-[#55E6A5]">Your Message</span>
            </label>
            <textarea
              className="w-full bg-[#141C27] rounded-md p-3 input-bordered"
              name="message"
              id=""
              placeholder="Your Message"
              rows="5"
            ></textarea>
          </div>
          <button className="mt-3 px-6 py-2 bg-[#55E6A5] rounded-md text-black font font-semibold">
            Submit
          </button>
        </form>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default Contact;
