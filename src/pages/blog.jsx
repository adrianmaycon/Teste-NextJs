import React from 'react';
import AppBar from '../components/AppBar';
import FooterBar from '../components/FooterBar';

export default function Blog() {

  return (
    <div>
      <AppBar />
      <div style={{ backgroundColor: '#fff', width: '100%', height: '800px' }} />
      <FooterBar />
    </div>
  );
}