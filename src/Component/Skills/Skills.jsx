import { Zoom } from "react-awesome-reveal";
import html from "../../../src/assets/tech-logo/html-5.svg";
import css from "../../../src/assets/tech-logo/css-3.svg";
import tailwind from "../../../src/assets/tech-logo/tailwindcss_icon.png"; // fix needed
import js from "../../../src/assets/tech-logo/javascript.svg";
import typescript from "../../../src/assets/tech-logo/typescript.svg";
import react from "../../../src/assets/tech-logo/reactjs.svg";
import next_js from "../../../src/assets/tech-logo/next_js circul.svg";
import node from "../../../src/assets/tech-logo/node_js.svg";
import express from "../../../src/assets/tech-logo/expressjs.png";
import mongo_DB from "../../../src/assets/tech-logo/mongodb.svg";
import vs_code from "../../../src/assets/tech-logo/vs-code.svg";
import vercel from "../../../src/assets/tech-logo/vercel.png";
import netlify from "../../../src/assets/tech-logo/netlify.svg";
import github from "../../../src/assets/tech-logo/github.png";
import jwt from "../../../src/assets/tech-logo/jwt.png";
import figma from "../../../src/assets/tech-logo/figma.svg";
import vite from "../../../src/assets/tech-logo/vite.svg";
import firebase from "../../../src/assets/tech-logo/firebase.svg";
const Skills = () => {
  return (
    <div className="mt-36" id="skills">
      <div className="text-4xl text-center font-bold font-play_write text-[#55E6A5]">
        My Skills
      </div>
      <div>
        {/* row -1 Front-End */}
        <div className="mt-10">
          <h2 className="text-xl mb-5 underline text-[#55E6A5] font-bold font-play_write">
            Front-End
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 xl:grid-cols-7 gap-16">
            <div className="bg-[#141C27] p-3 rounded-md flex flex-col justify-center items-center">
              <img
                height={40}
                width={40}
                src={html}
                alt="html"
                className="transition-transform duration-500 hover:rotate-[360deg]"
              />
              <h5 className="text-center mt-3">HTML</h5>
            </div>
            <div className="bg-[#141C27] p-3 rounded-md flex flex-col justify-center items-center">
              <img
                height={40}
                width={40}
                src={css}
                alt="css"
                className="transition-transform duration-500 hover:rotate-[360deg]"
              />
              <h5 className="text-center mt-3">CSS</h5>
            </div>
            <div className="bg-[#141C27] flex flex-col justify-center items-center p-3 rounded-md">
              <img
                height={40}
                width={40}
                src={tailwind}
                alt="tailwind"
                className="transition-transform duration-500 hover:rotate-[360deg]"
              />
              <h5 className="text-center mt-3">
                Tailwind <br /> CSS
              </h5>
            </div>
            <div className="bg-[#141C27] p-3 rounded-md flex flex-col items-center justify-center">
              <img
                height={40}
                width={40}
                src={js}
                alt="javascript"
                className="transition-transform duration-500 hover:rotate-[360deg]"
              />
              <h5 className="text-center mt-3">Javascript</h5>
            </div>
            <div className="bg-[#141C27] p-3 rounded-md flex flex-col items-center justify-center">
              <img
                height={40}
                width={40}
                src={typescript}
                alt="typescript"
                className="transition-transform duration-500 hover:rotate-[360deg]"
              />
              <h5 className="text-center mt-3">Typescript</h5>
            </div>
            <div className="bg-[#141C27] p-3 rounded-md flex flex-col items-center justify-center">
              <img
                height={40}
                width={40}
                src={react}
                alt="react"
                className="transition-transform duration-500 hover:rotate-[360deg]"
              />
              <h5 className="text-center mt-3">React</h5>
            </div>
            <div className="bg-[#141C27] p-3 rounded-md flex flex-col items-center justify-center">
              <img
                height={40}
                width={40}
                src={next_js}
                alt="next.Js"
                className="transition-transform duration-500 hover:rotate-[360deg]"
              />
              <h5 className="text-center mt-3">Next.Js</h5>
            </div>
          </div>
        </div>
        {/* row -2  Backend*/}
        <div className="mt-10">
          <h2 className="text-xl mb-5 underline text-[#55E6A5] font-bold font-play_write">
            Back - End
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 xl:grid-cols-7 gap-16">
            <div className="bg-[#141C27] p-3 rounded-md flex flex-col items-center justify-center">
              <img
                height={40}
                width={40}
                src={node}
                alt="node"
                className="transition-transform duration-500 hover:rotate-[360deg]"
              />
              <h5 className="text-center mt-3">Node.Js</h5>
            </div>
            <div className="bg-[#141C27] p-3 rounded-md flex flex-col items-center justify-center">
              <img
                height={40}
                width={40}
                src={express}
                alt="express"
                className="transition-transform duration-500 hover:rotate-[360deg]"
              />
              <h5 className="text-center mt-3">Express.Js</h5>
            </div>
            <div className="bg-[#141C27] p-3 rounded-md flex flex-col items-center">
              <img
                height={40}
                width={40}
                src={mongo_DB}
                alt="mongo_db"
                className="transition-transform duration-500 hover:rotate-[360deg]"
              />
              <h5 className="text-center mt-3">MongoDB</h5>
            </div>
            <div className="bg-[#141C27] p-3 rounded-md flex flex-col items-center">
              <img
                height={40}
                width={40}
                src={jwt}
                alt="jwt"
                className="transition-transform duration-500 hover:rotate-[360deg]"
              />
              <h5 className="text-center mt-3">JWT</h5>
            </div>
          </div>
        </div>
        {/* row -3 */}
        <div className="my-10">
          <h2 className="text-xl mb-5 underline text-[#55E6A5] font-bold font-play_write">
            Tools and Others
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 xl:grid-cols-7 gap-16">
            <div className="bg-[#141C27] p-3 rounded-md flex flex-col items-center justify-center">
              <img
                height={40}
                width={40}
                src={vs_code}
                alt="vs_code"
                className="transition-transform duration-500 hover:rotate-[360deg]"
              />
              <h5 className="text-center mt-3">VS Code</h5>
            </div>
            <div className="bg-[#141C27] p-3 rounded-md flex flex-col items-center justify-center">
              <img
                height={90}
                width={80}
                src={github}
                alt="github"
                className="transition-transform duration-500 hover:rotate-[360deg]"
              />
              <h5 className="text-center mt-3">Github</h5>
            </div>
            <div className="bg-[#141C27] p-3 rounded-md flex flex-col items-center justify-center">
              <img
                height={50}
                width={90}
                src={netlify}
                alt="vercel"
                className="transition-transform duration-500 hover:rotate-[360deg]"
              />
              <h5 className="text-center mt-3">Netlify</h5>
            </div>
            <div className="bg-[#141C27] p-3 rounded-md flex flex-col items-center justify-center">
              <img
                height={50}
                width={80}
                src={vercel}
                alt="vercel"
                className="transition-transform duration-500 hover:rotate-[360deg]"
              />
              <h5 className="text-center mt-3">Vercel</h5>
            </div>
            <div className="bg-[#141C27] p-3 rounded-md flex flex-col items-center justify-center">
              <img
                height={40}
                width={40}
                src={vite}
                alt="vite"
                className="transition-transform duration-500 hover:rotate-[360deg]"
              />
              <h5 className="text-center mt-3">Vite</h5>
            </div>
            <div className="bg-[#141C27] p-3 rounded-md flex flex-col items-center justify-center">
              <img
                height={50}
                width={40}
                src={firebase}
                alt="firebase"
                className="transition-transform duration-500 hover:rotate-[360deg]"
              />
              <h5 className="text-center mt-3">Firebase</h5>
            </div>

            <div className="bg-[#141C27] p-3 rounded-md flex flex-col items-center justify-center">
              <img
                height={40}
                width={40}
                src={figma}
                alt="figma"
                className="transition-transform duration-500 hover:rotate-[360deg]"
              />
              <h5 className="text-center mt-3">Figma</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
