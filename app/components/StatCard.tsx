interface StatCardProps {
  title: string;
  value: number;
  description: string;
  icon: string;
}


export default function StatCard({
  title,
  value,
  description,
  icon,
}: StatCardProps) {

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6">

      <div className="flex items-start justify-between">

        <div>

          <p className="text-sm text-slate-500">
            {title}
          </p>

          <p className="mt-2 text-3xl font-bold text-slate-900">
            {value}
          </p>

          <p className="mt-2 text-xs text-slate-500">
            {description}
          </p>

        </div>


        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-xl text-indigo-600">
          {icon}
        </div>

      </div>

    </div>
  );
}