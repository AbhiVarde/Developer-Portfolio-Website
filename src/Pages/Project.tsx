import Jukebox from "../assets/projects/Jukebox.png";
import MentorsDiary from "../assets/projects/MentorsDiary.png";
import PromptResume from "../assets/projects/PromptResume.png";
import DevGlimpse from "../assets/projects/DevGlimpse.png";
import CourseExpert from "../assets/projects/CourseExpert.png";
import SQL from "../assets/projects/SQL.png";
import Git from "../assets/projects/Git Wars.png";
import Tracker from "../assets/projects/Tracker.png";
import { FiChevronDown } from "react-icons/fi";
import { useEffect } from "react";

const projects = [
  {
    image: Tracker,
    title: "SpaceX Launch Tracker",
    description:
      "Test your Git skills. Complete tasks, enter commands, and dominate. Become the ultimate Git warrior!",
    tags: ["full-stack", "React", "Node.js", "JavaScript", "Tailwind CSS"],
    link: "https://github.com/AbhiVarde/SpaceX-Launch-Tracker",
  },
  {
    image: Git,
    title: "Git Wars",
    description:
      "Test your Git skills. Complete tasks, enter commands, and dominate. Become the ultimate Git warrior!",
    tags: ["React", "Vite", "TypeScript", "Tailwind CSS"],
    link: "https://gitwars.vercel.app/",
  },
  {
    image: CourseExpert,
    title: "CourseExpert",
    description:
      "Unleash your potential through diverse online courses. Achieve goals, enhance skills, and transform education.",
    tags: ["React", "Vite", "Redux", "TypeScript", "Tailwind CSS"],
    link: "https://courseexpert.vercel.app/",
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
    link: "https://mentorsdiary.netlify.app/",
  },
  {
    image: SQL,
    title: "SQL AI",
    description:
      "Supercharge your SQL skills with our AI-powered app. Instantly find answers to your queries.",
    tags: ["React", "Vite", "TypeScript", "Tailwind CSS", "OpenAI API"],
    link: "https://sqlai.vercel.app/",
  },
  {
    image: Jukebox,
    title: "JukeBox",
    description:
      "Spotify music player web app with React, Tailwind CSS. Search, play, and discover tracks effortlessly.",
    tags: ["React", "Vite", "TypeScript", "Tailwind CSS", "Spotify API"],
    link: "https://jukebox-xi.vercel.app/",
  },
  {
    image: PromptResume,
    title: "Prompt Resume",
    description:
      "Resume generator web app with OpenAI API, React, deployed on Vercel. Stand out with a personalized resume.",
    tags: ["React", "Vite", "Typescript", "TailwindCSS", "OpenAI API"],
    link: "https://prompt-resume.vercel.app/",
  },
  {
    image: DevGlimpse,
    title: "Dev Glimpse",
    description:
      " Discover GitHub Finder web app with GitHub API, React, Tailwind CSS. Collaborate with programmers.",
    tags: ["React", "Vite", "Typescript", "TailwindCSS", "Github API"],
    link: "https://devglimplse.vercel.app/",
  },
];

const handleProjectClick = (link: any) => {
  window.open(link, "_blank");
};

const Project = ({ darkMode }: any) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex flex-col max-w-2xl mx-auto mt-4 md:mt-10">
      <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4">
        These are my Projects.
      </h1>
      <p className={`${darkMode ? "text-gray-400" : "text-gray-600"}`}>
        🔄 Here are a few fictional projects I've worked on. These projects were
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
            onClick={() => handleProjectClick(project.link)}
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
                    }  rounded-md text-xs tracking-wide italic mr-2 px-1`}
                  >
                    {tag}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <a
        type="button"
        className={`flex items-center text-sm my-4 mx-auto px-4 py-2 rounded-md font-medium ${
          darkMode ? "text-gray-100" : "text-gray-900"
        }`}
        href="https://github.com/AbhiVarde"
      >
        See more
        <FiChevronDown className="h-4 w-4 ml-1 items-center" />
      </a>
    </div>
  );
};

export default Project;
