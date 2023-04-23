/**
 * BÀI TẬP 1: QUẢN LÝ TUYỂN SINH
 */


function calcPoint() {


// B1: Tạo biến và lấy giá trị từ form

var checkPoint = +document.getElementById('diemChuan').value;
var areaPoint = +document.getElementById('khuVuc').value;
var typePoint = +document.getElementById('doiTuong').value;
var point1 = +document.getElementById('diem1').value;
var point2 = +document.getElementById('diem2').value;
var point3 = +document.getElementById('diem3').value;


pass1 = point1 * point2 * point3;

sumPoint = point1 + point2 + point3;

total = areaPoint + typePoint + sumPoint;

if (pass1 <= 0 || total < checkPoint){

    document.getElementById('result').innerHTML = 'Bạn đã rớt. Do có điểm nhỏ hơn hoặc bằng 0';

}

else {

    document.getElementById('result').innerHTML = 'Bạn đã đậu. Tổng điểm: '+total.toLocaleString();

}


}
document.getElementById('btnCalcPoint').onclick = calcPoint;