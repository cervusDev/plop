@Injectable()
export class SoftDeleteGlubUseCase implements UseCase<number, void> {
    constructor (
        @Inject(PROVIDER.REPOSITORY)
        private readonly glubRepository: IGlubRepository,
    ) {}

    public async execute(input: number): Promise<void> {
        const glub = await this.glubRepository.getById(input);

        if (glub) {
            const { deletedAt } = await this.glubRepository.update(input, {
                deletedAt: new Date(),
            } as Glub);

            if (deletedAt === null) {
                throw new BadRequestException('Não foi possível excluir o registro');
            }
        }
    }
}