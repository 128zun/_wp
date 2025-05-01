/*
定義一個 Animal 類別，具有 name 屬性與 speak() 方法。
建立 Dog 類別，繼承 Animal 並覆寫 speak() 方法，使其回傳 "Woof! I am <name>"。
const dog = new Dog("Buddy");
console.log(dog.speak()); 
// "Woof! I am Buddy"
*/
// 定義 Animal 類別
class Animal {
    constructor(name) {
      this.name = name;
    }
  
    speak() {
      return `I am ${this.name}`;
    }
  }
  
  // 定義 Dog 類別，繼承 Animal 並覆寫 speak 方法
  class Dog extends Animal {
    speak() {
      return `Woof! I am ${this.name}`;
    }
  }
  
  // 測試
  const dog = new Dog("Buddy");
  console.log(dog.speak()); // "Woof! I am Buddy"
  