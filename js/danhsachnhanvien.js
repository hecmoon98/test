function DanhSachNhanVien() {
    //thuoc tinh
  
    this.mangNV = [];
  
    //phuong thuc
    this.themNV = function(NhanVien){
        this.mangNV.push(NhanVien);
    }

    // xoa nhan vien
    this.timViTri = function(maNV){
        var viTri = -1;
        this.mangNV.map(function(item, index){
            if(item.msnv === maNV){
                viTri = index;
            }
        });
        return viTri;

    };
    this.xoaNhanVien = function(maNV){
        var viTri = this.timViTri(maNV);

        if(viTri !== -1){
            //tim thay
            this.mangNV.splice(viTri, 1);
        }
    };
  }

  /// cach mới
  DanhSachNhanVien.prototype.layThongTinNhanVien = function(maNV){
    var viTri = this.timViTri(maNV);
    var nhanVien;
    if(viTri !== -1){
        nhanVien = this.mangNV[viTri];
    }

    return nhanVien;
  }
  DanhSachNhanVien.prototype.capNhatNhanVien = function(nhanVien){
      console.log(nhanVien)
    var viTri = this.timViTri(nhanVien.msnv);
    if(viTri !== -1){
        this.mangNV[viTri] = nhanVien;
    }
  }


  DanhSachNhanVien.prototype.tiemKiemNhanVien = function(chuoiTimKiem){
      // cach 1
      // tạo ra mảng tiềm kiếm đầu tiên cho nó là rổng
      // duyệt mảng nhan viên
      // nếu như chuỗi tim kiếm tồn tại trông mảng / indexOf() toLowerCase: chuyển chuỗi thành thường
      // hàm trả về mảng tim kiếm

    //   var mangTimKiem = [];
    //   this.mangNV.map(function(item,index){
    //     if(item.name.toLowerCase().indexOf(chuoiTimKiem.toLowerCase()) > -1){
    //         mangTimKiem.push(item);

    //     }
        
       
    //   });
    //   return mangTimKiem;
   // cach 2
    return this.mangNV.filter(function(item){
        return item.name.toLowerCase().indexOf(chuoiTimKiem.toLowerCase()) > -1;
    });

  };


//   danhsachNV.prototype.timKiemNhanVien = function(chuoiTimKiem) {

//     /**
//      * 0 tao mang tim kiem
//      * 1 duyet mang nv
//      * 2 neu chuoi tim kiem ton tai trong mang indexOf() 
//      * 3 return vao mang tim kiem
//      */
//     var mangTimKiem = [];
//     this.mangNV.map(function(item) {
//         if(item.tenNV.toLowerCase().indexOf(chuoiTimKiem.toLowerCase()) > -1){
//             mangTimKiem.push(item);
//         }    
//     });
//     return mangTimKiem;
// };



