import { useReducer } from "react";
//useReducer is for managing complex state transitions predictably.
//It's an alternative to useState for complex state logic


// | useState        | useReducer       |
// | --------------- | ---------------- |
// | Simple          | Complex          |
// | Direct updates  | Action-driven    |
// | Few transitions | Many transitions |


//* Events in, rules apply, state out.*

// EXAMPLE
//1. Define state
const [state, dispatch] = useReducer(reducer, initialState);

//2. Reducer function
function reducer(state, action) {
    switch (action.type) {
        case "ADD_ITEM": {
            const updatedItems = [...state.items, action.payload]
            return {
                items: updatedItems
            }
        }
        case "REMOVE_ITEM": {
            const updatedItems = state.items.filter(item => item.id !== action.payload.id)
            return {
                items: updatedItems
            }
        }
        default:
            return state;
    }
}

//3. Dispatch actions
dispatch({ type: "ADD_ITEM", payload: data });


