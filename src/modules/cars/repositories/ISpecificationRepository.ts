import { Specification } from "../entities/Specification";

interface ICreateSpecificationDTO {
  name: String;
  description: String;
}

interface ISpecificationRepository {
  create({ description, name }: ICreateSpecificationDTO): void;
  findByName(name: string): Specification;
}

export { ICreateSpecificationDTO, ISpecificationRepository };
