import { IsNotEmpty, IsBoolean, IsString, IsDateString } from 'class-validator';

export class CreatePaymentDto {
  @IsString()
  @IsNotEmpty()
  tableName: string;

  @IsDateString()
  @IsNotEmpty()
  startTime: string;

  @IsDateString()
  @IsNotEmpty()
  endTime: string;

  @IsBoolean()
  @IsNotEmpty()
  isPaid: boolean;
}
