function formatRecipeDuration(value) {
    if (typeof value !== 'string') {
        return value;
    }

    const rawValue = value.trim();

    if (!rawValue) {
        return rawValue;
    }

    const parts = rawValue.split(':');

    if (parts.length !== 3 && parts.length !== 4) {
        return rawValue;
    }

    if (!parts.every(function(part) {
        return /^\d+$/.test(part);
    })) {
        return rawValue;
    }

    const normalizedParts = parts.map(function(part) {
        return Number(part);
    });

    const [days, hours, minutes, seconds] = parts.length === 4
        ? normalizedParts
        : [0, normalizedParts[0], normalizedParts[1], normalizedParts[2]];

    const formattedParts = [];

    if (days > 0) {
        formattedParts.push(`${days} g`);
    }

    if (hours > 0) {
        formattedParts.push(`${hours} h`);
    }

    if (minutes > 0) {
        formattedParts.push(`${minutes} min`);
    }

    if (seconds > 0 || formattedParts.length === 0) {
        formattedParts.push(`${seconds} sec`);
    }

    return formattedParts.join(' ');
}

function formatRecipeDate(value) {
    if (typeof value !== 'string') {
        return value;
    }

    const rawValue = value.trim();

    if (!rawValue) {
        return rawValue;
    }

    return new Intl.DateTimeFormat('it-IT', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    }).format(new Date(rawValue));
}

export {
    formatRecipeDuration,
    formatRecipeDate
};
