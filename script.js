//your JS code here. If required.
const squares = document.querySelectorAll('.square');

squares.forEach(focusedSquare => {
    focusedSquare.addEventListener('mouseenter', () => {
        squares.forEach(square => {
            if (square === focusedSquare) {
                square.style.backgroundColor = '#E6E6FA'; 
            } else {
                square.style.backgroundColor = '#6F4E37'; 
            }
        });
    });

    focusedSquare.addEventListener('mouseleave', () => {
        squares.forEach(square => {
            square.style.backgroundColor = '#E6E6FA'; // lavender
        });
    });
});