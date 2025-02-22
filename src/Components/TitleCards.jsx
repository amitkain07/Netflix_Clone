import React from 'react'
import cards_data from '../assets/cards/Cards_data'
import './compo.css'


const TitleCards = ({title, category}) => {
  return (
    <div className='title-cards'>
      <h2>{title ? title : 'Popular On Netflix'}</h2>
      <div className='card-list'>
        {cards_data.map((card , index) => {
          return <div className="card" key={index}>
            <img src={card.image} alt="image" />
            <p>{card.name}</p>

          </div>
        })}
      </div>
    </div>
  )
}

export default TitleCards