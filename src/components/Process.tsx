const steps = [
  { number: 1, title: "Discover", description: "Understand goals and audience", color: "text-primary", glowColor: "bg-primary/10" },
  { number: 2, title: "Plan", description: "Create strategy roadmap", color: "text-skyblue", glowColor: "bg-skyblue/10" },
  { number: 3, title: "Design", description: "Craft engaging visuals", color: "text-purple", glowColor: "bg-purple/10" },
  { number: 4, title: "Develop", description: "Build and optimize experience", color: "text-orange", glowColor: "bg-orange/10" },
  { number: 5, title: "Deliver & Grow", description: "Launch and scale consistently", color: "text-primary", glowColor: "bg-primary/10" },
];

export default function Process() {
  return (
    <section id="process" className="py-24 px-4 md:px-8 bg-white overflow-hidden">
      <div className="max-w-[1320px] mx-auto text-center">
        <span className="inline-block bg-gray-100 text-dark font-bold text-xs px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">
          Our Process
        </span>
        <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-dark mb-16 tracking-tight">
          A Simple 5-Step <br />
          Journey to Success
        </h2>

        <div className="relative flex flex-col md:flex-row justify-between items-start md:items-center gap-10 md:gap-4 mt-12">
          <div className="hidden md:block absolute top-10 left-[10%] right-[10%] h-[2px] border-t-2 border-dashed border-gray-200 -z-10" />
          <div className="block md:hidden absolute left-[39px] top-10 bottom-10 w-[2px] border-l-2 border-dashed border-gray-200 -z-10" />

          {steps.map((step) => (
            <div
              key={step.number}
              className="flex md:flex-col items-center md:items-center gap-6 md:gap-4 w-full md:w-1/5 relative group"
            >
              <div className="w-20 h-20 rounded-full bg-white border border-gray-100 shadow-sm flex items-center justify-center relative group-hover:-translate-y-2 transition-transform duration-300 z-10">
                <div
                  className={`absolute inset-0 rounded-full ${step.glowColor} blur-md opacity-0 group-hover:opacity-100 transition-opacity`}
                />
                <span className={`font-heading text-2xl font-extrabold ${step.color}`}>
                  {step.number}
                </span>
              </div>
              <div className="text-left md:text-center">
                <h4 className="font-heading text-xl font-bold text-dark mb-1">{step.title}</h4>
                <p className="text-sm text-soft">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
