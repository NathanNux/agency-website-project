import React from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';

export default function Homw() {
  return (
    <div className='w-full md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02 relative overflow-hidden]'>
      <Navbar />
    </div>
  );
}

