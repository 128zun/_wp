/*
實作 sumArray(arr)，計算數字陣列的總和。
console.log(sumArray([1, 2, 3, 4])); 
// 10
*/
function sumArray(arr){
    let result = 0;
    for(let i = 0;i < arr.length;i++){
        result += arr[i];
    }
    return result;
}
console.log(sumArray([1, 2, 3, 4]));