import { Routes, Route } from 'react-router-dom';
import MainLayout from './Layouts/MainLayout.jsx';

import HomePage from './Mainpages/HomePage.jsx'
import Silogs from './Mainpages/Silogs.jsx'
import ComboMeals from './Mainpages/ComboMeals.jsx'
import FamilyPacks from './Mainpages/FamilyPacks.jsx'
import AboutUs from './Mainpages/AboutUs.jsx'


function App() {
    return (
      <Routes>
        <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/silogs" element={<Silogs />} />
        </Route>

        <Route path="/combo-meals" element={<ComboMeals />} />
        <Route path="/family-packs" element={<FamilyPacks />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    );
}

export default App