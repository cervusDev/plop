import {Inject, Injectable} from '@nestjs/common';
import { UseCase } from 'src/domain/base/use-case';
import Blob from '../entities/blob.entity';
import IBlobRepository from '../repository/blob.repository';
import { PROVIDER } from '../constants/provider';

@Injectable()
export class FindAllBlob implements UseCase<number, Blob[]> {
    constructor (
        @Inject(PROVIDER.REPOSITORY)
        private readonly blobRepository: IBlobRepository,
    ) {}   

    public async execute(): Promise<Blob[]> {
        return this.blobRepository.findAll();
    } 
}