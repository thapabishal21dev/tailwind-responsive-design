import "./App.css";
import Commandline from "./images/commandline.svg";
import embedded from "./images/embedded.svg";
import networking from "./images/networking.svg";
import webassembly from "./images/webassembly.svg";

import { FaTwitter, FaGithub, FaDiscord, FaYoutube } from "react-icons/fa";

function App() {
  return (
    <div>
      <div
        className="grid grid-cols-2 sm:grid-cols-1 sa:grid-cols-1
       bg-slate-100 p-14"
      >
        <div className="company">
          <h1 className=" text-[6rem] font-extrabold ">Rust</h1>
          <p className=" text-[2.15rem] font-semibold break-words  max-w-[600px]">
            A language empowering everyone to build reliable and efficient
            software.
          </p>
        </div>
        <div className="button flex flex-col">
          <button
            className=" bg-yellow-400 text-black font-bold pl-10 px-10 pb-3 pt-3 text-[2rem] rounded mt-10 max-w-[300px] ml-auto mx-auto hover:outline outline-1 sa:p-2 "
            type="button"
          >
            Get Started
          </button>
          <p className=" text-[2rem] text-[#4299bf] underline font-semibold mx-auto ml-auto mt-3 ">
            Version 1.67.1
          </p>
        </div>
      </div>

      <div className="why-rust bg-[#0b7261] text-white p-14 sm:p-5 sa:p-3 ">
        <div className="">
          <h1 className="text-[3rem] font-bold pl-30">Why Rust?</h1>
        </div>
        <div className=" grid grid-cols-3  md:grid-cols-2 sm:grid-cols-1 sa:grid-cols-1 sa:p-3">
          <div className=" p-10 max-w-[450px] sm:p-0 sm:mb-10">
            <h3 className=" text-[2.25rem] font-bold">Performance</h3>
            <p className=" text-[1.5rem]">
              Rust is blazingly fast and memory-efficient: with no runtime or
              garbage collector, it can power performance-critical services, run
              on embedded devices, and easily integrate with other languages.
            </p>
          </div>
          <div className=" p-10 max-w-[450px] sm:p-0 sm:mb-10">
            <h3 className=" text-[2.25rem] font-bold">Reliability</h3>
            <p className=" text-[1.5rem]">
              Rust’s rich type system and ownership model guarantee
              memory-safety and thread-safety — enabling you to eliminate many
              classes of bugs at compile-time.
            </p>
          </div>
          <div className=" p-10 max-w-[450px] sm:p-0 sm:mb-10">
            <h3 className=" text-[2.25rem] font-bold">Productivity</h3>
            <p className=" text-[1.5rem]">
              ust has great documentation, a friendly compiler with useful error
              messages, and top-notch tooling — an integrated package manager
              and build tool, smart multi-editor support with auto-completion
              and type inspections, an auto-formatter, and more.
            </p>
          </div>
        </div>
      </div>
      <div className=" bg-[#2e2459] text-white p-14 grid sm:p-3 ">
        <div className=" mb-10">
          <h1 className="text-[3rem] font-bold sm:p-3">Build it in Rust</h1>
          <p className="text-[1.5rem] sm:p-3">
            In 2018, the Rust community decided to improve the programming
            experience for a few distinct domains (see the 2018 roadmap). For
            these, you can find many high-quality crates and some awesome guides
            on how to get started.
          </p>
        </div>
        <div className=" grid grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 sa:grid-cols-1 ">
          <div className=" text-center p-3 grid sm:grid-cols-1  sm:p-1">
            <div className="img">
              <img
                className=" max-w-[6rem] sm:grid-span-[100px] mx-auto ml-auto mb-2"
                src={Commandline}
              />
            </div>
            <div className="">
              <h2 className=" text-[2rem] font-bold text-center">
                Command Line
              </h2>
              <p className=" text-[1.25rem]  text-left h-[200px] sm:h-fit">
                Whip up a CLI tool quickly with Rust’s robust ecosystem. Rust
                helps you maintain your app with confidence and distribute it
                with ease.
              </p>
              <button
                className=" bg-[#a72145] font-bold  text-[1rem] rounded mt-5 mb-15  hover:outline outline-1 text-center p-2 w-full"
                type="button"
              >
                BUILDING TOOLS
              </button>
            </div>
          </div>
          <div className=" text-center p-3 sm:grid-cols-2">
            <div className="img">
              {" "}
              <img
                className=" max-w-[6rem] mx-auto ml-auto mb-2"
                src={webassembly}
              />
            </div>
            <div>
              <h2 className=" text-[2rem] font-bold text-center">
                WebAssembly
              </h2>
              <p className=" text-[1.25rem]  text-left h-[200px] sm:h-fit">
                Use Rust to supercharge your JavaScript, one module at a time.
                Publish to npm, bundle with webpack, and you’re off to the
                races.
              </p>
              <button
                className=" bg-[#a72145] font-bold  text-[1rem] rounded mt-5 mb-15  hover:outline outline-1 text-center p-2 w-full"
                type="button"
              >
                WRITING WEB APPS
              </button>
            </div>
          </div>
          <div className=" text-center p-3 sm:grid-cols-2">
            <div className="img">
              {" "}
              <img
                className=" max-w-[6rem] mx-auto ml-auto mb-2"
                src={networking}
              />
            </div>
            <div>
              <h2 className=" text-[2rem] font-bold text-center">Networking</h2>
              <p className=" text-[1.25rem]  text-left h-[200px] sm:h-fit">
                Predictable performance. Tiny resource footprint. Rock-solid
                reliability. Rust is great for network services.
              </p>
              <button
                className=" bg-[#a72145] font-bold  text-[1rem] rounded mt-5 mb-15  hover:outline outline-1 text-center p-2 w-full"
                type="button"
              >
                WORKING ON SERVERS
              </button>
            </div>
          </div>
          <div className="p-3 sm:grid-cols-2">
            <div className="img">
              <img
                className=" max-w-[6rem] mx-auto ml-auto mb-2"
                src={embedded}
              />
            </div>
            <div>
              <h2 className=" text-[2rem] font-bold text-center">Embedded</h2>
              <p className=" text-[1.25rem]  text-left h-[200px] sm:h-fit">
                Targeting low-resource devices? Need low-level control without
                giving up high-level conveniences? Rust has you covered.
              </p>
              <button
                className=" bg-[#a72145] font-bold  text-[1rem] rounded mt-5 mb-15  hover:outline outline-1 text-center p-2 w-full"
                type="button"
              >
                STARTING WITH EMBEDDED
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-white p-14">
        <div>
          <h1 className=" text-[3rem] font-bold">Thanks</h1>
          <p className=" text-[1.5rem] mb-5 font-medium">
            Rust would not exist without the generous contributions of time,
            work, and resources from individuals and companies. We are very
            grateful for the support!
          </p>
          <div className=" grid grid-cols-2 gap-3 sa:grid-cols-1 sm:grid-cols-1 ">
            <div>
              <h1
                className=" text-[2rem] font-bold
              "
              >
                Individuals
              </h1>
              <p className=" text-[1.2rem]">
                Rust is a community project and is very thankful for the many
                community contributions it receives.
              </p>
              <button
                className=" bg-[#e9ab02] text-white font-bold  text-[1rem] rounded mt-5 mb-15  hover:outline outline-1 text-center p-2 w-full"
                type="button"
              >
                SEE INDIVIDUAL CONTRIBUTIONS
              </button>
            </div>
            <div>
              <h1
                className=" text-[2rem] font-bold
              "
              >
                Corporate sponsors
              </h1>
              <p className=" text-[1.2rem]">
                The Rust project receives support from companies through the
                donation of infrastructure.
              </p>
              <button
                className=" bg-[#e9ab02] text-white font-bold  text-[1rem] rounded mt-5 mb-15  hover:outline outline-1 text-center p-2 w-full"
                type="button"
              >
                SEE SPONSORS
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-[#a72145] text-white grid grid-row  p-14 sm:p-2">
        <div className="">
          <h1 className="text-[3rem] font-bold sm:p-3">Get involved</h1>
        </div>
        <div className="">
          <div className=" grid grid-cols-2 sm:grid-cols-1 sa:grid-cols-1">
            <div className=" p-2">
              <h1 className="  text-[2rem] font-bold">Read Rust</h1>
              <p className=" text-[1.2rem] mt-5 mb-5 mr-2">
                We love documentation! Take a look at the books available
                online, as well as key blog posts and user guides.
              </p>
              <button
                className=" bg-[#2e2459] font-bold  text-[1rem] rounded mt-5 mb-15  hover:outline outline-1 text-center p-2 w-full"
                type="button"
              >
                READ THE BOOK
              </button>
            </div>
            <div className=" p-2">
              <h1 className="  text-[2rem] font-bold">Watch Rust</h1>
              <p className=" text-[1.2rem] mt-5 mb-5 ml-2">
                The Rust community has a dedicated YouTube channel collecting a
                huge range of presentations and tutorials.
              </p>
              <button
                className=" bg-[#2e2459] font-bold  text-[1rem] rounded mt-5 mb-15  hover:outline outline-1 text-center p-2 w-full"
                type="button"
              >
                WATCH THE VEDIOS
              </button>
            </div>
          </div>
          <div className=" p-2 grid col-span-2 ">
            <h1 className=" text-[2rem] font-bold">Read Rust</h1>
            <p className=" text-[1.2rem] mt-5 mb-5">
              Rust is truly a community effort, and we welcome contribution from
              hobbyists and production users, from newcomers and seasoned
              professionals. Come help us make the Rust experience even better!
            </p>
            <button
              className=" bg-[#2e2459] font-bold  text-[1rem] rounded mt-5 mb-15  hover:outline outline-1 text-center p-2 w-full"
              type="button"
            >
              READ CONTRIBUTION GUIDE
            </button>
          </div>
        </div>
      </div>
      <div className="footer bg-[#2a3439] text-white p-14 ">
        <div className=" grid grid-cols-3 sa:grid-cols-1 sm:grid-cols-2 sa:p-3">
          <div className=" p-3">
            <h1 className=" font-bold text-[1.5rem] mb-10">Get help!</h1>
            <div
              className=" flex flex-col gap-5
            "
            >
              <a className=" text-[#ffc832] text-[1.2rem] " href="#">
                Documentation
              </a>
              <a className=" text-[#ffc832] text-[1.2rem]" href="#">
                Rust Forge (Contributor Documentation)
              </a>
              <a className=" text-[#ffc832] text-[1.2rem]" href="#">
                Ask a Question on the Users Forum
              </a>
              <select
                className=" text-[black] max-w-[160px] rounded h-8"
                name="language"
                id="language"
              >
                <option value="eng">English</option>
                <option value="spa">Spanish</option>
                <option value="jap">Japanese</option>
                <option value="kor">Korean</option>
              </select>
            </div>
          </div>
          <div className=" p-3">
            <h1 className=" font-bold text-[1.5rem] mb-10">
              Terms and policies
            </h1>
            <div
              className=" flex flex-col gap-5
            "
            >
              <a className=" text-[#ffc832] text-[1.2rem] " href="#">
                Code of conduct
              </a>
              <a className=" text-[#ffc832] text-[1.2rem]" href="#">
                Licenses
              </a>
              <a className=" text-[#ffc832] text-[1.2rem]" href="#">
                Logo Policy and Media Guide
              </a>
              <a className=" text-[#ffc832] text-[1.2rem]" href="#">
                Securities Disclosures
              </a>{" "}
              <a className=" text-[#ffc832] text-[1.2rem]" href="#">
                Privacy Notice
              </a>
              <a className=" text-[#ffc832] text-[1.2rem]" href="#">
                All Polices
              </a>
            </div>
          </div>
          <div>
            <h1 className=" font-bold text-[1.5rem] mb-10 p-3">Social</h1>
            <div
              className=" flex flex-row gap-5 cursor-pointer p-3
            "
            >
              <FaTwitter className=" text-[40px] hover:text-[#ffb300]" />
              <FaYoutube className=" text-[40px]  hover:text-[#ffb300]" />
              <FaDiscord className=" text-[40px]  hover:text-[#ffb300]" />
              <FaGithub className=" text-[40px]  hover:text-[#ffb300]" />
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default App;

// #ffc832
