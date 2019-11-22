function Validation() {
  this.kiemTraRong = function(inputVal, spanID, message) {
    if (inputVal === "") {
      //khong hợp lệ
      getE(spanID).style.display = "block";
      getE(spanID).innerHTML = message;
      return false;
    }
    // hop le
    getE(spanID).style.display = "none";
    getE(spanID).innerHTML = "";
    return true;
  };

  this.kiemTraMaTrung = function(inputVal, spanID, message, mangNV) {
    // trung ma nhan vien tra vè true
    // some nếu có tồn tại true k là false
    var exist = mangNV.some(function(item) {
      return inputVal === item.msnv;
    });
    if (exist) {
      //khong hop le
      getE(spanID).style.display = "block";
      getE(spanID).innerHTML = message;
      return false;
    }
    getE(spanID).style.display = "none";
    getE(spanID).innerHTML = "";
    return true;
  };

  this.kiemTraChuoi = function(inputVal, spanID, message) {
    var pattern = new RegExp(
      "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$"
    );

    if (pattern.test(inputVal)) {
      //hople
      getE(spanID).style.display = "none";
      getE(spanID).innerHTML = "";
      return true;
    }
    getE(spanID).style.display = "block";
    getE(spanID).innerHTML = message;
    return false;
  };

  this.kiemTraEmail = function(inputVal, spanID, message) {
    var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (inputVal.match(pattern)) {
            //hop le
            getE(spanID).style.display = "none";
            getE(spanID).innerHTML = "";
            return true;
        } else {
            //khong hop le
            getE(spanID).style.display = "block";
            getE(spanID).innerHTML = message;
            return false;
        }
  };

  this.kiemTraPass = function(inputVal, spanID, message) {
    var pattern = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})"
    );

    if (pattern.test(inputVal)) {
      //hople
      getE(spanID).style.display = "none";
      getE(spanID).innerHTML = "";
      return true;
    }
    getE(spanID).style.display = "block";
    getE(spanID).innerHTML = message;
    return false;
  };

  this.kiemTraChucVu = function(eleChucVu, spanID, message){
    if(getE(eleChucVu).selectedIndex !==0){
      //hople
      getE(spanID).style.display = "none";
      getE(spanID).innerHTML = "";
      return true;
    }

    getE(spanID).style.display = "block";
    getE(spanID).innerHTML = message;
    return false;
  }

  this.kiemTraDoDaiKiTu = function(inputVal, spanID, message,min,max){
    if(inputVal.length >= min && inputVal.length <= max){
      getE(spanID).style.display = "none";
      getE(spanID).innerHTML = "";
      return true;
    }

    getE(spanID).style.display = "block";
    getE(spanID).innerHTML = message;
    return false;
  }
}
