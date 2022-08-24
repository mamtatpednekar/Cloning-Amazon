import React from 'react'
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className='home'>
            <div className='home_container'>
                <img className="home_img" src="https://m.media-amazon.com/images/I/71Jr6P1C84L._SX3000_.jpg" alt="" />

                <div className="home_row">
                    <Product title="Michael Kors Women's Ritz Stainless Steel Watch With Crystal Topring" image="https://m.media-amazon.com/images/I/81ea75V+GbL._AC_UX679_.jpg" price={234.05} rating={5} />
                    <Product title="Fila Women's Eclipse Running Shoe" image="https://m.media-amazon.com/images/I/51LHg+GgUZL._AC_SX679_.jpg" price={83.00} rating={4} />

                </div>
                <div className="home_row">
                    <Product title="Crocs Unisex-Adult Men's and Women's Baya Clog" image="https://m.media-amazon.com/images/I/61rPG-iOQrL._AC_UX695_.jpg"
                        price={53.00} rating={3} />
                    <Product title="Apple AirPods (3rd Generation) Wireless Earbuds with MagSafe Charging Case. Spatial Audio, Sweat and Water Resistant, Up to 30 Hours of Battery Life. Bluetooth Headphones for iPhone" image="https://m.media-amazon.com/images/I/61ZRU9gnbxL._AC_SX679_.jpg" price={180} rating={4} />
                    <Product title="Swarovski Symbolic Evil Eye Crystal Jewelry Collection" image="https://m.media-amazon.com/images/I/81EhoLubuCL._AC_UY675_.jpg" price={87} rating={5} />
                </div>
                <div className="home_row">

                    <Product title="Rose Gold Birthday Party Decorations, Happy Birthday Banner, Rose Gold Fringe Curtain, Heart Star Foil Confetti Balloons, Hanging Swirls for Women Girls Birthday Princess Party" image="https://m.media-amazon.com/images/I/71QHutFNUuL._AC_SX679_.jpg" price={18.45} rating={3} />
                </div>

            </div>
        </div>
    );
}

export default Home
