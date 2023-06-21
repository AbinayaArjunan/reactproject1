
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
import React from 'react';
function Note({ note }) {
  
  return (
    <li>{note.content} {note.important && '*'}</li>
  )
}

function App({ notes }) {
  let addNote = (event) => {
    event.preventDefault();
    console.log("button clicked");
  }

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note =>
          <Note key={note.id} note={note} />
        )}
      </ul>
      <form>
        <input />
        <button onClick={addNote}>save note</button>
        {/* <button onClick={()=>console.log("button clicked")}>save note</button> */}

      </form>
    </div>
  )
}
export default App;

