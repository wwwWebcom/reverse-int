module.exports = function reverse (n) {
    let moduleNumber = Math.abs(n)
    let reverseNumber = moduleNumber.toString().split('').reverse().join('')
    return reverseNumber
}