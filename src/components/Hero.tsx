'use client'

import { motion } from 'framer-motion'
import { Facebook, Github, Linkedin } from 'lucide-react'

import Image from 'next/image'

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center pt-32 pb-20 lg:py-0"
    >
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="order-2 lg:order-1"
        >
          <span className="text-purple-400">WELCOME TO MY WORLD</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-2">
            Hi, I&apos;m <span className="text-purple-500">Ragib Barket</span>
            <br />
            <span>Frontend Developer</span>
          </h1>
          <p className="mt-4 text-gray-400 max-w-lg mx-auto lg:mx-0">
            I&apos;m a frontend developer with one year of professional
            experience in creating responsive and user-friendly web
            applications. My expertise lies in technologies like HTML, CSS,
            JavaScript, React, and modern web frameworks such as Next.js and
            Bootstrap.
          </p>
          <button className=" bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 my-5">
            <a
              href="https://docs.google.com/document/d/11myWxdJk56IH0uZuSVarwhB8TYtIAyptoSDcGBcdPG8/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              My Resume
            </a>
          </button>
          <div className="flex gap-4 mt-6">
            <motion.a
              href="https://github.com/ragibBarket317"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 bg-gray-800 rounded-full hover:bg-gray-700"
            >
              <Github className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/ragib-barket-a6b675215"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 bg-gray-800 rounded-full hover:bg-gray-700"
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="https://www.facebook.com/rb.ragib"
              target="_blank"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 bg-gray-800 rounded-full hover:bg-gray-700"
            >
              <Facebook className="w-6 h-6" />
            </motion.a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="order-1 lg:order-2 relative w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[360px] mx-auto aspect-square"
        >
          <div className="absolute inset-0 bg-purple-500/20 rounded-3xl transform rotate-6" />
          <Image
            src="/ragib.png"
            alt="Profile"
            width={360}
            height={360}
            className="rounded-3xl relative z-10 object-cover w-full h-full"
          />
        </motion.div>
      </div>
    </section>
  )
}
