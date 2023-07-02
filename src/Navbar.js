const Navbar = () => {
    return(
        <nav className="navbar">
            <h1>Bubble Tea Store</h1>
            <div className="links">
                <a href="/Home">Home</a>
                <a href="/Menu">Menu</a>
                <a href="/Checkout">Checkout</a>
            </div>
        </nav>
    );
}

export default Navbar;