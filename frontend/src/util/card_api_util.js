import axios from "axios";
// import { fetchSearchedCards } from "../actions/card_actions";

export const fetchCards = () => {
    return axios.get('/api/cards')
}

export const fetchCard = (cardId) => {
    return axios.get(`api/cards/${cardId}`, cardId)
}

 export const fetchSearchedCards = searchInput => {
     console.log(searchInput)
    return axios({   
    method: 'get',
    url: '/api/cards',
    params: {
    name: searchInput
        }})
 
    }