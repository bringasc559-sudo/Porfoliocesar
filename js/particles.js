const canvas = document.getElementById('background');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
const particleCount = 80;

for(let i = 0; i < particleCount; i++){
    particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5
    });
}

function animate(){
    ctx.clearRect(0,0,canvas.width, canvas.height);
    particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI*2);
        ctx.fillStyle = 'rgba(37,211,102,0.8)';
        ctx.fill();
        p.x += p.speedX;
        p.y += p.speedY;

        if(p.x < 0) p.x = canvas.width;
        if(p.x > canvas.width) p.x = 0;
        if(p.y < 0) p.y = canvas.height;
        if(p.y > canvas.height) p.y = 0;
    });
    requestAnimationFrame(animate);
}

animate();
