import { Inject, Injectable } from '@nestjs/common';
import Empresa from '../entities/empresa.entity';
import { UseCase } from 'domain/base/use-case';
import { PROVIDER } from '../constants/provider';

interface UpdateEmpresa {
  empresa: Empresa;
}

@Injectable()
export class UpdateEmpresaUsecase implements UseCase<UpdateEmpresa, Empresa> {
  constructor(
    @Inject(PROVIDER.REPOSITORY)
    private readonly empresaRepository: IEmpresaRepository,
  ) {}

  public async execute(input: UpdateEmpresa): Promise<Empresa> {
    return this.empresaRepository.update(input.id, {
      ...input.empresa,
    });
  }
}
