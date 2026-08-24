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
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6 py-12">

      <div className="w-full max-w-md text-slate-900">

        <div className="mb-8 text-center">

          <Link
            href="/"
            className="inline-flex items-center gap-2 text-2xl font-bold"
          >
            TaskFlow
          </Link>

        </div>


        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">

          <h1 className="text-2xl font-bold">
            Crear una cuenta
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Regístrate para comenzar a utilizar TaskFlow.
          </p>


          <form
            onSubmit={handleSubmit}
            className="mt-8 space-y-5"
          >

            <div>

              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium"
              >
                Nombre completo
              </label>

              <input
                id="name"
                type="text"
                placeholder="Juan Pérez"
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                required
              />

            </div>


            <div>

              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium"
              >
                Correo electrónico
              </label>

              <input
                id="email"
                type="email"
                placeholder="juan@email.com"
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                required
              />

            </div>


            <div>

              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium"
              >
                Contraseña
              </label>

              <input
                id="password"
                type="password"
                placeholder="••••••••"
                minLength={6}
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                required
              />

            </div>


            <div>

              <label
                htmlFor="confirmPassword"
                className="mb-2 block text-sm font-medium"
              >
                Confirmar contraseña
              </label>

              <input
                id="confirmPassword"
                type="password"
                placeholder="••••••••"
                minLength={6}
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                required
              />

            </div>


            <button
              type="submit"
              className="w-full rounded-lg bg-indigo-600 px-4 py-3 font-semibold text-white hover:bg-indigo-700"
            >
              Crear cuenta
            </button>

          </form>


          <div className="mt-6 border-t border-slate-100 pt-6 text-center text-sm text-slate-500">

            ¿Ya tienes una cuenta?{" "}

            <Link
              href="/login"
              className="font-medium text-indigo-600"
            >
              Inicia sesión
            </Link>

          </div>

        </div>

      </div>

    </main>
  );
}