//GENERICS

const addID = <
  T extends {
    name: string;
    age: number;
  }
>(
  obj: T
) => {
  let id = Math.floor(Math.random() * 100);
  return { ...obj, id };
};
let user=addID({
    name: 'Mashrafi',
    age: 40,
    country: 'Bangladesh'
})

addID(user);

//generics of interfaces
/*interface APIResponse<T>{
    status: number;
    type: string;
    data: T;
}

const response1: APIResponse<object>={
    status:200,
    type: 'good',
    //data:''
    data: {
        name: 'test' ,
    }
}*/