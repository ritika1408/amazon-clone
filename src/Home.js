import React from 'react';
import './Home.css';
import Product from './Product';
import {Carousel} from 'react-bootstrap';
import Footer from './Footer';



function Home() {
  return (
    <div className="home">
        <div className="home__container">
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="home__image "
          src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/PD22/GW/ACQ/PC_Hero_3000x1200_ho._CB631612836_.jpg"
          alt="First slide"
        />
        </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="home__image "
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/kitchen/KBB/may/t1/3000x1200._CB637277439_.jpg"
          alt="Second slide"
        />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
        <img
          className="home__image "
          src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2021/desktop-2x._CB658860139_.jpg"
          alt="Third slide"
        />
        </Carousel.Item>
    </Carousel>
            
        
        
        <div className="home__row">
            
            <Product
                    id="123476"
                    title ="Food Grain Storage Container Large Capacity 4-Grid Rice Dispenser Rotatable Sealed Grain Food Storage Box Rice Bucket Dry Food Fruit Box for Home Kitchen (green)"
                    price={389}
                    image="https://m.media-amazon.com/images/I/8185ZAEOCcL._SY450_.jpg"
                    rating={5}
                /> 
            <Product
                id = "124321"
                title ="SKT High Top Casual Boot Stylish Sneakers for Men (Black)" 
                price ={449} 
                image= "https://m.media-amazon.com/images/I/51-QSGrQsOL._UX625_.jpg"
                rating={4}
            />
            {/* Products */}
        </div>
        <div className="home__row">
            <Product 
               id="223443"
               title ="Janasya Women's Poly Crepe Flared Kurta" 
                price ={399} 
                image= "https://m.media-amazon.com/images/I/71ANgCYp53L._UY741_.jpg"
                rating={4}
            /> 
            <Product
                id="32222"
                 title ="Echo Dot (4th Gen, 2020 release)| Smart speaker with Alexa (Blue)" 
                price ={2099} 
                image= "https://m.media-amazon.com/images/I/61MbLLagiVL._SX569_.jpg"
                rating={5}
            />
            <Product
                id="432321"
                title ="IndoSurgicals Silvery II-SS Stethoscope (Black)" 
                price ={1203} 
                image= "https://m.media-amazon.com/images/I/51v3EhwZ37L._AC_UL320_.jpg"
                rating={4}
            />
        </div>
        <div className="home__row">
                <Product
                    id="123498"
                    title ="AmazonBasics 139 cm 4K Ultra HD Smart LED Fire TV AB55U20PS (Black)"
                    price={34999}
                    image="https://m.media-amazon.com/images/I/81GXpJ36t0L._SX522_.jpg"
                    rating={4}
                /> 
                 <Product
                    id="123465"
                    title ="Santosha Decor Sheesham Wood Round Top Dining Table Set with 4 Cushion Chair for Dining Room Living Room and Home (Mahogany Finish)"
                    price={19999}
                    image="https://m.media-amazon.com/images/I/71vzfIupUnL._SX569_.jpg"
                    rating={4}
                /> 
        </div>
        <div className="home__row">
                <Product
                    id="123478"
                    title ="Redgear A-15 Wired Gaming Mouse with Upto 6400 DPI, RGB & Driver Customization for PC(Black)"
                    price={389}
                    image="https://images-eu.ssl-images-amazon.com/images/I/31luFfya0kL._SX300_SY300_QL70_FMwebp_.jpg"
                    rating={4}
                /> 
                
                <Product
                    id="123445"
                    title ="Amazon Brand - Jam & Honey Girl's Regular T-Shirt"
                    price={510}
                    image="https://m.media-amazon.com/images/I/81iXkI2GrzL._SX569._SX._UX._SY._UY_.jpg"
                    rating={5}
                /> 
                <Product
                id = "123214" 
                title ="Amazon Brand - Solimo Sopor Engineered Wood Queen Bed without storage (Chequered Light finish)" 
                price ={10999} 
                image= "https://m.media-amazon.com/images/I/71BIvsxue+L._SY450_.jpg"
                rating={4}
            />
        </div>
    </div>

    
      
   
    </div>
    
  )
}

export default Home