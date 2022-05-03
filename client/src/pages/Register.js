import React from 'react'
import {Row,Col,Form,Input} from 'antd'
import {useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import {userRegister} from '../redux/actions/userAction'


export default function Register() {
  const dispatch = useDispatch()
  function onFinish(values){
      dispatch(userRegister(values))
      console.log(values);
  }
  return (
    <div className="register">

    <Row gutter={16}>

          <Col lg={16} style={{position:'relative'}}>
            <img className ="register-image" src='https://knowtechie.com/wp-content/uploads/2019/01/samuele-errico-piccarini-196256-unsplash-1-e1547826676524.jpg' />
            <h1 className="register-companyName">BookMyCar</h1>
           </Col>
          <Col lg={8} className="text-left p-5">
            <Form layout='vertical' className="login-form p-5" onFinish={onFinish}>
              <h1>Register</h1>
              <hr/>
              <Form.Item name="username" label="Username" rules={[{required: true}]}>
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
                    <Input.Password className='password-input'/>
                </Form.Item>
                <Form.Item
                    label="Confirm Password"
                    name="cpassword"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your password!',
                      },
                    ]}
                  >
                    <Input.Password className='password-input' />
                  </Form.Item>
              <button className="btn1 mt-2 mb-3">Register</button>
            
              <Link to='/login' className="register-link">Click here to Login</Link>
            </Form>
          </Col>
    </Row>

</div>
  )
}
