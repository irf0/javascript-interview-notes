//Question 8 — try / catch / finally + return + await (senior-level tra
async function test() {
    try {
        return "A";
    } catch (e) {
        return "B";
    } finally {
        console.log("C");
    }
}

test().then(console.log);
console.log("D");

//Output => C D A
//Reason => In async functions, finally runs even after a return, before the Promise resolves.
//finally cannot change the returned value unless it throws or returns explicitly.
//It always runs before resolution.
