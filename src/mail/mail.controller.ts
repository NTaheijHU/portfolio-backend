/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common';
import { MailService } from './mail.service';

@Controller('mail')
export class MailController {
  constructor(private readonly service: MailService) {}

  @Post()
  async index(@Body() body: any) {
    return await this.service.sendMail(body.email, body.name, body.phone, body.message);
  }
}
