import tapsilogPic from '../assets/Tapsilog.jpg'
import longsilogPic from '../assets/Longsilog.jpg'
import bisteksilogPic from '../assets/Bisteksilog.jpg'
import cornsilogPic from '../assets/Cornsilog.jpg'
import bangsilogPic from '../assets/Bangsilog.jpg'
import chicksilogPic from '../assets/Chicksilog.jpg'
import bangustinapaPic from '../assets/Bangustinapa.jpg'
import danggitsilogPic from '../assets/Danggitsilog.jpg'

    const foodsData = [
        {
            id: crypto.randomUUID(),
            image: tapsilogPic,
            title: "Tapsilog",
            text: "Marinated beef, garlic rice, fried egg"
        },
        {
            id: crypto.randomUUID(),
            image: chicksilogPic,
            title: "Chicksilog",
            text: "Fried chicken, garlic rice, fried egg"
        },
        {
            id: crypto.randomUUID(),
            image: bisteksilogPic,
            title: "Bisteksilog",
            text: "Beef steak, garlic rice, fried egg"
        },
        {
            id: crypto.randomUUID(),
            image: cornsilogPic,
            title: "Cornsilog",
            text: "Corned beef, garlic rice, fried egg"
        },
        {
            id: crypto.randomUUID(),
            image: bangsilogPic,
            title: "Bangsilog",
            text: "Fried milkfish, garlic rice, fried egg"
        },
        {
            id: crypto.randomUUID(),
            image: longsilogPic,
            title: "Longsilog",
            text: "Filipino sausage, garlic rice, fried egg"
        },
        {
            id: crypto.randomUUID(),
            image: bangustinapaPic,
            title: "Bangus Tinapa",
            text: "Smoked milkfish, garlic rice, fried egg"
        },
        {
            id: crypto.randomUUID(),
            image: danggitsilogPic,
            title: "Danggit Silog",
            text: "Crispy dried fish, garlic rice, fried egg"
        }
    ];

 export default foodsData;

 /*
       <ul>
            <li>Apple</li>
            <li>{food1}</li>
            <li>{food2.toUpperCase()}</li>
        </ul>
 */