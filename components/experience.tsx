import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Calendar } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      title: "Research Assistant",
      company: "Northern Kentucky University",
      period: "April 2024 - January 2025",
      description: "Led research on sentiment analysis and data processing for ISCAP Conference Papers.",
      responsibilities: [
        "Built and fine-tuned a DistilBERT model to analyze 21 million Rate My Professor reviews with 86% sentiment accuracy",
        "Implemented automated data pipelines using Kafka and Python, reducing manual data processing time by 40%",
        "Reduced model training time by 20% by optimizing dataset preprocessing with PySpark",
        "Leveraged NLTK and advanced algorithms to identify trends, predict performance, and inform data-driven decisions",
      ],
      technologies: ["Python", "DistilBERT", "PySpark", "NLTK", "Kafka", "Data Processing"],
    },
    {
      title: "Systems Analyst",
      company: "Fidelity Investments",
      period: "May 2023 - April 2024",
      description: "Provided technical support and data management for Salesforce platform and related systems.",
      responsibilities: [
        "Troubleshot and debugged 150+ technical requests every month, including Apex code, SQL queries, and integration issues",
        "Updated 1 million+ records across systems using SQL and Data Loader, ensuring 100% data accuracy during integrations",
        "Generated 10+ dashboards and 50+ reports using SQL queries and salesforce tools, improving efficiency by 25%",
        "Authored 10+ comprehensive documents on processes, troubleshooting procedures and code for team collaboration",
      ],
      technologies: ["Salesforce", "SQL", "Apex", "Data Migration", "Reporting", "Documentation"],
    },
    {
      title: "IT Help Desk Technician",
      company: "Northern Kentucky University",
      period: "April 2023 - December 2024",
      description: "Provided front-line technical support for faculty, staff, and students across the university.",
      responsibilities: [
        "Provided front-line support and troubleshooting for 1000+ faculty, staff, and students",
        "Resolved complex network-related issues such as VPN, network mapping, device connectivity achieving 95% resolution rate",
        "Responded to Help Desk tickets and prioritized issues, exceeding SLA response times",
        "Supported network infrastructure updates across campus, ensuring minimal downtime in the campus area",
      ],
      technologies: ["Network Troubleshooting", "VPN", "Help Desk", "Technical Support", "IT Infrastructure"],
    },
    {
      title: "Java Teaching Assistant",
      company: "Northern Kentucky University",
      period: "January 2024 - May 2024",
      description: "Mentored students in Java programming and delivered lectures on core programming concepts.",
      responsibilities: [
        "Delivered 10+ engaging lectures on core Java concepts, including OOP, algorithms, and data structures",
        "Conducted 1:1 session for 20+ students, improving their understanding of object-oriented programming",
        "Mentored 20+ students in Java programming, resulting in 90% pass rate",
        "Facilitated practical coding exercises leading to 100% student project completion rates",
      ],
      technologies: ["Java", "OOP", "Data Structures", "Algorithms", "Teaching", "Mentoring"],
    },
    {
      title: "Microsoft 365 Support Ambassador",
      company: "Education at Work",
      period: "May 2022 - April 2023",
      description: "Managed and resolved technical issues in Microsoft 365 environment for users.",
      responsibilities: [
        "Managed and resolved technical issues in Microsoft 365 with a 95% customer satisfaction rate",
        "Administered user access control for over 1000s of users through Microsoft Admin Center and Azure Active Directory",
        "Configured and maintained Microsoft Exchange domains and mail servers, achieving 99.9% email uptime",
        "Provided support to new technicians, supporting them in handling complex technical issues and service standards",
      ],
      technologies: [
        "Microsoft 365",
        "Azure Active Directory",
        "Microsoft Exchange",
        "Technical Support",
        "User Management",
      ],
    },
  ]

  return (
    <section id="experience" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Work Experience</h2>
          <div className="w-12 h-1 bg-primary my-4"></div>
          <p className="text-muted-foreground text-lg max-w-3xl">
            My professional journey and the companies I've worked with
          </p>
        </div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-muted-foreground/20 before:to-transparent">
          {experiences.map((experience, index) => (
            <div key={index} className={`relative flex items-start ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
              <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full border border-muted-foreground/20 bg-background shadow">
                <Briefcase className="w-5 h-5 text-primary" />
              </div>

              <Card className={`w-full md:w-[calc(50%-2.5rem)] ${index % 2 === 0 ? "md:mr-10" : "md:ml-10"}`}>
                <CardHeader>
                  <div className="flex items-center text-muted-foreground mb-1">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{experience.period}</span>
                  </div>
                  <CardTitle>{experience.title}</CardTitle>
                  <CardDescription className="text-lg font-medium">{experience.company}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>{experience.description}</p>
                  <div>
                    <h4 className="font-semibold mb-2">Key Responsibilities:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {experience.responsibilities.map((responsibility, idx) => (
                        <li key={idx}>{responsibility}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

