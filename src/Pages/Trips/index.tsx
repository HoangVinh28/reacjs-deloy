import React from "react";
import axios from "../../libraries/axiosClient";
import type { ColumnsType } from "antd/es/table";
import { Button, Input, Modal, Space, Table, Form, message } from "antd";
import {
  AppstoreAddOutlined,
  DeleteOutlined,
  EditOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const apiName = "/trips";

export default function Trips() {
  const [trips, setTrips] = React.useState<any[]>([]);

  const [refresh, setRefresh] = React.useState<number>(0);
  const [open, setOpen] = React.useState<boolean>(false);
  const [updateId, setUpdateId] = React.useState<number>(0);

  const [deleteCategoryId, setDeleteCategoryId] = React.useState<number>(0);
  const [showDeleteConfirm, setShowDeleteConfirm] =
    React.useState<boolean>(false);

  const [updateForm] = Form.useForm();

  const navigate = useNavigate();

  const create = () => {
    navigate("/createTrips");
  };

  const showConfirmDelete = (CategoryId: number) => {
    setDeleteCategoryId(CategoryId);
    setShowDeleteConfirm(true);
  };

  const handleDeleteCategory = () => {
    axios.delete(apiName + "/" + deleteCategoryId).then(() => {
      setRefresh((f) => f + 1);
      message.success("Xóa sản phẩm thành công!", 1.5);
      setShowDeleteConfirm(false);
    });
  };

  const deleteConfirmModal = (
    <Modal
      title="Xóa sản phẩm"
      open={showDeleteConfirm}
      onOk={handleDeleteCategory}
      onCancel={() => setShowDeleteConfirm(false)}
      okText="Xóa"
      cancelText="Hủy"
    >
      <p>Bạn có chắc chắn muốn xóa sản phẩm?</p>
    </Modal>
  );

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
      dataIndex: "start",
      key: "start",
      render: (text, record, index) => {
        return <span>{text}</span>;
      },
    },
    {
      title: "Nơi đến",
      dataIndex: "end",
      key: "end",
      render: (text, record, index) => {
        return <span>{text}</span>;
      },
    },
    {
      title: "Ngày đi",
      dataIndex: "departureDay",
      key: "departureDay",
      render: (text, record, index) => {
        return <span>{text}</span>;
      },
    },
    {
      title: "Ngày đến",
      dataIndex: "arrivalDate",
      key: "arrivalDate",
      render: (text, record, index) => {
        return <span>{text}</span>;
      },
    },
    {
      title: "Thời gian",
      dataIndex: "time",
      key: "time",
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
                setUpdateId(record._id);
                updateForm.setFieldsValue(record);
              }}
            />
            <Button
              danger
              icon={<DeleteOutlined />}
              onClick={() => {
                showConfirmDelete(record._id);
              }}
            />
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

  React.useEffect(() => {
    axios
      .get(apiName)
      .then((response: any) => {
        const { data } = response;
        setTrips(data);
      })
      .catch((err: any) => {
        console.error(err);
      });
  }, [refresh]);

  const onUpdateFinish = (values: any) => {
    axios
      .patch(apiName + "/" + updateId, values)
      .then(() => {
        setRefresh((f) => f + 1);
        updateForm.resetFields();
        message.success("Cập nhật danh mục thành công!", 1.5);
        setOpen(false);
      })
      .catch((err: any) => {
        console.error(err);
      });
  };

  return (
    <div style={{ padding: 24 }}>
      <Table rowKey="id" dataSource={trips} columns={columns} />
      {deleteConfirmModal}
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
            name="start"
            hasFeedback
            required={true}
          >
            <Input />
          </Form.Item>
          <Form.Item label="Nơi đến" name="end" hasFeedback required={true}>
            <Input />
          </Form.Item>
          <Form.Item
            label="Ngày đi"
            name="departureDay"
            hasFeedback
            required={true}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Ngày đến"
            name="arrivalDate"
            hasFeedback
            required={true}
          >
            <Input />
          </Form.Item>
          <Form.Item label="Thời gian" name="time" hasFeedback required={true}>
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}