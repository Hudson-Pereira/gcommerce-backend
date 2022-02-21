import { Test, TestingModule } from '@nestjs/testing';
import { ProdutosprecosService } from './produtosprecos.service';

describe('ProdutosprecosService', () => {
  let service: ProdutosprecosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProdutosprecosService],
    }).compile();

    service = module.get<ProdutosprecosService>(ProdutosprecosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
