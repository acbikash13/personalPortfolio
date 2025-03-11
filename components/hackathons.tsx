import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Calendar, MapPin } from "lucide-react"
import Image from "next/image"

export default function Hackathons() {
  const hackathons = [
    {
      title: "Global AI Hackathon",
      date: "November 2023",
      location: "San Francisco, CA",
      project: "MediScan - AI-powered Medical Image Analysis",
      description: "Developed an AI system that analyzes medical images to detect abnormalities with 92% accuracy.",
      achievement: "1st Place Overall",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Python", "TensorFlow", "Flask", "React", "AWS"],
    },
    {
      title: "FinTech Innovation Challenge",
      date: "July 2023",
      location: "New York, NY",
      project: "CryptoTrack - Blockchain Transaction Analyzer",
      description:
        "Built a tool that visualizes and analyzes blockchain transactions to detect patterns and anomalies.",
      achievement: "Best Technical Implementation",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["JavaScript", "Node.js", "D3.js", "Ethereum", "MongoDB"],
    },
    {
      title: "Sustainability Hackathon",
      date: "March 2023",
      location: "Virtual",
      project: "EcoRoute - Eco-friendly Navigation App",
      description:
        "Created a navigation app that suggests routes with the lowest carbon footprint based on transportation mode and traffic conditions.",
      achievement: "2nd Place & People's Choice Award",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["React Native", "Google Maps API", "Node.js", "Firebase"],
    },
    {
      title: "Health Tech Hackathon",
      date: "October 2022",
      location: "Boston, MA",
      project: "SleepWell - Sleep Pattern Analysis App",
      description:
        "Developed an application that uses machine learning to analyze sleep patterns and provide personalized recommendations.",
      achievement: "Best Health Innovation",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Python", "Scikit-learn", "Flutter", "Firebase", "Matplotlib"],
    },
  ]

  return (
    <section id="hackathons" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Hackathons</h2>
          <div className="w-12 h-1 bg-primary my-4"></div>
          <p className="text-muted-foreground text-lg max-w-3xl">
            My experiences and achievements in competitive coding events
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {hackathons.map((hackathon, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={hackathon.image || "/placeholder.svg"}
                  alt={hackathon.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <Badge className="bg-primary text-primary-foreground">
                    <Trophy className="w-3 h-3 mr-1" />
                    {hackathon.achievement}
                  </Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle>{hackathon.title}</CardTitle>
                <CardDescription>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {hackathon.date}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {hackathon.location}
                    </div>
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold">Project: {hackathon.project}</h4>
                  <p className="text-muted-foreground mt-1">{hackathon.description}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {hackathon.technologies.map((tech, idx) => (
                    <Badge key={idx} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

