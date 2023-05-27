import { Button, Form, Input, message } from "antd";
import { useNavigate } from "react-router-dom";

export default function CreateVeXe() {
  const navigate = useNavigate();

  const [createForm] = Form.useForm();

  const onFinish = () => {
    navigate("/vexe");
    message.success("Thêm vé xe thành công!", 1.5);
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
          <Form.Item label="Mã vé" name="mave" hasFeedback required={true}>
            <Input />
          </Form.Item>
          <Form.Item
            label="Loại vé"
            name="loaive"
            hasFeedback
            required={true}
          >
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
          <Form.Item
            label="Giá vé"
            name="price"
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