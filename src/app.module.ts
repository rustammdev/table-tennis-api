import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PaymentsModule } from './payments/payments.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/tennis'),
    PaymentsModule,
  ],
})
export class AppModule {}
