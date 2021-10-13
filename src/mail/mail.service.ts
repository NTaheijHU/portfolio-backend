/* eslint-disable prettier/prettier */
import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendMail(email: string, name: string, phone: string, message: string) {
    await this.mailerService.sendMail({
      to: 'noah@taheij.nl',
      from: '"' + name + '" <' + email + '>',
      subject: 'Nieuw Bericht!',
      template: './sentMail',
      context: {
        name,
        email,
        phone,
        message,
      },
    });
  }
}
