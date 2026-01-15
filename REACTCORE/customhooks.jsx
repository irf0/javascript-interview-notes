// Custom hook is just a normal JavaScript function that uses React hooks inside it.

//Example, 
function useCounter(initialValue = 0) {
    const [count, setCount] = useState(initialValue);

    const increment = () => setCount(c => c + 1);
    const decrement = () => setCount(c => c - 1);

    return { count, increment, decrement };
}

//Usage
const { count, increment } = useCounter(5);

// When to create a custom hook
// => Logic repeated in multiple components
// => Complex state + effects together


// Rules of Custom Hooks:
// => Name must start with use
// => Can use other hooks
// => Used to reuse logic, not UI