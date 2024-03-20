import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserInfoContext";
import { Button, Space, Table } from "antd";
import { getUserWithPagination } from "../../api/user";
import { useNavigate } from "react-router-dom";

const User = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [filter, setFilter] = useState({
    totalCount: 0,
    totalPage: 0,
    defaultCurrent: 1,
  });

  useEffect(() => {
    getUserWithPagination({
      tuKhoa: "",
      soTrang: filter.defaultCurrent,
      soPhanTuTrenTrang: 5,
    })
      .then((res) => {
        console.log(res);
        setData(res.data.content.items ?? []);
        setFilter(() => {
          return {
            ...filter,
            totalPage: res.data.content.totalPages,
            totalCount: res.data.content.totalCount,
          };
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [filter.defaultCurrent]);

  const columns = [
    {
      title: "Account",
      dataIndex: "taiKhoan",
      key: "taiKhoan",
      render: (_, record) => {
        return <h1>{record?.taiKhoan ?? "..."}</h1>;
      },
    },
    {
      title: "FullName",
      dataIndex: "hoTen",
      key: "hoTen",
    },
    {
      title: "Phone",
      dataIndex: "soDt",
      key: "soDt",
    },
    {
      title: "User Type",
      key: "maLoaiNguoiDung",
      dataIndex: "maLoaiNguoiDung",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button onClick={() => navigate("/user/update/" +record.taiKhoan)} >
            Update
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <Button
        onClick={() => navigate("/user/create")}
        type="primary"
        className="bg-blue-500 mb-4"
      >
        Create User
      </Button>
      <Table
        columns={columns}
        dataSource={data}
        pagination={{
          total: filter.totalCount,
          defaultCurrent: filter.defaultCurrent,
          pageSize: filter.totalPage,
          onChange: (page) => {
            setFilter((prev) => {
              return { ...prev, defaultCurrent: page };
            });
          },
        }}
      />
    </div>
  );
};

export default User;
