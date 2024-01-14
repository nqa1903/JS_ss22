var month = +prompt("nhap thang");
if(0<month&&month<13){
if(month===1 || month===3 || month===5 || month===7 || month===8 || month===10 || month===12){
    console.log("tháng có 31 ngày ")
}else if(month===2){
    console.log("tháng có 28 29 ngày")
}else{
    console.log("tháng có 30 ngày")
}
}  