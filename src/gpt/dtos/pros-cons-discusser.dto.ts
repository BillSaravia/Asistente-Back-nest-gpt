import { IsString } from "class-validator/types/decorator/typechecker/IsString";


export class ProsConsDiscusserDto {

    @IsString()
    readonly prompt: string;
    
  }