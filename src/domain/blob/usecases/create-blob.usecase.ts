
@Injectable()
export class CreateBlobUsecase implements UseCase<Blob>{
    constructor (
        @Inject()
        private readonly blobRepository: IBlobRepository,
    ) {}

    public async execute(input: CreateBlobDto): Promise<Blob> {
        return this.blobRepository.create(input);
    }
}
