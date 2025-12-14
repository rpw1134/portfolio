export default function MyGoals() {
  return (
    <div className="w-[95vw] h-[95vh] mx-auto my-auto bg-slate rounded-lg">
      <div className="flex h-full items-center justify-between gap-20 p-16">
        <div className="w-[40%]">
          <div className="overflow-hidden rounded-lg">
            <img
              src="../../public/Solutions-of-AI-in-DevOps.png"
              alt="AI Devops"
              className="h-[70vh] object-cover shadow-2xl"
              style={{
                filter: "contrast(1.05) brightness(1.02)",
              }}
            />
          </div>
        </div>

        <div className="flex w-[55%] flex-col justify-center space-y-10">
          <div className="space-y-6">
            <h1 className="font-garamond text-7xl font-light leading-tight text-white">
              My Goals
            </h1>
            <div className="h-px w-16 bg-white/20" />
          </div>

          <div className="space-y-8">
            <p className="font-garamond text-3xl font-light leading-relaxed text-white/95">
              Build novel, durable software that makes a positive difference in
              the day to day lives of its users.
            </p>
            <p className="font-lato text-xl font-light leading-relaxed text-white/70">
              I aim to specialize in AI and ML systems and DevOps, building
              robust, scallable, and impactful applications. Whether its working
              for a startup, large enterprise, or my own ventures, I want to
              create products that users love and that solve real problems.
            </p>
          </div>

          <div className="flex justify-between items-center pt-2">
            <div className="flex gap-4">
              <span className="font-lato text-sm text-white/50">
                Systems & Reliability
              </span>
              <span className="text-white/30">•</span>
              <span className="font-lato text-sm text-white/50">
                Product Impact
              </span>
            </div>
            <button
              onClick={() => (window.location.href = "/aspirations")}
              className="font-lato text-sm font-light text-white border border-white/50 px-6 py-2.5 rounded-md hover:text-white hover:border-accent/50 hover:shadow-[0_0_15px_rgba(58,186,122,0.3)] focus:outline-none focus-visible:outline-none focus:border-accent/50 focus:shadow-[0_0_15px_rgba(58,186,122,0.3)] transition-all duration-300 cursor-pointer"
            >
              View Aspirations →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
