import React from "react";
import { Route, Redirect, Link } from "react-router-dom";
import { Menu, Layout } from "antd";

import { VideoCameraOutlined, UserOutlined, FundOutlined } from "@ant-design/icons";
import NavbarAdmin from "../../components/NavbarAdmin";

function AdminRender(props) {

  const { Content, Sider, Footer } = Layout;

  return (
    <div>
      {/*Components used for all pages*/}
      <Layout>
        <NavbarAdmin />
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu
              mode="inline"
              theme="dark"
              defaultSelectedKeys={['1']}
              style={{ height: '100%', borderRight: 0 }}
            >
              <Menu.Item key="1" icon={<FundOutlined />}>
                <Link to={"/dashboard"}>
                  <span>Dashboard</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="2" icon={<UserOutlined />}>
                <Link to={"/dashboard/user"}>
                  <span>Users</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="3" icon={<VideoCameraOutlined />} >
                <Link to={"/dashboard/movie"}>
                  <span>Movies</span>
                </Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              {/* Noi dung thay doi theo tung page: Gom User Component & Movie Component*/}
              {props.children}

            </Content>
            <Footer style={{ textAlign: 'center' }}>♥ Aries Booking ♥</Footer>
          </Layout>
        </Layout>
      </Layout>

    </div>
  );
}

export default function AdminLayout({ Component, ...props }) {
  return (
    <Route
      {...props}
      render={(propsComponent) => {
        if (localStorage.getItem("UserAdmin")) {
          return (
            <AdminRender>
              <Component {...propsComponent} />
            </AdminRender>
          );
        } else if (localStorage.getItem("User")) {
          window.history.back()
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
}
