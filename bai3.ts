function calculateArea(obj:  Square | Circle): number{
   if( "sideLength" in obj){
    return obj.sideLength **2;
   }else if("radius" in obj){
    return Math.PI * obj.radius **2;
   }else{
    throw new Error("  ");
   }
} 
 
type Square ={
    sideLength: number,
};
type Circle ={
    radius: number,
};

let square: Square ={
    sideLength: 3,
};

let circle: Circle = {
    radius: 5,
};