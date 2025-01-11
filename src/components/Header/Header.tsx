import './header.css'
import { Navbar } from '../Navbar/Navbar';
import { ProgressIndicator } from '../ProgressIndicator/ProgressIndicator';

type HeaderProps = {
  refs: {
    home: React.RefObject<HTMLDivElement>;
    about: React.RefObject<HTMLDivElement>;
    projects: React.RefObject<HTMLDivElement>;
    contact: React.RefObject<HTMLDivElement>;
  };
};

export function Header({ refs }: HeaderProps) {
  return (
    
    <header className='site-header'>
      <div className='header__container'>
        <a className='logo' href=''>Apollo Mattos</a>
        <Navbar refs={refs}/>
      </div>
      <div className='indicator__container'>
        <ProgressIndicator/>
      </div>
    </header>
  );
}
