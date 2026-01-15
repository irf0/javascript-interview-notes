// In React, functions are re-created on every render.

//For example in this, On every render, handleClick is a new function.
function Parent() {
    const handleClick = () => {
        console.log("clicked");
    };

    return <Child onClick={handleClick} />;
}

// 👉 useCallback memorizes the function reference.
const handleClick = React.useCallback(() => {
    console.log("clicked");
}, []);

// Now:
// Same function reference
// Until dependencies change