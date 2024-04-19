export{};

const kansu = () => 43;

let numberAny = kansu();
let numberUnknown:unknown = kansu();

let sumAny = numberAny + 10;
// タイプガード、型ガード
if(typeof numberUnknown === 'number'){
  let sumUnknown = numberUnknown + 10;
}

