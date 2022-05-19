import { Category } from "../models/Category";


 interface  IcreateCategoryDTO{

    name:string,
    description:string

}

 interface ICategoriesRepository{
    findByName(name:string): Category | undefined;
    list():Category[];
    create({name, description}:IcreateCategoryDTO):void;
}

export {
    IcreateCategoryDTO,ICategoriesRepository
}