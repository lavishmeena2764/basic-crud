import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { WalletAddress } from '../wallet-addresses/wallet-address.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  user_id: number;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password_hash: string;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @OneToMany(() => WalletAddress, (walletAddress) => walletAddress.user)
  walletAddresses: WalletAddress[];
}
