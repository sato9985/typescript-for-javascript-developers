import axios from "axios";
export{};

let url:string = 'https://udemy-utils.herokuapp.com/api/v1/articles?token=token123';

axios.get(url)
  .then(function (response) {
    // 返却される型がわからないためany型となる⇒適切な型設定が必要
    //let data:any = response.data
    interface Article{
      id:number;
      title:string;
      description:string;
    }
    let data: Article[];
    data = response.data;
    data =[
      {
        id:1,
        title:'title',
        description:'description'
      },
      {
        id:1,
        title:'title',
        description:'description'
      }
    ];
    console.log({data});
  })