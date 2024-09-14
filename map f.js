let arr=[1,3,5,7,11]
let newarr=arr.map((e)=>{
    return e**2

})

console.log(newarr)

const greaterThanSeven=(e)=>{
    if(e>7){
        return true
    }
    return false
}
console.log(arr.filter(greaterThanSeven))