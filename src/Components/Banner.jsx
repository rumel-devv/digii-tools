import BannerImage from "../assets/banner.png";
import grImage from "../assets/gr.png"
import demoImg from "../assets/Play.png"

const Banner = () => {
  return (
    <div className="relative min-h-162.5 flex items-center overflow-hidden mt-10">
      <div className=" mx-auto flex flex-col-reverse md:flex-row gap-4 md:gap-10 items-center relative z-10 ">
        {/*Banner Left */}
        <div className="space-y-2.5 md:space-y-4 text-center md:text-left p-3">
          <div className="inline-flex items-center gap-2 bg-[#E1E7FF] border  text-[#6C29F8] text-sm font-medium px-5 py-2 rounded-full">
           <img src={grImage}></img>New: AI-Powered Tools Available
          </div>
          <h1 className="text-2xl lg:text-5xl font-bold leading-tight tracking-tighter ">
           Supercharge Your
            <br />
            <span className="   text-[#6C29F8] bg-clip-text ">
             Digital Workflow
            </span>
          </h1>

          <p className="text-lg text-zinc-500 max-w-md">
           Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.Explore Products</p>

          <div className="flex flex-wrap gap-3 pt-3 ">
            <button className=" px-4 py-2 rounded-2xl font-semibold text-md shadow-xl flex items-center gap-3  text-white bg-[#801EF8]"> Get Unlimited Access  </button>
            <button className=" px-4 py-2 rounded-2xl font-semibold text-md shadow-xl flex items-center gap-1 text-[#801EF8] border border-[#801EF8]"> 
              <img src={demoImg} alt="Demo Image"></img>Watch demo</button>
          </div>
        </div>

        {/*Banner Right */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative">
            <img
              className="relative  w-auto object-contain drop-shadow-2xl rounded-3xl"
              src={BannerImage}
              alt="AI Models Banner"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;