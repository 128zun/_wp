/*
定義一個遞迴函數 factorial(n)，計算 n 的階乘（n!）。
例如 factorial(5) 應該回傳 120。
*/
function factorial(n){
    let b = 1;
    for(let i = 1;i <= n;i++){
        b *= i;
    }
    return b;
}
console.log(factorial(5));