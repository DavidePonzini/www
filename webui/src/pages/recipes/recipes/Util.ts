import { JSX } from 'react';

type RecipeComponent = (() => JSX.Element) & {
    title: string,
    url: string
};

type RecipeFunction = (() => JSX.Element) & {
    title?: string,
    url?: string
};

// function classNameToUrl(name: string) {
//     return name
//         .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
//         .toLowerCase();
// }

function titleToUrl(title: string) {
    return title
        .normalize('NFD')                    // à -> a + `
        .replace(/[\u0300-\u036f]/g, '')     // remove accents
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')         // spaces and punctuation -> -
        .replace(/^-+|-+$/g, '');            // trim leading/trailing -
}

function defineRecipe(Component: RecipeFunction, title: string) {
    Component.title = title;
    Component.url = titleToUrl(title);

    return Component as RecipeComponent;
}

export { defineRecipe };
export type { RecipeComponent };