import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { WalletAddress } from './wallet-address.entity';

@Injectable()
export class WalletAddressesService {
  constructor(
    @InjectRepository(WalletAddress)
    private walletAddressesRepository: Repository<WalletAddress>,
  ) {}

  create(walletAddress: WalletAddress): Promise<WalletAddress> {
    return this.walletAddressesRepository.save(walletAddress);
  }

  findAll(): Promise<WalletAddress[]> {
    return this.walletAddressesRepository.find();
  }

  findOne(id: number): Promise<WalletAddress> {
    return this.walletAddressesRepository.findOne({ where: { wallet_id: id } });
  }

  async update(id: number, walletAddress: WalletAddress): Promise<void> {
    await this.walletAddressesRepository.update(id, walletAddress);
  }

  async remove(id: number): Promise<void> {
    await this.walletAddressesRepository.delete(id);
  }
}
