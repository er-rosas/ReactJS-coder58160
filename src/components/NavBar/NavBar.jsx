import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return (
        <nav>
            <h3>Mobile Store</h3>
            <div>
                <button>Samsung</button>
                <button>Apple</button>
                <button>Xiaomi</button>
            </div>
            <CartWidget />
        </nav>
    );
};

export default NavBar