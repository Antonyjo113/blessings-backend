import { Test, TestingModule } from '@nestjs/testing';
import { BusinessunitService } from './businessunit.service';

describe('BusinessunitService', () => {
  let service: BusinessunitService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BusinessunitService],
    }).compile();

    service = module.get<BusinessunitService>(BusinessunitService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
