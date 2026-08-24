"use client";

import {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowRightFromBracket} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Header() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 flex h-20 items-center justify-between border-b border-slate-200 bg-white px-6 text-slate-900">
            <div>
                <h2 className="text-lg font-semibold">Panel de Administracion</h2>
            </div>
            <div className="flex items-center gap-4">
                <Link href="/">Home</Link>
                <Link href="/dashboard">Dashboard</Link>
                <Link href="/dashboard/profile">Perfil</Link>
                <Link href="/dashboard/projects">Proyectos</Link>
                <Link href="/dashboard/tasks">Tareas</Link>
                <Link href="/dashboard/users">Usuarios</Link>
            </div>
            <div>
                <Link href={"/login"}>
                    <FontAwesomeIcon icon={faArrowRightFromBracket} style={{color: "#0F172B",}} />
                </Link>
            </div>
        </header>
    )
}