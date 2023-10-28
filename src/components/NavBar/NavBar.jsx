import classes from './NavBar.module.css'
import CartWidget from "../CartWidget/CartWidget";
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className={`${classes.navBar}`}>
            <div className={`${classes.logo}`}>
                <Link to='/'>Mobile Store</Link>
            </div>
            <div className={`${classes.navLinks}`}>
                <Link to='/category/samsung'>Samsung</Link>
                <Link to='/category/apple'>Apple</Link>
                <Link to='/category/xiaomi'>Xiaomi</Link>
            </div>
            <CartWidget />
        </nav>
    );
};

export default NavBar