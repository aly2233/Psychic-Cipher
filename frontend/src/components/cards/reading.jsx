import React from "react";

/*
shuffle the whole deck instead of just selecting random index
the goal seems to be to fan out the cards, have list of divs
have the user be able to click them, on click, changed state the record cards
once state reaches desired cardAmt, submit
have that be their hand
*/

class Reading extends React.Component {
  constructor(bleh) {
    super(bleh);
    this.state = {
      cardAmt : "",
      selected : ""
    }
  }

  componentDidMount() {
    this.props.fetchCards();
  }

  cardReading(reqLength) { //pass in a length like 1, 3 or 5
    const handIdx = []; //collect random indexes
    // // saving random indexes into array
    while (handIdx.length < reqLength) { // while the hand doesn't have all the cards yet
      const randNum = Math.floor(Math.random() * 78); //generate random indexes
      if (!handIdx.includes(randNum)) handIdx.push(randNum); //store random indexes if not yet in hand, O(n^2)
    }

    return handIdx; //return random indexes
  }

  upOrReverse(){
    const determinant = Math.floor(Math.random() * 2);
    return determinant === 0 ? "up" : "rev"
  }

  // // shuffle pass in the array of cards
  // shuffleAll(arr){
  //   let shuffled = arr.slice(0);
  //   for (let i = 0; i < shuffled.length; i++) {
  //     const randSwapLocation = Math.floor(Math.random() * i);

  //     const holder = shuffled[i];
  //     shuffled[i] = shuffled[randSwapLocation];
  //     shuffled[randSwapLocation] = holder;
  //   }

  //   return shuffled;
  // }


  //setting state to user's selected hand
  
  updateField(field){
    return (e) => { this.setState({ [field]: e.target.value }) }
  }

  render() {
    if (!this.props.cards) return null;
    const selectedIdxs = this.cardReading(this.state.cardAmt);
    console.log(selectedIdxs);
    console.log(this.state)

    return (
      <div>
        <div className="card-read-settings">
          <p>Please select the number of cards you would like read.</p>
          <input type="radio" id="1" name="cardAmt" value="1" onChange={this.updateField("cardAmt")}/>
          <label id="1">1 Card</label>
          <input type="radio" id="3" name="cardAmt" value="3" onChange={this.updateField("cardAmt")}/>
          <label id="3">3 Cards</label>
          <input type="radio" id="5" name="cardAmt" value="5" onChange={this.updateField("cardAmt")}/>
          <label id="5">5 Cards</label>
        </div>

        {/* <div className="card-read-fan">
          <ul>
            {
              this.shuffleAll(this.props.cards)?.map((card, i) => {
                return <li key={i}><img src="#" alt={card.name} /></li>
                // return <li key={i}><img src={card.photoUrls.up} alt={card.name}/></li>
              })
            }
          </ul>
        </div> */}

        <div className="card-read-select">
          <ul>
            {
              selectedIdxs.map((cardidx, ikey) => {
                const position = this.upOrReverse()
                return <li key={ikey}><img src={this.props.cards[cardidx].photoUrls[position]} alt="cards[cardidx]" /></li>
              })
            }
          </ul>
        </div>

      </div>
    )
  }
}

export default Reading;