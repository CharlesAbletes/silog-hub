
import { Routes, Route } from 'react-router-dom';
import HomePage from './Mainpages/HomePage.jsx'
import Silogs from './Mainpages/Silogs.jsx'
import ComboMeals from './Mainpages/ComboMeals.jsx'
import FamilyPacks from './Mainpages/FamilyPacks.jsx'
import AboutUs from './Mainpages/AboutUs.jsx'


function App() {
    return (
      <>
        <Routes>
          <>
            <Route path="/" element={<HomePage />} />
            <Route path="/silogs" element={<Silogs />} />
            <Route path="/combomeals" element={<ComboMeals />} />
            <Route path="/familypacks" element={<FamilyPacks />} />
            <Route path="/aboutus" element={<AboutUs />} />
          </>
        </Routes>
      </>
    );
}

export default App