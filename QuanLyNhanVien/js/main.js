// b1: clases
// b2: them nhan vien > consolog mang nhan vien

function getE(id) {
  return document.getElementById(id);
}

var danhSachNhanVien = new DanhSachNhanVien();
var validation = new Validation();

getLocalStorrage();

getE("btnThem").addEventListener("click", function() {
  getE("btnCapNhat").style.display = "none";
  getE("btnThemNV").style.display = "block";
  getE("msnv").removeAttribute("disabled", true);
  risetInput();
});



document.getElementById("btnThemNV").addEventListener("click", themNhanVien);

function themNhanVien() {
  var _msnv = getE("msnv").value;
  var _name = getE("name").value;
  var _email = getE("email").value;
  var _password = getE("password").value;
  var _datepicker = getE("datepicker").value;
  var _chucvu = getE("chucvu").value;

  var isValid = true;

  //ma nv

  //isValid = isValid && validation.kiemTraRong
  isValid &=
    validation.kiemTraRong(_msnv, "tbMaNV", "ma nhan vien khong duoc trung") &&
    validation.kiemTraMaTrung(
      _msnv,
      "tbMaNV",
      "ma nhan vien khong duoc trung",
      danhSachNhanVien.mangNV
    ) && validation.kiemTraDoDaiKiTu(_msnv, "tbMaNV", "(*) kí tự từ 6 đến 12",6,12);

  //ten nv
  isValid &=
    validation.kiemTraRong(_name, "tbTen", "ten nhan vien khong duoc trung") &&
    validation.kiemTraChuoi(_name, "tbTen", "ten nhan vien khong hop le");
  //emai
  isValid &=
    validation.kiemTraRong(
      _email,
      "tbEmail",
      "email nhan vien khong duoc trung"
    ) &&
    validation.kiemTraEmail(_email, "tbEmail", "emal nhan vien khong hop le");
  //pass
  isValid &=
    validation.kiemTraRong(
      _password,
      "tbMatKhau",
      "pass nhan vien khong duoc để trống"
    ) &&
    validation.kiemTraPass(
      _password,
      "tbMatKhau",
      "mat khau nhan vien khong hop le"
    );
    //chuc vu

    isValid &= validation.kiemTraChucVu("chucvu", "tbChucVu", "vui long chon chuc vu");



  if (isValid) {
    var nhanVien = new NhanVien(
      _msnv,
      _name,
      _email,
      _password,
      _datepicker,
      _chucvu
    );

    danhSachNhanVien.themNV(nhanVien);

    console.log(danhSachNhanVien.mangNV);

    hienThi();
    setLocalStorrage();

    getE("btnDong").click();
  }
}

function risetInput() {
  getE("msnv").value = "";
  getE("name").value = "";
  getE("email").value = "";
  getE("password").value = "";
  getE("datepicker").value = new Date().toLocaleDateString();
  getE("chucvu")[0].selected = true;
}

function hienThi(mang = danhSachNhanVien.mangNV) {
  var content = "";
  // var maNV = 123;
  var tbody = getE("tableDanhSach");
  // tbody.innerHTML = `<tr><td>${maNV}</td></tr>`;

  mang.map(function(item, index) {
    // console.log(item.msnv+" "+index);

    content += `<tr>
        <td>${item.msnv}</td>
        <td>${item.name}</td>
        <td>${item.email}</td>
        <td>${item.datepicker}</td>
        <td>${item.chucvu}</td>
        <td>
                <button data-toggle="modal" data-target="#myModal" class="btn btn-success" onclick="suaNhanVien('${item.msnv}')">Sửa</button>
                <button class="btn btn-danger" onclick="xoaNhanVien('${item.msnv}')">Xóa</button>

            
            </td>
        </tr>`;
  });

  tbody.innerHTML = content;
}


function setLocalStorrage(){
  // khi luu chuyen thanh chuỗi
  localStorage.setItem("DSNV",  JSON.stringify(danhSachNhanVien.mangNV));


}

function getLocalStorrage(){
  // khi láy lên chuyên lại json
  if(localStorage.getItem("DSNV")){
  danhSachNhanVien.mangNV = JSON.parse(localStorage.getItem("DSNV"));
  hienThi();
  }
}


// chức năng xoa nhân viên
function xoaNhanVien(maNV){
  danhSachNhanVien.xoaNhanVien(maNV);
  console.log(danhSachNhanVien.mangNV);
  hienThi();
  setLocalStorrage();
}

// sua nhan vien
function suaNhanVien(maNV){
  getE("btnCapNhat").style.display = "block";
  getE("btnThemNV").style.display = "none";
  var nhanvien = danhSachNhanVien.layThongTinNhanVien(maNV);

  console.log(nhanvien);
  // đỏ dữ liệu ra modal
  getE("msnv").value = nhanvien.msnv;
  getE("msnv").setAttribute("disabled", true);
  getE("name").value = nhanvien.name;
  getE("email").value = nhanvien.email;
  getE("password").value = nhanvien.password;
  getE("datepicker").value = nhanvien.datepicker;
  getE("chucvu").value = nhanvien.chucvu;
}

//cap nhap nhan vien
getE("btnCapNhat").addEventListener("click", function(){
  var _msnv = getE("msnv").value;
  var _name = getE("name").value;
  var _email = getE("email").value;
  var _password = getE("password").value;
  var _datepicker = getE("datepicker").value;
  var _chucvu = getE("chucvu").value;

  var nhanVien = new NhanVien(_msnv,_name,_email,_password,_datepicker,_chucvu);
  console.log(nhanVien);

  danhSachNhanVien.capNhatNhanVien(nhanVien);
  hienThi();
  setLocalStorrage();
  getE("btnDong").click();
})

//tim kiém

getE("searchName").addEventListener("keyup", function(){
  var timKiem = getE("searchName").value;
  var mangTimKiem =danhSachNhanVien.tiemKiemNhanVien(timKiem);
  hienThi(mangTimKiem);

});