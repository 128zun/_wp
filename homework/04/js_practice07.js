/*
實作 class Vector {...}
let a = new Vector([1,2,3])
let b = new Vector([4,5,6])
console.log(a.add(b).sub(b).dot(b))
*/
class Vector {
    constructor(values) {
      this.values = values; // 儲存向量陣列
    }
  
    // 加法：a + b
    add(other) {
      let result = this.values.map((val, idx) => val + other.values[idx]);
      return new Vector(result);
    }
  
    // 減法：a - b
    sub(other) {
      let result = this.values.map((val, idx) => val - other.values[idx]);
      return new Vector(result);
    }
  
    // 內積：a · b
    dot(other) {
      return this.values.reduce((sum, val, idx) => sum + val * other.values[idx], 0);
    }
  }
  
  // 測試
  let a = new Vector([1, 2, 3]);
  let b = new Vector([4, 5, 6]);
  
  // a.add(b): [5,7,9]
  // .sub(b): [1,2,3] → 又變回 a
  // .dot(b): 1*4 + 2*5 + 3*6 = 32
  console.log(a.add(b).sub(b).dot(b));  // ➜ 32
  