import MentorsDiary from "../projects/MentorsDiary.png";
import CourseExpert from "../projects/CourseExpert.png";
import SQL from "../projects/SQL.png";
import Git from "../projects/Git Wars.png";
import Tracker from "../projects/Tracker.png";
import GladPlay from "../projects/GladPlay.png";
import Jukebox from "../projects/Jukebox.png";
import Linktree from "../projects/Linktree.png";
import Trello from "../projects/Trello.png";
import Resume from "../projects/PromptResume.png";

const projects = [
  {
    image: Tracker,
    title: "SpaceX Launch Tracker",
    description:
      "Stay informed on upcoming spacex launches, countdowns, and missions for cosmic exploration.",
    tags: [
      "Full-stack",
      "React",
      "Node.js",
      "JavaScript",
      "Tailwind CSS",
      "SpaceX-API",
    ],
    link: "https://github.com/AbhiVarde/SpaceX-Launch-Tracker",
  },
  {
    image: Trello,
    title: "Trello Clone",
    description:
      "Created a Trello-inspired clone with Next.js, Tailwind, TypeScript, and drag-and-drop functionality for seamless project management experience.",
    tags: ["Front-end", "Next.js", "TypeScript", "TailwindCSS"],
    link: "https://trello-bice.vercel.app/",
  },
  {
    image: Git,
    title: "Git Wars",
    description:
      "Test your Git skills. Complete tasks, enter commands, and dominate. Become the ultimate Git warrior!",
    tags: ["React", "Vite", "TypeScript", "Tailwind CSS", "Git Commands"],
    link: "https://gitwars.vercel.app/",
  },
  {
    image: Linktree,
    title: "Linktree Clone",
    description:
      "Link your digital world effortlessly in one place with Linktree-inspired project – a personalized online hub.",
    tags: ["Next.js", "TypeScript", "TailwindCSS"],
    link: "https://github.com/AbhiVarde/Linktree-Clone",
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
    image: GladPlay,
    title: "GladPay",
    description:
      "Effortless, secure payments with GladPay – your seamless, worry-free gateway to financial ease.",
    tags: [
      "Front-end",
      "React",
      "Vite",
      "TypeScript",
      "Tailwind CSS",
      "Razorpay",
    ],
    link: "https://gladpay.vercel.app/",
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
    image: Jukebox,
    title: "JukeBox",
    description:
      "Spotify music player web app with React, Tailwind CSS. Search, play, and discover tracks effortlessly.",
    tags: ["React", "Vite", "TypeScript", "Tailwind CSS", "Spotify API"],
    link: "https://jukebox-xi.vercel.app/",
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
    image: Resume,
    title: "Prompt Resume",
    description:
      "Resume generator web app with OpenAI API, React, deployed on Vercel. Stand out with a personalized resume.",
    tags: ["React", "Vite", "TypeScript", "Tailwind CSS", "OpenAI API"],
    link: "https://prompt-resume.vercel.app/",
  },
];

export default projects;
