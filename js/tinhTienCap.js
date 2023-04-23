/**
 * BÀI TẬP 4: TÍNH TIỀN CÁP
 */

// B1: Tạo biến và lấy giá trị từ form

var cabCus = document.getElementById('loaiKH').value;
var cabCode = document.getElementById('maKhachHang').value;
var cabChannel = +document.getElementById('soKenh').value;
var cabConnect = +document.getElementById('soKetNoi').value;


function hideForm1() {

    document.getElementById('soKetNoi').style.display = "none";

}


function showForm1() {

    if (document.getElementById('loaiKH').value != 'Doanh nghiệp') {

        document.getElementById('soKetNoi').style.display = "none";
    }
    else
        document.getElementById('soKetNoi').style.display = "block";

}




function calcPriceCab() {

    var cabCus = document.getElementById('loaiKH').value;
    var cabCode = document.getElementById('maKhachHang').value;
    var cabChannel = +document.getElementById('soKenh').value;
    var cabConnect = +document.getElementById('soKetNoi').value;





    total4 = 0;


    if (cabCus == 'Nhà dân') {

        total4 = (cabChannel * 7.5) + 25;



    }

    else if (cabCus == 'Doanh nghiệp' && cabConnect <= 10) {

        total4 = (cabChannel * 50) + 90;

    }
    else if (cabCus == 'Doanh nghiệp' && cabConnect > 10) {


        total4 = (cabChannel * 50) + 90 + ((cabConnect - 10) * 5);

    }

    document.getElementById('result4').innerHTML = 'Tiền cáp của khách hàng: ' + cabCode + ' là ' + total4.toLocaleString() + ' usd';


}

showForm1();

document.getElementById('btnCalcChannel').onclick = calcPriceCab;
document.getElementById('loaiKH').onchange = showForm1;
document.getElementById('loaiKH').onload = hideForm1;








