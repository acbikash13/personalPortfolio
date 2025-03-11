"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Projects() {
  const [filter, setFilter] = useState("all")

  const projects = [
    {
      id: 1,
      title: "Job Search Platform",
      description:
        "A full stack application that helps users find the most matching jobs for their profile, built on microservice architecture with web scraping and AI-powered matching.",
      image: "/assets/appjob.jpg",
      tags: ["Next.js", "PostgreSQL", "TypeScript", "Express.js", "Docker", "Azure", "Llama3.1"],
      category: "fullstack",
      github: "https://github.com/acbikash13",
      demo: "https://appjob.net",
    },
    {
      id: 2,
      title: "Multiplayer Bingo Web Game",
      description:
        "A real-time multiplayer Bingo game using JavaScript, WebSockets, and MongoDB for backend data storage with real-time chat functionality.",
      image: "/assets/BingoGame.png",
      tags: ["JavaScript", "WebSockets", "MongoDB", "Azure", "RESTful APIs"],
      category: "fullstack",
      github: "https://github.com/acbikash13/BINGO-GAME",
      demo: "https://bingogame.azurewebsites.net/",
    },
    {
      id: 3,
      title: "Convolutional Neural Network App",
      description:
        "An image classification app that uses Convolutional Neural Networks to classify images into predefined categories with a user-friendly interface.",
      image: "assets/ImageClassifier.png",
      tags: ["Python", "TensorFlow", "Keras", "Flask", "Azure", "CNN"],
      category: "machinelearning",
      github: "https://github.com/acbikash13",
      demo: "https://classiffyimagescnn.azurewebsites.net/",
    },
    {
      id: 4,
      title: "Mastermind Game",
      description:
        "A multithreaded Java client-server application for real-time Mastermind gameplay with socket programming for communication between players.",
      image: "assets/MasterMind.png",
      tags: ["Java", "Multithreading", "Socket Programming"],
      category: "fullstack",
      github: "https://github.com/acbikash13/Mastermind",
      demo: "#",
    },
    {
      id: 5,
      title: "Research Collab App",
      description:
        "A university collaboration platform connecting researchers and students with advanced filtering and recommendation systems for real-time collaboration.",
      image: "/placeholder.svg",
      tags: ["React", "Tailwind CSS", "OAuth"],
      category: "fullstack",
      github: "https://github.com/ResearchCollaborationApp/researchAndProjectCollab",
      demo: "#",
    },
    {
      id: 6,
      title: "Real-Time Object Detection System",
      description:
        "A real-time object detection pipeline using Kafka for message streaming and Spark for distributed processing, integrating YOLO for object detection.",
      image: "/assets/RealTimeObjectDetection.png",
      tags: ["Python", "YOLOV3", "Kafka", "Spark", "OpenCV"],
      category: "machinelearning",
      github: "https://github.com/acbikash13/kafkaObjectDetection",
      demo: "#",
    },
    {
      id: 7,
      title: "Sentiment Analysis Platform",
      description:
        "A sentiment analysis platform that analyzes over 20M+ Rate My Professor reviews with 86% sentiment accuracy using DistilBERT and NLP techniques.",
      image: "/assets/sentimentAnalysis.png",
      tags: ["DistilBERT", "PySpark", "NLTK", "Keras", "Transformers", "PyTorch"],
      category: "datascience",
      github: "https://github.com/acbikash13",
      demo: "https://colab.research.google.com/drive/13iDfzXDdqMuM5Xvj8cRIZ7WS8AYBcqeB#scrollTo=cRKGzGDOc6sS",
    },
    {
      id: 8,
      title: "Defects Coil Detection System",
      description:
        "An ML pipeline for industrial defect coil production detection, increasing detection accuracy by 30% with optimized data processing.",
      image: "/assets/DefectCoil.png?height=300&width=300",
      tags: ["Python", "TensorFlow", "Keras", "PostgreSQL", "Flask"],
      category: "machinelearning",
      github: "https://github.com/acbikash13",
      demo: "#",
    },
    {
      id: 9,
      title: "Job Scraper and Recommendation Tool",
      description:
        "Automated job data collection using Python-based scraper with JobSpy and Psycopg2, scheduling CRON jobs to extract and store job postings.",
      image: "/placeholder.svg",
      tags: ["Python", "AWS", "PostgreSQL", "JobSpy", "Psycopg2"],
      category: "datascience",
      github: "https://github.com/acbikash13",
      demo: "#",
    },
  ]

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter)

  return (
    <section id="projects" className="py-16 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Projects</h2>
          <div className="w-12 h-1 bg-primary my-4"></div>
          <p className="text-muted-foreground text-lg max-w-3xl">
            Explore my portfolio of full-stack applications, data science projects, and machine learning models
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            <Button variant={filter === "all" ? "default" : "outline"} onClick={() => setFilter("all")}>
              All Projects
            </Button>
            <Button variant={filter === "fullstack" ? "default" : "outline"} onClick={() => setFilter("fullstack")}>
              Full Stack
            </Button>
            <Button variant={filter === "datascience" ? "default" : "outline"} onClick={() => setFilter("datascience")}>
              Data Science
            </Button>
            <Button
              variant={filter === "machinelearning" ? "default" : "outline"}
              onClick={() => setFilter("machinelearning")}
            >
              Machine Learning
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="overflow-hidden group">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" asChild>
                  <Link href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> Code
                  </Link>
                </Button>
                <Button size="sm" asChild>
                  <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

