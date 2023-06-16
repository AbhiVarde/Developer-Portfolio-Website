import MentorsDiary from "../assets/images/MentorsDiary.png";
import Jukebox from "../assets/images/Jukebox.png";
import PromptResume from "../assets/images/PromptResume.png";
import NewsXpress from "../assets/images/news.png";
import DevGlimpse from "../assets/images/DevGlimpse.png";
import skyline from "../assets/images/skyline.png";

const projects = [
  {
    image: Jukebox,
    title: "JukeBox",
    description:
      "Spotify music player web app with React, Tailwind CSS. Search, play, and discover tracks effortlessly.",
    tags: ["React", "Vite", "TypeScript", "Tailwind CSS", "Spotify API"],
  },
  {
    image: MentorsDiary,
    title: "MentorsDiary",
    description:
      "Find mentors on a React platform with TypeScript, Tailwind CSS, Redux. Connect, Gain guidance on MentorsDiary",
    tags: [
      "Front-end",
      "React",
      "Redux",
      "TypeScript",
      "Tailwind CSS",
      "Rest APIs",
    ],
  },
  {
    image: skyline,
    title: "Skyline",
    description:
      "Developed a dynamic weather forecast web app providing real-time information, and a seamless experience.",
    tags: ["HTML", "CSS", "JavaScript", "Open Weather API"],
  },
  {
    image: PromptResume,
    title: "Prompt Resume",
    description:
      "Resume generator web app with OpenAI API, React, deployed on Vercel. Stand out with a personalized resume.",
    tags: ["React", "Vite", "Typescript", "TailwindCSS", "OpenAI API"],
  },
  {
    image: DevGlimpse,
    title: "Dev Glimpse",
    description:
      " Discover GitHub Finder web app with GitHub API, React, Tailwind CSS. Collaborate with programmers.",
    tags: ["React", "Vite", "Typescript", "TailwindCSS", "Github API"],
  },
  {
    image: NewsXpress,
    title: "NewsXpress",
    description:
      "Real-time news web app with News API. Stay effortlessly informed with our powerful news web app.",
    tags: ["React", "JavaScript", "Bootstrap", "News API"],
  },
];

const Project = ({ darkMode }: any) => {
  return (
    <div className="flex flex-col max-w-2xl mx-auto mt-4 md:mt-10">
      <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4">
        These are my Projects.
      </h1>
      <p className={`${darkMode ? "text-gray-400" : "text-gray-600"}`}>
        Here are a few fictional projects I've worked on. These projects were
        created to enhance my understanding of the technologies I use.
      </p>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 my-2 w-full mt-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`border border-opacity-90 hover:border-gray-500 hover:border-opacity-100 
            shadow-lg cursor-pointer hover:shadow-xl transform hover:-translate-y-1 rounded-xl p-4 w-full relative transition-all duration-200 ease-in-out ${
              darkMode ? "border-zinc-700" : "border-gray-300"
            }`}
          >
            <span
              className={`absolute w-[90%] -top-px left-px h-[2px] bg-gradient-to-r ${
                darkMode
                  ? "from-blue-400/0 via-blue-400/40 to-blue-400/0"
                  : "from-blue-500/0 via-blue-500/40 to-blue-500/0"
              }`}
            ></span>
            <span
              className={`absolute w-[90%] -bottom-px right-px h-[2px] bg-gradient-to-r ${
                darkMode
                  ? "from-blue-400/0 via-blue-400/40 to-blue-400/0"
                  : "from-blue-500/0 via-blue-500/40 to-blue-500/0"
              }`}
            ></span>
            <img src={project.image} className="my-2" />
            <div>
              <h4
                className={`text-xl font-bold tracking-tight ${
                  darkMode ? "text-gray-100" : "text-gray-900"
                }`}
              >
                {project.title}
              </h4>
              <p
                className={`leading-6 pt-2 ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                {project.description}
              </p>
              <div className="pt-3 flex md:flex-row flex-wrap">
                {project.tags.map((tag, index) => (
                  <p
                    key={index}
                    className={`leading-5 mb-2 ${
                      darkMode
                        ? "border border-zinc-700 text-gray-300 bg-transparent"
                        : "bg-gray-100 text-gray-700"
                    }  rounded-md text-xs italic mr-2 px-1`}
                  >
                    {tag}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
