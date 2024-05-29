import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WalletAddressesService } from './wallet-addresses.service';
import { WalletAddressesController } from './wallet-addresses.controller';
import { WalletAddress } from './wallet-address.entity';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [TypeOrmModule.forFeature([WalletAddress]), UsersModule],
  providers: [WalletAddressesService],
  controllers: [WalletAddressesController],
  exports: [WalletAddressesService],
})
export class WalletAddressesModule {}
