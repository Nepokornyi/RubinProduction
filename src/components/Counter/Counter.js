import React, {useState, useEffect} from 'react'

function Counter() {
    const [timeLeft, setTimeLeft] = useState(40.98 * 1000); //milliseconds
    const [formattedTimeLeft, setFormattedTimeLeft] = useState('');

    useEffect(() => {
        if(timeLeft <= 0) {
            setTimeLeft(40.98 * 1000)
        }

        const timerId = setTimeout(() => {
            setTimeLeft(timeLeft - 20);
        }, 16)


        return () => clearTimeout(timerId);

    }, [timeLeft]);

    useEffect(() => {
        const seconds = Math.floor((timeLeft % 60000) / 1000);
        const milliseconds = timeLeft % 1000;

        const formattedSeconds = String(seconds).padStart(2, '0');
        const formattedMilliseconds = String(milliseconds).padStart(3, '0');

        setFormattedTimeLeft(`00:${formattedSeconds}:${formattedMilliseconds}`);

    }, [timeLeft])

    return (
        <>
            {timeLeft === 0 ? '00:00.000' : formattedTimeLeft}
        </>
    )
}

export default Counter