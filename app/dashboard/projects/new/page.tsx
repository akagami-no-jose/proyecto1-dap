"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function NewProjectPage() {

  const router = useRouter();

  const [name, setName] = useState("");
  const [description, setDescription] =
    useState("");

  const [status, setStatus] =
    useState("PLANNED");

  const [progress, setProgress] =
    useState(0);

  const [loading, setLoading] =
    useState(false);

  async function handleSubmit(
    event: FormEvent
  ) {
    event.preventDefault();

    try {

      setLoading(true);

      const response = await fetch(
        "/api/projects",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            name,
            description,
            status,
            progress: Number(progress),

            // Temporalmente
            // usamos un usuario fijo
            owner_id: 1,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        alert(data.message);
        return;
      }

      router.push("/dashboard/projects");

    } catch (error) {

      console.error(error);

      alert(
        "Error conectando con el servidor"
      );

    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-gray-100 p-8">

      <div className="mx-auto max-w-2xl">

        <div className="rounded-xl bg-white p-8 shadow">

          <h1 className="text-3xl font-bold">
            Nuevo proyecto
          </h1>

          <form
            onSubmit={handleSubmit}
            className="mt-8 space-y-6"
          >

            <div>

              <label className="mb-2 block font-medium">
                Nombre
              </label>

              <input
                type="text"
                value={name}
                onChange={(e) =>
                  setName(e.target.value)
                }
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                placeholder="Nombre del proyecto"
              />

            </div>

            <div>

              <label className="mb-2 block font-medium">
                Descripción
              </label>

              <textarea
                value={description}
                onChange={(e) =>
                  setDescription(e.target.value)
                }
                rows={5}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                placeholder="Descripción"
              />

            </div>

            <div>

              <label className="mb-2 block font-medium">
                Estado
              </label>

              <select
                value={status}
                onChange={(e) =>
                  setStatus(e.target.value)
                }
                className="w-full rounded-lg border border-gray-300 px-4 py-3"
              >

                <option value="PLANNED">
                  Planificado
                </option>

                <option value="IN_PROGRESS">
                  En progreso
                </option>

                <option value="COMPLETED">
                  Completado
                </option>

              </select>

            </div>

            <div>

              <label className="mb-2 block font-medium">
                Progreso: {progress}%
              </label>

              <input
                type="range"
                min="0"
                max="100"
                value={progress}
                onChange={(e) =>
                  setProgress(
                    Number(e.target.value)
                  )
                }
                className="w-full"
              />

            </div>

            <div className="flex gap-3">

              <button
                type="button"
                onClick={() =>
                  router.push("/dashboard/projects")
                }
                className="rounded-lg border px-5 py-3"
              >
                Cancelar
              </button>

              <button
                type="submit"
                disabled={loading}
                className="rounded-lg bg-blue-600 px-5 py-3 text-white hover:bg-blue-700 disabled:opacity-50"
              >
                {loading
                  ? "Guardando..."
                  : "Crear proyecto"}
              </button>

            </div>

          </form>

        </div>

      </div>

    </main>
  );
}