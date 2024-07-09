import { prisma } from '@nxnext/db/server';
import NextAuth from 'next-auth';
import Resend from 'next-auth/providers/resend';

import { PrismaAdapter } from '@auth/prisma-adapter';

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Resend({
      apiKey: undefined, // REMINDER: keep undefined to avoid sending emails
      async sendVerificationRequest(params) {
        console.log('');
        console.log(`>>> Magic Link: ${params.url}`);
        console.log('');
      },
    }),
  ],
});
