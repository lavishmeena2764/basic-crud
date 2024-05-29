import { IsNotEmpty, IsString } from 'class-validator';

export class CreateWalletAddressDto {
  @IsNotEmpty()
  @IsString()
  wallet_address: string;

  @IsNotEmpty()
  @IsString()
  wallet_type: string;
}
