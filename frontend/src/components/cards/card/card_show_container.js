import { connect } from "react-redux"
import CardShow from "./card_show"
import { fetchCard } from "../../../actions/card_actions"

const mapStateToProps = (state, ownProps) => {
    return {
        card: state.cards.undefined ? state.cards.undefined.data : null,
        cardId: ownProps.match.params.card_id
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchCard: (cardId) => dispatch(fetchCard(cardId))
     }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardShow)