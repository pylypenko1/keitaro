const slider = document.getElementById('slider');
const value = document.getElementById("text");
const prop = document.getElementById('prop');
const inputs = [value];

noUiSlider.create(slider, {
    start: [70000],
    connect: [true, false],
    range: {
        'min': 70000,
        'max': 10000000
    },
    step: 10000,
    format: {
        from: value => Math.round(+value),
        to: value => Math.round(+value)
    }
});

function calculateProportions(values, months) {
    const thresholds = [70000, 400000, 1000000, 2000000, 5000000, 10000001];
    const proportions = [12, 14, 16, 18, 20, 22];

    for (let i = 0; i < thresholds.length; i++) {
        if (values < thresholds[i]) {
            const monthlyProportion = proportions[i] * values / 100;
            return Math.round(monthlyProportion * months);
        }
    }
    return '';
}

function formatNumberWithSpaces(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

slider.noUiSlider.on('update', (values, handle) => {
    const numericValue = Math.round(values[handle]);
    const formattedValue = formatNumberWithSpaces(numericValue);

    inputs[handle].value = value.innerHTML = formattedValue;

    // Обновление #prop при изменении слайдера
    const calculatedValue = calculateProportions(numericValue, 12);
    prop.textContent = formatNumberWithSpaces(calculatedValue) + ' ₸';
});

inputs.forEach((input, handle) => {
    input.addEventListener('input', () => {
        slider.noUiSlider.setHandle(handle, input.value);

        // Обновление #prop при изменении <input>
        const numericValue = Math.round(input.value);
        const calculatedValue = calculateProportions(numericValue, 12);
        prop.textContent = formatNumberWithSpaces(calculatedValue) + ' ₸';
    });
});
