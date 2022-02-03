import {Inject, Injectable} from '@nestjs/common';
import Blob from '../entities/blob.entity';
import {UseCase} from 'domain/base/use-case';
import CreateBlobDto from '../dtos/create-blob.dto';
import {PROVIDER} from '../constants/provider'

@Injectable()
export class CreateBlobUsecase implements UseCase<CreateBlobDto, Blob>{
    constructor (
        @Inject(PROVIDER.REPOSITORY)
        private readonly blobRepository: IBlobRepository,
    ) {}

    public async execute(input: CreateBlobDto): Promise<Blob> {
        return this.blobRepository.create(input);
    }
}