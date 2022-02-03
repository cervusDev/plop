import {Repository} from 'src/domain/base/repository';
import Blob from '../entities/Blob.entity';

export interface IBlobRepository extends Repository<Blob>{}