let a = +prompt("nhap a");
let b = +prompt("nhap b");
let dau = prompt("nhap dau");
let kq = +prompt("ket qua");
switch(dau){
    case '+':
        if(a+b==kq){
            console.log("hop le");
        }else{
            console.log("ko hop le");
        }
        break;
    case '-':
        if(a-b==kq){
            console.log("hop le");
        }else{
            console.log("ko hop le");
        }
        break;
    case '*':
        if(a*b==kq){
            console.log("hop le");
        }else{
            console.log("ko hop le");
        }
        break;
    case '/':
        if(a/b==kq){
            console.log("hop le");
        }else{
            console.log("ko hop le");
        }
        break;
    default:
        console.log("ko hop le");
        break;
}