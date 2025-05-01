/*
實作 countLetters(str)，輸入一個字串，回傳一個 Map，其鍵為字母，值為該字母出現的次數。
console.log(countLetters("banana")); 
Map { 'b' => 1, 'a' => 3, 'n' => 2 }
*/
function countLetters(str) {
    let map = new Map();
    for (let char of str) {
        if (map.has(char)) {
            map.set(char, map.get(char) + 1);
        } else {
            map.set(char, 1);
        }
    }
    return map;
}
console.log(countLetters("banana"));