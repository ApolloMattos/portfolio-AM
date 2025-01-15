import './header.css'
import { Navbar } from '../Navbar/Navbar';
import { ProgressIndicator } from '../ProgressIndicator/ProgressIndicator';
import { Backdrop } from '../backdrop';
import { useState } from 'react';
import { Sidebar } from '../Sidebar/sidebar';

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
    <Sidebar refs={refs}/>
    <Backdrop isVisible={sidebar}></Backdrop>
    <header className='site-header'>

      <div className='header__container'>
        <a href="">
          <img src="/static/images/apollo-mattos-logo-v2.svg" alt="Description of the image" />
        </a>
        <Navbar refs={refs} sidebar={sidebar} toggleSidebar={toggleSidebar} />
      </div>
      <div className='indicator__container'>
        <ProgressIndicator/>
      </div>
    </header>
    </>
  );
}
