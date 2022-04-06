import React from 'react';
import { Link } from 'react-router-dom'
import CardsItem from './cards-item';


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
         
                {this.props.cards?.map(card => <CardsItem key={card.id} card={card}/> )}

                {/* <img className='cards-image-index' src={card.photoUrls.up}></img> */}
                
                
             
            </div>
        )
    }
}

export default Cards;