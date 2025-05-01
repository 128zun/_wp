/*
宣告變數 count = 5。
使用 while 迴圈讓 count 依序輸出 5, 4, 3, 2, 1, 0。
*/
let count = 5;
console.log(count);
for(let i = 5;i >= 0;i--){
    while(i != 0){
        count -= 1;
        console.log(count);
        break;
    }
}
