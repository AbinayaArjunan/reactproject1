
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
//export default App;
//working with array lists
// import React from 'react';
// function App(props) {
//   const { notes } = props;
//   //console.log(notes);
//   return (
//     <div>
//       <h1>Notes</h1>
//       <ul>
//         <li>{notes[0].content}</li>
//         <li>{notes[1].content}</li>
//         <li>{notes[2].content}</li>
//         <li>{notes[3].content}</li>
//         <li>{notes[4].content}</li>
//       </ul>
//     </div>
//   )
//}

// export default App;

// import React from 'react';
// function App(props) {
//   const { notes } = props;
//   //console.log(notes);
//   return (
//     <div>
//       <h1>Notes</h1>
//       <ul>
//         {notes.map(note => <li>{note.content}</li>)}
//       </ul>
//     </div>
//   )
// }
// export default App;
//first way of conditional rendering
// import React from 'react';
// function Note({ note }) {
//   if (note.important) {
//     return (
//       <li>{note.content} *</li>
//     )
//   }
//   return (
//     <li>{note.content} </li>
//   )

// }

// function App({notes}) {
//   //const { notes } = props;
//   //console.log(notes);
//   return (
//     <div>
//       <h1>Notes</h1>
//       <ul>
//         {notes.map(note =>
//           <Note key={note.id} note={note} />
//         )}
//       </ul>
//     </div>
//   )
// }
// export default App;
//second way

// import React from 'react';
// function Note({ note }) {
//   // if (note.important) {
//   //   return (
//   //     <li>{note.content} *</li>
//   //   )
//   // }
//   // return (
//   //   <li>{note.content} </li>
//   // )
//   return (
//     <li>{note.important ? note.content +'*' :note.content} </li>
//    )

// }

// function App({ notes }) {
//   //const { notes } = props;
//   //console.log(notes);
//   return (
//     <div>
//       <h1>Notes</h1>
//       <ul>
//         {notes.map(note =>
//           <Note key={note.id} note={note} />
//         )}
//       </ul>
//     </div>
//   )
// }
// export default App;

// 3rd way logical operator

// import React from 'react';
// function Note({ note }) {

//   return (
//     <li>{note.content} {note.important && '*'}</li>
//   )

// }

// function App({ notes }) {
//   //const { notes } = props;
//   //console.log(notes);
//   return (
//     <div>
//       <h1>Notes</h1>
//       <ul>
//         {notes.map(note =>
//           <Note key={note.id} note={note} />
//         )}
//       </ul>
//     </div>
//   )
// }
// export default App;

// event handling 1import React from 'react';
// function Note({ note }) {

//   return (
//     <li>{note.content} {note.important && '*'}</li>
//   )
// }

// function App({ notes }) {
//let addNote = (event) => {
//     event.preventDefault();
//     console.log("button clicked",event.target);
//   }

//   return (
//     <div>
//       <h1>Notes</h1>
//       <ul>
//         {notes.map(note =>
//           <Note key={note.id} note={note} />
//         )}
//       </ul>
//       <form onSubmit={addnote}>
//         <input />
//         <button type='submit'>save note</button>
//
//       </form>
//     </div>
//   )
// }
// export default App;


// event handling2
// import React from 'react';
// function Note({ note }) {

//   return (
//     <li>{note.content} {note.important && '*'}</li>
//   )
// }

// function App({ notes }) {
//   let addNote = (event) => {
//     event.preventDefault();
//     console.log("button clicked");
//   }

//   return (
//     <div>
//       <h1>Notes</h1>
//       <ul>
//         {notes.map(note =>
//           <Note key={note.id} note={note} />
//         )}
//       </ul>
//       <form>
//         <input />
//         <button onClick={addNote}>save note</button>
//         {/* <button onClick={()=>console.log("button clicked")}>save note</button> */}

//       </form>
//     </div>
//   )
// }
// export default App;

// import React from 'react'
// // function component
// function App() {
//   return (
//     <div>hello world!</div>
//   )
// }

//export default App;

//import { Component } from "react";

//class component
// class App extends Component{
//   render() {
//     return (
//       <div>
//         hello world!</div>)
//   }

// }
// export default App;
// import React from 'react'
// // function component
// function Hello(props){
  //return(
//<div>hello,{props.name}</div>
//)}
// function App() {
//   return (
//     <div>
//        <Hello name={'abi'}   />
//     </div >
//   )
// }

//export default App;


// import { Component } from "react";

