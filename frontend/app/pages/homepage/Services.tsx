"use client";

import React, { useState } from "react";
import Container from "../../components/ui/Container";
import Badge from "../../components/ui/BadgeSection";
import CardService from "../../components/ui/CardService";
import { motion } from "framer-motion";

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Default active index is 2 (Frontend Development) when no hover is active
  const activeIndex = hoveredIndex !== null ? hoveredIndex : 2;

  const servicesData = [
    {
      title: "UI/UX Design",
      description: "Creating intuitive and user-centered digital experiences.",
    },
    {
      title: "Graphic Design",
      description:
        "Creating visual assets that communicate ideas clearly and strengthen brand identity.",
    },
    {
      title: "Frontend Development",
      description: "Building clean, responsive, and modern web interfaces.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
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
    <section
      id="services"
      className="py-24 bg-bg-brand"
    >
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
        >
          {/* Left Column - Headline & Intro */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 flex flex-col items-start"
          >
            <Badge className="mb-6">Services</Badge>
            <h2 className="text-section-title font-mori font-medium tracking-tight text-text-primary leading-[1.15] mb-8">
              Crafting digital experiences through design and code.
            </h2>
            <p className="text-[15px] lg:text-[16px] text-text-secondary leading-relaxed font-mori font-normal max-w-md">
              I believe great design happens when empathy meets functionality.
              By combining UI/UX thinking with frontend implementation, I create
              digital products that are simple, effective, and user-centered.
            </p>
          </motion.div>

          {/* Right Column - Staggered Bento Cards */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6 items-center"
          >
            {/* Sub-column 1: UI/UX & Graphic Design */}
            <div className="flex flex-col gap-6">
              <CardService
                title={servicesData[0].title}
                description={servicesData[0].description}
                isActive={activeIndex === 0}
                onMouseEnter={() => setHoveredIndex(0)}
                onMouseLeave={() => setHoveredIndex(null)}
              />
              <CardService
                title={servicesData[1].title}
                description={servicesData[1].description}
                isActive={activeIndex === 1}
                onMouseEnter={() => setHoveredIndex(1)}
                onMouseLeave={() => setHoveredIndex(null)}
              />
            </div>

            {/* Sub-column 2: Frontend Development */}
            <div className="flex flex-col gap-6">
              <CardService
                title={servicesData[2].title}
                description={servicesData[2].description}
                isActive={activeIndex === 2}
                onMouseEnter={() => setHoveredIndex(2)}
                onMouseLeave={() => setHoveredIndex(null)}
              />
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
