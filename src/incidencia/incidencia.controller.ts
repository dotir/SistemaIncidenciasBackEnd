import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { IncidenciaService } from './incidencia.service';
import { CreateIncidenciaDto } from './dto/create-incidencia.dto';
import { UpdateIncidenciaDto } from './dto/update-incidencia.dto';
import { ApiOperation } from '@nestjs/swagger';

@Controller('incidencia')
export class IncidenciaController {
  constructor(private readonly incidenciaService: IncidenciaService) {}

  @Post()
  @ApiOperation({ summary: 'Crear una incidencia' })
  create(@Body() createIncidenciaDto: CreateIncidenciaDto) {
    return this.incidenciaService.create(createIncidenciaDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todas las incidencias' })
  findAll() {
    return this.incidenciaService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar una incidencia por ID' })
  findOne(@Param('id') id: string) {
    return this.incidenciaService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar una incidencia por ID' })
  update(@Param('id') id: string, @Body() updateIncidenciaDto: UpdateIncidenciaDto) {
    return this.incidenciaService.update(+id, updateIncidenciaDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar una incidencia por ID' })
  remove(@Param('id') id: string) {
    return this.incidenciaService.remove(+id);
  }
}
