import React from 'react';
import Macaron from "./Macaron";
import cakes from './cakes.json';
import PropTypes from 'prop-types';

// function Food(props) {
//   const {propsName, propsFood} = props; // 구조 분해 할당
//   // 객체의 key만으로 사용할 수 있게끔 만들어 주는 것.
//   return (
//     <>
//     <h1>I like {propsName}</h1>
//     <p>I like {propsFood}</p>
//     </>
//   );
// }

// function Food( {propsName, propsFood} ) { // 이 방법 좋네
//   return (
//     <>
//     <h1>I like {propsName}</h1>
//     <p>I like {propsFood}</p>
//     </>
//   );
// }

function Food( {propsId, propsName, propsImage} ) { 
  return (
    <>
      <h1>Menu {propsId}</h1>
      <p>I like {propsName}</p>
      <img src={propsImage} alt={propsName} />
    </>
  );
}

// const cakes = [
//   {
//     id: 1,
//     name: 'Cokie Dough Cake',
//     image: 'https://i.pinimg.com/236x/48/6a/9a/486a9aaab8571b0a9e512c23bab36a68.jpg'
//   }, 
//   {
//     id: 2,
//     name: 'Rainbow Cake',
//     image: 'https://i.pinimg.com/236x/dc/e3/2e/dce32e513ce557a951cbbe7fe15f10cb.jpg'
//   }, 
//   {
//     id: 3,
//     name: 'Moist Funfetti Cake',
//     image: 'https://i.pinimg.com/236x/69/9f/6c/699f6cb625a4a749c6320d22c075bd6f.jpg'
//   }
// ];

function App() {
  return (
    <>
      <div>Hello</div>
      <Macaron />

      {/* <Food propsName={'chicken'} />
      <Food propsId={''} />
      <Food propsImage={''} /> */}
      {/* <Food
        propsId={1}
        propsName={'Fried Chicken'}
        propsImage={'https://i.pinimg.com/236x/48/6a/9a/486a9aaab8571b0a9e512c23bab36a68.jpg'}
      /> */}
      
      {cakes.map(cake => (
        <Food
          propsId={cake.id}
          propsName={cake.name}
          propsImage={cake.image}
        />
      ))}
    </>
  );
}

// props들의 type을 검사
Food.propTypes = {
  propsId : PropTypes.number.isRequired,
  propsName : PropTypes.string.isRequired,
  propsImage : PropTypes.string
}

export default App;
