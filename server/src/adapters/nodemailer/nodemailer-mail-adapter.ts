import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adaptor";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "fc867d2d8d26bf",
      pass: "e7554251d0c917"
    }
  });

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body }: SendMailData) {
        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'Lucas Eduardo <daruedo@gmail.com>',
            subject,
            html: body
        });
    }
}