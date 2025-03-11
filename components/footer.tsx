import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t">
      <div className="container px-4 md:px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Bikash Acharya</h3>
            <p className="text-muted-foreground">
              Software Engineer & Data Scientist passionate about building innovative solutions.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://github.com/acbikash13"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://linkedin.com/in/acbikash13"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="mailto:sebikash10@gmail.com" className="text-muted-foreground hover:text-primary">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="#home" className="text-muted-foreground hover:text-primary">
                Home
              </Link>
              <Link href="#about" className="text-muted-foreground hover:text-primary">
                About
              </Link>
              <Link href="#skills" className="text-muted-foreground hover:text-primary">
                Skills
              </Link>
              <Link href="#projects" className="text-muted-foreground hover:text-primary">
                Projects
              </Link>
              <Link href="#experience" className="text-muted-foreground hover:text-primary">
                Experience
              </Link>
              <Link href="#contact" className="text-muted-foreground hover:text-primary">
                Contact
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold">Contact</h3>
            <address className="not-italic text-muted-foreground space-y-2">
              <p>Cincinnati, OH (Willing to Relocate)</p>
              <p>
                <a href="mailto:sebikash10@gmail.com" className="hover:text-primary">
                  sebikash10@gmail.com
                </a>
              </p>
              <p>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">© {currentYear} Bikash Acharya. All rights reserved.</p>
          <p className="text-sm text-muted-foreground mt-4 md:mt-0">Designed and built with ❤️</p>
        </div>
      </div>
    </footer>
  )
}

