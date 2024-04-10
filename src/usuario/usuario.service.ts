import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Usuario } from '@prisma/client'
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsuarioService {

    constructor(private prisma: PrismaService) { }

    async getTodosLosUsuarios(): Promise<Usuario[]> {
        return this.prisma.usuario.findMany();
    }
    async getUsuarioPorId(id: number): Promise<Usuario> {
        return this.prisma.usuario.findUnique({
            where: {
                id
            }
        });
    }
    async crearUsuario(data: any): Promise<any> {
        // Asumiendo que 'data' contiene la contraseña en texto plano bajo 'data.password'

        // Hashear la contraseña antes de guardar el usuario
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(data.password, salt);

        // Reemplazar la contraseña en texto plano con la hasheada
        data.password = hashedPassword;

        // Guardar el usuario en la base de datos con la contraseña hasheada
        return this.prisma.usuario.create({
            data,
        });
    }

    async actualizarUsuario(id: number, data: Usuario): Promise<Usuario> {
        return this.prisma.usuario.update({
            where: {
                id
            },
            data
        });
    }

    async eliminarUsuario(id: number): Promise<Usuario> {
        return this.prisma.usuario.delete({
            where: {
                id
            }
        });
    }

    async findByEmail(email: string): Promise<Usuario | null> {
        const user = await this.prisma.usuario.findUnique({
            where: { email },
        });

        if (!user) {
            throw new NotFoundException(`No se encontró un usuario con el email ${email}`);
        }

        return user;
    }
}
