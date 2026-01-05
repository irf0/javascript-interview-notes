// JavaScript Event Loop Notes

//  Core idea
// JS is single-threaded → means it can run only one thing at a time
// Event loop decides what runs next

// Priority Order (IMPORTANT)

// Memorize this line 👇

// 1. Call Stack (sync)
// 2. Microtask Queue
// 3. Macrotask Queue

// 1. Call Stack (Sync code)

// Normal JS code
// Runs immediately
// Blocks everything else
// console.log("A");

// 2. Microtask Queue (HIGH priority async)

// Imp. Rule => Microtasks run AFTER sync code but BEFORE setTimeout (Macrotasks)

// This Contains,

// i) Promise.then / catch / finally
// ii) await
// iii) queueMicrotask


// 3. Macrotask Queue (Lower priority async)

// This Contains,

// i) setTimeout
// ii) setInterval
// iii) DOM events

// Execution Flow
// → Run all sync code
// → Run ALL microtasks (drain completely)
// → Run ONE macrotask
// → Repeat