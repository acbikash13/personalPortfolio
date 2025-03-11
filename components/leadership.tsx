import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, Users, Lightbulb } from "lucide-react"

export default function Leadership() {
  const leadershipExperiences = [
    {
      title: "Vice-President",
      organization: "College of Informatics Ambassadors",
      period: "Northern Kentucky University",
      description: "Led outreach programs to enhance student engagement and resources at NKU.",
      achievements: [
        "Led 10+ technical workshops and recruitment events engaging 500+ students",
        "Organized informatics-related events to promote technology education",
        "Represented the College of Informatics at university and community events",
        "Collaborated with faculty and staff to improve student resources and opportunities",
      ],
      icon: <Users className="h-10 w-10 text-primary" />,
    },
    {
      title: "STEM Peer Mentor",
      organization: "Northern Kentucky University",
      period: "2022 - 2024",
      description: "Mentored first-year STEM students, providing academic guidance and support.",
      achievements: [
        "Mentored 70+ first-year STEM students over 2 years",
        "Provided academic guidance and support to help students succeed in their courses",
        "Organized study groups and review sessions for challenging STEM subjects",
        "Helped students navigate university resources and opportunities",
      ],
      icon: <Award className="h-10 w-10 text-primary" />,
    },
    {
      title: "Treasurer & Founding Member",
      organization: "Norse of Nepal",
      period: "Northern Kentucky University",
      description: "Managed budgets and resources to organize cultural events at the university.",
      achievements: [
        "Managed budgets and resources to organize cultural events, engaging 150+ students",
        "Promoted cultural diversity and awareness on campus",
        "Organized Nepalese cultural celebrations and educational events",
        "Facilitated connections between Nepalese students and the broader university community",
      ],
      icon: <Lightbulb className="h-10 w-10 text-primary" />,
    },
  ]

  return (
    <section id="leadership" className="py-16 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Leadership</h2>
          <div className="w-12 h-1 bg-primary my-4"></div>
          <p className="text-muted-foreground text-lg max-w-3xl">
            My experiences leading teams and initiatives in the tech community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {leadershipExperiences.map((experience, index) => (
            <Card key={index} className="flex flex-col h-full">
              <CardHeader className="flex flex-col items-center text-center pb-2">
                <div className="mb-4 p-2 rounded-full bg-primary/10">{experience.icon}</div>
                <CardTitle>{experience.title}</CardTitle>
                <CardDescription className="text-base">{experience.organization}</CardDescription>
                <CardDescription>{experience.period}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="mb-4">{experience.description}</p>
                <h4 className="font-semibold mb-2">Key Achievements:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  {experience.achievements.map((achievement, idx) => (
                    <li key={idx}>{achievement}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

