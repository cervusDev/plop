import { CalculoEntity } from 'src/domain/calculo/entities/calculo.entity';
import { Mapper } from 'presentation/base/mapper';
import { CreateCalculoDto } from 'presentation/rest/v1/calculo/dto/calculo.dto';

export class CreateCalculoMapper
  implements Mapper<CreateCalculoDto, CalculoEntity> {}
