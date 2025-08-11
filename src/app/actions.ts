'use server';

import client from '@mailchimp/mailchimp_marketing';
import { z } from 'zod/v4';
import crypto from 'crypto';

client.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX,
});

const sanitizeEmail = z
  .string()
  .refine((val) => val.length < 254, { error: 'Email to long' })
  .transform((val) => val.trim());

const emailSchema = sanitizeEmail.pipe(z.email('Invalid email'));

export async function subscribe(_prevState: { message: string; type: string }, formData: FormData) {
  const email = formData.get('email');
  const validationResult = emailSchema.safeParse(email);

  // message and type of message
  let message = '';
  let type = '';

  if (!validationResult.success) {
    if (!email || email.toString().trim() === '') {
      message = "Email can't be empty";
      type = 'error';
      return { message, type };
    }
    message = validationResult.error.issues[0].message;
    type = 'error';
    return { message, type };
  }

  // add the last part here dont add it for me
  console.log('Passed validation. The email entered was: ' + validationResult.data);
  console.log(typeof email);
  const emailToLowerCase = validationResult.data.toLowerCase();

  const hashedEmail = crypto.createHash('md5').update(emailToLowerCase).digest('hex');
  console.log(hashedEmail);

  message = 'You sucsesscully subscribed!';
  type = 'success';

  return { message, type };

  //   const response = await client.ping.get();
  //   console.log(response);
}
