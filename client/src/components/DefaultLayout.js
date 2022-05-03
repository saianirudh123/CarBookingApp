import React from 'react'
import { Menu, Dropdown, Button, Space, Row, Col} from 'antd';
function DefaultLayout(props) {
 
const user = JSON.parse(localStorage.getItem('user'));
const menu = (
  <Menu>
    <Menu.Item>
      <a href="/" >Home</a>
    </Menu.Item>
    <Menu.Item>
      <a href="/userbookings" >Bookings</a>
    </Menu.Item>
    <Menu.Item>
      <a href="/admin">Admin</a>
    </Menu.Item>
    <Menu.Item onClick={() => {
      localStorage.removeItem('user')
      window.location.href = '/login'
    }}>
      <a href="#" >Logout</a>
    </Menu.Item>
  </Menu>
    
);

  return (
    <div>
        <div className="header bs1">
          <Row gutter={16} justify="center">
            <Col lg={20} sm={24} xs={24}>
              <div className="d-flex justify-content-between">
                  <h1>BookMyCar</h1>
                  <Dropdown overlay={menu} placement="bottom">
                    <Button className="header-ant-btn">{user.username}</Button>
                  </Dropdown>
              </div>
            </Col>
          </Row>
            
         </div>
         <div className="content">
            {props.children}
         </div>
    </div>
    
  )
}

export default DefaultLayout