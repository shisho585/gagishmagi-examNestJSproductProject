import { Controller, Get, HttpException, HttpStatus, Post, Body, UsePipes, ValidationPipe } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './product.entity';
import { CreateProductDTO } from './dto/create-product.dto';

@Controller('product')
export class ProductController {

    constructor(private productService: ProductService) { }

    @Get('all')
    public async getProducts(): Promise<Product[]> {
        const products = await this.productService.getProducts();
        return products;
        // throw new HttpException({
        //     status: HttpStatus.FORBIDDEN,
        //     error: 'This is a custom message',
        // }, HttpStatus.FORBIDDEN);
    }

    @Post()
    @UsePipes(ValidationPipe)
    public async createProduct(@Body() createproduct : CreateProductDTO) : Promise<Product> {
        return this.productService.createProduct(createproduct)
    }


}
