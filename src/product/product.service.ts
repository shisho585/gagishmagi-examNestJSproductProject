import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './product.entity';
import { CreateProductDTO } from './dto/create-product.dto';
import { ProductRepository } from './product.repository';

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(ProductRepository)
        private productRepository: ProductRepository,
    ) { }

    public async createProduct(
        createProductDto: CreateProductDTO,
    ): Promise<Product> {
        return await null //create product
    }


    public async getProducts(): Promise<Product[]> {
        return await null ;// find all
    }


    public async getProduct(productId: number): Promise<Product> {
        const foundProduct = null; //findOne
        if (!foundProduct) {
            throw new NotFoundException('Product not found');
        }
        return foundProduct;
    }


    public async editProduct(
        productId: number,
        createProductDto: CreateProductDTO,
    ): Promise<Product> {
        //find One and Edit
        const editedProduct = null; //find One
        if (!editedProduct) {
            throw new NotFoundException('Product not found');
        }
        return null ; // Edit Product
    }


    public async deleteProduct(productId: number): Promise<void> {
        await null // delete product
    }
}
