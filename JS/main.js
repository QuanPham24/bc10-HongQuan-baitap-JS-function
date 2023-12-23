/**
 * Bai tap so 2 tinh tien dien
 * B1: nhan du lieu tu user name and Kw
 * B2: viet function tinh tien dien
 * + store data from user in a variable
 * + Using If-else to calculate total for user
 * +Cong thuc:
 * 0-50 = soKw * gia50Kw dau
 * 
 * 50-100 = gia50KwDau + (soKw -50) * giaKwTu50-100;
 * 
 * 100-200 = gia50KwDau + 50 * giaKwTu50-100 + (soKw - 100) *giaKwTu100-200
 * 
 * 200-350 = gia50KwDau + 50 * giaKwTu50-100 + 100     *giaKwTu100-200 + (soKw-200) * giaKwTu200-350
 * 
 * tren 350 = gia50KwDau + 50 * giaKwTu50-100 + 100     *giaKwTu100-200 + 150 * giaKwTu200-350 + (soKw - 350) * giaKwTren#50;
 * B3: Output result
 */



function TinhTienDien(){
    var name = document.getElementById("Ten").value;
    // console.log(name);
    var soKw = document.getElementById("KW").value*1;
    var gia50KwDau =500;
    var gia50Tu100Kw = 650;
    var gia100Tu200Kw = 850;
    var gia200Tu350Kw = 1100;
    var giaTren350Kw = 1300;
    var totalBill = 0;
    if(soKw <= 50){
        totalBill = soKw * gia50KwDau;
    }else if(soKw <= 100){
        totalBill = 50 * gia50KwDau + (soKw -50) * gia50Tu100Kw;
    }else if(soKw <= 200){
        totalBill = 50 * gia50KwDau + 50 * gia50Tu100Kw + (soKw - 100) *gia100Tu200Kw;
    } else if(soKw <= 350){
        totalBill = 50 * gia50KwDau + 50 * gia50Tu100Kw + 100 *gia100Tu200Kw + (soKw - 200) *gia200Tu350Kw;
    } else{
        totalBill = 50 * gia50KwDau + 50 * gia50Tu100Kw + 100 *gia100Tu200Kw + 150 * gia200Tu350Kw + (soKw-350) * giaTren350Kw;
    }

    document.getElementById("result").innerText = `Ten: ${name} \n Bill: ${totalBill}`;
}



