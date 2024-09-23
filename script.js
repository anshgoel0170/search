document.addEventListener('DOMContentLoaded', () => {
    const searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
    displayHistory(searchHistory);
});
document.getElementById('searchBtn').addEventListener('click', () => {
    const searchInput = document.getElementById('searchInput').value.trim();
    if (searchInput) {
        let searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
        searchHistory.push(searchInput);
        localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
        displayHistory(searchHistory);
        document.getElementById('searchInput').value = '';
    }
});
document.getElementById('clearBtn').addEventListener('click', () => {
    localStorage.removeItem('searchHistory');
    displayHistory([]);
});
function displayHistory(history) {
    const historyList = document.getElementById('searchHistory');
    historyList.innerHTML = '';
    history.forEach((term, index) => {
        let listItem = document.createElement('li');
        listItem.textContent = `${index + 1}. ${term}`;
        historyList.appendChild(listItem);
    });
}