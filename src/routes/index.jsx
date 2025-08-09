import { Routes, Route } from 'react-router';

import Home from '../pages/home';
import AboutPage from '../pages/about';
import ServicesPage from '../pages/services';
import Layout from '../pages/layout';
import LoginPage from '../pages/login';
import GetStartedPage from '../pages/getstarted';
import Dashboard from '../pages/dashboard';

export default function RouteList() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="services" element={<ServicesPage />} />
         <Route path="getstarted" element={<GetStartedPage />} />
      </Route>
       <Route path="login" element={<LoginPage />} />
       <Route path="dashboard" element={<Dashboard />} />
    </Routes>
  );
}


