/*
    Union Types:
Union Types cho phép kết hợp nhiều kiểu dữ liệu thành một kiểu dữ liệu duy nhất.
Kiểu dữ liệu của biến hoặc tham số có thể là một trong các kiểu được liệt kê.
Khi thực hiện các phép toán trên biến, bạn chỉ có thể truy cập các thành viên chung của các kiểu trong Union Types.
Sử dụng dấu gạch đứng "|" để chỉ định các kiểu trong Union Types.
*/ 
type num = number | string;

function print(value: num): void {
  console.log(value);
}

print(18); 
print("Trang"); 

/*
    Intersection Types:
Intersection Types cho phép kết hợp các kiểu dữ liệu lại với nhau để tạo ra một kiểu dữ liệu mới có tất cả các thành viên của các kiểu gốc.
Kiểu dữ liệu của biến hoặc tham số phải có tất cả các thành viên của các kiểu gốc.
Khi thực hiện các phép toán trên biến, bạn có thể truy cập tất cả các thành viên của các kiểu trong Intersection Types.
Sử dụng dấu gạch ngang "|" để chỉ định các kiểu trong Intersection Types.
*/ 

type std = {
    name: string;
    age: number;
  };
  
  type obj2 = {
    year: number;
    month: number;
  };
  
  let students: typ ={
    name: "trang",
    age: 18,
    year: 2005,
    month: 6,
  }
  type typ = std & obj2;