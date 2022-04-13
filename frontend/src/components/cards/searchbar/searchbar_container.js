import { connect } from "react-redux";
import Searchbar from "./searchbar";
import { fetchSearchedCards } from "../../../actions/card_actions";


const mSTP = (state) => {
    return {

    }
}

const mDTP = dispatch => {
    return {
        fetchSearchedCards: (searchInput) => dispatch(fetchSearchedCards(searchInput))
    }
}

export default connect(mSTP, mDTP)(Searchbar)