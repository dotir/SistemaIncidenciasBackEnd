import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post, Put } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { Usuario } from "@prisma/client";
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('usuario')
@ApiTags('usuario')
export class UsuarioController {

    constructor(private readonly usuarioService: UsuarioService) { }

    @Get()
    @ApiOperation({ summary: 'Obtener todos los usuarios' })
    @ApiResponse({ status: 200, description: 'OK' })
    @ApiResponse({status:403, description:'Forbidden'})
    async getTodosLosUsuarios() {
        return this.usuarioService.getTodosLosUsuarios();
    }

    @Post()
    @ApiOperation({ summary: 'Crear un usuario' })
    async crearUsuario(@Body() data: Usuario) {
        return this.usuarioService.crearUsuario(data);
    }

    @Get(':id')
    @ApiOperation({ summary: 'Obtener un usuario por ID' })
    async getUsuarioPorId(@Param('id') id: string) {
        const usuarioEncontrado= await this.usuarioService.getUsuarioPorId(Number(id));
        if(!usuarioEncontrado) throw new NotFoundException('Usuario no encontrado');
        return usuarioEncontrado;
    }

    @Put(':id')
    @ApiOperation({ summary: 'Actualizar un usuario por ID' })
    async actualizarUsuario(@Param('id') id: string, @Body() data: Usuario) {
        try {
            return await this.usuarioService.actualizarUsuario(Number(id), data);
        } catch (error) {
            throw new NotFoundException('Usuario no encontrado');
        }
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Eliminar un usuario por ID' })
    async eliminarUsuario(@Param('id') id: string) {
        try {
            return await this.usuarioService.eliminarUsuario(Number(id));
        } catch (error) {
            throw new NotFoundException('Usuario no encontrado');
        }
    }

}
