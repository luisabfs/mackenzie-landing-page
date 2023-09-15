import Image from 'next/image';
import { HamburgerIcon } from '@/components/HamburguerIcon';
import logo from 'public/logo.png';

export function Header() {
  return (
    <div className='flex items-center justify-end mb-20'>
      <Image src={logo} alt="Logo Mackenzie" className='object-contain object-left flex flex-1 h-10'/>

      <div className='space-x-12 hidden lg:flex'>
        <a>Nossa identidade</a>
        <a>Materiais didáticos</a>
        <a>Soluções educacionais</a>
        <a className='bg-white text-red text-sm font-semibold p-2 rounded-md'>LOGIN</a>
      </div>
      <HamburgerIcon />
    </div>
  );
}