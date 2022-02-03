import { Calculo } from 'domain/calculo/entities/calculo.entity';
import { ICalculoRepository } from 'domain/calculo/repository/calculo.repository';
import { InMemoryRepository } from './inmemory.repository';

export class CalculoInmemmoryRepository
  extends InMemoryRepository<Calculo>
  implements ICalculoRepository {}
