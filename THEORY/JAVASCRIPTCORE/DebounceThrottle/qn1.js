//Write a debounce function in javascript 

function debounce(fn, delay) {
    let timer;

    return function (...args) {
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(this, args)
        }, delay)
    }
}