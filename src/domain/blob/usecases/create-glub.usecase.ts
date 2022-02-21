
@Injectable()
export class CreateGlubUsecase implements UseCase<Glub>{
    constructor (
        @Inject()
        private readonly glubRepository: IGlubRepository,
    ) {}

    public async execute(input: CreateGlubDto): Promise<Glub> {
        return this.glubRepository.create(input);
    }
}
