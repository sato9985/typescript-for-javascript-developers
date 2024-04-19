export{};

type Pitcher1 ={
  throwingSpeed:number;
}

type Batter ={
  battingAverage: number;
}

const DaimajinSasaki:Pitcher1 ={
  throwingSpeed: 154
}

const OchiaiHiromitu:Batter={
  battingAverage:0.367
}

// type TwoWayPlayer ={
//   throwingSpeed:number;
//   battingAverage:number;
// }

// 型を追加できる
type TwoWayPlayer = Pitcher1 & Pitcher1;

const OtaniShohei = {
  throwingSpeed:165,
  battingAverage:0.266
}