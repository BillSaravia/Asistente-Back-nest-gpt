import { Injectable } from '@nestjs/common';
import { orthographyCheckUseCase } from './use-cases';

@Injectable()
export class GptService {

    // LLamar solo a casos de uso
    
    async orthographyCheck(){
        return await orthographyCheckUseCase();
    }


}
