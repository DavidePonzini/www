import { useEffect, useRef, useCallback } from 'react';

import book from '../res/book.png';

const characters =
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789' +
    '!@#$%^&*()=+[{]}|;:<>/?' +
    'αβγδεζηθικλμνξοπρστυφχψωΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩ';

const Banner = () => {
    const canvasRef = useRef(null);
    const bookRef = useRef(null);
    const letters = useRef([]);
    const resizeTimeout = useRef();
    const ticking = useRef(false);

    const maxLetters = 500;
    const letterMinSpeed = 1;
    const letterMaxSpeed = 2;
    const bookHeight = .3; // Percentage of viewport height
    const bookRadius = 10;
    const bookOffsetY = 25;
    const letterMinSize = 5;
    const letterMaxSize = 50;

    const updatePositions = useCallback(() => {
        function lerp(start, end, t) {
            return t < 1 ? start + (end - start) * t : end;
        }

        const canvas = canvasRef.current;
        if (!canvas)
            return;

        const scrollAmount = Math.min(1, window.scrollY / canvas.height);
        const bookPos = {
            x: .5,
            y: 1 - bookHeight * (1 - scrollAmount),
        };

        for (const letter of letters.current) {
            const progress = scrollAmount * letter.speed;
            letter.x = lerp(letter.startX, bookPos.x, progress);
            letter.y = lerp(letter.startY, bookPos.y, progress);
        }

        if (bookRef.current) {
            bookRef.current.style.transform = `translate(-50%, ${bookHeight * canvas.height * scrollAmount + bookOffsetY}px)`;
        }
    }, [bookHeight, bookOffsetY]);

    function draw() {
        const canvas = canvasRef.current;
        if (!canvas)
            return;

        const ctx = canvas.getContext('2d');
        if (!ctx)
            return;

        const scrollAmount = Math.min(1, window.scrollY / canvas.height);
        const bookPos = {
            x: .5,
            y: 1 - bookHeight * (1 - scrollAmount),
        };

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (const letter of letters.current) {
            const dx = bookPos.x - letter.x;
            const dy = bookPos.y - letter.y;
            const distance = Math.hypot(dx * canvas.width, dy * canvas.height);

            // Skip drawing letters that are too close to the book
            if (distance < bookRadius)
                continue;

            ctx.save();
            ctx.font = `${letter.size}px Times New Roman`;
            ctx.fillStyle = letter.color;
            ctx.translate(canvas.width * letter.x, canvas.height * letter.y);
            ctx.rotate(letter.rotation);
            ctx.fillText(letter.char, 0, 0);
            ctx.restore();
        }
    }

    // Initialize the canvas and set up the letters in their initial positions
    const initialize = useCallback(() => {
        const generateRandomLetter = () =>
            characters.charAt(Math.floor(Math.random() * characters.length));

        const canvas = canvasRef.current;
        if (!canvas)
            return;

        const ctx = canvas.getContext('2d');
        if (!ctx)
            return;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        letters.current = [];

        for (let i = 0; i < maxLetters; i++) {
            const x = Math.random();    // Percentage of width
            const y = Math.random();    // Percentage of height
            letters.current.push({
                startX: x,
                startY: y,
                x,
                y,
                rotation: Math.random() * Math.PI * 2,
                char: generateRandomLetter(),
                size: Math.random() * (letterMaxSize - letterMinSize) + letterMinSize,
                speed: Math.random() * (letterMaxSpeed - letterMinSpeed) + letterMinSpeed,
                color: `rgba(255, 255, 255, ${Math.random()})`,
            });
        }

        updatePositions();
        draw();
    }, [maxLetters, letterMinSize, letterMaxSize, letterMinSpeed, letterMaxSpeed, updatePositions]);

    // Initialize the canvas and set up event listeners
    useEffect(() => {
        initialize();

        function handleResize() {
            clearTimeout(resizeTimeout.current);

            resizeTimeout.current = window.setTimeout(() => {
                canvasRef.current.width = window.innerWidth;
                canvasRef.current.height = window.innerHeight;
                
                updatePositions();
                draw();
            }, 200);
        }
        window.addEventListener('resize', handleResize);

        function handleScroll() {
            if (!ticking.current) {
                requestAnimationFrame(() => {
                    if (window.scrollY < canvasRef.current.height) {
                        updatePositions();
                        draw();
                    }
                    ticking.current = false;
                });
                ticking.current = true;
            }
        }
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [initialize, updatePositions]);

    return (
        <div id="banner" style={styles.banner}>
            <img
                ref={bookRef}
                id="book"
                src={book}
                alt="Book"
                style={styles.book}
            />
            <canvas
                id="flowing-letters"
                ref={canvasRef}
                style={styles.canvas}
            />
        </div>
    );
};

const styles = {
    banner: {
        position: 'relative',
        width: '100%',
        height: 'calc(100vh - 70px)',
        overflow: 'hidden',
        background: '#101010',
    },
    book: {
        position: 'absolute',
        left: '50%',
        bottom: '300px',
        transform: 'translate(-50%, 0px)',
        width: '300px',
        zIndex: 1,
    },
    canvas: {
        position: 'absolute',
        bottom: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
    },
};

export default Banner;
