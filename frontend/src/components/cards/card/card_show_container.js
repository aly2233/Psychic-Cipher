import { connect } from "react-redux"
import CardShow from "./card_show"
import { fetchCard } from "../../../actions/card_actions"

const mapStateToProps = (state, ownProps) => {
    // console.log(state.cards[ownProps.match.params.card_id])
    // console.log(state.cards.undefined.data.arcana)
    console.log(ownProps.match.params.card_id)
    // console.log(state.cards[ownProps.match.params.card_id])
    return {
        // card: stat,
        // card: state.cards.data[ownProps.match.params.card_id]
        // card: state.card.data
        card_id: ownProps.match.params.card_id
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchCard: (cardId) => dispatch(fetchCard(cardId))
     }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardShow)