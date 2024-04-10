import { Module } from '@nestjs/common';
import { UsuarioController } from './usuario.controller';
import { UsuarioService } from './usuario.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [UsuarioController],
  providers: [UsuarioService],
  imports: [PrismaModule],
  exports: [UsuarioService],
})
export class UsuarioModule {}
