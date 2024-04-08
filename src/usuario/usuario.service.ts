import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Usuario } from '@prisma/client'

@Injectable()
export class UsuarioService {

    constructor(private prisma: PrismaService){}

    async getTodosLosUsuarios(): Promise<Usuario[]>{
        return this.prisma.usuario.findMany();
    }
    async getUsuarioPorId(id: number): Promise<Usuario>{
        return this.prisma.usuario.findUnique({
            where: {
                id
            }
        });
    }
    async crearUsuario(data: Usuario): Promise<Usuario>{
        return this.prisma.usuario.create({
            data
        });
    }

    async actualizarUsuario(id: number, data: Usuario): Promise<Usuario>{
        return this.prisma.usuario.update({
            where: {
                id
            },
            data
        });
    }

    async eliminarUsuario(id: number): Promise<Usuario>{
        return this.prisma.usuario.delete({
            where: {
                id
            }
        });
    }
}
