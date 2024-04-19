export{};

// クラス定義
class Person{
  name:string;
  age: number;

  // コンストラクタ
  constructor(name:string,age:number){
    this.name=name;
    this.age=age
  }

  personInfo():string{
    // return 'name: ${this.name},age:${this.age}';
    // 上記のようにシングルクォーテーションではないので注意
    return `name:${this.name},age${this.age}`
  }
}
let tarou = new Person('太郎',31);

console.log(tarou.personInfo());