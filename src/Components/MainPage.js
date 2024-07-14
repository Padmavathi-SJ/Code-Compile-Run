// src/pages/MainPage.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import Assesment from './Assesment';
import Problems from './Problems';

const MainPage = () => {
    return (
            <Routes>
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/assesment" component={Assesment} />
                <Route path="/problems" component={Problems} />
            </Routes>
    );
};

export default MainPage;
