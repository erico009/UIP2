import { useState } from 'react';
import {Link} from 'react-router-dom'


const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: 'blue'
  };
const Navbar = () => {
    const languages=[
        {"id":1,"title":"English","Home":"Home","Menu":"Menu","AboutUs":"About Us", "TrackOrder":"Track Order"},
        {"id":2,"title":"Francais","Home":"Page d'accueil","Menu":"Menu","AboutUs":"À propos de nous", "TrackOrder":"Suivi de commande"}
    ];
    const [selectedLanguage,selectLanguage]=useState("English");
    const changeLanguage = (e) =>{
        selectLanguage(e.target.value);
    }
    return(
        <nav className="navbar">
            <Link to="/Home" style={linkStyle}><h1 style={{color: '#518BE7'}}>Bubble Tea Store</h1></Link>
            {languages.filter(lang=>lang.title===selectedLanguage).map(sel => (
            <div className="links">
                <Link to="/Home"><button class="btn m-1">{sel.Home}</button></Link>
                <Link to="/Menu"><button class="btn m-1">{sel.Menu}</button></Link>
                <Link to="/AboutUs"><button class="btn m-1">{sel.AboutUs}</button></Link>
                <Link to="/TrackOrder"><button class="btn m-1">{sel.TrackOrder}</button></Link>
                <select className='btn' onChange ={changeLanguage}>
                {languages.map((prod,i) => {
                    return(
                    <option key={i}>{prod.title}</option>
                    )})
                }
                </select>
                <Link to="/Checkout"><img class="m-2" style={{width:50, height:50}} src={require('./assets/cart.png')} alt='cart'/></Link>
            </div>
            ))}
        </nav>
    );
}

export default Navbar;