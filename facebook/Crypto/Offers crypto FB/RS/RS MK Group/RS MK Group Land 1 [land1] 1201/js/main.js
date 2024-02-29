const randMane = document.getElementById('rand_man'),
    randPlaces = document.getElementById('rand_places'),
    customDate = document.querySelectorAll('.customDate');


    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
      }


const randomManeInterval = setInterval(() => {
    randMane.innerHTML = getRandomInt(90, 960);

}, 8000)


let count = 27;

const timer = (count) => {
    randPlaces.innerHTML = count;

}

const intervalTimer = setInterval(function () {
    count--
    timer(count)
    if (count <= 22) {
        clearInterval(intervalTimer)
        const int = setInterval(() => {
            count--
            timer(count);
            if (count === 0) {
                clearInterval(int)
                timer(0)
            }
        }, 30000);
    }
}, 10000);


const newDate = new Date()

const formatDate = () => {
    const year = newDate.getFullYear();
    const month = newDate.getMonth() + 1;
    const date = newDate.getDate();

    const formatMonth = month < 10 ? `0${month}`: month;
    const formatdate = date < 10 ? `0${date}`: date;


    return `${year}/${formatMonth}/${formatdate}`

}

customDate.forEach(item => {
    item.innerHTML = formatDate()
})
