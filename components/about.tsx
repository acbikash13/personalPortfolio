import { Button } from "@/components/ui/button"
import { FileText } from "lucide-react"
import Link from "next/link"

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
          <div className="w-12 h-1 bg-primary my-4"></div>
          <p className="text-muted-foreground text-lg max-w-3xl">
            Get to know more about my background, skills, and passion for technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Who am I?</h3>
            <p className="text-muted-foreground">
              I'm a passionate Software Engineer with expertise in full-stack development, data science, and machine
              learning. I've built Full stack Projects like a custom Job Search Platform and also worked on Machine
              Learning projects like Sentiment Analysis for 20M+ reviews, fine-tuning models like DistilBERT, and
              Designing ML pipelines that improved defect detection by 30%.
            </p>
            <p className="text-muted-foreground">
              I graduated from Northern Kentucky University with a Bachelor's degree in Computer Science and a minor in
              Data Science. Throughout my academic journey, I developed a deep interest in solving complex problems and
              building innovative solutions.
            </p>
            <p className="text-muted-foreground">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or
              participating in community events. I'm always eager to learn and grow in this ever-evolving field.
            </p>
            <Button asChild>
              <Link href="/assets/BikashAch_Resume.pdf" target="_blank" rel="noopener noreferrer">
              <FileText className="mr-2 h-4 w-4" /> View Resume
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-background p-6 rounded-lg shadow-sm border">
              <h4 className="font-bold text-xl mb-2">Education</h4>
              <ul className="space-y-2">
                <li>
                  <p className="font-medium">BSc in Computer Science</p>
                  <p className="text-sm text-muted-foreground">Northern Kentucky University, 2021-2024</p>
                </li>
                <li>
                  <p className="font-medium">Minor in Data Science</p>
                  <p className="text-sm text-muted-foreground">Northern Kentucky University, 2021-2024</p>
                </li>
              </ul>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-sm border">
              <h4 className="font-bold text-xl mb-2">Interests</h4>
              <ul className="space-y-2">
                <li>Software Development</li>
                <li>Data Science</li>
                <li>Machine Learning</li>
                <li>Cloud Computing</li>
                <li>Open Source</li>
              </ul>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-sm border">
              <h4 className="font-bold text-xl mb-2">Location</h4>
              <ul className="space-y-2">
                <li>Cincinnati, OH</li>
                <li>(Willing to Relocate)</li>
              </ul>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-sm border">
              <h4 className="font-bold text-xl mb-2">Contact</h4>
              <ul className="space-y-2">
                <li>sebikash10@gmail.com</li>
                <li>github.com/acbikash13</li>
                <li>linkedin.com/in/acbikash13</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

