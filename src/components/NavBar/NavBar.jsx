import classes from './Navbar.module.css'
import CartWidget from "../CartWidget/CartWidget";
import { NavLink, useNavigate } from 'react-router-dom';

import { getDocs, collection, query, orderBy } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'
import { useEffect, useState } from 'react'
import { createAdaptedCategory } from '../../adapters/createAdapterCategory';
import { useLocation } from 'react-router-dom';

import logo from './assets/logo-blanco.png'

const Navbar = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0); // Resetea la posición de desplazamiento a la parte superior
    }, [pathname]);
    
    const [categories, setCategories] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        const categoriesRef = query(collection(db, 'categories'), orderBy('order'))
        
        getDocs(categoriesRef)
            .then(querySnapshot => {
                const adaptedCategories = querySnapshot.docs.map(doc => createAdaptedCategory(doc));
                setCategories(adaptedCategories);
            })
    }, [])

    return (
        <nav className={`${classes.navBar}`}>
            <div className={`${classes.logo}`}>
                <img src={logo} alt="" />
                <a onClick={() => navigate('/')}>Smart Store</a>
            </div>
            <div className={`${classes.navLinks}`}>
                {
                    categories.map(cat => <NavLink key={cat.id} to={`/category/${cat.slug}`} className={({ isActive }) => isActive ? classes.active : ''}>{cat.name}</NavLink>)
                }
            </div>
            <CartWidget />
        </nav>
    );
};

export default Navbar