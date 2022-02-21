@Injectable()
export class FindGlubUseCase implements UseCase<number, Glub> {
    constructor (
        @Inject(PROVIDER.REPOSITORY)
        private readonly glubRepository: IGlubRepository,
    ) {}   

    public async execute(id: number): Promise<Glub> {
        return this.glubRepository.getById(id);
    } 
}