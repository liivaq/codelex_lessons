export {};

/**
 * Currency Formatting
 *
 * The business is now breaking into the Brazilian market
 * Write a new function for converting to the Brazilian real
 * They have also decided that they should add a 1% fee to all foreign transactions
 *
 * Additional Challange:
 * Find a way to add 1% to all currency conversions
 * (think about the DRY (don't repeat yourself) principle)
 * You are allowed to create your own functions
 * and use them in place of convertToUSD() and convertToBRL()
 */

// You are allowed to change this function

const RATE_GBP_USD = 1.19
const RATE_GBP_BRL = 6.4

function calculatePriceWithFee(price: number){
    return price * 1.01
}

function formatPrice(price: number): string{
    return price.toFixed(2)
}

function convertCurrency(price: number, rate: number){
    const priceConverted = price * rate
    const priceWithFee = calculatePriceWithFee(priceConverted)
    return formatPrice(priceWithFee)
}

const product = "You don't know JS";
const price = 12.5;
const priceInUSD = convertCurrency(price, RATE_GBP_USD);
const priceInBRL = convertCurrency(price, RATE_GBP_BRL);

console.log("Product: " + product);
console.log("Price: $" + priceInUSD);
console.log("Price: R$" + priceInBRL)

/* Expected output:

    > Product: You don't know JS
    > Price: $?
    > Price: R$?

*/
