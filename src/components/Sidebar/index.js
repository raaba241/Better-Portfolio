import './index.scss'
import { Link } from 'react-router-dom';
import LogoS from '../../assets/images/logo-s.png';
import LogoSubtitle from '../../assets/images/logo_sub.png';

const Sidebar = () => {
   <div className="nav-bar">
        <Link className='logo' to='/'>
            <img src={LogoS} alt='logo' />   
            <img className="sob-logo"src={LogoSubtitle} alt='logo' />  
        </Link>
        <nav>
            <NavLink exact="true"
        </nav>
   </div>
}

export default Sidebar;