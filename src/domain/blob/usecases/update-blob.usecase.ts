import { Inject, Injectable } from '@nestjs/common';
import Blob from '../entities/blob.entity';
import { UseCase } from 'domain/base/use-case';
import { PROVIDER } from '../constants/provider';

interface UpdateBlob {
  blob: Blob;
}

@Injectable()
export class UpdateBlobUsecase implements UseCase<UpdateBlob, Blob> {
  constructor(
    @Inject(PROVIDER.REPOSITORY)
    private readonly blobRepository: IBlobRepository,
  ) {}

  public async execute(input: UpdateBlob): Promise<Blob> {
    return this.blobRepository.update(input.id, {
      ...input.blob,
    });
  }
}
