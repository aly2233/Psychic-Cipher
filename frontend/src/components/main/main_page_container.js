import { connect } from "react-redux"
import { fetchCards } from "../../actions/card_actions"
import MainPage from "./main_page"

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

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)