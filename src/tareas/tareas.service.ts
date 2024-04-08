import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
// import { tarea } from '@prisma/client';

// import { tareas, Status } from './tareas.entity';
// import { v4 } from 'uuid'
// import { ActualizarTareaDTO } from './dto/tarea.dto';

@Injectable()
export class TareasService {

    // ejemplo con base de datos
    // constructor(private prisma: PrismaService){}

    // async getTodasLasTareas(): Promise<tarea[]> {
    //     return this.prisma.tarea.findMany();
    // }
    // async getTareaPorId(id: number): Promise<tarea> {
    //     return this.prisma.tarea.findUnique({
    //         where: {
    //             id
    //         }
    //     });
    // }

    // async crearTarea(data:tarea): Promise<tarea> {
    //     return this.prisma.tarea.create({
    //         data
    //     });
    // }

    // async actualizarTarea(id: number, data: tarea): Promise<tarea> {
    //     return this.prisma.tarea.update({
    //         where: {
    //             id
    //         },
    //         data
    //     });
    // }

    // async eliminarTarea(id: number): Promise<tarea> {
    //     return this.prisma.tarea.delete({
    //         where: {
    //             id
    //         }
    //     });
    // }


    // ejemplo sin base de datos
    // private tareas = [
    //     {
    //         id: '1',
    //         titulo: 'Tarea 1',
    //         descripcion: 'Descripcion de la tarea 1',
    //         status: Status.PENDING,
    //     }
    // ];

    // getTodasLasTareas() {
    //     return this.tareas;
    // }
    // crearTarea(titulo: string, descripcion: string) {
    //     const tarea = {
    //         id: v4(),
    //         titulo,
    //         descripcion,
    //         status: Status.PENDING,
    //     };
    //     this.tareas.push(tarea);
    //     return tarea;
    // }
    // eliminarTarea(id: string) {
    //     this.tareas = this.tareas.filter(tarea => tarea.id !== id);
    // }

    // obtenerTareaId(id: string): tareas{
    //     return this.tareas.find(tarea => tarea.id === id);
    // }

    // actualizarTarea(id:string,updateFields:ActualizarTareaDTO) {
    //     const tarea= this.obtenerTareaId(id);
    //     const nuevaTarea= Object.assign(tarea,updateFields);
    //     this.tareas = this.tareas.map(tarea => tarea.id === id ? nuevaTarea : tarea);
        
    //     return nuevaTarea;
    // }
}
