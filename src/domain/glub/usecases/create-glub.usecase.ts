import {Inject, Injectable} from '@nestjs/common';
import Glub from '../entities/glub.entity';
import {UseCase} from 'domain/base/use-case';
import CreateGlubDto from '../dtos/create-glub.dto';
import {PROVIDER} from '../constants/provider'

@Injectable()
export class CreateGlubUsecase implements UseCase<CreateGlubDto, Glub>{
    constructor (
        @Inject(PROVIDER.REPOSITORY)
        private readonly glubRepository: IGlubRepository,
    ) {}

    public async execute(input: CreateGlubDto): Promise<Glub> {
        return this.glubRepository.create(input);
    }
}