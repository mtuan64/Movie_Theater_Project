import { api } from ".";

export const getUserWithPagination = ({ soTrang, soPhanTuTrenTrang }) => {
  return api({
    method: "get",
    url: "/QuanLyNguoiDung/LayDanhSachNguoiDungPhanTrang",
    params: {
      MaNhom: "GP01",
      soTrang,
      soPhanTuTrenTrang,
    },
  });
};

export const createUser = (taiKhoan, matKhau, email, soDt, hoTen) => {
  return api({
    method: "post",
    url: "QuanLyNguoiDung/DangKy",
    data: {
      maNhom: "GP01",
      taiKhoan,
      matKhau,
      email,
      soDt,
      hoTen,
    },
  });
};

export const getUser = (taiKhoan) => {
    return api({
        method:"post",
        url: "QuanLyNguoiDung/LayThongTinNguoiDung",
        params: {
            taiKhoan,
        }
    })
}
