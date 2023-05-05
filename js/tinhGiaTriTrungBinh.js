/**
 * BÀI TẬP 1: TÍNH LƯƠNG
 */


function calc2() {


// B1: Tạo biến và lấy giá trị từ form

var num1 = +document.getElementById('soThu1').value;

var num2 = +document.getElementById('soThu2').value;

var num3 = +document.getElementById('soThu3').value;

var num4 = +document.getElementById('soThu4').value;

var num5 = +document.getElementById('soThu5').value;



var total2 = (num1 + num2 + num3 + num4 + num5) / 5;


document.getElementById('result2').innerHTML = 'Trung bình cộng của 5 số là: ' + total2;


}
document.getElementById('btnCalc2').onclick = calc2;