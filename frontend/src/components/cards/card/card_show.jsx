import React, { useEffect } from 'react';
// import PostIndexContainer from '../../posts/post_index_container';
// const CardShow = ({fetchCard, card, match}) => {
//     useEffect( () => { 
//         fetchCard(match.params.card_id);
//     }, [])

//     return (
//         <div>
//             {/* <h1>{card.name}</h1> */}
//             {/* <h2>{card.arcana}</h2> */}

//             <div className='card-comments'>
//                 {/* <PostIndexContainer card={card} /> */}
//             </div>
//         </div>
//     )
// }


class CardShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
        // this.state()
    }


    componentDidMount() {
        this.props.fetchCard(this.props.card_id)
        this.setState()
    }

    componentDidUpdate(prevProps) {
        if (prevProps.card_id !== this.props.card_id) {
            this.componentDidMount();
        }
    }


    render() {
        if(!this.props.card) return null
        return (
            <div>
                   {this.props.card}
            </div>
        )
    }
}

export default CardShow;