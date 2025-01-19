//ENUMS

enum RType {
    SUCCESS,
    FAILURE,
    UNAUTHENTICATED,
    FORBIDDEN,
}

interface APIResponse<T>{
    status: number;
    type: RType;
    data: T;
}

const response2: APIResponse<string> = {
    status: 200,
    type: RType.UNAUTHENTICATED,
    data: 'test',
}
console.log(response2);

//TUPLES
let a= [3, 'hello', {p: 3}];
//a[1]= 3;

let b:  [number, string, object]= [4, 'world', {t:1}]