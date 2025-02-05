'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { experiences, education } from '@/lib/data'

export function Experience() {
  const [activeTab, setActiveTab] = useState<'experience' | 'education'>(
    'experience'
  )

  return (
    <section id="resume" className="py-20">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-8"
        >
          My Resume
        </motion.h2>

        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button
              type="button"
              className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
                activeTab === 'experience'
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
              onClick={() => setActiveTab('experience')}
            >
              Experience
            </button>
            <button
              type="button"
              className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
                activeTab === 'education'
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
              onClick={() => setActiveTab('education')}
            >
              Education
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === 'experience' && (
            <motion.div
              key="experience"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="max-w-3xl mx-auto"
            >
              {experiences.map((experience, index) => (
                <motion.div
                  key={experience.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-8 pb-8 border-l border-purple-500/50 last:pb-0"
                >
                  <div className="absolute left-0 top-0 w-3 h-3 bg-purple-500 rounded-full -translate-x-[7px]" />
                  <h3 className="text-xl font-semibold">{experience.title}</h3>
                  <p className="text-purple-400 mb-2">{experience.company}</p>
                  <p className="text-gray-400 text-sm mb-4">
                    {experience.duration}
                  </p>
                  <ul className="list-disc list-inside text-gray-400">
                    {experience.description.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === 'education' && (
            <motion.div
              key="education"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="max-w-3xl mx-auto"
            >
              {education.map((edu, index) => (
                <motion.div
                  key={edu.institution}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-8 pb-8 border-l border-purple-500/50 last:pb-0"
                >
                  <div className="absolute left-0 top-0 w-3 h-3 bg-purple-500 rounded-full -translate-x-[7px]" />
                  <h3 className="text-xl font-semibold">{edu.institution}</h3>
                  <p className="text-purple-400 mb-2">{edu.degree}</p>
                  <p className="text-gray-400 text-sm">{edu.duration}</p>
                  <p className="text-gray-400 text-sm mt-3">{edu.content}</p>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
