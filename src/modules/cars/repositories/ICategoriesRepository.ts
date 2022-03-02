import { Category } from "../model/Category";

interface ICreateCategoryDTO {
  name: String;
  description: String;
}

interface ICategoriesRepository {
  create({ description, name }: ICreateCategoryDTO): void;
  findByName(name: string): Category;
  list(): Category[];
}

export { ICategoriesRepository, ICreateCategoryDTO };
