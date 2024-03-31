import { Injectable } from '@nestjs/common';
import { orthographyCheckUseCase } from './use-cases';
import { OrthographyDto } from './dtos';

@Injectable()
export class GptService {

    // LLamar solo a casos de uso
    
    async orthographyCheck(orthographyDto: OrthographyDto){
        return await orthographyCheckUseCase({
            prompt: orthographyDto.prompt
        });
    }


}
