// app/page.tsx
import { FC } from "react";

const projects = [
  // {
  //   title: "Dashboard de Finanzas",
  //   description: "Aplicación web en Next.js + TypeScript para gestionar gastos y visualizarlos en gráficas interactivas.",
  //   link: "https://github.com/tuusuario/dashboard-finanzas",
  // },
  // {
  //   title: "Blog Fullstack",
  //   description: "Blog con autenticación, panel de admin y base de datos en PostgreSQL (Next.js + Prisma).",
  //   link: "https://github.com/tuusuario/blog-fullstack",
  // },
  {
    title: "Portfolio Musical",
    description: "Página de presentación para proyectos musicales, con reproductor integrado y diseño responsive.",
    link: "https://nextjs-producer-portfolio.vercel.app/",
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
                Ver en GitHub →
              </a>
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
            href="mailto:felipe.chicangana.dev@gmail.com"
            className="text-blue-600 hover:underline"
          >
            felipe.chicangana.dev@gmail.com
          </a>
        </p>
        <p>
          🔗{" "}
          <a
            href="https://www.linkedin.com/in/felipechicangana/"
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
            href="https://github.com/f3l1p"
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
