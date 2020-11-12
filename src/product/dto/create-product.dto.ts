import { IsString, IsNumberString } from 'class-validator';

export class CreateProductDTO {

    constructor() {
        this.name = 'tapuz';
        this.description = 'newOne';
        this.price = 25;
    }

    @IsString()
    name: string;

    @IsString()
    description: string;

    @IsNumberString()
    price: number;

}
