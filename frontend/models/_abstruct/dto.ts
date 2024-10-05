export default abstract class AbsDTO<DTOJson> {
    abstract toJson(): DTOJson;

    equals(dto: AbsDTO<DTOJson>): boolean {
        return this.toJson() === dto.toJson();
    };
}