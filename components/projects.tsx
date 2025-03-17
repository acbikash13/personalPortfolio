"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, ExternalLink, X, Play } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Projects() {
  const [filter, setFilter] = useState("all")
  const [activeVideo, setActiveVideo] = useState(null)

  const projects = [
    {
      id: 1,
      title: "Job Search Platform",
      description: `Developed a full-stack job search application leveraging AI and microservices architecture to enhance job recommendations. The platform integrates web scraping to aggregate job postings from multiple sources and utilizes Llama3.1 for intelligent job matching based on user profiles. Features include real-time filtering, resume parsing, and personalized job alerts.`,
      image: "/assets/appjob.jpg",
      video: "https://youtu.be/dvuZqDhLrtk", // Replace with your actual YouTube URL
      tags: ["Next.js", "PostgreSQL", "TypeScript", "Express.js", "Docker", "Azure", "Llama3.1"],
      category: "fullstack",
      github: "https://github.com/H1BMatch/",
      demo: "https://appjob.net",
    },
    {
      id: 2,
      title: "BloodBond - Centralized Blood Donation Platform",
      description:
        "Built for a Hack Kentucky Hackathon, it is a full-stack web platform designed to streamline blood donation and management across hospitals and blood banks. The system enables real-time donor matching, reducing manual search time by 60%. It features an inventory management module to track blood supply levels across multiple institutions, ensuring optimal resource allocation.",
      image: "/assets/bloodBond.png",
      video: "https://youtu.be/19X3iU3s7YE", // Replace with your actual YouTube URL
      tags: ["Next.js", "AWS", "PostgreSQL", "Node.js"],
      category: "fullstack",
      github: "https://github.com/orgs/BloodBondd/repositories",
      demo: "https://project-hackathon-uutj.vercel.app/",
    },
    {
      id: 3,
      title: "Multiplayer Bingo Web Game",
      description:
        "A real-time multiplayer Bingo game featuring real-time chat, game state synchronization, and smooth player interactions using WebSockets. The backend, powered by MongoDB, stores game sessions and user progress. The game minimizes latency through optimized WebSocket event handling",
      image: "/assets//BingoGame.png",
      video: "https://youtu.be/C7ApiIk-_fw", // Replace with your actual YouTube URL
      tags: ["JavaScript", "WebSockets", "MongoDB", "Azure", "RESTful APIs"],
      category: "fullstack",
      github: "https://github.com/acbikash13/BINGO-GAME",
      demo: "https://bingogamee.azurewebsites.net/",
    },
    {
      id: 4,
      title: "Convolutional Neural Network App",
      description:
        "Built an image classification application using CNNs for real-time image categorization. The app enables users to upload images, and the model predicts categories with high accuracy. Flask serves as the backend, handling image preprocessing and model inference",
      image: "/assets/ImageClassifier.png",
      video: "https://youtu.be/-tCb5txySqU", // Replace with your actual YouTube URL
      tags: ["Python", "TensorFlow", "Keras", "Flask", "Azure", "CNN"],
      category: "machinelearning",
      github: "https://colab.research.google.com/drive/1pc-w9DP-PI6m66RF4OdStEKqeG5Aa-ag",
      demo: "classifyimage.azurewebsites.net/",
    },
    {
      id: 5,
      title: "Mastermind Game",
      description:
        "A multithreaded Java-based client-server game implementing the classic Mastermind logic puzzle. The server handles multiple concurrent player sessions using socket programming, ensuring a smooth, interactive experience",
      image: "/assets/MasterMind.png",
      video: "https://www.youtube.com/watch?v=sPT1H2YXt6U&ab_channel=Fun2sh",
      tags: ["Java", "Multithreading", "Socket Programming"],
      category: "fullstack",
      github: "https://github.com/acbikash13/Mastermind",
      demo: "#",
    },
    {
      id: 6,
      title: "Research Collab App",
      description:
        "A university research collaboration platform designed to connect researchers and students. The app features advanced filtering, project discovery, and AI-powered recommendation systems for research opportunities. Secure authentication is implemented using OAuth",
      image: "/assets/ResearchCollabs.png",
      video: "https://youtu.be/JkNWyfzksYI", // Replace with your actual YouTube URL
      tags: ["React", "Tailwind CSS", "OAuth"],
      category: "fullstack",
      github: "https://github.com/ResearchCollaborationApp/researchAndProjectCollab",
      demo: "#",
    },
    {
      id: 7,
      title: "Real-Time Object Detection System",
      description:
        "Developed a real-time object detection pipeline integrating Kafka for message streaming and Spark for distributed processing. The system leverages YOLOv3 for fast and accurate object detection on video streams",
      image: "/assets/RealTimeObjectDetection.png",
      video: "", // No video available
      tags: ["Python", "YOLOV3", "Kafka", "Spark", "OpenCV"],
      category: "machinelearning",
      github: "https://github.com/acbikash13/kafkaObjectDetection",
      demo: "#",
    },
    {
      id: 8,
      title: "Sentiment Analysis Platform",
      description:
        "A large-scale sentiment analysis system that processes over 21 million RateMyProfessor reviews, achieving 86% accuracy using a fine-tuned DistilBERT model. The system is optimized with PySpark for large-scale data processing, reducing training time by 30%",
      image: "/assets/sentimentAnalysis.png",
      video: "", // No video available
      tags: ["DistilBERT", "PySpark", "NLTK", "Keras", "Transformers", "PyTorch"],
      category: "datascience",
      github: "https://github.com/acbikash13/RateMyProfessorSentimentAnalysis",
      demo: "#",
    },
    {
      id: 9,
      title: "Defects Coil Detection System",
      description:
        "An industrial machine learning pipeline developed to detect defects in coil production in collaboration with North American Stainless. The model improved defect detection accuracy by 30%, leveraging deep learning techniques. PostgreSQL stores production data, and Flask serves as the API layer. Used Neural Networks, Built Data Pipelines, Performed Outlier Detections, and evaluated 10+ ML Algorithms. Worked with about 50GB of data. Can not share the code due to NDA with NAS.",
      image: "/assets/DefectCoil.png",
      video: "", // No video available
      tags: ["Python", "TensorFlow", "Keras", "PostgreSQL", "Flask", "Neural Networks", "Deep Learning"],
      category: "machinelearning",
      github: "https://github.com/acbikash13",
      demo: "#",
    },
    {
      id: 10,
      title: "Job Scraper and Recommendation Tool",
      description:
        " Built an automated job scraping tool using Python and JobSpy, storing job postings in an AWS-hosted PostgreSQL database. The system schedules CRON jobs to collect data every 30 minutes, ensuring up-to-date job listings for AI-powered recommendations",
      image: "/assets/JobScrapper.png",
      video: "", // No video available
      tags: ["Python", "AWS", "PostgreSQL", "JobSpy", "Psycopg2"],
      category: "datascience",
      github: "https://github.com/H1BMatch/",
      demo: "#",
    },
  ]

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter)

  // Helper function to check if a demo link is valid
  const hasValidDemoLink = (demoLink) => {
    return demoLink && demoLink !== "#"
  }

  // Helper function to check if a video link is valid
  const hasValidVideoLink = (videoLink) => {
    return videoLink && videoLink.trim() !== ""
  }

  // Helper function to extract YouTube video ID from URL
  const getYouTubeVideoId = (url) => {
    if (!url) return null

    // Handle different YouTube URL formats
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
    const match = url.match(regExp)

    return match && match[2].length === 11 ? match[2] : null
  }

  // Open video modal
  const openVideoModal = (project) => {
    if (hasValidVideoLink(project.video)) {
      setActiveVideo(project)
      document.body.style.overflow = "hidden" // Prevent scrolling when modal is open
    }
  }

  // Close video modal
  const closeVideoModal = () => {
    setActiveVideo(null)
    document.body.style.overflow = "" // Restore scrolling
  }

  // Handle keyboard events for accessibility
  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      closeVideoModal()
    }
  }

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
                {hasValidVideoLink(project.video) && (
                  <div
                    className="absolute inset-0 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50 cursor-pointer"
                    onClick={() => openVideoModal(project)}
                  >
                    <div className="z-20 bg-primary/90 rounded-full p-3">
                      <Play className="h-8 w-8 text-white" />
                    </div>
                  </div>
                )}
                <Image
                  src={project.image || "/placeholder.svg?height=400&width=600"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300"
                />
                {hasValidVideoLink(project.video) && (
                  <div className="absolute top-2 right-2 bg-black/70 text-white p-1 rounded-md z-20 opacity-70 group-hover:opacity-100 transition-opacity">
                    <div className="flex items-center gap-1 text-xs">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                      </svg>
                      Watch Demo
                    </div>
                  </div>
                )}
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
                {hasValidDemoLink(project.demo) && (
                  <Button size="sm" asChild>
                    <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                    </Link>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {/* YouTube Video Modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          onClick={closeVideoModal}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <div className="relative w-full max-w-5xl max-h-[90vh] p-4">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 z-10 bg-black/50 text-white hover:bg-black/70"
              onClick={(e) => {
                e.stopPropagation()
                closeVideoModal()
              }}
            >
              <X className="h-6 w-6" />
              <span className="sr-only">Close</span>
            </Button>

            <div className="bg-black rounded-lg overflow-hidden">
              <div className="aspect-video relative">
                {getYouTubeVideoId(activeVideo.video) ? (
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${getYouTubeVideoId(activeVideo.video)}?autoplay=1`}
                    title={activeVideo.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    onClick={(e) => e.stopPropagation()}
                  ></iframe>
                ) : (
                  <div className="flex items-center justify-center h-full bg-black text-white">Video not available</div>
                )}
              </div>
              <div className="p-4 bg-background">
                <h3 className="text-xl font-bold">{activeVideo.title}</h3>
                <p className="text-muted-foreground mt-2">{activeVideo.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

