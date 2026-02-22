"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="relative min-h-screen flex items-center flex-col gap-15 justify-center bg-gray-950 text-white overflow-hidden">

      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(150,150,150,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(150,150,150,0.08)_1px,transparent_1px)] bg-[size:40px_40px]" />
      {/* CENTER CARD */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 bg-neutral-950  border border-green-900/40 rounded-xl shadow-2xl w-[90%] max-w-3xl p-8 font-mono"
      >

        {/* Terminal Header */}
        <div className="flex items-center gap-2 mb-6">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>

        {/* whoami */}
        <p className="text-green-400 mb-2">$ whoami</p>

        <h1 className="text-5xl md:text-6xl font-mono font-bold text-white">
          Pranav P
        </h1>

        <p className="text-neutral-400 mt-2 mb-6">
          Senior Software Developer
        </p>

        {/* skills */}
        {/* LANGUAGES */}
        <div>
          <p className="text-green-400 mb-3">$ languages</p>
          <div className="flex flex-wrap gap-3">
            {["Flutter", "Dart", "Kotlin", "Swift", "Python"].map((item) => (
              <span
                key={item}
                className="px-4 py-2 border border-green-700 bg-green-900/20 rounded-lg 
               hover:bg-green-900/50 hover:shadow-lg hover:shadow-green-700/30 
               hover:-translate-y-1 hover:scale-105 
               transition-all duration-300 ease-in-out"              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* ARCHITECTURE */}
        <div className="mt-8">
          <p className="text-green-400 mb-3">$ architecture</p>
          <div className="flex flex-wrap gap-3">
            {["Clean Architecture", "DDD", "MVC", "MVVM"].map((item) => (
              <span
                key={item}
                className="px-4 py-2 border border-green-700 bg-green-900/20 rounded-lg 
               hover:bg-green-900/50 hover:shadow-lg hover:shadow-green-700/30 
               hover:-translate-y-1 hover:scale-105 
               transition-all duration-300 ease-in-out"              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* STATE MANAGEMENT */}
        <div className="mt-8">
          <p className="text-green-400 mb-3">$ state-management</p>
          <div className="flex flex-wrap gap-3">
            {["GetX", "Bloc", "Provider", "Riverpod"].map((item) => (
              <span
                key={item}
                className="px-4 py-2 border border-green-700 bg-green-900/20 rounded-lg 
               hover:bg-green-900/50 hover:shadow-lg hover:shadow-green-700/30 
               hover:-translate-y-1 hover:scale-105 
               transition-all duration-300 ease-in-out"              >
                {item}
              </span>
            ))}
          </div>
        </div>
        {/* DATABASE */}
        <div className="mt-8">
          <p className="text-green-400 mb-3">$ database</p>
          <div className="flex flex-wrap gap-3">
            {["Firebase Firestore", "Hive", "SQLite"].map((item) => (
              <span
                key={item}
                className="px-4 py-2 border border-green-700 bg-green-900/20 rounded-lg 
               hover:bg-green-900/50 hover:shadow-lg hover:shadow-green-700/30 
               hover:-translate-y-1 hover:scale-105 
               transition-all duration-300 ease-in-out"              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* INTEGRATIONS */}
        <div className="mt-8">
          <p className="text-green-400 mb-3">$ integrations</p>
          <div className="flex flex-wrap gap-3">
            {["REST APIs", "Firebase", "Stripe", "Google Maps API", "Push Notifications"].map((item) => (
              <span
                key={item}
                className="px-4 py-2 border border-green-700 bg-green-900/20 rounded-lg 
               hover:bg-green-900/50 hover:shadow-lg hover:shadow-green-700/30 
               hover:-translate-y-1 hover:scale-105 
               transition-all duration-300 ease-in-out"              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* VERSION CONTROL */}
        <div className="mt-8">
          <p className="text-green-400 mb-3">$ version-control</p>
          <div className="flex flex-wrap gap-3">
            {["Git", "GitHub"].map((item) => (
              <span
                key={item}
                className="px-4 py-2 border border-green-700 bg-green-900/20 rounded-lg 
               hover:bg-green-900/50 hover:shadow-lg hover:shadow-green-700/30 
               hover:-translate-y-1 hover:scale-105 
               transition-all duration-300 ease-in-out"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* CI/CD */}
        <div className="mt-8">
          <p className="text-green-400 mb-3">$ ci-cd</p>
          <div className="flex flex-wrap gap-3">
            {["GitHub Actions", "Fastlane"].map((item) => (
              <span
                key={item}
                className="px-4 py-2 border border-green-700 bg-green-900/20 rounded-lg 
               hover:bg-green-900/50 hover:shadow-lg hover:shadow-green-700/30 
               hover:-translate-y-1 hover:scale-105 
               transition-all duration-300 ease-in-out"              >
                {item}
              </span>
            ))}
          </div>
        </div>

      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 bg-neutral-950 border border-green-900/40 rounded-xl shadow-2xl w-[90%] max-w-3xl p-8 font-mono"
      >
        {/* Terminal Header */}
        <div className="flex items-center gap-2 mb-6">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>

        <p className="text-green-400 mb-6">$ ls experience</p>

        {/* Company 1 */}
        <div className="mb-10">
          <h3 className="text-white text-lg font-semibold">
            senior-software-developer (flutter)
          </h3>
          <p className="text-neutral-400 text-sm mb-3">
            Ferns IT Solutions · Dec 2022 – Present · Kerala, India
          </p>

          <ul className="text-neutral-300 text-sm space-y-2">
            <li>• Delivered 8+ production mobile apps serving 5,000+ users</li>
            <li>• Built multi-vendor food platform (100+ restaurants, 30% higher order completion)</li>
            <li>• Engineered offline POS system with 100% uptime during outages</li>
            <li>• Reduced API response time from 2.5s → 1.2s</li>
            <li>• Integrated Stripe, Google Maps API & Google Business Profile API</li>
          </ul>
        </div>

        {/* Company 2 */}
        <div className="mb-10">
          <h3 className="text-white text-lg font-semibold">
            software-development-intern (flutter, kotlin)
          </h3>
          <p className="text-neutral-400 text-sm mb-3">
            RichkenMedia · Mar 2022 – Nov 2022
          </p>

          <ul className="text-neutral-300 text-sm space-y-2">
            <li>• Worked on content streaming application</li>
            <li>• Applied DDD architecture & Bloc state management</li>
            <li>• Assisted in backend API integration & debugging</li>
          </ul>
        </div>

        {/* Company 3 */}
        <div>
          <h3 className="text-white text-lg font-semibold">
            fullstack-development-intern (python)
          </h3>
          <p className="text-neutral-400 text-sm mb-3">
            Quest Innovative Solutions · Oct 2021 – Nov 2022
          </p>

          <ul className="text-neutral-300 text-sm space-y-2">
            <li>• Built full-stack web features using Python</li>
            <li>• Learned SDLC, version control & team collaboration</li>
          </ul>
        </div>
      </motion.div>

      {/* PROJECTS CARD */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 bg-neutral-950  border border-green-900/40 rounded-xl shadow-2xl w-[90%] max-w-3xl p-8 font-mono"
      >
        {/* Terminal Header */}
        <div className="flex items-center gap-2 mb-6">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>

        <p className="text-green-400 mb-4">$ ls projects</p>

        {/* Project 1 */}
        <div className="mb-10">
          <h3 className="text-white text-lg font-semibold mb-2">
            multi-vendor-food-platform
          </h3>

          <p className="text-neutral-400 text-sm mb-3">
            Flutter · Firebase · GetX · Stripe
          </p>

          <ul className="text-neutral-300 text-sm space-y-1">
            <li>• 5,000+ active users</li>
            <li>• 99.9% Stripe transaction success</li>
            <li>• Real-time tracking & push notifications</li>
            <li>• 30% increase in order completion</li>
          </ul>
        </div>

        {/* Project 2 */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-2">
            offline-pos-waiter-system
          </h3>

          <p className="text-neutral-400 text-sm mb-3">
            Flutter · Hive · Local Networking
          </p>

          <ul className="text-neutral-300 text-sm space-y-1">
            <li>• Offline-first architecture</li>
            <li>• 100% uptime during outages</li>
            <li>• QR-based device pairing</li>
            <li>• Deployed across 10+ restaurants</li>
          </ul>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 bg-neutral-950 border border-green-900/40 rounded-xl shadow-2xl w-[90%] max-w-3xl p-8 font-mono"
      >
        {/* Terminal Header */}
        <div className="flex items-center gap-2 mb-6">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>

        <p className="text-green-400 mb-4">$ ls certifications</p>

        <div className="space-y-8">

          {/* Cert 1 */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-1">
              foundations-of-cybersecurity
            </h3>
            <p className="text-neutral-400 text-sm mb-2">
              Google · Issued Oct 2025
            </p>
            <a
              href="https://www.coursera.org/account/accomplishments/verify/VD8VV4BBPBWF"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-green-400 text-sm hover:underline mb-4"
            >
              view-credential →
            </a>
          </div>

          {/* Cert 2 */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-1 ">
              build-website-with-wordpress
            </h3>
            <p className="text-neutral-400 text-sm mb-2">
              Coursera Project Network · Issued Jul 2024
            </p>
            <a
              href="https://www.coursera.org/account/accomplishments/verify/VXHJCURTMUAC"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-green-400 text-sm hover:underline"
            >
              view-credential →
            </a>
          </div>

        </div>
      </motion.div>


      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 bg-neutral-950  border border-green-900/40 rounded-xl shadow-2xl w-[90%] max-w-3xl p-8 font-mono"
      >
        {/* Terminal Header */}
        <div className="flex items-center gap-2 mb-6">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>

        {/* contact info */}
        <p className="text-green-400 mb-2 mt-8">$ contact --info</p>
        <h2 className="text-3xl font-bold text-white mb-6">
          Let's Connect
        </h2>

        <p className="text-green-400 mb-2">$ location --current</p>
        <p className="text-neutral-300 mb-6">
          Thiruvananthapuram, Kerala, India
        </p>
        <p className="text-green-400 mb-2">$ contact --email</p>
        <a
          href="mailto:pranavps962@gmail.com"
          className="inline-block px-4 py-2 border border-green-700 bg-green-900/20 rounded-lg 
             hover:bg-green-900/50 hover:shadow-lg hover:shadow-green-700/30 
             hover:-translate-y-1 hover:scale-105 
             transition-all duration-300 ease-in-out"        >
          pranavps962@gmail.com
        </a>

        <p className="text-green-400 mb-4 mt-8">$ cat resume.pdf</p>
        <a
          href="/Pranav P.pdf"
          download
          className="inline-block px-4 py-2 border border-green-700 bg-green-900/20 rounded-lg 
             hover:bg-green-900/50 hover:shadow-lg hover:shadow-green-700/30 
             hover:-translate-y-1 hover:scale-105 
             transition-all duration-300 ease-in-out"
        >
          Download Resume
        </a>

        <p className="text-green-400 mb-4 mt-8">$ ls ./social-links</p>
        <div className="flex flex-wrap gap-4">
          <a
            href="https://github.com/hashcode404"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-green-700 bg-green-900/20 rounded-lg 
               hover:bg-green-900/50 hover:shadow-lg hover:shadow-green-700/30 
               hover:-translate-y-1 hover:scale-105 
               transition-all duration-300 ease-in-out"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/pranav-p-a882331b3/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-green-700 bg-green-900/20 rounded-lg 
               hover:bg-green-900/50 hover:shadow-lg hover:shadow-green-700/30 
               hover:-translate-y-1 hover:scale-105 
               transition-all duration-300 ease-in-out"
          >
            LinkedIn
          </a>

          <a
            href="https://www.instagram.com/hashcode.404"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-green-700 bg-green-900/20 rounded-lg 
               hover:bg-green-900/50 hover:shadow-lg hover:shadow-green-700/30 
               hover:-translate-y-1 hover:scale-105 
               transition-all duration-300 ease-in-out"
          >
            Instagram
          </a>
        </div>
      </motion.div>




    </main>
  );
}