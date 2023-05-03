const state = {
    paid: parseInt(localStorage.getItem('paid'), 10) || 73000000,
    paidIncrement: getRandomNumber(2, 9),
    paidIncrementAmount: getRandomNumber(8500, 40450),

    participants: parseInt(localStorage.getItem('participants'), 10) || 21000,
    participantsIncrement: getRandomNumber(2, 9),
    participantsIncrementAmount: getRandomNumber(1, 2),
};

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function increasePaid() {
    state.paid += state.paidIncrementAmount;
    const formattedNumber = state.paid.toLocaleString();
    document.querySelector('.paid-value').textContent = formattedNumber;
    localStorage.setItem('paid', state.paid);
    setTimeout(increasePaid, state.paidIncrement * 1000);
}
increasePaid();

function increaseParticipants() {
    state.participants += state.participantsIncrementAmount;
    const formattedNumber = state.participants.toLocaleString();
    document.querySelector('.participants-value').textContent = formattedNumber;
    localStorage.setItem('participants', state.participants);
    setTimeout(increaseParticipants, state.participantsIncrement * 1000);
}
increaseParticipants();