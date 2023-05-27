import React, { useState } from "react";
import type { ColumnsType } from "antd/es/table";
import { Button, Input, Modal, Space, Table, Form, message } from "antd";
import {
  AppstoreAddOutlined,
  DeleteOutlined,
  EditOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

export default function Xe() {
  const [open, setOpen] = React.useState<boolean>(false);
  const [updateForm] = Form.useForm();

  const navigate = useNavigate();

  const create = () => {
    navigate("/createxe");
  };

  const [data] = useState([
    {
      id: 1,
      biensoxe: "29A-12345",
      loaixe: "Xe phổ thông",
      hangsanxuat: "Toyota",
      sochongoi: 4,
      trangthai: "Đang hoạt động",
    },
    {
      id: 2,
      biensoxe: "51B-67890",
      loaixe: "Xe VIP",
      hangsanxuat: "Mercedes-Benz",
      sochongoi: 10,
      trangthai: "Đang hoạt động",
    },
    {
      id: 3,
      biensoxe: "34G-24680",
      loaixe: "Xe thể thao",
      hangsanxuat: "Ferrari",
      sochongoi: 2,
      trangthai: "Bảo trì",
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
      title: "Biển số xe",
      dataIndex: "biensoxe",
      key: "biensoxe",
      render: (text, record, index) => {
        return <span>{text}</span>;
      },
    },
    {
      title: "Loại xe",
      dataIndex: "loaixe",
      key: "loaixe",
      render: (text, record, index) => {
        return <span>{text}</span>;
      },
    },
    {
      title: "Hãng sản xuất",
      dataIndex: "hangsanxuat",
      key: "hangsanxuat",
      render: (text, record, index) => {
        return <span>{text}</span>;
      },
    },
    {
      title: "Số chỗ ngồi",
      dataIndex: "sochongoi",
      key: "sochongoi",
      render: (text, record, index) => {
        return <span>{text}</span>;
      },
    },
    {
      title: "Trạng thái",
      dataIndex: "trangthai",
      key: "trangthai",
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
          <Form.Item
            label="Biển số xe"
            name="biensoxe"
            hasFeedback
            required={true}
          >
            <Input />
          </Form.Item>
          <Form.Item label="Loại xe" name="loaixe" hasFeedback required={true}>
            <Input />
          </Form.Item>
          <Form.Item
            label="Hãng sản xuất"
            name="hangsanxuat"
            hasFeedback
            required={true}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Số chỗ ngồi"
            name="sochongoi"
            hasFeedback
            required={true}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Trạng thái"
            name="trangthai"
            hasFeedback
            required={true}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}