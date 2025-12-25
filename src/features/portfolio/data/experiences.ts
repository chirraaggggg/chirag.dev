import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    id: "ethnus",
    companyName: "Ethnus",
    positions: [
      {
        id: "ethnus-intern-2025",
        title: "Full Stack Developer Intern",
        employmentPeriod: {
          start: "05.2025",
          end: "07.2025",
        },
        employmentType: "Internship",
        icon: "code",
        description: `- Developed and maintained full-stack web applications using modern JavaScript frameworks and technologies.
- Collaborated with the development team to build scalable, user-centric solutions.
- Worked on both frontend and backend components, gaining hands-on experience across the entire tech stack.
- Implemented responsive UI components and integrated APIs for seamless data flow.
- Participated in code reviews and improved code quality through best practices.
- Gained practical experience in real-world development environments and agile workflows.`,
        skills: [
          "JavaScript",
          "React",
          "Node.js",
          "MongoDB",
          "Express.js",
          "REST APIs",
          "HTML/CSS",
          "Git",
          "Agile",
        ],
      },
    ],
  },
  {
    id: "freelance",
    companyName: "Freelance",
    positions: [
      {
        id: "freelance-current",
        title: "Full Stack Developer",
        employmentPeriod: {
          start: "07.2025",
        },
        employmentType: "Freelance",
        icon: "code",
        description: `- Building custom web applications for clients across various industries.
- Providing end-to-end development solutions from concept to deployment.
- Working on frontend development with React, Next.js, and modern styling solutions.
- Developing robust backend services with Node.js, Express, and MongoDB.
- Integrating third-party APIs and services to enhance functionality.
- Ensuring responsive design and optimal performance across all devices.
- Continuously learning and adapting to new technologies and client requirements.`,
        skills: [
          "JavaScript",
          "TypeScript",
          "React",
          "Next.js",
          "Node.js",
          "Express.js",
          "MongoDB",
          "PostgreSQL",
          "Tailwind CSS",
          "REST APIs",
          "Git",
          "Docker",
        ],
      },
    ],
    isCurrentEmployer: true,
  },
];

