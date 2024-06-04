import { auth } from '@nxnext/auth/server';
import { Button } from '@nxnext/ui/button';
import { Input } from '@nxnext/ui/input';
import Link from 'next/link';
import { redirect } from 'next/navigation';

import { MountainIcon } from 'lucide-react';

export default async function Component() {
  const session = await auth();
  if (!session) {
    redirect('/api/auth/signin');
  }

  return <div className="flex flex-col min-h-[100dvh]">Some content</div>;
}
