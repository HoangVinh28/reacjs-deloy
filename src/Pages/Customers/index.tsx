import React, { useState } from "react";
import type { ColumnsType } from "antd/es/table";
import { Button, Input, Modal, Space, Table, Form, message } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

export default function KhachHang() {
  const [open, setOpen] = React.useState<boolean>(false);
  const [updateForm] = Form.useForm();

  const [data] = useState([
    {
      id: 1,
      name: "Nguyễn Thanh Tùng",
      email: "tung123@gmail.com",
      phoneNumber: "0905628541",
      address: "Đà Nẵng",
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
      title: "Tên khách hàng",
      dataIndex: "name",
      key: "name",
      render: (text, record, index) => {
        return <span>{text}</span>;
      },
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      render: (text, record, index) => {
        return <span>{text}</span>;
      },
    },
    {
      title: "Số điện thoại",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
      render: (text, record, index) => {
        return <span>{text}</span>;
      },
    },
    {
      title: "Địa chỉ",
      dataIndex: "address",
      key: "address",
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
      title: "Thao tác",
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
            label="Tên khách hàng"
            name="name"
            hasFeedback
            required={true}
          >
            <Input />
          </Form.Item>
          <Form.Item label="Email" name="email" hasFeedback required={true}>
            <Input />
          </Form.Item>
          <Form.Item
            label="Số điện thoại"
            name="phoneNumber"
            hasFeedback
            required={true}
          >
            <Input />
          </Form.Item>
          <Form.Item label="Địa chỉ" name="address" hasFeedback required={true}>
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
