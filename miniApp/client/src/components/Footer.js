import { Layout } from "antd";
const { Footer } = Layout;

const FooterComponent = () => {
    return (
        <Footer style={{ textAlign: 'center' }}>
            © {new Date().getFullYear()} MyApp. All rights reserved.
        </Footer>
    );
}
export default FooterComponent;