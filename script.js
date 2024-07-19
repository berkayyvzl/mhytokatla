let speed = 0;
const propeller = document.getElementById('propeller');

document.body.addEventListener('click', () => {
    speed += 100; // Tıklama başına hız artırılır
});

function updatePropeller() {
    propeller.style.transform = `rotate(${speed}deg)`;
    speed *= 0.99; // Hız yavaşça azalır
    
    // Hızı belirli bir eşik değerin altına düşerse 0 yap
    if (speed < 0.01) {
        speed = 0;
    }
    
    requestAnimationFrame(updatePropeller);
}

updatePropeller();
