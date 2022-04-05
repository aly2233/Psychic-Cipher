import React from 'react';

class Cards extends React.Component{
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchCards()
    }

    render() {
        return(
            <div className='cards'>
                <div>{this.props.cards?.map(card => <img src={card.photoUrls.up}></img>)}</div>
            </div>
        )
    }
}

export default Cards;