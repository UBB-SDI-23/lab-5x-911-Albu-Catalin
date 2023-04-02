import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import PublishingHouseListPage from './pages/publishingHouse/PublishingHouseListPage';
import PublishingHouseDetailsPage from './pages/publishingHouse/PublishingHouseDetailsPage';
import { AddPublishingHousePage } from './pages/publishingHouse/AddPublishingHousePage';
import EditPublishingHousePage from './pages/publishingHouse/EditPublishingHousePage';
import ReportsPage from './pages/ReportsPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/publishingHouses" element={<PublishingHouseListPage />} />
        <Route
          path="/publishingHouses/:id"
          element={<PublishingHouseDetailsPage />}
        />
        <Route
          path="/publishingHouses/add"
          element={<AddPublishingHousePage />}
        />
        <Route
          path="/publishingHouses/:id/edit"
          element={<EditPublishingHousePage />}
        />

        <Route path="/reports" element={<ReportsPage />} />
      </Routes>
    </div>
  );
}

export default App;
