import React, { useState } from 'react';
import Customize from './Customize';
import drinks from "./drinks.json";
const Menu = () => {
    const [category, setCategory] = useState([
        {value : "Tea", isChecked: false},
        {value : "Juice", isChecked: false},
        {value : "Smoothie", isChecked: false}]);
    let [typeProducts, setTypeProducts] = useState(drinks);
    let [dairyProducts, setDairyProducts] = useState(drinks);
    let [veganProducts, setVeganProducts] = useState(drinks);
    let [caffeineProducts, setCaffeineProducts] = useState(drinks);
    let [filteredProducts, setFilteredProducts] = useState(drinks);
    const filterProducts = (e) => {
      const categories = [...category];
      const cat = categories.filter((cat)=>cat.value ===  e.target.value);
      cat[0].isChecked = e.target.checked;
      setCategory([...categories]);
      const tempProduct = [];
      for(let c of categories){
        if(c.isChecked){
          tempProduct.push(...drinks.filter((a) => a.category === c.value));
        }
      }
      if(tempProduct===[]){
        tempProduct=drinks;
      }
  
      setTypeProducts([...tempProduct]);
      finalFilter();
    }
    const filterDairy = (e) => {
      var tempProduct = drinks;
      if(e.target.checked){
        tempProduct=drinks.filter((a) => a.NonDairy);
      }

      setDairyProducts([...tempProduct]);
      finalFilter();
    }
    const filterVegan = (e) => {
      var tempProduct = drinks;
      if(e.target.checked){
        tempProduct=drinks.filter((a) => a.Vegan);
      }

      setVeganProducts([...tempProduct]);
      finalFilter();
    }
    const filterCaffeine = (e) => {
      var tempProduct = drinks;
      if(e.target.checked){
        tempProduct=drinks.filter((a) => !a.Caffeine);
      }

      setCaffeineProducts([...tempProduct]);
      finalFilter();
    }
    function finalFilter(){
      var data=[typeProducts, dairyProducts, veganProducts, caffeineProducts];
      var result = data.reduce((a, b) => a.filter(c => b.includes(c)));
      setFilteredProducts([...result]);
    }
    
    return <div>
      <h1 class='mx-5'>Menu</h1>
      <div className='d-flex justify-content-evenly'>
          {
              category.map((elm, index) => {
                  return <div className="form-check ms-2" key={index}>
                      <input className="form-check-input" type="checkbox" checked={elm.checked} value={elm.value} id="types" onChange={filterProducts}/>
                      <label className="form-check-label" htmlFor="types">
                          {elm.value}
                      </label>
                  </div>
              })
          }
      </div>
      <div className='d-flex justify-content-evenly'>
        {
          <><div className="form-check ms-2">
            <input className="form-check-input" type="checkbox" value={"Dairy Free"} id="dairy" onChange={filterDairy} />
            <label className="form-check-label" htmlFor="dairy">
              Dairy Free
            </label>
          </div>
          <div className="form-check ms-2">
            <input className="form-check-input" type="checkbox" value={"Vegan"} id="vegan" onChange={filterVegan} />
            <label className="form-check-label" htmlFor="vegan">
              Vegan
            </label>
          </div>
          <div className="form-check ms-2">
            <input className="form-check-input" type="checkbox" value={"Caffeine Free"} id="caffeine" onChange={filterCaffeine} />
            <label className="form-check-label" htmlFor="caffeine">
              Caffeine Free
            </label>
          </div>
          <div className="form-check ms-2">
            <input className="btn btn-primary" type="button" value={"Refresh"} id="refresh" onClick={finalFilter} />
          </div></>
          
        }
      </div>
      <div className='d-flex flex-wrap'>
      {
         filteredProducts.map((prod) => {
          return  <div className='card m-3' style={{ width: "335px" }} key={prod.id}>
          <div className='card-body'>
              <h3 className='card-title'>{prod.title}</h3>
              <img src={require('./assets/'+prod.title+'.png')} alt={prod.title}/>
              <p className='card-text'>Price: {prod.price}</p>
              <Customize/>
          </div>
      </div>
        })
      }
      
      </div>
     </div>
}

export default Menu;