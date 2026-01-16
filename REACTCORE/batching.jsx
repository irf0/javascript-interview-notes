/*
BATCHING
Batching means React groups multiple state updates into a single re-render.

update -> render -> update -> render ❌

update + update + update -> render ✅

EXAMPLE
setCount (c => c+1)
setCount (c => c+1)
setCount (c => c+1)

How many renders? 
Ans: ONE render 

Final value = count + 3

Real World Usecase:
Shopping Cart Checkout => you add all the items and checkout once. 

IMPORTANT 
React 18 Upgrade

Before React 18 batching happened only inside 
 => Event Handlers

After React 18 batching happens inside
=> setTimeout
=> Promises
=> Async / Await
=> Native events 

for example,
setTimeout(() => {
    setA(1)
    setB(2)
    },1000)

How many renders in this?
Ans: ONE render 
    
    


*/