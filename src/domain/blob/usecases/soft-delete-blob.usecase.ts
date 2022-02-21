@Injectable()
export class SoftDeleteBlobUseCase implements UseCase<number, void> {
    constructor (
        @Inject(PROVIDER.REPOSITORY)
        private readonly blobRepository: IBlobRepository,
    ) {}

    public async execute(input: number): Promise<void> {
        const blob = await this.blobRepository.getById(input);

        if (blob) {
            const { deletedAt } = await this.blobRepository.update(input, {
                deletedAt: new Date(),
            } as Blob);

            if (deletedAt === null) {
                throw new BadRequestException('Não foi possível excluir o registro');
            }
        }
    }
}