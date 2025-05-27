import { Layout, Menu } from 'antd';
import {HomeOutlined, InfoCircleOutlined, ContactsOutlined} from '@ant-design/icons';
import { Link } from 'react-router-dom';
const { Header } = Layout;


const HeaderComponent = () => {
  return (
    <Header style={{ backgroundColor: '#001529' }}>
        <div style={{ float: 'left', color: 'white', fontSize: '20px', fontWeight: 'bold' }}>
          MyApp
        </div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} style={{ marginLeft: 120 }}>
          <Menu.Item key="1" icon={<HomeOutlined />}><Link to="/">Home</Link></Menu.Item>
          <Menu.Item key="2" icon={<InfoCircleOutlined />}><Link to="/about">About</Link></Menu.Item>
          <Menu.Item key="3" icon={<ContactsOutlined />}>Contact</Menu.Item>
        </Menu>
    </Header>
  );
}

export default HeaderComponent;