/**
 * QUẢN LÝ TUYỂN SINH
 */


function calc1() {

  var standPoint = +document.getElementById('diemChuan').value;
  var areaPoint = +document.getElementById('khuVuc').value;
  var stylePointPeo = +document.getElementById('doiTuong').value;
  var point1 = +document.getElementById('diem1').value;
  var point2 = +document.getElementById('diem2').value;
  var point3 = +document.getElementById('diem3').value;

  var point = point1 * point2 * point3;

  var total1 = point1 + point2 + point3 + areaPoint + stylePointPeo;


  if (point > 0 && total1 > standPoint) {

    document.getElementById('result1').innerHTML = 'Bạn đã đậu.' + ' Tổng điểm của bạn là: ' + total1;

  }

  else {

    document.getElementById('result1').innerHTML = 'Bạn đã rớt. Do có điểm nhỏ hơn hoặc bằng 0';
  }

  console.log(standPoint, areaPoint, stylePointPeo, point1, point2, point3);

  console.log(total1, point)
}
document.getElementById('btnCalcPoint').onclick = calc1;  