"use client";

import ProjectCard from "@/app/components/ProjectCard";
import { useEffect, useState } from "react";

interface Project {
  id: number;
  name: string;
  description: string | null;
  status: string;
  progress: number;
  owner_id: number | null;
  created_at: string;
  updated_at: string;
}

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    loadProjects();
  }, []);

  async function loadProjects() {
    try {
      setLoading(true);

      const response = await fetch(
        "/api/projects"
      );

      if (!response.ok) {
        throw new Error(
          "Error obteniendo proyectos"
        );
      }

      const data = await response.json();

      setProjects(data.projects);

    } catch (error) {
      console.error(error);

      setError(
        "No se pudieron cargar los proyectos"
      );

    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <div className="p-8">
        Cargando proyectos...
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-8 text-red-600">
        {error}
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100 p-8 ml-64">

      <div className="mx-auto max-w-7xl">

        <div className="mb-8 flex items-center justify-between">

          <div>
            <h1 className="text-3xl font-bold">
              Proyectos
            </h1>

            <p className="mt-2 text-gray-600">
              Administración de proyectos
            </p>
          </div>

          <a
            href="/dashboard/projects/new"
            className="rounded-lg bg-blue-600 px-5 py-3 text-white hover:bg-blue-700"
          >
            Nuevo proyecto
          </a>

        </div>

        {projects.length === 0 ? (

          <div className="rounded-xl bg-white p-10 text-center shadow">
            <h2 className="text-xl font-semibold">
              No hay proyectos
            </h2>

            <p className="mt-2 text-gray-500">
              Crea tu primer proyecto.
            </p>
          </div>

        ) : (

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onDelete={loadProjects}
              />
            ))}

          </div>

        )}

      </div>

    </main>
  );
}