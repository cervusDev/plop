@Module({
    controllers: [
    /* insira o controller aqui... */
        CreateBlobController,
        FindAllBlobController,
        FindOneBlobController,
        UpdateBlobController,
        DeleteBlobController,
    ],
    providers: [
    /* insira os usecase aqui... */
        CreateBlobUsecase,
        FindAllBlobUsecase,
        FindOneBlobUsecase,
        UpdateBlobUsecase,
        DeleteBlobUsecase,
    ],
})
export class BlobModule {}