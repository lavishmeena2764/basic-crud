import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { User } from '../users/user.entity';

@Entity()
export class WalletAddress {
  @PrimaryGeneratedColumn()
  wallet_id: number;

  @ManyToOne(() => User, user => user.walletAddresses)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column()
  wallet_address: string;

  @Column()
  wallet_type: string;
}
