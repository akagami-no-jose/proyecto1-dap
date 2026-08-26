import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-between py-32 px-16 bg-white">
      <nav className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-2xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-slate-900">
            <div>TaskFlow</div>
          </Link>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/login" className="rounded-lg px-4 py-2 text-sm font-medium text-slate-700">Iniciar Sesion</Link>
          <Link href="/register" className="rounded-lg px-4 py-2 text-sm font-medium text-slate-700">Registrarse</Link>
          <Link href="/dashboard" className="rounded-lg px-4 py-2 text-sm font-medium text-slate-700">Dashboard</Link>
        </div>
      </nav>
      <h1>Gestion de proyectos</h1>
    </div>
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