import {
  NextRequest,
  NextResponse,
} from "next/server";

import pool from "@/app/lib/db";

interface Params {
  params: Promise<{
    id: string;
  }>;
}


// ==========================================
// GET /api/projects/:id
// ==========================================

export async function GET(
  request: NextRequest,
  { params }: Params
) {
  try {
    const { id } = await params;

    const projectId = Number(id);

    if (isNaN(projectId)) {
      return NextResponse.json(
        {
          message: "ID de proyecto inválido",
        },
        {
          status: 400,
        }
      );
    }

    const result = await pool.query(
      `
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
      WHERE id = $1
      `,
      [projectId]
    );

    if (result.rows.length === 0) {
      return NextResponse.json(
        {
          message: "Proyecto no encontrado",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json({
      project: result.rows[0],
    });

  } catch (error) {
    console.error("GET /api/projects/:id:", error);

    return NextResponse.json(
      {
        message: "Error obteniendo proyecto",
      },
      {
        status: 500,
      }
    );
  }
}


// ==========================================
// PUT /api/projects/:id
// ==========================================

export async function PUT(
  request: NextRequest,
  { params }: Params
) {
  try {
    const { id } = await params;

    const projectId = Number(id);

    if (isNaN(projectId)) {
      return NextResponse.json(
        {
          message: "ID de proyecto inválido",
        },
        {
          status: 400,
        }
      );
    }

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
          message: "El nombre es obligatorio",
        },
        {
          status: 400,
        }
      );
    }

    if (
      progress !== undefined &&
      (
        progress < 0 ||
        progress > 100
      )
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
      UPDATE projects
      SET
        name = $1,
        description = $2,
        status = $3,
        progress = $4,
        owner_id = $5,
        updated_at = CURRENT_TIMESTAMP
      WHERE id = $6
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
        status ?? "PLANNED",
        progress ?? 0,
        owner_id ?? null,
        projectId,
      ]
    );

    if (result.rows.length === 0) {
      return NextResponse.json(
        {
          message: "Proyecto no encontrado",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json({
      message:
        "Proyecto actualizado correctamente",
      project: result.rows[0],
    });

  } catch (error) {
    console.error("PUT /api/projects/:id:", error);

    return NextResponse.json(
      {
        message: "Error actualizando proyecto",
      },
      {
        status: 500,
      }
    );
  }
}


// ==========================================
// DELETE /api/projects/:id
// ==========================================

export async function DELETE(
  request: NextRequest,
  { params }: Params
) {
  try {
    const { id } = await params;

    const projectId = Number(id);

    if (isNaN(projectId)) {
      return NextResponse.json(
        {
          message: "ID de proyecto inválido",
        },
        {
          status: 400,
        }
      );
    }

    const result = await pool.query(
      `
      DELETE FROM projects
      WHERE id = $1
      RETURNING id
      `,
      [projectId]
    );

    if (result.rows.length === 0) {
      return NextResponse.json(
        {
          message: "Proyecto no encontrado",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json({
      message:
        "Proyecto eliminado correctamente",
    });

  } catch (error) {
    console.error(
      "DELETE /api/projects/:id:",
      error
    );

    return NextResponse.json(
      {
        message: "Error eliminando proyecto",
      },
      {
        status: 500,
      }
    );
  }
}