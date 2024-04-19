export{};

// 親クラス定義
class Person{
  name:string;
  protected age: number;
  protected nationality: string;

  // コンストラクタ
  constructor(name:string,age:number,nationality:string){
    this.name=name;
    this.age=age;
    this.nationality=nationality;
  }

  personInfo():string{
    // return 'name: ${this.name},age:${this.age}';
    // 上記のようにシングルクォーテーションではないので注意
    return `name:${this.name},age${this.age}`
  }
}

class clone extends Person{
  constructor(name:string,age:number,nationality:string){
    super(name,age,nationality);
  }

  personInfo():string{
    // return 'name: ${this.name},age:${this.age}';
    // 上記のようにシングルクォーテーションではないので注意
    return `name:${this.name},age${this.age},nationality:${this.nationality}`
  }
}
let tarou = new Person('太郎',31,'日本');
let tarouClone = new clone('太郎クローン',31,'日本');

// console.log(tarou.name);
// console.log(tarou.age);
console.log(tarou.personInfo());
console.log(tarouClone.personInfo());