import React, { useState } from 'react';
import { Button, Form, Input } from 'antd';
import axios from '@/api';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Register from '@/components/Register/Register';
const Loginn = () => {

    const [show, setShow] = useState(false)     
    const dispatch = useDispatch()  
    const navigate = useNavigate()  

    const onFinish = (values) => {
        axios
            .post("/admins/sign-in", values)
            .then(res => {
                console.log(res.data.payload.token)
                dispatch({type: "LOGIN", payload: res.data.payload.token})
                navigate("/")
            })
            .catch(err => console.log(err))
      };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

    return (
        <React.Fragment>
            <div className='flex h-screen items-center justify-center'>
                <Form
                    className='w-[500px]'
                    name="basic"
                    layout='vertical'
                    initialValues={{
                    remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    >
                    <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                        {
                        required: true,
                        message: 'Please input your username!',
                        },
                    ]}
                    >
                    <Input />
                    </Form.Item>
                
                    <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                        required: true,
                        message: 'Please input your password!',
                        },
                    ]}
                    >
                    <Input.Password />
                    </Form.Item>      
                    <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                    <Button onClick={() => setShow(true)}>Register</Button>
                    </Form.Item>
                    <Link to="/register">
                        Register
                    </Link>
                </Form>
            </div>
            <Register show={show} setShow={setShow}/>

        </React.Fragment>
    )
}
export default Loginn;