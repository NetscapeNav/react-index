import { useState, useEffect } from 'react';

function Time() {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 20);
        return () => clearInterval(timer);
    }, []);

    const formatTime = (date) => {
        let fMonth;
        switch (date.getMonth()) {
            case 0: fMonth="января"; break;
            case 1: fMonth="февраля"; break;
            case 2: fMonth="марта"; break;
            case 3: fMonth="апреля"; break;
            case 4: fMonth="мая"; break;
            case 5: fMonth="июня"; break;
            case 6: fMonth="июля"; break;
            case 7: fMonth="августа"; break;
            case 8: fMonth="сентября"; break;
            case 9: fMonth="октября"; break;
            case 10: fMonth="ноября"; break;
            case 11: fMonth="декабря"; break;
        }

        return `${date.getHours().toString().padStart(2, '0') + ":" +
        date.getMinutes().toString().padStart(2, '0') + ":" +
        date.getSeconds().toString().padStart(2, '0') + ":" +
        date.getMilliseconds().toString().padStart(3, '0') + ", " +
        date.getDate() + " " + fMonth + " " + date.getFullYear()}`;
    };

    return (
        <>
            <p className="date">{formatTime(currentTime)}</p>
        </>
    );
}

export default Time;