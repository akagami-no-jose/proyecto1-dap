"use client";

interface Project {
  id: number;
  name: string;
  description: string | null;
  status: string;
  progress: number;
}

interface Props {
  project: Project;
  onDelete: () => void;
}

export default function ProjectCard({
  project,
  onDelete,
}: Props) {

  async function deleteProject() {
    const confirmed = confirm(
      "¿Deseas eliminar este proyecto?"
    );

    if (!confirmed) {
      return;
    }

    const response = await fetch(
      `/api/projects/${project.id}`,
      {
        method: "DELETE",
      }
    );

    if (!response.ok) {
      alert("No se pudo eliminar");
      return;
    }

    onDelete();
  }

  return (
    <div className="rounded-xl bg-white p-6 shadow">

      <div className="flex items-start justify-between">

        <h2 className="text-xl font-bold">
          {project.name}
        </h2>

        <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700">
          {project.status}
        </span>

      </div>

      <p className="mt-3 text-gray-600">
        {project.description ||
          "Sin descripción"}
      </p>

      <div className="mt-6">

        <div className="mb-2 flex justify-between text-sm">

          <span>Progreso</span>

          <span>
            {project.progress}%
          </span>

        </div>

        <div className="h-3 overflow-hidden rounded-full bg-gray-200">

          <div
            className="h-full bg-blue-600"
            style={{
              width: `${project.progress}%`,
            }}
          />

        </div>

      </div>

      <div className="mt-6 flex gap-2">

        <a
          href={`/dashboard/projects/${project.id}`}
          className="rounded-lg bg-gray-900 px-4 py-2 text-sm text-white"
        >
          Ver
        </a>

        <button
          onClick={deleteProject}
          className="rounded-lg bg-red-600 px-4 py-2 text-sm text-white"
        >
          Eliminar
        </button>

      </div>

    </div>
  );
}