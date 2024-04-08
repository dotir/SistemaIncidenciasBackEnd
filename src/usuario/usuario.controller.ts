import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post, Put } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { Usuario } from "@prisma/client";

@Controller('usuario')
export class UsuarioController {

    constructor(private readonly usuarioService: UsuarioService) { }

    @Get()
    async getTodosLosUsuarios() {
        return this.usuarioService.getTodosLosUsuarios();
    }

    @Post()
    async crearUsuario(@Body() data: Usuario) {
        return this.usuarioService.crearUsuario(data);
    }

    @Get(':id')
    async getUsuarioPorId(@Param('id') id: string) {
        const usuarioEncontrado= await this.usuarioService.getUsuarioPorId(Number(id));
        if(!usuarioEncontrado) throw new NotFoundException('Usuario no encontrado');
        return usuarioEncontrado;
    }

    @Put(':id')
    async actualizarUsuario(@Param('id') id: string, @Body() data: Usuario) {
        try {
            return await this.usuarioService.actualizarUsuario(Number(id), data);
        } catch (error) {
            throw new NotFoundException('Usuario no encontrado');
        }
    }

    @Delete(':id')
    async eliminarUsuario(@Param('id') id: string) {
        try {
            return await this.usuarioService.eliminarUsuario(Number(id));
        } catch (error) {
            throw new NotFoundException('Usuario no encontrado');
        }
    }
}