// //class component
// class Hello extends Component{
//   render() {
//     const { name } = this.props;
//     return (
//       <div>
//         {/* hello,{this.props.name}! */}
//         Hello,{name}!
//       </div>
//     )
//   }
// }
// class App extends Component {
//   render() {
//     return (
//       <div>
//         <Hello name={'abi' } /></div>)
//   }

// }
// export default App;

// start with use that is hook
//hook-usestate
// state changes triggers component re rendering
// import React, { useState } from 'react'


// function App() {
//   const [counter, setcounter] = useState(0);


//   const handleplusclick = () => setcounter(counter + 1);
//   const handleminusclick = () => setcounter(counter - 1);
//   const handlezeroclick = () => setcounter(0);

//   return (
//     <div>
//       <div>
//         {counter}
//       </div>
//       <button onClick={handleplusclick}>plus</button>
//       <button onClick={handleminusclick}>minus</button>
//       <button onClick={handlezeroclick}>zero</button>

//     </div>
//   )
// }

// export default App


// import React, { useState } from 'react'


// const Display = (props) => {
//   return (
//     <div>{ props.counter}</div>
//   )
// }

// function App() {
//   const [counter, setcounter] = useState(0);


//   const handleplusclick = () => setcounter(counter + 1);
//   const handleminusclick = () => setcounter(counter - 1);
//   const handlezeroclick = () => setcounter(0);

//   return (
//     <div>
//       <div>
//        <Display counter= {counter}/>
//       </div>
//       <button onClick={handleplusclick}>plus</button>
//       <button onClick={handleminusclick}>minus</button>
//       <button onClick={handlezeroclick}>zero</button>

//     </div>
//   )
// }

// export default App


// import React, { useState } from 'react'


// const Display = (props) => {
//   return (
//     <div>{props.counter}</div>
//   )
// }

// function Button(props) {
//   return (
//     <button onClick={props.handleClick}>{props.text }</button>
//   )
// }

// function App() {
//   const [counter, setcounter] = useState(0);


//   const handleplusclick = () => setcounter(counter + 1);
//   const handleminusclick = () => setcounter(counter - 1);
//   const handlezeroclick = () => setcounter(0);

//   return (
//     <div>
//       <div>
//         <Display counter={counter} />
//       </div>
//       <Button text="plus" handleClick={handleplusclick}/>
//       <Button text='minus' handleClick={handleminusclick} />
//       <Button text='zero' handleClick={handlezeroclick} />
//     </div>
//   )
// }

// export default App

// import React, { useEffect, useState } from 'react'

// function App() {
//   const [data, setdata] = useState(null);
//   //runs only one time
//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//       .then((response) => response.json())
//       .then((data) => setdata(data));
//   }, []);

//   return (
//     <div>
//       <h1>api data</h1>
//       {
//         data ? (
//           <ul>
//         {
//           data.map(item => <li key={item.id}>{item.title}</li>)
//         }
//           </ul>
//         ) : (
//             <p>loading data...</p>
//         )
             
        
//       }
//     </div>
//   )
// }

// export default App


// import React, { useEffect, useState } from 'react'

// function App() {
//   const [count, setcount] = useState(0);
//   useEffect(() => {
//     document.title = `count=${count}`
//   }, [count]);
   
//   const incrementHandler = () => {
//     setcount(count+1)
//   }

//   return (
//     <div>
//       <button onclick={incrementHandler}>increment</button>
//     </div>
//   )
// }

// export default App


//props drilling
// parent to grandchild  or nested

// import React from 'react'

// function GrandChildComponent({ parentData }) {
//   console.log({ parentData });
//   return (
//     <div>
//       <h3>Grand Child Component</h3>
//     </div>
//   )
// }

// function ChildComponent({ parentData }) {
//   return (
//     <div>
//       <h2>child component</h2>
//       <GrandChildComponent parentData={parentData} />
//     </div>
//   )
// }

// function App() {

//   const parentData = "hello from parent";
//   return (
//     <div>
//       <h1>parent component</h1>
//       <ChildComponent parentData={parentData} />
//     </div>
//   )
// }

// export default App

//passing data from the child component to the parent component
import React, { useState } from 'react';

function ChildComponent({onMessage}) {

  const message = "hello from child";
   
  const handleClick = () => {
     onMessage(message)
   }

  return (
    <>
      <h2>child component</h2>
      <button onClick={handleClick}>send message to the parent</button>
    </>
  )
}



function App() {

// set a state to handle child data
  const [message, setMessage] = useState('');
   
  const handleMessage = (data) => {
    setMessage(data)
  }
  return (
    <div>
      <h2>parent component</h2>
      <p>message from child component:{ message}</p>
      <ChildComponent onMessage={handleMessage} />
    </div>
  )
}

export default App;