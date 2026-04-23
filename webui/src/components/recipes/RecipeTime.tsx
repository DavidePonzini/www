import type { PropsWithChildren, ReactNode } from 'react';

import RecipeMetaItem from './RecipeMetaItem';

type SharedTimeProps = {
    time: string | number;
    description?: ReactNode;
};

type CookingTimeProps = SharedTimeProps & {
    flame: ReactNode;
};

type BakingTimeProps = SharedTimeProps & {
    temperature: ReactNode;
    ovenIcon?: string;
    temperatureUnit?: string;
};

function TimeDescription({ children }: PropsWithChildren) {
    if (!children) {
        return null;
    }

    return <em>{`(${children})`}</em>;
}

function PreparationTime({ time, description }: SharedTimeProps) {
    return (
        <RecipeMetaItem icon='fa-solid fa-mitten'>
            <span>
                {time}
                {description && <> <TimeDescription>{description}</TimeDescription></>}
            </span>
        </RecipeMetaItem>
    );
}

function PreparationWait({ time, description }: SharedTimeProps) {
    return (
        <RecipeMetaItem icon='fa-regular fa-clock'>
            <span>
                {time}
                {description && <> <TimeDescription>{description}</TimeDescription></>}
            </span>
        </RecipeMetaItem>
    );
}

function CookingTime({ time, flame, description }: CookingTimeProps) {
    return (
        <RecipeMetaItem icon='fa-solid fa-fire-burner'>
            <span>
                {time}, <i className='fa-solid fa-fire-flame-simple' aria-hidden='true' /> {flame}
                {description && <> <TimeDescription>{description}</TimeDescription></>}
            </span>
        </RecipeMetaItem>
    );
}

function BakingTime({ time, temperature, ovenIcon, description, temperatureUnit = 'C' }: BakingTimeProps) {
    return (
        <RecipeMetaItem icon='fa-solid fa-temperature-high'>
            <span>
                {time}, <i className='fa-solid fa-temperature-three-quarters' aria-hidden='true' /> {temperature} °{temperatureUnit}{' '}
                <i className={ovenIcon} aria-hidden='true' />
                {description && <> <TimeDescription>{description}</TimeDescription></>}
            </span>
        </RecipeMetaItem>
    );
}

function BakingTimeBottom(props: Omit<BakingTimeProps, 'ovenIcon'>) {
    return <BakingTime {...props} ovenIcon='fa-solid fa-arrow-down' />;
}

function BakingTimeTop(props: Omit<BakingTimeProps, 'ovenIcon'>) {
    return <BakingTime {...props} ovenIcon='fa-solid fa-arrow-up' />;
}

function BakingTimeTopbottom(props: Omit<BakingTimeProps, 'ovenIcon'>) {
    return <BakingTime {...props} ovenIcon='fa-solid fa-arrows-up-down' />;
}

function BakingTimeFan(props: Omit<BakingTimeProps, 'ovenIcon'>) {
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
