import { Metadata } from 'next';
import Image from 'next/image';
import { personalInfo } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Sobre Mi',
  description: `Conoce mas sobre ${personalInfo.name}, ${personalInfo.title}`,
};

const skills = [
  { name: 'JavaScript/TypeScript', level: 90 },
  { name: 'React & Next.js', level: 85 },
  { name: 'Node.js & Express', level: 80 },
  { name: 'PostgreSQL & MongoDB', level: 75 },
  { name: 'Tailwind CSS', level: 90 },
  { name: 'Git & GitHub', level: 85 },
  { name: 'Docker', level: 70 },
  { name: 'AWS', level: 65 },
];

const experience = [
  {
    role: 'Full Stack Developer',
    company: 'Empresa Tech',
    period: '2023 - Presente',
    description: 'Desarrollo de aplicaciones web con React, Next.js y Node.js.',
  },
  {
    role: 'Frontend Developer',
    company: 'Startup Digital',
    period: '2021 - 2023',
    description: 'Creacion de interfaces de usuario responsivas y accesibles.',
  },
  {
    role: 'Junior Developer',
    company: 'Agencia Web',
    period: '2020 - 2021',
    description: 'Desarrollo de sitios web y mantenimiento de aplicaciones existentes.',
  },
];

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gray-50">
        <div className="absolute inset-0 dot-pattern opacity-30" />
        <div className="relative container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-5 gap-10 items-center">
              <div className="md:col-span-2 flex justify-center">
                <div className="relative w-64 h-64 md:w-full md:h-80">
                  <Image
                    src={personalInfo.avatar}
                    alt={personalInfo.name}
                    fill
                    className="object-cover rounded-2xl shadow-2xl"
                    loading="lazy"
                    sizes="(max-width: 768px) 256px, 33vw"
                  />
                  <div className="absolute -bottom-4 -right-4 w-full h-full bg-primary-200 rounded-2xl -z-10" />
                </div>
              </div>
              <div className="md:col-span-3">
                <p className="text-primary-600 font-semibold text-sm uppercase tracking-widest mb-2">
                  Sobre Mi
                </p>
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
                  Hola! Soy{' '}
                  <span className="gradient-text">{personalInfo.name}</span>
                </h1>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Soy un desarrollador full stack apasionado por crear experiencias
                    web excepcionales. Con experiencia en el desarrollo de aplicaciones
                    modernas y escalables.
                  </p>
                  <p>
                    Mi enfoque esta en escribir codigo limpio, mantenible y eficiente,
                    siempre buscando las mejores practicas y las ultimas tecnologias
                    para entregar productos de alta calidad.
                  </p>
                  <p>
                    Cuando no estoy programando, me gusta contribuir a proyectos de
                    codigo abierto, escribir articulos tecnicos y aprender nuevas
                    tecnologias.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-primary-600 font-semibold text-sm uppercase tracking-widest mb-2">
                Competencias
              </p>
              <h2 className="text-4xl font-extrabold text-gray-900">
                Habilidades Tecnicas
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="bg-gray-50 rounded-xl p-5 card-glow"
                >
                  <div className="flex justify-between items-center mb-3">
                    <p className="font-semibold text-gray-800">{skill.name}</p>
                    <span className="text-sm font-medium text-primary-600">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-linear-to-r from-primary-500 to-primary-600 h-2.5 rounded-full transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-primary-600 font-semibold text-sm uppercase tracking-widest mb-2">
                Trayectoria
              </p>
              <h2 className="text-4xl font-extrabold text-gray-900">
                Experiencia
              </h2>
            </div>
            <div className="space-y-6">
              {experience.map((exp, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 md:p-8 card-glow"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {exp.role}
                      </h3>
                      <p className="text-primary-600 font-medium">{exp.company}</p>
                    </div>
                    <span className="text-sm text-gray-500 font-medium mt-1 md:mt-0 bg-gray-100 px-3 py-1 rounded-full w-fit">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-gray-600">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
