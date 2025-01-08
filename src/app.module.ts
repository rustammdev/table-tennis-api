import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PaymentsModule } from './payments/payments.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://savealittle:SGPjiSrNg0JrYgrL@savealittle.9qrw6.mongodb.net/',
    ),
    PaymentsModule,
  ],
})
export class AppModule {}
