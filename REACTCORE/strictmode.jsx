/*
STRICT MODE
Strict mode is a development - only tool that helps you catch, 
 => Unsafe side effects
 => Bugs in effects

Strict mode intentionally double-invokes code in development to detet side effects

EXAMPLE
<React.StrictMode>
 <App />
</React.StrictMode>

Here <App /> runs TWICE these :
 => Components
 => useEffects
 => Some lifecycle logics


*/