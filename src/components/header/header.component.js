import React from 'react';
import { Layout, Menu, PageHeader } from 'antd';

// import './header.css';
// import '../navbar_item/navbar_item.component';
// import NavBarItem from '../navbar_item/navbar_item.component';
// import NavBarBrand from '../navbar_brand/navbar_brand.component';

const { Header } = Layout;

class DefaultHeader extends React.Component {
  render() {
    return (
      <div>
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>
      </div>

      // <nav className="navbar navbar-expand-lg navbar-light">
      //   <NavBarBrand name="Litchi" />
      //   <button
      //     className="navbar-toggler"
      //     type="button"
      //     data-toggle="collapse"
      //     data-target="#navbarNav"
      //     aria-controls="navbarNav"
      //     aria-expanded="false"
      //     aria-label="Toggle navigation"
      //   >
      //     <span className="navbar-toggler-icon"></span>
      //   </button>
      //   <div
      //     className="collapse navbar-collapse justify-content-end"
      //     id="navbarNav"
      //   >
      //     <ul className="navbar-nav">
      //       <NavBarItem name="Home" route="/" />
      //       <NavBarItem name="Features" route="/features" />
      //       <NavBarItem name="Pricing" route="/pricing" />
      //       <NavBarItem name="Login" route="/login" />
      //       <NavBarItem name="Signup" route="/signup" />
      //     </ul>
      //   </div>
      // </nav>
    );
  }
}

export default DefaultHeader;
