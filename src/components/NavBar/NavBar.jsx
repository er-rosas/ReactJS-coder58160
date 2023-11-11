import classes from './Navbar.module.css'
import CartWidget from "../CartWidget/CartWidget";
import { Link } from 'react-router-dom'
import { NavLink, useNavigate } from 'react-router-dom';

const NavBar = () => {
    const navigate = useNavigate()

    return (
        <nav className={`${classes.navBar}`}>
            <div className={`${classes.logo}`}>
                <a onClick={() => navigate('/')}>Mobile Store</a>
            </div>
            <div className={`${classes.navLinks}`}>
                <NavLink to='/category/samsung' className={({ isActive }) => isActive ? classes.active : ''}>Samsung</NavLink>
                <NavLink to='/category/apple' className={({ isActive }) => isActive ? classes.active : ''}>Apple</NavLink>
                <Link to='/category/xiaomi'>Xiaomi</Link>
            </div>
            <CartWidget />
        </nav>
    );
};

export default NavBar