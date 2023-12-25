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




/**
 * Bai tap 3: Tinh Thue THu Nhap hang nam
 * Khoi 1: nhan du lieu tu user: name, thu nhap, nguoi phu thuoc
 * 
 * Khoi 2: write function Tax()
 * + store data into variable: fullName,ThuNhap, nguoiPhuThuoc
 * + thuNhapChiuThue = thuNhap - 4tr - nguoiPhuThuoc * 1.6tr
 * + Compare and get value for % thue
 * + tienThue = thuNhapChiuThue * % thue
 * 
 * khoi 3: display output
 */

function thue(income){
    // var taxPercent = 0;
    if(income <= 6000000){
        return 0.05;
    }else if (income <= 120000000){
        return 0.1;
    }else if (income <= 210000000){
        return 0.15;
    }else if (income <= 384000000){
        return 0.2;
    }else if (income <= 624000000){
        return 0.25;
    }else if (income <= 960000000){
        return 0.3;
    }else{
        return 0.35;
    }
}

function Tax(){
    var fullName = document.getElementById("name").value;

    var thuNhap = document.getElementById("incomePerYear").value * 1;

    var childDependent = document.getElementById("dependent").value * 1;

    

    var thuNhapChiuThue = thuNhap - (4e+6) - childDependent *(1.6e+6);

    var percentThue = thue(thuNhapChiuThue);
    var tienThue = thuNhapChiuThue * percentThue;

    document.getElementById("thue").innerText="Ho va Ten: " + fullName + "\n Tien Thue: " + new Intl.NumberFormat().format(tienThue) + " VND"; 
}


/**bai tap so 4: tinh tien cap
 * khoi 1: nhan du lieu tu user: customer type, ma khach hang, so kenh cao cap
 * 
 * khoi 2: viet function tinh bill
 * + var customerType = type khach hang
 * + var numbKenh = so kenh cao cap
 * + var ma = ma khach hang
 * + tao bien cho phi dich vu: 
 *  ++nha dan: 20.5
 *  ++doanh nghiep: 75 cho 10 ket noi dau( <10 van dong gia), 5 cho moi ket noi them: (so ket noi them - 10) * 5
 * + phi dich vu cho kenh cao cap:
 *  ++: nha dan: (sokenh) * 7.5
 *  ++ doanh nghiep: (soKenh) * 50
 * + phi xu ly: nha dan(4.5) , doanh nghiep(15)
 * khoi 3: output
 */
// function toggle an/hien vung so ket noi khi type = business
function handleCustomerChange() {
    var customerType = document.getElementById("type").value;
    var maKetNoi = document.getElementById("ketNoi");
  
    if (customerType === "Business") {
      maKetNoi.style.display = "block";
    } else {
      maKetNoi.style.display = "none";
    }
  }

function tienXuLy(type){
    if(type == "personal"){
        return 4.5;
    }else if (type == "Business"){
        return 15;
    } else {
        return 0;
    }
}
function tienDichVu(type,numbConnect){
    var giaTien = 0;
    if(type == "personal"){
        giaTien = 20.5;
    }else if (type == "Business"){
        if(numbConnect <= 10){
            giaTien = 75;
        }else{
            giaTien = 75 + (numbConnect - 10) * 5;
        }
    } else {
        giaTien = 0;
    }
    return giaTien;
}

function tienMoiKenh(type){
    if(type == "personal"){
        return 7.5;
    }else if (type == "Business"){
        return 50;
    } else {
        return 0;
    }
}

function tienCap(){
    var customerType = document.getElementById("type").value;
    var customerNumber = document.getElementById("codeCustomer").value;
    var soKenh = document.getElementById("premiumChannel").value * 1;

    var soKetNoi = document.getElementById("codeConnect").value * 1;

    var phiXuLy = tienXuLy(customerType);
    var phiDichVu = tienDichVu(customerType, soKetNoi);
    var phiKenh = tienMoiKenh(customerType);

    var bill = phiXuLy + phiDichVu + phiKenh * soKenh;
    document.getElementById("billCap").innerText = "Ma khach hang: " + customerNumber + "\nHoa Don:$ " + bill.toFixed(2);
}
