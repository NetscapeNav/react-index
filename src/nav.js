import logo from './logo.svg';

function Nav() {
    return (
        <nav>
            <img src={logo} className="App-logo" alt="logo" />
            <div className="links">
                <p id="date"></p>
                <a href="https://t.me/sept_technologies">Наш ТГ</a>
                <a href="mailto:mail@sepcode.ru">Напишите нам</a>
                <a href="update-list.php">Список обновлений</a>
            </div>
        </nav>
    );
}

export default Nav;