export default interface AbsDTO<DTOJson> {
    toJson(): DTOJson;
    equals(dto: AbsDTO<DTOJson>): boolean;
}