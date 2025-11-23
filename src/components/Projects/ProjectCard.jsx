// components/ProjectCard.jsx
"use client";

import { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function ProjectCard() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const res = await fetch("/json/project.json");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchProjects();
  }, []);

  if (loading) {
    return <div className="text-center text-white">Loading projects...</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 overflow-x-auto pb-6 px-4 md:px-0">
      {projects.map((project) => (
        <div key={project.id} className="relative min-w-[320px] md:min-w-[420px] lg:min-w-[500px] rounded-3xl overflow-hidden bg-black shadow-xl group">
          {/* Project Image */}
          <div className="relative">
            <Image src={project.image} alt={project.name} width={800} height={500} className="object-cover w-full h-[350px] group-hover:scale-105 transition-all duration-500" />
          </div>

          {/* Glass Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 flex items-center justify-between backdrop-blur-lg bg-black/60 rounded-t-2xl">
            <div>
              <p className="text-gray-400 text-sm">{project.tags?.join(", ")}</p>
              <h2 className="text-xl md:text-2xl font-semibold text-white mt-1">{project.name}</h2>

              <div className="mt-3 inline-block bg-gray-800 text-gray-200 text-xs px-4 py-1.5 rounded-full">{project.year}</div>
            </div>

            {/* Arrow Button */}
            <a href={project.live_link} target="_blank" className="flex items-center justify-center w-14 h-14 border border-gray-700 rounded-2xl hover:bg-gray-800 transition-all duration-300">
              <ArrowUpRight className="text-white w-6 h-6" />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
