import { FiChevronDown } from "react-icons/fi";
import { useEffect } from "react";
import { motion } from "framer-motion";
import projects from "../assets/Data/projectsData";

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
      <motion.div
        className="grid gap-4 grid-cols-1 sm:grid-cols-2 my-2 w-full mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className={`border border-opacity-90 hover:border-gray-500 hover:border-opacity-100 
            shadow-lg cursor-pointer hover:shadow-xl transform hover:-translate-y-1 rounded-xl p-4 w-full relative transition-all duration-200 ease-in-out ${
              darkMode ? "border-zinc-700" : "border-gray-300"
            }`}
            onClick={() => handleProjectClick(project.link)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
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
          </motion.div>
        ))}
      </motion.div>
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
