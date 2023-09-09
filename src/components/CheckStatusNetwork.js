import { useState, useEffect } from 'react';
import '../App.css'

function CheckStatusNetwork() {

    const [isOnline, setIsOnline] = useState(navigator.onLine);

    useEffect(() => {
        // Update network status
        const handleStatusChange = () => {
            setIsOnline(navigator.onLine);
        };

        // Listen to the online status
        window.addEventListener('online', handleStatusChange);

        // Listen to the offline status
        window.addEventListener('offline', handleStatusChange);

        // Specify how to clean up after this effect for performance improvment
        return () => {
            window.removeEventListener('online', handleStatusChange);
            window.removeEventListener('offline', handleStatusChange);
        };
    }, [isOnline]);

    return (
        <div className='container'>
            <p>Turn on/off your Wi-Fi to see what happens</p>
            {isOnline ? (
                <p><span className='online'>&bull; &emsp;</span><span>You Are Online</span></p>
            ) : (
                <p><span className='offline'>&bull; &emsp;</span><span>You Are Offline</span></p>
            )}
        </div>
    );
}

export default CheckStatusNetwork;