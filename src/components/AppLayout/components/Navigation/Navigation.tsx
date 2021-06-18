import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { Activable, Linkable } from '../../../../utils/types';
import useNavigationConfig from './useNavigationConfig';

const Item: FC<Activable & Linkable> = ({ active, href, children }) => (
  <Link href={href}>
    <a
      className={`flex md:px-12 md:h-20 md:min-h-20 justify-center md:justify-start items-center w-full select-none focus:outline-none z-10 ${
        active ? 'bg-white md:rounded-r-full' : 'transparent'
      }`}
    >
      {children}
    </a>
  </Link>
);

const Navigation: FC = () => {
  const config = useNavigationConfig();
  const { asPath } = useRouter();

  return (
    <div className="h-full flex flex-row md:flex-col items-center md:items-start justify-evenly md:justify-start p-0 overflow-x-auto">
      {config.map(({ label, href }, index) => {
        const isActive = asPath.includes(href);

        return (
          <Item key={index} active={isActive} href={href}>
            <span
              className={`hidden md:block text-button ml-6 ${
                isActive ? 'text-purple-heart' : 'text-white'
              }`}
            >
              {label}
            </span>
          </Item>
        );
      })}
    </div>
  );
};

export default Navigation;
