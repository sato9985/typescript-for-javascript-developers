export{};

// function bmi(height:number,wight:number):number{
//   return wight / (height * height);
// }

let bmi: (height: number, wight: number) => number
 = (height:number,wight:number):number =>{
  return wight / (height * height);
}
console.log(bmi(1.78,68));