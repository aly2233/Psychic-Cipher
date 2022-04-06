import { connect } from "react-redux"
import CardShow from "./card_show"
import { fetchCard } from "../../../actions/card_actions"

const mapStateToProps = (state, ownProps) => {
        // console.log(state.cards.card.data)
    const cardId = ownProps.match.params.card_id

    return {
        card: state.cards.card,
        cardId: cardId

    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchCard: (cardId) => dispatch(fetchCard(cardId))
     }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardShow)