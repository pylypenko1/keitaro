let btnStart = document.getElementById('startBtn');

function openQuest() {
    (document.getElementById('page').style.display = 'none'),
        (document.getElementById('quest').style.display = 'flex');
}

btnStart.addEventListener('click', openQuest);
