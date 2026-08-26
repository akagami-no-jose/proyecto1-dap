"use client";

import { faListCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { FormEvent } from "react";

export default function LoginPage() {

  function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    console.log("Login");
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 px-4 py-10">
      <section className="w-full max-w-md rounded-xl bg-white p-6 shadow-md sm:p-8">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-slate-900">Iniciar sesión</h1>
          <p className="mt-1 text-sm text-slate-500">Ingresa tus datos para continuar.</p>
        </div>

        <form action="" className="grid gap-4">
          <div>
            <label htmlFor="usuario" className="mb-1 block text-sm font-medium text-slate-700">Usuario</label>
            <input id="usuario" name="usuario" type="text" placeholder="Usuario" className="w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 outline-none focus:border-slate-500" />
          </div>
          <div>
            <label htmlFor="contrasena" className="mb-1 block text-sm font-medium text-slate-700">Contraseña</label>
            <input id="contrasena" name="contrasena" type="password" placeholder="Contraseña" className="w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 outline-none focus:border-slate-500" />
          </div>
          <button type="submit" className="mt-2 rounded-md bg-slate-800 px-4 py-2.5 font-medium text-white transition hover:bg-slate-700">
            Ingresar
          </button>
        </form>
      </section>
    </main>
  );
}