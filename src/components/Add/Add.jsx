import axios from "../../api/index";
import { Button, Form, Input } from "antd";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

import { useFetch } from "../Hook/Hook";
import Model from "@/pages/Model/Model";


export const Add = ({ show, setShow, handleCreate }) => {
  const [reload, setReload] = useState(false);
  const {} = useFetch("/blogs", { limit: 6 }, [reload]);
  const handleLogin = (values) => {
    axios
      .post("/sign-up", values)
      .then((res) => {
        setShow(false);
        console.log(res);
      })
      .catch((res) => {
        console.log(res);
      });
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
      {show && (
        <Model close={() => setShow(false)}>
          <Form
            className=""
            name="register"
            layout="vertical"
            initialValues={{
              remember: true,
            }}
            onFinish={handleCreate}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <h2 className="text-2xl font-bold">
              Add information
            </h2>
            <Button
              onClick={() => setShow(false)}
              className="border-none absolute top-0 right-0 "
            >
              <AiOutlineClose />
            </Button>
            <Form.Item
              label="Title"
              name="title"
              rules={[
                {
                  required: true,
                  message: "Ism kiriting!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Desc"
              name="desc"
              rules={[
                {
                  required: true,
                  message: "Ism kiriting!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item>
              <Button className="w-full" type="primary" htmlType="submit">
                Create
              </Button>
            </Form.Item>
          </Form>
        </Model>
      )}
    </div>
  );
};