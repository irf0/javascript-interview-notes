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

//-----------------------------------------------------------------------------------//

//HOW TO KNOW IF IT'S SHALLOW OR DEEP COPY (IMPORTANT)

// 1️⃣ Look at HOW the copy is made (this decides everything)

// ✅ SHALLOW COPY indicators (🚨 danger if nested)
// If you see any of these, it’s shallow: Immediately think 👉 “Only first level is copied.”
// i) { ...obj }
// ii) [ ...arr ]
// iii) Object.assign({}, obj)
// iv) arr.slice()
// v) Array.from(arr)
// vi) concat()


// ✅ DEEP COPY indicators (🟢 safe)
// If you see any of these, it’s deep: Immediately think 👉 “All levels are copied.”
// i) structuredClone(obj)
// ii) JSON.parse(JSON.stringify(obj))
// iii) _.cloneDeep(obj) // lodash


// 2️⃣ Look for nesting (this decides mutation effect)

// Is there a nested object or array?

// ❌ No nesting → shallow copy behaves same like deep copy
// ✅ Nesting present → shallow copy breaks

/*
Copy Method | Nested Object? | Affects Original?
-----------------------------------------------
Shallow     | No             | No
Shallow     | Yes            | Yes
Deep        | No             | No
Deep        | Yes            | No
*/
