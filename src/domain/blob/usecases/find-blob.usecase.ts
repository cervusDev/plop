@Injectable()
export class FindBlobUseCase implements UseCase<number, Blob> {
    constructor (
        @Inject(PROVIDER.REPOSITORY)
        private readonly blobRepository: IBlobRepository,
    ) {}   

    public async execute(id: number): Promise<Blob> {
        return this.blobRepository.getById(id);
    } 
}