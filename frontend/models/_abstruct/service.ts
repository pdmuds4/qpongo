export default interface AbsService<ResponseT> {
    execute(): Promise<ResponseT|void>;
}