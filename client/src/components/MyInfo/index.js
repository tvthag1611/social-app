import styles from "./MyInfo.module.css";
import { Button, Input, Form, Checkbox } from "antd";

const { TextArea } = Input;

const MyInfo = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.cover}>
            <img
              src="https://images.unsplash.com/photo-1606240724602-5b21f896eae8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1413&q=80"
              alt="cover"
            />
          </div>
          <div className={styles.avatar}>
            <img
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
              alt="avatar"
            />
          </div>
          <Button className={styles.uploadBtn}>Upload image</Button>
        </div>
        <div className={styles.content}>
          <Form layout="vertical" onFinish={onFinish} style={{ width: "100%" }}>
            <Form.Item
              label="Name"
              name="Name"
              rules={[
                {
                  required: true,
                  message: "Please input your name!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Address"
              name="Address"
              rules={[
                {
                  required: true,
                  message: "Please input your address!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Bio"
              name="bio"
              rules={[
                {
                  required: true,
                  message: "Please input your bio!",
                },
              ]}
            >
              <TextArea rows={4} />
            </Form.Item>

            <Form.Item style={{ display: "flex", justifyContent: "center" }}>
              <Button
                type="primary"
                htmlType="submit"
                style={{ width: "200px", height: "40px", fontSize: 16 }}
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default MyInfo;
