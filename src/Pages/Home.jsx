import React from 'react'
import './common.css'
import Navbar from '../Components/Navbar'
import hero_banner from '../assets/hero_banner.jpg'
import hero_title from  '../assets/hero_title.png'
import play_icon from '../assets/play_icon.png'
import info_icon from '../assets/info_icon.png'
import TitleCards from '../Components/TitleCards'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div className='home'>
        <Navbar/>
        <div className="hero">
            <img src={hero_banner} alt="hero_banner" className='banner-img' />
            <div className="hero-caption">
                <img src={hero_title} alt="" className='captions-img' />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias minus aliquid, ea porro inventore modi aliquam quia eum dignissimos voluptatibus? Porro suscipit asperiores atque molestias officiis inventore velit culpa cupiditate.</p>
                <div className="hero-btns">
                    <button className='btn'><img src={play_icon} alt="" />Play</button>
                    <button className='btn dark-btn'><img src={info_icon} alt="" />More info</button>
                </div>
                <TitleCards/>
            </div>
        </div>
        <div className='more-cards'>
            <TitleCards title={'Blockbuster Movie'}/>
            <TitleCards title={'Only on netflix'}/>
            <TitleCards title={'Upcomming'}/>
            <TitleCards title={'Best Moive'}/>

        </div>
        <Footer/>
    </div>
  )
}

export default Home