"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

interface Project {
  id: number;
  name: string;
  description: string | null;
  status: string;
  progress: number;
  owner_id: number | null;
  created_at: string;
}

export default function ProjectDetailPage() {

  const params = useParams();

  const id = params.id;

  const [project, setProject] =
    useState<Project | null>(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    async function loadProject() {

      try {

        const response = await fetch(
          `/api/projects/${id}`
        );

        const data =
          await response.json();

        if (!response.ok) {
          throw new Error(
            data.message
          );
        }

        setProject(data.project);

      } catch (error) {

        console.error(error);

      } finally {

        setLoading(false);

      }
    }

    loadProject();

  }, [id]);

  if (loading) {
    return (
      <div className="p-8">
        Cargando proyecto...
      </div>
    );
  }

  if (!project) {
    return (
      <div className="p-8">
        Proyecto no encontrado
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100 p-8">

      <div className="mx-auto max-w-4xl">

        <div className="rounded-xl bg-white p-8 shadow">

          <div className="flex justify-between">

            <div>

              <h1 className="text-3xl font-bold">
                {project.name}
              </h1>

              <p className="mt-2 text-gray-500">
                {project.description}
              </p>

            </div>

            <span className="h-fit rounded-full bg-blue-100 px-4 py-2 text-blue-700">
              {project.status}
            </span>

          </div>

          <div className="mt-10">

            <div className="mb-2 flex justify-between">

              <span>
                Progreso
              </span>

              <span>
                {project.progress}%
              </span>

            </div>

            <div className="h-4 rounded-full bg-gray-200">

              <div
                className="h-4 rounded-full bg-blue-600"
                style={{
                  width:
                    `${project.progress}%`,
                }}
              />

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}