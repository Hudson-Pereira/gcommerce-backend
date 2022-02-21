import { Test, TestingModule } from '@nestjs/testing';
import { ProdutosprecosController } from './produtosprecos.controller';
import { ProdutosprecosService } from './produtosprecos.service';

describe('ProdutosprecosController', () => {
  let controller: ProdutosprecosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProdutosprecosController],
      providers: [ProdutosprecosService],
    }).compile();

    controller = module.get<ProdutosprecosController>(ProdutosprecosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
