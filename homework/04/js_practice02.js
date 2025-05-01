/*
實作 uniqueSorted(arr)，移除陣列重複的元素並從小到大排序。
console.log(uniqueSorted([5, 3, 8, 3, 1, 5, 8])); 
//[1, 3, 5, 8]
*/
function uniqueSorted(arr){
    arr.sort();
    let result = [];
    for(let i = 0;i < arr.length; i++){
        if(arr[i] != arr[i+1]){
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(uniqueSorted([5, 3, 8, 3, 1, 5, 8])); 