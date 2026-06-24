import Image from 'next/image';
import Link from 'next/link';
import { projects, personalInfo } from '@/lib/data';
import ProjectCard from '@/components/ProjectCard';

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 dot-pattern opacity-40" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }} />

        <div className="relative container mx-auto px-4 py-20 md:py-32">
          <div className="flex flex-col items-center text-center animate-fade-in-up">
            <div className="relative w-36 h-36 mb-8">
              <Image
                src={personalInfo.avatar}
                alt={personalInfo.name}
                fill
                className="rounded-full object-cover ring-4 ring-primary-100 shadow-xl"
                priority
                sizes="144px"
              />
              <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-green-400 rounded-full border-4 border-white" />
            </div>

            <p className="text-primary-600 font-semibold text-sm uppercase tracking-widest mb-3">
              Full Stack Developer
            </p>
            <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 leading-tight">
              Hola, soy{' '}
              <span className="gradient-text">{personalInfo.name}</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
              {personalInfo.description}. Creo experiencias digitales modernas con las mejores tecnologias web.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/projects"
                className="group bg-primary-600 text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-primary-700 transition-all duration-200 shadow-lg shadow-primary-600/25 hover:shadow-primary-600/40 flex items-center gap-2"
              >
                Ver Proyectos
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="bg-white text-gray-800 px-8 py-3.5 rounded-xl font-semibold border-2 border-gray-200 hover:border-primary-300 hover:text-primary-700 transition-all duration-200"
              >
                Contactame
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-primary-600 font-semibold text-sm uppercase tracking-widest mb-2">
              Portafolio
            </p>
            <h2 className="text-4xl font-extrabold text-gray-900">
              Proyectos Destacados
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, i) => (
              <div
                key={project.slug}
                className="animate-fade-in-up"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-800 transition-colors"
            >
              Ver todos los proyectos
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-bg py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Trabajemos juntos
          </h2>
          <p className="text-white/80 text-lg max-w-xl mx-auto mb-8">
            Estoy disponible para proyectos freelance y colaboraciones. No dudes en contactarme.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-primary-700 px-8 py-3.5 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-200 shadow-lg"
          >
            Enviar Mensaje
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
