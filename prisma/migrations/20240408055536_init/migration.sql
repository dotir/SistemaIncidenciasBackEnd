-- CreateTable
CREATE TABLE "Usuario" (
    "id" SERIAL NOT NULL,
    "creacion" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "creador" TEXT NOT NULL,
    "activo" BOOLEAN NOT NULL DEFAULT true,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "rol" TEXT NOT NULL,
    "area" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Incidencia" (
    "id" SERIAL NOT NULL,
    "creacion" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "creador" TEXT NOT NULL,
    "activo" BOOLEAN NOT NULL DEFAULT true,
    "titulo" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "prioridad" TEXT NOT NULL,
    "area" TEXT NOT NULL,
    "asignado" TEXT NOT NULL,
    "fechaCierre" TIMESTAMP(3) NOT NULL,
    "estado" INTEGER NOT NULL,

    CONSTRAINT "Incidencia_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EstadoIncidencia" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "activo" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "EstadoIncidencia_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "EstadoIncidencia_nombre_key" ON "EstadoIncidencia"("nombre");

-- AddForeignKey
ALTER TABLE "Incidencia" ADD CONSTRAINT "Incidencia_estado_fkey" FOREIGN KEY ("estado") REFERENCES "EstadoIncidencia"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
