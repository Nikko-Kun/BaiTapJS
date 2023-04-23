/**
 * BÀI TẬP 3: TÍNH TIỀN THUẾ
 */


function calcPriceTax() {


    // B1: Tạo biến và lấy giá trị từ form

    var taxName = document.getElementById('tenNguoiNopThue').value;
    var taxIncome = +document.getElementById('tongThuNhap').value;
    var taxPeo = +document.getElementById('soNguoiPhuThuoc').value;


    remain3 = 0;

    total3 = 0;

    tax3 = taxIncome - (4e+6) - (taxPeo * (1.6e+6));

    console.log(typeof kwNum);

    if (tax3 > 0 && tax3 <= 60e+6) {

        total3 = tax3 * 0.05;

    }

    else if (tax3 > 60e+6 && tax3 <= 120e+6) {

        remain3 = tax3 - (60e+6);

        total3 = (remain3 * 0.1) + 3e+6;

    }

    else if (tax3 > 120e+6 && tax3 <= 210e+6) {

        remain3 = tax3 - (120e+6);

        total3 = (remain3 * 0.15) + 9e+6;

    }

    else if (tax3 > 210e+6 && tax3 <= 384e+6) {

        remain3 = tax3 - (210e+6);

        total3 = (remain3 * 0.2) + 22.5e+6;

    }

    else if (tax3 > 384e+6 && tax3 <= 624e+6) {

        remain3 = tax3 - (384e+6);

        total3 = (remain3 * 0.25) + 57.3e+6;

    }

    else if (tax3 > 624e+6 && tax3 <= 960e+6) {

        remain3 = tax3 - (624e+6);

        total3 = (remain3 * 0.3) + 117.3e+6;

    }

    else if (tax3 > 960e+6) {

        remain3 = tax3 - (960e+6);

        total3 = (remain3 * 0.35) + 218.1e+6;

    }



    console.log(tax3, remain3, total3)

    document.getElementById('result3').innerHTML = 'Tiền thuế thu nhập cá nhân của: ' + taxName + ' là ' + total3.toLocaleString() + ' vnd';


}
document.getElementById('btnCalcTax').onclick = calcPriceTax;



