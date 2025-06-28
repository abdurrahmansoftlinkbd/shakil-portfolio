import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";

const Hero = () => {
  return (
    <header className="hero font-roboto">
      <div className="hero-content text-center">
        <div className="max-w-lg">
          <h2 className="text-5xl font-bold text-zinc-950">I'm Shakil Ahmed</h2>
          <p className="text-xl font-medium mt-6">
            Google Merchant Center Expert
          </p>
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
