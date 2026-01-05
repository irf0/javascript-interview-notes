try {
    console.log("X");
    throw new Error("Boom");
} catch (e) {
    console.log("Y");
    throw new Error("New Error");
} finally {
    console.log("Z");
}

console.log("END");

//Output => X Y Z
//Reason => throw → finally → crash
