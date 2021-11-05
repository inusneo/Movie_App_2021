import React from 'react';
import Cake from './Cake';

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log('constructor함수는 class형 컴포넌트가 생성할 때 호출');
  }

  componentDidMount() {
    console.log('컴포넌트가 처음 화면에 그려지면 실행 됨');
  }
  componentDidUpdate() {
    console.log('화면이 새로 그려지면 즉 업데이트 되면 실행 됨');
  }
  componentWillUnmount() {
    console.log('컴포넌트가 죽을 때 실행 됨');
  }

  state = {
    count: 0,
  };

  add = () => {
    this.setState(
      current => ( {count: current.count + 1} )
      // 매개변수(현재 state값) current에 count값을 1씩 더한다.
    );
  }
  minus = () => {
    this.setState({count: -1});
  }

  render() {
    return (
      <>
        <h1>The Number is : {this.state.count}</h1>
        <div>
          Hello World!
        </div>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
        <Cake />
      </>
    )
  }
}

export default App;
