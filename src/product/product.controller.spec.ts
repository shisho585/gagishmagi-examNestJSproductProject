import { Test, TestingModule } from '@nestjs/testing';
import { ProductController } from './product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductRepository } from './product.repository';
import { ProductService } from './product.service';
import { Product } from './product.entity';


describe('ProductController', () => {
  let controller: ProductController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [TypeOrmModule.forRoot({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'root',
        database: 'test_db',
        entities: [Product],
        synchronize: true,
      }),
      TypeOrmModule.forFeature([ProductRepository])],
      controllers: [ProductController],
      providers: [ProductService], 
    }).compile();

    controller = module.get<ProductController>(ProductController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
