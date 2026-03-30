function updateClock() {
    const now = new Date();
    
    const timeString = now.toLocaleTimeString('en-US',{
        hour: '2-digit',
        minute: '2-digit',
        hour12: true

    }); 
    document.getElementById('clock').textContent = timeString;
}

// Update the clock every 1 second
setInterval(updateClock, 1000);

// Run it once immediately so there is no 1-second delay
updateClock();
