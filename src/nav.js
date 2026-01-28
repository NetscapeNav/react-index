import logo from './logo.svg';
import Time from "./date.js";
import './nav.css';

function Nav() {
    return (
        <nav className="Nav">
            <img src={logo} className="App-logo" alt="logo" />
            <div className="links">
                <Time/>
                <a href="https://t.me/sept_technologies">Наш ТГ</a>
                <a href="mailto:mail@sepcode.ru">Напишите нам</a>
                <a href="update-list.php">Список обновлений</a>
            </div>
        </nav>
    );
}

export default Nav;