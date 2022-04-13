import React from "react";
import { Link } from 'react-router-dom'
import './cards.css'

class CardsItem extends React.Component {
    constructor(props) {
        super(props)
    }



    render() {
        return (
            <div>
                <Link to={`/cards/${this.props.card._id}`}>
                <img className="card-item-image" src={this.props.card.photoUrls.up} alt="" />
                </Link>
            </div>
        )
    }
}

export default CardsItem