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
    this.checkboxes.map(checkbox => checkbox ? (checkbox.checked = false) : null)
    this.unFreezeCards(); 
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
    // this.hideCards(); 
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
          <div className="Tarot-answer">
              Ah yes {this.props.cards[selectedIdxs[0]].name}, an interesting card. In this position it usually means {this.props.cards[selectedIdxs[0]].meaning[selectedSide[0]]} <br />
              Does this single card make you feel a certain way? Happy? Dissappointed? Do not worry, do not be overly jubilant. <br />
              This card has a chance to reflect your present moment. Some may project on the future too much and some may live <br />
              in the past, these are equally dangerous. Use this card to better understand where your path leads and understand <br />
              the path you have worn for yourself.

            </div>
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
            <div className="Tarot-answer">
              A three card draw. Lets apply {this.props.cards[selectedIdxs[0]].name} to the past. {this.props.cards[selectedIdxs[0]].meaning[selectedSide[0]]} <br />
              Do these ring true? Does a single element of it ring true? {this.props.cards[selectedIdxs[1]].name} shows your present, {this.props.cards[selectedIdxs[1]].meaning[selectedSide[1]]}.<br />
              I would say your present defines the future. That these things communicate. Take {this.props.cards[selectedIdxs[1]].name} as a gift to the future, whether {this.props.cards[selectedIdxs[2]].name} <br />
              looks good or bad. If you futuure seems bleak know nothing is set in stone. You can make the future what you want. <br />
              If the future looks good know you are on the right track. That the present path leads towards prosperity or positive change. This does not mean do not change though. <br />
              It means you should trust yourself. Trust yourself to know what to do with the {this.props.cards[selectedIdxs[2]].meaning[selectedSide[2]]} of {this.props.cards[selectedIdxs[2]].name} <br />

            </div>
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
      <div className="tarot-reading-container">
        <br />
        <br />
        <br />
        <div className="card-read-settings" >
          <div className="Please-select-title" >Please select the number of cards you would like read.</div>
          <input type="radio" id="1" name="cardAmt" value={1} onChange={this.updateField("cardAmt")} onClick={this.refreshCards} />
          <label id="1">1 Card</label>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input type="radio" id="3" name="cardAmt" value={3} onChange={this.updateField("cardAmt")} onClick={this.refreshCards}/>
          <label id="3">3 Cards</label>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input type="radio" id="5" name="cardAmt" value={5} onChange={this.updateField("cardAmt")} onClick={this.refreshCards}/>
          <label id="5">5 Cards</label>

          <br />
          <br />
          <button className="reset-cards-button" onClick={this.refreshCards}>Reshuffle the cards</button>
        </div>
       <br />
     

        <div className="cardspread">
          <div className="deck-container">
            {this.state.cardAmt > 0 ?
            Array.from({length: 78})
            .map((_, index) => (
              <div className="individual-card-container">
                <input ref={(checkbox) => {this.checkboxes.push(checkbox)}} type="checkbox" onChange={(e => this.handleCheckCount(e))}/>
                <img ref={(card) => {this.deckCards.push(card)}}alt="deckimage" className="deck-image" src={tarot_back}></img>
              </div>
            ))
            : 
            Array.from({length: 78})
            .map((_, index) => (
              <div className="individual-card-container hide">
                <input ref={(checkbox) => {this.checkboxes.push(checkbox)}} type="checkbox" onChange={(e => this.handleCheckCount(e))}/>
                <img ref={(card) => {this.deckCards.push(card)}}alt="deckimage" className="deck-image" src={tarot_back}></img>
              </div>
            ))
            }
          </div>
        </div>

        <div className="Current-and-reset">
        <h2>Current Selected Card Amount: {this.state.clickCount}</h2>
            {/* <button className="reset-cards-button" onClick={this.refreshCards}>Reset Cards</button> */}


        </div>


        

    
        <div className="cards-revealed">
          {((this.state.clickCount == this.state.cardAmt) && this.state.clickCount !== 0) ? <button disabled={this.state.showCards} className='reveal-cards-button' onClick={this.showCards}>And now.. Lets see what you have have chosen</button> : <div></div>}
          {showCards && displayNumCards}
        </div>

      </div>
    )
  }
}

export default Reading;