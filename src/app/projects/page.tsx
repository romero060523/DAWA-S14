import { Metadata } from 'next';
import { projects } from '@/lib/data';
import ProjectCard from '@/components/ProjectCard';

export const metadata: Metadata = {
  title: 'Proyectos',
  description: 'Explora mi coleccion de proyectos de desarrollo web y aplicaciones',
  openGraph: {
    title: 'Proyectos - Portafolio',
    description: 'Explora mi coleccion de proyectos de desarrollo web',
    images: ['/og-projects.jpg'],
  },
};

export default function ProjectsPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-primary-600 font-semibold text-sm uppercase tracking-widest mb-2">
            Portafolio
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Mis Proyectos
          </h1>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Una coleccion de proyectos en los que he trabajado, desde aplicaciones web hasta herramientas de productividad.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <div
                key={project.slug}
                className="animate-fade-in-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
