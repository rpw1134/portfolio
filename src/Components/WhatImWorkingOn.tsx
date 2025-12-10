export default function WhatImWorkingOn() {
  return (
    <div className="w-[95vw] h-[95vh] mx-auto my-auto bg-slate rounded-lg">
      <div className="flex h-full items-center justify-between gap-20 p-16">
        <div className="flex w-[40%] flex-col justify-center space-y-10">
          <div className="space-y-6">
            <h1 className="font-garamond text-7xl font-light leading-tight text-white">
              What I'm Working On
            </h1>
            <div className="h-px w-16 bg-white/20" />
          </div>

          <div className="space-y-8">
            <p className="font-garamond text-3xl font-light leading-relaxed text-white/95">
              I'm currently focused on building innovative solutions that make a
              real impact.
            </p>
            <p className="font-lato text-xl font-light leading-relaxed text-white/70">
              From AI-powered applications to scalable web platforms, I'm
              passionate about creating technology that solves real-world
              problems. I'm always exploring new frameworks and methodologies to
              stay at the cutting edge of software development.
            </p>
          </div>

          <div className="flex justify-between items-center pt-2">
            <div className="flex gap-4">
              <span className="font-lato text-sm text-white/50">
                Current Projects
              </span>
              <span className="text-white/30">•</span>
              <span className="font-lato text-sm text-white/50">2025</span>
            </div>
            <button
              onClick={() => (window.location.href = "/projects")}
              className="font-lato text-sm font-light text-white border border-white/50 px-6 py-2.5 rounded-md hover:text-white hover:border-accent/50 hover:shadow-[0_0_15px_rgba(58,186,122,0.3)] focus:outline-none focus-visible:outline-none focus:border-accent/50 focus:shadow-[0_0_15px_rgba(58,186,122,0.3)] transition-all duration-300 cursor-pointer"
            >
              View Projects →
            </button>
          </div>
        </div>

        <div className="w-[55%]">
          <div className="overflow-hidden rounded-lg border border-secondary">
            <img
              src="../../public/rag_dash.png"
              alt="Current Project"
              className=" object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
