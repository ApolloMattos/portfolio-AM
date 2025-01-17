import './header.css'
// import { Navbar } from '../Navbar/Navbar';
import { ProgressIndicator } from '../ProgressIndicator/ProgressIndicator';
import { Navbar } from '../Navbar/Navbar';


export function Header() {


  return (
    <>
    <header className='site-header w-full fixed transition duration-200 ease-in-out z-50'>
      <div className='header-container flex items-center justify-between h-full py-5 px-5 md:px-16 '>
        <a href="">
          <img className='w-auto h-12' src="/static/images/apollo-mattos-logo-v2.svg" alt="Description of the image" />
        </a>
        <Navbar />
      </div>
      <div className='indicator__container'>
        <ProgressIndicator/>
      </div>
    </header>
    </>
  );
}
