import {Inject, Injectable} from '@nestjs/common';
import { UseCase } from 'src/domain/base/use-case';
import Glub from '../entities/glub.entity';
import IGlubRepository from '../repository/glub.repository';
import { PROVIDER } from '../constants/provider';

@Injectable()
export class FindAllGlub implements UseCase<number, Glub[]> {
    constructor (
        @Inject(PROVIDER.REPOSITORY)
        private readonly glubRepository: IGlubRepository,
    ) {}   

    public async execute(): Promise<Glub[]> {
        return this.glubRepository.findAll();
    } 
}