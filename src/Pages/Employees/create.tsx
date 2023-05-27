import { Button, Form, Input, message } from "antd";
import { useNavigate } from "react-router-dom";

export default function CreateNhanVien() {
  const navigate = useNavigate();

  const [createForm] = Form.useForm();

  const onFinish = () => {
    navigate("/nhanvien");
    message.success("Thêm nhân viên thành công!", 1.5);
  };

  return (
    <div style={{ padding: 24 }}>
      <div style={{}}>
        <Form
          form={createForm}
          name="create-form"
          onFinish={onFinish}
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
        >
          <Form.Item label="ID" name="ID" hasFeedback required={true}>
            <Input />
          </Form.Item>
          <Form.Item label="Họ & Tên" name="name" hasFeedback required={true}>
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
          <Form.Item
            label="Địa chỉ"
            name="address"
            hasFeedback
            required={true}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Chức vụ"
            name="position"
            hasFeedback
            required={true}
          >
            <Input />
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Lưu thông tin
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}