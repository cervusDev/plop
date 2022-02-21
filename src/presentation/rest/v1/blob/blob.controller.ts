@Controller()
export class BlobController implements BaseController<Blob> {
  constructor(
    private readonly createBlobUsecase: CreateBlobUsecase,
    private readonly findAllBlobUsecase: FindAllBlobUsecase,
    private readonly findOneBlobUsecase: FindOneBlobUsecase,
    private readonly updateBlobUsecase: UpdateBlobUsecase,
    private readonly deleteBlobUsecase: DeleteBlobUsecase,
  ) {}

  @Post()
  public async create(@Body() createBlobDto: CreateBlobDto): Promise<Blob> {
    throw new Error('Method not implemented.');
  }

  @Get()
  public async all(): Promise<Blob[]> {
    throw new Error('Method not implemented.');
  }

  @Get(':id')
  public async find(@Param('id') id: number): Promise<Blob> {
    throw new Error('Method not implemented.');
  }

  @Patch(':id')
  public async update(
    @Param('id') id: number,
    @Body() updateUserDto: UpdateBlobDto,
  ): Promise<Usuario> {
    throw new Error('Method not implemented.');
  }

  @Delete(':id')
  public async delete(@Param('id') id: number): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
