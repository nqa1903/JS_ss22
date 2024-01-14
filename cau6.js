let a = +prompt("nhập vào so co 4 chu so");
let don_vi = a%10;
let chuc = parseInt((a%100)/10);
let tram = parseInt((a%1000)/100);
let nghin = parseInt((a%10000)/1000);
console.log(don_vi);
console.log(chuc);
console.log(tram);
console.log(nghin);