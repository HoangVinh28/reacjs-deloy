import { Button, Form, Input, message } from "antd";
import { useNavigate } from "react-router-dom";

export default function CreateLoTrinh() {
  const navigate = useNavigate();

  const [createForm] = Form.useForm();

  const onFinish = () => {
    navigate("/lotrinh");
    message.success("Thêm lộ trình thành công!", 1.5);
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
          <Form.Item label="ID" name="name" hasFeedback required={true}>
            <Input />
          </Form.Item>
          <Form.Item label="Điểm đi" name="diemdi" hasFeedback required={true}>
            <Input />
          </Form.Item>
          <Form.Item
            label="Điểm đến"
            name="diemden"
            hasFeedback
            required={true}
          >
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