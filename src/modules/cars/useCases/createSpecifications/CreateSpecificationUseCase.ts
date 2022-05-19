import { SpecificationRepository } from "../../repositories/implementations/SpecificationRepository";


interface IRequestSpecification{
    name:string,
    description:string
}

class CreateSpecificationUseCase{
    constructor (private specificationRepository: SpecificationRepository){}
 execute({ name, description}: IRequestSpecification){
    const specificationAlreadyExist = this.specificationRepository.findByName(name)
   
    if(specificationAlreadyExist){
        throw new Error('specification alread exist')
    }
     
    this.specificationRepository.create({name, description})
    }
 }


export { CreateSpecificationUseCase}