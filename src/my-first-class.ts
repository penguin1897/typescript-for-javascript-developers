export {};

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number){
    this.name = name;
    this.age = age;
  }

  profile(): string {
    return `name: ${this.name}, age: ${this.age}`;
  }
}
let taro: Person = new Person('Taro', 30);
console.log(taro.profile());
// let hanako: Person = new Person();