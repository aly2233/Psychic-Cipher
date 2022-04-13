import { connect } from "react-redux";
import { fetchCard, fetchCards, fetchSearchedCards } from "../../actions/card_actions";
import Cards from "./cards";

const mapStateToProps = (state, ownProps) => {
    // console.log(Object.keys(state.cards.data[0]))
    return({
        cards: state.cards.data
    })
}

const mapDispatchToProps = dispatch => {
    return({
        fetchCard:(cardId) => dispatch(fetchCard(cardId)),
        fetchCards:() => dispatch(fetchCards()),
        fetchSearchedCards: searchInput => dispatch(fetchSearchedCards(searchInput))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Cards)