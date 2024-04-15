function result(arr: number  | number[]): number | number[]{
    if(typeof arr === "number"){
        return arr*2
    }else if(Array.isArray(arr)){
        return arr.map((num) => num**2);
    }else{
        throw new Error("")
    }
}