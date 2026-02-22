
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Download, Github, Linkedin, Instagram, MapPin } from "lucide-react";

const trackEvent = (action: string, label: string) => {
    if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", action, {
            event_category: "engagement",
            event_label: label,
        });
    }
};

const terminalBadgeStyles = `
  px-3 py-1 rounded-md
  bg-black border border-green-700/40
  text-neutral-200 text-sm font-mono
  hover:bg-green-950 hover:border-green-400
  hover:shadow-[0_0_10px_rgba(0,255,100,0.3)]
  transition-all duration-300
`;

const terminalButtonStyles = `
inline-flex items-center gap-2 px-4 py-2 border border-green-800/40 rounded-lg 
hover:bg-green-900/50 hover:shadow-lg hover:shadow-green-700/30 
hover:-translate-y-1 hover:border-green-400 hover:shadow-[0_0_10px_rgba(0,255,100,0.4)]
transition-all duration-300 ease-in-out
`;

export function buildLoading(filledBars: number, emptyBars: number, progress: number) {
    return (
        <div className="fixed inset-0 bg-black text-green-500 flex items-center justify-center font-mono text-lg">
            <div className="w-full max-w-xl px-4">
                {/* <p className="mb-4 text-white">Loaded</p> */}
                <p>
                    [
                    <span className="text-green-500">
                        {"#".repeat(filledBars)}
                    </span>
                    <span className="text-gray-700">
                        {"#".repeat(emptyBars)}
                    </span>
                    ] {progress.toFixed(1)}%
                </p>
            </div>
        </div>
    );
}

export function introCard() {
    return <motion.div
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
            <span className="animate-pulse text-green-500">_</span>
        </h1>

        <p className="text-neutral-400 mt-2 mb-4">
            senior-software-developer
        </p>
        <p className="text-neutral-400 mt-2 mb-6">
            Flutter Developer with 3+ years of experience delivering
            production-ready applications for multi-vendor platforms and
            restaurant management systems. Specialized in scalable,
            offline-first architectures and real-time system design.
        </p>
    </motion.div>
}

export function skillsCard() {
    return <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 bg-neutral-950 border border-green-900/40 rounded-xl shadow-2xl 
        w-full max-w-3xl h-[85vh] flex flex-col font-mono"
    >

        {/* Terminal Header */}
        <div className="flex items-center gap-2 p-8 pb-4 shrink-0">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>

        {/* skills */}
        <div className="px-8 pb-8 overflow-y-auto flex-1">


            {/* LANGUAGES */}
            <div>
                <p className="text-green-400 mb-3">$ languages</p>
                <div className="flex flex-wrap gap-3">
                    {["Flutter", "Dart", "Kotlin", "Swift", "Python"].map((item) => (
                        <span
                            key={item}
                            className={terminalBadgeStyles}
                        >
                            <span className="text-green-400 mr-2">
                                &gt;_
                            </span>
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
                            className={terminalBadgeStyles}
                        >
                            <span className="text-green-400 mr-2">
                                &gt;_
                            </span>
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
                            className={terminalBadgeStyles}
                        >
                            <span className="text-green-400 mr-2">
                                &gt;_
                            </span>
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
                            className={terminalBadgeStyles}
                        >
                            <span className="text-green-400 mr-2">
                                &gt;_
                            </span>
                            {item}
                        </span>
                    ))}
                </div>
            </div>

            {/* INTEGRATIONS */}
            <div className="mt-8">
                <p className="text-green-400 mb-3">$ integrations</p>
                <div className="flex flex-wrap gap-3">
                    {["REST APIs", "Firebase", "Stripe", "In-App Purchases", "Google Maps API", "Google Business Profile API", "Push Notifications"].map((item) => (
                        <span
                            key={item}
                            className={terminalBadgeStyles}
                        >
                            <span className="text-green-400 mr-2">
                                &gt;_
                            </span>
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
                            className={terminalBadgeStyles}
                        >
                            <span className="text-green-400 mr-2">
                                &gt;_
                            </span>
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
                            className={terminalBadgeStyles}
                        >
                            <span className="text-green-400 mr-2">
                                &gt;_
                            </span>
                            {item}
                        </span>
                    ))}
                </div>
            </div>
        </div>

    </motion.div>
}

export function experienceCard() {
    return <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 bg-neutral-950 border border-green-900/40 rounded-xl shadow-2xl 
        w-full max-w-3xl h-[85vh] flex flex-col font-mono"
    >
        {/* Terminal Header */}
        <div className="flex items-center gap-2 p-8 pb-4 shrink-0">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>

        <p className="text-green-400 mb-6 px-8">$ ls experience</p>
        <div className="px-8 pb-8 overflow-y-auto flex-1">

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
        </div>
    </motion.div>
}

export function projectsCard() {
    return <motion.div
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
                online-order-management-system
            </h3>

            <p className="text-neutral-400 text-sm mb-3">
                Flutter · Firebase · REST API · GetX · Push Notifications
            </p>

            <ul className="text-neutral-300 text-sm space-y-1">
                <li>• Centralized dashboard for managing website & app orders</li>
                <li>• Accept / Reject / Complete order workflow</li>
                <li>• Real-time alert system for new incoming orders</li>
                {/* <li>• Prevented missed orders through sound & push notifications</li> */}
                <li>• Reduced manual coordination between staff by 40%</li>
            </ul>
        </div>

        {/* Project 2 */}
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

        {/* Project 3 */}
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

}

export function certificationsCard() {
    return <motion.div
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
}

export function contactCard() {
    return <motion.div
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
        <div className="flex items-center gap-2 text-neutral-300 mb-6">
            <MapPin size={16} className="text-green-500" />
            <span>Thiruvananthapuram, Kerala, India</span>
        </div>
        <p className="text-green-400 mb-4">$ contact --email</p>
        <a
            href="mailto:pranavps962@gmail.com"
            onClick={() => trackEvent("click", "email")}
            className={terminalButtonStyles}
        >
            <Mail size={16} />
            pranavps962@gmail.com
        </a>

        <p className="text-green-400 mb-4 mt-8">$ cat resume.pdf</p>
        <a
            href="/Pranav P.pdf"
            download
            onClick={() => trackEvent("download", "resume")}
            className={terminalButtonStyles}
        >
            <Download size={16} />
            Download Resume
        </a>

        <p className="text-green-400 mb-4 mt-8">$ ls ./social-links</p>
        <div className="flex flex-wrap gap-4">
            <a
                href="https://github.com/hashcode404"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent("click", "github")}
                className={terminalButtonStyles}
            >
                <Github size={16} />
                GitHub
            </a>

            <a
                href="https://www.linkedin.com/in/pranav-p-a882331b3/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent("click", "linkedin")}
                className={terminalButtonStyles}
            >
                <Linkedin size={16} />
                LinkedIn
            </a>

            <a
                href="https://www.instagram.com/hashcode.404"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent("click", "instagram")}
                className={terminalButtonStyles}
            >
                <Instagram size={16} />
                Instagram
            </a>
        </div>
    </motion.div>
}