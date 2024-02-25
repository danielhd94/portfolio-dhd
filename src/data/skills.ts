interface Skill {
  name: string;
  rating: number;
}

interface SkillsData {
  advanced: Skill[];
  intermediate: Skill[];
  basic: Skill[];
}

export const skills: SkillsData = {
  advanced: [
        { name: "Java", rating: 4
        },
        { name: "Spring Boot", rating: 5
        },
        { name: ".NET Core", rating: 3
        },
        { name: "JavaScript", rating: 4
        }
    ],
  intermediate: [
        { name: "TypeScript", rating: 3
        },
        { name: "NestJS", rating: 3
        },
        {
          name: "MongoDB", rating: 4
        },
        {
          name: "ExpressJS", rating: 3
        },
        {
          name: "ReactJS", rating: 3
        },
        {
          name: "NodeJS", rating: 3
        },
    ],
  basic: [
        { name: "Apollo GraphQL", rating: 2
        },
        { name: "TanStack Query", rating: 2
        },
        { name: "Jest", rating: 2
        },
        { name: "Amazon S3", rating: 2
        }
    ]
};
