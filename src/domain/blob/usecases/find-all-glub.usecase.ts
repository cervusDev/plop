@Injectable()
export class FindAllGlub implements UseCase<number, Glub[]> {
    constructor (
        @Inject(PROVIDER.REPOSITORY)
        private readonly glubRepository: IGlubRepository,
    ) {}   

    public async execute(): Promise<Glub[]> {
        return this.glubRepository.findAll();
    } 
}