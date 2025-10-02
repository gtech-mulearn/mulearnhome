import React from 'react';
import Image from 'next/image';

const Page = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen text-3xl font-bold'>
      <Image src="/assets/logo.png" alt="MuLearn Logo" width={500} height={160} className="mb-6" />
    <p>This website is open for Hacktoberfest 2025 Contributions</p>
    </div>
  );
}

export default Page;
