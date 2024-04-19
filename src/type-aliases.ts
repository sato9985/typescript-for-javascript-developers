export{};

type Mojiretu = string;

const exsapmle={
  name:'Hum',
  age:43
};

// 型を定義（exsapmleが変われば修正が必要）
type Profile ={
  name:string,
  age:number
};

const exsapmle2: Profile={
  name:'Hum',
  age:43
};

// 型を定義（exsapmleが変わっても修正不要）
type Profile2 = typeof exsapmle;

