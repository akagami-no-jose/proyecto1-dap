
import StatCard from "../components/StatCard";
import ProjectCard from "../components/ProjectCard";


export default function DashboardPage() {


  return (
    <div>

      {/* TITLE */}

      <div className="mb-8">

        <h1 className="text-3xl font-bold text-slate-900">
          Hola, Juan 👋
        </h1>

        <p className="mt-2 text-slate-500">
          Aquí tienes el resumen de tu trabajo.
        </p>

      </div>


      {/* STATS */}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        {/* <StatCard
          title="Proyectos"
          value={projects.length}
          description="Proyectos registrados"
          icon="📁"
        /> */}

        {/* <StatCard
          title="Tareas"
          value={tasks.length}
          description="Tareas registradas"
          icon="✓"
        />

        <StatCard
          title="Completadas"
          value={completedTasks}
          description="Tareas terminadas"
          icon="✓"
        />

        <StatCard
          title="En progreso"
          value={inProgressTasks}
          description="Tareas activas"
          icon="◷"
        /> */}

      </div>


      {/* CONTENT */}

      <div className="mt-8 grid gap-6 xl:grid-cols-3">

        <div className="xl:col-span-2">

          <div className="rounded-2xl border border-slate-200 bg-white p-6">

            <div className="mb-6 flex items-center justify-between">

              <div>

                <h2 className="font-semibold text-slate-900">
                  Proyectos recientes
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Vista general de tus proyectos.
                </p>

              </div>

              <a
                href="/dashboard/projects"
                className="text-sm font-medium text-indigo-600"
              >
                Ver todos
              </a>

            </div>


            <div className="grid gap-4 md:grid-cols-2">

              

            </div>

          </div>

        </div>


        {/* ACTIVITY */}

        <div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6">

            <h2 className="font-semibold">
              Actividad reciente
            </h2>

            <div className="mt-6 space-y-5">

              <Activity
                text="Juan completó una tarea"
                time="Hace 10 minutos"
              />

              <Activity
                text="Ana actualizó un proyecto"
                time="Hace 1 hora"
              />

              <Activity
                text="Carlos creó una tarea"
                time="Hace 2 horas"
              />

              <Activity
                text="Nuevo proyecto creado"
                time="Ayer"
              />

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}


function Activity({
  text,
  time,
}: {
  text: string;
  time: string;
}) {
  return (
    <div className="flex gap-3">

      <div className="mt-1 h-2 w-2 rounded-full bg-indigo-600" />

      <div>

        <p className="text-sm text-slate-700">
          {text}
        </p>

        <p className="mt-1 text-xs text-slate-400">
          {time}
        </p>

      </div>

    </div>
  );
}