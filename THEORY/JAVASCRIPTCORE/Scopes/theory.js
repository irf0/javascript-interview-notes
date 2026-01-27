/*
| Feature           | var               | let                  | const                   |
|-------------------|-------------------|----------------------|-------------------------|
| Scope             | Function / Global | Block `{ }`          | Block `{ }`             |
| Initialization    | Optional          | Optional             | Required                |
| Redeclaration     | Yes               | No                   | No                      |
| Reassignment      | Yes               | Yes                  | No                      |
| Access Before Init| `undefined`       | ReferenceError (TDZ) | ReferenceError (TDZ)    |
| Hoisting          | Hoisted           | Hoisted (TDZ)        | Hoisted (TDZ)           |
------------------------------------------------------------------------------------------

var   → function-scoped, hoisted, unsafe
let   → block-scoped, safer
const → block-scoped, immutable reference


*/