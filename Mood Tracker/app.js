document.addEventListener("DOMContentLoaded", function () {
    const moodKey = 'moodTracker';
    function setMood(mood) {
        const today = new Date().toISOString().split('T')[0];
        let moods = JSON.parse(localStorage.getItem(moodKey)) || {};
        moods[today] = mood;
        localStorage.setItem(moodKey, JSON.stringify(moods));
        loadMoods();
    }
    function loadMoods() {
        const moods = JSON.parse(localStorage.getItem(moodKey)) || {};
        const today = new Date().toISOString().split('T')[0];
        document.getElementById('current-mood').textContent = moods[today] || '-';
        
        const historyList = document.getElementById('mood-history');
        historyList.innerHTML = '';
        for (const [date, mood] of Object.entries(moods).reverse()) {
            const li = document.createElement('li');
            li.textContent = `${date}: ${mood}`;
            historyList.appendChild(li);
        }
        
        renderCalendar(moods);
    }
    function renderCalendar(moods) {
        const calendar = document.getElementById('mood-calendar');
        calendar.innerHTML = '';
        const year = new Date().getFullYear();
        const month = new Date().getMonth();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        for (let i = 1; i <= daysInMonth; i++) {
            const date = `${year}-${(month + 1).toString().padStart(2, '0')}-${i.toString().padStart(2, '0')}`;
            const mood = moods[date] || "' '";
            const dayDiv = document.createElement('div');
            dayDiv.className = 'day';
            dayDiv.id=date
            dayDiv.textContent = `${date}:${mood}`;
            calendar.appendChild(dayDiv);
        }
    }
    loadMoods();
    window.setMood = setMood;

});
