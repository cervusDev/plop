interface UpdateGlub {
    glub:Glub;
}

@Injectable()
export class UpdateGlubUsecase implements UseCase<UpdateGlub, Glub > {
    constructor (
        @Inject(PROVIDER.REPOSITORY)
        private readonly glubRepository: IGlubRepository,
    ) {}    

    public async execute(input: UpdateGlub): Promise<Glub> {
        return this.glubRepository.update(input.id, {
            ...input. glub
        });
    }
}
