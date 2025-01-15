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
    <header className='site-header w-full fixed transition duration-200 ease-in-out z-50'>
      <div className='header-container flex items-center justify-between h-full py-5 px-5 md:px-16 '>
        <a href="">
          <img className='w-auto h-12' src="/static/images/apollo-mattos-logo-v2.svg" alt="Description of the image" />
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
