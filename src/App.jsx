
import './App.css';
import Navbar from "./componants/Navbar";
import Filters from "./componants/Filters";
import Offers from "./componants/Offers";
import Restaurants from  "./componants/Restaurants"

import userInfo from "./data/userInfo.json";
import offer from './data/Offers.json';
import Restaurant from './data/Restaurant.json';

function App() {
  return (
    <div >
  
   <Navbar  {...userInfo.Location}/>
   <Offers offer={offer} />
   <section className="near-you">
        <Filters/>
        <Restaurants Restaurant={Restaurant}/>
   </section>


    </div>
  );
}

export default App;
