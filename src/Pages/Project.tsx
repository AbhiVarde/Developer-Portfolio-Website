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
        <div
          className={`border border-opacity-90 hover:border-gray-500 hover:border-opacity-100 
            shadow-md hover:shadow-xl transform hover:-translate-y-1 rounded-xl p-4 w-full relative transition-all duration-200 ease-in-out ${
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
        </div>
      </div>
    </div>
  );
};

export default Project;
