// ===== FRASES NAVIDEÑAS =====
const christmasPhrases = [
    "🎄 ¡Que esta Navidad llene tu corazón de amor y alegría!",
    "✨ La magia de la Navidad está en compartir momentos especiales",
    "🎅 Que Papá Noel traiga felicidad a tu hogar",
    "⭐ Brilla como la estrella que eres esta Navidad",
    "🎁 El mejor regalo es estar rodeado de quienes amas",
    "❄️ Que la paz de la Navidad permanezca todo el año",
    "🔔 Escucha las campanas de la felicidad navideña",
    "🕯️ Que tu luz interior ilumine a otros esta Navidad",
    "🎄 La Navidad es amor, esperanza y nuevos comienzos",
    "✨ Que cada copo de nieve traiga una bendición",
    "🎅 Ho ho ho! ¡Felicidad y prosperidad para ti!",
    "⭐ Eres el regalo más especial de esta Navidad",
    "🎁 Que tus sueños se hagan realidad en este año nuevo",
    "❄️ La Navidad es el momento perfecto para ser feliz",
    "🔔 Que la música navideña alegre tu alma",
    "🕯️ Enciende la llama de la esperanza esta Navidad",
    "🎄 Que el espíritu navideño te acompañe siempre",
    "✨ Cree en la magia, cree en la Navidad",
    "🎅 Santa te desea un año lleno de sorpresas maravillosas",
    "⭐ Que tu estrella brille más que nunca",
    "🎁 Abre tu corazón a la alegría navideña",
    "❄️ Que la pureza de la nieve limpie tu camino",
    "🔔 ¡Feliz Navidad! Que suenen las campanas de la victoria",
    "🕯️ Que la luz de la Navidad guíe tus pasos",
    "🎄 En Navidad, todo es posible si crees",
    "✨ Que la magia navideña transforme tu vida",
    "🎅 Papá Noel sabe que has sido increíble este año",
    "⭐ Eres una estrella que ilumina la Navidad",
    "🎁 El amor es el mejor regalo que puedes dar",
    "❄️ Que cada día sea blanco como la nieve navideña",
    "🔔 Celebra la vida, celebra la Navidad",
    "🕯️ Que tu corazón arda con la pasión de la Navidad",
    "🎄 La Navidad es el momento de perdonar y amar",
    "✨ Que los milagros navideños lleguen a tu vida",
    "🎅 Santa dice: ¡Eres maravilloso tal como eres!",
    "⭐ Que tu luz interior nunca se apague",
    "🎁 Regala sonrisas, regala amor esta Navidad",
    "❄️ Que la frescura de la Navidad renueve tu espíritu",
    "🔔 ¡Ding dong! La felicidad está tocando a tu puerta",
    "🕯️ Que la calidez navideña derrita cualquier tristeza",
    "🎄 En Navidad, los corazones se unen",
    "✨ Que la estrella de Belén ilumine tu camino",
    "🎅 Ho ho ho! ¡Eres especial y único!",
    "⭐ Brilla, sonríe y disfruta esta Navidad",
    "🎁 Que recibas todo lo que tu corazón desea",
    "❄️ Que la paz navideña inunde tu hogar",
    "🔔 Suena la campana de la abundancia para ti",
    "🕯️ Que tu luz inspire a otros a ser mejores",
    "🎄 La Navidad es tiempo de agradecer y celebrar",
    "✨ Que la magia navideña te sorprenda cada día",
    "🎅 Santa te envía un abrazo lleno de amor",
    "⭐ Eres la estrella más brillante del firmamento",
    "🎁 Que tus regalos sean tantos como tus bendiciones",
    "❄️ Que la pureza navideña limpie tu alma",
    "🔔 ¡Felices fiestas! Que la alegría nunca te falte",
    "🕯️ Que la llama de la fe arda en tu corazón",
    "🎄 En Navidad, todo se llena de color y vida",
    "✨ Que los ángeles navideños te protejan",
    "🎅 Papá Noel dice: ¡Sigue siendo increíble!",
    "⭐ Que tu brillo contagie a todos a tu alrededor",
    "🎁 El mejor regalo eres tú para quienes te aman",
    "❄️ Que la Navidad traiga frescura a tu vida",
    "🔔 Que las campanas anuncien tu felicidad",
    "🕯️ Que tu luz nunca se apague, ni en la oscuridad",
    "🎄 La Navidad es el momento de ser tu mejor versión",
    "✨ Que la magia navideña haga realidad tus deseos",
    "🎅 Santa te desea salud, amor y prosperidad",
    "⭐ Que tu estrella guíe a otros hacia la felicidad",
    "🎁 Que cada regalo que des vuelva multiplicado",
    "❄️ Que la Navidad enfríe tus preocupaciones",
    "🔔 ¡Tin tin! La fortuna está llamando a tu puerta",
    "🕯️ Que la luz de la esperanza nunca se extinga",
    "🎄 En Navidad, los sueños se vuelven realidad",
    "✨ Que la estrella de la Navidad te bendiga",
    "🎅 Ho ho ho! ¡Eres el regalo más valioso!",
    "⭐ Que tu brillo ilumine incluso los días más oscuros",
    "🎁 Que recibas amor en abundancia esta Navidad",
    "❄️ Que la nieve navideña cubra tus penas",
    "🔔 Que las campanas de la victoria suenen para ti",
    "🕯️ Que tu luz sea faro de esperanza para otros",
    "🎄 La Navidad es tiempo de renovar la fe",
    "✨ Que los milagros navideños transformen tu vida",
    "🎅 Santa sabe que mereces lo mejor",
    "⭐ Que tu estrella nunca deje de brillar",
    "🎁 Que tus manos siempre tengan algo que dar",
    "❄️ Que la pureza de la Navidad te renueve",
    "🔔 ¡Feliz Navidad! Que la alegría sea tu compañera",
    "🕯️ Que la calidez navideña abrace tu corazón",
    "🎄 En Navidad, todo es amor y gratitud",
    "✨ Que la magia navideña te acompañe siempre",
    "🎅 Papá Noel te envía bendiciones infinitas",
    "⭐ Que tu luz interior ilumine el mundo",
    "🎁 Que cada día sea un regalo de la vida",
    "❄️ Que la Navidad traiga paz a tu alma",
    "🔔 Que las campanas anuncien tu éxito",
    "🕯️ Que tu luz guíe a quienes están perdidos",
    "🎄 La Navidad es el momento de amar sin límites",
    "✨ Que la estrella de la Navidad te proteja",
    "🎅 Santa dice: ¡Eres extraordinario!",
    "⭐ Que tu brillo contagie alegría a todos",
    "🎁 Que recibas todo el amor que has dado"
];

