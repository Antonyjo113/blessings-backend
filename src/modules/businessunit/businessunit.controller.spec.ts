import { Test, TestingModule } from '@nestjs/testing';
import { BusinessunitController } from './businessunit.controller';

describe('BusinessunitController', () => {
  let controller: BusinessunitController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BusinessunitController],
    }).compile();

    controller = module.get<BusinessunitController>(BusinessunitController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
