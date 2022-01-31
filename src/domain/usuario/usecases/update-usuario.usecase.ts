import {Inject, Injectable} from '@nestjs/common';
import Usuario from '../entities/usuario.entity';
import {UseCase} from 'domain/base/use-case';
import {PROVIDER} from '../constants/provider';

interface UpdateUsuario {
    usuario:Usuario;
}

@Injectable()
export class UpdateUsuarioUsecase implements UseCase<UpdateUsuario, Usuario > {
    constructor (
        @Inject(PROVIDER.REPOSITORY)
        private readonly usuarioRepository: IUsuarioRepository,
    ) {}    

    public async execute(input: UpdateUsuario): Promise<Usuario> {
        return this.usuarioRepository.update(input.id, {
            ...input. usuario
        });
    }
}
