import { Layout } from "antd";
import React from "react";
import { Route, Routes } from "react-router-dom";
import "./assets/scss/style.scss";
import SiderCP from "./Layouts/SiderCP";
import ScrollTop from "./modules/ScrollTop";
import Home from "./Pages/Home";
const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <SiderCP />
      <Layout className="site-layout">
        <Header
          className="site-layout-background header"
          style={{
            padding: 0,
          }}
        />
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          <ScrollTop />
          <div
            className="site-layout-background"
            id="site-layout-background"
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Routes>
              <Route path="*" element={<Home />}></Route>
            </Routes>
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Coppy right Bootstrap
        </Footer>
      </Layout>
    </Layout>
  );
}

export default App;
