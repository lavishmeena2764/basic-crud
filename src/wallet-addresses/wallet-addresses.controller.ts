import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { WalletAddressesService } from './wallet-addresses.service';
import { WalletAddress } from './wallet-address.entity';
import { CreateWalletAddressDto } from './wallet-address.dto';

@Controller('wallet-addresses')
export class WalletAddressesController {
  constructor(private readonly walletAddressesService: WalletAddressesService) {}

  @Post()
    create(@Body() createWalletAddressDto: CreateWalletAddressDto): Promise<WalletAddress> {
        const walletAddress = new WalletAddress();
        walletAddress.wallet_address = createWalletAddressDto.wallet_address;
        walletAddress.wallet_type = createWalletAddressDto.wallet_type;
        return this.walletAddressesService.create(walletAddress);
    }

  @Get()
  findAll(): Promise<WalletAddress[]> {
    return this.walletAddressesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<WalletAddress> {
    return this.walletAddressesService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() walletAddress: WalletAddress): Promise<void> {
    return this.walletAddressesService.update(id, walletAddress);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.walletAddressesService.remove(id);
  }
}
