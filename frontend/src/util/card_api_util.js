import axios from "axios";

export const fetchCards = () => {
    return axios.get('/api/cards')
}

export const fetchCard = (cardId) => {
    return axios.get(`api/cards/${cardId}`, cardId)
}