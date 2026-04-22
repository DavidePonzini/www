import RecipeMetaItem from './RecipeMetaItem';
import { formatRecipeDuration } from './RecipeFormat';

function TimeDescription({ children }) {
    if (!children) {
        return null;
    }

    return <em>{`(${children})`}</em>;
}

function PreparationTime({ time, description }) {
    return (
        <RecipeMetaItem icon='fa-solid fa-mitten'>
            <span>
                {formatRecipeDuration(time)}
                {description && <> <TimeDescription>{description}</TimeDescription></>}
            </span>
        </RecipeMetaItem>
    );
}

function PreparationWait({ time, description }) {
    return (
        <RecipeMetaItem icon='fa-regular fa-clock'>
            <span>
                {formatRecipeDuration(time)}
                {description && <> <TimeDescription>{description}</TimeDescription></>}
            </span>
        </RecipeMetaItem>
    );
}

function CookingTime({ time, flame, description }) {
    return (
        <RecipeMetaItem icon='fa-solid fa-fire-burner'>
            <span>
                {formatRecipeDuration(time)}, <i className='fa-solid fa-fire-flame-simple' aria-hidden='true' /> {flame}
                {description && <> <TimeDescription>{description}</TimeDescription></>}
            </span>
        </RecipeMetaItem>
    );
}

function BakingTime({ time, temperature, ovenIcon, description, temperatureUnit = 'C' }) {
    return (
        <RecipeMetaItem icon='fa-solid fa-temperature-high'>
            <span>
                {formatRecipeDuration(time)}, <i className='fa-solid fa-temperature-three-quarters' aria-hidden='true' /> {temperature} °{temperatureUnit}{' '}
                <i className={ovenIcon} aria-hidden='true' />
                {description && <> <TimeDescription>{description}</TimeDescription></>}
            </span>
        </RecipeMetaItem>
    );
}

function BakingTimeBottom(props) {
    return <BakingTime {...props} ovenIcon='fa-solid fa-arrow-down' />;
}

function BakingTimeTop(props) {
    return <BakingTime {...props} ovenIcon='fa-solid fa-arrow-up' />;
}

function BakingTimeTopbottom(props) {
    return <BakingTime {...props} ovenIcon='fa-solid fa-arrows-up-down' />;
}

function BakingTimeFan(props) {
    return <BakingTime {...props} ovenIcon='fa-solid fa-fan' />;
}

export {
    PreparationTime,
    PreparationWait,
    CookingTime,
    BakingTimeBottom,
    BakingTimeTop,
    BakingTimeTopbottom,
    BakingTimeFan
};
