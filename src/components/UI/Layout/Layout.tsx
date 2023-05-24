import type { FC, ReactNode } from 'react';
import { NavBar } from '../NavBar/NavBar';
import { Footer } from '../Footer/Footer';

interface LayoutProps {
  children?: ReactNode | ReactNode[]
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
        <>
            <NavBar/>
            {children}
            <Footer/>
        </>
  );
};
