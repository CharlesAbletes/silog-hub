
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

/*
    const fruits = [{id: 1, name: "apple", calories: 95},
                    {id: 2, name: "orange", calories: 45},
                    {id: 3, name: "banana", calories: 105},
                    {id: 4, name: "coconut", calories: 159},
                    {id: 5, name: "pineapple", calories: 37}
                   ];

    const vegetables = [{id: 6, name: "potatoes", calories: 110},
                    {id: 7, name: "celery", calories: 15},
                    {id: 8, name: "carrots", calories: 25},
                    {id: 9, name: "corn", calories: 63},
                    {id: 10, name: "broccoli", calories: 50}
                   ];
*/

/*
{fruits.length > 0 && <Student items={fruits} category="Fruits"/>}
{vegetables.length > 0 && <Student items={vegetables} category="Vegetables"/>}

<UserGreeting isLoggedIn={true} username="Charles Chille"/>
*/