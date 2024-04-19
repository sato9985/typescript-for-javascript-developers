export{};

function error(message:string): string{
  // throw new Error(message);
  let bool :boolean = true;
  if(bool = true){
    throw new Error(message);
  }
  return 'test';
}

try {
  let result =error('test');
  console.log({result});
}
catch(error){
  console.log({error})
}