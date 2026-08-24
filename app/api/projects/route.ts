import { NextResponse } from "next/server";
import pool from "@/app/lib/db";

// ==========================================
// GET /api/projects
// ==========================================

export async function GET() {
  try {
    const result = await pool.query(`
      SELECT
        id,
        name,
        description,
        status,
        progress,
        owner_id,
        created_at,
        updated_at
      FROM projects
      ORDER BY created_at DESC
    `);

    return NextResponse.json({
      projects: result.rows,
    });

  } catch (error) {
    console.error("GET /api/projects:", error);

    return NextResponse.json(
      {
        message: "Error obteniendo proyectos",
      },
      {
        status: 500,
      }
    );
  }
}


// ==========================================
// POST /api/projects
// ==========================================

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      description,
      status,
      progress,
      owner_id,
    } = body;

    if (!name || !name.trim()) {
      return NextResponse.json(
        {
          message: "El nombre del proyecto es obligatorio",
        },
        {
          status: 400,
        }
      );
    }

    const projectStatus =
      status ?? "PLANNED";

    const projectProgress =
      progress ?? 0;

    if (
      projectProgress < 0 ||
      projectProgress > 100
    ) {
      return NextResponse.json(
        {
          message:
            "El progreso debe estar entre 0 y 100",
        },
        {
          status: 400,
        }
      );
    }

    const result = await pool.query(
      `
      INSERT INTO projects (
        name,
        description,
        status,
        progress,
        owner_id
      )
      VALUES ($1, $2, $3, $4, $5)
      RETURNING
        id,
        name,
        description,
        status,
        progress,
        owner_id,
        created_at,
        updated_at
      `,
      [
        name.trim(),
        description ?? null,
        projectStatus,
        projectProgress,
        owner_id ?? null,
      ]
    );

    return NextResponse.json(
      {
        message: "Proyecto creado correctamente",
        project: result.rows[0],
      },
      {
        status: 201,
      }
    );

  } catch (error) {
    console.error("POST /api/projects:", error);

    return NextResponse.json(
      {
        message: "Error creando proyecto",
      },
      {
        status: 500,
      }
    );
  }
}