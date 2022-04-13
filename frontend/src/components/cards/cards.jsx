import React from 'react';
import { Link } from 'react-router-dom'
import CardsItem from './cards-item';
import SearchbarContainer from './searchbar/searchbar_container';



class Cards extends React.Component{
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchCards()
    }

    render() {
        return(
            <div className='cards-container'>
                    <SearchbarContainer /> 
                {this.props.cards?.map(card => <CardsItem key={card.id} card={card}/> )}

                {/* <img className='cards-image-index' src={card.photoUrls.up}></img> */}
                
                
             
            </div>
        )
    }
}

export default Cards;