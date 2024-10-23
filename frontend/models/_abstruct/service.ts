export default interface AbsService<ResponseT> {
    execute(request: any): Promise<ResponseT|void>;
}