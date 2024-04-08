import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post, Put } from '@nestjs/common';
import { TareasService } from './tareas.service';
// import { tarea } from '@prisma/client';
// import { CrearTareaDTO,ActualizarTareaDTO } from './dto/tarea.dto';

@Controller('tareas')
export class TareasController {

    // con base de datos
    // constructor(private readonly tareasService: TareasService) { }

    // @Get()
    // async getTodasLasTareas() {
    //     this.tareasService.getTodasLasTareas();
    // }

    // @Post()
    // async crearTarea(@Body() data: tarea) {
    //     return this.tareasService.crearTarea(data);
    // }

    // @Get(':id')
    // async getTareaPorId(@Param('id') id: string) {
    //     const tareaEncontrada= await this.tareasService.getTareaPorId(Number(id));
    //     if(!tareaEncontrada) throw new NotFoundException('Tarea no encontrada');
    //     return tareaEncontrada;
    // }

    // @Put(':id')
    // async actualizarTarea(@Param('id') id: string, @Body() data: tarea) {
    //     try {
    //         return await this.tareasService.actualizarTarea(Number(id), data);
    //     } catch (error) {
    //         throw new NotFoundException('Tarea no encontrada');
    //     }
    // }

    // @Delete(':id')
    // async eliminarTarea(@Param('id') id: string) {
    //     try {
    //         return await this.tareasService.eliminarTarea(Number(id));
    //     } catch (error) {
    //         throw new NotFoundException('Tarea no encontrada');
    //     }
    // }

    // sin base de datos
    // constructor(private tareasService: TareasService) { }

    // @Get()
    // getTodasLasTareas() {
    //     return this.tareasService.getTodasLasTareas();
    // }
    // @Post()
    // crearTarea(@Body() newTarea: CrearTareaDTO) {
    //     console.log(newTarea);
    //     return this.tareasService.crearTarea(newTarea.titulo, newTarea.descripcion);
    //     // return this.tareasService.crearTarea('Tarea 2', 'Descripcion de la tarea 2');
    // }
    // @Delete(':id')
    // deleteTarea(@Param('id') id: string) {
    //     this.tareasService.eliminarTarea(id);
    // }

    // @Patch(':id')
    // updateTarea(@Param('id') id: string, @Body() updateFields: ActualizarTareaDTO) {
    //     return this.tareasService.actualizarTarea(id, updateFields);
    // }
}
