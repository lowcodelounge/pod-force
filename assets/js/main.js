// Constants
const article = document.querySelector("article");
const post = article.getAttribute("id");
const audio = document.querySelector("audio");
const button = document.getElementById('mark-as-played');
const playedKey = post + "Played";

// Functions
const getCurrentTime = () => {
    const currentTimeInSeconds = localStorage.getItem(post);
    if (currentTimeInSeconds !== null) {
        audio.currentTime = parseFloat(currentTimeInSeconds);
    };
};

const setCurrentTime = () => {
    const currentTimeInSeconds = Math.floor(audio.currentTime);
    localStorage.setItem(post, currentTimeInSeconds);
};

const markPlayed = () => {
    localStorage.setItem(playedKey, "true");
};

const markUnplayed = () => {
    localStorage.setItem(playedKey, "false");
};

const startSavingTime = () => {
    const intervalTime = 5000; // 5 seconds
    return setInterval(setCurrentTime, intervalTime);
};

const stopSavingTime = () => {
    clearInterval(intervalId);
};

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem(playedKey) == "true") {
        button.checked = true;
    } else {
        button.checked = false;
    };
});

audio.addEventListener('loadedmetadata', getCurrentTime);

audio.addEventListener('play', () => {
    setCurrentTime();
    intervalId = startSavingTime();
});

audio.addEventListener('pause', () => {
    stopSavingTime(intervalId);
});

button.addEventListener('change', (event) => {
    if (event.target.checked) {
        audio.pause();
        localStorage.removeItem(post);
        audio.currentTime = 0;
        stopSavingTime(intervalId);
        markPlayed();
    } else {
        markUnplayed();
    };   
});

audio.addEventListener('ended', function() {
    localStorage.removeItem(post);
    stopSavingTime(intervalId);
    markPlayed();
    button.checked = true;
});