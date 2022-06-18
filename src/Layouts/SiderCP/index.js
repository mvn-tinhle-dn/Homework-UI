import { PieChartOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const { Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem(<NavLink to="/">Accordion</NavLink>, "/", <PieChartOutlined />),
  getItem(
    <NavLink to="/Alerts">Alerts</NavLink>,
    "/Alerts",
    <PieChartOutlined />
  ),
  getItem(<NavLink to="/Badge">Badge</NavLink>, "/Badge", <PieChartOutlined />),
  getItem(
    <NavLink to="/Breadcrumb">Breadcrumb</NavLink>,
    "/Breadcrumb",
    <PieChartOutlined />
  ),
  getItem(
    <NavLink to="/Buttons">Buttons</NavLink>,
    "/Buttons",
    <PieChartOutlined />
  ),
  getItem(
    <NavLink to="/ButtonGroup">Button Group</NavLink>,
    "/ButtonGroup",
    <PieChartOutlined />
  ),
  getItem(<NavLink to="/Card">Card</NavLink>, "/Card", <PieChartOutlined />),
  getItem(<NavLink to="/Close">Close</NavLink>, "/Close", <PieChartOutlined />),
  getItem(
    <NavLink to="/Collapse">Collapse</NavLink>,
    "/Collapse",
    <PieChartOutlined />
  ),
  getItem(
    <NavLink to="/Dropdowns">Dropdowns</NavLink>,
    "/Dropdowns",
    <PieChartOutlined />
  ),
  getItem(<NavLink to="/List">List</NavLink>, "/List", <PieChartOutlined />),
  getItem(<NavLink to="/Modal">Modal</NavLink>, "/Modal", <PieChartOutlined />),
  getItem(<NavLink to="/Navs">Navs</NavLink>, "/Navs", <PieChartOutlined />),
  getItem(
    <NavLink to="/Navbar">Navbar</NavLink>,
    "/Navbar",
    <PieChartOutlined />
  ),
  getItem(
    <NavLink to="/Offcanvas">Offcanvas</NavLink>,
    "/Offcanvas",
    <PieChartOutlined />
  ),
  getItem(
    <NavLink to="/Pagination">Pagination</NavLink>,
    "/Pagination",
    <PieChartOutlined />
  ),
  getItem(
    <NavLink to="/Placeholders">Placeholders</NavLink>,
    "/Placeholders",
    <PieChartOutlined />
  ),
  getItem(
    <NavLink to="/Popovers">Popovers</NavLink>,
    "/Popovers",
    <PieChartOutlined />
  ),
  getItem(
    <NavLink to="/Progress">Progress</NavLink>,
    "/Progress",
    <PieChartOutlined />
  ),
  getItem(
    <NavLink to="/Scrollspy">Scrollspy</NavLink>,
    "/Scrollspy",
    <PieChartOutlined />
  ),
  getItem(
    <NavLink to="/Spinners">Spinners</NavLink>,
    "/Spinners",
    <PieChartOutlined />
  ),
  getItem(
    <NavLink to="/Toasts">Toasts</NavLink>,
    "/Toasts",
    <PieChartOutlined />
  ),
  getItem(
    <NavLink to="/Tooltips">Tooltips</NavLink>,
    "/Tooltips",
    <PieChartOutlined />
  ),
];
function SiderCP() {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation().pathname;
  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <div className="logo" />
      <Menu
        theme="dark"
        defaultSelectedKeys={["2"]}
        selectedKeys={[location]}
        mode="inline"
        items={items}
      />
    </Sider>
  );
}

export default SiderCP;
