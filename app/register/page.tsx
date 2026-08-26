"use client";

import Link from "next/link";
import { FormEvent } from "react";

export default function RegisterPage() {

  function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    console.log("Registro");
  }

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen items-center justify-center bg-slate-100 px-4 py-10">
        <section className="w-full max-w-xl rounded-xl bg-white p-6 shadow-md sm:p-8">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-slate-900">Crear cuenta</h1>
            <p className="mt-1 text-sm text-slate-500">Completa tus datos para registrarte.</p>
          </div>

          <form action="" className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="nombre" className="mb-1 block text-sm font-medium text-slate-700">Nombre</label>
              <input id="nombre" name="nombre" type="text" placeholder="Nombre" className="w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 outline-none focus:border-slate-500" />
            </div>
            <div>
              <label htmlFor="apellido" className="mb-1 block text-sm font-medium text-slate-700">Apellido</label>
              <input id="apellido" name="apellido" type="text" placeholder="Apellido" className="w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 outline-none focus:border-slate-500" />
            </div>
            <div>
              <label htmlFor="correo" className="mb-1 block text-sm font-medium text-slate-700">Correo</label>
              <input id="correo" name="correo" type="email" placeholder="correo@ejemplo.com" className="w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 outline-none focus:border-slate-500" />
            </div>
            <div>
              <label htmlFor="usuario" className="mb-1 block text-sm font-medium text-slate-700">Usuario</label>
              <input id="usuario" name="usuario" type="text" placeholder="Usuario" className="w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 outline-none focus:border-slate-500" />
            </div>
            <div>
              <label htmlFor="contrasena" className="mb-1 block text-sm font-medium text-slate-700">Contraseña</label>
              <input id="contrasena" name="contrasena" type="password" placeholder="Contraseña" className="w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 outline-none focus:border-slate-500" />
            </div>
            <div>
              <label htmlFor="confirmarContrasena" className="mb-1 block text-sm font-medium text-slate-700">Confirmar contraseña</label>
              <input id="confirmarContrasena" name="confirmarContrasena" type="password" placeholder="Repite la contraseña" className="w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 outline-none focus:border-slate-500" />
            </div>
            <button type="submit" className="mt-2 rounded-md bg-slate-800 px-4 py-2.5 font-medium text-white transition hover:bg-slate-700 sm:col-span-2">
              Registrarse
            </button>
          </form>
        </section>
      </main>
      
    </div>
  );
}