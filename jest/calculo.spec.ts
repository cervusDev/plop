import { UseCase } from 'domain/base/use-case';
import { Calculo } from 'domain/calculo/entities/calculo.entity';

interface IResponse {}

export class CreateCalculoUseCase implements UseCase<Calculo, IResponse> {}

const makeSut = () => {
    const sut = new CreateCalculoUseCase();

    return {
        sut,
    }
}

describe("descrição", () => {
      it('deve ser possível ', async () => {
    const { sut } = makeSut();
  });
})