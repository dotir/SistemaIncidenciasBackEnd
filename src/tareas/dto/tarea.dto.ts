import {Status} from '../tareas.entity';
import {IsIn, IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator'; 

export class CrearTareaDTO{
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    titulo: string;

    @IsString()
    @IsNotEmpty()
    descripcion: string;
}

export class ActualizarTareaDTO{
    @IsString()
    @IsOptional()
    titulo?: string;

    @IsString()
    @IsOptional()
    descripcion?: string;

    @IsString()
    @IsOptional()
    @IsIn([Status.PENDING,Status.IN_PROGRESS,Status.DONE])
    status?: Status;
}