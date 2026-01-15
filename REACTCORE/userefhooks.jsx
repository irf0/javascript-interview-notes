import { useRef } from "react";

// useRef gives you a mutable container that:
// Persists across renders
// Does NOT trigger re-render when updated

// useRef = persistent mutable value without re-render

// Two main use cases
// 1. Accessing DOM / native elements
const inputRef = useRef(null);
<TextInput ref={inputRef} />

// 2. Storing values that shouldn’t cause re-render
const renderCount = useRef(0);
renderCount.current += 1;


