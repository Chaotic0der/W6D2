
numBoxes = 16;



function createGrid() {
    const gridContainer = document.getElementById('grid');
    for (let i = 0; i < numBoxes; i++) {
        const box = document.createElement('div');
        box.classList.add('box');
        box.addEventListener('click', toggleColor);
        gridContainer.appendChild(box);
    }
}

function toggleColor(event) {
    const box = event.target;
    box.classList.toggle('active');
}