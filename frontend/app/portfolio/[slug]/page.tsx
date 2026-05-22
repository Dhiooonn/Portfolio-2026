"use client";

import React, { use } from "react";
import Navbar from "@/app/components/layouts/Navbar";
import Footer from "@/app/components/layouts/Footer";
import Container from "@/app/components/ui/Container";
import Badge from "@/app/components/ui/BadgeSection";
import { projectsData } from "@/data/projects";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function ProjectDetailPage({ params }: PageProps) {
  const { slug } = use(params);

  // Find project based on slug
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

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

  return (
    <>
      <Navbar />
      <main className="flex-grow pt-32 pb-24 bg-bg-brand">
        <Container>
          {/* Subheading & Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
            className="mb-12"
          >
            <Badge className="mb-6">Portfolio</Badge>
            <h1 className="text-hero font-mori font-medium tracking-tight text-text-primary leading-[0.9] -ml-1">
              {project.title}
            </h1>
          </motion.div>

          {/* Project Details Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-24 font-mori"
          >
            {/* Tech Stack column */}
            <motion.div variants={itemVariants} className="lg:col-span-7">
              <h2 className="text-body font-semibold text-text-primary mb-4 select-none">
                Tech Stack
              </h2>
              <div className="flex flex-wrap gap-2.5">
                {project.techStack ? (
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
            </motion.div>

            {/* Description & Links column */}
            <motion.div variants={itemVariants} className="lg:col-span-5">
              <p className="text-sm md:text-body text-text-secondary leading-relaxed mb-8">
                {project.description ||
                  "A custom digital experience crafted using precise design principles and robust engineering to deliver a responsive, performant interface."}
              </p>

              {/* Links List */}
              <div className="flex flex-col border-t border-border-brand/40">
                {project.figmaLink && (
                  <a
                    href={project.figmaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-between items-center py-4 border-b border-border-brand/40 text-body text-text-primary hover:text-text-secondary transition-colors duration-300 group"
                  >
                    <span>Link Figma</span>
                    <ArrowUpRight
                      size={18}
                      className="text-text-secondary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                    />
                  </a>
                )}
                {project.liveLink && (
                  <a
                    href={project.liveLink}
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
            </motion.div>
          </motion.div>

          {/* Premium Gallery / Mockup Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-10 lg:gap-16"
          >
            {/* Row 1: Dual column screen previews */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
            >
              <div className="relative w-full aspect-[4/3] bg-card-bg rounded-image overflow-hidden flex flex-col justify-end p-8 border border-border-brand/20 group">
                <div className="absolute inset-0 bg-border-brand/5 flex items-center justify-center text-text-secondary/70 font-mori text-sm font-semibold select-none group-hover:scale-102 transition-transform duration-700">
                  Concept Frame 1
                </div>
              </div>
              <div className="relative w-full aspect-[4/3] bg-card-bg rounded-image overflow-hidden flex flex-col justify-end p-8 border border-border-brand/20 group">
                <div className="absolute inset-0 bg-border-brand/5 flex items-center justify-center text-text-secondary/70 font-mori text-sm font-semibold select-none group-hover:scale-102 transition-transform duration-700">
                  Concept Frame 2
                </div>
              </div>
            </motion.div>

            {/* Row 2: Premium Browser Mockup */}
            <motion.div variants={itemVariants} className="w-full">
              <div className="w-full bg-card-bg border border-border-brand/35 rounded-image overflow-hidden shadow-sm flex flex-col">
                {/* Browser Tab Top Bar */}
                <div className="w-full bg-border-brand/10 border-b border-border-brand/20 px-6 py-4 flex items-center gap-3 select-none">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-border-brand/40" />
                    <span className="w-3 h-3 rounded-full bg-border-brand/40" />
                    <span className="w-3 h-3 rounded-full bg-border-brand/40" />
                  </div>
                  <div className="mx-auto w-1/3 bg-bg-brand border border-border-brand/25 rounded-md py-1 px-4 text-center text-caption font-mori text-text-secondary/80 font-normal">
                    {project.slug}.com
                  </div>
                </div>
                {/* Mockup canvas body */}
                <div className="w-full aspect-[16/9] bg-border-brand/5 flex items-center justify-center font-mori">
                  <span className="text-text-secondary/60 text-sm font-semibold select-none">
                    Preview Canvas Showcase
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
