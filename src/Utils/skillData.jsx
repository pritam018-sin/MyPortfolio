import {
    FaCode,
    FaStar,
    FaRocket,
    FaLayerGroup,
    FaChartBar,
    FaReact,
    FaJava,
    FaNodeJs,
    FaHtml5,
    FaCss3

} from 'react-icons/fa';

export const skills = [
    {
        name: "React",
        level: 75,
        projectName: ["BussinessWeb", "E-RealState", "Online Learning platform", "E-Commerce Website", "myPortfolio", "pasteApp"],
        category: "frontend",
        projects: 5,
        icon: <FaReact  className="text-blue-400" />
    },

    {
        name: "JavaScript",
        level: 80,
        projectName: ["weatherApp", "NotesApp", "ClockApp", "Calculator", "LeetCodeMetrix", "TextToSpeech"],
        category: "language",
        projects: 7,
        icon:""
    },
    {
        name: "Node.js",
        level: 60,
        projectName: ["E-Commerce Website", "Comming Soon...", "Comming Soon..."],
        category: "backend",
        projects: 1,
        icon: <FaNodeJs className="text-green-500"/>
    },
    {
        name: "Tailwind CSS",
        level: 92,
        projectName: ["BussinessWeb", "E-RealState", "Online Learning platform", "E-Commerce Website", "myPortfolio", "pasteApp"],
        category: "styling",
        projects: 7
    },
    {
        name: "Express.js",
        level: 60,
        projectName: ["E-Commerce Website", "Comming Soon...", "Comming Soon..."],
        category: "backend",
        projects: 1
    },
    {
        name: "CSS",
        level: 87,
        projectName: ["weatherApp", "NotesApp", "ClockApp", "Calculator", "LeetCodeMetrix", "TextToSpeech"],
        category: "styling",
        projects: 7,
        icon: <FaCss3 className="text-pink-500"/>

    },
    {
        name: "Redux",
        level: 85,
        projectName: ["BussinessWeb", "E-RealState", "Online Learning platform", "E-Commerce Website", "myPortfolio", "pasteApp"],
        category: "state",
        projects: 9
    },
    {
        name: "SQL",
        level: 75,
        projectName: ["Comming Soon", "Comming Soon...", "Comming Soon..."],
        category: "database",
        projects: 1
    },
    {
        name: "HTML",
        level: 78,
        projectName: ["weatherApp", "NotesApp", "ClockApp", "Calculator", "LeetCodeMetrix", "TextToSpeech"],
        category: "language",
        projects: 7,
        icon: <FaHtml5 className="text-blue-600"/>
    },
    
    {
        name: "Java", level: 50,
        projectName: ["i have Learned only Core Java"],
        category: "language",
        projects: 0,
        icon: <FaJava className="text-orange-400" />
    },
    {
        name: "MongoDB",
        level: 80,
        projectName: ["E-Commerce Website", "Comming Soon...", "Comming Soon..."],
        category: "database",
        projects: 1
    },
    {
        name: "C",
        level: 70,
        projectName: ["i Learned dsa in this languages"],
        category: "language",
        projects: 0
    },
];

export const categories = [
    { id: 'all', name: 'All Skills', icon: <FaLayerGroup /> },
    { id: 'frontend', name: 'Frontend', icon: <FaCode /> },
    { id: 'backend', name: 'Backend', icon: <FaRocket /> },
    { id: 'language', name: 'Languages', icon: <FaStar /> },
    { id: 'styling', name: 'Styling', icon: <FaChartBar /> },
    { id: 'database', name: 'Database', icon: <FaLayerGroup /> },
    { id: 'state', name: 'State Mgmt', icon: <FaChartBar /> },
];