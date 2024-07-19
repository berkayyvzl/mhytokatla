let speed = 0;
const speedIncrease = 5; // Her tıklamada artacak hız miktarı
const propeller = document.getElementById('propeller');
const clickSound = document.getElementById('click-sound');

document.body.addEventListener('click', () => {
    speed += speedIncrease; // Tıklama başına hız artırılır
    clickSound.currentTime = 0;
    clickSound.play(); // Ses dosyasını çal
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
