import {Inject, Injectable} from '@nestjs/common';
import Glub from '../entities/glub.entity';
import {UseCase} from 'domain/base/use-case';
import {PROVIDER} from '../constants/provider';

interface UpdateGlub {
    glub:Glub;
}

@Injectable()
export class UpdateGlubUsecase implements UseCase<UpdateGlub, Glub > {
    constructor (
        @Inject(PROVIDER.REPOSITORY)
        private readonly glubRepository: IGlubRepository,
    ) {}    

    public async execute(input: UpdateGlub): Promise<Glub> {
        return this.glubRepository.update(input.id, {
            ...input. glub
        });
    }
}
