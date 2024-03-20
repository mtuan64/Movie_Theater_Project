import axios from "axios";

export const api = axios.create({
  baseURL: "https://movienew.cybersoft.edu.vn/api/",
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if(token){
      config.headers.Authorization = `Bearer ${token}`;
    }

    config.headers["TokenCybersoft"] =
      "eyJhbGciOiJIUzM4NCIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzMSIsIkhldEhhblN0cmluZyI6IjI0LzAyLzIwMjYiLCJIZXRIYW5UaW1lIjoiMTc3MTkwMjM3NDAwMCIsIm5iZiI6MTY0ODQwMDQwMCwiZXhwIjoxNjc2OTEyNDAwfQ.WRKFgl8BOzUljiQCQ1zUQp9w4uVdhqgHHK644VNfBWo_D63nbWHLq1VRNSmBo1LT";
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);
