import {Inject, Injectable} from '@nestjs/common';
import Usuario from '../entities/usuario.entity';
import {UseCase} from 'domain/base/use-case';
import CreateUsuarioDto from '../dtos/create-usuario.dto';
import {PROVIDER} from '../constants/provider'

@Injectable()
export class CreateUsuarioUsecase implements UseCase<CreateUsuarioDto, Usuario>{
    constructor (
        @Inject(PROVIDER.REPOSITORY)
        private readonly usuarioRepository: IUsuarioRepository,
    ) {}

    public async execute(input: CreateUsuarioDto): Promise<Usuario> {
        return this.usuarioRepository.create(input);
    }
}