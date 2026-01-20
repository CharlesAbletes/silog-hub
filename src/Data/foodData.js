import { nanoid } from "nanoid"

import tapsilogPic from '../assets/tapsilog.jpg'
import longsilogPic from '../assets/longsilog.jpg'
import bisteksilogPic from '../assets/bisteksilog.jpg'
import cornsilogPic from '../assets/cornsilog.jpg'
import bangsilogPic from '../assets/bangsilog.jpg'
import chicksilogPic from '../assets/chicksilog.jpg'
import bangustinapaPic from '../assets/bangustinapa.jpg'
import danggitsilogPic from '../assets/danggitsilog.jpg'

    const foodsData = [
        {
            id: nanoid(),
            image: tapsilogPic,
            title: "Tapsilog",
            text: "Marinated beef, garlic rice, fried egg"
        },
        {
            id: nanoid(),
            image: chicksilogPic,
            title: "Chicksilog",
            text: "Fried chicken, garlic rice, fried egg"
        },
        {
            id: nanoid(),
            image: bisteksilogPic,
            title: "Bisteksilog",
            text: "Beef steak, garlic rice, fried egg"
        },
        {
            id: nanoid(),
            image: cornsilogPic,
            title: "Cornsilog",
            text: "Corned beef, garlic rice, fried egg"
        },
        {
            id: nanoid(),
            image: bangsilogPic,
            title: "Bangsilog",
            text: "Fried milkfish, garlic rice, fried egg"
        },
        {
            id: nanoid(),
            image: longsilogPic,
            title: "Longsilog",
            text: "Filipino sausage, garlic rice, fried egg"
        },
        {
            id: nanoid(),
            image: bangustinapaPic,
            title: "Bangus Tinapa",
            text: "Smoked milkfish, garlic rice, fried egg"
        },
        {
            id: nanoid(),
            image: danggitsilogPic,
            title: "Danggit Silog",
            text: "Crispy dried fish, garlic rice, fried egg"
        }
    ];

 export default foodsData;