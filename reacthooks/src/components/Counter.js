import { useReducer } from "react";
import { initialState, counterReducer } from "../reducer/counterReducer";
function Counter(){
    const [state, dispatch] = useReducer(counterReducer, initialState);

    return(
        <>
            <h1>Count is: {state.count}</h1>
            <button onClick={() => dispatch({type: "increment"})}>Increment</button>
            <button onClick={() => dispatch({type: "decrement"})}>Decrement</button>
        </>
    )
}

export default Counter;