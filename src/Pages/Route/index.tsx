import React, { useState } from "react";
import type { ColumnsType } from "antd/es/table";
import { Button, Input, Modal, Space, Table, Form, message } from "antd";
import {
  AppstoreAddOutlined,
  DeleteOutlined,
  EditOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

export default function LoTrinh() {
  const [open, setOpen] = React.useState<boolean>(false);
  const [updateForm] = Form.useForm();

  const navigate = useNavigate();

  const create = () => {
    navigate("/createlotrinh");
  };

  const [data] = useState([
    {
      id: 1,
      xuatphat: "Hà Nội",
      noiden: "Sài Gòn",
      khoihanh: "12h30",
      ketthuc: "4h00",
    },
    {
      id: 2,
      xuatphat: "Đà Nẵng",
      noiden: "Nha Trang",
      khoihanh: "13h00",
      ketthuc: "12h00",
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
      title: "Nơi xuất phát",
      dataIndex: "xuatphat",
      key: "xuatphat",
      render: (text, record, index) => {
        return <span>{text}</span>;
      },
    },
    {
      title: "Nơi đến",
      dataIndex: "noiden",
      key: "noiden",
      render: (text, record, index) => {
        return <span>{text}</span>;
      },
    },
    {
      title: "Thời gian khởi hành",
      dataIndex: "khoihanh",
      key: "khoihanh",
      render: (text, record, index) => {
        return <span>{text}</span>;
      },
    },
    {
      title: "Thời gian kết thúc",
      dataIndex: "ketthuc",
      key: "ketthuc",
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
            label="Nơi xuất phát"
            name="xuatphat"
            hasFeedback
            required={true}
          >
            <Input />
          </Form.Item>
          <Form.Item label="Nơi đến" name="noiden" hasFeedback required={true}>
            <Input />
          </Form.Item>
          <Form.Item
            label="Thời gian khởi hành"
            name="khoihanh"
            hasFeedback
            required={true}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Thời gian kết thúc"
            name="ketthuc"
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