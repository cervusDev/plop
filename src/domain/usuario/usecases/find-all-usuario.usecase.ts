import {Inject, Injectable} from '@nestjs/common';
import { UseCase } from 'src/domain/base/use-case';
import Usuario from '../entities/usuario.entity';
import IUsuarioRepository from '../repository/usuario.repository';
import { PROVIDER } from '../constants/provider';

@Injectable()
export class FindAllUsuario implements UseCase<number, Usuario[]> {
    constructor (
        @Inject(PROVIDER.REPOSITORY)
        private readonly usuarioRepository: IUsuarioRepository,
    ) {}   

    public async execute(): Promise<Usuario[]> {
        return this.usuarioRepository.findAll();
    } 
}