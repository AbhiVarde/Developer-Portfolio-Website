import { RoughNotationGroup } from "react-rough-notation";
import { RainbowHighlight } from "../components/RainbowHghlight";
import { BsArrow90DegUp } from "react-icons/bs";
import Profile from "../assets/images/abhi.jpg";

const Home = ({ darkMode }: any) => {
  const data = [
    { text: "Developer.", color: "#F59E0B" },
    { text: "Designer.", color: "#84CC16" },
    { text: "Programmer.", color: "#10B981" },
    { text: "Learner.", color: "#3B82F6" },
  ];

  return (
    <div className="flex flex-col max-w-7xl mx-auto mt-6 md:mt-10">
      <div className="flex flex-col justify-center items-center lg:flex-row overflow-hidden">
        {/* Text container */}
        <div className="w-full sm:w-[85%] my-auto lg:w-1/2 mx-auto text-center lg:text-left lg:p-20">
          <p
            className={`text-2xl md:text-3xl lg:text-4xl font-semibold ${
              darkMode ? "text-gray-100 " : "text-gray-800"
            }`}
          >
            Hi, I'm Abhi!👋
          </p>
          <p
            className={`hidden sm:block mb-5 ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Craft remarkable web designs that enhance your online presence,
            providing user-friendly experiences across all platforms.
          </p>
          <RoughNotationGroup show={true}>
            {data.map(({ text, color }, index) => (
              <RainbowHighlight key={index} color={color}>
                <h1
                  className={`text-3xl md:text-4xl lg:text-6xl font-bold ${
                    darkMode ? "text-gray-200 " : "text-gray-700"
                  } my-2`}
                >
                  {text}
                </h1>
              </RainbowHighlight>
            ))}
          </RoughNotationGroup>
          <p
            className={`block sm:hidden text-center tracking-tight text-sm mt-8 ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Design and build stunning, user-friendly web designs that enhance
            your online presence,providing smooth and user-friendly experiences
            across all platforms.
          </p>
        </div>

        {/* Image container */}
        <div className="w-full lg:w-1/2 relative mt-10 lg:mt-0 mx-auto">
          <div className="w-3/4 mx-auto flex flex-col sm:items-center lg:block">
            <div>
              <img
                src={Profile}
                alt="avatar"
                className="rounded-lg shadow-md sm:h-[440px] sm:w-[380px] lg:h-[480px] lg:w-[400px] lg:ml-7"
              />
            </div>

            <div className="flex justify-between mt-4">
              <div className="flex items-center space-x-4 lg:ml-8">
                <BsArrow90DegUp className="mb-2" />
                <p className="font-mono">That's me</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
