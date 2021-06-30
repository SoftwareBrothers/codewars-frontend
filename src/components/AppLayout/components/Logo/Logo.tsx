import Link from 'next/link';
import { FC } from 'react';

interface LogoProps {
  title?: string;
}

const Logo: FC<LogoProps> = ({ title }) => (
  
  <Link
    href="/"
  >
    <a className="flex items-left w-full py-4 container m-auto">
      <img src="/images/logo-sb.svg" alt="logo-sb" className="h-12 md:h-6 px-1 md:px-3"/>
      <img src="/images/logo-cw.png" alt="logo-cw" className="h-12 md:h-6 px-1 md:px-3"/>
      <div className="minh-full md:hidden border-red-900 border-solid border-l-2 ml-4">
      </div>
      <div className="md:flex">
        <p className="px-4 text-white font-bold">Codewars</p>
        <p className="pl-4 text-cw-gray border-red-900 border-solid md:border-l-2">{title} League</p>
      </div>
    </a>
  </Link>
);

export default Logo;
