import React from 'react';
import Header from './components/Header';
import Details from './components/Details';
import Charts from './components/Charts';
import SankeyDiagram from './components/SankeyDiagram';
import TopBar from './components/TopBar';
import Map from './components/Map';
import HeaderBottom from './components/HeaderBottom';
import EnvironmentalImpact from './components/EnvironmentalImpact';
import LifeCycleAssessment from './components/LifeCycleAssessment';

const App = () => (
  <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '1200px', margin: '0 auto' }}>
    <TopBar />
    <Header />
    <HeaderBottom />
    <Details />
    <EnvironmentalImpact />
    <Charts />
    <LifeCycleAssessment />

    <SankeyDiagram />
    <Map />
  </div>
);

export default App;
