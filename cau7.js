let a =+prompt("nhap a ");
let b =+prompt("nhap b ");
let c =+prompt("nhap c ");
let x = (b*b)-4*a*c;
if(x<0){
    console.log("Phuong trinh vo nghiem");
}else if(X=0){
    let x1 = -b/(2*a);
    console.log("phuong trinh co nghiem kep bang:",x1)
}else{
    let x1 =(-b+(Math.sqrt(x)))/2*a;
    let x2 =(-b-(Math.sqrt(x)))/2*a;
    console.log("Phuong trinh co nghiem 1 ",x1);
    console.log("Phuong trinh co nghiem 2 ",x2);
}