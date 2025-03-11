import { Code, Database, Server, Globe, LineChart, Cpu, Cloud, Terminal } from "lucide-react"

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="h-8 w-8 text-primary" />,
      skills: [
        "Java (Advanced)",
        "Python (Advanced)",
        "JavaScript (Advanced)",
        "SQL (Advanced)",
        "C# (Intermediate)",
        "C++",
      ],
    },
    {
      title: "Frontend Development",
      icon: <Globe className="h-8 w-8 text-primary" />,
      skills: ["React.js", "Next.js", "HTML/CSS", "TypeScript"],
    },
    {
      title: "Backend Development",
      icon: <Server className="h-8 w-8 text-primary" />,
      skills: ["Node.js", "Express.js", "Spring Boot", "Flask", "RESTful APIs"],
    },
    {
      title: "Database",
      icon: <Database className="h-8 w-8 text-primary" />,
      skills: ["PostgreSQL", "MongoDB", "MySQL"],
    },
    {
      title: "Data Science",
      icon: <LineChart className="h-8 w-8 text-primary" />,
      skills: ["Pandas", "NumPy", "Matplotlib", "Scikit-learn", "Data Visualization", "Data Wrangling"],
    },
    {
      title: "Machine Learning",
      icon: <Cpu className="h-8 w-8 text-primary" />,
      skills: ["TensorFlow", "Keras", "NLTK", "PySpark", "YOLO"],
    },
    {
      title: "DevOps & Cloud",
      icon: <Cloud className="h-8 w-8 text-primary" />,
      skills: ["Azure DevOps", "CI/CD", "Docker", "AWS", "Kafka"],
    },
    {
      title: "Tools & Others",
      icon: <Terminal className="h-8 w-8 text-primary" />,
      skills: ["Git", "GitHub", "Jira", "Unit Testing", "Salesforce", "Microsoft 365"],
    },
  ]

  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Skills</h2>
          <div className="w-12 h-1 bg-primary my-4"></div>
          <p className="text-muted-foreground text-lg max-w-3xl">
            A comprehensive overview of my technical skills and expertise
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-background p-6 rounded-lg shadow-sm border hover:border-primary transition-colors"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">{category.icon}</div>
                <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                <ul className="space-y-2 w-full">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="flex items-center justify-between">
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

