/*
建立一個陣列 nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]。
過濾出所有的偶數，並輸出新的陣列。
*/
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let nums1 = [];
for (let num of nums) {
    if (num % 2 === 0) {
        nums1.push(num);
    }
}
console.log(nums1);