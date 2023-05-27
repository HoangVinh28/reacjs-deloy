import { Button, Form, Input, message } from "antd";
import { useNavigate } from "react-router-dom";

export default function CreateXe() {
  const navigate = useNavigate();

  const [createForm] = Form.useForm();

  const onFinish = () => {
    navigate("/xe");
    message.success("Thêm xe thành công!", 1.5);
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