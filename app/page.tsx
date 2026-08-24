import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <nav className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="text-slate-900 text-2xl font-bold flex items-center justify-center gap-2"
          >
          </Link>
          <div className="flex items-center gap-3">

            <Link
              href="/login"
              className="rounded-lg px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
            >
              Iniciar sesión
            </Link>

            <Link
              href="/register"
              className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
            >
              Crear cuenta
            </Link>

          </div>

        </div>
      </nav>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:py-28">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          <div>

            <span className="inline-flex rounded-full bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-700">
              Gestión de proyectos
            </span>

            <h1 className="mt-6 text-5xl font-bold tracking-tight text-slate-900 lg:text-6xl">
              Organiza tus proyectos.
              <span className="text-indigo-600">
                {" "}Completa tus tareas.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              TaskFlow permite administrar proyectos, tareas
              y equipos desde una plataforma sencilla.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <Link
                href="/register"
                className="rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white hover:bg-indigo-700"
              >
                Comenzar ahora →
              </Link>
            </div>

          </div>


          {/* PREVIEW */}

          <div>

            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-2xl">

              <div className="mb-4 flex gap-2 border-b border-slate-100 pb-4">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
              </div>

              <div className="grid grid-cols-3 gap-3">

                <PreviewCard
                  title="Proyectos"
                  value="12"
                />

                <PreviewCard
                  title="Tareas"
                  value="48"
                />

                <PreviewCard
                  title="Completadas"
                  value="32"
                />

              </div>

              <div className="mt-6 space-y-3">

                <PreviewRow
                  title="Sistema Web"
                  progress={75}
                />

                <PreviewRow
                  title="Aplicación móvil"
                  progress={50}
                />

                <PreviewRow
                  title="Proyecto IA"
                  progress={25}
                />

              </div>

            </div>

          </div>

        </div>

      </section>
    </main>
  );
}


function PreviewCard({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-xl bg-slate-50 p-4">
      <p className="text-xs text-slate-500">
        {title}
      </p>

      <p className="mt-1 text-2xl font-bold">
        {value}
      </p>
    </div>
  );
}


function PreviewRow({
  title,
  progress,
}: {
  title: string;
  progress: number;
}) {
  return (
    <div className="rounded-xl border border-slate-100 p-4">

      <div className="flex justify-between">

        <span className="text-sm font-medium">
          {title}
        </span>

        <span className="text-sm text-slate-500">
          {progress}%
        </span>

      </div>

      <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-100">

        <div
          className="h-full rounded-full bg-indigo-600"
          style={{ width: `${progress}%` }}
        />

      </div>

    </div>
  );
}


function Feature({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6">

      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-xl">
        {icon}
      </div>

      <h3 className="mt-5 font-semibold">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-600">
        {description}
      </p>

    </div>
  );
}