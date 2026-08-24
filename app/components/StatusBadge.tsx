import {
  ProjectStatus,
  TaskStatus,
} from "../types";


interface StatusBadgeProps {
  status: ProjectStatus | TaskStatus;
}


const labels: Record<string, string> = {

  PLANNED: "Planificado",

  IN_PROGRESS: "En progreso",

  COMPLETED: "Completado",

  PENDING: "Pendiente",

};


export default function StatusBadge({
  status,
}: StatusBadgeProps) {

  const styles: Record<string, string> = {

    PLANNED:
      "bg-slate-100 text-slate-700",

    PENDING:
      "bg-yellow-50 text-yellow-700",

    IN_PROGRESS:
      "bg-blue-50 text-blue-700",

    COMPLETED:
      "bg-green-50 text-green-700",

  };


  return (
    <span
      className={`
        inline-flex
        rounded-full
        px-3
        py-1
        text-xs
        font-medium
        ${styles[status]}
      `}
    >
      {labels[status]}
    </span>
  );
}