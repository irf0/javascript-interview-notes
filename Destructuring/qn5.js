const user = {
    name: "Irfan",
    address: {
        city: "Bangalore"
    }
};

const { address: { city } } = user;

console.log(city);

//Output => "Bangalore"
//Reason => You don’t get address as a variable

// Very common follow-up they ask:👇

// console.log(address); --> output : ReferenceError. because address was never created.