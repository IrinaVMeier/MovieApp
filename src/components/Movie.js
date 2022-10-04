import React from 'react';
import Stars from './stars';
import ReviewList from './ReviewList';

let e = React.createElement;

export default class Movie extends React.Component {
  render() {
    /*let reviews = [
      {
        title: 'Addicting',
        text: 'Funny medical TV show that you cannot stop watching',
        stars: 5
      }
    ];
*/
    return React.createElement(
      'div',
      {class: 'd-inline-block w-100 mb-2'},
        e('div', {class:'bg-dark text-white h3 m-2 p-2 w-75'}, /*'House, MD'*/ this.props.name),
        e('div',
          {}
          , e('img', {class:'w-25 d-inline p-2', src:this.props.img/*require('../img/House.PNG')*/}, null)
          , e(
              'span',
              {class:'d-inline-block w-50 align-top p-2' },
              e('div'
                , {}
                , this.props.description
              ),
              //e(ReviewList, {...{reviews: reviews}}, null)
              e(ReviewList, {...{reviews: this.props.review}}, null)

            )
        )
    );
  }

}
