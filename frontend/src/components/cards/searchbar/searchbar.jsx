// import { useState } from "react"
import React from "react"


const Searchbar = ({fetchSearchedCards, searchInput, setSearchInput }) => {
    

    const handleSubmit = (e) => {
        e.preventDefault()
        fetchSearchedCards(searchInput)
    } 

    const updateSearchInput = (e) => setSearchInput(e.target.value)

    return (
        <div>
            <form onSubmit={e => handleSubmit(e)}>
                <input type="text" value={searchInput} onChange={updateSearchInput}/>
                <button type="submit">Submit</button>


            </form>
        </div>
    )


}



export default Searchbar