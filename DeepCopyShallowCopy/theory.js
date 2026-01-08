// Shallow vs Deep Copy — FLASH CARD

//SHORT NOTE :-
// Shallow copy copies the top level only. Nested objects ❌
// Deep copy copies everything. Nested objects ✅

// DEFINITION :-
//i) Shallow Copy → Copies only the first level. If there is an object inside (nested), it is shared by reference. Changing the copy might change the original.

//ii) Deep Copy → Copies every level. The copy is 100% independent. Changing it never affects the original.

// Memory Rules
// Primitives(Strings, Number, Boolean) → copied by value
// N-Ps(Objects, Arrays, Functions) → copied by reference

//METHODS :-
// Shallow Copy (MOST COMMON)
// Spread ...
// Object.assign()
// Array.slice(), concat()
// const copy = { ...obj }; // shallow
// 📌 Nested objects still point to the same memory

// Deep Copy (REAL copy)
// structuredClone(obj) ✅ (best)
// JSON.parse(JSON.stringify(obj)) ⚠️ (limitations)
// 📌 Nested objects get new memory