export default interface AbsUseCase<RequestDTO, ResponseDTO> {
    request: RequestDTO;
    execute(): Promise<ResponseDTO|void>;
}