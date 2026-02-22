"use client";

import { useEffect, useState } from "react";
import { buildLoading, introCard, skillsCard, experienceCard, projectsCard, certificationsCard, contactCard } from "./customCards";


declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

function Section({ children }: { children: React.ReactNode }) {
  return (
    <section className="h-screen snap-center flex items-center justify-center px-6">
      <div className="w-full max-w-4xl">
        {children}
      </div>
    </section>
  );
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
  // if (loading) {
  //   const totalBars = 30;
  //   const filledBars = Math.floor((progress / 100) * totalBars);
  //   const emptyBars = totalBars - filledBars;
  //   return buildLoading(filledBars, emptyBars, progress)
  // }

  return (
    <main className="relative bg-gray-950 text-white 
    h-screen overflow-y-scroll 
    snap-y snap-mandatory">
      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(150,150,150,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(150,150,150,0.08)_1px,transparent_1px)] bg-[size:40px_40px]" />
      {/* INTRO CARD */}
      <Section>
        {introCard()}
      </Section>
      {/* SKILL CARD */}

      <Section>
        {skillsCard()}
      </Section>
      {/* EXPERIENCE CARD */}

      <Section>
        {experienceCard()}
      </Section>
      {/* PROJECTS CARD */}

      <Section>
        {projectsCard()}
      </Section>

      {/* CERTIFICATIONS CARD */}

      <Section>
        {certificationsCard()}
      </Section>

      {/* CONTACT CARD */}

      <Section>
        {contactCard()}
      </Section>

    </main>
  );
}