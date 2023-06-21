import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
//data
const notes = [
  {
    id: 1,
    content: "Working with lists",
    important: true
  },
  {
    id: 2,
    content: "Usage of keys",
    important: false
  },
  {
    id: 3,
    content: "Conditional rendering",
    important: true
  },
  {
    id: 4,
    content: "Handling Events",
    important: true
  },
  {
    id: 5,
    content: 'Props vs State',
    important: false
  }
];
ReactDOM.createRoot(document.getElementById('root')).render(<App notes={notes} />);

