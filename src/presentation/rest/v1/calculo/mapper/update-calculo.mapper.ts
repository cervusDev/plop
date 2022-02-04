
import { Calculo } from 'domain/calculo/entities/calculo.entity';
import { Mapper } from 'presentation/base/mapper';
import { UpdateCalculoDto } from '../dto/update-calculo.dto';


export class UpdateCalculoMapper implements Mapper<UpdateCalculoDto, CalculoEntity> {}