import React, { useContext, useState } from 'react'
import Navbar from './Navbar'
import benz from '../assets/benz.avif'
import Contact from './Contact'
import { ThemeContext } from "../Contexts/ThemeContext";

const Home = () => {

    const { theme } = useContext(ThemeContext);
  return (
    <div id={theme}>
        <Navbar/>

        <div>
            <div>

            </div>
            <div style={{display: 'flex', padding: '60px' , gap: '20px', alignItems: 'center'}}>
            <div>
                <img src={benz} alt="" style={{width: '600px', borderRadius: '10px'}}/>
            </div>
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur provident autem quis facere natus eaque.
                     Ipsam natus eos quibusdam dolorum quos soluta quia nobis eius quidem ad neque quisquam libero, adipisci provident 
                     asperiores consectetur facere officiis fuga et repellendus recusandae eum ab pariatur veritatis. Reprehenderit at
                      ut dolorum, illum facere corrupti impedit aperiam vel, vitae perferendis mollitia sequi molestiae sit nemo excepturi,
                       quidem quae doloremque? A provident nam sint nesciunt ratione ullam alias corrupti eveniet molestiae accusamus porro
                        itaque praesentium illum, fuga temporibus natus atque expedita hic voluptatibus reiciendis repudiandae voluptatum? 
                        Facilis consequatur repellat nobis ipsum non veniam tenetur accusamus!</p>            
            </div>
            </div>
        </div>

        <Contact/>


    </div>
  )
}

export default Home