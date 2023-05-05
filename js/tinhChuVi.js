/**
 * BÀI TẬP 4: TÍNH CHU VI, DIỆN TÍCH HÌNH CHỮ NHẬT
 */


function calc4() {


var numLength = +document.getElementById('chieuDai').value;
var numWidth = +document.getElementById('chieuRong').value;

var dienTich = numLength * numWidth;

var chuVi = (numLength + numWidth) * 2;

document.getElementById('result4').innerHTML = 'Diện tích: ' +dienTich + '.  Chu vi: ' +chuVi;


}
document.getElementById('btnCalc4').onclick = calc4;