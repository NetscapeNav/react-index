import Nav from "./nav";
import Marquee from "./marquee";

export default function Header() {
    return (
        <>
            <header className="App-header">
                <Nav/>
                <Marquee/>
            </header>
            <h1 id="header">Лучший сайт в мультивселенной</h1>
        </>
    );
}