import { ComponentType, JSX } from 'react';

type RecipeComponent = ComponentType & {
    (): JSX.Element,
    title: string,
    url: string
};

function classNameToUrl(name: string) {
    return name
        .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
        .toLowerCase();
}

function defineRecipe(Component: ComponentType, title: string) {
    const RecipeComponent = Component as RecipeComponent;

    RecipeComponent.title = title;
    RecipeComponent.url = classNameToUrl(Component.name);

    return RecipeComponent;
}

export { defineRecipe };
export type { RecipeComponent };