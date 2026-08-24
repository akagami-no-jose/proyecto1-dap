"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    faGaugeHigh,
    faFolder,
    faListCheck,
    faUsers
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Sidebar() {

  const pathname = usePathname();


  const links = [

    {
      label: "Dashboard",
      href: "/dashboard",
      icon: faGaugeHigh,
    },

    {
      label: "Proyectos",
      href: "/dashboard/projects",
      icon: faFolder,
    },

    {
      label: "Tareas",
      href: "/dashboard/tasks",
      icon: faListCheck,
    },

    {
      label: "Usuarios",
      href: "/dashboard/users",
      icon: faUsers,
    }

  ];


  return (
    <aside className="fixed left-0 top-0 z-40 flex h-screen w-64 flex-col border-r border-slate-200 bg-white">
        <div className="flex h-16 items-center border-b border-gray-200 px-6">
            <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-white">
                <FontAwesomeIcon icon={faListCheck} />
                </div>
                <span className="text-xl font-bold text-gray-800">TaskFlow</span>
            </div>
        </div>
        <nav className="flex-1 space-y-1 px-3 py-5">
            <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
                Menu
            </p>
            {links.map((link) => {
                const isActive = pathname === link.href;
                return (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={`
                            flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium transition
                            ${isActive ? "bg-blue-50 text-blue-600" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"}
            `}>
                <FontAwesomeIcon icon={link.icon} className="w-5" />
                <span>{link.label}</span>
            </Link>);
            })}

        <p className="mb-3 mt-8 px-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
          Cuenta
        </p>


        <Link
          href="/dashboard/profile"
          className={`
            flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium
            ${
              pathname === "/dashboard/profile"
                ? "bg-indigo-50 text-indigo-700"
                : "text-slate-600 hover:bg-slate-50"
            }
          `}
        >

          <span className="text-lg">
            ♙
          </span>

          Mi perfil

        </Link>

      </nav>


      {/* USER */}

      <div className="border-t border-slate-100 p-4">

        <div className="flex items-center gap-3">

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 font-semibold text-indigo-700">
            JP
          </div>

          <div className="min-w-0">

            <p className="truncate text-sm font-semibold">
              Juan Pérez
            </p>

            <p className="truncate text-xs text-slate-500">
              Administrador
            </p>

          </div>

        </div>

      </div>

    </aside>
  );
}