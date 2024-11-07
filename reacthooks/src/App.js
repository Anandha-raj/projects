import Counter from './components/Counter';

function App() {

  return (
    <div className="App">
      <h1>use reducer</h1>
      <Counter />
    </div>
  );
}

export default App;






















// import './App.css';
// import { useRef, useState } from 'react';



// function App() {
//   const passwordRef = useRef(null);

//   const[visible, setVisble] = useState(false);

//   const toggleVisibility = () => {
//     passwordRef.current.type = passwordRef.current.type === "password" ? "text":"password";
//     setVisble(!visible);
//   }

//   return (
//     <div className="App">
//       <input ref={passwordRef} type='password' />
//       <button onClick={toggleVisibility}>
//         {visible ? "Hide Password" : "Show Password" }
//       </button>
//     </div>
//   );
// }

// export default App;









// function App() {
//   const inputRef = useRef(null);

//   const handleFocus = () => {
//     inputRef.current.focus();
//   }

//   return (
//     <div className="App">
//       <input ref={inputRef} type='text' placeholder='click to focus' />
//       <button onClick={handleFocus}>click</button>
//     </div>
//   );
// }

// export default App;


// I want to focus the input element using UseRef
// when we create the functional component, based on our requirement we ARE  going to use any of the life
// useRef -> It is also hook in react which is a powerful tool that provides a way to reference the DOM elements 
// AND if we want to access the elements without re-rendering of the components then we are going to use useRef