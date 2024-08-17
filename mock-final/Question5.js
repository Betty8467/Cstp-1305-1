/*
Question 5: You are given an array prices where prices[i] is the price of a given stock on the i-th day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock. Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0. 

 

Example: 

Input: prices = [7,1,5,3,6,4] 

Output: 5 (Buy on day 2 and sell on day 5 for a profit of 6-1 = 5) 

 */

var maxProfit = function(prices) {

    if (prices.length===0) return 0;
    let maxProfit=0;
    let buyPrice=prices[0];

    for (const price of prices) {  //loop to go through each umber in the prices array
        maxProfit=Math.max(maxProfit,price-buyPrice);  //for every price in the array we check what the profit would be by subtracting the price you bought it as from teh price youd sell it as, then you update that price into max profit
        buyPrice=Math.min(buyPrice,price); //this is updated tobe the lowest price we bought as
    }
    return maxProfit

};

const prices = [7, 1, 5, 3, 6, 4];
const result = maxProfit(prices);
console.log(result);