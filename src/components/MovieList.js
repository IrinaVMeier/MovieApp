import React from 'react';
import Move from './Movie';

let e = React.createElement;

export default class MovieList extends React.Component {
/*
  constructor(props) {
      super(props);

      this.state = {
        moves: props.moves,
        content: props.content
      }
  }
*/
  render() {
    let moveOne = {
        name: 'House, MD',
        description: 'An antisocial maverick doctor who specializes in diagnostic medicine does whatever it takes to solve puzzling cases that come his way using his crack team of doctors and his wits.',
        img: require('../img/House.PNG'),
        review : [
          {
            title: 'Addicting!',
            text: 'Funny medical TV show that you cannot stop watching.',
            stars: 5
          }
        ]
    }

    let moveTwo = {
        name: 'Top Gun: Maverick',
        description: 'After thirty years, Maverick is still pushing the envelope as a top naval aviator, but must confront ghosts of his past when he leads TOP GUNs elite graduates on a mission that demands the ultimate sacrifice from those chosen to fly it.',
        img: require('../img/TopGun.PNG'),
        review : [
          {
            title: 'Entertaining',
            text: 'An excellent sequel. Beware: lots of makeup on Tom Cruise to make him young and beautiful again.',
            stars: 5
          }
        ]
    }

    let moveTree = {
        name: 'Killers from Space',
        description: 'An atomic scientist claims he was abducted by aliens after being injured in a plane crash.',
        img: require('../img/KillersFromSpace.PNG'),
        review : [
          {
            title: 'Craptastic',
            text: 'Amazingly bad and unintentionally funny.',
            stars: 1
          }
        ]
    }

    return React.createElement(
      'div',
      {class:'container'},
      e(Move, {...moveOne}, null),
      e(Move, {...moveTwo}, null),
      e(Move, {...moveTree}, null)
    );
  }

}
