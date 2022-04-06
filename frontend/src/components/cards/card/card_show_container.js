import { connect } from "react-redux"
import CardShow from "./card_show"
import { fetchCard } from "../../../actions/card_actions"

const mapStateToProps = (state, ownProps) => {
    debugger // this is off
    return {
        // card: state.cards.data[ownProps.match.params.card_id]
        card: state.card.data
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchCard: (cardId) => dispatch(fetchCard(cardId))
     }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardShow)