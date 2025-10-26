'use client';

import { usePathname } from 'next/navigation';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface ConditionalLayoutProps {
  children: React.ReactNode;
}

export default function ConditionalLayout({ children }: ConditionalLayoutProps) {
  const pathname = usePathname();
  
  // Hide navbar and footer for radio routes
  const isRadioRoute = pathname.startsWith('/radio');
  
  return (
    <>
      {!isRadioRoute && <Navbar />}
      {children}
      {!isRadioRoute && <Footer />}
    </>
  );
}
