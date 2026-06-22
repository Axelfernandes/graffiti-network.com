'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, FileText, Sparkles, GraduationCap, Code, Mail, Linkedin, Award, FileIcon, ImageIcon, X, ChevronLeft, ChevronRight } from 'lucide-react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
interface Project {
  id: string;
  title: string;
  description: string;
  liveUrl: string;
  githubUrl: string;
  blogPost: string;
  tags: string[];
  featured: boolean;
}

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  file: string;
  type: string;
}

interface PortfolioClientProps {
  projects: Project[];
  certificates: Certificate[];
}

export default function PortfolioClient({ projects, certificates }: PortfolioClientProps) {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 animated-gradient opacity-20"></div>
        <div className="relative container mx-auto px-4 py-8 md:py-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="inline-block mb-3"
            >
              <Sparkles className="w-10 h-10 text-purple-400" />
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Axel Fernandes</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-4">
              Software and Data Engineering Projects, Pipeline Development, Portfolio, and Certifications
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Showcasing innovative web applications, cloud solutions, software & Data Engineering Pipelines and development
              projects built with modern technologies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass-strong rounded-2xl p-8 md:p-12">
            <div className="flex items-center gap-3 mb-6">
              <Code className="w-8 h-8 text-purple-400" />
              <h2 className="text-3xl md:text-4xl font-bold gradient-text">About</h2>
            </div>
            <div className="space-y-6 text-gray-300">
              <p className="text-lg leading-relaxed">
                Welcome to my portfolio Website! I&apos;m <span className="text-purple-400 font-semibold">Axel Fernandes</span>,
                a Software and Senior Data Engineer passionate about building innovative solutions and exploring the world of software & data engineering.
              </p>
              <p className="text-lg leading-relaxed">
                This project page showcases all my current live projects and serves as a platform to
                demonstrate my work in web applications, cloud solutions, and software & Data Engineering Pipelines and development.
              </p>
              <div className="pt-6 border-t border-gray-700/50">
                <div className="flex items-center gap-3 mb-4">
                  <GraduationCap className="w-6 h-6 text-purple-400" />
                  <h3 className="text-xl font-semibold text-gray-200">Education</h3>
                </div>
                <div className="space-y-3 ml-9">
                  <div>
                    <p className="font-medium text-gray-200">Master of Science in Engineering Management</p>
                    <p className="text-gray-400">California State University, Northridge</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-200">Bachelor of Technology in Computer Engineering</p>
                    <p className="text-gray-400">National Institute of Technology, Kurukshetra</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Certificates Section (Carousel + Modal) */}
      <section className="container mx-auto px-4 py-8 md:py-16">
        {certificates && certificates.length > 0 && (
          <div className="mb-8 relative">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <Award className="w-8 h-8 text-purple-400" />
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-3xl md:text-4xl font-bold gradient-text"
                >
                  Certificates & Achievements
                </motion.h2>
              </div>
              <div className="flex gap-2 hidden md:flex">
                <button
                  className="cert-prev-button p-2 rounded-full glass hover:bg-purple-500/20 transition-colors text-gray-400 hover:text-white z-10"
                  aria-label="Scroll Left"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  className="cert-next-button p-2 rounded-full glass hover:bg-purple-500/20 transition-colors text-gray-400 hover:text-white z-10"
                  aria-label="Scroll Right"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative w-full py-8"
            >
              <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                initialSlide={1}
                coverflowEffect={{
                  rotate: 25,
                  stretch: 0,
                  depth: 200,
                  modifier: 1,
                  slideShadows: false,
                }}
                pagination={{ clickable: true }}
                navigation={{
                  prevEl: '.cert-prev-button',
                  nextEl: '.cert-next-button',
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="w-full pb-16 pt-4"
              >
                {certificates.map((cert) => (
                  <SwiperSlide key={cert.id} style={{ width: '340px', height: 'auto' }} className="flex">
                    <CertificateCard
                      certificate={cert}
                      onClick={() => setSelectedCertificate(cert)}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </motion.div>
          </div>
        )}
      </section>

      {/* Projects Section */}
      <section className="container mx-auto px-4 py-16">
        {featuredProjects.length > 0 && (
          <div className="mb-16">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold mb-8 gradient-text"
            >
              Featured Projects
            </motion.h2>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </motion.div>
          </div>
        )}

        {otherProjects.length > 0 && (
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold mb-8 gradient-text"
            >
              All Projects
            </motion.h2>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {otherProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </motion.div>
          </div>
        )}

        {projects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-xl text-gray-400">
              No projects yet. Add your projects to{' '}
              <code className="bg-gray-800 px-2 py-1 rounded">data/projects.json</code>
            </p>
          </motion.div>
        )}
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center space-y-4">
            <p className="text-gray-400">
              Made by <span className="text-purple-400 font-semibold">Axel Joaquim Fernandes</span>
            </p>
            <div className="flex justify-center items-center gap-6 flex-wrap">
              <a
                href="mailto:axe.coleslaw322@passinbox.com"
                className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
                <span className="text-sm">Email</span>
              </a>
              <a
                href="https://www.linkedin.com/in/axelfernandes/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
                <span className="text-sm">LinkedIn</span>
              </a>
              <a
                href="https://github.com/Axelfernandes"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
                <span className="text-sm">GitHub</span>
              </a>
            </div>
            <p className="text-gray-500 text-sm mt-4">
              © {new Date().getFullYear()} Axel Fernandes. Built with Next.js & TypeScript.
            </p>
          </div>
        </div>
      </footer>

      {/* Certificate Modal */}
      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedCertificate(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-5xl bg-gray-900 rounded-2xl border border-gray-700/50 shadow-2xl overflow-hidden flex flex-col"
              style={{ maxHeight: '90vh' }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-4 border-b border-gray-800 bg-gray-900/50">
                <div>
                  <h3 className="text-xl font-bold text-gray-100">{selectedCertificate.title}</h3>
                  <p className="text-sm text-gray-400">{selectedCertificate.issuer}</p>
                </div>
                <button
                  onClick={() => setSelectedCertificate(null)}
                  className="p-2 rounded-full hover:bg-gray-800 transition-colors text-gray-400 hover:text-white"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex-1 overflow-auto p-4 flex items-center justify-center bg-black/20 min-h-[50vh]">
                {selectedCertificate.type === 'pdf' ? (
                  <iframe
                    src={selectedCertificate.file}
                    className="w-full h-full min-h-[600px] rounded-lg bg-white"
                    title={selectedCertificate.title}
                  />
                ) : (
                  <img
                    src={selectedCertificate.file}
                    alt={selectedCertificate.title}
                    className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-lg"
                  />
                )}
              </div>

              <div className="p-4 border-t border-gray-800 bg-gray-900/50 flex justify-end">
                <a
                  href={selectedCertificate.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white transition-all text-sm font-bold shadow-lg shadow-purple-500/25"
                >
                  <ExternalLink className="w-4 h-4" />
                  Open Full Screen
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main >
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5 },
        },
      }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="glass-strong rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300 group"
    >
      <h3 className="text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors">
        {project.title}
      </h3>
      <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>

      {/* Browser Preview for Featured Projects */}
      {project.featured && project.liveUrl && (
        <div className="mb-4 rounded-lg overflow-hidden glass border border-gray-700/50">
          <div className="bg-gray-800/50 px-3 py-2 flex items-center gap-2 border-b border-gray-700/50">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/60"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/60"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/60"></div>
            </div>
            <div className="flex-1 bg-gray-900/50 rounded px-2 py-1 text-xs text-gray-400 truncate">
              {project.liveUrl.replace(/^https?:\/\//, '')}
            </div>
          </div>
          <div className="relative w-full" style={{ aspectRatio: '16/9', height: '200px' }}>
            <iframe
              src={project.liveUrl}
              className="w-full h-full border-0"
              loading="lazy"
              sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
              title={`Preview of ${project.title}`}
              style={{ pointerEvents: 'none' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-transparent pointer-events-none"></div>
          </div>
        </div>
      )}

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 text-xs rounded-full glass border border-gray-700 text-gray-300"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-3 mt-6 flex-wrap">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white shadow-lg shadow-purple-500/25 transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95 text-sm font-bold ring-1 ring-purple-400/30"
          >
            <ExternalLink className="w-4 h-4" />
            Live Demo
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg glass hover:bg-purple-500/20 transition-colors text-sm font-medium"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
        )}
        {project.blogPost && (
          <a
            href={project.blogPost}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg glass hover:bg-purple-500/20 transition-colors text-sm font-medium"
          >
            <FileText className="w-4 h-4" />
            Blog
          </a>
        )}
      </div>
    </motion.div>
  );
}

function CertificateCard({ certificate, onClick }: { certificate: Certificate, onClick: () => void }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5 },
        },
      }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="glass-strong rounded-2xl p-5 hover:border-purple-500/50 transition-all duration-300 group flex flex-col h-full cursor-pointer"
      onClick={onClick}
    >
      <div className="mb-4 bg-gray-900/50 rounded-lg overflow-hidden flex items-center justify-center flex-shrink-0 h-40 border border-gray-700/50 group-hover:border-purple-500/50 transition-colors relative">
        {certificate.type === 'pdf' ? (
          <div className="flex flex-col items-center gap-2">
            <FileIcon className="w-10 h-10 text-blue-400 opacity-80 group-hover:scale-110 transition-transform" />
            <span className="text-xs text-gray-500 font-medium uppercase tracking-wider">PDF Document</span>
          </div>
        ) : (
          <div className="w-full h-full relative">
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent z-10 opacity-60"></div>
            <img
              src={certificate.file}
              alt={certificate.title}
              className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
            />
          </div>
        )}
      </div>
      <div className="flex-1 flex flex-col pointer-events-none mt-2">
        <h3 className="text-lg font-bold mb-1 group-hover:text-purple-400 transition-colors line-clamp-3 whitespace-pre-line">
          {certificate.title}
        </h3>
        <p className="text-gray-400 text-sm mb-4">{certificate.issuer}</p>

        <div className="mt-auto pt-4 border-t border-gray-700/50">
          <div className="flex items-center justify-center gap-2 w-full px-4 py-2 rounded-lg glass group-hover:bg-purple-500/20 transition-colors text-sm font-medium text-gray-300 group-hover:text-white">
            <ExternalLink className="w-4 h-4" />
            View Certificate
          </div>
        </div>
      </div>
    </motion.div>
  );
}
