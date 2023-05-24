import type { FC, ReactNode } from 'react';
import { NavBar } from '../NavBar/NavBar';
import { Footer } from '../Footer/Footer';
import style from './layout.module.css'
interface LayoutProps {
  children?: ReactNode | ReactNode[]
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <NavBar/>
      <div className={`mt-4 mb-5 ${style.Content}`}>
        {children}
      </div>
      <Footer/>
    </>
  );
};
