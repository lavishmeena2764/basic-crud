import { Test, TestingModule } from '@nestjs/testing';
import { WalletAddressesController } from './wallet-addresses.controller';

describe('WalletAddressesController', () => {
  let controller: WalletAddressesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WalletAddressesController],
    }).compile();

    controller = module.get<WalletAddressesController>(WalletAddressesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
