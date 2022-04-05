import { RECEIVE_ALL_CARDS, RECEIVE_CARD } from "../actions/card_actions";

const cardsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_ALL_CARDS:
            nextState = action.cards
            return nextState;
        case RECEIVE_CARD:
            nextState[action.card.id] = action.card
            return nextState
        default:
            return state;
    }
}

export default cardsReducer;