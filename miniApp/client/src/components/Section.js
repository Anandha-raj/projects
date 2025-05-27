import { Layout, Typography, Row, Col, Card } from 'antd';

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const Section = () => {
  return (
    <Content>
      <Row justify="start" gutter={[16, 16]} style={{ padding: '40px 20px' }}>
        <Col xs={24} sm={20} md={12} lg={8}>
          <Card>
            <Title level={2}>Welcome to MyApp</Title>
            <Paragraph>
              This content is styled using Ant Design
            </Paragraph>
          </Card>
        </Col>
        <Col xs={24} sm={20} md={12} lg={8}>
          <Card>
            <Title level={2}>Another Section</Title>
            <Paragraph>
              You can customize this section
            </Paragraph>
          </Card>
        </Col>
        <Col xs={24} sm={20} md={12} lg={8}>
          <Card>
            <Title level={2}>Another Section</Title>
            <Paragraph>
              You can customize this section
            </Paragraph>
          </Card>
        </Col>
      </Row>
      <Row justify="start" style={{ padding: '40px 20px' }}>
        <Col xs={24} sm={24} md={24} lg={24}>
          <Card>
            <Title level={2}>Welcome to MyApp</Title>
            <Paragraph>
              This content is styled using Ant Design
            </Paragraph>
          </Card>
        </Col>
      </Row>
    </Content>
  );
};

export default Section;
