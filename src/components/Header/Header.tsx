import './header.css'
import { Navbar } from '../Navbar/Navbar';
import { ProgressIndicator } from '../ProgressIndicator/ProgressIndicator';
import { Backdrop } from '../backdrop';
import { useState } from 'react';

type HeaderProps = {
  refs: {
    home: React.RefObject<HTMLDivElement>;
    about: React.RefObject<HTMLDivElement>;
    projects: React.RefObject<HTMLDivElement>;
    contact: React.RefObject<HTMLDivElement>;
  };
};


export function Header({ refs }: HeaderProps) {
  const [sidebar, setSidebar] = useState(false);
  const toggleSidebar = () => setSidebar(!sidebar);

  return (
    <>
    <Backdrop isVisible={sidebar}></Backdrop>
    <header className='site-header'>
      <div className='header__container'>
        <a className='logo' href=''>Apollo Mattos</a>
        <Navbar refs={refs} sidebar={sidebar} toggleSidebar={toggleSidebar} />
      </div>
      <div className='indicator__container'>
        <ProgressIndicator/>
      </div>
    </header>
    </>
  );
}
