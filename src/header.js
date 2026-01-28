import { useState, useEffect } from 'react';

import Nav from "./nav";
import Marquee from "./marquee";
import New from "./new";

import './header.css';

function Header() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const headerText = ["Лучший сайт в мультивселенной",
        "Лучший сайт в галактике",
        "Лучший сайт в обозримом будущем",
        "Лучший сайт во всём свете",
        "Лучший сайт, который вы видели",
        "Лучший сайт чо копай", "Лучший ы"];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % headerText.length);
        }, 1500);
        return () => clearInterval(timer);
    }, []);

    return (
        <>
            <header className="App-header">
                <Nav/>
                <Marquee/>
            </header>
            <h1 className="header">{headerText[currentIndex]}</h1>
            <New />
        </>
    );
}

export default Header;