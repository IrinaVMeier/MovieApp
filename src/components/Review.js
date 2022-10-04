import React from 'react';
import Stars from './stars';

let e = React.createElement;

export default class Review extends React.Component {


  render() {
    let stars = [];
    for (let s = 0; s < Number(this.props.stars); s++) {
      stars.push(e(Stars, {class:'d-inline'}, null));
    }

    return React.createElement(
      'div',
      {},
      e(
          'div',
          {class: 'card-header bg-secondary text-white p-1'},
          e('span', {class:'d-inline-block w-50'}, this.props.title),
          e(
            'span',
            {},
            stars
          /*  e(Stars, {class:'d-inline'}, null),
            e(Stars, {class:'d-inline'}, null),
            e(Stars, {class:'d-inline'}, null),
            e(Stars, {class:'d-inline'}, null),
            e(Stars, {class:'d-inline'}, null)*/
          )
      ),
      e('div', {class: 'card-body'}, this.props.text)
    );
  }

}
