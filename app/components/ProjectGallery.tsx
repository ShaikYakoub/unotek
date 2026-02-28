"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// ─── Gallery data ─────────────────────────────────────────────────────────── //
// Replace image paths with actual assets once generated.
// Heights intentionally vary to create the masonry staggering effect.
const projects = [
  {
    id: 1,
    title: "Aura Commercial Plaza",
    category: "Commercial Buildings",
    image: "/homepage/gallery/images/gallery-commercial.jpg",
    heightClass: "h-[360px]",
    description:
      "Multi-storey retail and office complex utilizing 6-inch AAC blocks for superior acoustic insulation between suites and a 25% reduction in structural steel.",
  },
  {
    id: 2,
    title: "Verdant Eco-Resort",
    category: "Hospitality Buildings",
    image: "/homepage/gallery/images/gallery-hospitality.jpg",
    heightClass: "h-[540px]",
    description:
      "High-end resort leveraging the exceptional fire and soundproofing properties of AAC walls for guest safety, privacy, and a GRIHA 5-star rating.",
  },
  {
    id: 3,
    title: "Meridian Low-Cost Housing",
    category: "Residential / Low Cost",
    image: "/homepage/gallery/images/gallery-residential.jpg",
    heightClass: "h-[320px]",
    description:
      "A 500-unit residential sector using 4-inch blocks to slash foundation dead load and cut construction-cycle time by over 30%.",
  },
  {
    id: 4,
    title: "Apex Industrial Park",
    category: "Industrial Buildings",
    image: "/homepage/gallery/images/gallery-industrial.jpg",
    heightClass: "h-[460px]",
    description:
      "Warehouse construction using 9-inch AAC blocks for maximum thermal insulation, 4-hour fire ratings, and zero-maintenance exterior walls.",
  },
  {
    id: 5,
    title: "Oakbridge International School",
    category: "Educational Buildings",
    image: "/homepage/gallery/images/gallery-education.jpg",
    heightClass: "h-[400px]",
    description:
      "State-of-the-art campus built entirely with lightweight AAC blocks, lowering the building carbon footprint and meeting LEED certification criteria.",
  },
  {
    id: 6,
    title: "Medisurge Hospital Complex",
    category: "Healthcare Buildings",
    image: "/homepage/gallery/images/gallery-healthcare.jpg",
    heightClass: "h-[480px]",
    description:
      "A multi-wing hospital built with AAC blocks for infection control, rapid construction, and 4-hour fire-rated walls. All patient rooms feature high acoustic insulation and zero asbestos.",
  },
];

// ─── Component ────────────────────────────────────────────────────────────── //
export default function ProjectGallery({
  whatsappLink,
}: {
  whatsappLink: string;
}) {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-8 md:px-24 font-sans">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8 }}
        className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8"
      >
        <div className="max-w-2xl">
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-blue-500 mb-4">
            Applications
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Proven Infrastructure.
          </h2>
          <p className="text-xl text-slate-500 font-light mt-4 leading-relaxed">
            AAC blocks are specified across every building typology — from
            affordable housing to five-star hospitality and heavy industrial.
          </p>
        </div>
        <a
          href={`${whatsappLink}%20I%20would%20like%20to%20see%20more%20completed%20project%20case%20studies.`}
          target="_blank"
          rel="noreferrer"
          className="flex-shrink-0 text-blue-600 font-bold hover:text-blue-800 transition-colors flex items-center gap-2 pb-2 border-b-2 border-blue-600 hover:border-blue-800"
        >
          Request Full Portfolio <ArrowUpRight size={20} />
        </a>
      </motion.div>

      {/*
        CSS Masonry layout:
        - columns-1 on mobile, 2 on tablet, 3 on desktop
        - break-inside-avoid prevents a card splitting across columns
        - space-y-8 gives vertical rhythm between stacked cards
      */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: 0.7,
              delay: i * 0.07,
              ease: [0.22, 1, 0.36, 1],
            }}
            onMouseEnter={() => setHoveredId(project.id)}
            onMouseLeave={() => setHoveredId(null)}
            className="group relative w-full overflow-hidden rounded-2xl bg-slate-100 break-inside-avoid shadow-enterprise-sm hover:shadow-enterprise-lg transition-all duration-500 cursor-pointer border border-slate-200"
          >
            {/* Image / placeholder */}
            <div
              className={`relative w-full ${project.heightClass} bg-slate-200 overflow-hidden`}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />

              {/* Category badge — always visible */}
              <span className="absolute top-5 left-5 bg-white/90 text-slate-700 text-xs font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-sm">
                {project.category}
              </span>
            </div>

            {/* Hover overlay */}
            <div
              className={`absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent flex flex-col justify-end p-8 transition-opacity duration-300 ${
                hoveredId === project.id ? "opacity-100" : "opacity-0"
              }`}
            >
              <h3
                className={`text-2xl font-bold text-white mb-3 transition-transform duration-300 ${
                  hoveredId === project.id ? "translate-y-0" : "translate-y-4"
                }`}
              >
                {project.title}
              </h3>
              <p
                className={`text-slate-300 text-sm font-light line-clamp-3 transition-transform duration-300 delay-75 ${
                  hoveredId === project.id ? "translate-y-0" : "translate-y-4"
                }`}
              >
                {project.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
