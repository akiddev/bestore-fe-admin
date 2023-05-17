import "./Dashboard.css";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, Row, Col, Avatar } from "antd";
import React, { useState } from "react";
import {
  MdAddCircleOutline,
  MdCategory,
  MdFormatListBulleted,
  MdInsertChartOutlined,
  MdLogout,
  MdManageAccounts,
  MdOutlineHome,
  MdOutlineInventory2,
  MdOutlineShoppingBag,
  MdRequestPage,
  MdSupervisorAccount,
} from "react-icons/md";
import {
  Outlet,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Home from "../components/home/Home";
import AddOrEditCategory from "./../components/categories/AddOrEditCategory";
import ListCategories from "./../components/categories/ListCategories";

const { Header, Sider, Content } = Layout;

function Dashboard() {
  const [marginLeft, setMarginLeft] = useState(200);
  const [collapsed, setCollapsed] = useState(false);

  const navigate = useNavigate();

  const siteLayoutStyle = { marginLeft: marginLeft };
  return (
    <Layout>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div className="logo">
          <h2>{collapsed ? "BS" : "BE Store"}</h2>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <MdOutlineHome />,
              label: "Home",
              onClick: () => navigate("/"),
            },
            {
              key: "2",
              icon: <MdCategory />,
              label: "Categories",
              children: [
                {
                  key: "21",
                  icon: <MdAddCircleOutline />,
                  label: "Add Category",
                  onClick: () => navigate("/categories/add"),
                },
                {
                  key: "22",
                  icon: <MdFormatListBulleted />,
                  label: "List Categories",
                  onClick: () => navigate("/categories/list"),
                },
              ],
            },
            {
              key: "3",
              icon: <MdOutlineInventory2 />,
              label: "Product",
            },
            {
              key: "4",
              icon: <MdOutlineShoppingBag />,
              label: "Order",
            },
            {
              key: "5",
              icon: <MdRequestPage />,
              label: "Invoices",
            },
            {
              key: "6",
              icon: <MdInsertChartOutlined />,
              label: "Statistics",
            },
            {
              key: "7",
              icon: <MdManageAccounts />,
              label: "Profiles",
            },
            {
              key: "8",
              icon: <MdSupervisorAccount />,
              label: "Accounts",
            },
            {
              key: "9",
              icon: <MdLogout />,
              label: "Log Out",
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout" style={siteLayoutStyle}>
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
            right: 16,
            left: marginLeft + 16,
            top: 0,
            position: "fixed",
            height: 70,
          }}
        >
          <Row>
            <Col md={18}>
              <Button
                type="text"
                className="trigger"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => {
                  const sts = !collapsed;
                  setCollapsed(sts);
                  setMarginLeft(sts ? 80 : 200);
                }}
                style={{
                  fontSize: "20px",
                  width: 64,
                  height: 64,
                }}
              />
            </Col>
            <Col md={6}>
              <div>
                <Avatar size="default" icon={<UserOutlined />}></Avatar> Bao
                Nguyen
              </div>
            </Col>
          </Row>
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "80px 24px 16px 24px",
            padding: 24,
            minHeight: 280,
          }}
        >
          <div className="content-panel">
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route
                path="/categories/add"
                element={<AddOrEditCategory />}
              ></Route>
              <Route
                path="/categories/list"
                element={<ListCategories />}
              ></Route>
            </Routes>
            <Outlet></Outlet>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}

export default Dashboard;
