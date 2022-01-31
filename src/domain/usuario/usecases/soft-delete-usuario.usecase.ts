import {Inject, Injectable, BadRequestException} from '@nestjs/common';
import { UseCase } from 'src/domain/base/use-case';
import Usuario from '../entities/usuario.entity';
import IUsuarioRepository from '../repository/usuario.repository';
import { PROVIDER } from '../constants/provider';

@Injectable()
export class SoftDeleteUsuarioUseCase implements UseCase<number, void> {
    constructor (
        @Inject(PROVIDER.REPOSITORY)
        private readonly usuarioRepository: IUsuarioRepository,
    ) {}

    public async execute(input: number): Promise<void> {
        const usuario = await this.usuarioRepository.getById(input);

        if (usuario) {
            const { deletedAt } = await this.usuarioRepository.update(input, {
                deletedAt: new Date(),
            } as Usuario);

            if (deletedAt === null) {
                throw new BadRequestException('Não foi possível excluir o registro');
            }
        }
    }
}