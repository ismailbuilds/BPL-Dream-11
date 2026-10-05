import bgShadow from "../assets/bg-shadow.png";
import logo from "../assets/logo.png";

const Banner = () => {
  return (
    <section
      className="relative 
       container
        mx-auto 
        mt-5 
        rounded-xl 
        bg-[#111111] 
        bg-cover 
        bg-center 
        bg-no-repeat"
      style={{
        backgroundImage: `url(${bgShadow})`,
      }}
    >
      <div className="relative z-10 flex min-h-[280px] flex-col items-center justify-center px-5 text-center">
        
        {/* Logo */}
        <img
          src={logo}
          alt="Cricket"
          className="mb-3 h-24 w-auto object-contain"
        />

        {/* Title */}
        <h1 className="text-xl font-bold text-white md:text-2xl">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h1>

        {/* Subtitle */}
        <p className="mt-2 text-sm text-gray-400">
          Beyond Boundaries Beyond Limits
        </p>

        {/* Button */}
        <button
          className="
            mt-3 rounded-lg
            border-2 border-lime-400
            bg-lime-300
            px-4 py-1.5
            text-xs font-bold text-black
            shadow-[0_0_10px_rgba(163,230,53,0.4)]
            transition-all duration-200
            hover:scale-105
            hover:bg-lime-200
          "
        >
          Claim Free Credit
        </button>

      </div>
    </section>
  );
};

export default Banner;