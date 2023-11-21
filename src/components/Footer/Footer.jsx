import classes from './Footer.module.css'
import logo from './assets/logo-negro.png'
import instagram from './assets/redesSoc/instagram-black.png'
import facebook from './assets/redesSoc/facebook-black.png'
import youtube from './assets/redesSoc/youtube-black.png'
import twitter from './assets/redesSoc/twitter-black(X-white).png'
import linkedin from './assets/redesSoc/linkedin-black.png'
import { NavLink, useNavigate } from 'react-router-dom';


const Footer = () => {
    const navigate = useNavigate()

    return (
        <footer className={`${classes.footer}`}>
            <div className={`${classes.footerContainer}`}>
                <div className={`${classes.logoSection}`}>
                    <div className={`${classes.footerLogo}`}>
                        <img src={logo} alt={logo} />
                        <a onClick={() => navigate('/')}>Smart Store</a>
                    </div>
                    <div className={`${classes.socialNet}`}>
                        <p>Redes Sociales</p>
                        <ul>
                            <li>
                                <img src={instagram} alt={instagram} />
                            </li>
                            <li>
                                <img src={facebook} alt={facebook} />
                            </li>
                            <li>
                                <img src={youtube} alt={youtube} />
                            </li>
                            <li>
                                <img src={twitter} alt={twitter} />
                            </li>
                            <li>
                                <img src={linkedin} alt={linkedin} />
                            </li>
                        </ul>
                    </div>
                    
                </div>
                <div className={`${classes.navigationLinks}`}>
                    <ul>
                        <li>Nuestra Tienda</li>
                        <li>Dudas</li>
                        <li>Mi Cuenta</li>
                        <li>Soporte Técnico</li>
                        <li>Retiro en Tienda</li>
                    </ul>
                </div>
                <div className={`${classes.additionalLinks}`}>
                    <ul>
                        <li>Blog</li>
                        <li>Corporativo</li>
                        <li>Venta Asistida</li>
                        <li>Política de privacidad</li>
                        <li>Cambios y devoluciones</li>
                        <li>Recambio</li>
                        <li>Black Friday</li>
                        <li>Ciberlunes</li>
                        <li>iPhone para Siempre</li>
                    </ul>
                </div>
                <div className={`${classes.contacto}`}>
                    <p>Contacto</p>
                    <div>Montevideo, Uruguay.</div>
                    <div>+598 4444 6666</div>
                </div>
            </div>
            <div className={`${classes.paymentMethods}`}>
                <p>Formas de pago</p>
            </div>
            <div className={`${classes.copyrightText}`}>
                <p>© 2023 Smart Store | All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer