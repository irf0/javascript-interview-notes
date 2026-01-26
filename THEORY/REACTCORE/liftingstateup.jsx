// Lifting state up means moving shared state to a common parent so multiple components can stay in sync.

// Parent = data owner
// Children = data consumers
// Owner updates → everyone stays in sync.

// Example 
function Parent() {
    const [count, setCount] = React.useState(0);

    return (
        <>
            <Display count={count} />
            <Controls setCount={setCount} />
        </>
    );
}

function Display({ count }) {
    return <Text>{count}</Text>;
}

function Controls({ setCount }) {
    return (
        <Pressable onPress={() => setCount(c => c + 1)}>
            <Text>+</Text>
        </Pressable>
    );
}

//Display and Controls can be in different files as well.


// Common mistakes:
// ❌ Duplicating state
// ❌ Lifting too high (global too early)
// ❌ Passing unnecessary props


//This leads to prop drilling which means the data must passd down even through components taht don't need it thus making the components less reusable and bad code practice.

//This problem is solved by Context API.