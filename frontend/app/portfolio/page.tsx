"use client";

import React, { useState, useRef } from "react";
import Navbar from "@/app/components/layouts/Navbar";
import Footer from "@/app/components/layouts/Footer";
import Container from "@/app/components/ui/Container";
import Badge from "@/app/components/ui/BadgeSection";
import Card from "@/app/components/ui/CardPortfolio";
import { projectsData } from "@/data/projects";
import { motion } from "framer-motion";

export default function PortfolioPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(projectsData.length / itemsPerPage);
  const gridRef = useRef<HTMLDivElement>(null);

  // Paginate projects
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProjects = projectsData.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    if (gridRef.current) {
      const topOffset =
        gridRef.current.getBoundingClientRect().top + window.scrollY - 120;
      window.scrollTo({ top: topOffset, behavior: "smooth" });
    }
  };

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
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <>
      <Navbar />
      <main className="flex-grow pt-32 pb-24 bg-bg-brand">
        <Container>
          {/* Page Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end mb-20">
            <div className="lg:col-span-8">
              <Badge className="mb-6">Portfolio</Badge>
              <h1 className="text-hero font-mori font-medium tracking-tight text-text-primary leading-[0.9] -ml-1">
                Projects.
              </h1>
            </div>
            <div className="lg:col-span-4">
              <p className="text-sm md:text-body text-text-secondary leading-relaxed lg:max-w-[340px] lg:ml-auto">
                I'm Dhion, a UI/UX Designer & Frontend Developer who transforms
                ideas into intuitive and impactful digital experiences.
              </p>
            </div>
          </div>

          {/* Grid Anchor for Scroll */}
          <div ref={gridRef} />

          {/* Paginated Project Grid */}
          <motion.div
            key={currentPage}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 lg:gap-y-24 mb-20"
          >
            {paginatedProjects.map((project) => (
              <motion.div key={project.index} variants={itemVariants}>
                <Card
                  index={project.index}
                  title={project.title}
                  category={project.category}
                  year={project.year}
                  imageSrc={project.imageSrc}
                  href={`/portfolio/${project.slug}`}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Pagination Controls */}
          <div className="flex items-center justify-center gap-4 mt-16 font-mori">
            {Array.from({ length: totalPages }).map((_, idx) => {
              const pageNumber = idx + 1;
              const isActive = currentPage === pageNumber;
              return (
                <button
                  key={pageNumber}
                  onClick={() => handlePageChange(pageNumber)}
                  className={`w-12 h-12 flex items-center justify-center rounded-full text-[14px] font-bold transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-card-bg text-text-primary"
                      : "text-text-secondary hover:bg-card-bg/50 hover:text-text-primary"
                  }`}
                >
                  {pageNumber}
                </button>
              );
            })}
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
