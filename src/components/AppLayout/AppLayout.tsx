import { FC } from 'react';
import Logo from './components/Logo';

export interface AppLayoutProps {
  title?: string;
}

const AppLayout: FC<AppLayoutProps> = ({
  children,
  title = "Software Brothers",
}) => (
  <main className="w-screen h-screen flex flex-col md:flex-row bg-light-dark">
    <div className="h-full flex-1 order-1 md:order-2 z-20">
      <div className="w-full h-full flex flex-col">
        <div className="px-4 flex items-center bg-dark w-full">
          <Logo title={title}></Logo>
        </div>
        <div className="h-full w-full flex-1">
          <div
            className="flex-1 relative z-10 container m-auto px-4"
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  </main>
);

export default AppLayout;
