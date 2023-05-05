/**
 * BÀI TẬP 1: TÍNH LƯƠNG
 */


function calc1() {

var salary1day = document.getElementById('luong1Ngay').value;

var salaryDayNum = document.getElementById('soNgayLam').value;

var total1 = salary1day * salaryDayNum;

document.getElementById('result1').innerHTML = 'Lương của bạn nhận được là: ' + total1.toLocaleString();


}
document.getElementById('btnCalc1').onclick = calc1;