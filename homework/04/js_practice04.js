/*
實作 deepMerge(obj1, obj2)，將 obj2 合併到 obj1，如果鍵值是物件則遞迴合併。
const obj1 = { a: 1, b: { x: 2, y: 3 } };
const obj2 = { b: { y: 5, z: 6 }, c: 7 };
console.log(deepMerge(obj1, obj2));
/*
{
  a: 1,
  b: { x: 2, y: 5, z: 6 },
  c: 7
}
*/
function deepMerge(obj1, obj2) {
  for (let key in obj2) {
      if (
          typeof obj2[key] === 'object' &&
          obj2[key] !== null &&
          typeof obj1[key] === 'object' &&
          obj1[key] !== null
      ) {
          // 遞迴合併物件
          deepMerge(obj1[key], obj2[key]);
      } else {
          // 覆蓋或新增
          obj1[key] = obj2[key];
      }
  }
  return obj1;
}

// 範例
const obj1 = { a: 1, b: { x: 2, y: 3 } };
const obj2 = { b: { y: 5, z: 6 }, c: 7 };

console.log(deepMerge(obj1, obj2));
