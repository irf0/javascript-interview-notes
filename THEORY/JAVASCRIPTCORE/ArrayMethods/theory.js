
// map → transforms every element (same length)
// filter → keeps only elements that pass a condition (picking specific element)
// reduce → combines array into one value (Combining Items into One Single Result)

//Reduce (simplified)
const expenses = [10, 25, 5, 50];
const totalExpenses = expenses.reduce((total, expense) => total + expense, 0);

//Explanation
// Sums all expenses into a single total
// 'total' is the running total (starts at 0, which is the optional second argument)
// 'expense' is the current item in the array

// totalExpenses is now 90
// expenses[] is still [10, 25, 5, 50]

// How reduce works:
// i) Starts with the initial value (0).
// ii) Adds the first price (10): 0 + 10 = 10 (new accumulator value).
// iii) Adds the second price (20): 10 + 25 = 35 (new accumulator value) and so on, until the single result is reached. 
