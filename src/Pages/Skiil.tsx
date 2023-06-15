import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiMysql,
  SiGit,
  SiGithub,
  SiGitlab,
} from "react-icons/si";
import { DiMongodb } from "react-icons/di";

const Skill = ({ darkMode }: any) => {
  const skills = [
    { name: "React", icon: <FaReact size={30} color="#61DAFB" /> },
    { name: "Node.js", icon: <FaNodeJs size={30} color="#339933" /> },
    { name: "JavaScript", icon: <SiJavascript size={30} color="#F7DF1E" /> },
    { name: "TypeScript", icon: <SiTypescript size={30} color="#3178C6" /> },
    { name: "Python", icon: <SiPython size={30} color="#3776AB" /> },
    { name: "Redux", icon: <FaReact size={30} color="#764ABC" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={30} color="#06B6D4" /> },
    {
      name: "Material UI",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          width="30px"
          height="30px"
        >
          <polygon fill="#29b6f6" points="1,5 7,9 7,29 1,25" />
          <polygon fill="#0288d1" points="47,20 41,24 41,37 47,33" />
          <polygon fill="#0288d1" points="47,6 41,10 41,17 47,13" />
          <polygon fill="#0288d1" points="35,5 29,9 29,29 35,25" />
          <polygon fill="#29b6f6" points="1,12 18,23 18,16 1,5" />
          <polygon fill="#0288d1" points="35,12 18,23 18,16 35,5" />
          <polygon fill="#0288d1" points="35,26 18,37 18,30 35,19" />
          <polygon fill="#0288d1" points="47,34 30,45 30,38 47,27" />
          <polygon fill="#29b6f6" points="30,37.765 18,30 18,37 30,44.765" />
        </svg>
      ),
    },
    {
      name: "MySQL",
      icon: <SiMysql size={30} color="#f29111" />,
    },
    { name: "MongoDB", icon: <DiMongodb size={30} color="#47A248" /> },
    {
      name: "Google Cloud",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          width="30px"
          height="30px"
        >
          <path
            fill="#1976d2"
            d="M38.193,18.359c-0.771-2.753-2.319-5.177-4.397-7.03l-4.598,4.598	c1.677,1.365,2.808,3.374,3.014,5.648v1.508c0.026,0,0.05-0.008,0.076-0.008c2.322,0,4.212,1.89,4.212,4.212S34.61,31.5,32.288,31.5	c-0.026,0-0.05-0.007-0.076-0.008V31.5h-6.666H24V38h8.212v-0.004c0.026,0,0.05,0.004,0.076,0.004C38.195,38,43,33.194,43,27.288	C43,23.563,41.086,20.279,38.193,18.359z"
          />
          <path
            fill="#ffe082"
            d="M19.56,25.59l4.72-4.72c-0.004-0.005-0.008-0.009-0.011-0.013l-4.717,4.717	C19.554,25.579,19.557,25.584,19.56,25.59z"
            opacity=".5"
          />
          <path
            fill="#90caf9"
            d="M19.56,25.59l4.72-4.72c-0.004-0.005-0.008-0.009-0.011-0.013l-4.717,4.717	C19.554,25.579,19.557,25.584,19.56,25.59z"
            opacity=".5"
          />
          <path
            fill="#ff3d00"
            d="M24,7.576c-8.133,0-14.75,6.617-14.75,14.75c0,0.233,0.024,0.46,0.035,0.69h6.5	c-0.019-0.228-0.035-0.457-0.035-0.69c0-4.549,3.701-8.25,8.25-8.25c1.969,0,3.778,0.696,5.198,1.851l4.598-4.598	C31.188,9.003,27.761,7.576,24,7.576z"
          />
          <path
            fill="#90caf9"
            d="M15.712,31.5L15.712,31.5c-0.001,0-0.001,0-0.002,0c-0.611,0-1.188-0.137-1.712-0.373	l-4.71,4.71C11.081,37.188,13.301,38,15.71,38c0.001,0,0.001,0,0.002,0v0H24v-6.5H15.712z"
            opacity=".5"
          />
          <path
            fill="#4caf50"
            d="M15.712,31.5L15.712,31.5c-0.001,0-0.001,0-0.002,0c-0.611,0-1.188-0.137-1.712-0.373l-4.71,4.71	C11.081,37.188,13.301,38,15.71,38c0.001,0,0.001,0,0.002,0v0H24v-6.5H15.712z"
          />
          <path
            fill="#ffc107"
            d="M11.5,27.29c0-2.32,1.89-4.21,4.21-4.21c1.703,0,3.178,1.023,3.841,2.494l4.717-4.717	c-1.961-2.602-5.065-4.277-8.559-4.277C9.81,16.58,5,21.38,5,27.29c0,3.491,1.691,6.59,4.288,8.547l4.71-4.71	C12.53,30.469,11.5,28.999,11.5,27.29z"
          />
        </svg>
      ),
    },
    { name: "Git", icon: <SiGit size={30} color="#FF0000" /> },
    {
      name: "GitHub",
      icon: (
        <SiGithub size={30} color={`${darkMode ? "#ffffff" : "#181717"}`} />
      ),
    },
    { name: "GitLab", icon: <SiGitlab size={30} color="#FCA121" /> },
  ];

  return (
    <div className="flex flex-col max-w-2xl mx-auto mt-4 md:mt-10">
      <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4">
        Take a look at my Skills.
      </h1>
      <p className={`${darkMode ? "text-gray-400" : "text-gray-600"}`}>
        These are my developing skills, consisting of various technologies and
        programming languages that I have learned and consistently update as I
        make progress.
      </p>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 my-2 w-full mt-4">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className={`border border-opacity-90 hover:border-gray-500 hover:border-opacity-100 
            shadow-md hover:shadow-xl transform hover:-translate-y-1 rounded-xl p-4 w-full flex justify-between items-center transition-all duration-200 ease-in-out ${
              darkMode ? "border-zinc-800" : "border-gray-200"
            }`}
          >
            <span
              className={`absolute w-[60%] -top-px left-px h-px bg-gradient-to-r ${
                darkMode
                  ? "from-blue-400/0 via-blue-400/40 to-blue-400/0"
                  : "from-blue-500/0 via-blue-500/40 to-blue-500/0"
              }`}
            ></span>
            <span
              className={`absolute w-[60%] -bottom-px right-px h-px bg-gradient-to-r ${
                darkMode
                  ? "from-blue-400/0 via-blue-400/40 to-blue-400/0"
                  : "from-blue-500/0 via-blue-500/40 to-blue-500/0"
              }`}
            ></span>
            <div>{skill.name}</div>
            <div>{skill.icon}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
