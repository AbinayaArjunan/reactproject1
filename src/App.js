
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

// import { Component } from "react";

// //class component
// class App extends Component{
//   render() {
//     return<div>hello world!</div>
//   }

// }
// export default App;



// props
// import { Component } from "react";
// class Hello extends Component{
//   render() {
//     let {name}=this.props
//     return <div> Hello { name}</div>

//   }
// }
// //class component
// class App extends Component {
//   render() {
//     return <div><Hello name={"abi"} /></div>
//   }

// }
// export default App;

// import React, { Component } from 'react'

// class App extends Component {
//   //mount:called after the component has been rendered to the dom
//    componentDidMount(){
//      console.log("mount");
//   }
//   componentDidUpdate() {
//     //invoked after the component has been updated in the dom
//     //state or prop changes
//   }

//   componentWillUnmount() {
//     //invoked just before the component is removed from the dom
//     //releasing memory or resources
//     //detaching the events
//     //cancelling timers
//   }
  
//   render() {
//     return (
//       <div>App</div>
//     )
//   }
// }

// export default App


//stateful components //rce
import React, { Component } from 'react'

export class App extends Component {

  constructor(props) {
    super(props);//for parent class constructor call
    this.state = {
      count:0,
    };
  }
  handleClick=() =>{
    this.setState((prevState) => ({
      count:prevState.count +1,
    }))
  }



  render() {
    return (
      <div>
        <p>count:</p>
        <button onClick={this.handleClick}>plus</button>
        <button>minus</button>
        <button>zero</button>
      </div>
    )
  }
}

export default App