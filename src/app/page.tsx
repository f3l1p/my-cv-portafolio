// app/page.tsx
import { FC } from "react";

const projects = [
  {
    title: "With Love 4 You",
    description: `Applicacion personal para mi pareja de tipo "Quotes machine"`,
    link: "https://wl4y-d4258.web.app/",
    github: "",
  },
  {
    title: "Spotglow Land",
    description: `Pagina de presentacion de la banda "Spotglow" para su disco omonimo.`,
    link: "https://the-spotglow-land.web.app/",
    github: "",
  },
  {
    title: "Portafolio Produccion Musical",
    description:
      "Página de presentación para proyectos musicales, con reproductor integrado y diseño responsive.",
    link: "https://nextjs-producer-portfolio.vercel.app/",
    github: "",
  },
];

const Page: FC = () => {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-900 flex flex-col items-center px-6 py-12">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">Felipe Chicangana</h1>
        <p className="text-lg text-gray-600">
          Frontend Developer | Cybersecurity MSc | Fullstack in progress
        </p>
      </header>

      {/* About Me */}
      <section className="max-w-2xl mb-12">
        <h2 className="text-2xl font-semibold mb-4">Acerca de mí</h2>
        <p>
          Soy desarrollador frontend con más de 4 años de experiencia creando
          aplicaciones modernas con React, Next.js y TypeScript. Actualmente
          estoy ampliando mis conocimientos hacia el desarrollo fullstack con
          Python y Django, y cuento con un máster en Ciberseguridad.
        </p>
      </section>

      {/* Projects */}
      <section className="max-w-3xl w-full mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-center">Proyectos</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Live Demo →
              </a>
              {project.github != "" && (
                <a
                  href={project?.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Ver en GitHub →
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Contacto</h2>
        <p>
          📧{" "}
          <a
            href={`mailto:${process.env.EMAIL}`}
            className="text-blue-600 hover:underline"
          >
            felipe.chicangana.dev@gmail.com
          </a>
        </p>
        <p>
          🔗{" "}
          <a
            href={process.env.LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            LinkedIn
          </a>
        </p>
        <p>
          💻{" "}
          <a
            href={process.env.GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            GitHub
          </a>
        </p>
      </section>
    </main>
  );
};

export default Page;
