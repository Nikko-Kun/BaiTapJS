/**
 * BÀI TẬP 3: QUY ĐỔI TIỀN
 */


function calc3() {


var numUSD = document.getElementById('tienUSD').value;

var total3 = numUSD * 23500;

document.getElementById('result3').innerHTML = 'Số tiền được đổi là: ' + total3.toLocaleString() + ' vnd';


}
document.getElementById('btnCalc3').onclick = calc3;