export{};
// typeで型定義
type Object = {
  name:string;
  age:number
}

let object1:{name:string; age:number} = {
  name:'Ham-san',
  age:43
}

let object2:Object = {
  name:'Ham-san',
  age:43
}

// typeを使用する、型を取得するのでletではない
type objectType = typeof object1;

let object3:objectType = {
  name:'Ham-san',
  age:43
}

// インターフェースで型定義
interface ObjectInterface{
  name:string;
  age:number;
}

let object4:ObjectInterface = {
  name:'Ham-san',
  age:43
}