@Injectable()
export class FindAllBlob implements UseCase<number, Blob[]> {
    constructor (
        @Inject(PROVIDER.REPOSITORY)
        private readonly blobRepository: IBlobRepository,
    ) {}   

    public async execute(): Promise<Blob[]> {
        return this.blobRepository.findAll();
    } 
}