import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <header className="hero min-h-screen font-roboto">
      <div className="hero-content text-center">
        <div className="max-w-lg">
          <h2 className="text-5xl font-bold text-zinc-950">I'm Shakil Ahmed</h2>
          <div className="inline-flex gap-[7px] text-xl font-medium mt-6">
            <span>Google</span>
            <Typewriter
              options={{
                strings: [
                  "Merchant Center Expert",
                  "Shopping Ads Specialist",
                  "Ads Product Feed Expert",
                ],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 50,
              }}
            />
          </div>
          <p className="py-6 flex gap-4 justify-center items-center">
            <a href="https://github.com" target="_blank">
              <FaGithub className="text-2xl cursor-pointer" />
            </a>
            <a href="https://www.linkedin.com" target="_blank">
              <FaLinkedin className="text-2xl cursor-pointer" />
            </a>
            <a href="https://www.facebook.com" target="_blank">
              <FaFacebook className="text-2xl cursor-pointer" />
            </a>
          </p>
          <button className="btn text-zinc-950 border-zinc-950 rounded-full">
            Resume <FiDownload />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Hero;
