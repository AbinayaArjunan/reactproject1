//component class r function
//rfce
// const App=() => {
// //javascript
//   console.log("hello from component");
//   //jsx js+xml
//   return (
//     <div >
//       <p>Hello World!</p>
//     </div>
//   );
// }

// export default App;
const Hello = (props) => {
  return (
    <p>hello {props.name} and {props.age}!</p>
  )
  
}

const App = () => {
//javascript
  console.log("hello from component");
  //jsx js+xml
  let age = 10;
  return (
    <div >
      <p><Hello name="krish" age={age }/></p>
    </div>
  );
}

