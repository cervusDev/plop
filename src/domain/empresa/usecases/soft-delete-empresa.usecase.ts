import { Inject, Injectable, BadRequestException } from '@nestjs/common';
import { UseCase } from 'src/domain/base/use-case';
import Empresa from '../entities/empresa.entity';
import IEmpresaRepository from '../repository/empresa.repository';
import { PROVIDER } from '../constants/provider';

@Injectable()
export class SoftDeleteEmpresaUseCase implements UseCase<number, void> {
  constructor(
    @Inject(PROVIDER.REPOSITORY)
    private readonly empresaRepository: IEmpresaRepository,
  ) {}

  public async execute(input: number): Promise<void> {
    const empresa = await this.empresaRepository.getById(input);

    if (empresa) {
      const { deletedAt } = await this.empresaRepository.update(input, {
        deletedAt: new Date(),
      } as Empresa);

      if (deletedAt === null) {
        throw new BadRequestException('Não foi possível excluir o registro');
      }
    }
  }
}
