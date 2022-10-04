import React from 'react';

let e = React.createElement;
let text;
let title;
let star;

export default class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: props.reviews
    }
    //alert(Object.keys(props.reviews))
  //  for (let review of props.reviews) {
  //    alert(Object.keys(review.proops))
  //  }

    // alert(Object.keys(props.reviews[0].props['title']))
  }

  handleClick() {
    this.props.func(
      {
        title: title,
        text: text,
        stars: star
      }
    );
  }

  handleTextupdate(e) {
    text = e.target.value
  }

  handleTitleupdate(e) {
    title = e.target.value
  }

  handleStarupdate(e) {
    star = e.target.value
  }

  render() {

    return React.createElement(
      'div',
      {class:'border-top border-dark mt-3'},
      e('div', {class:'p-2'}, 'Add review'),
      e(
          'div',
          {},
          e('div', {class:'text-secondary'}, 'Enter review title'),
          e('input', {class:'d-inline-block w-100', onChange:this.handleTitleupdate.bind(this)}, null),
          e('span', {}, 'Choose rating : '),
          e("select", {class:'d-inline-block', onChange:this.handleStarupdate.bind(this)},
            e("option", {value: "1"}, "1"),
            e("option", {value: "2"}, "2"),
            e("option", {value: "3"}, "3"),
            e("option", {value: "4"}, "4"),
            e("option", {value: "5"}, "5")
          ),
          e('div', {class:'text-secondary'}, 'Review'),
          e('textarea', {class:'d-block w-100', onChange:this.handleTextupdate.bind(this)}, null),
          e('button', {onClick:this.handleClick.bind(this)}, 'Add')
      ),
      e('div', {}, null)
    );
  }

}
