import { Module } from '@nestjs/common';
import { TareasModule } from './tareas/tareas.module';
import { UsuarioModule } from './usuario/usuario.module';

@Module({
  imports: [TareasModule, UsuarioModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
