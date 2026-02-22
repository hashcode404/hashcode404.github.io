"use client";

import { useEffect, useState } from "react";
import { buildLoading, introCard, skillsCard, experienceCard, projectsCard, certificationsCard, contactCard } from "./customCards";


declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}




export default function Home() {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);
  if (loading) {
    const totalBars = 30;
    const filledBars = Math.floor((progress / 100) * totalBars);
    const emptyBars = totalBars - filledBars;
    return buildLoading(filledBars, emptyBars, progress)

  }

  return (
    <main className="relative min-h-screen flex items-center flex-col gap-15 justify-center bg-gray-950 text-white overflow-hidden">

      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(150,150,150,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(150,150,150,0.08)_1px,transparent_1px)] bg-[size:40px_40px]" />
      {/* INTRO CARD */}
      {introCard()}
      {/* SKILL CARD */}

      {skillsCard()}
      {/* EXPERIENCE CARD */}

      {experienceCard()}
      {/* PROJECTS CARD */}

      {projectsCard()}

      {/* CERTIFICATIONS CARD */}

      {certificationsCard()}

      {/* CONTACT CARD */}

      {contactCard()}









    </main>
  );
}