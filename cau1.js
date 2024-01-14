var a = +prompt("nhap a");
var b = +prompt("nhap b");
if(a%b==0){
    console.log("a chia het cho b");
}else if(b%a==0){
    console.log("b chia het cho a");
}else{
    console.log("hai so ko chia het cho nhau");
}