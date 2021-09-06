import React from 'react';
import CardItem from './CardItem';
import './Card.css';
function Card() {
    return (
        <div className="cards">
            <h1>Check out these Epic Destinations</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src='img-9.jpg'
                            text="Explore the hidden waterfalls hidden deep inside the Amazon Jungle"
                            label="Adventure"
                            path='/services'
                        />
                        <CardItem
                            src='img-2.jpg'
                            text="Travel through islands of Bali in a Private Cruise"
                            label="Luxury"
                            path='/services'
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                            src='img-3.jpg'
                            text="Set Sail in the Atlantic Ocean visiting Uncharted Waters."
                            label="Mystery"
                            path='/services'
                        />
                        <CardItem
                            src='img-4.jpg'
                            text="Experience Football on Top of the Himalayan Mountains."
                            label="Adventure"
                            path='/services'
                        />
                        <CardItem
                            src='img-8.jpg'
                            text="Ride through the Sahara Desert on Guided Camel Tour."
                            label="Adrenaline"
                            path='/services'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Card
