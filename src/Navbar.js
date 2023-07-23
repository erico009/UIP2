import {Link} from 'react-router-dom'

const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: 'blue'
  };
const Navbar = () => {
    return(
        <nav className="navbar">
            <Link to="/Home" style={linkStyle}><h1 style={{color: '#518BE7'}}>Bubble Tea Store</h1></Link>
            <div className="links">
                <Link to="/Home"><button class="btn m-1">Home</button></Link>
                <Link to="/Menu"><button class="btn m-1">Menu</button></Link>
                <Link to="/AboutUs"><button class="btn m-1">About Us</button></Link>
                <Link to="/TrackOrder"><button class="btn m-1">Track Order</button></Link>
                <Link to="/Checkout"><img class="m-2" style={{width:50, height:50}} src={require('./assets/cart.png')} alt='cart'/></Link>
            </div>
        </nav>
    );
}

export default Navbar;