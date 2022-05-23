import React from 'react'

function Offers(props){
  return (
    <section className="offers">
    <div className="container">
      {props.offer.map(o=> <img className="offer" src={o}/>)}
       
   
    </div>
 </section>
  )
}

export default Offers