import {Inject, Injectable, BadRequestException} from '@nestjs/common';
import { UseCase } from 'src/domain/base/use-case';
import Blob from '../entities/blob.entity';
import IBlobRepository from '../repository/blob.repository';
import { PROVIDER } from '../constants/provider';

@Injectable()
export class SoftDeleteBlobUseCase implements UseCase<number, void> {
    constructor (
        @Inject(PROVIDER.REPOSITORY)
        private readonly blobRepository: IBlobRepository,
    ) {}

    public async execute(input: number): Promise<void> {
        const blob = await this.blobRepository.getById(input);

        if (blob) {
            const { deletedAt } = await this.blobRepository.update(input, {
                deletedAt: new Date(),
            } as Blob);

            if (deletedAt === null) {
                throw new BadRequestException('Não foi possível excluir o registro');
            }
        }
    }
}