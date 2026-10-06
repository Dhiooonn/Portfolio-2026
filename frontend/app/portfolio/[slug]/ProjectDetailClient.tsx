"use client";

import React from "react";
import Container from "@/app/components/ui/Container";
import Badge from "@/app/components/ui/BadgeSection";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { urlFor } from "@/lib/sanity";

interface Project {
  _id: string;
  title: string;
  slug: string;
  category?: string;
  year?: string;
  description?: string;
  thumbnail?: any;
  coverType?: string;
  videoUrl?: string;
  techStack?: string[];
  github?: string;
  demo?: string;
  gallery?: any[];
}

interface ProjectDetailClientProps {
  project: Project;
}

export default function ProjectDetailClient({ project }: ProjectDetailClientProps) {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  // Prepare gallery items array matching 3 Instagram Feed posts (aspect 4:5)
  const rawGallery = project.gallery || [];

  const galleryItems = Array.from({ length: 3 }).map((_, idx) => {
    const item = rawGallery[idx];
    const itemUrl = item?.asset ? urlFor(item).url() : null;

    // First card can be the cover video if coverType === "video"
    const isVideo = idx === 0 && project.coverType === "video" && !!project.videoUrl;
    
    // Fallback logic for media url
    const fallbackUrl = project.thumbnail ? urlFor(project.thumbnail).url() : null;
    const mediaUrl = itemUrl || (idx === 0 ? fallbackUrl : null);

    return {
      id: idx,
      url: mediaUrl,
      isVideo,
      videoUrl: project.videoUrl,
    };
  });

  return (
    <div className="w-full">
      <Container>
        {/* Subheading & Title */}
        <div className="mb-12">
          <Badge className="mb-6">Portfolio</Badge>
          <h1 className="text-hero font-mori font-medium tracking-tight text-text-primary leading-[0.9] -ml-1">
            {project.title}
          </h1>
        </div>

        {/* Project Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-20 font-mori">
          {/* Tech Stack column */}
          <div className="lg:col-span-7">
            <h2 className="text-body font-semibold text-text-primary mb-4 select-none">
              Tech Stack
            </h2>
            <div className="flex flex-wrap gap-2.5">
              {project.techStack && project.techStack.length > 0 ? (
                project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 border border-border-brand/40 bg-card-bg/40 text-text-secondary rounded-full text-[13px] font-medium tracking-tight select-none"
                  >
                    {tech}
                  </span>
                ))
              ) : (
                <span className="text-sm text-text-secondary italic">
                  Not specified
                </span>
              )}
            </div>
          </div>

          {/* Description & Links column */}
          <div className="lg:col-span-5">
            <p className="text-sm md:text-body text-text-secondary leading-relaxed mb-8 whitespace-pre-line">
              {project.description ||
                "A custom digital experience crafted using precise design principles and robust engineering to deliver a responsive, performant interface."}
            </p>

            {/* Links List */}
            <div className="flex flex-col border-t border-border-brand/40">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-between items-center py-4 border-b border-border-brand/40 text-body text-text-primary hover:text-text-secondary transition-colors duration-300 group"
                >
                  <span>Github Repository</span>
                  <ArrowUpRight
                    size={18}
                    className="text-text-secondary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                  />
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-between items-center py-4 border-b border-border-brand/40 text-body text-text-primary hover:text-text-secondary transition-colors duration-300 group"
                >
                  <span>Live Website</span>
                  <ArrowUpRight
                    size={18}
                    className="text-text-secondary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                  />
                </a>
              )}
            </div>
          </div>
        </div>
      </Container>

      {/* Instagram Feed Style Gallery Grid (3 Columns, 4:5 Aspect Ratio, No Border, No Label) */}
      <Container className="mb-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full"
        >
          {galleryItems.map((item) => (
            <motion.div key={item.id} variants={itemVariants} className="flex flex-col">
              {/* Instagram Feed Card Box (4:5 Aspect Ratio, No Border) */}
              <div className="relative w-full aspect-[4/5] bg-card-bg rounded-lg overflow-hidden group cursor-pointer">
                {item.isVideo && item.videoUrl ? (
                  <video
                    src={item.videoUrl}
                    poster={item.url || undefined}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                ) : item.url ? (
                  <Image
                    src={item.url}
                    alt={`${project.title} - Frame ${item.id + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                ) : (
                  <div className="w-full h-full bg-border-brand/10 flex items-center justify-center text-text-secondary/60 text-xs font-mori select-none">
                    No Media Frame
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </div>
  );
}
