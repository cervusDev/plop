import { Inject, Injectable } from '@nestjs/common';
import Empresa from '../entities/empresa.entity';
import { UseCase } from 'domain/base/use-case';
import CreateEmpresaDto from '../dtos/create-empresa.dto';
import { PROVIDER } from '../constants/provider';

@Injectable()
export class CreateEmpresaUsecase
  implements UseCase<CreateEmpresaDto, Empresa>
{
  constructor(
    @Inject(PROVIDER.REPOSITORY)
    private readonly empresaRepository: IEmpresaRepository,
  ) {}

  public async execute(input: CreateEmpresaDto): Promise<Empresa> {
    return this.empresaRepository.create(input);
  }
}
