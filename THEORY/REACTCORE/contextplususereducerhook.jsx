// Context + useReducer (Mini Global State)

// useReducer → great for complex logic
// Context → great for avoiding prop drilling

//IMPORTANT
// Conceptual flow (memorize this)

// 1. User clicks something
// 2. Component dispatch()es action
// 3. Reducer calculates new state
// 4. Context updates
// 5. All subscribed components re-render

// EXAMPLE

//1. Create Context
const CartContext = React.createContext(null);

//2. Provider owns the reducer
function CartProvider({ children }) {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    );
}

//3. Consume anywhere
function CartButton() {
    const { dispatch } = useContext(CartContext);

    return (
        <Pressable onPress={() => dispatch({ type: "ADD_ITEM" })}>
            <Text>Add</Text>
        </Pressable>
    );
}

