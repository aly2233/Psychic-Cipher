import { connect } from "react-redux";
import { fetchCard, fetchCards } from "../../actions/card_actions";
import Reading from "./reading";

const mSTP = (state) => {
  return {
    cards: state.cards.data
  }
}

const mDTP = (dispatch) => {
  return {
    fetchCard: cardId => dispatch(fetchCard(cardId)),
    fetchCards: () => dispatch(fetchCards())
  }
}

export default connect(mSTP, mDTP)(Reading);