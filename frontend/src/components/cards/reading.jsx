import React from "react";
import tarot_back from "../../images/tarot_card_back.jpg";
import "./reading.css"

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
      cardAmt : 0,
      selected : "",
      showCards : false,
      showButton : false,
      cardNum : "",
      clickCount : 0
    }

    this.upOrReverse = this.upOrReverse.bind(this)
    this.showCards = this.showCards.bind(this)
    this.disable = this.disable.bind(this)
    this.refreshCards = this.refreshCards.bind(this)
  }

  componentDidMount() {
    this.props.fetchCards();
  }

  handleCheckCount = (e) => {
    const {checked, type} = e.target;
    if (type === "checkbox" && checked === true) {
      this.setState(state => state.clickCount++)
    } else {
      this.setState(state => state.clickCount--)
    }
    if (this.state.cardAmt -1 == this.state.clickCount) {
      this.freezeCards();
    }
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

  showCards() {
    if(this.state.cardAmt == this.state.clickCount) {
    this.setState({
        showCards : true
      })
    }
  }

  hideCards() {
    this.setState({
      showCards : false
    })
  }
  
  refreshCards() {
    this.setState({
      clickCount : 0
    })
    this.checkboxes.map(checkbox => checkbox ? (checkbox.checked = false) : null)
    this.unFreezeCards(); 
    this.hideCards(); 
  }

  freezeCards() {
    this.checkboxes.map(checkbox => checkbox ? checkbox.style.zIndex = "-1" : null)
  }

  unFreezeCards() {
    this.checkboxes.map(checkbox => checkbox ? checkbox.style.zIndex = "1" : null)
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
    return (e) => 
    { this.setState({ [field]: e.target.value, cardNum: e.target.value }) }
  }

  disable(cardNum) {
    if (!cardNum) {
      return false
    }
    if (cardNum !== this.state.cardNum) {
      return false
    } else {
      return true
    }
  }


  render() {
    console.log(this.state.clickCount)
    console.log(this.state.cardAmt)
    this.deckCards = [];
    this.checkboxes = [];
    const {showCards} = this.state
    if (!this.props.cards) return null;
    const selectedIdxs = this.cardReading(this.state.cardAmt);
    let selectedSide = []
    
    selectedSide = selectedSide.concat(this.upOrReverse())
      .concat(this.upOrReverse())
      .concat(this.upOrReverse())
      .concat(this.upOrReverse())
      .concat(this.upOrReverse())

    
    const displayNumCards = this.state.cardAmt == 1 ? (
      <div className="one-card">
        <ul>
          <li>
            <img className="chosen-card" alt="card" src={this.props.cards[selectedIdxs[0]].photoUrls[selectedSide[0]]}/>
          </li>
        </ul>
      </div>
    ) : this.state.cardAmt == 3 ? (
      <div className="three-cards">
        <ul>
          <li>
            <img className="chosen-card" alt="card" src={this.props.cards[selectedIdxs[0]].photoUrls[selectedSide[0]]}/>
            <img className="chosen-card" alt="card" src={this.props.cards[selectedIdxs[1]].photoUrls[selectedSide[1]]}/>
            <img className="chosen-card" alt="card" src={this.props.cards[selectedIdxs[2]].photoUrls[selectedSide[2]]}/>
          </li>
        </ul>
      </div>
    ) : this.state.cardAmt == 5 ? (
      <div className="five-cards">
        <ul>
          <li>
            <img className="chosen-card" alt="card" src={this.props.cards[selectedIdxs[0]].photoUrls[selectedSide[0]]}/>
            <img className="chosen-card" alt="card" src={this.props.cards[selectedIdxs[1]].photoUrls[selectedSide[1]]}/>
            <img className="chosen-card" alt="card" src={this.props.cards[selectedIdxs[2]].photoUrls[selectedSide[2]]}/>
            <img className="chosen-card" alt="card" src={this.props.cards[selectedIdxs[3]].photoUrls[selectedSide[3]]}/>
            <img className="chosen-card" alt="card" src={this.props.cards[selectedIdxs[4]].photoUrls[selectedSide[4]]}/>
          </li>
        </ul>
      </div>
    ) : (
      null
    )

    return (
      <div>
        <div className="card-read-settings">
          <p>Please select the number of cards you would like read.</p>
          <input type="radio" id="1" name="cardAmt" value={1} onChange={this.updateField("cardAmt")} onClick={this.refreshCards}/>
          <label id="1">1 Card</label>
          <input type="radio" id="3" name="cardAmt" value={3} onChange={this.updateField("cardAmt")} onClick={this.refreshCards}/>
          <label id="3">3 Cards</label>
          <input type="radio" id="5" name="cardAmt" value={5} onChange={this.updateField("cardAmt")} onClick={this.refreshCards}/>
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

        <div className="cardspread">
          <div className="deck-container">
            {Array.from({length: 78})
            .map((_, index) => (
              <div className="individual-card-container">
                <input ref={(checkbox) => {this.checkboxes.push(checkbox)}} type="checkbox" onChange={(e => this.handleCheckCount(e))}/>
                <img ref={(card) => {this.deckCards.push(card)}}alt="deckimage" className="deck-image" src={tarot_back}></img>
              </div>
            ))}
            <button onClick={this.refreshCards}>Reset Cards</button>
          </div>
        </div>

        <h2>Current Selected Card Amount: {this.state.clickCount}</h2>

        

        {/* <div className="card-read-select">
          <ul>
            {
              selectedIdxs.map((cardidx, ikey) => {
                const position = this.upOrReverse()
                return <li key={ikey}><img src={this.props.cards[cardidx].photoUrls[position]} alt="cards[cardidx]" /></li>
              })
            }
          </ul>
        </div> */}
        <div>
          {((this.state.clickCount == this.state.cardAmt) && this.state.clickCount !== 0) ? <button disabled={this.state.showCards} onClick={this.showCards}>Reveal</button> : <div></div>}
          {showCards && displayNumCards}
        </div>

      </div>
    )
  }
}

export default Reading;