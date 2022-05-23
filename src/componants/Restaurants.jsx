import React from 'react';


function Restaurant(props){
    
  return (
    <div class="container divider">
    <div class="cards">
    
   {props.Restaurant.map((Restaurant)=>{
 
        <div class="card">
            <img width="254" height="160px" src="assets/restaurant1.jpeg" />
            <div class="restaurant-details">
                <div class="restaurant-title">Chaitanya Parathas</div>
                <div class="restaurant-subtitle">North India, Punjabi, Chinese, Thalis Combo, Beverages </div>
            </div>
            <div class="restaurant-info">
                <div class="restaurant-ratings">
                    <i class="material-icons star-icon">star</i> 4.3
                </div>
                 .<div class="restaurant-delivery-timings"> 33 MINS</div> .
                <div class="restaurant-cost-for-two">₹200 FOR TWO</div>
            </div>
            <div class="offer-banner">
                <span class="material-icons"> local_offer </span>
                <span class="offer-text">20% off | Use TRYNEW</span>
   }
    
       
                </div>
        </div>
      

  )
  
}

export default Restaurant