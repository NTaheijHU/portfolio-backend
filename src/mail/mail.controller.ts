/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-var-requires */
import { Body, Controller, HttpStatus, Post, Response } from '@nestjs/common';
import { MailService } from './mail.service';
import { verify } from 'hcaptcha';

require('dotenv').config();

const HCAPTCHA_SECRET = process.env.HCAPTCHA_SECRET;

@Controller('mail')
export class MailController {
  constructor(private readonly service: MailService) {}

  @Post()
  async index(@Response() res, @Body() body: any) {
    const secret = HCAPTCHA_SECRET;
    const token = body.token;

    await verify(secret, token)
    .then(async (data) => {
      if (data.success === true) {
        await this.service.sendMail(body.email, body.name, body.phone, body.message);
        return res.status(HttpStatus.CREATED).json({
          message: 'Het bericht is verstuurd.',
        });
      } else {
        return res.status(HttpStatus.FORBIDDEN).json({
          message: 'Invalid captcha',
        });
      }
    })
    .catch(console.error);
  }
}
