import { connect } from "react-redux"
import CardShow from "./card_show"
import { fetchCard } from "../../../actions/card_actions"
import { fetchUser, updateUser } from "../../../actions/user_actions"

const mapStateToProps = (state, ownProps) => {
        // console.log(state.cards.card.data)
    const cardId = ownProps.match.params.card_id
// console.log(state.session.user.id)
    return {
        card: state.cards.card,
        cardId: cardId,
        currentUserId: state.session.user.id,
        currentUser: state.users[state.session.user.id]?.data

    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchCard: (cardId) => dispatch(fetchCard(cardId)),
        updateUser: (user) => dispatch(updateUser(user)),
        fetchUser: (userId) => dispatch(fetchUser(userId))
     }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardShow)