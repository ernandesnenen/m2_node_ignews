import { Specification } from "../models/specifiction";


 interface  IcreateSpecificationDTO{

    name:string,
    description:string

}

 interface ISpecificationRepository{
    findByName(name:string): Specification| undefined;
    // list():Category[];
    create({name, description}:IcreateSpecificationDTO):void;
}

export {
    IcreateSpecificationDTO,ISpecificationRepository
}