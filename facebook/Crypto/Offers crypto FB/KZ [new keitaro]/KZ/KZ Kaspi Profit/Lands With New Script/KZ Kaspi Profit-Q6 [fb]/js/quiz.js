// const form = document.getElementById('quiz-form');
// const questionBlocks = Array.from(form.getElementsByClassName('question-block'));
// let currentBlockIndex = 0;
// let isTransitioning = false;

// form.addEventListener('change', (event) => {
//     if (isTransitioning) {
//         return;
//     }

//     const selectedInput = event.target;
//     const currentBlock = questionBlocks[currentBlockIndex];
//     console.log(currentBlock);

//     if (currentBlockIndex === questionBlocks.length - 1) {
//         return;
//     }

//     isTransitioning = true;

//     // currentBlock.classList.add('animate-left');

//     setTimeout(() => {
//         currentBlock.style.display = 'none';
//         // currentBlock.classList.remove('animate-left');
//         currentBlockIndex++;

//         const nextBlock = questionBlocks[currentBlockIndex];
//         nextBlock.style.display = 'block';
//         nextBlock.classList.add('animate-right');

//         isTransitioning = false;
//     }, 500);

//     if (selectedInput.type === 'radio') {
//         selectedInput.parentElement.classList.add('animate-input');
//         setTimeout(() => {
//             selectedInput.parentElement.classList.remove('animate-input');
//         }, 500);
//     }
// });

const form = document.getElementById('quiz-form');
const questionBlocks = Array.from(form.getElementsByClassName('question-block'));
let currentBlockIndex = 0;
let isTransitioning = false;

form.addEventListener('change', (event) => {
    if (isTransitioning) {
        return;
    }

    const selectedInput = event.target;
    const currentBlock = questionBlocks[currentBlockIndex];

    if (currentBlockIndex === questionBlocks.length - 1) {
        return;
    }

    isTransitioning = true;

    setTimeout(() => {
        currentBlock.style.opacity = '0';
        currentBlock.style.pointerEvents = 'none';

        setTimeout(() => {
            currentBlock.style.display = 'none';
            currentBlock.style.opacity = '1';
            currentBlock.style.pointerEvents = 'auto';
            currentBlockIndex++;

            const nextBlock = questionBlocks[currentBlockIndex];
            nextBlock.style.display = 'block';
            nextBlock.classList.add('animate-right');

            isTransitioning = false;
        }, 300);
    }, 300);

    if (selectedInput.type === 'radio') {
        selectedInput.parentElement.classList.add('animate-input');
        setTimeout(() => {
            selectedInput.parentElement.classList.remove('animate-input');
        }, 500);
    }
});

const startTestButton = document.getElementById('startTest');
startTestButton.addEventListener('click', () => {
    const currentBlock = questionBlocks[currentBlockIndex];
    currentBlock.style.opacity = '0';
    currentBlock.style.pointerEvents = 'none';

    setTimeout(() => {
        currentBlock.style.display = 'none';
        currentBlock.style.opacity = '1';
        currentBlock.style.pointerEvents = 'auto';
        currentBlockIndex++;

        const nextBlock = questionBlocks[currentBlockIndex];
        nextBlock.style.display = 'block';
        nextBlock.classList.add('animate-right');
    }, 300);
});