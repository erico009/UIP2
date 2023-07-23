import { ProgressBar } from "react-bootstrap";
import React, { useState } from 'react';
const TrackOrder = () => {
    const cart=[
        {"id":1,"title":"Milk Tea","price":5,"category":"Tea","NonDairy":false, "Vegan":false, "Caffeine":true, "Calories":900, "Size":"Large", "Sugar":50, "Ice":"Normal", "Toppings":"Boba"},
        {"id":2,"title":"Strawberry Tea","price":5, "category":"Tea","NonDairy":true, "Vegan":true, "Caffeine":true, "Calories":800, "Size":"Large", "Sugar":80, "Ice":"Less", "Toppings":"Coffee Jelly, Boba"}
    ];
    let [orderHistory, setOrderHistory] = useState([{"progress": 80, "message":"Order being delivered", "time":"10:50pm"},{"progress": 30, "message":"Order being made", "time":"10:30pm"},{"progress": 0, "message":"Order recieved", "time":"10:10pm"}]);
    const [now,setNow]=useState(orderHistory[0]);
    return(
        <div className='container-md justify-content-center'><h1 class='mx-5'>Track Order</h1>
        <div className="row"><div className="col-md-2"></div>
        <div className="col-md-8">
            <div className="card p-2">
            <h3>Your Order</h3>
            <div className='container'><ProgressBar now={now.progress} label={now.message} />
        {
            cart.map((prod) => {
            return  <li class="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                    <h6 class="my-0">{prod.title}<small class="text-muted"> Calories: {prod.Calories/2 +prod.Calories*prod.Sugar *.005}</small></h6>
                    <small class="text-muted">{prod.Size}, {prod.Sugar}%, {prod.Ice} Ice, {prod.Toppings}</small>
                </div>
                <span class="text-muted">${prod.price}</span>
            </li>
            })
        }
        <h4>History</h4>
        {
            orderHistory.map((msg) => {
                return <div><li>{msg.message} : {msg.time}</li>
                
                </div>
            })
        }
        </div>
        </div>
        </div>
        </div>
        </div>
    );
}

export default TrackOrder;