import React from 'react'
import './Home.css';
import  Product from "./Product";
function Home() {
    return (
        <div className="home">
            <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""/>
            <div className="home_row">
              <Product
               id="2"
               title="OPPO Reno 2Z (Luminous Black, 8GB RAM, 256GB Storage) with No Cost EMI/Additional Exchange Offers"
               price={100}
               rating={5}
               image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4j5AFKaxHRFi9r_HREbuXIPIhSopndZ7uLVYfW4Rg6ioF6ig&s"
              />

              <Product
               id="2"
               title="OPPO Reno 2Z (Luminous Black, 8GB RAM, 256GB Storage) with No Cost EMI/Additional Exchange Offers"
               price={100}
               rating={5}
               image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
              />
              <Product
               id="2"
               title="OPPO Reno 2Z (Luminous Black, 8GB RAM, 256GB Storage) with No Cost EMI/Additional Exchange Offers"
               price={100}
               rating={5}
               image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
              />
              
            </div>
            <div className="home_row">
              <Product
               id="2"
               title="OPPO Reno 2Z (Luminous Black, 8GB RAM, 256GB Storage) with No Cost EMI/Additional Exchange Offers"
               price={100}
               rating={5}
               image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4j5AFKaxHRFi9r_HREbuXIPIhSopndZ7uLVYfW4Rg6ioF6ig&s"
              />
              <Product
               id="2"
               title="OPPO Reno 2Z (Luminous Black, 8GB RAM, 256GB Storage) with No Cost EMI/Additional Exchange Offers"
               price={100}
               rating={5}
               image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4j5AFKaxHRFi9r_HREbuXIPIhSopndZ7uLVYfW4Rg6ioF6ig&s"
              />
              <Product
               id="2"
               title="OPPO Reno 2Z (Luminous Black, 8GB RAM, 256GB Storage) with No Cost EMI/Additional Exchange Offers"
               price={100}
               rating={5}
               image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4j5AFKaxHRFi9r_HREbuXIPIhSopndZ7uLVYfW4Rg6ioF6ig&s"
              />
              
            </div>
 
       </div>
    )
}

export default Home
