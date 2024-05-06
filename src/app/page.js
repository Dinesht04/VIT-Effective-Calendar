'use client'
import { useRouter } from 'next/navigation';

import Link from 'next/link'
import { useEffect } from 'react';

export default function Home() {
  
  const router = useRouter();

  useEffect(() => {
    router.replace('./login')
  }, []);

  return (
   
    <div>
      
       <h1>Landing Page</h1>
       <Link href='/login'>Get Started</Link>
    </div>
  
  );
}
