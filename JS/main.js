/**
 * Bai tap so 1: Diem tuyen sinh
 * KHoi1: nhan du lieu :diem chuan, khu vuc, doi tuong, diem cua 3 mon
 * 
 * khoi 2:
 * + create function TongKet()
 * + create variable and store values for: diem chuan, khu vuc, doi tuong, diem cua mon1 , mon2, mon3
 * + create variables for diem cong cua khu vuc va doi tuong
 * + create variable for diem tong ket
 * + neu co 1 mon bang 0 in ra output
 * + so sanh voi diem chuan va output ket qua
 * 
 * khoi 3:output and display
 */

function diemCongKhuVuc(khuVuc){
    var giaTri = 0;
    switch (khuVuc){
        case "A": 
            giaTri = 2;
            break;
        case "B": 
            giaTri = 1;
            break;
        case "C": 
            giaTri = 0.5;
            break;
        default:
            giaTri = 0;
    }
    return giaTri;
}

function diemCongDoiTuong(doiTuong){
    var giaTri = 0;
    switch (doiTuong){
        case "1": 
            giaTri = 2.5;
            break;
        case "2": 
            giaTri = 1.5;
            break;
        case "3": 
            giaTri = 1;
            break;
        default:
            giaTri = 0;
    }
    return giaTri;
}

function TongKet(){
    var diemChuan = document.getElementById("diemChuan").value *1;
    console.log(diemChuan);
    var khuVuc = document.getElementById("area").value;
    var doiTuong = document.getElementById("object").value;
    var diem1= document.getElementById("score1") .value*1;
    var diem2= document.getElementById("score2") .value*1;
    var diem3= document.getElementById("score3") .value*1;

    var diemKhuVuc = diemCongKhuVuc(khuVuc);
    var diemDoiTuong = diemCongDoiTuong(doiTuong);
    var tongDiem = diem1 + diem2 + diem3 + diemKhuVuc + diemDoiTuong;
    var tong = "";

    if(diem1 <= 0 || diem2 <=0 || diem3 <=0){
        tong = "Ban truot, ban co mot hay nhieu mon bang 0 hoac nho hon 0";
    }else if (tongDiem >= diemChuan){
        tong = "Ban da dau, xin chuc mung";
    }else{
        tong = "Ban da truot do diem thap hon diem chuan";
    }

    document.getElementById("tongKet").innerText = tong;
}






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