let usedPhrases = [];
let currentPhraseElement = null;

// Función para obtener una frase aleatoria sin repetir
function getRandomPhrase() {
    if (usedPhrases.length === christmasPhrases.length) {
        usedPhrases = []; // Reiniciar cuando se hayan usado todas
    }

    let availablePhrases = christmasPhrases.filter(phrase => !usedPhrases.includes(phrase));
    let randomPhrase = availablePhrases[Math.floor(Math.random() * availablePhrases.length)];
    usedPhrases.push(randomPhrase);

    return randomPhrase;
}

// Función para mostrar la frase
function showPhrase(phrase, x, y) {
    // Remover frase anterior si existe
    if (currentPhraseElement) {
        currentPhraseElement.remove();
    }

    // Crear elemento de frase
    const phraseElement = document.createElement('div');
    phraseElement.className = 'christmas-phrase';
    phraseElement.textContent = phrase;
    phraseElement.style.left = x + 'px';
    phraseElement.style.top = y + 'px';

    document.body.appendChild(phraseElement);
    currentPhraseElement = phraseElement;

    // Animar entrada
    setTimeout(() => {
        phraseElement.classList.add('show');
    }, 10);

    // Remover después de 4 segundos
    setTimeout(() => {
        phraseElement.classList.remove('show');
        setTimeout(() => {
            phraseElement.remove();
            if (currentPhraseElement === phraseElement) {
                currentPhraseElement = null;
            }
        }, 500);
    }, 4000);
}

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

    // ===== EVENTOS DE CLICK EN LOS REGALOS =====
    const presents = document.querySelectorAll('.present');

    presents.forEach((present, index) => {
        present.addEventListener('click', (e) => {
            e.stopPropagation(); // Evitar que se active el click general

            // Obtener posición del regalo
            const rect = present.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            // Explosión de partículas del color del regalo
            for (let i = 0; i < 30; i++) {
                const particle = new Particle(centerX, centerY);
                particle.speedX = (Math.random() - 0.5) * 8;
                particle.speedY = (Math.random() - 0.5) * 8;
                particles.push(particle);
            }

            // Efecto de rebote en el regalo
            present.style.transform = 'scale(1.2) translateY(-20px)';
            present.style.transition = 'transform 0.3s ease';

            setTimeout(() => {
                present.style.transform = 'scale(1) translateY(0)';
            }, 300);

            // Mostrar frase aleatoria
            const phrase = getRandomPhrase();
            showPhrase(phrase, window.innerWidth / 2, window.innerHeight / 2);
        });

        // Efecto hover en regalos
        present.addEventListener('mouseenter', () => {
            present.style.filter = 'brightness(1.3) drop-shadow(0 0 20px rgba(255, 215, 0, 0.8))';
            present.style.cursor = 'pointer';
        });

        present.addEventListener('mouseleave', () => {
            present.style.filter = 'none';
        });
    });
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
