import { Module } from '@nestjs/common';

@Module({
    controllers: [CalculoController],
    providers: [
        CreateCalculoUsecase,
        UpdateCalculoUsecase,
        DeleteCalculoUsecase,
        FindCalculoUsecase,
    ],
})

export class CalculoModule {}