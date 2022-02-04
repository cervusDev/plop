import { Provider } from '@nestjs/common';
import { PROVIDER } from 'domain/calculo/constants/provider';
import { CalculoPrismaRepository } from 'infra/database/prisma/repositories/calculo.repository';
import { CalculoPrismaRepository } from 'infra/database/prisma/repositories/calculo.repository';

export const CalculoRepository: Provider = {
  provide: PROVIDER.CALCULOREPOSITORY,
  useClass: CalculoPrismaRepository,
};
