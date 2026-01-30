//Given an array prices where prices[i] is the price of a given stock on the $i^{th}$ day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock. Return the maximum profit you can achieve. If you cannot achieve any profit, return 0.

//Example: prices = [7, 1, 5, 3, 6, 4] 
//Output: 5 (Buy on day 2 at price 1, sell on day 5 at price 6. Profit = $6 - 1 = 5$).
//Note: You cannot sell before you buy.

//BRUTE FORCE LOGIC: TC : O(n2)
//1. Assume maxProfit = 0
//2. i starts at 0 and finds the buy day (minimum possible)
//3. j starts after i (i+1) and finds the sell day 
//4. If currentProfit found more than maxProfit, update maxProfit
//5. Return maxProfit

pricesArr = [7, 1, 5, 3, 6, 4]

function maxProfitBrut(pricesArr) {
    let maxProfit = 0

    for (let i = 0; i < pricesArr.length; i++) {
        for (let j = i + 1; j < pricesArr.length; j++) {
            let currentProfit = pricesArr[j] - pricesArr[i] //Selling - Buying

            if (currentProfit > maxProfit) {
                maxProfit = currentProfit
            }
        }
    }
    return maxProfit
}

// console.log(maxProfitBrut(pricesArr))

//OPTIMAL APPROACH LOGIC: TC: O(n)

//1. Assume minPrice at Infinity & maxProfit at 0 
//2. Loop through the array once.
//3. If the current price (arr[i]) is LOWER than minPrice, update minPrice
//4. If the current price (arr[i]) minus minPrice is GREATER than maxProfit, update maxProfit

function maxProfitOpt(pricesArr) {
    let minPrice = Infinity
    let maxProfit = 0

    for (i = 0; i < pricesArr.length; i++) {
        if (pricesArr[i] < minPrice) {
            minPrice = pricesArr[i]
        }
        else if (pricesArr[i] - minPrice > maxProfit) {
            maxProfit = pricesArr[i] - minPrice  //PROFIT = SELLING PRICE - BUYING PRICE
        }
    }
    return maxProfit
}

console.log(maxProfitOpt(pricesArr))

function maxProfitMulti(prices) {
    let totalProfit = 0;

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) { // If the price went up from yesterday, grab that profit!
            totalProfit += (prices[i] - prices[i - 1]);
        }
    }

    return totalProfit;
}