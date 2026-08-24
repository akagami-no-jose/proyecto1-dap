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
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6 py-12">

      <div className="w-full max-w-md text-slate-900">

        <div className="mb-8 text-center">

          <Link
            href="/"
            className="text-2xl font-bold flex items-center justify-center gap-2"
          >
            <FontAwesomeIcon icon={faListCheck} style={{color: "#4f39f6",}} />
            TaskFlow

          </Link>

        </div>


        <div className="rounded-2xl border bg-white p-8 shadow-sm">

          <h1 className="text-2xl font-bold">
            Bienvenido nuevamente
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Ingresa a tu cuenta para continuar.
          </p>


          <form
            onSubmit={handleSubmit}
            className="mt-8 space-y-5"
          >

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
                placeholder="usuario@email.com"
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                required
              />

            </div>


            <div>

              <div className="mb-2 flex justify-between">

                <label
                  htmlFor="password"
                  className="text-sm font-medium"
                >
                  Contraseña
                </label>
              </div>

              <input
                id="password"
                type="password"
                placeholder="••••••••"
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                required
              />

            </div>


            <button
              type="submit"
              className="w-full rounded-lg bg-indigo-600 px-4 py-3 font-semibold text-white hover:bg-indigo-700"
            >
              Iniciar sesión
            </button>

          </form>


          <div className="mt-6 border-t border-slate-100 pt-6 text-center text-sm text-slate-500">

            ¿No tienes una cuenta?{" "}

            <Link
              href="/register"
              className="font-medium text-indigo-600"
            >
              Regístrate
            </Link>

          </div>

        </div>

      </div>

    </main>
  );
}