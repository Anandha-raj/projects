import React from 'react';
import { Layout } from 'antd';
import HeaderComponent from './components/Header';
import Section from './components/Section';
import FooterComponent from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import About from './components/About';

const App = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* Header */}
      <HeaderComponent />

      <Routes>
        <Route path="/" element={<Section />} />
        <Route path="/about" element={<About />} />
      </Routes>

      {/* Footer */}
      <FooterComponent />
    </Layout>
  );
};

export default App;