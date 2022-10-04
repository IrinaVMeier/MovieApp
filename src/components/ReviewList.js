import React from 'react';
import Review from './Review'
import ReviewForm from './ReviewForm'

let e = React.createElement;



export default class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: props.reviews
    }
  }


  addReview = (arg) => {
    let reviews = [];
    for (let review of this.state.reviews) {
      reviews.push({...review});
    }
    reviews.push(arg);

    this.setState({reviews : reviews});

    //this.render()
    //  this.state.reviews.push(e(Review, {...this.addReview}, null));
    //if (this.state.reviews) {alert(2)} else {alert(3)}
  }

  render() {
    //alert(1);
    let reviews = [];
    if (this.state.reviews) {
      for (let review of this.state.reviews) {
        reviews.push(e(Review, {...review}, null));
      }

    }

    return React.createElement(
      'div',
      {class:'mt-2'},
    //  e(Review, {}, null),
      reviews,
    //  ,
      e(ReviewForm, {...{reviews:reviews}, func:this.addReview}, null)
    );


  }

}
