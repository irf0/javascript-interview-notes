// A component is CONTROLLED when:
//  => Input value comes from React state
//  => Changes go through onChange → setState

//EXAMPLE
const [name, setName] = React.useState("");

<TextInput
    value={name}
    onChangeText={setName}
/>

// A component is UNCONTROLLED when:
//  => Input manages its own state internally
//  => React reads value using a ref

// EXAMPLE
const inputRef = React.useRef(null);

<TextInput ref={inputRef} />

//COMPARISON
// | Controlled           | Uncontrolled              |
// | -------------------- | ------------------------- |
// | React controls value | DOM/native controls value |
// | Uses state           | Uses ref                  |
// | Real-time validation | Faster, less re-render    |
// | More predictable     | Less boilerplate          |


//WHEN TO USE WHICH

// USE CONTROLLED WHEN
//  => Forms
//  => Validation
//  => Dynamic UI updates
//  => Auth / critical inputs

// USE UNCONTROLLED WHEN
//  => Simple inputs
//  => Performance-sensitive cases
//  => One-time value read (submit)