import { Module } from '@nestjs/common';
import { TareasModule } from './tareas/tareas.module';
import { UsuarioModule } from './usuario/usuario.module';
import { IncidenciaModule } from './incidencia/incidencia.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [TareasModule, UsuarioModule, IncidenciaModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
