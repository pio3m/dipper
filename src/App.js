import React from 'react';
import Header from './components/Header';
import Details from './components/Details';
import Charts from './components/Charts';
import SankeyDiagram from './components/SankeyDiagram';
import TopBar from './components/TopBar';

const App = () => (
  <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '1200px', margin: '0 auto' }}>
    <TopBar />
    <Header />
    <Details />
    <Charts />
    <SankeyDiagram />
  </div>
);

export default App;
