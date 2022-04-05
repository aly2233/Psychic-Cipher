import * as CardAPIUtil from '../util/card_api_util'

export const RECEIVE_ALL_CARDS = "FETCH_ALL_CARDS";
export const RECEIVE_CARD = "RECEIVE_CARD";

const receiveAllCards = (cards) => ({
    type: RECEIVE_ALL_CARDS,
    cards
});

const receiveCard = (card) => ({
    type: RECEIVE_CARD,
    card
});

export const fetchCards = () => dispatch => (
    CardAPIUtil.fetchCards()
        .then((cards) => dispatch(receiveAllCards(cards)))
);

export const fetchCard = (cardId) => dispatch => (
    CardAPIUtil.fetchCard(cardId)
        .then((card) => dispatch(receiveCard(card)))
);