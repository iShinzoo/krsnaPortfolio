"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Code2, GraduationCap, ChevronRight } from "lucide-react";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    icon: Code2,
    content: [
      { name: "Frontend", items: ["React", "JavaScript", "HTML/CSS", "Tailwind"] },
      { name: "Backend", items: ["Node.js", "Express", "PostgreSQL", "Sequelize"] },
      { name: "Tools", items: ["Git", "Docker", "AWS", "Redux"] }
    ]
  },
  {
    title: "Education",
    id: "education",
    icon: GraduationCap,
    content: [
      {
        school: "Fullstack Academy of Code",
        degree: "Software Engineering Immersive",
        duration: "2023 - 2024"
      },
      {
        school: "University of California, Santa Cruz",
        degree: "Computer Science",
        duration: "2019 - 2023"
      }
    ]
  }
];

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState("skills");

  return (
    <section className="min-h-screen text-white" id="about">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-center mb-8"
        >
          About Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-gray-400 text-lg text-center"
        >
          I am a full stack developer passionate about building innovative web applications.
          With a strong foundation in modern technologies, I create seamless user experiences
          and robust backend solutions.
        </motion.div>

        <div className="flex justify-center gap-4 mb-12">
          {TAB_DATA.map((tab) => {
            const Icon = tab.icon;
            return (
              <motion.button
                key={tab.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300
                  ${activeTab === tab.id
                    ? 'bg-[#121212] text-white border border-purple-500/50'
                    : 'bg-black/20 text-gray-400 hover:text-white border border-gray-700'
                  }`}
              >
                <Icon className="w-5 h-5" />
                {tab.title}
              </motion.button>
            );
          })}
        </div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-[#121212] rounded-xl border border-gray-700 p-8"
        >
          {activeTab === "skills" ? (
            <div className="grid md:grid-cols-3 gap-6">
              {TAB_DATA.find(t => t.id === "skills").content.map((category, idx) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-black/40 p-6 rounded-xl border border-gray-700"
                >
                  <h3 className="text-xl font-semibold text-purple-500 mb-4">{category.name}</h3>
                  <ul className="space-y-3">
                    {category.items.map((skill, index) => (
                      <motion.li
                        key={skill}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-2 text-gray-400"
                      >
                        <ChevronRight className="w-4 h-4 text-purple-500" />
                        {skill}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {TAB_DATA.find(t => t.id === "education").content.map((edu, idx) => (
                <motion.div
                  key={edu.school}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-black/40 p-6 rounded-xl border border-gray-700"
                >
                  <h3 className="text-xl font-semibold text-purple-500">{edu.school}</h3>
                  <p className="text-gray-400 mt-2">{edu.degree}</p>
                  <p className="text-gray-500 mt-1">{edu.duration}</p>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;