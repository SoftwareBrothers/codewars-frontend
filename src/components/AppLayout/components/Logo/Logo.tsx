import { FC } from 'react';

interface LogoProps {
  title?: string;
}

const Logo: FC<LogoProps> = ({ title }) => (
  <>
    <div className="flex items-left w-full py-4 container m-auto">
      <img src="/images/logo-sb.svg" alt="logo-sb" className="h-6 px-3"/>
      <img src="/images/logo-cw.jpg" alt="logo-cw" className="h-6 px-3" />
      <span className="px-4 text-white font-bold">Codewars</span>
      <span className="pl-4 text-white border-red-900 border-solid border-l-2">{title} League</span>
    </div>
  </>
);

export default Logo;
