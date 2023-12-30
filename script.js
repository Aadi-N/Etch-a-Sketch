const container = document.querySelector('#container');

function createTwoDimenArray(length) {
    const cellsArr = new Array(length);
    for(let i = 0; i < length; i++) {
        cellsArr[i] = new Array(length);
    }
    return cellsArr;
}

const cellsArr = createTwoDimenArray(16);

// cellsArr.forEach(element => {
//     for(let i = 0; i < element.length; i++) {
//         element[i] = i+1;
//         console.log(element[i]);
//     }
//     console.log('done');
// });

cellsArr.forEach(element => {
    for(let i = 0; i < element.length; i++) {
        element[i] = document.createElement('div');
        element[i].classList.add('cell');
        // element[i].textContent = i;
    }
})

cellsArr.forEach(element => {
    for(let i = 0; i < element.length; i++) {
        container.appendChild(element[i]);
    }
})