import {Link} from 'react-router-dom'
const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: 'blue'
  };
const Home = () => {
    return(<div className='container-md'><h1 class='mx-5'>Home</h1>
        <Link to="/Menu" style={linkStyle}><h1 class='mx-5' style={{color: '#518BE7'}}>View Menu</h1></Link>
            <div className="links"></div></div>
    );
}

export default Home;