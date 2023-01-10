import { Link } from 'react-router-dom';
import { useContext }  from "react";

import Button from './Button';

import { ThemeContext } from '../utils/context';

const Navbar = () =>{
  const { theme, setTheme } = useContext(ThemeContext);

  function handleTheme(){
    theme === 'light' ? setTheme("dark") : setTheme("light");
    
  }

  return (
    <div className="navbar bg-base-100 justify-between">
      <div className='flex'>
        <Link to='/' className="btn btn-ghost normal-case text-al">
          Cinepholis  
        </Link>
        <Link to="/favorites" className="btn btn-ghost normal-case text-xl">
          Favorite
        </Link> 
        <Link to="/sandbox" className="btn btn-ghost normal-case text-xl">
          Sandbox
        </Link>
      </div> 
        <Button label='Theme' onClick={() => handleTheme()} />
    </div>
  );
}



export default Navbar;