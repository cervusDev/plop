import Usuario from '@prisma/client';
export class Usuario implements Partial<Usuario>{
    id?: number;
}