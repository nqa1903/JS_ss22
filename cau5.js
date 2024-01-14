var a = +prompt("nhap a");
var b = +prompt("nhap b");
var no =-b/a;
if(a==0){
    console.log("phuong trinh vo nghiem");
}else if (b==0){
    console.log("phương trình co nghiem duy nhat x = 0");
}else{
    console.log(`phương trinh co nghiem la x=${no}`);
}