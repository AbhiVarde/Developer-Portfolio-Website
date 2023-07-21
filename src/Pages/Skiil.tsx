import { useEffect } from "react";
import { motion } from "framer-motion";
import skills from "../assets/Data/skillsData";

const Skill = ({ darkMode }: any) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col max-w-2xl mx-auto mt-4 md:mt-10">
      <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4">
        Take a look at my Skills.
      </h1>
      <p className={`${darkMode ? "text-gray-400" : "text-gray-600"}`}>
        🌐These are my developing skills, consisting of various technologies and
        programming languages that I have learned and consistently update as I
        make progress.🌱
      </p>
      <motion.div
        className="grid gap-4 grid-cols-1 sm:grid-cols-2 my-2 w-full mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className={`border border-opacity-90 hover:border-gray-500 hover:border-opacity-100 
            shadow-lg cursor-pointer hover:shadow-xl transform hover:-translate-y-1 rounded-xl p-4 w-full relative flex justify-between items-center transition-all duration-200 ease-in-out ${
              darkMode ? "border-zinc-700" : "border-gray-300"
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
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
            <div>{skill.name}</div>
            <div>{skill.icon}</div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skill;
