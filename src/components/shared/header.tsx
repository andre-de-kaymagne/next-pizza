import { cn } from '@/lib/utils';
import React from 'react';
import { Container } from './container';
import Image from 'next/image'

interface Props {
className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn('border border-b', className)}>
      <Container className='flex items-center justify-between py-8'>

        {/* Левая часть */}
        <div>
          <Image src='/logo.svg' alt='logo' width={32} height={32} />
        </div>

      </Container>
    </header>
  );
};
