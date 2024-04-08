import { Module } from '@nestjs/common';
import { TareasController } from './tareas.controller';
import { TareasService } from './tareas.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [TareasController],
  providers: [TareasService],
  imports: [PrismaModule],
})
export class TareasModule {}
