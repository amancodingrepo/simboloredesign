import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    image:
      "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Branding & Packaging",
    name: "Nutriyo",
    color: "text-primary",
    hoverColor: "group-hover:text-primary",
  },
  {
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Social Media Campaign",
    name: "Travelista",
    color: "text-skyblue",
    hoverColor: "group-hover:text-skyblue",
  },
  {
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Website Design",
    name: "GreenBuild",
    color: "text-purple",
    hoverColor: "group-hover:text-purple",
  },
  {
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Video Ad Campaign",
    name: "FreshSip",
    color: "text-orange",
    hoverColor: "group-hover:text-orange",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 px-4 md:px-8">
      <div className="max-w-[1320px] mx-auto bg-gradient-to-br from-[#eaf4ff] to-[#f2fcf8] rounded-[40px] p-8 md:p-16 shadow-inner relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/40 blur-3xl rounded-full" />

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 relative z-10">
          <div className="max-w-xl">
            <span className="inline-block bg-white text-primary font-bold text-xs px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider shadow-sm">
              Our Work
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-dark mb-4 tracking-tight">
              Work That Speaks <br />
              For Itself
            </h2>
            <p className="text-soft text-lg">
              A glimpse of creativity, strategy, and results we&apos;ve delivered.
            </p>
          </div>
          <div className="flex gap-4 items-center">
            <button className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-dark hover:text-primary shadow-sm hover:shadow-md transition-all">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-dark hover:text-primary shadow-sm hover:shadow-md transition-all">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <Link
              href="#"
              className="hidden lg:flex bg-dark hover:bg-black text-white px-6 py-3 rounded-full font-medium transition-all ml-4"
            >
              View All Projects
            </Link>
          </div>
        </div>

        <div className="flex gap-6 overflow-x-auto snap-x hide-scrollbar pb-8 relative z-10">
          {projects.map((project) => (
            <div
              key={project.name}
              className="min-w-[320px] md:min-w-[450px] snap-center group cursor-pointer"
            >
              <div className="rounded-[24px] overflow-hidden mb-5 relative shadow-sm group-hover:shadow-soft transition-all duration-500">
                <Image
                  src={project.image}
                  alt={project.name}
                  width={800}
                  height={300}
                  className="w-full h-[300px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="px-2">
                <p className={`text-sm font-semibold ${project.color} mb-1`}>
                  {project.category}
                </p>
                <h3
                  className={`font-heading text-2xl font-bold text-dark ${project.hoverColor} transition-colors`}
                >
                  {project.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
