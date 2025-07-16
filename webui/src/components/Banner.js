import { useEffect, useRef } from 'react';

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
    const bookHeight = 300;
    const bookRadius = 10;
    const bookOffsetY = 25;
    const letterMinSize = 5;
    const letterMaxSize = 50;

    const generateRandomLetter = () =>
        characters.charAt(Math.floor(Math.random() * characters.length));

    const lerp = (start, end, t) =>
        t < 1 ? start + (end - start) * t : end;

    const update = (canvas) => {
        const scrollAmount = Math.min(1, window.scrollY / canvas.height);
        const bookPos = {
            x: canvas.width / 2,
            y: canvas.height - bookHeight * (1 - scrollAmount),
        };

        for (const letter of letters.current) {
            const progress = scrollAmount * letter.speed;
            letter.x = lerp(letter.startX, bookPos.x, progress);
            letter.y = lerp(letter.startY, bookPos.y, progress);
        }

        if (bookRef.current) {
            bookRef.current.style.transform = `translate(-50%, ${
                bookHeight * scrollAmount + bookOffsetY
            }px)`;
        }
    };

    const draw = (ctx, canvas) => {
        const scrollAmount = Math.min(1, window.scrollY / canvas.height);
        const bookPos = {
            x: canvas.width / 2,
            y: canvas.height - bookHeight * (1 - scrollAmount),
        };

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (const letter of letters.current) {
            const dx = bookPos.x - letter.x;
            const dy = bookPos.y - letter.y;
            const distance = Math.hypot(dx, dy);
            if (distance < bookRadius) continue;

            ctx.save();
            ctx.font = `${letter.size}px Times New Roman`;
            ctx.fillStyle = letter.color;
            ctx.translate(letter.x, letter.y);
            ctx.rotate(letter.rotation);
            ctx.fillText(letter.char, 0, 0);
            ctx.restore();
        }
    };

    const initialize = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        letters.current = [];

        for (let i = 0; i < maxLetters; i++) {
            const x = Math.random() * canvas.width;
            const y = Math.random() * canvas.height;
            letters.current.push({
                startX: x,
                startY: y,
                x,
                y,
                rotation: Math.random() * Math.PI * 2,
                char: generateRandomLetter(),
                size:
                    Math.random() * (letterMaxSize - letterMinSize) +
                    letterMinSize,
                speed:
                    letterMinSpeed +
                    Math.random() * (letterMaxSpeed - letterMinSpeed),
                color: `rgba(255, 255, 255, ${Math.random()})`,
            });
        }

        update(canvas);
        draw(ctx, canvas);
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        initialize();

        const handleResize = () => {
            clearTimeout(resizeTimeout.current);
            resizeTimeout.current = window.setTimeout(() => {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
                update(canvas);
                const ctx = canvas.getContext('2d');
                if (ctx) draw(ctx, canvas);
            }, 200);
        };

        const handleScroll = () => {
            if (!ticking.current) {
                requestAnimationFrame(() => {
                    if (window.scrollY < canvas.height) {
                        update(canvas);
                        const ctx = canvas.getContext('2d');
                        if (ctx) draw(ctx, canvas);
                    }
                    ticking.current = false;
                });
                ticking.current = true;
            }
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);     // eslint-disable-line react-hooks/exhaustive-deps

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
        height: 'calc(100vh - 56px)',
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
