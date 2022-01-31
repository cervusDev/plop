import { Inject, Injectable } from '@nestjs/common';
import { UseCase } from 'src/domain/base/use-case';
import Empresa from '../entities/empresa.entity';
import IEmpresaRepository from '../repository/empresa.repository';
import { PROVIDER } from '../constants/provider';

@Injectable()
export class FindAllEmpresa implements UseCase<number, Empresa[]> {
  constructor(
    @Inject(PROVIDER.REPOSITORY)
    private readonly empresaRepository: IEmpresaRepository,
  ) {}

  public async execute(): Promise<Empresa[]> {
    return this.empresaRepository.findAll();
  }
}