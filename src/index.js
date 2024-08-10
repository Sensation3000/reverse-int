module.exports = function reverse (n) {
    let arr = ("" + n).split("")
    if (arr[0] === "-"){
       return +(arr.slice(1).reverse().join(""))
    } else {
       return +(("" + n).split("").reverse().join(""))
    }
}