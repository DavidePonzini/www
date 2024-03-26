// Generate random letters
function generateRandomLetter() {
    const characters = 
        'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ' +
        '0123456789' +
        '!@#$%^&*()=+[{]}|;:<>/?' +
        'αβγδεζηθικλμνξοπρστυφχψωΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩ' +
        // '〇一二三四五六七八九' +
        // '人一年大国十二日中三本四出五上東行間下子生見五六七八九十百千万円時' +
        '';

    // Generate a random index within the combined alphabet length
    const randomIndex = Math.floor(Math.random() * characters.length);

    // Return the character at the random index
    return characters[randomIndex];
}

// Initialize canvas
const canvas = document.getElementById('flowing-letters');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = [];
const maxLetters = 500;
const letterSpeed = 1;
const book_height = 75;
const min_spawn_height = 200;
const letter_min_size = 5;
const letter_max_size = 50;

// Create letters
for (let i = 0; i < maxLetters; i++) {
    let color = Math.random() * 255;
    letters.push({
        x: Math.random() * canvas.width,
        y: Math.random() * (canvas.height - min_spawn_height),
        rotation: Math.random() * Math.PI * 2, // Random rotation
        char: generateRandomLetter(),
        size: Math.random() * (letter_max_size - letter_min_size) + letter_min_size,
        speed: Math.random() * letterSpeed + 0.5,
        color: `rgba(255, 255, 255, ${Math.random()})`, // Constant gray color
    });
}

// Draw letters
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    letters.forEach(letter => {
        ctx.save();
        ctx.font = `${letter.size}px Times New Roman`; // Set font size and family
        ctx.fillStyle = letter.color; // Color of the letters
        ctx.translate(letter.x, letter.y);
        ctx.rotate(letter.rotation);
        ctx.fillText(letter.char, 0, 0);
        // ctx.fillText(letter.char, letter.x, letter.y);
        ctx.restore();
    });
}

// Update letter positions
function update() {
    bookPosition = { x: canvas.width / 2, y: canvas.height - book_height }; // Adjust book position

    letters.forEach(letter => {
        const dx = bookPosition.x - letter.x;
        const dy = bookPosition.y - letter.y;
        const distanceToBook = Math.sqrt(dx * dx + dy * dy);
        const speedX = dx / distanceToBook * letter.speed;
        const speedY = dy / distanceToBook * letter.speed;
        letter.x += speedX;
        letter.y += speedY;
        if (distanceToBook < 10) {
            letter.x = Math.random() * canvas.width;
            letter.y = Math.random() * (canvas.height - min_spawn_height);
        }
    });
}

// Animation loop
function animate() {
    if (window.scrollY < canvas.height) {   // only update if visible
        update();
        draw();
    }

    requestAnimationFrame(animate);
}

animate();

// Adjust canvas size on window resize
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// Adjust canvas size on scroll
window.addEventListener('scroll', () => {
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;
});