import { Injectable,UnauthorizedException  } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsuarioService } from 'src/usuario/usuario.service';
import { LoginDto } from './dto/logindto';
import * as bcrypt from 'bcrypt';


@Injectable()
export class AuthService {
    constructor(
        private usuarioService: UsuarioService,
        private jwtService: JwtService,
    ) { }

    async validateUser(loginDto: LoginDto): Promise<string | null> {
        const user = await this.usuarioService.findByEmail(loginDto.email);
        if (!user) return null; // Si no encuentra el usuario, retorna null

        // Compara la contraseña en texto plano con la versión hasheada
        const isMatch = user && await bcrypt.compare(loginDto.password, user.password);
        if (!isMatch) return null; // Si la contraseña no coincide, retorna null

        const payload = { email: user.email, sub: user.id };
        return this.jwtService.sign(payload); // Si todo es correcto, retorna el token JWT
    }

}
