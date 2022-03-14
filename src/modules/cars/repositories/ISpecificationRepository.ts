import { Specification } from "../entities/Specification";

interface ICreateSpecificationDTO {
  name: String;
  description: String;
}

interface ISpecificationRepository {
  create({ description, name }: ICreateSpecificationDTO): Promise<void>;
  findByName(name: string): Promise<Specification>;
}

export { ICreateSpecificationDTO, ISpecificationRepository };
