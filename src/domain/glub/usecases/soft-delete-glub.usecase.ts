import {Inject, Injectable, BadRequestException} from '@nestjs/common';
import { UseCase } from 'src/domain/base/use-case';
import Glub from '../entities/glub.entity';
import IGlubRepository from '../repository/glub.repository';
import { PROVIDER } from '../constants/provider';

@Injectable()
export class SoftDeleteGlubUseCase implements UseCase<number, void> {
    constructor (
        @Inject(PROVIDER.REPOSITORY)
        private readonly glubRepository: IGlubRepository,
    ) {}

    public async execute(input: number): Promise<void> {
        const glub = await this.glubRepository.getById(input);

        if (glub) {
            const { deletedAt } = await this.glubRepository.update(input, {
                deletedAt: new Date(),
            } as Glub);

            if (deletedAt === null) {
                throw new BadRequestException('Não foi possível excluir o registro');
            }
        }
    }
}