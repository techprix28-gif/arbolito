// ===== PARTÍCULAS DE NIEVE =====
function createSnowflakes() {
    const snowContainer = document.getElementById('snowContainer');
    const snowflakeCount = 100;
    
    for (let i = 0; i < snowflakeCount; i++) {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        snowflake.innerHTML = '❄';
        snowflake.style.left = Math.random() * 100 + '%';
        snowflake.style.animationDuration = (Math.random() * 3 + 2) + 's';
        snowflake.style.animationDelay = Math.random() * 5 + 's';
        snowflake.style.fontSize = (Math.random() * 10 + 10) + 'px';
        snowflake.style.opacity = Math.random() * 0.6 + 0.4;
        snowContainer.appendChild(snowflake);
    }
}

// ===== CANVAS PARA EFECTOS MÁGICOS =====
const canvas = document.getElementById('magicCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];
let mouseX = 0;
let mouseY = 0;

class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 5 + 2;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
        this.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
        this.life = 100;
    }
    
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.life -= 1;
        if (this.size > 0.2) this.size -= 0.05;
    }
    
    draw() {
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 20;
        ctx.shadowColor = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function handleParticles() {
    for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
        
        if (particles[i].life <= 0) {
            particles.splice(i, 1);
            i--;
        }
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    handleParticles();
    requestAnimationFrame(animate);
}

// ===== EFECTOS DE MOUSE/TOUCH =====
function createParticlesAtPosition(x, y) {
    for (let i = 0; i < 5; i++) {
        particles.push(new Particle(x, y));
    }
}

document.addEventListener('mousemove', (e) => {
    mouseX = e.x;
    mouseY = e.y;
    
    if (Math.random() < 0.1) {
        createParticlesAtPosition(mouseX, mouseY);
    }
});

document.addEventListener('touchmove', (e) => {
    const touch = e.touches[0];
    mouseX = touch.clientX;
    mouseY = touch.clientY;
    
    if (Math.random() < 0.1) {
        createParticlesAtPosition(mouseX, mouseY);
    }
});

// ===== CLICK EN EL ÁRBOL =====
const treeContainer = document.querySelector('.tree-container');

treeContainer.addEventListener('click', () => {
    // Explosión de partículas
    const rect = treeContainer.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    for (let i = 0; i < 50; i++) {
        particles.push(new Particle(centerX, centerY));
    }
    
    // Efecto de sacudida
    treeContainer.style.animation = 'none';
    setTimeout(() => {
        treeContainer.style.animation = 'treeFloat 6s ease-in-out infinite, treeShake 0.5s ease-in-out';
    }, 10);
    
    setTimeout(() => {
        treeContainer.style.animation = 'treeFloat 6s ease-in-out infinite';
    }, 500);
});

// Animación de sacudida
const style = document.createElement('style');
style.innerHTML = `
    @keyframes treeShake {
        0%, 100% { transform: translateX(0) rotate(0deg); }
        25% { transform: translateX(-10px) rotate(-5deg); }
        75% { transform: translateX(10px) rotate(5deg); }
    }
`;
document.head.appendChild(style);

// ===== EFECTO DE BRILLO ALEATORIO EN LUCES =====
function randomLightBurst() {
    const lights = document.querySelectorAll('.light');
    const randomLight = lights[Math.floor(Math.random() * lights.length)];
    
    randomLight.style.transform = 'scale(1.5)';
    randomLight.style.transition = 'transform 0.3s ease';
    
    setTimeout(() => {
        randomLight.style.transform = 'scale(1)';
    }, 300);
}

setInterval(randomLightBurst, 500);

// ===== EFECTO DE RESPLANDOR EN LA ESTRELLA =====
const star = document.querySelector('.star');
let starHue = 0;

function animateStar() {
    starHue = (starHue + 1) % 360;
    star.style.filter = `hue-rotate(${starHue}deg) brightness(1.5)`;
    requestAnimationFrame(animateStar);
}

// ===== PARTÍCULAS FLOTANTES CONTINUAS =====
function createFloatingParticles() {
    const x = Math.random() * canvas.width;
    const y = canvas.height + 10;
    
    const particle = new Particle(x, y);
    particle.speedY = -Math.random() * 2 - 1;
    particle.speedX = Math.random() * 2 - 1;
    particle.life = 200;
    particles.push(particle);
}

setInterval(createFloatingParticles, 200);

// ===== RESIZE DEL CANVAS =====
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// ===== INICIALIZACIÓN =====
window.addEventListener('load', () => {
    createSnowflakes();
    animate();
    animateStar();
    
    // Mensaje de bienvenida
    console.log('%c🎄 ¡Feliz Navidad! 🎄', 'font-size: 30px; color: #00ff00; text-shadow: 0 0 10px #00ff00;');
    console.log('%c✨ Árbol creado con amor para TikTok ✨', 'font-size: 16px; color: #ffff00;');
});

// ===== EFECTO DE PARTÍCULAS AL MOVER EL MOUSE SOBRE EL ÁRBOL =====
treeContainer.addEventListener('mouseenter', () => {
    treeContainer.style.filter = 'brightness(1.2) drop-shadow(0 0 50px rgba(0, 255, 0, 0.8))';
});

treeContainer.addEventListener('mouseleave', () => {
    treeContainer.style.filter = 'drop-shadow(0 10px 30px rgba(0, 255, 0, 0.3))';
});

// ===== EFECTO DE NIEVE INTERACTIVA =====
document.addEventListener('click', (e) => {
    for (let i = 0; i < 20; i++) {
        const particle = new Particle(e.clientX, e.clientY);
        particle.speedX = (Math.random() - 0.5) * 10;
        particle.speedY = (Math.random() - 0.5) * 10;
        particle.color = '#ffffff';
        particles.push(particle);
    }
});

// ===== CAMBIO DE COLOR DE FONDO ALEATORIO =====
let backgroundHue = 0;
function animateBackground() {
    backgroundHue = (backgroundHue + 0.1) % 360;
    document.querySelector('.background').style.filter = `hue-rotate(${backgroundHue}deg)`;
    requestAnimationFrame(animateBackground);
}
animateBackground();
