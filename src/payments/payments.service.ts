import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Payment, PaymentDocument } from './schema/payment.schema';
import { CreatePaymentDto } from './dto/create-payment.dto';

@Injectable()
export class PaymentsService {
  constructor(
    @InjectModel(Payment.name) private paymentModel: Model<PaymentDocument>,
  ) {}

  async create(createPaymentDto: CreatePaymentDto): Promise<Payment> {
    try {
      return await this.paymentModel.create(createPaymentDto);
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.BAD_REQUEST);
    }
  }

  async findAll(
    page: number,
    limit: number,
  ): Promise<{ data: Payment[]; total: number }> {
    const skip = (page - 1) * limit;
    const data = await this.paymentModel.find().skip(skip).limit(limit).exec();
    const total = await this.paymentModel.countDocuments();
    return { data, total };
  }
}
