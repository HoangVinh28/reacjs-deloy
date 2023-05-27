import { Button, Form, Input, message } from "antd";
import { useNavigate } from "react-router-dom";

export default function CreateTrips() {
  const navigate = useNavigate();

  const [createForm] = Form.useForm();

  const onFinish = () => {
    navigate("/trips");
    message.success("Thêm chuyến xe thành công!", 1.5);
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