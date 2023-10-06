import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return (
        <nav className="navBar">
            <div className="logo">
                <h3>Mobile Store</h3>
            </div>
            <div className="navLinks">
                <button>Samsung</button>
                <button>Apple</button>
                <button>Xiaomi</button>
            </div>
            <CartWidget />
        </nav>
    );
};

export default NavBar