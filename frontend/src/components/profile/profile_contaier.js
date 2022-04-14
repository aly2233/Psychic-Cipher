import { connect } from "react-redux"
import { fetchCards } from "../../actions/card_actions"
import Profile from "./profile"

const mapStateToProps = state => {
    return {
        cards: state.cards.data
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchCards: () => dispatch(fetchCards())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)