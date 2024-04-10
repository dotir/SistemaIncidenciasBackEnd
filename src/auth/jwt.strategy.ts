import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET,// Usa el mismo "secret" para verificar la firma
    });
  }

  async validate(payload: any) {
     // Aquí se devuelve el payload del token si la firma es válida
    // Esto incluye verificar que el token no haya sido alterado usando el "secret"
    return { userId: payload.sub, email: payload.email };
  }
}
