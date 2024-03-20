import { api } from ".";

export const login = (taiKhoan, matKhau) => {
  return api({
    method: "POST",
    url: "QuanLyNguoiDung/DangNhap",
    data: {
      taiKhoan,
      matKhau,
    },
  });
};

export const getMe = () => {
  return api({
    method: "POST",
    url: "QuanLyNguoiDung/ThongTinTaiKhoan",
    
  });
}