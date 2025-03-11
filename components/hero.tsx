'use client'

import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  return (
    <section id="home" className="relative pt-20 lg:pt-24 overflow-hidden">
      <div className="absolute inset-0 bg-grid-small-black/[0.2] dark:bg-grid-small-white/[0.2] -z-10" />
      <div className="container px-4 md:px-6 flex flex-col lg:flex-row items-center justify-between py-16 md:py-24 gap-8 lg:gap-16">
        <div className="flex flex-col space-y-6 max-w-2xl">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Hi, I'm <span className="text-primary">Bikash Acharya</span>
            </h1>
            <p className="text-xl text-muted-foreground">Software Engineer & Data Scientist</p>
          </div>
          <p className="text-muted-foreground text-lg">
            I am a recent Computer Science (Data Science minor) graduate from Northern Kentucky University with 6+ years
            of coding experience. Skilled in Software Engineering, Machine Learning, and Data Science, with hands-on
            experience in full-stack development, building scalable data pipelines, and implementing end-to-end ML
            solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button asChild size="lg">
              <Link href="#projects">
                View My Work <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="#contact">Contact Me</Link>
            </Button>
          </div>
          <div className="flex gap-4">
            <Button variant="ghost"  size="icon" asChild>
              <Link href="https://github.com/acbikash13" target="_blank" rel="noopener noreferrer">
                <Github className="h-7 w-7" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost"  size="icon" asChild>
              <Link href="https://linkedin.com/in/acbikash13" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-7 w-7" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button variant="ghost"  size="icon" asChild>
              <Link href="mailto:sebikash10@gmail.com" target="_blank" rel="noopener noreferrer">
                <Mail className="h-7 w-7" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
          </div>
        </div>
        <div className="relative w-full max-w-sm lg:max-w-md">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-primary/50 rounded-full blur-xl opacity-75 animate-pulse"></div>
          <div className="relative bg-background rounded-full overflow-hidden border-2 border-muted">
            <Image
              src="/assets/profile.jpg"
              alt="Profile"
              width={500}
              height={500}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

