import { Github, Linkedin, Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="py-8  border-t border-gray-800">
      <div className="container mx-auto flex flex-col items-center gap-4">
        <div className="flex gap-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:example@email.com"
            className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
        <p className="text-gray-400 text-sm">
          © 2025 Ragib Barket. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
