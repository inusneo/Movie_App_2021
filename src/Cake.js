import React, {Component} from 'react';

export default class Cake extends Component {
  state = {
    price : 10000,
    discountPrice : 0
  }
  discount = () => {
    this.setState(
      currentPrice => ( {discountPrice: currentPrice.price * 0.7} )
    );
  }
  render() {
    return (
      <>
        <h1>케이크 가격 {this.state.price}원</h1>
        <button onClick={this.discount}>할인</button>
        <h2>30% 할인 가격 {this.state.discountPrice}원</h2>
      </>
    )
  }
};
