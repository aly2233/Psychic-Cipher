import React, { useEffect, useState } from 'react';
import CardsItem from './cards-item';
import SearchbarContainer from './searchbar/searchbar_container';
import './cards.css'


const Cards = ({fetchSearchedCards, cards }) => {
const [searchInput, setSearchInput] = useState (localStorage.getItem('searchInput') || '')

        useEffect( () => {
            debugger
            fetchSearchedCards(searchInput)
            // localStorage.setItem('searchInput', searchInput)
        }, [])

        useEffect(() => {
            debugger
            localStorage.setItem('searchInput', searchInput)
        }, [searchInput])
        
    return(
        <div className='cards-container'>
                <SearchbarContainer searchInput={searchInput} setSearchInput={setSearchInput} /> 
            {cards?.map(card => <CardsItem key={card.id} card={card}/> )}

            {/* <img className='cards-image-index' src={card.photoUrls.up}></img> */}
            
            
         
        </div>
    )

    
}

export default Cards;