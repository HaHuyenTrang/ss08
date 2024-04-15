function Types(obj: any): boolean{
    return(
        typeof obj.name ==="string" &&
        typeof obj.age ==="number" &&
        typeof obj.address ==="string"
    );
}
type obj={
    name:string,
    age:number,
    address:string,
}

let std ={
    name:"Trang",
    age:18,
    address:"sơn la",
}
console.log(Types(std));
let c ={
    name:1,
    age:18,
    address:"sơn la",
}
console.log(Types(c));