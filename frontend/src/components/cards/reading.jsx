import React from "react";

class Reading extends React.Component {
  componentDidMount() {
    this.props.fetchCards();
  }

  render() {
    const { cards } = this.props;
    // console.log(cards)

    function cardReading(reqLength) {
      const handIdx = [];
      const handArr = [];

      // // saving random indexes into array
      while (handIdx.length < reqLength) {
        const randNum = Math.floor(Math.random() * 78);
        if (!handIdx.includes(randNum)) handIdx.push(randNum);
      }

      console.log("These are random indexes: ", handIdx);

      // // iterating through array of random indexes
      for (let i = 0; i < handIdx.length; i++) {
        const randPos = Math.floor(Math.random() * 2);
        // console.log(cards)
        console.log(typeof handIdx[i]);
        // console.log(cards[handIdx[i]]);
        // const finalCard = cards[handIdx[i]];
        console.log(cards[9]);
        const finalPos = randPos === 0 ? "meaningUp" : "meaningRev"

        // console.log("This is the Final Card: ", finalCard);
        console.log("Final Position: ", finalPos);
      }

      // return hand;
    }

    console.log(cardReading(5))

    return (
      <div>I am from the reading</div>
    )
  }
}

export default Reading;