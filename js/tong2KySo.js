/**
 * BÀI TẬP 5: TÍNH TỔNG 2 KÝ SỐ
 */


function calc5() {


var Input2Num = +document.getElementById('nhapSo2ChuSo').value;

var tens = Math.floor(Input2Num/10);

var units = Input2Num % 10;

var total5 = tens + units;

document.getElementById('result5').innerHTML = 'Tổng 2 ký số là: ' +total5;

}
document.getElementById('btnCalc5').onclick = calc5;