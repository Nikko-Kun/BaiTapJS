/**
 * BÀI TẬP 2: TÍNH TIỀN ĐIỆN
 */


function calcPrice() {


    // B1: Tạo biến và lấy giá trị từ form
    
    var cusName = document.getElementById('tenKH').value;
    var kwNum = +document.getElementById('soKw').value;

    

    total2 = 0;

    remain2 = 0;

    console.log(typeof kwNum);
    
    if (kwNum > 0 && kwNum <= 50) {
    
     total2 = kwNum * 500;  
    
    }

    else if (kwNum > 50 && kwNum <= 100 ) {

    remain2 = kwNum - 50;

    total2 = (remain2 * 650) + 25000;

    }
    
    else if (kwNum > 100 && kwNum <= 200) {

    remain2 = kwNum - 100;
    
    total2 = (remain2 * 850) + 57500;
    
    }

    else if (kwNum > 200 && kwNum <= 350) {

    remain2 = kwNum - 200;
        
    total2 = (remain2 * 1100) + 142500; 
        
    }

    else if (kwNum > 350) {

    remain2 = kwNum - 350;
            
    total2 = (remain2 * 1300) + 307500;
            
    }

    else {
        total2 = 0;
    }
    
    document.getElementById('result2').innerHTML = 'Tiền điện của khách hàng: '+ cusName + ' là ' + total2.toLocaleString() + ' vnd';


    }
    document.getElementById('btnCalcPrice').onclick = calcPrice;



