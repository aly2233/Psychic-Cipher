import React from "react";
import './cards.css'
import { Link } from 'react-router-dom'

class CardsItem extends React.Component {
    constructor(props) {
        super(props)
    }



    render() {
    //  console.log(this.props.card._id)
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