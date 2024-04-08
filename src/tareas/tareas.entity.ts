export enum Status {
    PENDING = 'PENDING',
    IN_PROGRESS = 'IN_PROGRESS',
    DONE = 'DONE',
}

export class tareas{
    id: string;
    titulo: string;
    descripcion: string;
    status: Status;
}
