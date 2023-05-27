import React, { useState } from "react";
import type { ColumnsType } from "antd/es/table";
import { Button, Input, Modal, Space, Table, Form, message } from "antd";
import {
  AppstoreAddOutlined,
  DeleteOutlined,
  EditOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

export default function VeXe() {
  const [open, setOpen] = React.useState<boolean>(false);
  const [updateForm] = Form.useForm();

  const navigate = useNavigate();

  const create = () => {
    navigate("/createvexe");
  };

  const [data] = useState([
    {
      id: 1,
      mave: "MV001",
      loaive: "Vé thường",
      soluong: 50,
      price: 50000,
    },
    {
      id: 2,
      mave: "MV002",
      loaive: "Vé VIP",
      soluong: 20,
      price: 120000,
    },
  ]);

  const columns: ColumnsType<any> = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
      width: "1%",
      align: "right",
      render: (text, record, index) => {
        return <span>{index + 1}</span>;
      },
    },
    {
      title: "Mã vé",
      dataIndex: "mave",
      key: "mave",
      render: (text, record, index) => {
        return <span>{text}</span>;
      },
    },
    {
      title: "Loại vé",
      dataIndex: "loaive",
      key: "loaive",
      render: (text, record, index) => {
        return <span>{text}</span>;
      },
    },
    {
      title: "Số lượng",
      dataIndex: "soluong",
      key: "soluong",
      render: (text, record, index) => {
        return <span>{text}</span>;
      },
    },
    {
      title: "Giá vé",
      dataIndex: "price",
      key: "price",
      render: (text, record, index) => {
        return <span>{text}</span>;
      },
    },
    {
      width: "1%",
      render: (text, record, index) => {
        return (
          <Space>
            <Button
              icon={<EditOutlined />}
              onClick={() => {
                setOpen(true);
              }}
            />
            <Button danger icon={<DeleteOutlined />} />
          </Space>
        );
      },
      title: (
        <Button
          icon={<AppstoreAddOutlined />}
          style={{
            marginBottom: "10px",
            float: "right",
            border: "1px solid #4096ff",
            color: "#4096ff",
          }}
          onClick={create}
        ></Button>
      ),
    },
  ];
  const onUpdateFinish = () => {
    message.success("Cập nhật thành công!", 1.5);
  };

  return (
    <div style={{ padding: 24 }}>
      <Table rowKey="id" dataSource={data} columns={columns} />
      <Modal
        open={open}
        title="Cập nhật danh mục"
        onCancel={() => {
          setOpen(false);
        }}
        cancelText="Đóng"
        okText="Lưu thông tin"
        onOk={() => {
          updateForm.submit();
        }}
      >
        <Form
          form={updateForm}
          name="update-form"
          onFinish={onUpdateFinish}
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
        >
          <Form.Item label="Mã vé" name="mave" hasFeedback required={true}>
            <Input />
          </Form.Item>
          <Form.Item label="Loại vé" name="loaive" hasFeedback required={true}>
            <Input />
          </Form.Item>
          <Form.Item
            label="Số lượng"
            name="soluong"
            hasFeedback
            required={true}
          >
            <Input />
          </Form.Item>
          <Form.Item label="Giá vé" name="price" hasFeedback required={true}>
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}